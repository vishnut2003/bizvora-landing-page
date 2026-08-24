import { Mark } from "@/components/icons";
import { PillButton } from "@/components/pill-button";
import { SectionBadge } from "@/components/section-badge";
import { PLAN_INCLUDES } from "@/lib/bizvora";

/** Section header in the Features pattern; body reuses the Metrics gradient panel. */
export function Pricing() {
  return (
    <section
      id="plan"
      className="flex w-full max-w-[500px] flex-col items-center gap-8 px-5 md:max-w-[900px] md:gap-10 md:px-10 lg:max-w-[1200px] lg:gap-[72px] lg:px-16"
    >
      <div className="flex flex-col items-center gap-6">
        <SectionBadge>Pricing</SectionBadge>
        <h2 className="max-w-[550px] text-center text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-ink capitalize md:text-[36px] lg:text-[48px]">
          One plan. Everything included.
        </h2>
      </div>

      <div className="flex w-full flex-col items-center gap-10 rounded-[24px] bg-[linear-gradient(118deg,rgba(140,0,255,0.22)_0%,rgb(69,6,147)_216%)] px-7 pt-[31px] pb-10 lg:py-12">
        <p className="max-w-[625px] text-center text-[16px] leading-[1.6] font-normal tracking-[-0.04em] text-ink-70 capitalize">
          No tiers, no feature gates, no “available on Enterprise”. Pricing is
          tailored to your team on the demo call.
        </p>

        <ul className="grid w-full max-w-[860px] list-none grid-cols-1 gap-4 md:grid-cols-2">
          {PLAN_INCLUDES.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Mark name="check" className="mt-1 size-4 shrink-0 text-primary-dark" />
              <span className="text-[16px] leading-[1.6] font-normal tracking-[-0.04em] text-ink-70 capitalize">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <PillButton href="#contact" variant="dark" className="w-[192px]">
          Request a Demo
        </PillButton>
      </div>
    </section>
  );
}
