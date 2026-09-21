import { ROUTE_GROUPS } from "@/lib/routes";
import { appBaseUrl, siteOrigin } from "@/lib/site";
import { getPostStubs } from "@/lib/wp";

/**
 * /llms.txt — the site in the shape LLM crawlers read (llmstxt.org): an H1,
 * a one-paragraph blockquote, a few facts, then H2 link lists. Generated so
 * every link is absolute and the blog list stays current.
 */

/** Re-read WordPress hourly, in step with the blog pages' ISR. */
export const revalidate = 3600;

const SUMMARY =
  "All-in-one business management software for Indian teams. One workspace runs CRM, AI proposals, quotations, accounting & recovery, projects and HR & payroll, plus an AI voice agent that calls every new lead within seconds. Built by Web Spider Solutions; hosted in Mumbai, so data stays in India.";

const FACTS = [
  "One plan: ₹199 per user per month, GST included. Every module ships to every customer; there are no tiers or feature gates. 14-day free trial.",
  "Seven modules: CRM, AI Proposals, Quotations, Accounting & Recovery, Projects, HR & Payroll and the AI Voice Agent.",
  "Eight role-scoped dashboards — sales sees the pipeline, accounts sees vouchers, employees see their own tasks and payslips.",
  "Built for Indian books: Tally-style debit-credit-balance vouchers, GST on every quote, amounts in lakhs and crores.",
  "Leads arrive automatically from Meta Ads and Google Ads lead forms and any website form (15 sources), into a 9-stage pipeline.",
  "Data lives in the MongoDB Atlas Mumbai region. A JWT-authenticated REST API powers the web app and mobile apps.",
];

/** Legal pages and the machine files go under the spec's "Optional" heading. */
const OPTIONAL_HEADING = "Legal";

export async function GET(): Promise<Response> {
  const origin = siteOrigin();
  const abs = (path: string) => `${origin}${path}`;
  const link = (label: string, path: string, note?: string) =>
    `- [${label}](${abs(path)})${note ? `: ${note}` : ""}`;

  const lines: string[] = [
    "# BizvoraOne",
    "",
    `> ${SUMMARY}`,
    "",
    ...FACTS.map((fact) => `- ${fact}`),
    "",
    `Sign in to the app at ${appBaseUrl()}. Contact the team at hello@webspidersolutions.com or book a live demo at ${abs("/contact")}.`,
    "",
  ];

  for (const group of ROUTE_GROUPS) {
    if (group.heading === OPTIONAL_HEADING) continue;
    lines.push(`## ${group.heading}`, "");
    for (const route of group.routes) lines.push(link(route.label, route.path, route.description));
    lines.push("");
  }

  const posts = await getPostStubs();
  if (posts.length) {
    lines.push("## Blog", "");
    for (const post of posts) lines.push(link(post.title, `/blogs/${post.slug}`));
    lines.push("");
  }

  const optional = ROUTE_GROUPS.find((group) => group.heading === OPTIONAL_HEADING);
  lines.push("## Optional", "");
  for (const route of optional?.routes ?? []) lines.push(link(route.label, route.path, route.description));
  lines.push(link("XML sitemap", "/sitemap.xml", "Every URL on the site with last-modified dates."));
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": `public, max-age=0, s-maxage=${revalidate}`,
    },
  });
}
