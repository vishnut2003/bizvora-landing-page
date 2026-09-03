import Link from "next/link";
import { Mark, VerticalRuleIcon } from "@/components/icons";
import { DemoPillButton } from "@/components/demo-trigger";
import { Reveal } from "@/components/reveal";
import { TradesTicker } from "@/components/trades-ticker";
import { HeroDashboard } from "./hero-dashboard";
import { PartnerMarquee } from "./partner-marquee";

const TRUST_POINTS = ["Free live demo", "All 6 modules included", "Hosted in Mumbai"];

/**
 * Hero + integrations strip:
 * full-bleed gradient block (`#fff 18%` → `rgba(140,0,255,.35)`) with
 * `overflow: hidden`, and the strip 40–48px below it. Copy fades up in a
 * stagger; the dashboard rises last over a purple glow.
 */
export function Hero() {
  return (
    // negative bottom margin claws back part of the page-level section gap
    // so the integrations strip sits closer to both the hero and Modules
    <section className="-mb-6 flex w-full flex-col items-center gap-6 md:-mb-8 lg:-mb-12 lg:gap-8">
      {/* purple peaks behind the dashboard and ticker, then eases back to
          white on a curved ramp — the extra stops keep the fade's start and
          end soft enough that no horizontal band shows */}
      <div className="relative flex w-full flex-col items-center justify-center gap-8 overflow-hidden bg-[linear-gradient(180deg,#fff_18%,rgba(140,0,255,0.35)_58%,rgba(140,0,255,0.33)_72%,rgba(140,0,255,0.22)_82%,rgba(140,0,255,0.1)_91%,rgba(140,0,255,0.03)_97%,rgba(140,0,255,0)_100%)] pt-[120px] pb-10 lg:gap-12 lg:pt-[140px] lg:pb-12">
        {/* ambient orbs behind the headline */}
        <div className="pointer-events-none absolute top-[6%] left-[6%] size-[280px] rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute top-[14%] right-[4%] size-[320px] rounded-full bg-violet-400/20 blur-3xl" />

        <div className="relative flex w-full flex-col items-center gap-7 px-5 lg:gap-9 lg:px-0">
          <div className="flex w-full max-w-[350px] flex-col items-center gap-5 md:max-w-[730px] lg:max-w-[750px] lg:gap-7">
            <Reveal variant="up" distance={40} as="h1">
              <span className="block text-center text-[28px] leading-[1.1] font-medium tracking-[-0.04em] text-ink md:text-[48px] lg:text-[64px]">
                Run your entire business on{" "}
                <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  one platform
                </span>
              </span>
            </Reveal>

            <Reveal variant="up" distance={30} delay={160}>
              <p className="max-w-[560px] text-center text-[16px] leading-[1.6] font-normal tracking-[-0.04em] text-ink-70 capitalize">
                BizvoraOne is India’s all-in-one business management software. Six
                modules in one workspace, plus an AI voice agent that calls every
                new lead within seconds
              </p>
            </Reveal>
          </div>

          {/* w-full on the wrapper: the column centres its items, so without it
              the reveal shrinks to the pills' text and w-full below is moot. */}
          <Reveal
            variant="up"
            distance={30}
            delay={240}
            className="flex w-full justify-center"
          >
            {/* Phones: the pair shares one row, so the labels are kept short
                enough for two 40px-radius pills to sit inside a 360px screen. */}
            <div className="flex w-full max-w-[440px] items-center gap-3 sm:w-auto sm:max-w-none">
              <DemoPillButton className="min-w-0 flex-1 px-4 sm:w-[212px] sm:flex-none sm:px-5">
                Get a Demo
              </DemoPillButton>
              <Link
                href="/modules"
                className="inline-flex h-[58px] min-w-0 flex-1 items-center justify-center rounded-[40px] border border-ink/10 bg-white/70 px-4 text-[14px] leading-[1.6] font-medium whitespace-nowrap text-ink backdrop-blur-sm transition-colors duration-200 hover:border-primary/40 hover:bg-primary-10 sm:w-[212px] sm:flex-none sm:px-5"
              >
                See Modules
              </Link>
            </div>
          </Reveal>

          <Reveal variant="up" distance={20} delay={320}>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {TRUST_POINTS.map((point) => (
                <span
                  key={point}
                  className="flex items-center gap-2 text-[14px] leading-[1.6] tracking-[-0.02em] text-ink-70"
                >
                  <Mark name="check" className="size-4 shrink-0 text-primary-dark" />
                  {point}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal
          variant="up"
          distance={50}
          delay={200}
          className="relative flex w-[90%] max-w-none justify-center lg:w-3/4 lg:max-w-[1025px]"
        >
          <HeroDashboard />
        </Reveal>

        {/* the trades ticker rides inside the gradient block, so it blends
            with the hero instead of sitting on a white seam */}
        <TradesTicker />
      </div>

      <div className="flex w-full max-w-[1025px] flex-col items-center gap-6 px-5 md:flex-row md:gap-10 lg:px-0">
        <div className="flex max-w-[320px] shrink-0 flex-col items-center gap-2.5 text-center md:items-start md:text-left">
          <span className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.14em] text-primary uppercase">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Connected sources
          </span>
          <p className="text-[21px] leading-[1.35] font-medium tracking-[-0.02em] text-ink">
            Your leads and documents flow in{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              automatically
            </span>
          </p>
        </div>
        <VerticalRuleIcon className="hidden h-[43px] w-[3px] shrink-0 md:block" />
        <PartnerMarquee />
      </div>
    </section>
  );
}
