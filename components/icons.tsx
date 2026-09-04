import type { SVGProps } from "react";

/**
 * Bizvora mark ("Ascend") — four rising pillars, lime→cyan across the set.
 * Free-standing, so it needs a ground with contrast on both ends of the
 * gradient; the tiled build in `app/icon.svg` (white pillars on the brand
 * gradient) is the one for favicons and app icons.
 */
export function BizvoraLogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden {...props}>
      <defs>
        <linearGradient
          id="bizvora-mark"
          gradientUnits="userSpaceOnUse"
          x1="6"
          y1="0"
          x2="58"
          y2="0"
        >
          <stop offset="0" stopColor="rgb(140, 0, 255)" />
          <stop offset="1" stopColor="rgb(69, 6, 147)" />
        </linearGradient>
      </defs>
      <g fill="url(#bizvora-mark)">
        <rect x="6" y="44" width="10" height="14" rx="5" />
        <rect x="20" y="34" width="10" height="24" rx="5" />
        <rect x="34" y="24" width="10" height="34" rx="5" />
        <rect x="48" y="6" width="10" height="52" rx="5" />
      </g>
    </svg>
  );
}

/** Nav "Pages" affordance. */
export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 8 5" fill="none" aria-hidden {...props}>
      <path
        d="M 0 0.5 L 4 4.5 L 8 0.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Vertical hairline between the partner lead-in and the marquee. */
export function VerticalRuleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 3 43" fill="none" aria-hidden {...props}>
      <path d="M 1.5 1 L 1.5 42" stroke="rgba(23, 23, 23, 0.7)" opacity="0.5" />
    </svg>
  );
}

/** Revealed on button hover. */
export function ArrowUpRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden {...props}>
      <path
        d="M3 9L9 3M9 3H4M9 3V8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Mobile nav trigger. */
export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Dismisses the demo modal and the mobile nav drawer. */
export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden {...props}>
      <path
        d="M4 4l8 8M12 4l-8 8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * 24×24 stroke marks ported verbatim from the BizvoraOne source page's
 * `<symbol>` sprite — module, industry and utility glyphs.
 * One component instead of 16 near-identical ones; they differ only in paths.
 */
const MARKS = {
  mail: (
    <>
      <rect
        x="3"
        y="5.5"
        width="18"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M3.8 7 12 12.8 20.2 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.6" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M4.5 20c.9-3.6 3.9-5.5 7.5-5.5s6.6 1.9 7.5 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>
  ),
  crm: (
    <>
      <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3.5 19c.7-3 2.9-4.5 5.5-4.5s4.8 1.5 5.5 4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="17" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M16.5 14.6c2.2.2 3.6 1.4 4.1 3.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>
  ),
  doc: (
    <>
      <path d="M6 3h8l4 4v14H6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path
        d="M14 3v4h4M9 12h6M9 16h6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>
  ),
  quote: (
    <>
      <path
        d="M3 12l9-9 9 3-2 9-9 6z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        transform="rotate(45 12 12)"
      />
      <circle cx="9" cy="9" r="1.4" fill="currentColor" />
    </>
  ),
  ledger: (
    <>
      <path
        d="M5 4h13a1 1 0 0 1 1 1v15H6a1 1 0 0 1-1-1z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 4v16M12.5 9H16M12.5 13H16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>
  ),
  kanban: (
    <>
      <rect x="3.5" y="4" width="5" height="16" rx="1.2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="10" y="4" width="5" height="10" rx="1.2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="16.5" y="4" width="5" height="13" rx="1.2" stroke="currentColor" strokeWidth="1.8" />
    </>
  ),
  hr: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="8.5" cy="11" r="2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M5.5 16c.5-1.4 1.7-2.1 3-2.1s2.5.7 3 2.1M14.5 9.5H18M14.5 13H18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>
  ),
  phone: (
    <path
      d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2.3z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  ),
  check: (
    <path
      d="M20 6 9 17l-5-5"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  factory: (
    <path
      d="M3 21V9l6 4V9l6 4V4h6v17z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  ),
  building: (
    <path
      d="M4 21V5a1 1 0 0 1 1-1h9v17M14 9h5a1 1 0 0 1 1 1v11M3 21h18M8 8h2M8 12h2M8 16h2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  laptop: (
    <>
      <rect x="4" y="4.5" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M2 19.5h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  brief: (
    <>
      <rect x="3" y="7.5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M9 7.5V5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5v2.5M3 13h18"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </>
  ),
  scale: (
    <path
      d="M12 3v18M5 6l7-2 7 2M5 6l-2.5 6a3.5 3.5 0 0 0 5 0zM19 6l-2.5 6a3.5 3.5 0 0 0 5 0zM8 21h8"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  cap: (
    <>
      <path
        d="M2 9.5 12 5l10 4.5L12 14z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M6 11.8V17c1.8 1.5 10.2 1.5 12 0v-5.2M22 9.5V15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>
  ),
  pulse: (
    <path
      d="M2 12h4l3-7 6 14 3-7h4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  truck: (
    <>
      <path
        d="M2 6h12v11H2zM14 10h4l4 4v3h-8z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="18.5" r="1.8" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="18.5" r="1.8" stroke="currentColor" strokeWidth="1.8" />
    </>
  ),
} as const;

export type MarkName = keyof typeof MARKS;

export function Mark({ name, ...props }: { name: MarkName } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      {MARKS[name]}
    </svg>
  );
}
