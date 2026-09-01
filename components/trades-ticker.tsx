import type { CSSProperties } from "react";
import Link from "next/link";
import { Mark } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { INDUSTRIES, MODULES } from "@/lib/bizvora";
import { cn } from "@/lib/utils";

/** Anchor ids on /industries, matching the nav's /industries/<slug> naming. */
const INDUSTRY_ANCHORS: Record<string, string> = {
  Manufacturing: "manufacturing",
  "Real Estate & Construction": "real-estate-construction",
  "IT & Agencies": "it-agencies",
  "Service & Consulting": "service-consulting",
  "Law & CA / CS Firms": "law-ca-cs",
  Education: "education",
  Healthcare: "healthcare",
  "Trading & Distribution": "trading-distribution",
};

const CHIP_CLASSES =
  "flex shrink-0 items-center gap-2.5 rounded-full border border-ink/10 bg-white py-2 pr-5 pl-2.5 shadow-[0_1px_2px_rgba(23,23,23,0.04),0_8px_16px_-10px_rgba(69,6,147,0.2)] transition-colors duration-200 hover:border-primary/30";

/**
 * Counter-scrolling ticker: industries drift left, the modules they run on
 * drift right. Both rows reuse the home marquee CSS (edge mask, hover pause,
 * reduced-motion off); the second adds `marquee-reverse`. Four chip sets per
 * track, translating -50% (two sets per loop half), keep the loop gapless on
 * wide viewports; every set after the first is aria-hidden and unfocusable.
 *
 * `industryLinkBase` prefixes the industry chips' anchor links — "" on
 * /industries itself, "/industries" everywhere else.
 */
export function TradesTicker({
  industryLinkBase = "",
  className,
}: {
  industryLinkBase?: string;
  className?: string;
}) {
  const sets = [0, 1, 2, 3];
  return (
    <section className={cn("flex w-full flex-col items-center gap-6", className)}>
      <Reveal variant="up" distance={20}>
        <span className="px-5 text-center text-[12px] font-semibold tracking-[0.14em] text-primary-dark/70 uppercase">
          One workspace, trusted across trades
        </span>
      </Reveal>

      <div className="flex w-full flex-col gap-4">
        {/* industries, drifting left */}
        <div
          // -my keeps the row height as if the padding weren't there; the
          // padding gives clipped-overflow room so chip shadows fade out uncut
          className="marquee-viewport -my-4 w-full py-5"
          style={
            { "--marquee-distance": "50%", "--marquee-duration": "64s" } as CSSProperties
          }
        >
          <ul className="marquee-track flex w-max list-none items-center gap-4 pr-4">
            {sets.flatMap((set) =>
              INDUSTRIES.map((industry) => (
                <li key={`${set}-${industry.name}`} aria-hidden={set > 0}>
                  <Link
                    href={`${industryLinkBase}#${INDUSTRY_ANCHORS[industry.name]}`}
                    tabIndex={set > 0 ? -1 : undefined}
                    className={CHIP_CLASSES}
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-10">
                      <Mark name={industry.icon} className="size-4 text-primary-dark" />
                    </span>
                    <span className="text-[13px] leading-[1.3] font-semibold whitespace-nowrap text-ink">
                      {industry.name}
                    </span>
                  </Link>
                </li>
              )),
            )}
          </ul>
        </div>

        {/* the modules behind them, drifting right */}
        <div
          className="marquee-viewport -my-4 w-full py-5"
          style={
            { "--marquee-distance": "50%", "--marquee-duration": "46s" } as CSSProperties
          }
        >
          <ul className="marquee-track marquee-reverse flex w-max list-none items-center gap-4 pr-4">
            {sets.flatMap((set) =>
              MODULES.map((mod) => (
                <li key={`${set}-${mod.slug}`} aria-hidden={set > 0}>
                  <Link
                    href={`/modules/${mod.slug}`}
                    tabIndex={set > 0 ? -1 : undefined}
                    className={CHIP_CLASSES}
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-tile">
                      <Mark name={mod.icon} className="size-4 text-primary-dark" />
                    </span>
                    <span className="text-[13px] leading-[1.3] font-semibold whitespace-nowrap text-ink">
                      {mod.name}
                    </span>
                  </Link>
                </li>
              )),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
