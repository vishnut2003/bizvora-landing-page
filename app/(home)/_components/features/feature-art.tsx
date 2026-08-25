import type { CSSProperties, SVGProps } from "react";

/**
 * Inline SVG artwork for the three module cards, replacing the cloned PNGs.
 * All motion is CSS-only (`fa-*` classes in globals.css): one-shot builds
 * (bars grow, lines draw, rows rise) held paused until the wrapping
 * `<Reveal>` sets `data-revealed`, plus gentle infinite accents
 * (sparkle twinkle, chip float, live-dot ping).
 */

const delay = (s: number): CSSProperties => ({ animationDelay: `${s}s` });

/** Four-point sparkle, drawn around (0,0) with a 10-unit radius. */
const STAR_PATH =
  "M0 -10 C1.5 -3 3 -1.5 10 0 C3 1.5 1.5 3 0 10 C-1.5 3 -3 1.5 -10 0 C-3 -1.5 -1.5 -3 0 -10 Z";

function Sparkle({
  x,
  y,
  scale = 1,
  fill,
  twinkleDelay = 0,
}: {
  x: number;
  y: number;
  scale?: number;
  fill: string;
  twinkleDelay?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path className="fa-anim fa-twinkle" style={delay(twinkleDelay)} d={STAR_PATH} fill={fill} />
    </g>
  );
}

/* ---------------------------------------------------------------- CRM ---- */

const TREND = [
  [78, 84],
  [128, 74],
  [178, 78],
  [228, 64],
  [278, 66],
  [328, 52],
  [378, 42],
  [418, 30],
] as const;

const FUNNEL_WIDTHS = [250, 224, 198, 172, 146, 120, 96];

const FUNNEL_LABELS: { text: string; row: number }[] = [
  { text: "New", row: 0 },
  { text: "Qualified", row: 3 },
  { text: "Won", row: 6 },
];

const funnelY = (row: number) => 108 + row * 17;

export function CrmPipelineArt(props: SVGProps<SVGSVGElement>) {
  const last = TREND[TREND.length - 1];
  return (
    <svg viewBox="0 0 468 234" fill="none" {...props}>
      <rect x="10" y="8" width="448" height="218" rx="14" fill="#fff" stroke="#E4E4E7" />

      {/* conversion trend line, drawn left to right */}
      <path
        className="fa-anim fa-line"
        style={{ "--fa-len": "360" } as CSSProperties}
        d={`M${TREND.map(([x, y]) => `${x} ${y}`).join(" L")}`}
        stroke="#171717"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {TREND.map(([x, y], i) => (
        <circle
          key={x}
          className="fa-anim fa-pop"
          style={delay(0.15 + i * 0.09)}
          cx={x}
          cy={y}
          r="3"
          fill={i === TREND.length - 1 ? "#8C00FF" : "#171717"}
        />
      ))}
      {/* live ping on the newest point */}
      <circle className="fa-anim fa-ping" cx={last[0]} cy={last[1]} r="6" fill="#8C00FF" opacity="0" />

      {/* nine-stage funnel, condensed to seven bars */}
      {FUNNEL_WIDTHS.map((w, i) => (
        <rect
          key={w}
          className="fa-anim fa-bar-c"
          style={delay(0.1 + i * 0.08)}
          x={234 - w / 2}
          y={funnelY(i)}
          width={w}
          height="12"
          rx="6"
          fill="#8C00FF"
          fillOpacity={0.95 - i * 0.11}
        />
      ))}
      {FUNNEL_LABELS.map(({ text, row }, i) => (
        <g key={text} className="fa-anim fa-rise" style={delay(0.3 + i * 0.15)}>
          <text
            x="88"
            y={funnelY(row) + 9}
            textAnchor="end"
            fontSize="9"
            fill="#71717A"
          >
            {text}
          </text>
          <line
            x1="94"
            y1={funnelY(row) + 6}
            x2={228 - FUNNEL_WIDTHS[row] / 2}
            y2={funnelY(row) + 6}
            stroke="#D4D4D8"
            strokeDasharray="2 3"
          />
        </g>
      ))}
    </svg>
  );
}

