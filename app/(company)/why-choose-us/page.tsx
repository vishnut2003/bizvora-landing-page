import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { BasicLayout } from "@/layout/basic-layout";
import { ArrowUpRightIcon, Mark, type MarkName } from "@/components/icons";
import { PillButton } from "@/components/pill-button";
import { DemoPillButton } from "@/components/demo-trigger";
import { TradesTicker } from "@/components/trades-ticker";
import { Reveal } from "@/components/reveal";
import { PLAN_INCLUDES } from "@/lib/bizvora";
import { CtaPanel } from "@/app/modules/_components/cta-panel";
import { CARD_CLASSES, GHOST_BUTTON_CLASSES } from "@/app/modules/_components/shared";

export const metadata: Metadata = {
  title: "Why Choose Us | BizvoraOne",
  description:
    "Why growing Indian businesses pick BizvoraOne over a stitched stack — one workspace, one database and one plan covering CRM, proposals, quotations, accounting, projects, payroll and an AI voice agent.",
};

/** The checklist rows inside the hero glass panel. */
const SWITCH_REASONS: { label: string; sub: string; icon: MarkName }[] = [
  { label: "One login, whole business", sub: "7 modules on one database", icon: "check" },
  { label: "Leads called in seconds", sub: "AI voice agent on every enquiry", icon: "phone" },
  { label: "Books in Tally style", sub: "Zero retraining for accounts", icon: "ledger" },
  { label: "One plan, ₹199 a user", sub: "No tiers, no feature gates", icon: "quote" },
];

/** Left card: the pains of a stitched stack. Right card mirrors them fixed. */
const OLD_STACK_PAINS = [
  "Leads copied by hand from ad inboxes into a spreadsheet",
  "Quotes in one tool, invoices in another, neither talking",
  "The accountant re-enters everything into Tally at month end",
  "Five subscriptions, five logins, five places data goes stale",
];

const BIZVORA_FIXES = [
  "15 lead sources land in one pipeline — and the AI calls back in seconds",
  "Quote, proposal, voucher and project share the same record",
  "Tally-style vouchers from day one — nothing to re-enter",
  "One workspace, one database, one plan for the whole team",
];

const REASONS: { title: string; description: string; icon: MarkName }[] = [
  {
    title: "The AI makes the first call",
    icon: "phone",
    description:
      "A new lead gets a callback in seconds, not hours. The voice agent qualifies it and hands your team a warm conversation.",
  },
  {
    title: "One database, no integrations",
    icon: "kanban",
    description:
      "CRM, quotes, accounting, projects and payroll share one record of truth. There are no connectors to babysit or sync to debug.",
  },
  {
    title: "Accounting your team knows",
    icon: "ledger",
    description:
      "Debit-credit-balance vouchers in the Tally layout, plus receivables ageing and collection follow-ups built in.",
  },
  {
    title: "India-first defaults",
    icon: "building",
    description:
      "GST on every quote, amounts in lakhs and crores, and data hosted in the MongoDB Atlas Mumbai region — it stays in India.",
  },
  {
    title: "Dashboards scoped to roles",
    icon: "laptop",
    description:
      "Eight role dashboards: sales sees the pipeline, accounts sees vouchers, employees see their own tasks and payslips.",
  },
  {
    title: "One plan, everything in",
    icon: "check",
    description:
      "Every module ships to every customer at ₹199 per user per month, GST included — you'll never find a feature on a higher tier.",
  },
];

/** The switch, drawn as the open timeline. */
const SWITCH_STEPS = [
  {
    title: "See it on a live demo",
    description:
      "Bring your toughest workflow — we run it end to end, live, on the actual product. You already know the price before you book.",
  },
  {
    title: "We set up your workspace",
    description:
      "Lead sources connected, roles and dashboards assigned, opening balances in — your books start in the Tally-style layout your accountant already knows.",
  },
  {
    title: "The whole team goes live",
    description:
      "Sales works the pipeline, accounts runs vouchers, projects hit review gates and payroll runs on time — all from one login.",
  },
];

