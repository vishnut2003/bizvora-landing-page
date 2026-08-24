import Image, { type StaticImageData } from "next/image";
import { Mark } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionBadge } from "@/components/section-badge";
import { FEATURES, MODULE_STRIP, WIDE_FEATURE } from "@/lib/bizvora";
import type { Feature } from "@/types/content";
import crmPipeline from "./assets/crm-pipeline.png";
import aiProposals from "./assets/ai-proposals.png";
import accountingRecovery from "./assets/accounting-recovery.png";

/** Displayed artwork sizes on the live site (not the intrinsic file sizes). */
const ART: { src: StaticImageData; width: number; height: number }[] = [
  { src: crmPipeline, width: 468, height: 234 },
  { src: aiProposals, width: 468, height: 241 },
];

function CardCopy({ feature }: { feature: Feature }) {
  return (
    <div className="flex flex-col items-start gap-6">
      <p className="text-[16px] leading-[1.4] font-medium text-ink lg:text-[24px]">
        {feature.title}
      </p>
      <p className="text-[16px] leading-[1.6] font-normal tracking-[-0.04em] text-ink-70 capitalize">
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
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className="flex flex-col gap-2.5 rounded-[16px] bg-surface-muted p-7"
            >
              <CardCopy feature={feature} />
              <Reveal variant="scale" delay={i * 100} className="mt-auto">
                <Image
                  src={ART[i].src}
                  alt={feature.image.alt}
                  width={ART[i].width}
                  height={ART[i].height}
                  className="h-auto w-full"
                />
              </Reveal>
            </div>
          ))}
        </div>

        {/* Wide card: copy left, artwork bleeding to the right edge, full height. */}
        <div className="relative flex min-h-[352px] items-center overflow-hidden rounded-[16px] bg-surface-muted px-7">
          <div className="flex w-full max-w-[503px] flex-col items-start gap-6 py-10 lg:py-0">
            <p className="text-[16px] leading-[1.4] font-medium text-ink lg:text-[24px]">
              {WIDE_FEATURE.title}
            </p>
            <p className="text-[16px] leading-[1.6] font-normal tracking-[-0.04em] text-ink-70 capitalize">
              {WIDE_FEATURE.description}
            </p>
          </div>
          <Reveal
            variant="scale"
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-[503px] lg:block"
          >
            <Image
              src={accountingRecovery}
              alt={WIDE_FEATURE.image.alt}
              width={503}
              height={352}
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>

        {/* All six modules, compact — the three cards above are only the headline set. */}
        <Reveal variant="scale">
          <ul className="grid list-none grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {MODULE_STRIP.map((module) => (
              <li key={module.name} className="flex flex-col items-start gap-3">
                <Mark name={module.icon} className="size-6 shrink-0 text-primary-dark" />
                <span className="text-[16px] leading-[1.4] font-medium text-ink">
                  {module.name}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
