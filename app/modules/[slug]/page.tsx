import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BasicLayout } from "@/layout/basic-layout";
import { ArrowUpRightIcon, Mark } from "@/components/icons";
import { DemoPillButton } from "@/components/demo-trigger";
import { Reveal } from "@/components/reveal";
import { FAQS, MODULE_PAGES, MODULES, ROLES } from "@/lib/bizvora";
import type { ModulePageExtras } from "@/types/content";
import { cn } from "@/lib/utils";
import { CtaPanel } from "../_components/cta-panel";
import { ARTS, CARD_CLASSES, GHOST_BUTTON_CLASSES } from "../_components/shared";

const PAGE_EXTRAS: Record<string, ModulePageExtras> = MODULE_PAGES;

export function generateStaticParams() {
  return MODULES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/modules/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const mod = MODULES.find((m) => m.slug === slug);
  if (!mod) return {};
  return {
    title: `${mod.name} | BizvoraOne`,
    description: `${mod.blurb}. ${mod.description}`,
  };
}

/** Standard section shell for this page. */
const SECTION_CLASSES =
  "mx-auto w-full max-w-[500px] px-5 py-10 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:py-14";

/** Eyebrow + gradient heading shared by the lower sections. */
function SectionHeading({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal variant="up" distance={30} className="flex flex-col items-center gap-3 text-center">
      <span className="text-[12px] font-semibold tracking-[0.14em] text-primary-dark uppercase">
        {eyebrow}
      </span>
      <h2 className="max-w-[560px] text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-ink md:text-[36px]">
        {children}
      </h2>
    </Reveal>
  );
}

const GRADIENT_TEXT_CLASSES =
  "bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent";

/** Bento column spans for the five feature cards: 4+2 / 2+4 / full-width. */
const FEATURE_SPANS = [
  "md:col-span-4",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-4",
  "md:col-span-6",
];

