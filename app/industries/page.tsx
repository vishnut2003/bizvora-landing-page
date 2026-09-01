import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { BasicLayout } from "@/layout/basic-layout";
import { ArrowUpRightIcon, Mark, type MarkName } from "@/components/icons";
import { CountUp } from "@/components/count-up";
import { PillButton } from "@/components/pill-button";
import { TradesTicker } from "@/components/trades-ticker";
import { Reveal } from "@/components/reveal";
import { INDUSTRIES, INDUSTRY_PAGES, MODULES } from "@/lib/bizvora";
import { cn } from "@/lib/utils";
import { CtaPanel } from "@/app/modules/_components/cta-panel";
import { CARD_CLASSES, GHOST_BUTTON_CLASSES } from "@/app/modules/_components/shared";

export const metadata: Metadata = {
  title: "Industries | BizvoraOne",
  description:
    "BizvoraOne runs the same flow for every industry — manufacturing, real estate, IT & agencies, consulting, law & CA/CS, education, healthcare and distribution: enquiries in, work delivered, money collected.",
};

/** Numeric values count up on reveal; string values render static. */
const BAND_STATS: {
  value: number | string;
  label: string;
  icon: MarkName;
  ping?: boolean;
}[] = [
  { value: 8, label: "industries served", icon: "factory" },
  { value: 7, label: "modules, all included", icon: "kanban" },
  { value: "Seconds", label: "to the first lead call", icon: "phone", ping: true },
  { value: 1, label: "workspace for everything", icon: "check" },
];

/** The industry-agnostic flow, drawn as the open timeline. */
const FLOW_STEPS = [
  {
    title: "Enquiries come in",
    description:
      "A site enquiry, an admissions form, a dealer asking for rates — every lead lands in the same 9-stage pipeline, and the AI voice agent calls it back in seconds.",
  },
  {
    title: "Work gets delivered",
    description:
      "Quotes with GST, AI-drafted proposals, projects with review gates — whatever your deliverable looks like, it moves through the workspace without re-entry.",
  },
  {
    title: "Money and people stay tracked",
    description:
      "Tally-style vouchers, receivables ageing and recovery follow-ups keep the money honest; payroll and payslips keep the team paid.",
  },
];

const GRADIENT_TEXT_CLASSES =
  "bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent";

/* The counter-scrolling ticker lives in components/trades-ticker.tsx and is
   shared with the home hero. */

