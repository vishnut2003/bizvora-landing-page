/**
 * The lead form's shape, shared by the demo modal and available to the two
 * inline forms (/contact and the home Contact band) if they ever converge.
 */

export const LEAD_FIELDS = [
  { name: "name", type: "text", placeholder: "Your name", required: true },
  { name: "phone", type: "tel", placeholder: "Phone number", required: true },
  { name: "email", type: "email", placeholder: "Email", required: true },
  { name: "company", type: "text", placeholder: "Company", required: false },
] as const;

export const LEAD_TRUST_POINTS = [
  "Free live demo",
  "All 7 modules included",
  "Hosted in Mumbai",
];

export const leadInputClass =
  "h-[54px] w-full min-w-0 shrink-0 rounded-[40px] border border-transparent bg-surface-muted px-6 text-[14px] leading-[1.6] text-ink transition-colors duration-200 placeholder:text-ink-50 focus:border-primary/50 focus:bg-white focus:ring-2 focus:ring-primary/25 focus:outline-none";
