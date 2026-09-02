import type {
  Faq,
  Feature,
  FooterColumn,
  Industry,
  IndustryPageExtras,
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
    roleNames: ["Sales", "Management", "Admin"],
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
  {
    slug: "manufacturing",
    name: "Manufacturing",
    blurb: "Orders, vouchers & recovery in one flow.",
    icon: "factory",
  },
  {
    slug: "real-estate-construction",
    name: "Real Estate & Construction",
    blurb: "Site enquiries called back in seconds.",
    icon: "building",
  },
  {
    slug: "it-agencies",
    name: "IT & Agencies",
    blurb: "Proposals to milestones to payroll.",
    icon: "laptop",
  },
  {
    slug: "service-consulting",
    name: "Service & Consulting",
    blurb: "Client engagements, end to end.",
    icon: "brief",
  },
  {
    slug: "law-ca-cs",
    name: "Law & CA / CS Firms",
    blurb: "Matters, filings & fee recovery.",
    icon: "scale",
  },
  {
    slug: "education",
    name: "Education",
    blurb: "Admissions enquiries never go cold.",
    icon: "cap",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    blurb: "Appointments, billing & staff payroll.",
    icon: "pulse",
  },
  {
    slug: "trading-distribution",
    name: "Trading & Distribution",
    blurb: "Quotes, ledgers & collections on time.",
    icon: "truck",
  },
];

/**
 * Deep-dive copy for the /industries/<slug> pages, keyed by INDUSTRIES slug.
 * moduleSlugs resolve against MODULES and FAQ questions must match the FAQS
 * strings exactly — curly quotes included. Every claim stays within what the
 * modules actually do; nothing industry-specific is invented.
 */
