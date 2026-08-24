import type {
  Faq,
  Feature,
  FooterColumn,
  Industry,
  Metric,
  Module,
  NavGroup,
  NavLink,
  Role,
} from "@/types/content";

/**
 * All BizvoraOne copy. Every string is taken from the source
 * `BizvoraOne Landing.html`, except the four role blurbs marked below.
 */

export const NAV_LINKS: (NavLink | NavGroup)[] = [
  {
    label: "Modules",
    href: "/modules",
    children: [
      { label: "CRM", href: "/modules/crm" },
      { label: "AI Proposals", href: "/modules/ai-proposals" },
      { label: "Quotations", href: "/modules/quotations" },
      { label: "Accounting & Recovery", href: "/modules/accounting-recovery" },
      { label: "Projects", href: "/modules/projects" },
      { label: "HR & Payroll", href: "/modules/hr-payroll" },
      { label: "AI Voice Agent", href: "/modules/ai-voice-agent" },
      { label: "All modules", href: "/modules" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Real Estate", href: "/industries/real-estate-construction" },
      { label: "IT & Agencies", href: "/industries/it-agencies" },
      { label: "Consulting", href: "/industries/service-consulting" },
      { label: "Law & CA / CS", href: "/industries/law-ca-cs" },
      { label: "Education", href: "/industries/education" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Distribution", href: "/industries/trading-distribution" },
      { label: "All industries", href: "/industries" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Why Choose Us", href: "/why-choose-us" },
      { label: "Use Cases", href: "/use-cases" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Become a Partner", href: "/become-a-partner" },
      { label: "Careers", href: "/careers" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

/** Marquee entries. Rendered as text — we have no rights-cleared logo files. */
export const INTEGRATIONS = [
  "Meta Ads",
  "Google Ads",
  "Web-form webhook",
  "Vapi · voice",
  "Claude · AI",
  "Resend · email",
];

/** The two headline module cards. Artwork is BizvoraOne's own (AI-generated). */
export const FEATURES: Feature[] = [
  {
    title: "CRM",
    description:
      "Customers and leads in a 9-stage pipeline, captured automatically from 15 lead sources.",
    image: { alt: "Nine-stage lead pipeline funnel" },
  },
  {
    title: "AI proposals",
    description:
      "Drafted by AI from the lead’s context, exported as branded PDFs your clients actually read.",
    image: { alt: "AI-drafted proposal document" },
  },
];

export const WIDE_FEATURE: Feature = {
  title: "Accounting & recovery",
  description:
    "Tally-style vouchers your accountant already understands, plus recovery and collections tracking.",
  image: { alt: "Voucher ledger and receivables ageing" },
};

export const MODULE_STRIP: Module[] = [
  { name: "CRM", blurb: "Customers, leads & 9-stage pipeline", icon: "crm" },
  { name: "AI Proposals", blurb: "Drafted by AI, branded PDF output", icon: "doc" },
  { name: "Quotations", blurb: "Itemized quotes in seconds", icon: "quote" },
  { name: "Accounting & Recovery", blurb: "Tally-style vouchers & collections", icon: "ledger" },
  { name: "Projects", blurb: "Milestones with review gates", icon: "kanban" },
  { name: "HR & Payroll", blurb: "Payroll runs & payslip PDFs", icon: "hr" },
];

export const METRICS: Metric[] = [
  { value: 6, suffix: "", label: "Modules" },
  { value: 15, suffix: "", label: "Lead sources" },
  { value: 9, suffix: "", label: "Pipeline stages" },
  { value: 8, suffix: "", label: "Dashboards" },
];

/** Three facts beside the call transcript. */
export const VOICE_FACTS = [
  { value: "Seconds", label: "from form-fill to first ring" },
  { value: "6 voices", label: "pick the one that fits your brand" },
  { value: "Your call", label: "AI-disclosure toggle, controlled by you" },
];

export const VOICE_TRANSCRIPT = [
  {
    speaker: "Asha (AI)",
    line: "Hi Rohan, this is Asha, an AI assistant from Bizvora. You just asked about our services. Is now a good time?",
  },
  { speaker: "Rohan", line: "Oh yes, I just filled the form." },
  {
    speaker: "Asha (AI)",
    line: "Perfect. I can book you with our team tomorrow at 11am. Shall I confirm?",
  },
];

export const INDUSTRIES: Industry[] = [
  { name: "Manufacturing", blurb: "Orders, vouchers & recovery in one flow.", icon: "factory" },
  {
    name: "Real Estate & Construction",
    blurb: "Site enquiries called back in seconds.",
    icon: "building",
  },
  { name: "IT & Agencies", blurb: "Proposals to milestones to payroll.", icon: "laptop" },
  { name: "Service & Consulting", blurb: "Client engagements, end to end.", icon: "brief" },
  { name: "Law & CA / CS Firms", blurb: "Matters, filings & fee recovery.", icon: "scale" },
  { name: "Education", blurb: "Admissions enquiries never go cold.", icon: "cap" },
  { name: "Healthcare", blurb: "Appointments, billing & staff payroll.", icon: "pulse" },
  {
    name: "Trading & Distribution",
    blurb: "Quotes, ledgers & collections on time.",
    icon: "truck",
  },
];

/**
 * The eight roles are from the source; Sales / Accounts / HR / Management keep
 * its wording. Admin, Recovery, Projects and Employee blurbs are written here
 * from the module copy — the source names those roles but never describes them.
 */
export const ROLES: Role[] = [
  { name: "Admin", sees: "Everything, plus the users, roles and permissions behind it." },
  { name: "Sales", sees: "The pipeline: every lead, its stage, its value and what is due next." },
  { name: "Accounts", sees: "Vouchers and recovery, in the Tally-style layout they already know." },
  { name: "Recovery", sees: "Outstanding invoices, ageing and the collection follow-ups they own." },
  { name: "Projects", sees: "Milestones, review gates and delivery dates across every active project." },
  { name: "HR", sees: "Payroll: employee records, payroll runs and the payslips they generate." },
  { name: "Employee", sees: "Their own tasks, milestones and payslips. Nothing that is not theirs." },
  { name: "Management", sees: "All of it, and nobody wades through screens that are not theirs." },
];

export const PLAN_INCLUDES = [
  "CRM with 9-stage pipeline & 15 lead sources",
  "AI voice agent on every new lead",
  "AI proposals with branded PDFs",
  "Quotations",
  "Accounting vouchers, recovery & collections",
  "Projects with milestones & review gates",
  "HR, payroll & payslip PDFs",
  "8 role-scoped dashboards",
];

export const FAQS: Faq[] = [
  {
    question: "Why isn’t the price public?",
    answer:
      "There’s exactly one plan and it includes everything. Pricing is scoped to your team size and shared on the demo call. You’ll never discover a feature you need lives on a higher tier.",
  },
  {
    question: "What does “coming soon” mean?",
    answer:
      "Two features are in active development: the drag-and-drop pipeline view (leads work as a table today) and send-for-signature on proposals. Everything else on this page is live.",
  },
  {
    question: "Does the AI agent tell leads it’s an AI?",
    answer:
      "That’s your decision. There’s a disclosure toggle, and when it’s on the agent introduces itself as an AI assistant at the start of every call.",
  },
  {
    question: "Where is our data stored?",
    answer: "In MongoDB Atlas, Mumbai region. Your business data stays in India.",
  },
  {
    question: "How do leads get in?",
    answer:
      "Meta Ads and Google Ads lead forms connect directly, and a public webhook accepts submissions from any form on your website, for 15 lead sources in total.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "BizvoraOne ships a secure mobile REST API (JWT-authenticated), with mobile apps built on top of it.",
  },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Modules",
    links: [
      { label: "CRM", href: "/modules/crm" },
      { label: "AI Proposals", href: "/modules/ai-proposals" },
      { label: "Quotations", href: "/modules/quotations" },
      { label: "Accounting & Recovery", href: "/modules/accounting-recovery" },
      { label: "Projects", href: "/modules/projects" },
      { label: "HR & Payroll", href: "/modules/hr-payroll" },
      { label: "AI Voice Agent", href: "/modules/ai-voice-agent" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Real Estate", href: "/industries/real-estate-construction" },
      { label: "IT & Agencies", href: "/industries/it-agencies" },
      { label: "Service & Consulting", href: "/industries/service-consulting" },
      { label: "Law & CA / CS", href: "/industries/law-ca-cs" },
      { label: "Education", href: "/industries/education" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Trading & Distribution", href: "/industries/trading-distribution" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Why Choose Us", href: "/why-choose-us" },
      { label: "Use Cases", href: "/use-cases" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Become a Partner", href: "/become-a-partner" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Information",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Request a Demo", href: "/demo" },
      { label: "Contact Us", href: "/contact" },
      { label: "FAQs", href: "/faqs" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];