export default function IndustriesPage() {
  return (
    <BasicLayout>
      <main className="flex w-full flex-1 flex-col items-center overflow-x-clip">
        {/* hero: copy left, industry panel right */}
        {/* no overflow-hidden here: the satellite cards hang past the band's
            bottom edge and must not be clipped at the marquee seam — the
            page-level overflow-x-clip on <main> contains the orbs instead */}
        <div className="relative w-full bg-[linear-gradient(180deg,#fff_18%,rgba(140,0,255,0.35)_100%)] px-5 pt-[120px] pb-10 md:px-10 lg:px-16 lg:pt-[150px] lg:pb-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(140,0,255,0.16)_1.5px,transparent_1.5px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_35%,black,transparent)]" />
          <div className="pointer-events-none absolute top-[10%] left-[4%] size-[280px] rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute top-[20%] right-[2%] size-[320px] rounded-full bg-violet-400/20 blur-3xl" />

          <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-12 lg:grid-cols-[1fr_500px] lg:gap-16">
            {/* copy column */}
            <div className="flex flex-col items-start gap-6">
              <Reveal variant="up" distance={20}>
                <nav
                  aria-label="Breadcrumb"
                  className="flex items-center gap-2 text-[13px] tracking-[-0.02em]"
                >
                  <Link href="/" className="text-ink-50 transition-colors hover:text-ink">
                    Home
                  </Link>
                  <span className="text-ink-50">/</span>
                  <span className="font-medium text-primary-dark">Industries</span>
                </nav>
              </Reveal>

              <Reveal variant="up" distance={30} delay={80} as="h1">
                <span className="block text-[30px] leading-[1.12] font-medium tracking-[-0.04em] text-ink md:text-[44px] lg:text-[54px]">
                  Built for how{" "}
                  <span className={GRADIENT_TEXT_CLASSES}>your industry</span>{" "}
                  actually works
                </span>
              </Reveal>

              <Reveal variant="up" distance={30} delay={160}>
                <p className="max-w-[520px] text-[16px] leading-[1.6] tracking-[-0.02em] text-ink-70">
                  Factory floors, construction sites, clinics, classrooms — the
                  deliverables change, the flow doesn&apos;t: enquiries in, work
                  delivered, money collected. BizvoraOne runs that flow for all
                  of them, from one workspace.
                </p>
              </Reveal>

              <Reveal variant="up" distance={30} delay={240}>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <PillButton href="/#contact" className="w-[212px]">
                    Request a Demo
                  </PillButton>
                  <Link href="#manufacturing" className={GHOST_BUTTON_CLASSES}>
                    Find Your Industry
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* industry panel */}
            <Reveal
              variant="up"
              distance={40}
              delay={200}
              className="relative mx-auto w-full max-w-[500px]"
            >
              <div className="relative">
                <div className="rounded-[24px] border border-ink/10 bg-white/85 p-5 shadow-[0_32px_64px_-28px_rgba(69,6,147,0.4)] backdrop-blur-md md:p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-[linear-gradient(125deg,rgb(140,0,255)_9%,rgb(69,6,147)_92%)]">
                      <Mark name="factory" className="size-5 text-white" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[15px] leading-[1.4] font-semibold text-ink">
                        Every industry, one flow
                      </span>
                      <span className="text-[12px] leading-[1.5] text-ink-50">
                        8 industries · one workspace
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {INDUSTRIES.map((industry) => (
                      <Link
                        key={industry.name}
                        href={`/industries/${industry.slug}`}
                        className="group/tile flex items-center gap-3 rounded-[12px] border border-ink/10 bg-white p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_16px_32px_-20px_rgba(69,6,147,0.35)]"
                      >
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-primary-10 transition-colors duration-300 group-hover/tile:bg-primary">
                          <Mark
                            name={industry.icon}
                            className="size-4 text-primary-dark transition-colors duration-300 group-hover/tile:text-white"
                          />
                        </span>
                        <span className="text-[12.5px] leading-[1.3] font-medium text-ink">
                          {industry.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* floating satellites (after the panel; no z-index so the
                    fixed header still wins) */}
                <div className="nf-float absolute -top-7 -right-4 hidden items-center gap-3 rounded-[14px] border border-ink/10 bg-white/90 px-4 py-3 shadow-[0_16px_40px_rgba(69,6,147,0.14)] backdrop-blur-md md:flex lg:-right-10">
                  <span className="flex size-8 items-center justify-center rounded-full bg-primary-10">
                    <Mark name="phone" className="size-4 text-primary-dark" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[13px] leading-[1.3] font-semibold text-ink">
                      Site enquiry
                    </span>
                    <span className="text-[11px] leading-[1.3] text-ink-50">
                      Called back in seconds
                    </span>
                  </div>
                </div>

                <div
                  className="nf-float absolute -bottom-9 -left-4 hidden w-[190px] flex-col gap-2.5 rounded-[14px] border border-ink/10 bg-white/90 p-4 shadow-[0_16px_40px_rgba(69,6,147,0.14)] backdrop-blur-md md:flex lg:-left-12"
                  style={{ "--nf-delay": "1200ms" } as CSSProperties}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-semibold text-ink">Fee recovery</span>
                    <span className="text-[12px] font-semibold text-primary">72%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-primary-10">
                    <div className="h-full w-[72%] rounded-full bg-[linear-gradient(125deg,rgb(140,0,255)_9%,rgb(69,6,147)_92%)]" />
                  </div>
                  <span className="text-[11px] leading-[1.4] text-ink-50">
                    Ageing chased before it goes stale
                  </span>
                </div>

                <div
                  className="nf-float absolute top-16 -left-6 hidden size-12 items-center justify-center rounded-[14px] border border-ink/10 bg-white/90 shadow-[0_12px_28px_rgba(69,6,147,0.12)] backdrop-blur-md md:flex"
                  style={{ "--nf-delay": "600ms" } as CSSProperties}
                >
                  <Mark name="cap" className="size-5 text-primary-dark" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* picks the hero gradient up exactly where it ends (rgba .35) and
            fades it out, so hero and ticker read as one continuous band */}
        <TradesTicker className="bg-[linear-gradient(180deg,rgba(140,0,255,0.35)_0%,rgba(140,0,255,0)_100%)] pt-4 pb-10 lg:pb-14" />

        {/* dark stats band, echoing the reference's "proven results" panel */}
        <section className="mx-auto w-full max-w-[500px] px-5 py-10 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:py-14">
          <Reveal variant="up" distance={30}>
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-ink px-8 py-10 lg:px-[52px] lg:py-12">
              <div className="pointer-events-none absolute -top-24 left-[10%] size-[300px] rounded-full bg-primary/35 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 right-[8%] size-[300px] rounded-full bg-violet-400/25 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_75%_85%_at_50%_0%,black,transparent)]" />

              <div className="relative flex flex-col items-center gap-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-white/70 uppercase backdrop-blur-sm">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C084FC] opacity-60" />
                    <span className="relative inline-flex size-2 rounded-full bg-[#C084FC]" />
                  </span>
                  The same numbers, whatever you run
                </span>

                <div className="grid w-full grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-x-0 lg:divide-x lg:divide-white/10">
                  {BAND_STATS.map((stat, i) => (
                    <Reveal
                      key={stat.label}
                      variant="up"
                      distance={20}
                      delay={i * 100}
                      className="flex flex-col items-center gap-3 px-4 text-center transition-transform duration-300 hover:-translate-y-1"
                    >
                      <span className="relative flex size-11 items-center justify-center rounded-[12px] bg-white/5 ring-1 ring-white/10">
                        {stat.ping && (
                          <span className="absolute -top-1 -right-1 flex size-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C084FC] opacity-60" />
                            <span className="relative inline-flex size-2.5 rounded-full bg-[#C084FC]" />
                          </span>
                        )}
                        <Mark name={stat.icon} className="size-5 text-[#C084FC]" />
                      </span>
                      {typeof stat.value === "number" ? (
                        <CountUp
                          value={stat.value}
                          suffix=""
                          className="bg-gradient-to-r from-[#C084FC] to-primary bg-clip-text text-[32px] leading-[1.2] font-semibold tracking-[-0.02em] text-transparent lg:text-[40px]"
                        />
                      ) : (
                        <span className="bg-gradient-to-r from-[#C084FC] to-primary bg-clip-text text-[32px] leading-[1.2] font-semibold tracking-[-0.02em] text-transparent lg:text-[40px]">
                          {stat.value}
                        </span>
                      )}
                      <span className="max-w-[160px] text-[12px] leading-[1.5] text-white/60">
                        {stat.label}
                      </span>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* the industries grid */}
        <section className="mx-auto flex w-full max-w-[500px] flex-col gap-10 px-5 py-10 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:py-14">
          <Reveal
            variant="up"
            distance={30}
            className="flex flex-col items-center gap-3 text-center"
          >
            <span className="text-[12px] font-semibold tracking-[0.14em] text-primary-dark uppercase">
              8 industries
            </span>
            <h2 className="max-w-[560px] text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-ink md:text-[36px]">
              One workspace,{" "}
              <span className={GRADIENT_TEXT_CLASSES}>every trade</span>
            </h2>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((industry, i) => {
              const industryModules = INDUSTRY_PAGES[
                industry.slug as keyof typeof INDUSTRY_PAGES
              ].moduleSlugs
                .map((slug) => MODULES.find((m) => m.slug === slug))
                .filter((m) => m !== undefined);
              return (
                <Reveal
                  key={industry.name}
                  variant="up"
                  distance={30}
                  delay={(i % 4) * 60}
                  className="h-full"
                >
                  <div
                    id={industry.slug}
                    className={`${CARD_CLASSES} relative flex h-full scroll-mt-[110px] flex-col gap-3 overflow-hidden p-5 lg:scroll-mt-[130px]`}
                  >
                    <span className="pointer-events-none absolute -right-10 -bottom-10 size-32 rounded-full bg-primary/5 blur-2xl transition-colors duration-300 group-hover:bg-primary/15" />

                    <span className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-primary-10 transition-colors duration-300 group-hover:bg-primary">
                      <Mark
                        name={industry.icon}
                        className="size-5 text-primary-dark transition-colors duration-300 group-hover:text-white"
                      />
                    </span>
                    <p className="text-[15px] leading-[1.3] font-semibold tracking-[-0.02em] text-ink">
                      {industry.name}
                    </p>
                    <p className="text-[13px] leading-[1.6] tracking-[-0.02em] text-ink-70">
                      {industry.blurb}
                    </p>
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="group/more relative inline-flex items-center gap-1.5 text-[13px] font-medium text-primary-dark transition-colors hover:text-primary"
                    >
                      Learn more
                      <ArrowUpRightIcon className="size-3 transition-transform duration-200 group-hover/more:translate-x-0.5 group-hover/more:-translate-y-0.5" />
                    </Link>

                    {/* the modules this industry leans on, linked */}
                    <div className="relative mt-auto flex items-center gap-1.5 border-t border-ink/10 pt-3">
                      <span className="mr-1 text-[10px] font-semibold tracking-[0.1em] text-ink-50 uppercase">
                        Runs on
                      </span>
                      {industryModules.map((mod) => (
                        <Link
                          key={mod.slug}
                          href={`/modules/${mod.slug}`}
                          title={mod.name}
                          aria-label={mod.name}
                          className="flex size-7 items-center justify-center rounded-[8px] bg-white ring-1 ring-ink/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:ring-primary"
                        >
                          <Mark
                            name={mod.icon}
                            className="size-3.5 text-primary-dark transition-colors duration-200 hover:text-white"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* the industry-agnostic flow, on the soft band as an open timeline */}
        <section className="w-full bg-[linear-gradient(180deg,rgba(140,0,255,0.05)_0%,rgba(140,0,255,0)_75%)]">
          <div className="mx-auto flex w-full max-w-[500px] flex-col gap-10 px-5 py-10 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:py-14">
            <Reveal
              variant="up"
              distance={30}
              className="flex flex-col items-center gap-3 text-center"
            >
              <span className="text-[12px] font-semibold tracking-[0.14em] text-primary-dark uppercase">
                Why it fits everywhere
              </span>
              <h2 className="max-w-[560px] text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-ink md:text-[36px]">
                Different trades,{" "}
                <span className={GRADIENT_TEXT_CLASSES}>same flow</span>
              </h2>
            </Reveal>

            <div className="flex flex-col gap-14 md:flex-row md:gap-10">
              {FLOW_STEPS.map((step, i) => {
                const last = i === FLOW_STEPS.length - 1;
                return (
                  <Reveal
                    key={step.title}
                    variant="up"
                    distance={30}
                    delay={i * 120}
                    className="relative flex-1"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -top-9 -left-1 text-[88px] leading-none font-semibold tracking-[-0.04em] text-primary/5 select-none"
                    >
                      {`0${i + 1}`}
                    </span>
                    {!last && (
                      <span className="absolute top-12 -bottom-12 left-5 w-px bg-gradient-to-b from-primary/30 to-primary/5 md:hidden" />
                    )}

                    <div className="relative flex items-center gap-4">
                      <span
                        className="fa-anim fa-pop flex size-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(125deg,rgb(140,0,255)_9%,rgb(69,6,147)_92%)] text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(69,6,147,0.35)]"
                        style={{ animationDelay: `${0.1 + i * 0.25}s` }}
                      >
                        {i + 1}
                      </span>
                      {!last && (
                        <span
                          className="fa-anim fa-bar-l hidden h-[2px] flex-1 rounded-full bg-gradient-to-r from-primary/50 via-primary/20 to-primary/5 md:block"
                          style={{ animationDelay: `${0.3 + i * 0.25}s` }}
                        />
                      )}
                    </div>

                    <p className="relative mt-6 pl-14 text-[17px] leading-[1.4] font-medium tracking-[-0.02em] text-ink md:pl-0">
                      {step.title}
                    </p>
                    <p className="relative mt-2 pl-14 text-[14px] leading-[1.7] tracking-[-0.02em] text-ink-70 md:pl-0">
                      {step.description}
                    </p>
                  </Reveal>
                );
              })}
            </div>

            <Reveal variant="up" distance={20} delay={420} className="mx-auto">
              <Link
                href="/modules"
                className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-primary-dark transition-colors hover:text-primary"
              >
                See the modules behind the flow
                <ArrowUpRightIcon className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
        </section>

        <CtaPanel tileLinkMode="page" />
      </main>
    </BasicLayout>
  );
}
