import { VerticalRuleIcon } from "@/components/icons";
import { PillButton } from "@/components/pill-button";
import { HeroDashboard } from "./hero-dashboard";
import { PartnerMarquee } from "./partner-marquee";

/**
 * Hero + integrations strip:
 * full-bleed gradient block (`#fff 18%` → `rgba(140,0,255,.35)`) with
 * `overflow: hidden`, and the strip 72px below it.
 */
export function Hero() {
  return (
    <section className="flex w-full flex-col items-center gap-16 lg:gap-[72px]">
      <div className="flex w-full flex-col items-center justify-center gap-8 overflow-hidden bg-[linear-gradient(180deg,#fff_18%,rgba(140,0,255,0.35)_100%)] pt-[120px] lg:gap-12 lg:pt-[140px]">
        <div className="flex w-full flex-col items-center gap-7 px-5 lg:gap-10 lg:px-0">
          <div className="flex w-full max-w-[350px] flex-col items-center gap-4 md:max-w-[730px] lg:max-w-[750px] lg:gap-8">
            <h1 className="text-center text-[28px] leading-[1.1] font-medium tracking-[-0.04em] text-ink md:text-[48px] lg:text-[64px]">
              Run your entire business on one platform
            </h1>
            <p className="text-center text-[16px] leading-[1.6] font-normal tracking-[-0.04em] text-ink-70 capitalize">
              BizvoraOne is India’s all-in-one business management software. Six
              modules in one workspace, plus an AI voice agent that calls every
              new lead within seconds
            </p>
          </div>
          <PillButton href="#contact" className="w-[212px]">
            Request a Demo
          </PillButton>
        </div>

        <div className="flex w-[90%] max-w-none justify-center lg:w-3/4 lg:max-w-[1025px]">
          <HeroDashboard />
        </div>
      </div>

      <div className="flex w-full max-w-[1025px] flex-col items-center gap-6 px-5 md:flex-row md:gap-10 lg:px-0">
        <p className="max-w-[287px] shrink-0 text-center text-[20px] leading-[1.5] font-medium text-ink capitalize md:text-left">
          Your leads and documents flow in automatically
        </p>
        <VerticalRuleIcon className="hidden h-[43px] w-[3px] shrink-0 md:block" />
        <PartnerMarquee />
      </div>
    </section>
  );
}
