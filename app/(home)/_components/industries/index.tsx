import { Mark } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionBadge } from "@/components/section-badge";
import { INDUSTRIES } from "@/lib/bizvora";

export function Industries() {
  return (
    <section
      id="industries"
      className="flex w-full max-w-[500px] flex-col items-center gap-6 px-5 md:max-w-[900px] md:gap-10 md:px-10 lg:max-w-[1200px] lg:gap-[72px] lg:px-16"
    >
      <div className="flex flex-col items-center gap-6">
        <SectionBadge>Industries</SectionBadge>
        <h2 className="max-w-[550px] text-center text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-ink capitalize md:text-[36px] lg:text-[48px]">
          One platform to streamline work across every industry
        </h2>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-5">
        {INDUSTRIES.map((industry, i) => (
          <Reveal
            key={industry.name}
            variant="scale"
            delay={(i % 4) * 100}
            className="flex h-full"
          >
            <div className="group/card flex h-full w-full flex-col items-start gap-5 rounded-[16px] border border-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_40px_-24px_rgba(69,6,147,0.35)]">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-[12px] bg-primary-10 transition-colors duration-300 group-hover/card:bg-primary">
                <Mark
                  name={industry.icon}
                  className="size-5 text-primary-dark transition-colors duration-300 group-hover/card:text-white"
                />
              </span>
              <div className="flex flex-col gap-2">
                <p className="text-[16px] leading-[1.4] font-semibold text-ink">
                  {industry.name}
                </p>
                <p className="text-[14px] leading-[1.6] font-normal tracking-[-0.02em] text-ink-50">
                  {industry.blurb}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
