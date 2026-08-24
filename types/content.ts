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
