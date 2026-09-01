import type { CSSProperties, SVGProps } from "react";

/**
 * Inline SVG artwork for the four modules that have none on the home page
 * (Quotations, Projects, HR & Payroll, AI Voice Agent), in the exact idiom of
 * `app/(home)/_components/features/feature-art.tsx`: data-array-driven rects,
 * CSS-only `fa-*` motion held paused until the wrapping `<Reveal>` fires.
 */

const delay = (s: number): CSSProperties => ({ animationDelay: `${s}s` });

/* Sparkle and FloatingChip are duplicated from feature-art.tsx (they are not
   exported there, and exporting them would touch the home page for no gain). */

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

function FloatingChip({
  x,
  y,
  dotFill,
  amount,
  label,
  floatDelay,
  ping = false,
}: {
  x: number;
  y: number;
  dotFill: string;
  amount: string;
  label: string;
  floatDelay: number;
  ping?: boolean;
}) {
  return (
    <g className="fa-anim fa-float" style={delay(floatDelay)}>
      <rect x={x} y={y} width="62" height="36" rx="11" fill="#fff" stroke="#E4E4E7" />
      {ping && (
        <circle
          className="fa-anim fa-ping"
          cx={x + 14}
          cy={y + 18}
          r="7"
          fill={dotFill}
          opacity="0"
        />
      )}
      <circle cx={x + 14} cy={y + 18} r="5" fill={dotFill} />
      <text x={x + 24} y={y + 16} fontSize="9" fontWeight="600" fill="#171717">
        {amount}
      </text>
      <text x={x + 24} y={y + 27} fontSize="7" fill="#71717A">
        {label}
      </text>
    </g>
  );
}

/* --------------------------------------------------------- Quotations ---- */

/** Item / qty / rate / amount skeleton widths per line. */
const QUOTE_ROWS: { item: number; rate: number; amount: number }[] = [
  { item: 110, rate: 24, amount: 28 },
  { item: 84, rate: 20, amount: 24 },
  { item: 96, rate: 24, amount: 26 },
  { item: 70, rate: 18, amount: 22 },
];

/** An itemized quote totalling up: rows rise in, GST lands, ₹48,500 pulses. */
export function QuotationBuilderArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 468 234" fill="none" {...props}>
      <rect x="10" y="8" width="448" height="218" rx="14" fill="#fff" stroke="#E4E4E7" />

      {/* doc header */}
      <text x="32" y="42" fontSize="9" fontWeight="600" letterSpacing="0.5" fill="#171717">
        QUOTATION #QT-1042
      </text>
      <rect x="360" y="34" width="60" height="6" rx="3" fill="#EFEFF1" />

      {/* column headers */}
      <g fontSize="7" letterSpacing="0.5" fill="#A1A1AA">
        <text x="32" y="66">
          ITEM
        </text>
        <text x="250" y="66" textAnchor="end">
          QTY
        </text>
        <text x="330" y="66" textAnchor="end">
          RATE
        </text>
        <text x="420" y="66" textAnchor="end">
          AMOUNT
        </text>
      </g>
      <line x1="32" y1="74" x2="420" y2="74" stroke="#E4E4E7" />

      {QUOTE_ROWS.map((row, i) => {
        const y = 86 + i * 18;
        return (
          <g key={i} className="fa-anim fa-rise" style={delay(0.1 + i * 0.09)}>
            <rect x="32" y={y} width={row.item} height="6" rx="3" fill="#EFEFF1" />
            <rect x="232" y={y} width="18" height="6" rx="3" fill="#E4E4E7" />
            <rect x={330 - row.rate} y={y} width={row.rate} height="6" rx="3" fill="#D4D4D8" />
            <rect x={420 - row.amount} y={y} width={row.amount} height="6" rx="3" fill="#D4D4D8" />
          </g>
        );
      })}

      {/* GST row */}
      <line x1="32" y1="164" x2="420" y2="164" stroke="#E4E4E7" />
      <g className="fa-anim fa-rise" style={delay(0.55)}>
        <text x="32" y="180" fontSize="8" fill="#71717A">
          GST 18%
        </text>
        <rect x="392" y="173" width="28" height="6" rx="3" fill="#E9D5FF" />
      </g>

      {/* total */}
      <g className="fa-anim fa-rise" style={delay(0.7)}>
        <line x1="32" y1="190" x2="420" y2="190" stroke="#D4D4D8" />
        <text x="32" y="209" fontSize="9" fontWeight="600" fill="#171717">
          TOTAL
        </text>
        <text x="420" y="210" textAnchor="end" fontSize="12" fontWeight="700" fill="#8C00FF">
          ₹48,500
        </text>
        <rect
          className="fa-anim fa-pulse"
          x="352"
          y="215"
          width="68"
          height="3"
          rx="1.5"
          fill="#8C00FF"
          fillOpacity="0.35"
        />
      </g>

      <FloatingChip x={398} y={88} dotFill="#10B981" amount="Sent" label="2 min ago" floatDelay={0} ping />
      <Sparkle x={440} y={30} scale={0.7} fill="#C084FC" twinkleDelay={0.8} />
    </svg>
  );
}

