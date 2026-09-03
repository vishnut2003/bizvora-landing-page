import type { Metadata } from "next";
import Link from "next/link";
import { DemoLink } from "@/components/demo-trigger";
import { BasicLayout } from "@/layout/basic-layout";
import { ArrowUpRightIcon, ChevronDownIcon, Mark, type MarkName } from "@/components/icons";
import { TradesTicker } from "@/components/trades-ticker";
import { Reveal } from "@/components/reveal";
import { FAQS, PRICING_FAQS } from "@/lib/bizvora";
import { CtaPanel } from "@/app/modules/_components/cta-panel";
import { JUMP_CHIP_CLASSES } from "@/app/modules/_components/shared";

export const metadata: Metadata = {
  title: "FAQs | BizvoraOne",
  description:
    "Everything people ask before switching to BizvoraOne — the one plan, the AI voice agent and proposals, where your data lives, and how fast a team goes live.",
};

/** Canonical answers live in lib/bizvora FAQS; resolve them by question. */
const canonical = (question: string) => {
  const faq = FAQS.find((f) => f.question === question);
  if (!faq) throw new Error(`FAQ not found: ${question}`);
  return faq;
};

interface FaqGroup {
  slug: string;
  label: string;
  icon: MarkName;
  blurb: string;
  items: { question: string; answer: string }[];
}

const FAQ_GROUPS: FaqGroup[] = [
  {
    slug: "plan-pricing",
    label: "Plan & pricing",
    icon: "quote",
    blurb: "One plan, one public price — here's how it works.",
    // The canonical set, so /pricing and this page can never disagree.
    items: PRICING_FAQS,
  },
  {
    slug: "ai-features",
    label: "AI features",
    icon: "phone",
    blurb: "What the AI does, and where your team stays in charge.",
    items: [
      canonical("Does the AI agent tell leads it’s an AI?"),
      {
        question: "How do AI proposals work?",
        answer:
          "The AI drafts each proposal from the lead's own context — who they are, what they asked for — so the first draft already sounds like you. Your team reviews and edits every line, then exports a branded PDF. Nothing reaches a client without sign-off.",
      },
      canonical("What does “coming soon” mean?"),
    ],
  },
  {
    slug: "data-security",
    label: "Data & security",
    icon: "building",
    blurb: "Where your records live and who gets to see them.",
    items: [
      canonical("Where is our data stored?"),
      {
        question: "Who on my team sees what?",
        answer:
          "Access is role-scoped across 8 dashboards. Sales sees the pipeline, accounts sees vouchers, employees see only their own tasks and payslips, and management sees all of it. Nobody wades through screens that aren't theirs.",
      },
      canonical("Is there a mobile app?"),
    ],
  },
  {
    slug: "getting-started",
    label: "Getting started",
    icon: "pulse",
    blurb: "From first demo to the whole team working in one place.",
    items: [
      canonical("How do leads get in?"),
      {
        question: "Will my accountant need retraining?",
        answer:
          "No — that's the point. Vouchers use the Tally-style debit-credit-balance layout your accountant already knows, with amounts in lakhs and crores. Day-one familiarity, zero migration anxiety.",
      },
      {
        question: "How fast can we go live?",
        answer:
          "It starts with a live demo — bring your toughest workflow and we run it end to end. Then we set up your workspace: lead sources connected, roles assigned, opening balances in. Most teams are working in one place within days, not months.",
      },
    ],
  },
];

const GRADIENT_TEXT_CLASSES =
  "bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent";

