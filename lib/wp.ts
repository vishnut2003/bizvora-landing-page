import { cache } from "react";
import { FOOTER_COLUMNS, NAV_LINKS } from "@/lib/bizvora";
import type { NavGroup, NavLink } from "@/types/content";

/**
 * The headless WordPress client behind /blogs. Server-only by convention:
 * client components import types from here and nothing else.
 *
 * Caching, per the brief: the list is always fresh (`no-store`), the single
 * post is ISR with an hourly revalidate and tags for a future webhook.
 */

const RAW_BASE = process.env.WP_BASE_URL;
if (!RAW_BASE) {
  throw new Error(
    "WP_BASE_URL is not set. Add it to .env.local, e.g. WP_BASE_URL=https://wordpress.bizvoraone.com",
  );
}
const BASE = RAW_BASE.trim().replace(/\/+$/, "");
const WP_HOST = new URL(BASE).host;
const API = `${BASE}/wp-json/wp/v2`;

export const POSTS_PER_PAGE = 9;
const POST_REVALIDATE = 3600;
const TAG_REVALIDATE = 86400;
const WORDS_PER_MINUTE = 220;

/**
 * `featured_media_src_url` is computed from `featured_media` on the WP side,
 * so `featured_media` MUST stay in every field list or the URL comes back
 * null (verified against the live API).
 */
const SUMMARY_FIELDS = [
  "id",
  "slug",
  "date_gmt",
  "modified_gmt",
  "title",
  "excerpt",
  "featured_media",
  "featured_media_src_url",
  "tags",
  "yoast_head_json.twitter_misc",
].join(",");

const POST_FIELDS = [
  "id",
  "slug",
  "date_gmt",
  "modified_gmt",
  "title",
  "excerpt",
  "content",
  "featured_media",
  "featured_media_src_url",
  "tags",
  "yoast_head_json",
].join(",");

// --- raw WP shapes ---------------------------------------------------------

interface WpRendered {
  rendered: string;
  protected?: boolean;
}

interface WpYoast {
  title?: string;
  description?: string;
  og_title?: string;
  og_description?: string;
  article_published_time?: string;
  article_modified_time?: string;
  author?: string;
  twitter_card?: string;
  twitter_misc?: Record<string, string>;
}

interface WpPostRaw {
  id: number;
  slug: string;
  date_gmt: string;
  modified_gmt: string;
  title: WpRendered;
  excerpt: WpRendered;
  content?: WpRendered;
  featured_media: number;
  featured_media_src_url: string | null;
  tags?: number[];
  yoast_head_json?: WpYoast;
}

interface WpTagRaw {
  id: number;
  name: string;
  slug: string;
}

// --- public shapes ---------------------------------------------------------

export interface BlogTag {
  id: number;
  name: string;
  slug: string;
}

/** A list card's worth of a post. Plain JSON, safe to hand to a client island. */
export interface BlogSummary {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  /** ISO 8601 in UTC, e.g. "2026-09-02T14:10:00Z". */
  date: string;
  /** Formatted on the server ("2 September 2026") so the client never formats dates. */
  dateLabel: string;
  readingMinutes: number | null;
  image: string | null;
  tagIds: number[];
}

export interface BlogPost extends BlogSummary {
  modified: string;
  /** content.rendered after internal-link rewriting and a light sanitise. */
  html: string;
  tags: BlogTag[];
  author: string;
  seo: {
    title: string;
    description: string;
    publishedTime: string;
    modifiedTime: string;
    twitterCard: string;
  };
}

export interface PostPage {
  posts: BlogSummary[];
  total: number;
  totalPages: number;
}

export class WpError extends Error {
  constructor(
    message: string,
    readonly status?: number,
    readonly code?: string,
  ) {
    super(message);
    this.name = "WpError";
  }
}

// --- transport -------------------------------------------------------------

async function wpFetch<T>(
  path: string,
  init: RequestInit,
): Promise<{ data: T; headers: Headers }> {
  const res = await fetch(`${API}${path}`, {
    ...init,
    headers: { Accept: "application/json", ...init.headers },
  });
  if (!res.ok) {
    let code: string | undefined;
    try {
      code = ((await res.json()) as { code?: string }).code;
    } catch {
      // non-JSON error body; fall through with no code
    }
    // WP answers a page past the last one with 400 rather than [] — treat
    // it as an empty page so a stale `total` can never crash the list.
    if (code === "rest_post_invalid_page_number") {
      return { data: [] as unknown as T, headers: res.headers };
    }
    throw new WpError(`WordPress responded ${res.status} for ${path}`, res.status, code);
  }
  return { data: (await res.json()) as T, headers: res.headers };
}

