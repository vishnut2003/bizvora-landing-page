import Image from "next/image";
import {
  ArrowUpRightIcon,
  BizvoraLogoIcon,
  ChevronDownIcon,
} from "@/components/icons";
import davidSingh from "./assets/david-singh.png";
import globalMap from "./assets/global-map.png";

/**
 * The hero artwork — a BizvoraOne product shot built in markup
 * rather than shipped as a PNG, so the text stays crisp and editable.
 * Dark shell, nav row,
 * greeting gauge + 2x2 stat grid, then a locations row.
 *
 * Everything sizes off the root `font-size`, which is a `cqw` value, so the
 * whole board scales with its container the way the bitmap used to.
 * That means: use `em` for every dimension in here, never rem/px.
 */

const NAV = ["CRM", "Proposals", "Accounting", "Projects & HR"];

const STATS = [
  {
    label: "Leads",
    value: "6,523",
    badge: "Fast Growing",
    badgeClass: "bg-[#eee0ff]",
    note: "Captured automatically from all 15 lead sources this month",
  },
  {
    label: "Proposals",
    value: "1,234",
    badge: "AI-Drafted",
    badgeClass: "bg-[#d9baff]",
    note: "Drafted by AI from each lead’s context, sent as branded PDFs",
  },
  {
    label: "Revenue",
    value: "₹10,00,000",
    badge: "Record-Breaking",
    badgeClass: "bg-[#f2ec72]",
    note: "This quarter’s collections have exceeded every target we set",
  },
  {
    label: "Recovery",
    value: "56%",
    badge: "Improving",
    badgeClass: "bg-[#d9baff]",
    note: "Outstanding invoices are clearing faster than last quarter",
  },
];

const LOCATIONS = [
  { name: "Uttar Pradesh", pct: 89 },
  { name: "Delhi NCR", pct: 64 },
];

/** Tricolour pip — the flag badge pinned to the arc. */
function StatePip({ className }: { className: string }) {
  return (
    <span
      className={`absolute flex size-[1.4em] items-center justify-center rounded-full bg-white/40 ring-[0.08em] ring-white ${className}`}
    >
      <span className="size-[0.9em] rounded-full bg-[linear-gradient(180deg,#ff9933_33%,#fff_33%_66%,#138808_66%)]" />
    </span>
  );
}

/**
 * Semicircular gauge. One stroked arc, dashed into five segments — the
 * dasharray is in user units on a path of length πr (r = 146.3 → ~459.6).
 */
function Gauge() {
  return (
    <svg viewBox="0 0 326 170" className="w-full" aria-hidden="true">
      <defs>
        <linearGradient id="v2-gauge" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#450693" />
          <stop offset="45%" stopColor="#8C00FF" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <path
        d="M16.7 163a146.3 146.3 0 0 1 292.6 0"
        fill="none"
        stroke="url(#v2-gauge)"
        strokeWidth="32.6"
        strokeDasharray="78 18"
        strokeLinecap="butt"
      />
    </svg>
  );
}