export default function FaqsPage() {
  const totalCount = FAQ_GROUPS.reduce((sum, group) => sum + group.items.length, 0);
  return (
    <BasicLayout>
      <main className="flex w-full flex-1 flex-col items-center overflow-x-clip">
        {/* hero: centered — no side panel, the questions are the page */}
        <div className="relative w-full bg-[linear-gradient(180deg,#fff_18%,rgba(140,0,255,0.35)_100%)] px-5 pt-[120px] pb-10 md:px-10 lg:px-16 lg:pt-[150px] lg:pb-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(140,0,255,0.16)_1.5px,transparent_1.5px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_35%,black,transparent)]" />
          <div className="pointer-events-none absolute top-[10%] left-[4%] size-[280px] rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute top-[20%] right-[2%] size-[320px] rounded-full bg-violet-400/20 blur-3xl" />

          <div className="relative mx-auto flex w-full max-w-[760px] flex-col items-center gap-6 text-center">
            <Reveal variant="up" distance={20}>
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-[13px] tracking-[-0.02em]"
              >
                <Link href="/" className="text-ink-50 transition-colors hover:text-ink">
                  Home
                </Link>
                <span className="text-ink-50">/</span>
                <span className="font-medium text-primary-dark">FAQs</span>
              </nav>
            </Reveal>

            <Reveal variant="up" distance={30} delay={80} as="h1">
              <span className="block text-[30px] leading-[1.12] font-medium tracking-[-0.04em] text-ink md:text-[44px] lg:text-[54px]">
                Questions,{" "}
                <span className={`${GRADIENT_TEXT_CLASSES} whitespace-nowrap`}>
                  answered straight
                </span>
              </span>
            </Reveal>

            <Reveal variant="up" distance={30} delay={160}>
              <p className="max-w-[560px] text-[16px] leading-[1.6] tracking-[-0.02em] text-ink-70">
                The {totalCount} things people actually ask before moving their
                business onto BizvoraOne — no marketing answers, no fine print
                hiding behind a demo call.
              </p>
            </Reveal>

            {/* category jumps, front and center */}
            <Reveal variant="up" distance={30} delay={240}>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {FAQ_GROUPS.map((group) => (
                  <Link key={group.slug} href={`#${group.slug}`} className={JUMP_CHIP_CLASSES}>
                    <Mark name={group.icon} className="size-3.5 text-primary-dark" />
                    {group.label}
                    <span className="rounded-full bg-primary-10 px-1.5 text-[11px] font-semibold text-primary-dark">
                      {group.items.length}
                    </span>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* picks the hero gradient up exactly where it ends (rgba .35) and
            fades it out, so hero and ticker read as one continuous band */}
        <TradesTicker className="bg-[linear-gradient(180deg,rgba(140,0,255,0.35)_0%,rgba(140,0,255,0)_100%)] pt-4 pb-10 lg:pb-14" />

        {/* the questions: sticky category rail left, grouped accordions right */}
        <section className="mx-auto w-full max-w-[500px] px-5 py-10 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:py-14">
          <div className="lg:grid lg:grid-cols-[260px_1fr] lg:items-start lg:gap-14">
            {/* rail (desktop only — the hero chips cover mobile) */}
            <Reveal
              variant="up"
              distance={20}
              className="sticky top-[130px] hidden lg:flex lg:flex-col lg:gap-2"
            >
              <span className="mb-2 text-[12px] font-semibold tracking-[0.14em] text-primary-dark uppercase">
                Browse by topic
              </span>
              {FAQ_GROUPS.map((group) => (
                <Link
                  key={group.slug}
                  href={`#${group.slug}`}
                  className="group/rail flex items-center gap-3 rounded-[12px] border border-transparent px-3 py-2.5 transition-colors duration-200 hover:border-ink/10 hover:bg-white"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-primary-10 transition-colors duration-300 group-hover/rail:bg-primary">
                    <Mark
                      name={group.icon}
                      className="size-4 text-primary-dark transition-colors duration-300 group-hover/rail:text-white"
                    />
                  </span>
                  <span className="flex-1 text-[14px] leading-[1.3] font-medium text-ink">
                    {group.label}
                  </span>
                  <span className="text-[12px] font-semibold text-ink-50">
                    {group.items.length}
                  </span>
                </Link>
              ))}

              {/* the rail's nudge */}
              <div className="mt-4 rounded-[16px] border border-ink/10 bg-white p-4">
                <p className="text-[13px] leading-[1.6] tracking-[-0.02em] text-ink-70">
                  Can&apos;t find your question?
                </p>
                <DemoLink
                  className="group/ask mt-2 inline-flex items-center gap-1.5 text-[13px] font-medium text-primary-dark transition-colors hover:text-primary"
                >
                  Ask us on a demo
                  <ArrowUpRightIcon className="size-3 transition-transform duration-200 group-hover/ask:translate-x-0.5 group-hover/ask:-translate-y-0.5" />
                </DemoLink>
              </div>
            </Reveal>

            {/* grouped accordions */}
            <div className="flex flex-col gap-12 lg:gap-14">
              {FAQ_GROUPS.map((group, groupIndex) => (
                <div
                  key={group.slug}
                  id={group.slug}
                  className="relative scroll-mt-[110px] lg:scroll-mt-[130px]"
                >
                  {/* ghost group number */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-8 -left-2 text-[88px] leading-none font-semibold tracking-[-0.04em] text-primary/5 select-none"
                  >
                    {`0${groupIndex + 1}`}
                  </span>

                  <Reveal variant="up" distance={30} className="relative flex items-center gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-[12px] bg-[linear-gradient(125deg,rgb(140,0,255)_9%,rgb(69,6,147)_92%)]">
                      <Mark name={group.icon} className="size-5 text-white" />
                    </span>
                    <div className="flex flex-col">
                      <h2 className="text-[20px] leading-[1.2] font-medium tracking-[-0.04em] text-ink md:text-[24px]">
                        {group.label}
                      </h2>
                      <p className="text-[13px] leading-[1.5] text-ink-50">{group.blurb}</p>
                    </div>
                  </Reveal>

                  <div className="relative mt-6 flex flex-col gap-3">
                    {group.items.map((faq, i) => (
                      <Reveal key={faq.question} variant="up" distance={30} delay={i * 60}>
                        <details className="group rounded-[16px] border border-ink/10 bg-white px-6 py-5 transition-all duration-200 open:border-primary/25 open:shadow-[0_16px_32px_-24px_rgba(69,6,147,0.35)] hover:border-primary/25">
                          <summary className="flex cursor-pointer list-none items-center gap-4 [&::-webkit-details-marker]:hidden">
                            <span className="flex-1 text-[15px] leading-[1.4] font-medium text-ink lg:text-[17px]">
                              {faq.question}
                            </span>
                            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-10 transition-all duration-200 group-open:rotate-180 group-open:bg-primary">
                              <ChevronDownIcon className="h-[6px] w-2.5 text-primary-dark transition-colors duration-200 group-open:text-white" />
                            </span>
                          </summary>
                          <p className="pt-4 text-[14px] leading-[1.7] font-normal tracking-[-0.02em] text-ink-70 lg:text-[15px]">
                            {faq.answer}
                          </p>
                        </details>
                      </Reveal>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaPanel />
      </main>
    </BasicLayout>
  );
}
