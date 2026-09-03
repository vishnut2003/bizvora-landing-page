import type { Metadata } from "next";
import Link from "next/link";
import { BasicLayout } from "@/layout/basic-layout";
import { ChevronDownIcon, Mark } from "@/components/icons";
import { TradesTicker } from "@/components/trades-ticker";
import { Reveal } from "@/components/reveal";
import { MODULES, PLAN, PLAN_INCLUDES, PRICING_FAQS } from "@/lib/bizvora";
import { CtaPanel } from "@/app/modules/_components/cta-panel";
import { CARD_CLASSES, JUMP_CHIP_CLASSES } from "@/app/modules/_components/shared";
import { PlanCard } from "./_components/plan-card";

export const metadata: Metadata = {
  title: "Pricing | BizvoraOne",
  description:
    "₹199 per user per month, GST included — every module, every dashboard, the AI voice agent. One plan, no tiers, 14 days free.",
};

const GRADIENT_TEXT_CLASSES =
  "bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent";

const HERO_CHIPS = [
  `${PLAN.trialDays} days free`,
  "No tiers",
  "Cancel any month",
];

/** What the one bill replaces. Categories, not invented competitor prices. */
const REPLACES = [
  "A CRM subscription",
  "A proposal tool",
  "A quoting spreadsheet",
  "Accounting software",
  "A project tracker",
  "An HR & payroll tool",
  "A voice-AI vendor",
];

export default function PricingPage() {
  return (
    <BasicLayout>
      <main className="flex w-full flex-1 flex-col items-center overflow-x-clip">
        {/* hero: the number is the headline */}
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
                <span className="font-medium text-primary-dark">Pricing</span>
              </nav>
            </Reveal>

            <Reveal variant="up" distance={30} delay={80} as="h1">
              <span className="block text-[30px] leading-[1.12] font-medium tracking-[-0.04em] text-ink md:text-[44px] lg:text-[54px]">
                One plan.{" "}
                <span className={`${GRADIENT_TEXT_CLASSES} whitespace-nowrap`}>
                  ₹199 a user.
                </span>
              </span>
            </Reveal>

            <Reveal variant="up" distance={30} delay={160}>
              <p className="max-w-[560px] text-[16px] leading-[1.6] tracking-[-0.02em] text-ink-70">
                Every module, every dashboard, the AI voice agent — for everyone
                on your team. GST included, and the price on this page is the
                price.
              </p>
            </Reveal>

            <Reveal variant="up" distance={30} delay={240}>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {HERO_CHIPS.map((chip) => (
                  <span key={chip} className={JUMP_CHIP_CLASSES}>
                    <Mark name="check" className="size-3.5 text-primary-dark" />
                    {chip}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* picks the hero gradient up where it ends and fades it out */}
        <TradesTicker className="bg-[linear-gradient(180deg,rgba(140,0,255,0.35)_0%,rgba(140,0,255,0)_100%)] pt-4 pb-10 lg:pb-14" />

        {/* the price, and what it comes to for your team */}
        <section className="mx-auto flex w-full max-w-[500px] flex-col items-center px-5 pb-10 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:pb-14">
          <Reveal variant="up" distance={30} className="flex w-full justify-center">
            <PlanCard />
          </Reveal>
        </section>

        {/* everything included */}
        <section
          id="included"
          className="mx-auto w-full max-w-[500px] scroll-mt-[110px] px-5 py-10 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:scroll-mt-[130px] lg:py-14"
        >
          <Reveal variant="up" distance={30} className="flex flex-col items-center gap-4 text-center">
            <span className="text-[12px] font-semibold tracking-[0.14em] text-primary-dark uppercase">
              Everything included
            </span>
            <h2 className="max-w-[560px] text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-ink md:text-[36px]">
              At every seat. Not a higher tier.
            </h2>
          </Reveal>

          <ul className="mx-auto mt-10 grid w-full max-w-[860px] list-none grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
            {PLAN_INCLUDES.map((item, i) => (
              <Reveal key={item} variant="up" distance={20} delay={i * 50} as="li">
                <span className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-10">
                    <Mark name="check" className="size-3 text-primary-dark" />
                  </span>
                  <span className="text-[14px] leading-[1.6] tracking-[-0.02em] text-ink-70 lg:text-[15px]">
                    {item}
                  </span>
                </span>
              </Reveal>
            ))}
          </ul>

          {/* the seven modules, each one already paid for */}
          <Reveal variant="up" distance={30} className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {MODULES.map((module) => (
              <Link
                key={module.slug}
                href={`/modules/${module.slug}`}
                className="group/mod flex items-center gap-2.5 rounded-[32px] border border-ink/10 bg-white px-4 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_16px_32px_-24px_rgba(69,6,147,0.35)]"
              >
                <span className="flex size-7 items-center justify-center rounded-[9px] bg-primary-10 transition-colors duration-200 group-hover/mod:bg-primary">
                  <Mark
                    name={module.icon}
                    className="size-4 text-primary-dark transition-colors duration-200 group-hover/mod:text-white"
                  />
                </span>
                <span className="text-[13px] leading-[1.4] font-medium text-ink">
                  {module.name}
                </span>
              </Link>
            ))}
          </Reveal>
        </section>

        {/* one bill instead of seven */}
        <section className="w-full bg-[linear-gradient(180deg,rgba(140,0,255,0.05)_0%,rgba(140,0,255,0)_75%)]">
          <div className="mx-auto w-full max-w-[500px] px-5 py-10 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:py-14">
            <div className="lg:grid lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
              <Reveal variant="up" distance={30} className="flex flex-col gap-4">
                <span className="text-[12px] font-semibold tracking-[0.14em] text-primary-dark uppercase">
                  One bill
                </span>
                <h2 className="text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-ink md:text-[36px]">
                  One subscription instead of seven.
                </h2>
                <p className="max-w-[440px] text-[15px] leading-[1.6] tracking-[-0.02em] text-ink-70">
                  Five subscriptions, five logins, five places data goes stale —
                  that is the alternative most teams are living with. ₹199 a seat
                  replaces the lot, and everything talks to everything else.
                </p>
              </Reveal>

              <Reveal
                variant="up"
                distance={30}
                delay={80}
                className={`${CARD_CLASSES} mt-8 p-6 lg:mt-0 lg:p-8`}
              >
                <span className="text-[12px] font-semibold tracking-[0.14em] text-ink-50 uppercase">
                  What the one bill covers
                </span>
                <ul className="mt-4 flex list-none flex-col gap-3">
                  {REPLACES.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-10">
                        <Mark name="check" className="size-3 text-primary-dark" />
                      </span>
                      <span className="text-[14px] leading-[1.6] tracking-[-0.02em] text-ink-70">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* the plan questions */}
        <section className="mx-auto w-full max-w-[500px] px-5 py-10 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:py-14">
          <Reveal variant="up" distance={30} className="flex flex-col items-center gap-4 text-center">
            <span className="text-[12px] font-semibold tracking-[0.14em] text-primary-dark uppercase">
              Plan questions
            </span>
            <h2 className="max-w-[560px] text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-ink md:text-[36px]">
              Asked and answered, with the number in the open.
            </h2>
          </Reveal>

          <div className="mx-auto mt-10 flex w-full max-w-[860px] flex-col gap-3">
            {PRICING_FAQS.map((faq, i) => (
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
        </section>

        <CtaPanel />
      </main>
    </BasicLayout>
  );
}