export default async function ModuleDetailPage({ params }: PageProps<"/modules/[slug]">) {
  const { slug } = await params;
  const index = MODULES.findIndex((m) => m.slug === slug);
  const mod = MODULES[index];
  const extras = PAGE_EXTRAS[slug];
  if (!mod || !extras) notFound();

  const Art = ARTS[mod.slug];
  const num = String(index + 1).padStart(2, "0");
  const roles = extras.roleNames
    .map((name) => ROLES.find((role) => role.name === name))
    .filter((role) => role !== undefined);
  const faqs = FAQS.filter((faq) => extras.faqQuestions.includes(faq.question));
  const related = extras.related
    .map((relSlug) => MODULES.find((m) => m.slug === relSlug))
    .filter((m) => m !== undefined);

  return (
    <BasicLayout>
      <main className="flex w-full flex-1 flex-col items-center overflow-x-clip">
        {/* hero: copy left, layered art with stat satellites right */}
        <div className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#fff_18%,rgba(140,0,255,0.35)_100%)] px-5 pt-[120px] pb-14 md:px-10 lg:px-16 lg:pt-[150px] lg:pb-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(140,0,255,0.16)_1.5px,transparent_1.5px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_35%,black,transparent)]" />
          <div className="pointer-events-none absolute top-[10%] left-[4%] size-[280px] rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute top-[20%] right-[2%] size-[320px] rounded-full bg-violet-400/20 blur-3xl" />

          <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-10">
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
                    <Link href="/modules" className="text-ink-50 transition-colors hover:text-ink">
                      Modules
                    </Link>
                    <span className="text-ink-50">/</span>
                    <span className="font-medium text-primary-dark">{mod.name}</span>
                  </nav>
                </Reveal>

                <Reveal variant="up" distance={20} delay={60}>
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-[12px] bg-white shadow-[0_2px_8px_-2px_rgba(69,6,147,0.15)] ring-1 ring-primary/15">
                      <Mark name={mod.icon} className="size-5 text-primary-dark" />
                    </span>
                    <span className="text-[12px] font-semibold tracking-[0.14em] text-primary-dark uppercase">
                      {num} · {mod.eyebrow}
                    </span>
                  </div>
                </Reveal>

                <Reveal variant="up" distance={30} delay={120} as="h1">
                  <span className="block text-[30px] leading-[1.12] font-medium tracking-[-0.04em] text-ink md:text-[44px] lg:text-[54px]">
                    {mod.name}.{" "}
                    <span className={GRADIENT_TEXT_CLASSES}>{extras.heroTagline}</span>
                  </span>
                </Reveal>

                <Reveal variant="up" distance={30} delay={200}>
                  <p className="max-w-[520px] text-[16px] leading-[1.6] tracking-[-0.02em] text-ink-70">
                    {mod.description}
                  </p>
                </Reveal>

                <Reveal variant="up" distance={30} delay={280}>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <DemoPillButton className="w-[212px]">
                      Request a Demo
                    </DemoPillButton>
                    <Link href="/modules" className={GHOST_BUTTON_CLASSES}>
                      All Modules
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* art column with stat satellites */}
              <Reveal
                variant="up"
                distance={40}
                delay={200}
                className="relative mx-auto w-full max-w-[500px]"
              >
                <div className="relative">
                  <div className="pointer-events-none absolute -inset-8 rounded-full bg-primary/10 blur-3xl" />
                  <div className="pointer-events-none absolute -top-8 -right-8 size-36 bg-[radial-gradient(rgba(140,0,255,0.3)_1.5px,transparent_1.5px)] [background-size:14px_14px] [mask-image:radial-gradient(circle,black,transparent_70%)]" />
                  <div className="pointer-events-none absolute inset-0 translate-x-4 translate-y-4 rounded-[16px] border border-primary/15 bg-tile/60" />

                  <div className={`${CARD_CLASSES} relative p-6 md:p-8`}>
                    {/* Reveal is load-bearing: it unpauses the art's fa-anim build */}
                    <Reveal variant="scale">
                      <Art
                        role="img"
                        aria-label={mod.artAlt}
                        className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </Reveal>
                  </div>

                  {/* hero stats as floating satellites (after the panel in DOM
                      so they paint above it; no z-index so the header wins) */}
                  {extras.heroStats.map((stat, i) => (
                    <div
                      key={stat.label}
                      className={cn(
                        "nf-float absolute hidden max-w-[240px] items-center gap-3 rounded-[14px] border border-ink/10 bg-white/90 px-4 py-3 shadow-[0_16px_40px_rgba(69,6,147,0.14)] backdrop-blur-md md:flex",
                        i === 0 && "-top-7 -right-4 lg:-right-10",
                        i === 1 && "-bottom-9 -left-4 lg:-left-12",
                        i === 2 && "-right-6 -bottom-7 lg:-right-10",
                      )}
                      style={{ "--nf-delay": `${i * 900}ms` } as CSSProperties}
                    >
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-10">
                        <Mark name={mod.icon} className="size-4 text-primary-dark" />
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[15px] leading-none font-semibold text-ink">
                          {stat.value}
                        </span>
                        <span className="mt-1 text-[11px] leading-[1.3] text-ink-50">
                          {stat.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* the same stats as a compact row where satellites are hidden */}
            <Reveal variant="up" distance={20} delay={320} className="md:hidden">
              <div className="grid grid-cols-3 gap-4">
                {extras.heroStats.map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
                    <span
                      className={`${GRADIENT_TEXT_CLASSES} text-[22px] leading-[1.2] font-semibold tracking-[-0.02em]`}
                    >
                      {stat.value}
                    </span>
                    <span className="text-[11px] leading-[1.4] text-ink-50">{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* feature cards */}
        <section className={`${SECTION_CLASSES} flex flex-col gap-10`}>
          <SectionHeading eyebrow={`Inside ${mod.name}`}>
            What the module{" "}
            <span className={GRADIENT_TEXT_CLASSES}>actually does</span>
          </SectionHeading>
          <div className="grid gap-4 md:grid-cols-6">
            {extras.featureCards.map((card, i) => {
              // bento rhythm: wide/narrow, narrow/wide, full-width closer
              const span = FEATURE_SPANS[i] ?? "md:col-span-3";
              const wide = span === "md:col-span-6";
              return (
                <Reveal key={card.title} variant="up" distance={30} delay={i * 60} className={span}>
                  <div
                    className={cn(
                      `${CARD_CLASSES} relative h-full overflow-hidden p-6`,
                      wide
                        ? "flex flex-col gap-3 md:flex-row md:items-center md:gap-6"
                        : "flex flex-col gap-3",
                    )}
                  >
                    {/* corner glow, warming on hover */}
                    <span className="pointer-events-none absolute -right-10 -bottom-10 size-32 rounded-full bg-primary/5 blur-2xl transition-colors duration-300 group-hover:bg-primary/15" />
                    {/* ghost index numeral */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute top-3 right-5 text-[44px] leading-none font-semibold tracking-[-0.04em] text-primary/10 transition-colors duration-300 select-none group-hover:text-primary/20"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-primary-10 transition-colors duration-300 group-hover:bg-primary">
                      <Mark
                        name={card.icon}
                        className="size-5 text-primary-dark transition-colors duration-300 group-hover:text-white"
                      />
                    </span>
                    <div className={cn("relative flex flex-col gap-2", wide && "md:max-w-[640px]")}>
                      <p className="text-[16px] leading-[1.4] font-medium tracking-[-0.02em] text-ink">
                        {card.title}
                      </p>
                      <p className="text-[14px] leading-[1.6] tracking-[-0.02em] text-ink-70">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* how it works */}
        <section className="w-full bg-[linear-gradient(180deg,rgba(140,0,255,0.05)_0%,rgba(140,0,255,0)_75%)]">
          <div className={`${SECTION_CLASSES} flex flex-col gap-10`}>
            <SectionHeading eyebrow="How it works">
              Three steps,{" "}
              <span className={GRADIENT_TEXT_CLASSES}>zero re-entry</span>
            </SectionHeading>
            {/* open timeline: nodes on a gradient rail, ghost numerals behind
                the copy — no boxes. The rail runs horizontally on md+, and a
                short vertical segment joins stacked steps on mobile. */}
            <div className="flex flex-col gap-14 md:flex-row md:gap-10">
              {extras.steps.map((step, i) => {
                const last = i === extras.steps.length - 1;
                return (
                  <Reveal
                    key={step.title}
                    variant="up"
                    distance={30}
                    delay={i * 120}
                    className="relative flex-1"
                  >
                    {/* oversized ghost numeral */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -top-9 -left-1 text-[88px] leading-none font-semibold tracking-[-0.04em] text-primary/5 select-none"
                    >
                      {`0${i + 1}`}
                    </span>
                    {/* mobile rail segment down to the next step */}
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
          </div>
        </section>

        {/* who sees what */}
        <section className={`${SECTION_CLASSES} flex flex-col gap-10`}>
          <SectionHeading eyebrow="Role-scoped by design">
            Who sees what in{" "}
            <span className={GRADIENT_TEXT_CLASSES}>{mod.name}</span>
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role, i) => (
              <Reveal key={role.name} variant="up" distance={30} delay={i * 80}>
                <div className={`${CARD_CLASSES} relative flex h-full flex-col gap-4 overflow-hidden p-5`}>
                  {/* dashboard-window chrome dots */}
                  <span className="absolute top-5 right-5 flex gap-1.5">
                    <span className="size-1.5 rounded-full bg-primary/40" />
                    <span className="size-1.5 rounded-full bg-ink/10" />
                    <span className="size-1.5 rounded-full bg-ink/10" />
                  </span>
                  <span className="pointer-events-none absolute -right-10 -bottom-10 size-32 rounded-full bg-primary/5 blur-2xl transition-colors duration-300 group-hover:bg-primary/15" />

                  <div className="flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(125deg,rgb(140,0,255)_9%,rgb(69,6,147)_92%)] text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(69,6,147,0.35)]">
                      {role.name.charAt(0)}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[14px] leading-[1.3] font-semibold text-ink">
                        {role.name}
                      </span>
                      <span className="text-[10px] font-semibold tracking-[0.12em] text-ink-50 uppercase">
                        Role dashboard
                      </span>
                    </div>
                  </div>
                  <p className="relative text-[13px] leading-[1.6] tracking-[-0.02em] text-ink-70">
                    {role.sees}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal variant="up" distance={20} delay={roles.length * 80} className="mx-auto -mt-4">
            <Link
              href="/why-choose-us"
              className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-primary-dark transition-colors hover:text-primary"
            >
              See all 8 role dashboards
              <ArrowUpRightIcon className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </section>

        {/* module FAQs, when any apply */}
        {faqs.length > 0 && (
          <section className={`${SECTION_CLASSES} flex flex-col gap-10`}>
            <SectionHeading eyebrow="Good to know">
              Questions teams{" "}
              <span className={GRADIENT_TEXT_CLASSES}>ask about this</span>
            </SectionHeading>
            <div className="mx-auto flex w-full max-w-[960px] flex-col gap-4">
              <div className={cn("grid gap-4", faqs.length > 1 && "md:grid-cols-2")}>
                {faqs.map((faq, i) => (
                  <Reveal key={faq.question} variant="up" distance={30} delay={i * 80}>
                    <div
                      className={`${CARD_CLASSES} relative flex h-full flex-col gap-4 overflow-hidden p-6 text-left`}
                    >
                      <span className="pointer-events-none absolute -right-10 -bottom-10 size-32 rounded-full bg-primary/5 blur-2xl transition-colors duration-300 group-hover:bg-primary/15" />

                      <div className="flex items-start gap-3">
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(125deg,rgb(140,0,255)_9%,rgb(69,6,147)_92%)] text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(69,6,147,0.35)]">
                          Q
                        </span>
                        <p className="pt-1 text-[15px] leading-[1.4] font-medium tracking-[-0.02em] text-ink">
                          {faq.question}
                        </p>
                      </div>
                      <div className="relative flex items-start gap-3">
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-10 text-[13px] font-semibold text-primary-dark">
                          A
                        </span>
                        <p className="border-l border-ink/10 pt-1 pl-3 text-[14px] leading-[1.6] tracking-[-0.02em] text-ink-70">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal
                variant="up"
                distance={20}
                delay={faqs.length * 80}
                className="mx-auto mt-2"
              >
                <Link
                  href="/faqs"
                  className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-primary-dark transition-colors hover:text-primary"
                >
                  More FAQs
                  <ArrowUpRightIcon className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Reveal>
            </div>
          </section>
        )}

        {/* related modules */}
        <section className={`${SECTION_CLASSES} flex flex-col gap-10`}>
          <SectionHeading eyebrow="Works with">
            {mod.name} doesn&apos;t{" "}
            <span className={GRADIENT_TEXT_CLASSES}>work alone</span>
          </SectionHeading>
          <div
            className={cn(
              "grid gap-4 sm:grid-cols-2",
              related.length >= 3 ? "lg:grid-cols-4" : "lg:grid-cols-3",
            )}
          >
            {related.map((rel, i) => (
              <Reveal key={rel.slug} variant="up" distance={30} delay={i * 80}>
                <Link
                  href={`/modules/${rel.slug}`}
                  className={`${CARD_CLASSES} flex h-full flex-col gap-3 p-5`}
                >
                  <span className="flex size-10 items-center justify-center rounded-[12px] bg-primary-10">
                    <Mark name={rel.icon} className="size-5 text-primary-dark" />
                  </span>
                  <span className="flex items-center gap-1.5 text-[15px] leading-[1.3] font-semibold text-ink">
                    {rel.name}
                    <ArrowUpRightIcon className="size-3 text-primary-dark transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <span className="text-[13px] leading-[1.6] tracking-[-0.02em] text-ink-70">
                    {rel.blurb}
                  </span>
                </Link>
              </Reveal>
            ))}
            <Reveal variant="up" distance={30} delay={related.length * 80}>
              <Link
                href="/modules"
                className="group flex h-full flex-col justify-between gap-3 rounded-[16px] bg-[linear-gradient(125deg,rgb(140,0,255)_9%,rgb(69,6,147)_92%)] p-5 shadow-[0_20px_44px_-16px_rgba(69,6,147,0.55)] transition-all duration-300 hover:-translate-y-1"
              >
                <span className="flex size-10 items-center justify-center rounded-[12px] bg-white/15">
                  <Mark name="check" className="size-5 text-white" />
                </span>
                <span>
                  <span className="flex items-center gap-1.5 text-[15px] leading-[1.3] font-semibold text-white">
                    All modules
                    <ArrowUpRightIcon className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <span className="mt-1 block text-[13px] leading-[1.6] text-white/70">
                    One workspace, 7 modules — see the full tour.
                  </span>
                </span>
              </Link>
            </Reveal>
          </div>
        </section>

        <CtaPanel />
      </main>
    </BasicLayout>
  );
}