/* ----------------------------------------------------------- Projects ---- */

/** Kanban columns: two skeleton-bar widths per card. */
const KANBAN_COLUMNS: { header: string; x: number; cards: [number, number][] }[] = [
  { header: "TO DO", x: 36, cards: [[86, 60], [72, 48], [92, 40]] },
  { header: "IN REVIEW", x: 176, cards: [[80, 52], [90, 64]] },
  { header: "DONE", x: 316, cards: [[76, 56], [84, 44]] },
];

const MILESTONE_XS = [60, 170, 280, 400];

/** Kanban board over a milestone timeline with a review-gate diamond. */
export function ProjectMilestonesArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 468 234" fill="none" {...props}>
      <rect x="10" y="8" width="448" height="218" rx="14" fill="#fff" stroke="#E4E4E7" />

      {KANBAN_COLUMNS.map((col, c) => (
        <g key={col.header}>
          <text x={col.x + 4} y="38" fontSize="7" letterSpacing="0.5" fill="#A1A1AA">
            {col.header}
          </text>
          {col.cards.map(([w1, w2], i) => {
            const y = 48 + i * 38;
            return (
              <g
                key={i}
                className="fa-anim fa-rise"
                style={delay(0.1 + c * 0.15 + i * 0.1)}
              >
                <rect x={col.x} y={y} width="116" height="30" rx="8" fill="#FAFAFA" stroke="#E4E4E7" />
                <rect x={col.x + 10} y={y + 8} width={w1} height="5" rx="2.5" fill="#D4D4D8" />
                <rect x={col.x + 10} y={y + 18} width={w2} height="4" rx="2" fill="#EFEFF1" />
                {/* status dot: purple check for Done, lilac for In review */}
                {c > 0 && i === 0 && (
                  <circle
                    className="fa-anim fa-pop"
                    style={delay(0.5 + c * 0.15)}
                    cx={col.x + 104}
                    cy={y + 10}
                    r="4"
                    fill={c === 2 ? "#8C00FF" : "#C084FC"}
                  />
                )}
              </g>
            );
          })}
        </g>
      ))}

      {/* milestone timeline */}
      <path
        className="fa-anim fa-line"
        style={{ "--fa-len": "400", animationDelay: "0.35s" } as CSSProperties}
        d="M36 190 L432 190"
        stroke="#171717"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {MILESTONE_XS.map((x, i) => (
        <g key={x}>
          <circle
            className="fa-anim fa-pop"
            style={delay(0.55 + i * 0.15)}
            cx={x}
            cy="190"
            r="5"
            fill={i === MILESTONE_XS.length - 1 ? "#8C00FF" : "#171717"}
          />
          <text
            className="fa-anim fa-rise"
            style={delay(0.65 + i * 0.15)}
            x={x}
            y="212"
            textAnchor="middle"
            fontSize="7"
            fill="#71717A"
          >
            {`M${i + 1}`}
          </text>
        </g>
      ))}
      {/* review gate between M3 and M4 */}
      <circle className="fa-anim fa-ping" cx="340" cy="190" r="7" fill="#C084FC" opacity="0" />
      <rect
        className="fa-anim fa-pop"
        style={delay(1)}
        x="336"
        y="186"
        width="8"
        height="8"
        fill="#C084FC"
        transform="rotate(45 340 190)"
      />

      <Sparkle x={440} y={28} scale={0.7} fill="#C084FC" twinkleDelay={1.2} />
    </svg>
  );
}

/* ------------------------------------------------------- HR & Payroll ---- */

/** 0 = present, 1 = light, 2 = leave, 3 = today. */
const ATT_FILLS = ["#E9D5FF", "#F3E8FF", "#EFEFF1", "#8C00FF"];

const ATT_LEAVES = new Set([5, 12, 23, 30]);
const ATT_TODAY = 18;

const attFill = (i: number) => {
  if (i === ATT_TODAY) return ATT_FILLS[3];
  if (ATT_LEAVES.has(i)) return ATT_FILLS[2];
  return ATT_FILLS[i % 3 === 0 ? 1 : 0];
};

const attX = (i: number) => 32 + (i % 7) * 18;
const attY = (i: number) => 52 + Math.floor(i / 7) * 18;

