import { INTEGRATIONS } from "@/lib/bizvora";

const GAP = 60;
const SPEED = 100; // px/s
const ITEM_WIDTH = 180; // uniform: these are wordmarks we set, not fixed-size logo files
const SET_WIDTH = INTEGRATIONS.length * (ITEM_WIDTH + GAP);

/**
 * Integrations ticker — 100px/s leftward, edge-masked at
 * 12.5%/87.5% — carrying integration names as text. Two sets is enough here:
 * one set is 1440px, so the track never runs dry inside the 655px viewport.
 */
export function PartnerMarquee() {
  const sets = [0, 1];

  return (
    <div
      className="marquee-viewport h-14 w-full max-w-[655px]"
      style={
        {
          "--marquee-distance": `${SET_WIDTH}px`,
          "--marquee-duration": `${SET_WIDTH / SPEED}s`,
        } as React.CSSProperties
      }
    >
      <ul className="marquee-track flex h-full w-max list-none items-center gap-[60px] pr-[60px]">
        {sets.flatMap((set) =>
          INTEGRATIONS.map((name) => (
            <li
              key={`${set}-${name}`}
              className="w-[180px] shrink-0 text-center text-[20px] leading-[1.5] font-medium whitespace-nowrap text-ink-70"
            >
              {name}
            </li>
          )),
        )}
      </ul>
    </div>
  );
}