export function HeroDashboard() {
  return (
    <div className="@container w-full">
      <div
        role="img"
        aria-label="BizvoraOne dashboard: 6,523 leads, 1,234 AI proposals, ₹10,00,000 revenue and 56% recovery, with revenue by location"
        className="overflow-hidden rounded-[1.5em] bg-ink p-[0.6em] text-[1.5625cqw] leading-none text-ink"
      >
        <div className="overflow-hidden rounded-[1.1em] bg-white">
          {/* --- app chrome ------------------------------------------------ */}
          <div className="flex items-center justify-between gap-[1em] px-[1.4em] py-[1.1em]">
            <div className="flex items-center gap-[0.5em]">
              <BizvoraLogoIcon className="size-[1.9em] shrink-0" />
              <span className="text-[1.15em] font-medium tracking-[-0.03em]">
                BizvoraOne
              </span>
            </div>

            <div className="flex items-center gap-[0.4em]">
              <span className="flex items-center gap-[0.45em] rounded-full bg-ink px-[1.1em] py-[0.6em] text-[0.8em] font-medium text-white">
                <BizvoraLogoIcon className="size-[1.1em] shrink-0" />
                Dashboard
              </span>
              {NAV.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-[0.4em] px-[0.9em] py-[0.6em] text-[0.8em] text-ink-70"
                >
                  {item}
                  <ChevronDownIcon className="h-[0.35em] w-[0.55em]" />
                </span>
              ))}
            </div>

            <Image
              src={davidSingh}
              alt=""
              width={96}
              height={96}
              className="size-[2.2em] shrink-0 rounded-full object-cover"
            />
          </div>

          {/* --- row 1: greeting gauge + stat grid ------------------------- */}
          <div className="flex gap-[0.7em] px-[0.7em]">
            <div className="relative flex w-[40%] flex-col items-center gap-[0.6em] overflow-hidden rounded-[1em] bg-[linear-gradient(180deg,#f3eaff_0%,#faf6ff_100%)] px-[1.2em] pt-[1.4em] pb-[1.6em]">
              <p className="text-[1.6em] font-medium tracking-[-0.03em]">
                Hello, Suraj
              </p>
              <p className="text-[0.85em] leading-[1.4] text-ink-70">
                Your pipeline is moving right now
              </p>

              <div className="relative mt-[0.4em] w-[80%]">
                <Gauge />
                <StatePip className="top-[26%] left-[6%]" />
                <StatePip className="top-[-1%] left-[36%]" />
                <StatePip className="top-[16%] right-[10%]" />

                <div className="absolute inset-x-0 bottom-[2%] flex flex-col items-center gap-[0.2em]">
                  <p className="text-[2.4em] font-medium tracking-[-0.04em]">
                    87<span className="text-[0.7em]">%</span>
                  </p>
                  <p className="text-[0.85em] text-ink-70">Leads called back</p>
                  <p className="text-[0.85em] text-ink-70">
                    within the first{" "}
                    <span className="text-ink">60 seconds</span>
                  </p>
                </div>

                {/* floating callout on the arc */}
                <div className="absolute top-[18%] -left-[6%] rounded-[0.5em] bg-white px-[0.7em] py-[0.5em] shadow-[0_0.3em_0.8em_rgba(14,20,8,0.1)]">
                  <p className="text-[0.9em] font-medium">
                    ₹4.2L{" "}
                    <span className="text-[0.7em] font-normal text-primary-dark">
                      closed
                    </span>
                  </p>
                  <p className="text-[0.75em] text-ink-70">Noida</p>
                </div>
              </div>
            </div>

            <div className="grid w-[60%] grid-cols-2 gap-[0.7em]">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-[0.5em] rounded-[1em] bg-surface-muted p-[1em]"
                >
                  <div className="flex items-start justify-between gap-[0.5em]">
                    <p className="text-[0.9em] font-medium">{stat.label}</p>
                    <span className="flex size-[1.4em] items-center justify-center rounded-full bg-white">
                      <ArrowUpRightIcon className="size-[0.7em]" />
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-[0.4em]">
                    <p className="text-[1.7em] font-medium tracking-[-0.04em]">
                      {stat.value}
                    </p>
                    <span
                      className={`rounded-full px-[0.7em] py-[0.35em] text-[0.7em] font-medium ${stat.badgeClass}`}
                    >
                      {stat.badge}
                    </span>
                  </div>
                  <p className="text-[0.75em] leading-[1.45] text-ink-50">
                    {stat.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* --- row 2: revenue by state ----------------------------------- */}
          <div className="mt-[0.7em] flex gap-[0.7em] px-[0.7em]">
            <div className="w-[58%] rounded-[1em] bg-surface-muted px-[1em] pt-[0.9em] pb-[0.5em]">
              <p className="text-[1em] font-medium">Revenue By Locations</p>
              {/* The source map bakes in its own tooltip on the left third, so
                  the frame is shifted to drop it and we draw our own. */}
              <div className="relative mt-[0.4em] h-[7.5em] overflow-hidden">
                <Image
                  src={globalMap}
                  alt=""
                  width={2013}
                  height={1408}
                  className="absolute top-1/2 left-[-54%] w-[154%] max-w-none -translate-y-1/2 opacity-90"
                />
                <div className="absolute top-[24%] left-[30%] rounded-[0.5em] bg-white px-[0.7em] py-[0.5em] shadow-[0_0.3em_0.8em_rgba(14,20,8,0.12)]">
                  <p className="text-[0.9em] font-medium">
                    ₹26L{" "}
                    <span className="text-[0.7em] font-normal text-primary-dark">
                      revenue
                    </span>
                  </p>
                  <p className="text-[0.75em] text-ink-70">Noida</p>
                </div>
                <span className="absolute top-[62%] left-[35%] size-[0.9em] rounded-full bg-primary ring-[0.25em] ring-primary-50" />
              </div>
            </div>

            <div className="flex w-[42%] flex-col justify-center gap-[0.9em] rounded-[1em] bg-surface-muted px-[1.2em] py-[1em]">
              {LOCATIONS.map((loc) => (
                <div key={loc.name} className="flex flex-col gap-[0.45em]">
                  <div className="flex items-center justify-between text-[0.85em]">
                    <span className="flex items-center gap-[0.5em]">
                      <span className="size-[0.9em] rounded-full bg-[linear-gradient(180deg,#ff9933_33%,#fff_33%_66%,#138808_66%)]" />
                      {loc.name}
                    </span>
                    <span className="text-ink-70">{loc.pct}%</span>
                  </div>
                  <div className="h-[0.65em] w-full overflow-hidden rounded-full bg-[repeating-linear-gradient(115deg,#fbdcc9_0_0.25em,#fdece3_0.25em_0.5em)]">
                    <div
                      className="h-full rounded-full bg-[repeating-linear-gradient(115deg,#7a1fd6_0_0.25em,#8C00FF_0.25em_0.5em)]"
                      style={{ width: `${loc.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- row 3: clipped, so the board reads as a taller app -------- */}
          <div className="mt-[0.7em] flex h-[2.2em] gap-[0.7em] overflow-hidden px-[0.7em]">
            {["Recent Vouchers", "Top Sales Reps"].map((title) => (
              <div
                key={title}
                className="flex w-1/2 items-center justify-between rounded-t-[1em] bg-surface-muted px-[1em] pt-[0.9em]"
              >
                <p className="text-[1em] font-medium">{title}</p>
                <span className="flex size-[1.4em] items-center justify-center rounded-full bg-white">
                  <ArrowUpRightIcon className="size-[0.7em]" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
