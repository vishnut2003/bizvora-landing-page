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

export interface Industry {
  name: string;
  blurb: string;
  icon: MarkName;
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
