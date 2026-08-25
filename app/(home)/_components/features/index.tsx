import { Mark, type MarkName } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionBadge } from "@/components/section-badge";
import { FEATURES, MODULE_STRIP, WIDE_FEATURE } from "@/lib/bizvora";
import type { Feature } from "@/types/content";
import { AccountingRecoveryArt, AiProposalsArt, CrmPipelineArt } from "./feature-art";

/** Animated SVG artwork + module icon per card, in FEATURES order. */
const ART: { Art: typeof CrmPipelineArt; icon: MarkName }[] = [
  { Art: CrmPipelineArt, icon: "crm" },
  { Art: AiProposalsArt, icon: "doc" },
];

const CARD_CLASSES =
  "group rounded-[16px] border border-primary/10 bg-gradient-to-b from-[#FBF9FF] to-[#F3EDFC] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_24px_48px_-24px_rgba(69,6,147,0.28)]";

function CardCopy({ feature, icon }: { feature: Feature; icon: MarkName }) {
  return (
    <div className="flex flex-col items-start gap-4">
      <span className="flex size-11 items-center justify-center rounded-[12px] bg-white shadow-[0_2px_8px_-2px_rgba(69,6,147,0.15)] ring-1 ring-primary/15">
        <Mark name={icon} className="size-5 text-primary-dark" />
      </span>
      <p className="text-[16px] leading-[1.4] font-medium text-ink lg:text-[24px]">
        {feature.title}
      </p>
      <p className="text-[15px] leading-[1.6] font-normal tracking-[-0.02em] text-ink-70">
        {feature.description}
      </p>
    </div>
  );
}

export function Features() {
  return (
    <section
      id="modules"
      className="flex w-full max-w-[500px] flex-col items-center gap-8 px-5 md:max-w-[900px] md:gap-10 md:px-10 lg:max-w-[1200px] lg:gap-[72px] lg:px-16"
    >
      <div className="flex flex-col items-center gap-6">
        <SectionBadge>Modules</SectionBadge>
        <h2 className="max-w-[550px] text-center text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-ink capitalize md:text-[36px] lg:text-[48px]">
          Everything your business runs on, in one place.
        </h2>
      </div>

      <div className="flex w-full flex-col gap-6">
        {/* Two cards: copy on top, artwork below, 10px apart, 28px padding. */}
        <div className="grid gap-6 md:grid-cols-2">
          {FEATURES.map((feature, i) => {
            const { Art, icon } = ART[i];
            return (
              <div key={feature.title} className={`${CARD_CLASSES} flex flex-col gap-6 p-7`}>
                <CardCopy feature={feature} icon={icon} />
                <Reveal variant="scale" delay={i * 100} className="mt-auto">
                  <Art
                    role="img"
                    aria-label={feature.image.alt}
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </Reveal>
              </div>
            );
          })}
        </div>

        {/* Wide card: copy left, artwork inset on the right with 24px breathing room. */}
        <div className={`${CARD_CLASSES} relative flex min-h-[352px] items-center overflow-hidden px-7`}>
          <div className="w-full max-w-[440px] py-10 lg:py-0">
            <CardCopy feature={WIDE_FEATURE} icon="ledger" />
          </div>
          <Reveal
            variant="scale"
            className="pointer-events-none absolute inset-y-6 right-7 hidden w-[460px] lg:block"
          >
            <AccountingRecoveryArt
              role="img"
              aria-label={WIDE_FEATURE.image.alt}
              className="h-full w-full transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </Reveal>
        </div>

        {/* All six modules as mini-cards — the three cards above are only the headline set. */}
        <Reveal variant="scale">
          <ul className="grid list-none grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {MODULE_STRIP.map((module) => (
              <li
                key={module.name}
                className="group/tile flex flex-col items-start gap-3 rounded-[12px] border border-ink/10 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_16px_32px_-20px_rgba(69,6,147,0.35)]"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-primary-10 transition-colors duration-300 group-hover/tile:bg-primary group-hover/tile:text-white">
                  <Mark
                    name={module.icon}
                    className="size-[18px] text-primary-dark transition-colors duration-300 group-hover/tile:text-white"
                  />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-[14px] leading-[1.3] font-semibold text-ink">
                    {module.name}
                  </span>
                  <span className="text-[12px] leading-[1.5] text-ink-50">
                    {module.blurb}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