/** Attendance grid feeding a payslip: cells pop in, net pay lands in ₹. */
export function PayrollPayslipArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 468 234" fill="none" {...props}>
      <defs>
        <linearGradient id="ma-pay-grad" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#8C00FF" />
          <stop offset="1" stopColor="#C084FC" />
        </linearGradient>
      </defs>

      <rect x="10" y="8" width="448" height="218" rx="14" fill="#fff" stroke="#E4E4E7" />

      {/* attendance grid */}
      <text x="32" y="40" fontSize="7" letterSpacing="0.5" fill="#A1A1AA">
        ATTENDANCE · MARCH
      </text>
      {Array.from({ length: 35 }, (_, i) => (
        <rect
          key={i}
          className="fa-anim fa-pop"
          style={delay(0.05 + i * 0.018)}
          x={attX(i)}
          y={attY(i)}
          width="12"
          height="12"
          rx="3"
          fill={attFill(i)}
        />
      ))}
      <circle
        className="fa-anim fa-ping"
        cx={attX(ATT_TODAY) + 6}
        cy={attY(ATT_TODAY) + 6}
        r="8"
        fill="#8C00FF"
        opacity="0"
      />
      <rect
        className="fa-anim fa-bar-l"
        style={delay(0.75)}
        x="32"
        y="152"
        width="90"
        height="5"
        rx="2.5"
        fill="#EFEFF1"
      />
      <rect
        className="fa-anim fa-bar-l"
        style={delay(0.85)}
        x="32"
        y="164"
        width="64"
        height="5"
        rx="2.5"
        fill="#E4E4E7"
      />

      {/* connector: attendance flows into the payslip */}
      <path
        className="fa-anim fa-line"
        style={{ "--fa-len": "60", animationDelay: "0.6s" } as CSSProperties}
        d="M168 100 C 200 100 200 92 232 92"
        stroke="#C084FC"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        className="fa-anim fa-pop"
        style={delay(1.05)}
        d="M238 92 L 229 87.5 L 229 96.5 Z"
        fill="#C084FC"
      />

      {/* payslip document */}
      <g className="fa-anim fa-float">
        <rect x="250" y="28" width="170" height="182" rx="10" fill="#fff" stroke="#E4E4E7" />
        {/* gradient letterhead (second rect squares off the band's bottom corners) */}
        <rect x="250" y="28" width="170" height="30" rx="10" fill="url(#ma-pay-grad)" />
        <rect x="250" y="46" width="170" height="12" fill="url(#ma-pay-grad)" />
        <rect x="262" y="39" width="56" height="6" rx="3" fill="#fff" fillOpacity="0.85" />

        <text x="262" y="76" fontSize="7" letterSpacing="0.5" fill="#A1A1AA">
          EARNINGS
        </text>
        {[0, 1].map((i) => (
          <g key={`earn-${i}`}>
            <rect
              className="fa-anim fa-bar-l"
              style={delay(0.9 + i * 0.12)}
              x="262"
              y={84 + i * 13}
              width={64 - i * 12}
              height="6"
              rx="3"
              fill="#E4E4E7"
            />
            <rect
              className="fa-anim fa-bar-l"
              style={delay(0.95 + i * 0.12)}
              x="384"
              y={84 + i * 13}
              width="24"
              height="6"
              rx="3"
              fill="#E9D5FF"
            />
          </g>
        ))}

        <text x="262" y="128" fontSize="7" letterSpacing="0.5" fill="#A1A1AA">
          DEDUCTIONS
        </text>
        {[0, 1].map((i) => (
          <g key={`ded-${i}`}>
            <rect
              className="fa-anim fa-bar-l"
              style={delay(1.15 + i * 0.12)}
              x="262"
              y={136 + i * 13}
              width={52 - i * 10}
              height="6"
              rx="3"
              fill="#E4E4E7"
            />
            <rect
              className="fa-anim fa-bar-l"
              style={delay(1.2 + i * 0.12)}
              x="388"
              y={136 + i * 13}
              width="20"
              height="6"
              rx="3"
              fill="#F3E8FF"
            />
          </g>
        ))}

        <line x1="262" y1="172" x2="408" y2="172" stroke="#D4D4D8" />
        <g className="fa-anim fa-rise" style={delay(1.5)}>
          <text x="262" y="192" fontSize="8" fontWeight="600" fill="#171717">
            NET PAY
          </text>
          <text
            className="fa-anim fa-pulse"
            x="408"
            y="193"
            textAnchor="end"
            fontSize="11"
            fontWeight="700"
            fill="#8C00FF"
          >
            ₹42,300
          </text>
        </g>
      </g>

      <Sparkle x={440} y={30} scale={0.7} fill="#8C00FF" twinkleDelay={0.5} />
      <Sparkle x={198} y={166} scale={0.5} fill="#C084FC" twinkleDelay={1.4} />
    </svg>
  );
}

/* ----------------------------------------------------- AI Voice Agent ---- */

