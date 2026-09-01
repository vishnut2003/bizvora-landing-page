import type {
  Faq,
  Feature,
  FooterColumn,
  Industry,
  Metric,
  Module,
  ModuleDetail,
  ModulePageExtras,
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
  { name: "Meta Ads", tag: "Lead forms" },
  { name: "Google Ads", tag: "Lead forms" },
  { name: "Webhooks", tag: "Web forms" },
  { name: "Vapi", tag: "Voice AI" },
  { name: "Claude", tag: "AI engine" },
  { name: "Resend", tag: "Email" },
] as const;

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

/**
 * Canonical module source for the /modules page. The header's ITEM_META and
 * MODULE_STRIP above mirror these blurbs — keep the three in sync. Copy is
 * drawn from FEATURES, VOICE_FACTS and the FAQs.
 */
export const MODULES: ModuleDetail[] = [
  {
    slug: "crm",
    name: "CRM",
    eyebrow: "Sales",
    blurb: "Customers, leads & 9-stage pipeline",
    description:
      "Every enquiry from Meta Ads, Google Ads and your website lands in one 9-stage pipeline — 15 lead sources in total, captured automatically. Sales sees each lead's stage, value in ₹ and what's due next, so nothing goes cold.",
    features: [
      "9-stage pipeline, from first enquiry to Won",
      "15 lead sources: Meta Ads and Google Ads lead forms, plus a public webhook for any website form",
      "Leads captured automatically — no manual entry, no copy-paste from inboxes",
      "Stage, deal value and next action visible on every lead",
      "Role-scoped: Sales sees the pipeline, and nothing that isn't theirs",
    ],
    icon: "crm",
    stat: { value: "15", label: "lead sources feeding one pipeline" },
    artAlt: "Nine-stage lead pipeline funnel",
  },
  {
    slug: "ai-proposals",
    name: "AI Proposals",
    eyebrow: "Sales",
    blurb: "Drafted by AI, branded PDF output",
    description:
      "The AI drafts each proposal from the lead's own context — who they are, what they asked for — so the first draft already sounds like you. Review, refine and export as a branded PDF your clients actually read.",
    features: [
      "First drafts written by AI from the lead's context",
      "Branded PDF output with your letterhead and line items in ₹",
      "Edit everything before it leaves the building",
      "Proposal stays linked to the lead's pipeline record",
      "Send-for-signature — coming soon",
    ],
    icon: "doc",
    stat: { value: "Minutes", label: "from lead to first draft" },
    artAlt: "AI-drafted proposal document",
  },
  {
    slug: "quotations",
    name: "Quotations",
    eyebrow: "Sales",
    blurb: "Itemized quotes in seconds",
    description:
      "Build itemized quotations in seconds — line items, quantities, GST and totals in ₹, ready while the lead is still warm. Every quote keeps its number and status, linked back to the lead it belongs to.",
    features: [
      "Itemized line items with quantity, rate and amount",
      "GST and totals calculated for you — no spreadsheet on the side",
      "Numbered quotes with sent and accepted status",
      "Linked to the lead, so follow-up is never guesswork",
      "Flows into accounting once the deal is won",
    ],
    icon: "quote",
    stat: { value: "Seconds", label: "to an itemized, GST-ready quote" },
    artAlt: "Itemized quotation totalling up with GST",
  },
  {
    slug: "accounting-recovery",
    name: "Accounting & Recovery",
    eyebrow: "Finance",
    blurb: "Tally-style vouchers & collections",
    description:
      "Vouchers in the Tally-style layout your accountant already understands — debit, credit, balance — with zero retraining. Recovery tracks receivables ageing from 0–30 to 120+ days, so collections happen before dues go stale.",
    features: [
      "Tally-style voucher entry your accountant knows on day one",
      "Receivables ageing across five buckets, 0–30 to 120+ days",
      "A dedicated Recovery role that owns collection follow-ups",
      "Outstanding invoices and ₹ balances at a glance",
      "Data in MongoDB Atlas, Mumbai region — your books stay in India",
    ],
    icon: "ledger",
    stat: { value: "5", label: "ageing buckets tracked for recovery" },
    artAlt: "Voucher ledger and receivables ageing",
  },
  {
    slug: "projects",
    name: "Projects",
    eyebrow: "Delivery",
    blurb: "Milestones with review gates",
    description:
      "Every engagement broken into milestones with review gates, so work is checked before it moves forward. Management sees delivery dates across every active project; employees see only the tasks that are theirs.",
    features: [
      "Milestones with review gates before hand-off",
      "Delivery dates across every active project, in one view",
      "Won leads flow straight into a project — no re-entry",
      "Tasks scoped per employee: their work, nothing else",
      "A Projects role that sees gates and dates across the board",
    ],
    icon: "kanban",
    stat: { value: "1 view", label: "for every active project's dates" },
    artAlt: "Kanban columns with a milestone timeline and review gate",
  },
  {
    slug: "hr-payroll",
    name: "HR & Payroll",
    eyebrow: "People",
    blurb: "Payroll runs & payslip PDFs",
    description:
      "Employee records, payroll runs and payslip PDFs in one place — no spreadsheet gymnastics at month-end. HR runs payroll; every employee self-serves their own payslips from their dashboard.",
    features: [
      "Central employee records with roles and permissions",
      "Monthly payroll runs in ₹, without the month-end scramble",
      "Payslip PDFs generated for every employee, automatically",
      "Employees see their own payslips — and only their own",
      "HR's dashboard shows the whole run, end to end",
    ],
    icon: "hr",
    stat: { value: "PDF", label: "payslips, generated per employee" },
    artAlt: "Attendance grid feeding a payslip with net pay",
  },
  {
    slug: "ai-voice-agent",
    name: "AI Voice Agent",
    eyebrow: "AI",
    blurb: "Calls every new lead in seconds",
    description:
      "The moment a lead fills a form, the AI agent calls — seconds from form-fill to first ring, in one of six voices you choose. It qualifies the lead, books the meeting and logs everything back on the CRM record.",
    features: [
      "Calls new leads within seconds of form-fill",
      "6 voices — pick the one that fits your brand",
      "AI-disclosure toggle: when on, the agent introduces itself as an AI on every call",
      "Books the meeting with your team, right on the call",
      "Full conversation logged on the lead's CRM record",
    ],
    icon: "phone",
    stat: { value: "Seconds", label: "from form-fill to first ring" },
    artAlt: "AI voice agent call card with live waveform and transcript",
  },
];

