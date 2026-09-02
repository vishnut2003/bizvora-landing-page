import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { BasicLayout } from "@/layout/basic-layout";
import { ArrowUpRightIcon, Mark, type MarkName } from "@/components/icons";
import { DemoLink, DemoPillButton } from "@/components/demo-trigger";
import { TradesTicker } from "@/components/trades-ticker";
import { Reveal } from "@/components/reveal";
import { MODULES, ROLES } from "@/lib/bizvora";
import { cn } from "@/lib/utils";
import { CtaPanel } from "@/app/modules/_components/cta-panel";
import {
  ARTS,
  CARD_CLASSES,
  GHOST_BUTTON_CLASSES,
  JUMP_CHIP_CLASSES,
} from "@/app/modules/_components/shared";

export const metadata: Metadata = {
  title: "Use Cases | BizvoraOne",
  description:
    "Five workflows BizvoraOne runs end to end — ad click to first call, enquiry to proposal, quotation to collection, kickoff to delivery and month-end payroll — all in one workspace.",
};

interface UseCase {
  slug: string;
  persona: string;
  title: string;
  titleAccent: string;
  description: string;
  steps: string[];
  /** Which module's animated art illustrates the scenario. */
  artSlug: string;
  /** Module chips shown in the "runs on" row, resolved against MODULES. */
  moduleSlugs: string[];
  stat: { value: string; label: string };
}

const USE_CASES: UseCase[] = [
  {
    slug: "lead-to-call",
    persona: "Sales",
    title: "From ad click to",
    titleAccent: "first conversation",
    description:
      "A lead fills a Meta or Google ads form. Before sales even sees it, the AI voice agent has rung them back, qualified the enquiry and logged the call — so the pipeline fills itself with warm conversations, not cold rows.",
    steps: [
      "The enquiry lands in the 9-stage pipeline automatically — one of 15 lead sources",
      "The AI voice agent calls back in seconds and qualifies the lead",
      "Sales opens a lead that already has context, value and a next action",
    ],
    artSlug: "ai-voice-agent",
    moduleSlugs: ["crm", "ai-voice-agent"],
    stat: { value: "Seconds", label: "from form-fill to first ring" },
  },
  {
    slug: "enquiry-to-proposal",
    persona: "Pre-sales",
    title: "From enquiry to",
    titleAccent: "signed-off proposal",
    description:
      "The AI drafts the proposal from the lead's own context — what they asked for, what it costs, why you. Your team edits, approves and sends a branded PDF the client actually reads, without opening a blank document.",
    steps: [
      "AI drafts the proposal from the lead's captured context",
      "Your team reviews and edits — nothing goes out without sign-off",
      "A branded PDF lands with the client, tracked against the deal",
    ],
    artSlug: "ai-proposals",
    moduleSlugs: ["ai-proposals", "crm", "quotations"],
    stat: { value: "1st draft", label: "written before you open the file" },
  },
  {
    slug: "quote-to-collection",
    persona: "Accounts",
    title: "From quotation to",
    titleAccent: "money in the bank",
    description:
      "An itemized, GST-ready quote becomes a Tally-style voucher on the same record. Receivables ageing keeps the outstanding honest, and recovery follow-ups chase what's due before it goes stale.",
    steps: [
      "An itemized quote with GST goes out in minutes",
      "The voucher posts in the debit-credit-balance layout accounts already knows",
      "Ageing and recovery follow-ups chase every outstanding invoice",
    ],
    artSlug: "accounting-recovery",
    moduleSlugs: ["quotations", "accounting-recovery"],
    stat: { value: "0", label: "re-entries between quote and books" },
  },
  {
    slug: "kickoff-to-delivery",
    persona: "Delivery",
    title: "From kickoff to",
    titleAccent: "delivered project",
    description:
      "Won deals roll into projects with milestones and review gates. Everyone sees what's due, what's blocked and what's shipped — and management sees it without asking for a status meeting.",
    steps: [
      "The won deal becomes a project, on the same record",
      "Milestones move through review gates — nothing ships unchecked",
      "Delivery dates, blockers and progress visible to every role that needs them",
    ],
    artSlug: "projects",
    moduleSlugs: ["projects", "crm"],
    stat: { value: "1 record", label: "from first enquiry to final milestone" },
  },
  {
    slug: "month-end-payroll",
    persona: "HR",
    title: "Month-end without",
    titleAccent: "the scramble",
    description:
      "Employee records, payroll runs and payslip PDFs live where the rest of the business already works. HR runs payroll, employees see their own payslips, and nobody emails spreadsheets around on the 1st.",
    steps: [
      "HR runs payroll from the same workspace as everything else",
      "Payslip PDFs generate for every employee automatically",
      "Employees see their own payslips — and nothing that isn't theirs",
    ],
    artSlug: "hr-payroll",
    moduleSlugs: ["hr-payroll"],
    stat: { value: "On time", label: "payroll, every single month" },
  },
];

/** Icons for the ROLES grid, in the same order as ROLES in lib/bizvora. */
const ROLE_ICONS: MarkName[] = [
  "check",
  "crm",
  "ledger",
  "pulse",
  "kanban",
  "hr",
  "brief",
  "laptop",
];