/* ------------------------------------------------------- AI proposals ---- */

const CONTEXT_LINES = [150, 128, 140];
const DOC_LINES = [142, 128, 136, 110];

/**
 * Full-width panel like the CRM card: lead context on the left feeds an
 * "AI draft" chip, a connector draws across to the branded PDF on the right.
 */
export function AiProposalsArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 468 241" fill="none" {...props}>
      <defs>
        <linearGradient id="fa-doc-grad" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#8C00FF" />
          <stop offset="1" stopColor="#C084FC" />
        </linearGradient>
      </defs>

      <rect x="10" y="8" width="448" height="225" rx="14" fill="#fff" stroke="#E4E4E7" />

      {/* left column: the lead's context */}
      <g className="fa-anim fa-rise" style={delay(0.1)}>
        <rect x="32" y="36" width="150" height="44" rx="10" fill="#FAFAFA" stroke="#E4E4E7" />
        <circle cx="52" cy="58" r="10" fill="#E9D5FF" />
        <rect x="68" y="48" width="70" height="6" rx="3" fill="#D4D4D8" />
        <rect x="68" y="60" width="96" height="5" rx="2.5" fill="#E4E4E7" />
      </g>
      {CONTEXT_LINES.map((w, i) => (
        <rect
          key={`ctx-${i}`}
          className="fa-anim fa-bar-l"
          style={delay(0.25 + i * 0.1)}
          x="32"
          y={94 + i * 12}
          width={w}
          height="5"
          rx="2.5"
          fill="#EFEFF1"
        />
      ))}
      <g className="fa-anim fa-rise" style={delay(0.55)}>
        <rect x="32" y="140" width="76" height="24" rx="12" fill="url(#fa-doc-grad)" />
        <Sparkle x={46} y={152} scale={0.45} fill="#fff" twinkleDelay={0.6} />
        <text
          x="56"
          y="155"
          fontSize="7"
          fontWeight="600"
          letterSpacing="0.5"
          fill="#fff"
        >
          AI DRAFT
        </text>
      </g>

      {/* connector: context flows into the document */}
      <path
        className="fa-anim fa-line"
        style={{ "--fa-len": "60", animationDelay: "0.7s" } as CSSProperties}
        d="M190 128 C 214 128 214 120 232 120"
        stroke="#C084FC"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        className="fa-anim fa-pop"
        style={delay(1.15)}
        d="M238 120 L 229 115.5 L 229 124.5 Z"
        fill="#C084FC"
      />

      {/* right column: the branded PDF */}
      <g className="fa-anim fa-float">
        <rect
          x="254"
          y="34"
          width="160"
          height="180"
          rx="10"
          fill="#FAFAFA"
          stroke="#E4E4E7"
          transform="rotate(4 334 124)"
        />
        <rect x="240" y="24" width="166" height="192" rx="10" fill="#fff" stroke="#E4E4E7" />
        {/* gradient letterhead (second rect squares off the band's bottom corners) */}
        <rect x="240" y="24" width="166" height="32" rx="10" fill="url(#fa-doc-grad)" />
        <rect x="240" y="44" width="166" height="12" fill="url(#fa-doc-grad)" />
        <rect x="252" y="36" width="58" height="6" rx="3" fill="#fff" fillOpacity="0.85" />
        <Sparkle x={392} y={40} scale={0.5} fill="#fff" twinkleDelay={0.4} />

        {/* body copy typing in */}
        {DOC_LINES.map((w, i) => (
          <rect
            key={`doc-${i}`}
            className="fa-anim fa-bar-l"
            style={delay(0.9 + i * 0.12)}
            x="252"
            y={66 + i * 13}
            width={w}
            height="6"
            rx="3"
            fill="#E4E4E7"
          />
        ))}
        <rect
          className="fa-anim fa-bar-l"
          style={delay(1.4)}
          x="252"
          y="120"
          width="84"
          height="6"
          rx="3"
          fill="#D4D4D8"
        />
        {/* line-item table */}
        {[0, 1, 2].map((i) => (
          <g key={`row-${i}`} className="fa-anim fa-rise" style={delay(1.55 + i * 0.1)}>
            <rect x="252" y={136 + i * 12} width="64" height="6" rx="3" fill="#E4E4E7" />
            <rect x="336" y={136 + i * 12} width="24" height="6" rx="3" fill="#F3E8FF" />
            <rect x="366" y={136 + i * 12} width="22" height="6" rx="3" fill="#E9D5FF" />
          </g>
        ))}
        <rect
          className="fa-anim fa-bar-l"
          style={delay(1.9)}
          x="252"
          y="196"
          width="44"
          height="6"
          rx="3"
          fill="#D4D4D8"
        />
      </g>

      {/* ambient AI sparkles */}
      <Sparkle x={434} y={38} scale={1.1} fill="#8C00FF" />
      <Sparkle x={210} y={188} scale={0.6} fill="#C084FC" twinkleDelay={0.9} />
      <Sparkle x={52} y={200} scale={0.5} fill="#C084FC" twinkleDelay={1.5} />
    </svg>
  );
}

