import { CountUp } from "@/components/count-up";
import { Mark, type MarkName } from "@/components/icons";
import { PillButton } from "@/components/pill-button";
import { METRICS } from "@/lib/bizvora";

/** Icon per metric, in METRICS order (modules, lead sources, stages, dashboards). */
const METRIC_ICONS: MarkName[] = ["kanban", "crm", "pulse", "laptop"];

export function Metrics() {
  return (
    <section className="flex w-full max-w-[500px] justify-center px-5 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:px-16">
      <div className="relative flex w-full flex-col gap-10 overflow-hidden rounded-[24px] bg-[linear-gradient(118deg,rgba(140,0,255,0.22)_0%,rgb(69,6,147)_216%)] px-7 pt-[31px] pb-10 lg:flex-row lg:items-center lg:gap-[54px] lg:py-12">
        {/* ambient depth inside the gradient panel */}
        <div className="pointer-events-none absolute -top-24 left-[12%] size-[300px] rounded-full bg-white/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 -bottom-24 size-[320px] rounded-full bg-primary/30 blur-3xl" />

        <div className="relative flex flex-1 flex-col items-start gap-10">
          <div className="flex flex-col items-start gap-5">
            <span className="text-[12px] font-semibold tracking-[0.14em] text-primary-dark uppercase">
              Why BizvoraOne
            </span>
            <h3 className="text-[24px] leading-[1.3] font-medium tracking-[-0.04em] text-ink md:text-[28px] lg:text-[36px]">
              Your complete business management system
            </h3>
            <p className="text-[16px] leading-[1.6] font-normal tracking-[-0.02em] text-ink-70">
              BizvoraOne turns chaos into clarity. Capture every lead, reach
              them first, and run the entire delivery in one workspace.
            </p>
          </div>
          <PillButton href="#contact" variant="dark" className="w-[192px]">
            Request a Demo
          </PillButton>
        </div>

        <div className="relative grid w-full grid-cols-2 gap-4 lg:w-[476px] lg:shrink-0">
          {METRICS.map((metric, i) => (
            <div
              key={metric.label}
              className="flex min-h-[165px] flex-col items-start justify-between gap-4 rounded-[16px] bg-white/70 p-6 shadow-[0_16px_32px_-20px_rgba(69,6,147,0.45)] ring-1 ring-white/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/85"
            >
              <span className="flex size-9 items-center justify-center rounded-[10px] bg-primary-10">
                <Mark name={METRIC_ICONS[i]} className="size-[18px] text-primary-dark" />
              </span>
              <div className="flex flex-col gap-1.5">
                <CountUp
                  value={metric.value}
                  suffix={metric.suffix}
                  className="text-[44px] tracking-[-0.02em]"
                />
                <p className="text-[14px] leading-[1.5] font-medium tracking-[-0.02em] text-ink-70">
                  {metric.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
