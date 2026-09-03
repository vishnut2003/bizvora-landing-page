import type { MarkName } from "@/components/icons";
import type { NavGroup, NavLink } from "@/types/content";

export const hasChildren = (link: NavLink | NavGroup): link is NavGroup =>
  "children" in link;

/**
 * Mega-menu enrichment, keyed by route. Children without an entry render as a
 * plain link list (Company); "All …" links become the panel's footer row.
 * Shared by the desktop dropdown and the mobile drawer.
 */
export const ITEM_META: Record<string, { icon: MarkName; blurb: string }> = {
  "/modules/crm": { icon: "crm", blurb: "Customers, leads & 9-stage pipeline" },
  "/modules/ai-proposals": { icon: "doc", blurb: "Drafted by AI, branded PDF output" },
  "/modules/quotations": { icon: "quote", blurb: "Itemized quotes in seconds" },
  "/modules/accounting-recovery": { icon: "ledger", blurb: "Tally-style vouchers & collections" },
  "/modules/projects": { icon: "kanban", blurb: "Milestones with review gates" },
  "/modules/hr-payroll": { icon: "hr", blurb: "Payroll runs & payslip PDFs" },
  "/modules/ai-voice-agent": { icon: "phone", blurb: "Calls every new lead in seconds" },
  "/industries/manufacturing": { icon: "factory", blurb: "Orders, vouchers & recovery" },
  "/industries/real-estate-construction": { icon: "building", blurb: "Site enquiries called back fast" },
  "/industries/it-agencies": { icon: "laptop", blurb: "Proposals to milestones to payroll" },
  "/industries/service-consulting": { icon: "brief", blurb: "Client engagements, end to end" },
  "/industries/law-ca-cs": { icon: "scale", blurb: "Matters, filings & fee recovery" },
  "/industries/education": { icon: "cap", blurb: "Admissions enquiries never go cold" },
  "/industries/healthcare": { icon: "pulse", blurb: "Appointments, billing & payroll" },
  "/industries/trading-distribution": { icon: "truck", blurb: "Quotes, ledgers & collections" },
};

/** Does `pathname` sit under this nav entry? Exact for "/", prefix otherwise. */
export const isUnder = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