/* ------------------------------------------------ Accounting & recovery -- */

const LEDGER_ROWS = [
  { particulars: 70, debit: false },
  { particulars: 88, debit: true },
  { particulars: 64, debit: false },
  { particulars: 80, debit: true },
  { particulars: 72, debit: false },
];

/** Vertical rhythm of the receivables-ageing rows. */
const ageingY = (row: number) => 202 + row * 18;

const AGEING_ROWS: { label: string; segments: [number, number, number] }[] = [
  { label: "0–30 days", segments: [120, 60, 30] },
  { label: "31–60 days", segments: [90, 45, 22] },
  { label: "61–90 days", segments: [64, 32, 18] },
  { label: "91–120 days", segments: [42, 22, 12] },
  { label: "120+ days", segments: [26, 14, 8] },
];

const SEGMENT_FILLS = ["#10B981", "#8C00FF", "#F43F5E"];

function FloatingChip({
  y,
  dotFill,
  amount,
  label,
  floatDelay,
  ping = false,
}: {
  y: number;
  dotFill: string;
  amount: string;
  label: string;
  floatDelay: number;
  ping?: boolean;
}) {
  return (
    <g className="fa-anim fa-float" style={delay(floatDelay)}>
      <rect x="434" y={y} width="62" height="36" rx="11" fill="#fff" stroke="#E4E4E7" />
      {ping && (
        <circle
          className="fa-anim fa-ping"
          cx="448"
          cy={y + 18}
          r="7"
          fill={dotFill}
          opacity="0"
        />
      )}
      <circle cx="448" cy={y + 18} r="5" fill={dotFill} />
      <text x="458" y={y + 16} fontSize="9" fontWeight="600" fill="#171717">
        {amount}
      </text>
      <text x="458" y={y + 27} fontSize="7" fill="#71717A">
        {label}
      </text>
    </g>
  );
}

/** Segment rects for the ageing chart; also reused as the shimmer clip. */
function AgeingSegments({ animated }: { animated: boolean }) {
  return (
    <>
      {AGEING_ROWS.map(({ label, segments }, i) => {
        const y = ageingY(i);
        let x = 96;
        return segments.map((w, j) => {
          const seg = (
            <rect
              key={`${label}-${j}`}
              className={animated ? "fa-anim fa-bar-l" : undefined}
              style={animated ? delay(0.55 + i * 0.08 + j * 0.06) : undefined}
              x={x}
              y={y}
              width={w}
              height="9"
              rx="4.5"
              fill={animated ? SEGMENT_FILLS[j] : "#fff"}
              fillOpacity={animated ? 0.85 : 1}
            />
          );
          x += w + 3;
          return seg;
        });
      })}
    </>
  );
}

