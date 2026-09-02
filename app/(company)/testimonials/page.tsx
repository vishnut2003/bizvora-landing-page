import type { Metadata } from "next";
import { Fragment, type CSSProperties } from "react";
import Link from "next/link";
import { BasicLayout } from "@/layout/basic-layout";
import { ArrowUpRightIcon, Mark, type MarkName } from "@/components/icons";
import { DemoPillButton } from "@/components/demo-trigger";
import { TradesTicker } from "@/components/trades-ticker";
import { Reveal } from "@/components/reveal";
import { INDUSTRIES } from "@/lib/bizvora";
import { CtaPanel } from "@/app/modules/_components/cta-panel";
import { CARD_CLASSES, GHOST_BUTTON_CLASSES } from "@/app/modules/_components/shared";

export const metadata: Metadata = {
  title: "Testimonials | BizvoraOne",
  description:
    "What teams across manufacturing, real estate, agencies, consulting, education and healthcare say about running their whole business on BizvoraOne.",
};

/**
 * SAMPLE CONTENT — every quote below is invented and every author is a
 * fictional person, written to hold the layout. Replace with real customer
 * testimonials (with their permission) before this page goes live.
 */
interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  icon: MarkName;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The AI called a lead back while I was still reading the enquiry email. By the time sales picked it up, it was a conversation, not a cold row in a spreadsheet.",
    name: "Rohit Deshmukh",
    role: "Sales Head",
    company: "Manufacturing · Pune",
    icon: "factory",
  },
  {
    quote:
      "Our accountant opened the vouchers screen and just started working. Zero retraining — it reads exactly like the Tally layout she's used for fifteen years.",
    name: "Sandeep Aggarwal",
    role: "Director",
    company: "Trading & Distribution · Delhi",
    icon: "truck",
  },
  {
    quote:
      "Proposals used to eat my weekends. Now the AI drafts from the lead's own context and I edit for ten minutes. Clients think we hired a copywriter.",
    name: "Karthik Prasad",
    role: "Founder",
    company: "IT Agency · Bengaluru",
    icon: "laptop",
  },
  {
    quote:
      "Possession dates used to be tribal knowledge. Now every delivery date across every project sits in one view, with a review gate before each handover.",
    name: "Nikhil Shah",
    role: "Managing Partner",
    company: "Real Estate · Mumbai",
    icon: "building",
  },
  {
    quote:
      "Fee recovery was our leak. The ageing view plus follow-ups meant we chased outstanding fees before they went stale — collections are up without hiring anyone.",
    name: "Meera Sharma",
    role: "Administrator",
    company: "Education · Jaipur",
    icon: "cap",
  },
  {
    quote:
      "One login replaced five subscriptions. The team stopped copy-pasting between tools, and I stopped paying for four things we barely used.",
    name: "Ananya Reddy",
    role: "Principal Consultant",
    company: "Consulting · Hyderabad",
    icon: "brief",
  },
];

/**
 * The featured story on the dark panel; its quote is inline in the JSX so the
 * gradient accent can sit mid-sentence. Placeholder — replace before launch.
 */
const FEATURED = {
  name: "Venkatesh Iyer",
  role: "Managing Director",
  company: "Service & Consulting · Chennai",
  metrics: [
    { value: "5 tools", label: "replaced by one workspace" },
    { value: "Seconds", label: "to the first lead callback" },
    { value: "0", label: "spreadsheet exports last quarter" },
  ],
};

const GRADIENT_TEXT_CLASSES =
  "bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent";

