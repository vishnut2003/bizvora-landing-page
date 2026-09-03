import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { BasicLayout } from "@/layout/basic-layout";
import { ArrowUpRightIcon, Mark } from "@/components/icons";
import { DemoLink, DemoPillButton } from "@/components/demo-trigger";
import { Reveal } from "@/components/reveal";
import { MODULES } from "@/lib/bizvora";
import type { ModuleDetail } from "@/types/content";
import { cn } from "@/lib/utils";
import { CtaPanel } from "./_components/cta-panel";
import {
  ARTS,
  CARD_CLASSES,
  GHOST_BUTTON_CLASSES,
  JUMP_CHIP_CLASSES,
} from "./_components/shared";

export const metadata: Metadata = {
  title: "Modules | BizvoraOne",
  description:
    "Explore all BizvoraOne modules — CRM, AI Proposals, Quotations, Accounting & Recovery, Projects, HR & Payroll and the AI Voice Agent — one workspace for Indian businesses.",
};

/**
 * One deep-dive row: copy column + a layered art composition, alternating
 * sides on desktop. Odd rows sit on a soft purple band for page rhythm.
 */
function ModuleSection({ module, index }: { module: ModuleDetail; index: number }) {
  const Art = ARTS[module.slug];
  const swap = index % 2 === 1;
  const num = String(index + 1).padStart(2, "0");
  return (
    <section
      id={module.slug}
      // scroll-mt clears the fixed frosted header when jump links fire
      className={cn(
        "w-full scroll-mt-[110px] lg:scroll-mt-[130px]",
        swap && "bg-[linear-gradient(180deg,rgba(140,0,255,0.05)_0%,rgba(140,0,255,0)_75%)]",
      )}
    >
      <div className="mx-auto grid w-full max-w-[500px] items-stretch gap-12 px-5 py-10 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:grid-cols-2 lg:gap-20 lg:py-16">
        {/* copy first in DOM so mobile always stacks copy → art */}
        <Reveal
          variant="up"
          distance={30}
          className={cn("flex flex-col items-start gap-5", swap && "lg:order-2")}
        >
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-[12px] bg-white shadow-[0_2px_8px_-2px_rgba(69,6,147,0.15)] ring-1 ring-primary/15">
              <Mark name={module.icon} className="size-5 text-primary-dark" />
            </span>
            <span className="text-[12px] font-semibold tracking-[0.14em] text-primary-dark uppercase">
              {num} · {module.eyebrow}
            </span>
          </div>

          <h2 className="text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-ink md:text-[36px] lg:text-[44px]">
            {module.name}
          </h2>
          <p className="text-[15px] leading-[1.6] tracking-[-0.02em] text-ink-70 lg:text-[16px]">
            {module.description}
          </p>

          <ul className="flex flex-col gap-3">
            {module.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-[15px] leading-[1.6] tracking-[-0.02em] text-ink-70"
              >
                <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-10">
                  <Mark name="check" className="size-3 text-primary-dark" />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          {/* stat + per-module CTAs */}
          <div className="mt-2 flex w-full flex-wrap items-center gap-x-4 gap-y-4 border-t border-ink/10 pt-5">
            <div className="flex flex-col">
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-[28px] leading-[1.2] font-semibold tracking-[-0.02em] text-transparent">
                {module.stat.value}
              </span>
              {/* capped so the row's three items stay on one line at lg */}
              <span className="max-w-[150px] text-[12px] leading-[1.5] text-ink-50">
                {module.stat.label}
              </span>
            </div>
            <span className="h-10 w-px bg-ink/10" />
            <DemoLink
              className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-primary-dark transition-colors hover:text-primary"
            >
              See it live on a demo
              <ArrowUpRightIcon className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </DemoLink>
            <span className="h-10 w-px bg-ink/10" />
            <Link
              href={`/modules/${module.slug}`}
              className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-ink-70 transition-colors hover:text-primary-dark"
            >
              Learn more
              <ArrowUpRightIcon className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>

        {/* layered art composition */}
        <div className={cn("relative", swap && "lg:order-1")}>
          {/* ambient glow */}
          <div className="pointer-events-none absolute -inset-8 rounded-full bg-primary/10 blur-3xl" />
          {/* dotted accent patch on the outer corner */}
          <div
            className={cn(
              "pointer-events-none absolute -top-8 size-36 bg-[radial-gradient(rgba(140,0,255,0.3)_1.5px,transparent_1.5px)] [background-size:14px_14px] [mask-image:radial-gradient(circle,black,transparent_70%)]",
              swap ? "-left-8" : "-right-8",
            )}
          />
          {/* offset frame peeking out behind the card */}
          <div
            className={cn(
              "pointer-events-none absolute inset-0 translate-y-4 rounded-[16px] border border-primary/15 bg-tile/60",
              swap ? "-translate-x-4" : "translate-x-4",
            )}
          />

          <div className={`${CARD_CLASSES} relative flex h-full items-center p-6 md:p-8`}>
            {/* Reveal is load-bearing: it unpauses the art's fa-anim build */}
            <Reveal variant="scale" className="w-full">
              <Art
                role="img"
                aria-label={module.artAlt}
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </Reveal>
          </div>

          {/* module index badge */}
          <span
            className={cn(
              "absolute -top-3.5 rounded-full bg-[linear-gradient(125deg,rgb(140,0,255)_9%,rgb(69,6,147)_92%)] px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-white shadow-[0_8px_20px_rgba(69,6,147,0.35)]",
              swap ? "right-6" : "left-6",
            )}
          >
            {num} / {String(MODULES.length).padStart(2, "0")}
          </span>

          {/* floating blurb chip */}
          <div
            className={cn(
              "nf-float absolute -bottom-5 flex items-center gap-2.5 rounded-[12px] border border-ink/10 bg-white/90 py-2.5 pr-4 pl-3 shadow-[0_16px_40px_rgba(69,6,147,0.14)] backdrop-blur-md",
              swap ? "right-6" : "left-6",
            )}
            style={{ "--nf-delay": `${(index % 3) * 700}ms` } as CSSProperties}
          >
            <span className="flex size-7 shrink-0 items-center justify-center rounded-[8px] bg-primary-10">
              <Mark name={module.icon} className="size-3.5 text-primary-dark" />
            </span>
            <span className="text-[12px] leading-[1.4] font-medium whitespace-nowrap text-ink">
              {module.blurb}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * /modules — every module deep-dived on one page: hero with jump links, an
 * alternating section per module, and a dark conversion panel mid-scroll.
 */
export default function ModulesPage() {
  return (
    <BasicLayout>
      <main className="flex w-full flex-1 flex-col items-center overflow-x-clip">
        {/* hero: copy on the left, the workspace panel with floating
            satellite cards on the right, jump chips underneath */}
        <div className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#fff_18%,rgba(140,0,255,0.35)_100%)] px-5 pt-[120px] pb-14 md:px-10 lg:px-16 lg:pt-[150px] lg:pb-16">
          {/* dotted grid, faded toward the edges */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(140,0,255,0.16)_1.5px,transparent_1.5px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_35%,black,transparent)]" />
          <div className="pointer-events-none absolute top-[10%] left-[4%] size-[280px] rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute top-[20%] right-[2%] size-[320px] rounded-full bg-violet-400/20 blur-3xl" />

          <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-10 lg:gap-12">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_500px] lg:gap-16">
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
                    <span className="font-medium text-primary-dark">Modules</span>
                  </nav>
                </Reveal>

                <Reveal variant="up" distance={30} delay={80} as="h1">
                  <span className="block text-[30px] leading-[1.12] font-medium tracking-[-0.04em] text-ink md:text-[44px] lg:text-[54px]">
                    Every module your business runs on,{" "}
                    <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                      in one workspace
                    </span>
                  </span>
                </Reveal>

                <Reveal variant="up" distance={30} delay={160}>
                  <p className="max-w-[520px] text-[16px] leading-[1.6] tracking-[-0.02em] text-ink-70">
                    From the first enquiry to the final payslip — CRM, proposals,
                    quotations, accounting, projects, payroll and an AI voice
                    agent, sharing one database. No integrations to babysit.
                  </p>
                </Reveal>

                <Reveal variant="up" distance={30} delay={240}>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <DemoPillButton className="w-[212px]">
                      Request a Demo
                    </DemoPillButton>
                    <Link href="/modules/crm" className={GHOST_BUTTON_CLASSES}>
                      Explore the Modules
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* workspace panel */}
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
                        <Mark name="check" className="size-5 text-white" />
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[15px] leading-[1.4] font-semibold text-ink">
                          Everything in one place
                        </span>
                        <span className="text-[12px] leading-[1.5] text-ink-50">
                          7 modules · one workspace
                        </span>
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      {MODULES.map((module, i) => (
                        <Link
                          key={module.slug}
                          href={`/modules/${module.slug}`}
                          className={cn(
                            "group/tile flex items-center gap-3 rounded-[12px] border border-ink/10 bg-white p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_16px_32px_-20px_rgba(69,6,147,0.35)]",
                            i === MODULES.length - 1 && "col-span-2",
                          )}
                        >
                          <span className="flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-primary-10 transition-colors duration-300 group-hover/tile:bg-primary">
                            <Mark
                              name={module.icon}
                              className="size-4 text-primary-dark transition-colors duration-300 group-hover/tile:text-white"
                            />
                          </span>
                          <span className="text-[13px] leading-[1.3] font-medium text-ink">
                            {module.name}
                          </span>
                          {i === MODULES.length - 1 && (
                            <span className="ml-auto rounded-full bg-primary-10 px-2 py-0.5 text-[10px] font-semibold tracking-[0.08em] text-primary-dark uppercase">
                              Calls in seconds
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* floating satellites (after the panel in DOM so they paint
                      above it; no z-index so the fixed header still wins) */}
                  <div
                    className="nf-float absolute -top-7 -right-4 hidden items-center gap-3 rounded-[14px] border border-ink/10 bg-white/90 px-4 py-3 shadow-[0_16px_40px_rgba(69,6,147,0.14)] backdrop-blur-md md:flex lg:-right-10"
                  >
                    <span className="flex size-8 items-center justify-center rounded-full bg-emerald-100">
                      <Mark name="check" className="size-4 text-emerald-600" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[16px] leading-none font-semibold text-ink">15</span>
                      <span className="mt-1 text-[11px] leading-none text-ink-50">
                        Lead sources
                      </span>
                    </div>
                  </div>

                  <div
                    className="nf-float absolute -bottom-9 -left-4 hidden w-[190px] flex-col gap-2.5 rounded-[14px] border border-ink/10 bg-white/90 p-4 shadow-[0_16px_40px_rgba(69,6,147,0.14)] backdrop-blur-md md:flex lg:-left-12"
                    style={{ "--nf-delay": "1200ms" } as CSSProperties}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-semibold text-ink">Recovery</span>
                      <span className="text-[12px] font-semibold text-primary">72%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-primary-10">
                      <div className="h-full w-[72%] rounded-full bg-[linear-gradient(125deg,rgb(140,0,255)_9%,rgb(69,6,147)_92%)]" />
                    </div>
                    <div className="flex items-center">
                      <span className="flex -space-x-1.5">
                        <span className="size-5 rounded-full border-2 border-white bg-primary" />
                        <span className="size-5 rounded-full border-2 border-white bg-violet-400" />
                        <span className="size-5 rounded-full border-2 border-white bg-emerald-400" />
                      </span>
                      <span className="ml-2 text-[11px] text-ink-50">+5 collected today</span>
                    </div>
                  </div>

                  <div
                    className="nf-float absolute top-16 -left-6 hidden size-12 items-center justify-center rounded-[14px] border border-ink/10 bg-white/90 shadow-[0_12px_28px_rgba(69,6,147,0.12)] backdrop-blur-md md:flex"
                    style={{ "--nf-delay": "600ms" } as CSSProperties}
                  >
                    <Mark name="phone" className="size-5 text-primary-dark" />
                  </div>

                  <div
                    className="nf-float absolute -right-6 bottom-24 hidden size-12 items-center justify-center rounded-[14px] border border-ink/10 bg-white/90 shadow-[0_12px_28px_rgba(69,6,147,0.12)] backdrop-blur-md md:flex"
                    style={{ "--nf-delay": "1800ms" } as CSSProperties}
                  >
                    <Mark name="crm" className="size-5 text-primary-dark" />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* module links */}
            <Reveal variant="up" distance={20} delay={320}>
              <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                {MODULES.map((module) => (
                  <Link
                    key={module.slug}
                    href={`/modules/${module.slug}`}
                    className={JUMP_CHIP_CLASSES}
                  >
                    <span className="size-1.5 rounded-full bg-primary" />
                    {module.name}
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* module deep-dives, with the conversion panel splitting the run */}
        <div className="flex w-full flex-col items-center py-8 lg:py-12">
          {MODULES.slice(0, 4).map((module, i) => (
            <ModuleSection key={module.slug} module={module} index={i} />
          ))}

          <CtaPanel />

          {MODULES.slice(4).map((module, i) => (
            <ModuleSection key={module.slug} module={module} index={i + 4} />
          ))}
        </div>

        {/* closing CTA: the scattered old stack collapsing into one
            workspace, on a gradient band that melts into the dark footer */}
        <section className="relative w-full overflow-hidden bg-[linear-gradient(180deg,rgba(140,0,255,0)_0%,rgba(140,0,255,0.3)_100%)] px-5 pt-12 pb-20 md:px-10 lg:pt-16 lg:pb-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(140,0,255,0.16)_1.5px,transparent_1.5px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_75%,black,transparent)]" />
          <div className="pointer-events-none absolute bottom-[-20%] left-[8%] size-[300px] rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute right-[6%] bottom-[-25%] size-[320px] rounded-full bg-violet-400/25 blur-3xl" />

          <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 text-center">
            {/* the messy stack → one workspace */}
            <Reveal variant="up" distance={30}>
              <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
                <div className="flex max-w-[380px] flex-wrap items-center justify-center gap-2">
                  {[
                    { label: "Spreadsheets", tilt: "-rotate-3" },
                    { label: "CRM tool", tilt: "rotate-2" },
                    { label: "Invoice app", tilt: "-rotate-2" },
                    { label: "Task board", tilt: "rotate-3" },
                    { label: "Payroll files", tilt: "-rotate-1" },
                  ].map((tool) => (
                    <span
                      key={tool.label}
                      className={cn(
                        "rounded-[32px] border border-dashed border-ink/20 bg-white/60 px-3.5 py-1.5 text-[12px] leading-[1.6] tracking-[-0.02em] text-ink-50",
                        tool.tilt,
                      )}
                    >
                      {tool.label}
                    </span>
                  ))}
                </div>
                <ArrowUpRightIcon className="size-5 rotate-45 text-primary-dark max-md:rotate-[135deg]" />
                <div className="nf-float flex items-center gap-3 rounded-[16px] bg-[linear-gradient(125deg,rgb(140,0,255)_9%,rgb(69,6,147)_92%)] px-5 py-3.5 shadow-[0_20px_44px_-16px_rgba(69,6,147,0.55)]">
                  <span className="flex size-8 items-center justify-center rounded-[10px] bg-white/15">
                    <Mark name="check" className="size-4 text-white" />
                  </span>
                  <span className="text-left">
                    <span className="block text-[14px] leading-[1.3] font-semibold text-white">
                      BizvoraOne
                    </span>
                    <span className="block text-[11px] leading-[1.4] text-white/70">
                      One workspace, 7 modules
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal variant="up" distance={30} delay={100}>
              <div className="flex flex-col items-center gap-6">
                <h2 className="max-w-[560px] text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-ink md:text-[36px]">
                  Still comparing modules to your{" "}
                  <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                    current stack?
                  </span>
                </h2>
                <p className="max-w-[520px] text-[15px] leading-[1.6] tracking-[-0.02em] text-ink-70">
                  Bring your toughest workflow to the demo — we&apos;ll run it
                  end to end, live.
                </p>
              </div>
            </Reveal>

            <Reveal variant="up" distance={30} delay={180}>
              <div className="flex flex-col items-center gap-3 sm:flex-row">
                <DemoPillButton className="w-[212px]">
                  Request a Demo
                </DemoPillButton>
                <Link href="/pricing" className={GHOST_BUTTON_CLASSES}>
                  See What&apos;s Included
                </Link>
              </div>
            </Reveal>

            <Reveal variant="up" distance={20} delay={260}>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {["Free live demo", "All 7 modules included", "No feature tiers"].map((point) => (
                  <span
                    key={point}
                    className="flex items-center gap-2 text-[13px] leading-[1.6] tracking-[-0.02em] text-ink-70"
                  >
                    <Mark name="check" className="size-3.5 shrink-0 text-primary-dark" />
                    {point}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </BasicLayout>
  );
}