const GRADIENT_TEXT_CLASSES =
  "bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent";

/**
 * One scenario row: copy + step flow on one side, the module's animated art
 * on the other, alternating sides on desktop. Odd rows sit on the soft band.
 */
function UseCaseSection({ useCase, index }: { useCase: UseCase; index: number }) {
  const Art = ARTS[useCase.artSlug];
  const swap = index % 2 === 1;
  const num = String(index + 1).padStart(2, "0");
  const modules = useCase.moduleSlugs
    .map((slug) => MODULES.find((m) => m.slug === slug))
    .filter((m) => m !== undefined);
  return (
    <section
      id={useCase.slug}
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
          <span className="text-[12px] font-semibold tracking-[0.14em] text-primary-dark uppercase">
            {num} · {useCase.persona}
          </span>

          <h2 className="text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-ink md:text-[36px] lg:text-[44px]">
            {useCase.title}{" "}
            <span className={GRADIENT_TEXT_CLASSES}>{useCase.titleAccent}</span>
          </h2>
          <p className="text-[15px] leading-[1.6] tracking-[-0.02em] text-ink-70 lg:text-[16px]">
            {useCase.description}
          </p>

          <ol className="flex list-none flex-col gap-3">
            {useCase.steps.map((step, i) => (
              <li
                key={step}
                className="flex items-start gap-3 text-[15px] leading-[1.6] tracking-[-0.02em] text-ink-70"
              >
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(125deg,rgb(140,0,255)_9%,rgb(69,6,147)_92%)] text-[11px] leading-none font-semibold text-white">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>

          {/* stat + the modules the scenario runs on */}
          <div className="mt-2 flex w-full flex-wrap items-center gap-x-4 gap-y-4 border-t border-ink/10 pt-5">
            <div className="flex flex-col">
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-[28px] leading-[1.2] font-semibold tracking-[-0.02em] text-transparent">
                {useCase.stat.value}
              </span>
              <span className="max-w-[150px] text-[12px] leading-[1.5] text-ink-50">
                {useCase.stat.label}
              </span>
            </div>
            <span className="h-10 w-px bg-ink/10" />
            <div className="flex items-center gap-1.5">
              <span className="mr-1 text-[10px] font-semibold tracking-[0.1em] text-ink-50 uppercase">
                Runs on
              </span>
              {modules.map((mod) => (
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
            <span className="h-10 w-px bg-ink/10" />
            <DemoLink
              className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-primary-dark transition-colors hover:text-primary"
            >
              See it live on a demo
              <ArrowUpRightIcon className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </DemoLink>
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
                aria-label={`${useCase.persona} workflow illustration`}
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </Reveal>
          </div>

          {/* scenario index badge */}
          <span
            className={cn(
              "absolute -top-3.5 rounded-full bg-[linear-gradient(125deg,rgb(140,0,255)_9%,rgb(69,6,147)_92%)] px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-white shadow-[0_8px_20px_rgba(69,6,147,0.35)]",
              swap ? "right-6" : "left-6",
            )}
          >
            {num} / {String(USE_CASES.length).padStart(2, "0")}
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
              <Mark name="check" className="size-3.5 text-primary-dark" />
            </span>
            <span className="text-[12px] leading-[1.4] font-medium whitespace-nowrap text-ink">
              {useCase.persona} · end to end
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function UseCasesPage() {
  return (
    <BasicLayout>
      <main className="flex w-full flex-1 flex-col items-center overflow-x-clip">
        {/* hero: copy left, the scenario picker right, jump chips underneath */}
        {/* no overflow-hidden here: the satellite cards hang past the band's
            bottom edge and must not be clipped at the marquee seam — the
            page-level overflow-x-clip on <main> contains the orbs instead */}
        <div className="relative w-full bg-[linear-gradient(180deg,#fff_18%,rgba(140,0,255,0.35)_100%)] px-5 pt-[120px] pb-10 md:px-10 lg:px-16 lg:pt-[150px] lg:pb-12">
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
                    <span className="font-medium text-primary-dark">Use Cases</span>
                  </nav>
                </Reveal>

                <Reveal variant="up" distance={30} delay={80} as="h1">
                  <span className="block text-[30px] leading-[1.12] font-medium tracking-[-0.04em] text-ink md:text-[44px] lg:text-[54px]">
                    Real workflows,{" "}
                    <span className={`${GRADIENT_TEXT_CLASSES} whitespace-nowrap`}>
                      run end to end
                    </span>
                  </span>
                </Reveal>

                <Reveal variant="up" distance={30} delay={160}>
                  <p className="max-w-[520px] text-[16px] leading-[1.6] tracking-[-0.02em] text-ink-70">
                    Not feature lists — finished jobs. Five workflows every
                    growing business runs weekly, followed from the first click
                    to the last rupee, without leaving the workspace.
                  </p>
                </Reveal>

                <Reveal variant="up" distance={30} delay={240}>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <DemoPillButton className="w-[212px]">
                      Request a Demo
                    </DemoPillButton>
                    <Link href="#lead-to-call" className={GHOST_BUTTON_CLASSES}>
                      Follow a Workflow
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* scenario picker panel */}
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
                        <Mark name="pulse" className="size-5 text-white" />
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[15px] leading-[1.4] font-semibold text-ink">
                          Pick your workflow
                        </span>
                        <span className="text-[12px] leading-[1.5] text-ink-50">
                          5 scenarios · end to end
                        </span>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-col gap-3">
                      {USE_CASES.map((useCase, i) => (
                        <Link
                          key={useCase.slug}
                          href={`#${useCase.slug}`}
                          className="group/tile flex items-center gap-3 rounded-[12px] border border-ink/10 bg-white p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_16px_32px_-20px_rgba(69,6,147,0.35)]"
                        >
                          <span className="flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-primary-10 text-[12px] font-semibold text-primary-dark transition-colors duration-300 group-hover/tile:bg-primary group-hover/tile:text-white">
                            {i + 1}
                          </span>
                          <span className="text-[13px] leading-[1.3] font-medium text-ink">
                            {useCase.title} {useCase.titleAccent}
                          </span>
                          <ArrowUpRightIcon className="ml-auto size-3 shrink-0 text-ink-50 transition-transform duration-200 group-hover/tile:translate-x-0.5 group-hover/tile:-translate-y-0.5 group-hover/tile:text-primary-dark" />
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
                        New lead
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
                      <span className="text-[12px] font-semibold text-ink">Quote → paid</span>
                      <span className="text-[12px] font-semibold text-primary">0 re-entry</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-primary-10">
                      <div className="h-full w-full rounded-full bg-[linear-gradient(125deg,rgb(140,0,255)_9%,rgb(69,6,147)_92%)]" />
                    </div>
                    <span className="text-[11px] leading-[1.4] text-ink-50">
                      One record, quote to books
                    </span>
                  </div>

                  <div
                    className="nf-float absolute top-16 -left-6 hidden size-12 items-center justify-center rounded-[14px] border border-ink/10 bg-white/90 shadow-[0_12px_28px_rgba(69,6,147,0.12)] backdrop-blur-md md:flex"
                    style={{ "--nf-delay": "600ms" } as CSSProperties}
                  >
                    <Mark name="kanban" className="size-5 text-primary-dark" />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* jump links */}
            <Reveal variant="up" distance={20} delay={320}>
              <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                {USE_CASES.map((useCase) => (
                  <Link key={useCase.slug} href={`#${useCase.slug}`} className={JUMP_CHIP_CLASSES}>
                    <span className="size-1.5 rounded-full bg-primary" />
                    {useCase.persona}
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* picks the hero gradient up exactly where it ends (rgba .35) and
            fades it out, so hero and ticker read as one continuous band */}
        <TradesTicker className="bg-[linear-gradient(180deg,rgba(140,0,255,0.35)_0%,rgba(140,0,255,0)_100%)] pt-4 pb-10 lg:pb-14" />

        {/* the scenario deep-dives, alternating sides */}
        <div className="flex w-full flex-col items-center py-8 lg:py-12">
          {USE_CASES.map((useCase, i) => (
            <UseCaseSection key={useCase.slug} useCase={useCase} index={i} />
          ))}
        </div>

        {/* every role's slice of the same workflows */}
        <section className="mx-auto flex w-full max-w-[500px] flex-col gap-10 px-5 py-10 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:py-14">
          <Reveal
            variant="up"
            distance={30}
            className="flex flex-col items-center gap-3 text-center"
          >
            <span className="text-[12px] font-semibold tracking-[0.14em] text-primary-dark uppercase">
              8 roles
            </span>
            <h2 className="max-w-[560px] text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-ink md:text-[36px]">
              The same workflows,{" "}
              <span className={GRADIENT_TEXT_CLASSES}>every seat&apos;s view</span>
            </h2>
            <p className="max-w-[520px] text-[15px] leading-[1.6] tracking-[-0.02em] text-ink-70">
              Each role sees its slice of the flow — and nothing that
              isn&apos;t theirs.
            </p>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {ROLES.map((role, i) => (
              <Reveal
                key={role.name}
                variant="up"
                distance={30}
                delay={(i % 4) * 60}
                className="h-full"
              >
                <div
                  className={`${CARD_CLASSES} relative flex h-full flex-col gap-3 overflow-hidden p-5`}
                >
                  <span className="pointer-events-none absolute -right-10 -bottom-10 size-32 rounded-full bg-primary/5 blur-2xl transition-colors duration-300 group-hover:bg-primary/15" />

                  <span className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-primary-10 transition-colors duration-300 group-hover:bg-primary">
                    <Mark
                      name={ROLE_ICONS[i]}
                      className="size-5 text-primary-dark transition-colors duration-300 group-hover:text-white"
                    />
                  </span>
                  <p className="text-[15px] leading-[1.3] font-semibold tracking-[-0.02em] text-ink">
                    {role.name}
                  </p>
                  <p className="text-[13px] leading-[1.6] tracking-[-0.02em] text-ink-70">
                    {role.sees}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <CtaPanel tileLinkMode="page" />
      </main>
    </BasicLayout>
  );
}