export default function TestimonialsPage() {
  return (
    <BasicLayout>
      <main className="flex w-full flex-1 flex-col items-center overflow-x-clip">
        {/* hero: copy left, featured quote panel right */}
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
                  <span className="font-medium text-primary-dark">Testimonials</span>
                </nav>
              </Reveal>

              <Reveal variant="up" distance={30} delay={80} as="h1">
                <span className="block text-[30px] leading-[1.12] font-medium tracking-[-0.04em] text-ink md:text-[44px] lg:text-[54px]">
                  Teams that made{" "}
                  <span className={`${GRADIENT_TEXT_CLASSES} whitespace-nowrap`}>
                    the switch
                  </span>
                </span>
              </Reveal>

              <Reveal variant="up" distance={30} delay={160}>
                <p className="max-w-[520px] text-[16px] leading-[1.6] tracking-[-0.02em] text-ink-70">
                  Factories, agencies, schools, firms — different trades, the
                  same story: five tools became one workspace, and the whole
                  business got easier to see.
                </p>
              </Reveal>

              <Reveal variant="up" distance={30} delay={240}>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <DemoPillButton className="w-[212px]">
                    Request a Demo
                  </DemoPillButton>
                  <Link href="/use-cases" className={GHOST_BUTTON_CLASSES}>
                    See the Workflows
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* featured quote panel */}
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
                      <Mark name="quote" className="size-5 text-white" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[15px] leading-[1.4] font-semibold text-ink">
                        In their words
                      </span>
                      <span className="text-[12px] leading-[1.5] text-ink-50">
                        Teams across 8 industries
                      </span>
                    </div>
                  </div>

                  <blockquote className="mt-5 rounded-[12px] border border-ink/10 bg-white p-4">
                    <p className="text-[14px] leading-[1.7] tracking-[-0.02em] text-ink-70">
                      &ldquo;{TESTIMONIALS[0].quote}&rdquo;
                    </p>
                    <footer className="mt-3 flex items-center gap-3 border-t border-ink/10 pt-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-primary-10">
                        <Mark
                          name={TESTIMONIALS[0].icon}
                          className="size-4 text-primary-dark"
                        />
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[12.5px] leading-[1.3] font-medium text-ink">
                          {TESTIMONIALS[0].name} · {TESTIMONIALS[0].role}
                        </span>
                        <span className="text-[11px] leading-[1.4] text-ink-50">
                          {TESTIMONIALS[0].company}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </div>

                {/* floating satellites (after the panel; no z-index so the
                    fixed header still wins) */}
                <div className="nf-float absolute -top-7 -right-4 hidden items-center gap-3 rounded-[14px] border border-ink/10 bg-white/90 px-4 py-3 shadow-[0_16px_40px_rgba(69,6,147,0.14)] backdrop-blur-md md:flex lg:-right-10">
                  <span className="flex size-8 items-center justify-center rounded-full bg-primary-10">
                    <Mark name="check" className="size-4 text-primary-dark" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[13px] leading-[1.3] font-semibold text-ink">
                      Whole-business switch
                    </span>
                    <span className="text-[11px] leading-[1.3] text-ink-50">
                      Not one team — all of them
                    </span>
                  </div>
                </div>

                <div
                  className="nf-float absolute -bottom-9 -left-4 hidden w-[190px] flex-col gap-2.5 rounded-[14px] border border-ink/10 bg-white/90 p-4 shadow-[0_16px_40px_rgba(69,6,147,0.14)] backdrop-blur-md md:flex lg:-left-12"
                  style={{ "--nf-delay": "1200ms" } as CSSProperties}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-semibold text-ink">Tools replaced</span>
                    <span className="text-[12px] font-semibold text-primary">5 → 1</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-primary-10">
                    <div className="h-full w-full rounded-full bg-[linear-gradient(125deg,rgb(140,0,255)_9%,rgb(69,6,147)_92%)]" />
                  </div>
                  <span className="text-[11px] leading-[1.4] text-ink-50">
                    The story every quote tells
                  </span>
                </div>

                <div
                  className="nf-float absolute top-16 -left-6 hidden size-12 items-center justify-center rounded-[14px] border border-ink/10 bg-white/90 shadow-[0_12px_28px_rgba(69,6,147,0.12)] backdrop-blur-md md:flex"
                  style={{ "--nf-delay": "600ms" } as CSSProperties}
                >
                  <Mark name="quote" className="size-5 text-primary-dark" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* picks the hero gradient up exactly where it ends (rgba .35) and
            fades it out, so hero and ticker read as one continuous band */}
        <TradesTicker className="bg-[linear-gradient(180deg,rgba(140,0,255,0.35)_0%,rgba(140,0,255,0)_100%)] pt-4 pb-10 lg:pb-14" />

        {/* the quotes grid */}
        <section className="mx-auto flex w-full max-w-[500px] flex-col gap-10 px-5 py-10 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:py-14">
          <Reveal
            variant="up"
            distance={30}
            className="flex flex-col items-center gap-3 text-center"
          >
            <span className="text-[12px] font-semibold tracking-[0.14em] text-primary-dark uppercase">
              In their words
            </span>
            <h2 className="max-w-[560px] text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-ink md:text-[36px]">
              Different trades,{" "}
              <span className={GRADIENT_TEXT_CLASSES}>the same story</span>
            </h2>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial, i) => (
              <Reveal
                key={testimonial.quote}
                variant="up"
                distance={30}
                delay={(i % 3) * 60}
                className="h-full"
              >
                <figure
                  className={`${CARD_CLASSES} relative flex h-full flex-col gap-4 overflow-hidden p-6`}
                >
                  <span className="pointer-events-none absolute -right-10 -bottom-10 size-32 rounded-full bg-primary/5 blur-2xl transition-colors duration-300 group-hover:bg-primary/15" />

                  <Mark name="quote" className="size-6 shrink-0 text-primary/40" />
                  <blockquote className="text-[14px] leading-[1.7] tracking-[-0.02em] text-ink-70">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-auto flex items-center gap-3 border-t border-ink/10 pt-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-primary-10 transition-colors duration-300 group-hover:bg-primary">
                      <Mark
                        name={testimonial.icon}
                        className="size-4.5 text-primary-dark transition-colors duration-300 group-hover:text-white"
                      />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[13px] leading-[1.3] font-semibold text-ink">
                        {testimonial.name} · {testimonial.role}
                      </span>
                      <span className="text-[11.5px] leading-[1.4] text-ink-50">
                        {testimonial.company}
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* the featured story, on the dark panel */}
        <section className="mx-auto w-full max-w-[500px] px-5 py-10 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:py-14">
          <Reveal variant="up" distance={30}>
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-ink px-8 py-10 lg:px-[52px] lg:py-12">
              <div className="pointer-events-none absolute -top-24 left-[10%] size-[300px] rounded-full bg-primary/35 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 right-[8%] size-[300px] rounded-full bg-violet-400/25 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_75%_85%_at_50%_0%,black,transparent)]" />

              <div className="relative flex flex-col items-center gap-8 text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-white/70 uppercase backdrop-blur-sm">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C084FC] opacity-60" />
                    <span className="relative inline-flex size-2 rounded-full bg-[#C084FC]" />
                  </span>
                  Featured story
                </span>

                <blockquote className="max-w-[760px] text-[20px] leading-[1.5] font-medium tracking-[-0.02em] text-white md:text-[26px] md:leading-[1.45]">
                  &ldquo;
                  <span className="bg-gradient-to-r from-[#C084FC] to-primary bg-clip-text text-transparent">
                    We ran the whole quarter through it
                  </span>{" "}
                  — enquiries in, projects delivered, invoices collected,
                  payroll out — and never once exported to a spreadsheet.
                  That&apos;s the first time in eight years of running this
                  firm.&rdquo;
                </blockquote>

                <div className="flex flex-col items-center gap-1">
                  <span className="text-[14px] leading-[1.4] font-semibold text-white">
                    {FEATURED.name} · {FEATURED.role}
                  </span>
                  <span className="text-[12px] leading-[1.4] text-white/60">
                    {FEATURED.company}
                  </span>
                </div>

                <div className="grid w-full max-w-[720px] grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
                  {FEATURED.metrics.map((metric, i) => (
                    <Reveal
                      key={metric.label}
                      variant="up"
                      distance={20}
                      delay={i * 100}
                      className="flex flex-col items-center gap-1.5"
                    >
                      <span className="bg-gradient-to-r from-[#C084FC] to-primary bg-clip-text text-[26px] leading-[1.2] font-semibold tracking-[-0.02em] text-transparent lg:text-[32px]">
                        {metric.value}
                      </span>
                      <span className="max-w-[180px] text-[12px] leading-[1.5] text-white/60">
                        {metric.label}
                      </span>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* the industries these teams come from, on the soft band */}
        <section className="w-full bg-[linear-gradient(180deg,rgba(140,0,255,0.05)_0%,rgba(140,0,255,0)_75%)]">
          <div className="mx-auto flex w-full max-w-[500px] flex-col gap-10 px-5 py-10 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:py-14">
            <Reveal
              variant="up"
              distance={30}
              className="flex flex-col items-center gap-3 text-center"
            >
              <span className="text-[12px] font-semibold tracking-[0.14em] text-primary-dark uppercase">
                8 industries
              </span>
              <h2 className="max-w-[560px] text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-ink md:text-[36px]">
                Whatever you run,{" "}
                <span className={GRADIENT_TEXT_CLASSES}>someone like you runs it here</span>
              </h2>
            </Reveal>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {INDUSTRIES.map((industry, i) => (
                <Fragment key={industry.slug}>
                  {/* balance the strip: 4 + 4 on desktop instead of 6 + 2 */}
                  {i === 4 && <span aria-hidden className="hidden basis-full lg:block" />}
                  <Reveal variant="up" distance={20} delay={i * 60}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="group/chip flex items-center gap-2.5 rounded-[32px] border border-ink/10 bg-white/70 py-2 pr-4 pl-2.5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary-10"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary-10 transition-colors duration-300 group-hover/chip:bg-primary">
                      <Mark
                        name={industry.icon}
                        className="size-3.5 text-primary-dark transition-colors duration-300 group-hover/chip:text-white"
                      />
                    </span>
                    <span className="text-[13px] leading-[1.3] font-medium text-ink">
                      {industry.name}
                    </span>
                  </Link>
                  </Reveal>
                </Fragment>
              ))}
            </div>

            <Reveal variant="up" distance={20} delay={520} className="mx-auto">
              <Link
                href="/industries"
                className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-primary-dark transition-colors hover:text-primary"
              >
                See how it fits your industry
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