const GRADIENT_TEXT_CLASSES =
  "bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent";

export default function WhyChooseUsPage() {
  return (
    <BasicLayout>
      <main className="flex w-full flex-1 flex-col items-center overflow-x-clip">
        {/* hero: copy left, the switch-reasons panel right */}
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
                  <span className="font-medium text-primary-dark">Why Choose Us</span>
                </nav>
              </Reveal>

              <Reveal variant="up" distance={30} delay={80} as="h1">
                <span className="block text-[30px] leading-[1.12] font-medium tracking-[-0.04em] text-ink md:text-[44px] lg:text-[54px]">
                  Five tools, or{" "}
                  <span className={GRADIENT_TEXT_CLASSES}>one that runs it all</span>
                </span>
              </Reveal>

              <Reveal variant="up" distance={30} delay={160}>
                <p className="max-w-[520px] text-[16px] leading-[1.6] tracking-[-0.02em] text-ink-70">
                  Most growing businesses run on a stitched stack — a CRM here,
                  an invoice app there, spreadsheets in between. BizvoraOne
                  replaces the lot with one workspace, one database and one
                  plan that includes everything.
                </p>
              </Reveal>

              <Reveal variant="up" distance={30} delay={240}>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <DemoPillButton className="w-[212px]">
                    Request a Demo
                  </DemoPillButton>
                  <Link href="/modules" className={GHOST_BUTTON_CLASSES}>
                    Explore the Modules
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* switch-reasons panel */}
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
                        Why teams switch
                      </span>
                      <span className="text-[12px] leading-[1.5] text-ink-50">
                        The four reasons we hear most
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-3">
                    {SWITCH_REASONS.map((reason) => (
                      <div
                        key={reason.label}
                        className="flex items-center gap-3 rounded-[12px] border border-ink/10 bg-white p-3"
                      >
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-primary-10">
                          <Mark
                            name={reason.icon}
                            className="size-4 text-primary-dark"
                          />
                        </span>
                        <div className="flex flex-col">
                          <span className="text-[13px] leading-[1.3] font-medium text-ink">
                            {reason.label}
                          </span>
                          <span className="text-[11px] leading-[1.4] text-ink-50">
                            {reason.sub}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* floating satellites (after the panel; no z-index so the
                    fixed header still wins) */}
                <div className="nf-float absolute -top-7 -right-4 hidden items-center gap-3 rounded-[14px] border border-ink/10 bg-white/90 px-4 py-3 shadow-[0_16px_40px_rgba(69,6,147,0.14)] backdrop-blur-md md:flex lg:-right-10">
                  <span className="flex size-8 items-center justify-center rounded-full bg-emerald-100">
                    <Mark name="check" className="size-4 text-emerald-600" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[13px] leading-[1.3] font-semibold text-ink">
                      5 tools replaced
                    </span>
                    <span className="text-[11px] leading-[1.3] text-ink-50">
                      One login for the team
                    </span>
                  </div>
                </div>

                <div
                  className="nf-float absolute -bottom-9 -left-4 hidden w-[190px] flex-col gap-2.5 rounded-[14px] border border-ink/10 bg-white/90 p-4 shadow-[0_16px_40px_rgba(69,6,147,0.14)] backdrop-blur-md md:flex lg:-left-12"
                  style={{ "--nf-delay": "1200ms" } as CSSProperties}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-semibold text-ink">First callback</span>
                    <span className="text-[12px] font-semibold text-primary">Seconds</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-primary-10">
                    <div className="h-full w-[85%] rounded-full bg-[linear-gradient(125deg,rgb(140,0,255)_9%,rgb(69,6,147)_92%)]" />
                  </div>
                  <span className="text-[11px] leading-[1.4] text-ink-50">
                    The AI rings every new lead
                  </span>
                </div>

                <div
                  className="nf-float absolute top-16 -left-6 hidden size-12 items-center justify-center rounded-[14px] border border-ink/10 bg-white/90 shadow-[0_12px_28px_rgba(69,6,147,0.12)] backdrop-blur-md md:flex"
                  style={{ "--nf-delay": "600ms" } as CSSProperties}
                >
                  <Mark name="crm" className="size-5 text-primary-dark" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* picks the hero gradient up exactly where it ends (rgba .35) and
            fades it out, so hero and ticker read as one continuous band */}
        <TradesTicker className="bg-[linear-gradient(180deg,rgba(140,0,255,0.35)_0%,rgba(140,0,255,0)_100%)] pt-4 pb-10 lg:pb-14" />

        {/* the stitched stack vs BizvoraOne, side by side */}
        <section className="mx-auto flex w-full max-w-[500px] flex-col gap-10 px-5 py-10 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:py-14">
          <Reveal
            variant="up"
            distance={30}
            className="flex flex-col items-center gap-3 text-center"
          >
            <span className="text-[12px] font-semibold tracking-[0.14em] text-primary-dark uppercase">
              The comparison
            </span>
            <h2 className="max-w-[560px] text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-ink md:text-[36px]">
              A stitched stack vs{" "}
              <span className={GRADIENT_TEXT_CLASSES}>one workspace</span>
            </h2>
          </Reveal>

          <div className="flex flex-col gap-3 lg:flex-row lg:gap-6">
            {/* the old way: dashed, washed out */}
            <Reveal variant="up" distance={30} className="w-full lg:w-1/2">
              <div className="flex h-full flex-col gap-5 rounded-[16px] border border-dashed border-ink/20 bg-surface-muted p-8 lg:p-[52px]">
                <div className="flex flex-wrap items-center gap-2">
                  {["Spreadsheets", "CRM tool", "Invoice app", "Task board", "Payroll files"].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="rounded-[32px] border border-dashed border-ink/20 bg-white/60 px-3.5 py-1.5 text-[12px] leading-[1.6] tracking-[-0.02em] text-ink-50"
                      >
                        {tool}
                      </span>
                    ),
                  )}
                </div>
                <h3 className="text-[20px] leading-[1.3] font-medium tracking-[-0.02em] text-ink">
                  Running on five tools
                </h3>
                <ul className="flex list-none flex-col gap-3">
                  {OLD_STACK_PAINS.map((pain) => (
                    <li
                      key={pain}
                      className="flex items-start gap-2.5 text-[14px] leading-[1.6] tracking-[-0.02em] text-ink-50"
                    >
                      <span
                        aria-hidden
                        className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-ink/10 text-[10px] leading-none font-semibold text-ink-50"
                      >
                        ×
                      </span>
                      {pain}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* the BizvoraOne way: the dark card */}
            <Reveal
              variant="up"
              distance={30}
              delay={120}
              className="w-full lg:w-1/2"
            >
              <div className="relative flex h-full flex-col justify-center gap-5 overflow-hidden rounded-[16px] bg-ink px-8 py-12 lg:px-[52px]">
                <div className="pointer-events-none absolute -top-24 -right-20 size-[300px] rounded-full bg-primary/20 blur-3xl" />
                <div className="relative flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-[10px] bg-[linear-gradient(125deg,rgb(140,0,255)_9%,rgb(69,6,147)_92%)]">
                    <Mark name="check" className="size-4 text-white" />
                  </span>
                  <span className="text-[12px] font-semibold tracking-[0.14em] text-[#C084FC] uppercase">
                    One workspace
                  </span>
                </div>
                <h3 className="relative text-[20px] leading-[1.3] font-medium text-white lg:text-[24px]">
                  Running on BizvoraOne
                </h3>
                <ul className="relative flex list-none flex-col gap-3">
                  {BIZVORA_FIXES.map((fix) => (
                    <li
                      key={fix}
                      className="flex items-start gap-2.5 text-[14px] leading-[1.6] tracking-[-0.02em] text-zinc-400"
                    >
                      <Mark
                        name="check"
                        className="mt-1 size-4 shrink-0 text-[#C084FC]"
                      />
                      {fix}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* the six reasons grid */}
        <section className="mx-auto flex w-full max-w-[500px] flex-col gap-10 px-5 py-10 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:py-14">
          <Reveal
            variant="up"
            distance={30}
            className="flex flex-col items-center gap-3 text-center"
          >
            <span className="text-[12px] font-semibold tracking-[0.14em] text-primary-dark uppercase">
              What sets it apart
            </span>
            <h2 className="max-w-[560px] text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-ink md:text-[36px]">
              Six reasons teams{" "}
              <span className={GRADIENT_TEXT_CLASSES}>don&apos;t look back</span>
            </h2>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((reason, i) => (
              <Reveal
                key={reason.title}
                variant="up"
                distance={30}
                delay={(i % 3) * 60}
                className="h-full"
              >
                <div
                  className={`${CARD_CLASSES} relative flex h-full flex-col gap-3 overflow-hidden p-5`}
                >
                  <span className="pointer-events-none absolute -right-10 -bottom-10 size-32 rounded-full bg-primary/5 blur-2xl transition-colors duration-300 group-hover:bg-primary/15" />

                  <span className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-primary-10 transition-colors duration-300 group-hover:bg-primary">
                    <Mark
                      name={reason.icon}
                      className="size-5 text-primary-dark transition-colors duration-300 group-hover:text-white"
                    />
                  </span>
                  <p className="text-[15px] leading-[1.3] font-semibold tracking-[-0.02em] text-ink">
                    {reason.title}
                  </p>
                  <p className="text-[13px] leading-[1.6] tracking-[-0.02em] text-ink-70">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* the one plan, spelled out on the dark panel */}
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
                  One plan, everything included
                </span>

                <h2 className="max-w-[720px] text-center text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-white md:text-[36px]">
                  No tiers. No gates.{" "}
                  <span className="bg-gradient-to-r from-[#C084FC] to-primary bg-clip-text text-transparent md:whitespace-nowrap">
                    Nothing held back.
                  </span>
                </h2>

                <div className="mx-auto grid w-full max-w-[720px] gap-x-10 gap-y-3.5 sm:grid-cols-2">
                  {PLAN_INCLUDES.map((item, i) => (
                    <Reveal
                      key={item}
                      variant="up"
                      distance={20}
                      delay={i * 60}
                      className="flex items-start gap-2.5 text-[14px] leading-[1.6] tracking-[-0.02em] text-zinc-400"
                    >
                      <Mark
                        name="check"
                        className="mt-1 size-4 shrink-0 text-[#C084FC]"
                      />
                      {item}
                    </Reveal>
                  ))}
                </div>

                <Reveal variant="up" distance={20} delay={300}>
                  <PillButton href="/pricing" className="w-[212px]">
                    See Pricing
                  </PillButton>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </section>

        {/* switching, on the soft band as an open timeline */}
        <section className="w-full bg-[linear-gradient(180deg,rgba(140,0,255,0.05)_0%,rgba(140,0,255,0)_75%)]">
          <div className="mx-auto flex w-full max-w-[500px] flex-col gap-10 px-5 py-10 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:py-14">
            <Reveal
              variant="up"
              distance={30}
              className="flex flex-col items-center gap-3 text-center"
            >
              <span className="text-[12px] font-semibold tracking-[0.14em] text-primary-dark uppercase">
                Making the switch
              </span>
              <h2 className="max-w-[560px] text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-ink md:text-[36px]">
                From stitched stack to{" "}
                <span className={GRADIENT_TEXT_CLASSES}>live in one workspace</span>
              </h2>
            </Reveal>

            <div className="flex flex-col gap-14 md:flex-row md:gap-10">
              {SWITCH_STEPS.map((step, i) => {
                const last = i === SWITCH_STEPS.length - 1;
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
                href="/about"
                className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-primary-dark transition-colors hover:text-primary"
              >
                Meet the team behind it
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