/**
 * Deep-dive copy for the /modules/<slug> pages, keyed by MODULES slug.
 * Roles and FAQs are stored by reference and resolved against ROLES / FAQS
 * at render, so that copy never forks. FAQ questions must match the FAQS
 * strings exactly — curly quotes included.
 */
export const MODULE_PAGES = {
  crm: {
    heroTagline: "Every enquiry, captured before it can go cold.",
    heroStats: [
      { value: "15", label: "lead sources feeding one pipeline" },
      { value: "9", label: "stages, first enquiry to Won" },
      { value: "0", label: "leads typed in by hand" },
    ],
    featureCards: [
      {
        title: "9 stages, enquiry to Won",
        description:
          "Every lead moves through the same nine stages, from first enquiry to Won. One glance tells you exactly where each deal stands.",
        icon: "crm",
      },
      {
        title: "15 sources, zero copy-paste",
        description:
          "Meta Ads and Google Ads lead forms connect directly, and a public webhook accepts any form on your website. Leads land in the pipeline on their own.",
        icon: "mail",
      },
      {
        title: "Deal value in ₹, always visible",
        description:
          "Stage, deal value and next action sit on every lead. Sales knows what a deal is worth and what's due next without opening a spreadsheet.",
        icon: "ledger",
      },
      {
        title: "Role-scoped by default",
        description:
          "Sales sees the pipeline — and nothing that isn't theirs. Management sees all of it from their own dashboard.",
        icon: "brief",
      },
      {
        title: "Hand-off without re-entry",
        description:
          "Won leads flow straight into quotations, proposals and projects. The record travels; nobody retypes it.",
        icon: "kanban",
      },
    ],
    steps: [
      {
        title: "A lead lands",
        description:
          "Someone fills a Meta form, a Google form or any form on your site. The lead appears in the pipeline automatically — and the AI voice agent is already dialling.",
      },
      {
        title: "It moves through stages",
        description:
          "Sales works the lead through nine stages, with value in ₹ and the next action visible at every step. Nothing sits forgotten in an inbox.",
      },
      {
        title: "Won — and onward",
        description:
          "Mark it Won and the deal flows into quotations, proposals and a project. The whole company works off the same record.",
      },
    ],
    roleNames: ["Sales", "Management", "Admin"],
    related: ["ai-voice-agent", "quotations", "ai-proposals"],
    faqQuestions: ["How do leads get in?", "What does “coming soon” mean?"],
  },
  "ai-proposals": {
    heroTagline: "First drafts that already sound like you.",
    heroStats: [
      { value: "Minutes", label: "from lead to first draft" },
      { value: "PDF", label: "branded output, your letterhead" },
      { value: "1", label: "record — the proposal stays on its lead" },
    ],
    featureCards: [
      {
        title: "Drafted from the lead's context",
        description:
          "The AI writes the first draft from who the lead is and what they asked for. It reads like your team wrote it, because it starts from your data.",
        icon: "doc",
      },
      {
        title: "Branded PDF output",
        description:
          "Your letterhead, your line items in ₹, exported as a PDF clients actually read — not a wall of generic text.",
        icon: "brief",
      },
      {
        title: "You edit before it leaves",
        description:
          "Review and refine every line before anything reaches a client. The AI drafts; your team decides.",
        icon: "check",
      },
      {
        title: "Linked to the pipeline",
        description:
          "Every proposal stays attached to the lead's CRM record, so status never lives in someone's Sent folder.",
        icon: "crm",
      },
      {
        title: "Send-for-signature — coming soon",
        description:
          "Signature collection on proposals is in active development. Everything else on this page is live today.",
        icon: "mail",
      },
    ],
    steps: [
      {
        title: "Pick the lead",
        description:
          "Open any lead in the pipeline and ask for a proposal. The AI already has the context — who they are, what they asked for.",
      },
      {
        title: "Review the draft",
        description:
          "A complete first draft arrives in minutes. Edit everything — tone, scope, line items in ₹ — before it leaves the building.",
      },
      {
        title: "Export and send",
        description:
          "Export a branded PDF and send it. The proposal stays linked to the lead, so everyone sees where it stands.",
      },
    ],
    roleNames: ["Sales", "Management"],
    related: ["crm", "quotations"],
    faqQuestions: ["What does “coming soon” mean?"],
  },
  quotations: {
    heroTagline: "GST-ready quotes while the lead is still warm.",
    heroStats: [
      { value: "Seconds", label: "to an itemized, GST-ready quote" },
      { value: "GST", label: "and totals calculated for you" },
      { value: "0", label: "spreadsheets on the side" },
    ],
    featureCards: [
      {
        title: "Itemized line items",
        description:
          "Line items with quantity, rate and amount, totalling up as you type. No formula errors, no formatting fights.",
        icon: "quote",
      },
      {
        title: "GST done for you",
        description:
          "GST and totals in ₹ are calculated automatically. The spreadsheet on the side finally retires.",
        icon: "ledger",
      },
      {
        title: "Numbered, with status",
        description:
          "Every quote keeps its number and its sent and accepted status, so you always know which version the client saw.",
        icon: "check",
      },
      {
        title: "Linked to the lead",
        description:
          "Quotes attach to the lead they belong to. Follow-up is never guesswork about which quote went where.",
        icon: "crm",
      },
      {
        title: "Flows into accounting",
        description:
          "Once the deal is won, the quote flows into accounting — no re-entry, no mismatch between what was quoted and what gets invoiced.",
        icon: "doc",
      },
    ],
    steps: [
      {
        title: "Add the line items",
        description:
          "Pick the lead and add items with quantity and rate. Totals and GST calculate as you go.",
      },
      {
        title: "Send it, numbered",
        description:
          "The quote goes out with its own number and its status flips to sent — while the lead is still warm.",
      },
      {
        title: "Won, into the books",
        description:
          "When the client accepts, the deal is won and the quote flows into vouchers and receivables. Nothing re-entered.",
      },
    ],
    roleNames: ["Sales", "Accounts", "Management"],
    related: ["crm", "accounting-recovery", "ai-proposals"],
    faqQuestions: [],
  },
  "accounting-recovery": {
    heroTagline: "Books your accountant already knows. Dues that never go stale.",
    heroStats: [
      { value: "5", label: "ageing buckets tracked for recovery" },
      { value: "0", label: "days retraining your accountant" },
      { value: "Mumbai", label: "where your books live" },
    ],
    featureCards: [
      {
        title: "Tally-style vouchers",
        description:
          "Debit, credit, balance — the voucher layout your accountant already understands on day one. Zero retraining.",
        icon: "ledger",
      },
      {
        title: "Ageing across 5 buckets",
        description:
          "Every outstanding invoice sits in one of five buckets, 0–30 through 120+ days. Stale dues are visible before they're a problem.",
        icon: "pulse",
      },
      {
        title: "A dedicated Recovery role",
        description:
          "Recovery owns the collection follow-ups: who to chase, about which invoice, for how much ₹.",
        icon: "phone",
      },
      {
        title: "Outstanding at a glance",
        description:
          "Outstanding invoices and ₹ balances in one view — no reconciliation meeting required to know who owes what.",
        icon: "check",
      },
      {
        title: "Books stay in India",
        description:
          "Your data lives in MongoDB Atlas, Mumbai region. Your books never leave the country.",
        icon: "building",
      },
    ],
    steps: [
      {
        title: "Deals become vouchers",
        description:
          "Won deals and accepted quotes flow into Tally-style vouchers — no re-entry from sales to accounts.",
      },
      {
        title: "Ageing sorts the dues",
        description:
          "Every receivable lands in an ageing bucket automatically, from 0–30 out to 120+ days.",
      },
      {
        title: "Recovery follows up",
        description:
          "The Recovery dashboard queues collection follow-ups so dues are chased before they go stale — and balances update as money comes in.",
      },
    ],
    roleNames: ["Accounts", "Recovery", "Management"],
    related: ["quotations", "crm"],
    faqQuestions: ["Where is our data stored?"],
  },
  projects: {
    heroTagline: "Work gets checked before it moves forward.",
    heroStats: [
      { value: "1 view", label: "for every active project's dates" },
      { value: "Gates", label: "review before every hand-off" },
      { value: "0", label: "re-entry from Won to project" },
    ],
    featureCards: [
      {
        title: "Milestones with review gates",
        description:
          "Every engagement breaks into milestones, each with a review gate. Work is checked before it moves forward — not after the client notices.",
        icon: "kanban",
      },
      {
        title: "Delivery dates in one view",
        description:
          "Management sees delivery dates across every active project in a single view. No status-meeting archaeology.",
        icon: "check",
      },
      {
        title: "Won leads become projects",
        description:
          "The moment a deal is won, it flows straight into a project. Scope and context carry over — nobody re-enters anything.",
        icon: "crm",
      },
      {
        title: "Tasks scoped per employee",
        description:
          "Each employee sees the tasks that are theirs — their work, nothing else.",
        icon: "brief",
      },
      {
        title: "A Projects role for oversight",
        description:
          "The Projects dashboard shows gates and dates across the board, so delivery has one owner and one screen.",
        icon: "laptop",
      },
    ],
    steps: [
      {
        title: "Won lead, new project",
        description:
          "A won deal turns into a project with its context intact. Milestones get dates; tasks get owners.",
      },
      {
        title: "Milestone, then gate",
        description:
          "Work moves milestone by milestone. At each gate it's reviewed before it's allowed forward.",
      },
      {
        title: "Dates on the board",
        description:
          "Delivery dates roll up into one view, so management sees every active project without asking for a status update.",
      },
    ],
    roleNames: ["Projects", "Employee", "Management"],
    related: ["crm", "hr-payroll"],
    faqQuestions: [],
  },
  "hr-payroll": {
    heroTagline: "Month-end without the spreadsheet gymnastics.",
    heroStats: [
      { value: "PDF", label: "payslips, generated per employee" },
      { value: "1", label: "place for records, runs and payslips" },
      { value: "Self-serve", label: "employees fetch their own payslips" },
    ],
    featureCards: [
      {
        title: "Central employee records",
        description:
          "One record per employee, with roles and permissions attached. HR stops maintaining three parallel lists.",
        icon: "hr",
      },
      {
        title: "Monthly payroll runs in ₹",
        description:
          "Run payroll for the whole team without the month-end scramble. HR's dashboard shows the run end to end.",
        icon: "ledger",
      },
      {
        title: "Payslip PDFs, automatic",
        description:
          "A payslip PDF is generated for every employee, every run. Nobody formats payslips by hand again.",
        icon: "doc",
      },
      {
        title: "Employee self-serve",
        description:
          "Each employee sees their own payslips from their own dashboard — and only their own.",
        icon: "check",
      },
      {
        title: "Roles drive permissions",
        description:
          "The roles on employee records are the same roles that scope every dashboard in BizvoraOne.",
        icon: "brief",
      },
    ],
    steps: [
      {
        title: "Records in one place",
        description:
          "Employees, roles and permissions live on central records — the same source every module reads.",
      },
      {
        title: "Run the month",
        description:
          "HR runs payroll in ₹ from one dashboard, watching the run end to end instead of stitching spreadsheets.",
      },
      {
        title: "Payslips deliver themselves",
        description:
          "PDFs generate per employee automatically, and each person picks theirs up from their own dashboard.",
      },
    ],
    roleNames: ["HR", "Employee", "Admin"],
    related: ["projects", "accounting-recovery"],
    faqQuestions: ["Is there a mobile app?"],
  },
  "ai-voice-agent": {
    heroTagline: "On the phone with your lead in seconds.",
    heroStats: [
      { value: "Seconds", label: "from form-fill to first ring" },
      { value: "6", label: "voices — pick your brand's" },
      { value: "Your call", label: "AI-disclosure toggle, controlled by you" },
    ],
    featureCards: [
      {
        title: "Calls in seconds",
        description:
          "The moment a lead fills a form, the agent dials. Seconds from form-fill to first ring — while everyone else is still checking email.",
        icon: "phone",
      },
      {
        title: "Six voices",
        description:
          "Pick the voice that fits your brand from six options. Asha, from the demo call, is one of them.",
        icon: "pulse",
      },
      {
        title: "Disclosure is your call",
        description:
          "An AI-disclosure toggle, controlled by you. When it's on, the agent introduces itself as an AI assistant at the start of every call.",
        icon: "check",
      },
      {
        title: "Books the meeting live",
        description:
          "The agent qualifies the lead and books the meeting with your team right on the call — “tomorrow at 11am, shall I confirm?”",
        icon: "mail",
      },
      {
        title: "Everything on the record",
        description:
          "The full conversation is logged on the lead's CRM record. Sales walks into the meeting knowing exactly what was said.",
        icon: "crm",
      },
    ],
    steps: [
      {
        title: "Form-fill triggers the call",
        description:
          "A lead submits through any of your 15 sources. Seconds later, their phone rings.",
      },
      {
        title: "Qualify and book",
        description:
          "The agent confirms interest, answers the basics and books a meeting with your team on the spot.",
      },
      {
        title: "Logged to the lead",
        description:
          "The transcript and outcome land on the CRM record, so the human follow-up starts fully briefed.",
      },
    ],
    roleNames: ["Sales", "Management", "Admin"],
    related: ["crm", "ai-proposals"],
    faqQuestions: ["Does the AI agent tell leads it’s an AI?"],
  },
} satisfies Record<string, ModulePageExtras>;

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
