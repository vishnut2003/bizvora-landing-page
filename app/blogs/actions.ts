"use server";

import { POSTS_PER_PAGE, getPosts, type PostPage } from "@/lib/wp";

export type LoadMoreResult = { ok: true; page: PostPage } | { ok: false };

/**
 * "Load more" for /blogs. A Server Action rather than a route handler: the
 * payload is small, must be fresh, and the types stay shared with the page.
 * Never throws across the boundary — the grid shows an inline retry instead.
 */
export async function loadMorePosts(page: number): Promise<LoadMoreResult> {
  if (!Number.isInteger(page) || page < 2 || page > 500) return { ok: false };
  try {
    return { ok: true, page: await getPosts({ page, perPage: POSTS_PER_PAGE }) };
  } catch {
    return { ok: false };
  }
}
