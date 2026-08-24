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
            <div className="flex h-full w-full flex-col items-start gap-4 rounded-[16px] bg-surface-muted p-7">
              <Mark name={industry.icon} className="size-7 shrink-0 text-primary-dark" />
              <div className="flex flex-col gap-2.5">
                <p className="text-[16px] leading-[1.4] font-medium text-ink">
                  {industry.name}
                </p>
                <p className="text-[16px] leading-[1.6] font-normal tracking-[-0.04em] text-ink-70 capitalize">
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
