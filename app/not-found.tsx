import type { Metadata } from "next";
import Link from "next/link";
import { DemoLink } from "@/components/demo-trigger";
import { Search } from "lucide-react";
import { BasicLayout } from "@/layout/basic-layout";
import { Mark, type MarkName } from "@/components/icons";
import { PillButton } from "@/components/pill-button";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Page not found | BizvoraOne",
  description:
    "The page you're looking for doesn't exist. Head back to BizvoraOne and keep running your business from one workspace.",
};

/** Section chips shown under the CTAs — all anchor into the home page. */
const QUICK_LINKS: { label: string; href: string; icon: MarkName }[] = [
  { label: "Modules", href: "/#modules", icon: "kanban" },
  { label: "AI Voice Agent", href: "/#voice", icon: "phone" },
  { label: "Industries", href: "/#industries", icon: "factory" },
  { label: "Pricing", href: "/pricing", icon: "quote" },
  { label: "FAQ", href: "/#faq", icon: "doc" },
];

/**
 * Product widgets drifting around the numeral (lg+ only) — one per flagship
 * module, so even the 404 sells the workspace. Rotation lives on a wrapper
 * span: Reveal resets `transform` on its own node when it fires, and the
 * float animation owns `transform` on the card itself.
 */
const FLOATING_CARDS: {
  icon: MarkName;
  title: string;
  sub: string;
  pos: string;
  tilt: string;
  delay: number;
  floatDelay: string;
  extra: "eq" | "ping" | "check";
}[] = [
  {
    icon: "phone",
    title: "AI Voice Agent",
    sub: "Calling new lead · 00:12",
    pos: "left-0 top-[13%]",
    tilt: "-rotate-6",
    delay: 520,
    floatDelay: "0ms",
    extra: "eq",
  },
  {
    icon: "crm",
    title: "New lead captured",
    sub: "Priya · Mumbai",
    pos: "right-0 top-[9%]",
    tilt: "rotate-[5deg]",
    delay: 640,
    floatDelay: "1400ms",
    extra: "ping",
  },
  {
    icon: "quote",
    title: "Quotation #QT-1042",
    sub: "₹48,500 · Sent",
    pos: "left-[2%] top-[54%]",
    tilt: "rotate-[4deg]",
    delay: 760,
    floatDelay: "800ms",
    extra: "check",
  },
  {
    icon: "doc",
    title: "AI Proposal",
    sub: "Draft ready for review",
    pos: "right-[1%] top-[50%]",
    tilt: "-rotate-[5deg]",
    delay: 880,
    floatDelay: "2000ms",
    extra: "check",
  },
];

/** The numeral: one digit per dashboard tile, fanned like scattered KPI cards. */
const DIGIT_TILES: {
  id: string;
  digit: string;
  tilt: string;
  floatDelay: string;
  accent: "bars" | "search" | "spark";
}[] = [
  {
    id: "left-4",
    digit: "4",
    tilt: "-rotate-[6deg] translate-y-2",
    floatDelay: "0ms",
    accent: "bars",
  },
  {
    id: "zero",
    digit: "0",
    tilt: "-translate-y-2 md:-translate-y-3",
    floatDelay: "900ms",
    accent: "search",
  },
  {
    id: "right-4",
    digit: "4",
    tilt: "rotate-[5deg] translate-y-2",
    floatDelay: "1800ms",
    accent: "spark",
  },
];

/**
 * Custom 404 (Next.js `not-found` convention). A hero-styled scene: dotted
 * grid over the white→purple gradient, a "404" spelled out on three tilted
 * dashboard KPI tiles, and floating module cards drifting around the copy.
 */
