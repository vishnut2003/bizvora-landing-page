import { INDUSTRIES, MODULES } from "@/lib/bizvora";

/**
 * Every static route on the site, grouped the way a visitor would look for
 * them. The one list behind sitemap.xml, /sitemap.html and /llms.txt, so the
 * three can never disagree. Blog posts come from WordPress at request time
 * (see getPostStubs in lib/wp.ts) and are appended by each consumer.
 *
 * Pure data — no WordPress import, safe anywhere.
 */

export type ChangeFrequency = "weekly" | "monthly" | "yearly";

export interface SiteRoute {
  /** Root-relative, e.g. "/modules/crm". */
  path: string;
  label: string;
  /** One line, as the page's own metadata description or blurb. */
  description: string;
  priority: number;
  changeFrequency: ChangeFrequency;
}

export interface RouteGroup {
  heading: string;
  routes: SiteRoute[];
}

export const ROUTE_GROUPS: RouteGroup[] = [
  {
    heading: "Product",
    routes: [
      {
        path: "/",
        label: "Home",
        description:
          "BizvoraOne runs your whole business from one workspace: CRM, AI proposals, quotations, accounting, projects and HR & payroll, plus an AI voice agent that calls every new lead within seconds.",
        priority: 1,
        changeFrequency: "weekly",
      },
      {
        path: "/modules",
        label: "Modules",
        description:
          "Explore all BizvoraOne modules — CRM, AI Proposals, Quotations, Accounting & Recovery, Projects, HR & Payroll and the AI Voice Agent — one workspace for Indian businesses.",
        priority: 0.9,
        changeFrequency: "monthly",
      },
      {
        path: "/industries",
        label: "Industries",
        description:
          "BizvoraOne runs the same flow for every industry — manufacturing, real estate, IT & agencies, consulting, law & CA/CS, education, healthcare and distribution.",
        priority: 0.9,
        changeFrequency: "monthly",
      },
      {
        path: "/pricing",
        label: "Pricing",
        description:
          "₹199 per user per month, GST included — every module, every dashboard, the AI voice agent. One plan, no tiers, 14 days free.",
        priority: 0.9,
        changeFrequency: "monthly",
      },
    ],
  },
  {
    heading: "Modules",
    routes: MODULES.map((module) => ({
      path: `/modules/${module.slug}`,
      label: module.name,
      description: module.blurb,
      priority: 0.8,
      changeFrequency: "monthly",
    })),
  },
  {
    heading: "Industries",
    routes: INDUSTRIES.map((industry) => ({
      path: `/industries/${industry.slug}`,
      label: industry.name,
      description: industry.blurb,
      priority: 0.8,
      changeFrequency: "monthly",
    })),
  },
  {
    heading: "Company",
    routes: [
      {
        path: "/about",
        label: "About Us",
        description:
          "BizvoraOne is built by Web Spider Solutions for how Indian businesses actually run — Tally-style vouchers, GST-ready quotes, amounts in lakhs and crores, and data hosted in Mumbai.",
        priority: 0.7,
        changeFrequency: "monthly",
      },
      {
        path: "/why-choose-us",
        label: "Why Choose Us",
        description:
          "Why growing Indian businesses pick BizvoraOne over a stitched stack — one workspace, one database and one plan.",
        priority: 0.7,
        changeFrequency: "monthly",
      },
      {
        path: "/use-cases",
        label: "Use Cases",
        description:
          "Five workflows BizvoraOne runs end to end — ad click to first call, enquiry to proposal, quotation to collection, kickoff to delivery and month-end payroll.",
        priority: 0.7,
        changeFrequency: "monthly",
      },
      {
        path: "/testimonials",
        label: "Testimonials",
        description:
          "What teams across manufacturing, real estate, agencies, consulting, education and healthcare say about running their whole business on BizvoraOne.",
        priority: 0.7,
        changeFrequency: "monthly",
      },
      {
        path: "/faqs",
        label: "FAQs",
        description:
          "Everything people ask before switching to BizvoraOne — the one plan, the AI voice agent and proposals, where your data lives, and how fast a team goes live.",
        priority: 0.7,
        changeFrequency: "monthly",
      },
      {
        path: "/contact",
        label: "Contact",
        description:
          "Book a live BizvoraOne demo — bring your toughest workflow and we run it end to end on the actual product. Or reach the Web Spider Solutions team by email.",
        priority: 0.7,
        changeFrequency: "monthly",
      },
      {
        path: "/blogs",
        label: "Blog",
        description:
          "Practical playbooks for running an Indian business — sales follow-ups, quotations, collections, projects and payroll — from the team building BizvoraOne.",
        priority: 0.8,
        changeFrequency: "weekly",
      },
    ],
  },
  {
    heading: "Legal",
    routes: [
      {
        path: "/terms",
        label: "Terms of Use",
        description:
          "The terms that govern your use of BizvoraOne, the business workspace built by Web Spider Solutions.",
        priority: 0.3,
        changeFrequency: "yearly",
      },
      {
        path: "/privacy",
        label: "Privacy Policy",
        description:
          "How BizvoraOne collects, uses and protects your data — hosted in the MongoDB Atlas Mumbai region, where it stays in India.",
        priority: 0.3,
        changeFrequency: "yearly",
      },
      {
        path: "/sitemap.html",
        label: "Sitemap",
        description: "Every page on BizvoraOne on one page.",
        priority: 0.3,
        changeFrequency: "monthly",
      },
    ],
  },
];

/** Every static route, flattened in display order. */
export const STATIC_ROUTES: SiteRoute[] = ROUTE_GROUPS.flatMap((group) => group.routes);