const headerCount = (headers: Headers, name: string) =>
  Number(headers.get(name) ?? 0) || 0;

// --- queries ---------------------------------------------------------------

/** One page of the list, newest first. Always fresh: the list is never cached. */
export async function getPosts({
  page = 1,
  perPage = POSTS_PER_PAGE,
}: { page?: number; perPage?: number } = {}): Promise<PostPage> {
  const { data, headers } = await wpFetch<WpPostRaw[]>(
    `/posts?per_page=${perPage}&page=${page}&orderby=date&order=desc&_fields=${SUMMARY_FIELDS}`,
    { cache: "no-store" },
  );
  return {
    posts: data.map(toSummary),
    total: headerCount(headers, "x-wp-total"),
    totalPages: headerCount(headers, "x-wp-totalpages"),
  };
}

/** The newest posts other than `excludeId`, for the "keep reading" strip. */
export async function getRelatedPosts(excludeId: number, limit = 3): Promise<BlogSummary[]> {
  try {
    const { data } = await wpFetch<WpPostRaw[]>(
      `/posts?per_page=${limit}&exclude=${excludeId}&orderby=date&order=desc&_fields=${SUMMARY_FIELDS}`,
      { next: { revalidate: POST_REVALIDATE, tags: ["wp-posts"] } },
    );
    return data.map(toSummary);
  } catch {
    return [];
  }
}

/** Tag names for a set of ids, in the order the ids were given. */
export async function getTags(ids: number[]): Promise<BlogTag[]> {
  if (ids.length === 0) return [];
  const { data } = await wpFetch<WpTagRaw[]>(
    `/tags?include=${ids.join(",")}&per_page=100&_fields=id,name,slug`,
    { next: { revalidate: TAG_REVALIDATE, tags: ["wp-tags"] } },
  );
  const byId = new Map(data.map((tag) => [tag.id, tag]));
  return ids
    .map((id) => byId.get(id))
    .filter((tag): tag is WpTagRaw => tag !== undefined)
    .map(({ id, name, slug }) => ({ id, name: decodeEntities(name), slug }));
}

/**
 * The full post, or null when the slug is unknown. Cached for an hour and
 * tagged per slug; wrapped in React cache() so generateMetadata and the page
 * share one round trip.
 */
export const getPostBySlug = cache(async (slug: string): Promise<BlogPost | null> => {
  const { data } = await wpFetch<WpPostRaw[]>(
    `/posts?slug=${encodeURIComponent(slug)}&_fields=${POST_FIELDS}`,
    { next: { revalidate: POST_REVALIDATE, tags: ["wp-posts", `wp-post:${slug}`] } },
  );
  const raw = data[0];
  if (!raw) return null;
  const tags = await getTags(raw.tags ?? []);
  return toPost(raw, tags);
});

/** Every published slug, for generateStaticParams. Never fails a build. */
export async function getAllSlugs(): Promise<string[]> {
  try {
    const slugs: string[] = [];
    let page = 1;
    let totalPages = 1;
    do {
      const { data, headers } = await wpFetch<{ slug: string }[]>(
        `/posts?per_page=100&page=${page}&_fields=slug`,
        { next: { revalidate: POST_REVALIDATE, tags: ["wp-posts"] } },
      );
      slugs.push(...data.map((post) => post.slug));
      totalPages = headerCount(headers, "x-wp-totalpages");
      page += 1;
    } while (page <= totalPages);
    return slugs;
  } catch {
    return [];
  }
}

// --- mappers ---------------------------------------------------------------

function toSummary(raw: WpPostRaw): BlogSummary {
  const date = toIso(raw.date_gmt);
  return {
    id: raw.id,
    slug: raw.slug,
    title: stripHtml(raw.title.rendered),
    excerpt: stripHtml(raw.excerpt.rendered),
    date,
    dateLabel: formatDate(date),
    readingMinutes:
      yoastMinutes(raw.yoast_head_json) ??
      (raw.content ? estimateMinutes(raw.content.rendered) : null),
    image: raw.featured_media_src_url || null,
    tagIds: raw.tags ?? [],
  };
}

function toPost(raw: WpPostRaw, tags: BlogTag[]): BlogPost {
  const summary = toSummary(raw);
  const yoast = raw.yoast_head_json ?? {};
  const modified = toIso(raw.modified_gmt);
  return {
    ...summary,
    modified,
    html: sanitiseHtml(rewriteInternalLinks(raw.content?.rendered ?? "")),
    tags,
    author: yoast.author?.trim() || "Bizvora Team",
    seo: {
      title: yoast.title?.trim() || summary.title,
      description:
        yoast.description?.trim() || yoast.og_description?.trim() || summary.excerpt.slice(0, 160),
      publishedTime: yoast.article_published_time ?? summary.date,
      modifiedTime: yoast.article_modified_time ?? modified,
      twitterCard: yoast.twitter_card ?? "summary_large_image",
    },
  };
}

