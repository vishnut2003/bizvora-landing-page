import { AudioLines, Mail, Webhook } from "lucide-react";
import { INTEGRATIONS } from "@/lib/bizvora";

/** Meta's infinity mark, simplified for 18px rendering. */
function MetaGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-[18px]">
      <path
        fill="#0866FF"
        d="M16.7 6.5c-1.7 0-3 1.1-4.4 3.1C11 7.6 9.7 6.5 8 6.5 5.3 6.5 3 9.6 3 13c0 2.6 1.3 4.5 3.4 4.5 1.6 0 2.8-.9 4.4-3.3l1-1.5.7 1.2c1.6 2.5 2.8 3.6 4.5 3.6 2.1 0 3.4-1.9 3.4-4.6 0-3.4-2.4-6.4-4.7-6.4ZM10.6 12l-.9 1.4c-1.3 2-2 2.6-3.1 2.6-1.1 0-1.8-1-1.8-2.6 0-2.4 1.6-4.8 3.3-4.8 1 0 1.8.7 3.1 2.6l-.6.8Zm6.6 4c-1 0-1.7-.7-3.1-2.9l-.7-1.1c1.3-2 2.1-2.8 3.1-2.8 1.5 0 2.7 2.1 2.7 4.4 0 1.5-.7 2.4-2 2.4Z"
      />
    </svg>
  );
}

/** Google Ads mark: two slanted capsules plus the green dot. */
function GoogleAdsGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-[18px]">
      <rect
        x="6.75"
        y="2.5"
        width="5.5"
        height="13"
        rx="2.75"
        transform="rotate(30 9.5 9)"
        fill="#FBBC04"
      />
      <rect
        x="12.25"
        y="6.5"
        width="5.5"
        height="13"
        rx="2.75"
        transform="rotate(30 15 13)"
        fill="#4285F4"
      />
      <circle cx="6.4" cy="18.6" r="2.75" fill="#34A853" />
    </svg>
  );
}

/** Claude's terracotta starburst, twelve rays. */
function ClaudeGlyph() {
  const rays = Array.from({ length: 12 }, (_, i) => {
    const a = (i * Math.PI) / 6;
    const [cos, sin] = [Math.cos(a), Math.sin(a)];
    return {
      x1: 12 + 3.2 * cos,
      y1: 12 + 3.2 * sin,
      x2: 12 + 9.4 * cos,
      y2: 12 + 9.4 * sin,
    };
  });
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-[18px]">
      <g stroke="#D97757" strokeWidth="2.3" strokeLinecap="round">
        {rays.map((r, i) => (
          <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} />
        ))}
      </g>
    </svg>
  );
}

/** Per-integration glyph + badge tint, keyed by the lib's integration name. */
const CHIP_ART: Record<
  (typeof INTEGRATIONS)[number]["name"],
  { icon: React.ReactNode; badgeClass: string }
> = {
  "Meta Ads": { icon: <MetaGlyph />, badgeClass: "bg-[#0866FF]/10" },
  "Google Ads": { icon: <GoogleAdsGlyph />, badgeClass: "bg-surface-muted" },
  Webhooks: {
    icon: <Webhook className="size-[18px] text-primary" strokeWidth={2} />,
    badgeClass: "bg-primary-10",
  },
  Vapi: {
    icon: <AudioLines className="size-[18px] text-emerald-600" strokeWidth={2.2} />,
    badgeClass: "bg-emerald-500/10",
  },
  Claude: { icon: <ClaudeGlyph />, badgeClass: "bg-[#D97757]/12" },
  Resend: {
    icon: <Mail className="size-[18px] text-ink" strokeWidth={2} />,
    badgeClass: "bg-ink/5",
  },
};

/**
 * Integrations ticker — logo chips drifting leftward, edge-masked at
 * 12.5%/87.5%, paused on hover. Chips are natural-width, so the track holds
 * two identical sets and the keyframe translates by -50% (one full set:
 * uniform 20px gaps plus a matching 20px trailing pad keep the loop seamless).
 */
export function PartnerMarquee() {
  const sets = [0, 1];

  return (
    <div
      // -my keeps the row height as if the padding weren't there; the padding
      // itself gives clipped-overflow room so chip shadows fade out uncut
      className="marquee-viewport -my-3 w-full max-w-[655px] py-6"
      style={
        {
          "--marquee-distance": "50%",
          "--marquee-duration": "32s",
        } as React.CSSProperties
      }
    >
      <ul className="marquee-track flex w-max list-none items-center gap-5 pr-5">
        {sets.flatMap((set) =>
          INTEGRATIONS.map(({ name, tag }) => (
            <li
              key={`${set}-${name}`}
              aria-hidden={set === 1}
              className="flex shrink-0 items-center gap-3 rounded-full border border-ink/10 bg-white py-2 pr-6 pl-2.5 shadow-[0_1px_2px_rgba(23,23,23,0.04),0_8px_16px_-10px_rgba(69,6,147,0.2)] transition-colors duration-200 hover:border-primary/30"
            >
              <span
                className={`flex size-9 shrink-0 items-center justify-center rounded-full ${CHIP_ART[name].badgeClass}`}
              >
                {CHIP_ART[name].icon}
              </span>
              <span className="flex flex-col">
                <span className="text-[14px] leading-[1.3] font-semibold whitespace-nowrap text-ink">
                  {name}
                </span>
                <span className="text-[11px] leading-[1.3] font-medium tracking-[0.06em] whitespace-nowrap text-ink-50 uppercase">
                  {tag}
                </span>
              </span>
            </li>
          )),
        )}
      </ul>
    </div>
  );
}