export function AccountingRecoveryArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 503 352" fill="none" preserveAspectRatio="xMidYMid meet" {...props}>
      <defs>
        <linearGradient id="fa-shimmer" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.65" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <clipPath id="fa-age-clip">
          <AgeingSegments animated={false} />
        </clipPath>
      </defs>

      <rect x="14" y="14" width="412" height="324" rx="14" fill="#fff" stroke="#E4E4E7" />

      {/* voucher table header */}
      <g fontSize="7" letterSpacing="0.5" fill="#A1A1AA">
        <text x="30" y="40">
          DATE
        </text>
        <text x="88" y="40">
          VOUCHER
        </text>
        <text x="156" y="40">
          PARTICULARS
        </text>
        <text x="296" y="40" textAnchor="end">
          DEBIT
        </text>
        <text x="348" y="40" textAnchor="end">
          CREDIT
        </text>
        <text x="410" y="40" textAnchor="end">
          BALANCE
        </text>
      </g>
      <line x1="26" y1="48" x2="414" y2="48" stroke="#E4E4E7" />

      {LEDGER_ROWS.map((row, i) => {
        const y = 60 + i * 18;
        const amountW = 20 + (i % 3) * 4;
        return (
          <g key={i} className="fa-anim fa-rise" style={delay(0.1 + i * 0.08)}>
            <rect x="30" y={y} width="32" height="5" rx="2.5" fill="#EFEFF1" />
            <rect x="88" y={y} width="40" height="5" rx="2.5" fill="#E4E4E7" />
            <rect x="156" y={y} width={row.particulars} height="5" rx="2.5" fill="#EFEFF1" />
            <rect
              x={(row.debit ? 296 : 348) - amountW}
              y={y}
              width={amountW}
              height="5"
              rx="2.5"
              fill="#D4D4D8"
            />
            <rect x={410 - 30} y={y} width="30" height="5" rx="2.5" fill="#D4D4D8" />
          </g>
        );
      })}

      <line x1="26" y1="150" x2="414" y2="150" stroke="#D4D4D8" />
      <g className="fa-anim fa-rise" style={delay(0.6)}>
        <text x="30" y="164" fontSize="8" fontWeight="600" fill="#171717">
          TOTAL
        </text>
        <rect x="266" y="158" width="30" height="6" rx="3" fill="#A1A1AA" />
        <rect x="322" y="158" width="26" height="6" rx="3" fill="#A1A1AA" />
        <rect
          className="fa-anim fa-pulse"
          x="376"
          y="158"
          width="34"
          height="6"
          rx="3"
          fill="#8C00FF"
          fillOpacity="0.8"
        />
      </g>

      {/* receivables ageing */}
      <text x="30" y="190" fontSize="8" fontWeight="600" letterSpacing="1" fill="#71717A">
        RECEIVABLES AGEING
      </text>
      {AGEING_ROWS.map(({ label }, i) => (
        <text key={label} x="30" y={ageingY(i) + 8} fontSize="7" fill="#71717A">
          {label}
        </text>
      ))}
      <AgeingSegments animated />
      {/* shimmer sweeping across the ageing bars (clipped to the bars) */}
      <g clipPath="url(#fa-age-clip)">
        <rect
          className="fa-anim fa-sweep"
          x="30"
          y="196"
          width="56"
          height="100"
          fill="url(#fa-shimmer)"
          opacity="0"
        />
      </g>

      {/* legend */}
      <g className="fa-anim fa-rise" style={delay(1)} fontSize="7" fill="#71717A">
        {(["Paid", "Due", "Overdue"] as const).map((label, i) => (
          <g key={label}>
            <circle cx={100 + i * 56} cy={310} r="4" fill={SEGMENT_FILLS[i]} fillOpacity="0.85" />
            <text x={108 + i * 56} y={313}>
              {label}
            </text>
          </g>
        ))}
      </g>

      <FloatingChip y={96} dotFill="#10B981" amount="₹1.4L" label="Paid" floatDelay={0} ping />
      <FloatingChip y={150} dotFill="#F43F5E" amount="₹60k" label="Overdue" floatDelay={1.6} />
    </svg>
  );
}
