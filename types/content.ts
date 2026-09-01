import type { MarkName } from "@/components/icons";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup extends NavLink {
  children: NavLink[];
}

export interface Feature {
  title: string;
  description: string;
  /** Artwork files live beside the section that renders them (statically imported). */
  image: { alt: string };
}

export interface Metric {
  /** Numeric target the count-up animates to. */
  value: number;
  /** Rendered after the number, e.g. "%", "+", "K+". */
  suffix: string;
  label: string;
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

/** One of the six BizvoraOne modules, as shown in the 6-up strip. */
export interface Module {
  name: string;
  blurb: string;
  icon: MarkName;
}

/** A module's full record for the /modules deep-dive page. */
export interface ModuleDetail {
  /** Anchor id on /modules today; the future /modules/<slug> route. */
  slug: string;
  name: string;
  /** Category label above the heading, e.g. "Sales". */
  eyebrow: string;
  /** One-liner — kept identical to the header/strip blurbs. */
  blurb: string;
  /** Two sentences for the deep-dive section. */
  description: string;
  /** Check-bulleted capability list. */
  features: string[];
  icon: MarkName;
  /** Highlight chip in the copy column. */
  stat: { value: string; label: string };
  /** Accessible label for the section's SVG artwork. */
  artAlt: string;
}

/** One expanded capability card on a /modules/<slug> page. */
export interface ModuleFeatureCard {
  title: string;
  description: string;
  icon: MarkName;
}

/** One "how it works" step on a /modules/<slug> page. */
export interface ModuleStep {
  title: string;
  description: string;
}

/** Extra copy for /modules/<slug>; composes with ModuleDetail at render. */
export interface ModulePageExtras {
  /** Gradient value-prop line under the h1, distinct from the description. */
  heroTagline: string;
  /** Exactly three: hero satellites on desktop, a compact row on mobile. */
  heroStats: { value: string; label: string }[];
  featureCards: ModuleFeatureCard[];
  steps: [ModuleStep, ModuleStep, ModuleStep];
  /** Resolved against ROLES by name at render — no copy duplication. */
  roleNames: string[];
  /** Sibling module slugs, resolved against MODULES. */
  related: string[];
  /** Resolved against FAQS by exact question text (curly quotes included). */
  faqQuestions: string[];
}

export interface Industry {
  /** The /industries/<slug> route and the anchor id on /industries. */
  slug: string;
  name: string;
  blurb: string;
  icon: MarkName;
}

/** One daily-frustration card on an /industries/<slug> page. */
export interface IndustryPainPoint {
  title: string;
  description: string;
  icon: MarkName;
}

/** Extra copy for /industries/<slug>; composes with Industry at render. */
export interface IndustryPageExtras {
  /** Gradient value-prop line after the h1 name. */
  heroTagline: string;
  /** Two-sentence hero paragraph. */
  description: string;
  /** Exactly three: hero satellites on desktop, a compact row on mobile. */
  heroStats: { value: string; label: string }[];
  /** 3-4 pain→relief cards. */
  painPoints: IndustryPainPoint[];
  steps: [ModuleStep, ModuleStep, ModuleStep];
  /** The three modules this industry leans on, resolved against MODULES. */
  moduleSlugs: string[];
  /** Resolved against FAQS by exact question text (curly quotes included). */
  faqQuestions: string[];
}

/** A role-scoped dashboard: who it is for and what it shows them. */
export interface Role {
  name: string;
  sees: string;
}

export interface Faq {
  question: string;
  answer: string;
}