export const INDUSTRY_PAGES = {
  manufacturing: {
    heroTagline: "Orders, vouchers and recovery — one unbroken flow.",
    description:
      "A dealer asks for rates, sales sends an itemized GST-ready quote in seconds, and the won order flows into Tally-style vouchers your accountant already understands. Receivables age across five buckets, so recovery chases dues before they go stale.",
    heroStats: [
      { value: "Seconds", label: "to an itemized, GST-ready quote" },
      { value: "5", label: "ageing buckets watching every due" },
      { value: "0", label: "re-entry from quote to voucher" },
    ],
    painPoints: [
      {
        title: "Rate requests answered from a spreadsheet",
        description:
          "Every order enquiry meant a spreadsheet on the side and a formula to double-check. Quotations builds itemized, GST-calculated quotes in seconds, numbered and linked to the enquiry.",
        icon: "quote",
      },
      {
        title: "What was quoted never matches what's invoiced",
        description:
          "Sales quoted one number, accounts booked another. Won quotes flow straight into Tally-style vouchers — debit, credit, balance — with nothing re-entered in between.",
        icon: "ledger",
      },
      {
        title: "Dues go stale between dispatches",
        description:
          "Outstanding invoices used to surface at year-end. Five ageing buckets, 0–30 to 120+ days, and a dedicated Recovery role keep collections moving before dues harden.",
        icon: "phone",
      },
      {
        title: "Enquiries lost between shifts",
        description:
          "Order enquiries sat in inboxes until someone remembered them. Now 15 lead sources land in one 9-stage pipeline automatically, value in ₹ and next action on every lead.",
        icon: "crm",
      },
    ],
    steps: [
      {
        title: "An order enquiry lands",
        description:
          "A dealer fills a form on your site or a Meta ad. It appears in the 9-stage pipeline automatically — and the AI voice agent is already dialling.",
      },
      {
        title: "Quote and voucher, no re-entry",
        description:
          "Sales sends a GST-ready quote in seconds. When the order is won, it flows into Tally-style vouchers your accountant knows on day one.",
      },
      {
        title: "Recovery keeps the money moving",
        description:
          "Every receivable lands in an ageing bucket, and the Recovery dashboard queues follow-ups so dues are chased before they go stale.",
      },
    ],
    moduleSlugs: ["quotations", "accounting-recovery", "crm"],
    faqQuestions: ["How do leads get in?"],
  },
  "real-estate-construction": {
    heroTagline: "Site enquiries called back before they cool.",
    description:
      "Someone enquires about a site from a Meta ad and the AI voice agent has them on the phone in seconds — qualified, booked and logged on the CRM record. Won bookings become projects with milestones and review gates, so handovers never slip quietly.",
    heroStats: [
      { value: "Seconds", label: "from site enquiry to first ring" },
      { value: "9", label: "stages, first enquiry to booked" },
      { value: "Gates", label: "review before every handover" },
    ],
    painPoints: [
      {
        title: "The enquiry cooled while the phone rang out",
        description:
          "By the time someone called back, the family had seen three other sites. The AI voice agent dials within seconds of the form-fill, in one of six voices you choose.",
        icon: "phone",
      },
      {
        title: "Leads scattered across portals and ad accounts",
        description:
          "Meta forms in one inbox, website forms in another. Fifteen lead sources feed one 9-stage pipeline — captured automatically, no copy-paste.",
        icon: "mail",
      },
      {
        title: "Delivery dates live in someone's head",
        description:
          "Possession promises used to be tribal knowledge. Projects puts delivery dates for every active project in a single view, with review gates before each handover.",
        icon: "kanban",
      },
      {
        title: "Booked, then re-typed",
        description:
          "Won bookings used to be re-entered into a tracker. Here the won lead flows straight into a project with its context intact.",
        icon: "check",
      },
    ],
    steps: [
      {
        title: "A site enquiry comes in",
        description:
          "A form-fill from your ads or website lands in the pipeline, and the agent calls back in seconds — while interest is at its peak.",
      },
      {
        title: "The visit is booked on the call",
        description:
          "The agent qualifies the enquiry and books the site visit with your team right on the call. The full transcript lands on the CRM record.",
      },
      {
        title: "Won bookings become projects",
        description:
          "The deal flows into a project with milestones and review gates, and management sees every delivery date in one view.",
      },
    ],
    moduleSlugs: ["ai-voice-agent", "crm", "projects"],
    faqQuestions: ["Does the AI agent tell leads it’s an AI?"],
  },
  "it-agencies": {
    heroTagline: "Proposal to milestone to payslip, one record.",
    description:
      "The AI drafts each proposal from the lead's own context and exports a branded PDF, so pitches go out in minutes instead of eating the weekend. Won work becomes a project with review gates, and the same workspace runs the team's payroll at month-end.",
    heroStats: [
      { value: "Minutes", label: "from lead to first proposal draft" },
      { value: "Gates", label: "work reviewed before hand-off" },
      { value: "PDF", label: "payslips per employee, automatic" },
    ],
    painPoints: [
      {
        title: "Proposals eat the weekend",
        description:
          "Every pitch started from a blank page. The AI writes the first draft from who the lead is and what they asked for; your team edits before anything leaves the building.",
        icon: "doc",
      },
      {
        title: "Scope lives in five tools",
        description:
          "The brief in email, tasks in one app, dates in another. A won lead becomes a project with milestones, and each employee sees only the tasks that are theirs.",
        icon: "kanban",
      },
      {
        title: "Client work ships unchecked",
        description:
          "Deliverables went out and then got reviewed. Review gates check work at every milestone before it's allowed forward.",
        icon: "check",
      },
      {
        title: "Month-end spreadsheet gymnastics",
        description:
          "Payroll meant stitching timesheets into a spreadsheet. HR runs the month in ₹ from one dashboard, and payslip PDFs generate themselves.",
        icon: "hr",
      },
    ],
    steps: [
      {
        title: "The pitch drafts itself",
        description:
          "Open the lead and ask for a proposal. A complete first draft arrives in minutes, exported as a branded PDF with line items in ₹.",
      },
      {
        title: "Won work becomes a project",
        description:
          "The deal flows into milestones with review gates — scope and context carry over, nobody re-enters anything.",
      },
      {
        title: "The team gets paid",
        description:
          "HR runs payroll from the same workspace, and every employee self-serves their own payslip PDF from their dashboard.",
      },
    ],
    moduleSlugs: ["ai-proposals", "projects", "hr-payroll"],
    faqQuestions: ["What does “coming soon” mean?", "Is there a mobile app?"],
  },
  "service-consulting": {
    heroTagline: "Every engagement, enquiry to paid invoice.",
    description:
      "Every consulting enquiry lands in the same 9-stage pipeline with its value in ₹ and next action visible, so no engagement stalls in an inbox. The AI drafts proposals from the lead's context, and fees flow into Tally-style vouchers with ageing that keeps collections honest.",
    heroStats: [
      { value: "9", label: "stages, first enquiry to Won" },
      { value: "Minutes", label: "to a branded proposal draft" },
      { value: "5", label: "ageing buckets on every fee" },
    ],
    painPoints: [
      {
        title: "Enquiries stall in inboxes",
        description:
          "Referrals and form-fills sat wherever they arrived. Fifteen lead sources feed one pipeline automatically, so nothing waits on someone checking email.",
        icon: "mail",
      },
      {
        title: "Proposals are copy-paste archaeology",
        description:
          "Digging up last quarter's deck to rewrite it. The AI drafts from this lead's context, and you refine every line before it goes out as a branded PDF.",
        icon: "doc",
      },
      {
        title: "Fees chased from memory",
        description:
          "Who owes what lived in the founder's head. Five ageing buckets and a Recovery role make follow-ups a queue, not a memory test.",
        icon: "ledger",
      },
      {
        title: "Everyone sees everything — or nothing",
        description:
          "Eight role-scoped dashboards: sales sees the pipeline, accounts sees vouchers, employees see their own work, and management sees all of it.",
        icon: "check",
      },
    ],
    steps: [
      {
        title: "The enquiry lands",
        description:
          "A form-fill or referral enters the 9-stage pipeline with its ₹ value and next action visible from day one.",
      },
      {
        title: "The proposal goes out in minutes",
        description:
          "AI drafts it from the lead's context; you edit and export a branded PDF that stays linked to the pipeline record.",
      },
      {
        title: "Fees are collected, not chased",
        description:
          "Won engagements flow into Tally-style vouchers, and receivables ageing queues the follow-ups before dues go stale.",
      },
    ],
    moduleSlugs: ["crm", "ai-proposals", "accounting-recovery"],
    faqQuestions: [],
  },
  "law-ca-cs": {
    heroTagline: "Matters tracked, filings gated, fees recovered.",
    description:
      "Run every matter and filing as a project with milestones and review gates, so nothing reaches a client — or a deadline — unchecked. Fee notes sit in Tally-style vouchers with five ageing buckets, and a dedicated Recovery role chases outstanding fees before they go stale.",
    heroStats: [
      { value: "Gates", label: "review before anything goes out" },
      { value: "5", label: "ageing buckets on every fee note" },
      { value: "Mumbai", label: "where your clients’ data lives" },
    ],
    painPoints: [
      {
        title: "Deadlines tracked in diaries",
        description:
          "Filing dates lived in registers and reminders. Every matter becomes milestones with dates, rolled up into one view across the whole practice.",
        icon: "kanban",
      },
      {
        title: "Work leaves the firm unreviewed",
        description:
          "A junior's draft went straight out. Review gates hold work at each milestone until a senior signs off.",
        icon: "check",
      },
      {
        title: "Fee recovery is awkward and late",
        description:
          "Chasing a client for fees is uncomfortable, so it slipped. Ageing buckets from 0–30 to 120+ days and a Recovery dashboard make the follow-up systematic.",
        icon: "ledger",
      },
      {
        title: "Engagement letters from scratch",
        description:
          "Every engagement letter was retyped. The AI drafts from the enquiry's context and you edit every line before it leaves — exported on your letterhead.",
        icon: "doc",
      },
    ],
    steps: [
      {
        title: "A matter opens as a project",
        description:
          "The engagement enters the pipeline; when it's won, it becomes a project with milestones and owners — no re-entry.",
      },
      {
        title: "Every filing passes a gate",
        description:
          "Work moves milestone by milestone, reviewed at each gate before it's allowed forward. Dates roll up into one view.",
      },
      {
        title: "Fees don't go stale",
        description:
          "Fee notes sit in Tally-style vouchers, ageing sorts the dues, and Recovery queues the follow-ups.",
      },
    ],
    moduleSlugs: ["projects", "accounting-recovery", "ai-proposals"],
    faqQuestions: ["Where is our data stored?"],
  },
  education: {
    heroTagline: "Admissions answered while interest is still high.",
    description:
      "A parent submits an admissions form and the AI voice agent calls back in seconds — while the family is still comparing options. Enquiries move through a 9-stage pipeline, and fees sit in Tally-style vouchers with ageing that flags dues before term-end.",
    heroStats: [
      { value: "Seconds", label: "from admission form to callback" },
      { value: "15", label: "sources feeding one admissions pipeline" },
      { value: "5", label: "ageing buckets on fee dues" },
    ],
    painPoints: [
      {
        title: "Enquiries answered the next morning",
        description:
          "By then the family had shortlisted elsewhere. The agent calls within seconds of the form-fill and can book the campus visit right on the call.",
        icon: "phone",
      },
      {
        title: "Admission forms in three inboxes",
        description:
          "Website forms, Meta ads, Google ads — all captured automatically into one 9-stage pipeline. No enquiry goes cold in an inbox.",
        icon: "mail",
      },
      {
        title: "Fee dues surface too late",
        description:
          "Pending fees showed up at term-end. Receivables ageing across five buckets keeps every outstanding ₹ visible, with Recovery owning the follow-ups.",
        icon: "ledger",
      },
      {
        title: "Counsellors walk in blind",
        description:
          "The full call transcript lands on the enquiry's CRM record, so the admissions team starts every conversation fully briefed.",
        icon: "crm",
      },
    ],
    steps: [
      {
        title: "The form triggers a callback",
        description:
          "A parent enquires through any of your 15 sources. Seconds later, their phone rings — in the voice you picked for your institution.",
      },
      {
        title: "The pipeline works the enquiry",
        description:
          "Admissions moves each family through nine stages, with the next action visible at every step.",
      },
      {
        title: "Fees stay collected",
        description:
          "Enrolled students' fees flow into Tally-style vouchers, and ageing flags dues before they become term-end surprises.",
      },
    ],
    moduleSlugs: ["ai-voice-agent", "crm", "accounting-recovery"],
    faqQuestions: ["Does the AI agent tell leads it’s an AI?", "How do leads get in?"],
  },
  healthcare: {
    heroTagline: "Enquiries answered, billing booked, staff paid.",
    description:
      "When someone enquires about an appointment, the AI voice agent calls back in seconds and books the visit right on the call. Billing runs on Tally-style vouchers with receivables ageing, and staff payroll — payslip PDFs included — comes out of the same workspace.",
    heroStats: [
      { value: "Seconds", label: "from enquiry to callback" },
      { value: "5", label: "ageing buckets on receivables" },
      { value: "PDF", label: "payslips for every staff member" },
    ],
    painPoints: [
      {
        title: "The front desk can't catch every call",
        description:
          "Appointment enquiries went to voicemail during rush hours. The agent calls every new web enquiry back in seconds and books the visit on the call — with an AI-disclosure toggle you control.",
        icon: "phone",
      },
      {
        title: "Billing in one system, dues in another",
        description:
          "Vouchers and outstanding balances finally live together: Tally-style entries your accountant knows, with ageing from 0–30 to 120+ days.",
        icon: "ledger",
      },
      {
        title: "Staff payroll is a month-end scramble",
        description:
          "Doctors, nurses, front desk — one payroll run in ₹, payslip PDFs generated per person, each staff member self-serving their own.",
        icon: "hr",
      },
    ],
    steps: [
      {
        title: "An appointment enquiry comes in",
        description:
          "A form-fill from your website or ads lands in the pipeline, and the agent dials back in seconds to book the visit.",
      },
      {
        title: "Billing lands in the books",
        description:
          "Consultations become Tally-style vouchers, and every receivable sits in an ageing bucket until it's collected.",
      },
      {
        title: "The team gets paid",
        description:
          "HR runs the month from one dashboard, and payslip PDFs deliver themselves to each staff member's own login.",
      },
    ],
    moduleSlugs: ["ai-voice-agent", "accounting-recovery", "hr-payroll"],
    faqQuestions: ["Where is our data stored?"],
  },
  "trading-distribution": {
    heroTagline: "Rates quoted fast, dues collected faster.",
    description:
      "A dealer asks for rates and gets an itemized, GST-ready quote in seconds — numbered, tracked and linked to their record. Won orders flow into Tally-style vouchers, and five ageing buckets keep every outstanding ₹ visible until it's collected.",
    heroStats: [
      { value: "Seconds", label: "to an itemized, GST-ready quote" },
      { value: "5", label: "ageing buckets on outstanding ₹" },
      { value: "9", label: "stages tracking every dealer enquiry" },
    ],
    painPoints: [
      {
        title: "Rate lists on WhatsApp, quotes in Excel",
        description:
          "Quotations builds the itemized quote — quantity, rate, GST, totals in ₹ — in seconds, while the dealer is still on the line.",
        icon: "quote",
      },
      {
        title: "Which quote did the dealer accept?",
        description:
          "Every quote keeps its number and its sent and accepted status, linked to the dealer's record. Follow-up is never guesswork.",
        icon: "check",
      },
      {
        title: "Credit extended, collections forgotten",
        description:
          "Dealer credit used to age silently. Five ageing buckets and a Recovery role chase dues from 0–30 days out to 120+ — before they harden.",
        icon: "ledger",
      },
      {
        title: "Dealer enquiries scattered across salespeople",
        description:
          "Fifteen lead sources land in one 9-stage pipeline, so every dealer enquiry has a stage, a ₹ value and an owner.",
        icon: "crm",
      },
    ],
    steps: [
      {
        title: "A dealer asks for rates",
        description:
          "The enquiry lands in the pipeline — from a form, an ad or the webhook — and gets an itemized, GST-ready quote in seconds.",
      },
      {
        title: "The quote becomes a voucher",
        description:
          "When the dealer accepts, the won order flows into Tally-style vouchers. What was quoted is what gets invoiced.",
      },
      {
        title: "Collections run on ageing",
        description:
          "Every outstanding ₹ sits in an ageing bucket, and the Recovery dashboard queues the follow-up calls on time.",
      },
    ],
    moduleSlugs: ["quotations", "accounting-recovery", "crm"],
    faqQuestions: ["Is there a mobile app?"],
  },
} satisfies Record<string, IndustryPageExtras>;

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