export default function NotFound() {
  return (
    <BasicLayout>
      <main className="relative flex w-full flex-1 flex-col items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#fff_18%,rgba(140,0,255,0.35)_100%)] px-5 pt-[130px] pb-24 lg:pt-[150px] lg:pb-28">
        {/* dotted grid, faded out toward the edges */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(140,0,255,0.16)_1.5px,transparent_1.5px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_38%,black,transparent)]" />

        {/* ambient orbs, same family as the hero */}
        <div className="pointer-events-none absolute top-[8%] left-[6%] size-[280px] rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute top-[18%] right-[4%] size-[320px] rounded-full bg-violet-400/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-12%] left-1/2 size-[460px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />

        <div className="relative flex w-full max-w-[1060px] flex-col items-center">
          {/* drifting product widgets, desktop only */}
          {FLOATING_CARDS.map((card) => (
            <Reveal
              key={card.title}
              variant="scale"
              delay={card.delay}
              // no z-index: the fixed header (z-10) must paint over these,
              // mega-menu included; positioned elements already sit above
              // the backdrop layers without one
              className={cn("absolute hidden lg:block", card.pos)}
            >
              <span className={cn("block", card.tilt)}>
                <div
                  className="nf-float flex items-center gap-3 rounded-card border border-ink/10 bg-white/85 py-3 pr-4 pl-3 shadow-[0_16px_40px_rgba(69,6,147,0.14)] backdrop-blur-md"
                  style={{ "--nf-delay": card.floatDelay } as React.CSSProperties}
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-tile text-primary-dark">
                    <Mark name={card.icon} className="size-[18px]" />
                  </span>
                  <div className="text-left">
                    <p className="text-[13px] leading-[1.4] font-medium tracking-[-0.02em] text-ink">
                      {card.title}
                    </p>
                    <p className="text-[11.5px] leading-[1.4] tracking-[-0.01em] text-ink-50">
                      {card.sub}
                    </p>
                  </div>
                  {card.extra === "eq" && (
                    <span className="ml-1 flex h-4 items-center gap-[3px]">
                      {["0ms", "150ms", "300ms"].map((d, i) => (
                        <span
                          key={d}
                          className="eq-bar w-[3px] rounded-full bg-primary"
                          style={{ height: i === 1 ? 16 : 10, animationDelay: d }}
                        />
                      ))}
                    </span>
                  )}
                  {card.extra === "ping" && (
                    <span className="relative ml-1 flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                      <span className="relative inline-flex size-2 rounded-full bg-primary" />
                    </span>
                  )}
                  {card.extra === "check" && (
                    <Mark name="check" className="ml-1 size-4 shrink-0 text-primary-dark" />
                  )}
                </div>
              </span>
            </Reveal>
          ))}

          <div className="flex w-full max-w-[730px] flex-col items-center gap-7 text-center lg:gap-8">
            <Reveal variant="up" distance={30}>
              <span className="inline-flex items-center gap-2 rounded-[32px] border border-primary/20 bg-primary-10 px-4 py-1.5 text-[12px] font-semibold tracking-[0.14em] text-primary-dark uppercase backdrop-blur-sm">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                Error 404 · Page not found
              </span>
            </Reveal>

            {/* the numeral — three KPI tiles off the product dashboard, one
                digit each. Tilt sits on an outer span (Reveal resets its own
                transform on fire) and the float owns the tile's transform. */}
            <Reveal variant="up" distance={40} delay={100}>
              <div
                aria-hidden
                className="flex items-center justify-center gap-3 select-none md:gap-5"
              >
                {DIGIT_TILES.map((tile) => (
                  <span key={tile.id} className={cn("block", tile.tilt)}>
                    <span
                      className="nf-float relative flex h-[112px] w-[88px] items-center justify-center rounded-[20px] border border-ink/10 bg-white/90 shadow-[0_18px_44px_rgba(69,6,147,0.16)] backdrop-blur-md md:h-[168px] md:w-[132px] md:rounded-[26px] lg:h-[188px] lg:w-[148px]"
                      style={{ "--nf-delay": tile.floatDelay } as React.CSSProperties}
                    >
                      {/* no negative tracking here: letter-spacing applies after
                          the glyph, and bg-clip-text clips to the shrunken text
                          box — cutting the digit's right edge */}
                      <span className="bg-gradient-to-b from-primary to-primary-dark bg-clip-text text-[60px] leading-none font-medium text-transparent md:text-[92px] lg:text-[104px]">
                        {tile.digit}
                      </span>

                      {tile.accent === "bars" && (
                        <span className="absolute bottom-3 left-3 flex items-end gap-[3px] md:bottom-4 md:left-4">
                          {[7, 11, 15, 19].map((h, i) => (
                            <span
                              key={h}
                              className="w-[4px] rounded-full bg-primary"
                              style={{ height: h, opacity: 0.35 + i * 0.2 }}
                            />
                          ))}
                        </span>
                      )}

                      {tile.accent === "search" && (
                        <>
                          <span className="absolute top-3 right-3 flex size-6 items-center justify-center rounded-full bg-tile text-primary-dark md:top-4 md:right-4 md:size-7">
                            <Search className="size-3 md:size-3.5" strokeWidth={2.4} />
                          </span>
                          <span className="absolute bottom-2.5 rounded-full bg-primary-10 px-2 py-0.5 text-[9px] font-semibold tracking-[0.08em] text-primary-dark uppercase md:bottom-4 md:text-[10px]">
                            0 results
                          </span>
                        </>
                      )}

                      {tile.accent === "spark" && (
                        <svg
                          viewBox="0 0 44 18"
                          fill="none"
                          className="absolute right-3 bottom-3 h-[14px] w-[34px] md:right-4 md:bottom-4 md:h-[18px] md:w-[44px]"
                        >
                          <path
                            d="M1 14 L10 9 L18 12 L27 5 L35 8 L43 2"
                            stroke="rgb(140, 0, 255)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle cx="43" cy="2" r="2.5" fill="rgb(69, 6, 147)" />
                        </svg>
                      )}
                    </span>
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal variant="up" distance={30} delay={180} as="h1">
              <span className="block text-[28px] leading-[1.15] font-medium tracking-[-0.04em] text-ink md:text-[40px] lg:text-[44px]">
                This page went{" "}
                <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  off the books
                </span>
              </span>
            </Reveal>

            <Reveal variant="up" distance={30} delay={260}>
              <p className="max-w-[520px] text-[16px] leading-[1.6] tracking-[-0.02em] text-ink-70">
                We searched every module — CRM, proposals, quotations, even
                payroll — and this page isn&apos;t on record. Let&apos;s get you
                back to the workspace.
              </p>
            </Reveal>

            <Reveal variant="up" distance={30} delay={340}>
              <div className="flex flex-col items-center gap-3 sm:flex-row">
                <PillButton href="/" className="w-[212px]">
                  Back to Home
                </PillButton>
                <DemoLink
                  className="inline-flex h-[58px] w-[212px] items-center justify-center rounded-[40px] border border-ink/10 bg-white/70 text-[14px] leading-[1.6] font-medium text-ink backdrop-blur-sm transition-colors duration-200 hover:border-primary/40 hover:bg-primary-10"
                >
                  Request a Demo
                </DemoLink>
              </div>
            </Reveal>

            <Reveal variant="up" distance={20} delay={420}>
              <div className="flex flex-col items-center gap-3">
                <span className="text-[12px] font-semibold tracking-[0.14em] text-ink-50 uppercase">
                  Or jump to
                </span>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {QUICK_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-2 rounded-[32px] border border-ink/10 bg-white/70 px-4 py-2 text-[13px] leading-[1.6] tracking-[-0.02em] text-ink-70 backdrop-blur-sm transition-colors duration-200 hover:border-primary/40 hover:bg-primary-10 hover:text-ink"
                    >
                      <Mark name={link.icon} className="size-3.5 text-primary-dark" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </main>
    </BasicLayout>
  );
}
