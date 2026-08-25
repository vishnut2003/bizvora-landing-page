import { Mark } from "@/components/icons";
import { PillButton } from "@/components/pill-button";
import { SectionBadge } from "@/components/section-badge";
import { PLAN_INCLUDES } from "@/lib/bizvora";

const PLAN_PROMISES = ["No tiers", "No feature gates", "No enterprise-only"];

/**
 * Section header in the Features pattern; body is the Metrics gradient panel
 * holding a single-plan pricing card: plan identity + CTA left, the
 * everything-included checklist right.
 */
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

      <div className="flex w-full max-w-[980px] flex-col overflow-hidden rounded-[24px] border border-primary/15 bg-white shadow-[0_40px_80px_-48px_rgba(69,6,147,0.4)] lg:flex-row">
          {/* plan identity + CTA */}
          <div className="flex flex-col items-start gap-7 p-8 lg:w-[38%] lg:shrink-0 lg:p-10">
            <span className="text-[12px] font-semibold tracking-[0.14em] text-primary-dark uppercase">
              All-in-one plan
            </span>
            <div className="flex flex-col gap-2">
              <p className="text-[36px] leading-[1.1] font-medium tracking-[-0.03em] text-ink">
                Tailored
              </p>
              <p className="text-[14px] leading-[1.6] tracking-[-0.02em] text-ink-70">
                Pricing is scoped to your team on the demo call — every module,
                every seat conversation, one number.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {PLAN_PROMISES.map((promise) => (
                <span
                  key={promise}
                  className="rounded-full bg-primary-10 px-3 py-1.5 text-[12px] leading-none font-medium text-primary-dark"
                >
                  {promise}
                </span>
              ))}
            </div>
            <PillButton href="#contact" className="w-full max-w-[240px]">
              Request a Demo
            </PillButton>
          </div>

          {/* everything included */}
          <div className="flex flex-1 flex-col gap-5 border-t border-ink/5 p-8 lg:border-t-0 lg:border-l lg:p-10">
            <span className="text-[12px] font-semibold tracking-[0.14em] text-ink-50 uppercase">
              Everything included
            </span>
            <ul className="grid list-none grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
              {PLAN_INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-10">
                    <Mark name="check" className="size-3 text-primary-dark" />
                  </span>
                  <span className="text-[14px] leading-[1.6] tracking-[-0.02em] text-ink-70">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </section>
  );
}