/**
 * The single plan's commercial terms. Every page that prints a number reads it
 * from here — the home Pricing card, /pricing and the /faqs answers.
 * Amounts are GST-inclusive: ₹199 is what the customer pays.
 *
 * Note ₹1,999 a year is NOT "two months free" (ten months would be ₹1,990).
 * Annual copy says "save ₹389 a user" or "about 16% off" — never "two months".
 */
export const PLAN = {
  monthly: 199,
  annualPerUser: 1999,
  annualPerMonth: 167, // 1999 / 12, rounded for display
  annualSavingPerUser: 389, // 199 * 12 - 1999
  annualSavingPercent: 16, // 389 / 2388
  trialDays: 14,
} as const;

/** Formats a rupee amount the way the product itself does — en-IN, lakhs. */
export const inr = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;

/**
 * The plan questions, asked and answered with the number in the open.
 * Rendered by /pricing and by the /faqs "Plan & pricing" group, so the two
 * can never drift apart.
 */
export const PRICING_FAQS: Faq[] = [
  {
    question: "How much does BizvoraOne cost?",
    answer:
      "₹199 per user per month, GST included, with every module in. Pay yearly and it’s ₹1,999 per user — ₹389 a seat saved. There’s one plan, so nobody discovers a feature on a higher tier.",
  },
  {
    question: "Is GST extra?",
    answer:
      "No. ₹199 is what you pay. GST is included in the price, and your invoice shows the split so your accountant can claim the input credit.",
  },
  {
    question: "What exactly is included?",
    answer:
      "All of it: CRM with the 9-stage pipeline and 15 lead sources, the AI voice agent, AI proposals with branded PDFs, quotations, accounting vouchers with recovery and collections, projects with milestones and review gates, HR with payroll and payslip PDFs, and 8 role-scoped dashboards.",
  },
  {
    question: "Do some modules cost extra?",
    answer:
      "No. There are no tiers, no feature gates and no per-module add-ons. Every module ships to every customer, at the same ₹199 a seat.",
  },
  {
    question: "Can we try it first?",
    answer:
      "14 days, no card. You get the full product — every module, every dashboard — not a cut-down version of it.",
  },
  {
    question: "What if our team grows or shrinks?",
    answer:
      "Add or remove users any month. You’re billed for the seats you have, and the rate per seat never changes with team size.",
  },
];

export const FAQS: Faq[] = [
  PRICING_FAQS[0],
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
    ],
  },
  {
    heading: "Information",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Request a Demo", href: "/contact" },
      { label: "Contact Us", href: "/contact" },
      { label: "FAQs", href: "/faqs" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];
