import { CountUp } from "@/components/count-up";
import { PillButton } from "@/components/pill-button";
import { METRICS } from "@/lib/bizvora";

export function Metrics() {
  return (
    <section className="flex w-full max-w-[500px] justify-center px-5 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:px-16">
      <div className="flex w-full flex-col gap-10 rounded-[24px] bg-[linear-gradient(118deg,rgba(140,0,255,0.22)_0%,rgb(69,6,147)_216%)] px-7 pt-[31px] pb-10 lg:flex-row lg:items-center lg:gap-[54px] lg:py-12">
        <div className="flex flex-1 flex-col items-start gap-10">
          <div className="flex flex-col items-start gap-5">
            <h3 className="text-[24px] leading-[1.3] font-medium tracking-[-0.04em] text-ink capitalize md:text-[28px] lg:text-[36px]">
              Your complete business management system
            </h3>
            <p className="text-[16px] leading-[1.6] font-normal tracking-[-0.04em] text-ink-70 capitalize">
              BizvoraOne turns chaos into clarity. Capture every lead, reach
              them first, and run the entire delivery in one workspace.
            </p>
          </div>
          <PillButton href="#contact" variant="dark" className="w-[192px]">
            Request a Demo
          </PillButton>
        </div>

        <div className="grid w-full grid-cols-2 gap-4 lg:w-[476px] lg:shrink-0">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="flex h-[165px] flex-col items-center justify-center gap-5 rounded-[16px] bg-tile"
            >
              <CountUp value={metric.value} suffix={metric.suffix} />
              <p className="text-[16px] leading-[1.6] font-normal tracking-[-0.04em] text-ink-70 capitalize">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