/** Waveform bar heights, bouncing on the existing .eq-bar keyframes. */
const WAVE_HEIGHTS = [8, 14, 20, 14, 24, 16, 20, 12, 8];

/** A lead form firing a live AI call: waveform, transcript, disclosure pill. */
export function VoiceAgentArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 468 234" fill="none" {...props}>
      <rect x="10" y="8" width="448" height="218" rx="14" fill="#fff" stroke="#E4E4E7" />

      {/* the lead that just came in */}
      <g className="fa-anim fa-rise" style={delay(0.1)}>
        <rect x="28" y="48" width="132" height="44" rx="10" fill="#FAFAFA" stroke="#E4E4E7" />
        <circle className="fa-anim fa-ping" cx="46" cy="70" r="8" fill="#10B981" opacity="0" />
        <circle cx="46" cy="70" r="5" fill="#10B981" />
        <text x="58" y="67" fontSize="9" fontWeight="600" fill="#171717">
          New lead
        </text>
        <text x="58" y="79" fontSize="7" fill="#71717A">
          Website form
        </text>
      </g>
      <rect
        className="fa-anim fa-bar-l"
        style={delay(0.3)}
        x="28"
        y="106"
        width="110"
        height="5"
        rx="2.5"
        fill="#EFEFF1"
      />
      <rect
        className="fa-anim fa-bar-l"
        style={delay(0.4)}
        x="28"
        y="118"
        width="84"
        height="5"
        rx="2.5"
        fill="#E4E4E7"
      />

      {/* connector: form-fill triggers the call */}
      <path
        className="fa-anim fa-line"
        style={{ "--fa-len": "60", animationDelay: "0.45s" } as CSSProperties}
        d="M162 70 C 190 70 190 62 214 62"
        stroke="#C084FC"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        className="fa-anim fa-pop"
        style={delay(0.9)}
        d="M220 62 L 211 57.5 L 211 66.5 Z"
        fill="#C084FC"
      />

      {/* live call card */}
      <g className="fa-anim fa-float">
        <rect x="222" y="30" width="186" height="88" rx="12" fill="#fff" stroke="#E4E4E7" />
        <circle cx="246" cy="56" r="12" fill="#E9D5FF" />
        <text x="246" y="59" textAnchor="middle" fontSize="8" fontWeight="700" fill="#8C00FF">
          AI
        </text>
        <text x="266" y="53" fontSize="9" fontWeight="600" fill="#171717">
          Asha (AI)
        </text>
        <text x="266" y="65" fontSize="7" fill="#71717A">
          00:12 · Calling…
        </text>
        {/* speaking waveform — fa-anim adds transform-box: fill-box so the
            .eq-bar scaleY bounce works on SVG rects and stays Reveal-gated */}
        {WAVE_HEIGHTS.map((h, i) => (
          <rect
            key={i}
            className="fa-anim eq-bar"
            style={delay(i * 0.12)}
            x={246 + i * 9}
            y={94 - h / 2}
            width="3"
            height={h}
            rx="1.5"
            fill="#8C00FF"
          />
        ))}
      </g>

      {/* transcript bubbles */}
      <g className="fa-anim fa-rise" style={delay(0.6)}>
        <rect x="222" y="130" width="150" height="34" rx="10" fill="#F3E8FF" />
        <rect x="234" y="139" width="104" height="5" rx="2.5" fill="#C084FC" fillOpacity="0.5" />
        <rect x="234" y="150" width="70" height="5" rx="2.5" fill="#E9D5FF" />
      </g>
      <g className="fa-anim fa-rise" style={delay(0.9)}>
        <rect x="270" y="172" width="104" height="28" rx="10" fill="#FAFAFA" stroke="#E4E4E7" />
        <rect x="282" y="181" width="66" height="5" rx="2.5" fill="#E4E4E7" />
        <rect x="282" y="190" width="42" height="4" rx="2" fill="#EFEFF1" />
      </g>

      {/* disclosure pill */}
      <g className="fa-anim fa-rise" style={delay(1.1)}>
        <rect x="28" y="188" width="112" height="20" rx="10" fill="#E4E4E7" />
        <text
          x="84"
          y="201"
          textAnchor="middle"
          fontSize="6.5"
          fontWeight="600"
          letterSpacing="0.5"
          fill="#171717"
        >
          AI DISCLOSURE · ON
        </text>
      </g>

      <FloatingChip x={398} y={170} dotFill="#8C00FF" amount="Booked" label="Meeting set" floatDelay={0.4} />
      <Sparkle x={440} y={28} scale={0.8} fill="#8C00FF" twinkleDelay={0.3} />
      <Sparkle x={196} y={152} scale={0.5} fill="#C084FC" twinkleDelay={1.1} />
    </svg>
  );
}