// --- text helpers ----------------------------------------------------------

const NAMED_ENTITIES: Record<string, string> = {
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  hellip: "…",
  ndash: "–",
  mdash: "—",
  lsquo: "‘",
  rsquo: "’",
  ldquo: "“",
  rdquo: "”",
  laquo: "«",
  raquo: "»",
  copy: "©",
  reg: "®",
  trade: "™",
  times: "×",
};

/** Decodes the entities WP puts in rendered titles/excerpts. `&amp;` goes last. */
export function decodeEntities(input: string): string {
  return input
    .replace(/&#(\d+);/g, (_, dec: string) => String.fromCodePoint(Number(dec)))
    .replace(/&#x([0-9a-f]+);/gi, (_, hex: string) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&([a-z]+);/gi, (match, name: string) => NAMED_ENTITIES[name.toLowerCase()] ?? match)
    .replace(/&amp;/g, "&");
}

/** Tags out, WP's "[…]" read-more marker out, entities decoded, whitespace collapsed. */
export function stripHtml(html: string): string {
  return decodeEntities(
    html
      .replace(/<[^>]+>/g, " ")
      .replace(/\[&hellip;\]|\[…\]/g, "")
      .replace(/\s+/g, " "),
  ).trim();
}

/** Yoast's precomputed "Est. reading time": "8 minutes" → 8. */
function yoastMinutes(yoast: WpYoast | undefined): number | null {
  const label = yoast?.twitter_misc?.["Est. reading time"];
  const match = label?.match(/(\d+)/);
  return match ? Number(match[1]) : null;
}

function estimateMinutes(html: string): number {
  const words = stripHtml(html).split(" ").filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

/** WP dates carry no zone and the site runs in UTC, so `date_gmt` + "Z" is exact. */
function toIso(dateGmt: string): string {
  return dateGmt.endsWith("Z") ? dateGmt : `${dateGmt}Z`;
}

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Kolkata",
});

export function formatDate(iso: string): string {
  return dateFormatter.format(new Date(iso));
}

// --- HTML helpers ----------------------------------------------------------

const isGroup = (link: NavLink | NavGroup): link is NavGroup => "children" in link;

/** First path segments this site already owns; a body link to one of them is not a post. */
const SITE_ROUTES = new Set<string>(
  [...NAV_LINKS, ...FOOTER_COLUMNS.flatMap((column) => column.links)]
    .flatMap((link) => (isGroup(link) ? [link, ...link.children] : [link]))
    .map((link) => link.href.split("/")[1])
    .filter(Boolean)
    .concat("blogs", "wp-content", "wp-json", "api", "_next"),
);

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Post bodies link to other posts by their WP path — `/some-slug` or
 * `https://<wp-host>/some-slug/` — which 404 here. Rewrite single-segment
 * links that are not one of this site's own routes to `/blogs/<slug>`.
 */
export function rewriteInternalLinks(html: string): string {
  const pattern = new RegExp(
    `href="(?:https?:\\/\\/${escapeRegExp(WP_HOST)})?\\/([a-z0-9-]+)\\/?(#[^"]*)?"`,
    "gi",
  );
  return html.replace(pattern, (match, slug: string, hash: string | undefined) =>
    SITE_ROUTES.has(slug) ? match : `href="/blogs/${slug}${hash ?? ""}"`,
  );
}

/**
 * The CMS is first-party, so this is belt and braces rather than a full
 * sanitiser: drop scripts, frames and inline handlers, and open external
 * links in a new tab with a safe rel.
 */
export function sanitiseHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script\s*>/gi, "")
    .replace(/<iframe[\s\S]*?(?:<\/iframe\s*>|\/>)/gi, "")
    .replace(/\s+on[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/href\s*=\s*"\s*javascript:[^"]*"/gi, 'href="#"')
    .replace(/<a\s+([^>]*?)href="(https?:\/\/[^"]+)"([^>]*)>/gi, (match, before: string, url: string, after: string) => {
      let host: string;
      try {
        host = new URL(url).host;
      } catch {
        return match;
      }
      if (host === WP_HOST) return match;
      const attrs = `${before}${after}`.replace(/\s*(?:target|rel)="[^"]*"/gi, "").trim();
      return `<a ${attrs ? `${attrs} ` : ""}href="${url}" target="_blank" rel="noopener noreferrer">`;
    });
}

