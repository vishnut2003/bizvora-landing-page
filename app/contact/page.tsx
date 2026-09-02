import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { BasicLayout } from "@/layout/basic-layout";
import { ArrowUpRightIcon, Mark, type MarkName } from "@/components/icons";
import { TradesTicker } from "@/components/trades-ticker";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "./_components/contact-form";

export const metadata: Metadata = {
  title: "Contact | BizvoraOne",
  description:
    "Book a live BizvoraOne demo — bring your toughest workflow and we run it end to end on the actual product. Or reach the Web Spider Solutions team by email.",
};

const CHANNELS: {
  title: string;
  description: string;
  icon: MarkName;
  href: string;
  linkLabel: string;
  external?: boolean;
}[] = [
  {
    title: "Book a live demo",
    description:
      "The fastest way to evaluate BizvoraOne: bring your toughest workflow and we run it end to end, live, on the actual product.",
    icon: "phone",
    href: "#contact-form",
    linkLabel: "Fill the form above",
  },
  {
    title: "Email the team",
    description:
      "Questions that don't need a call — partnerships, press, or anything else. We reply from the same inbox that builds the product.",
    icon: "mail",
    href: "mailto:hello@webspidersolutions.com",
    linkLabel: "hello@webspidersolutions.com",
  },
  {
    title: "Already a customer?",
    description:
      "Your workspace is waiting where you left it — the pipeline, the vouchers and the payslips, behind your own login.",
    icon: "laptop",
    href: "https://app.bizvora.com",
    linkLabel: "Log in to BizvoraOne",
    external: true,
  },
];

/** What happens after the form goes in, drawn as the open timeline. */
const NEXT_STEPS = [
  {
    title: "We call you back",
    description:
      "A real person from the team rings within business hours to understand what you run and what's hurting — no scripts, no qualification maze.",
  },
  {
    title: "You see it live",
    description:
      "A demo on the actual product, driven by your own use case: your lead flow, your quoting, your books. Bring your hardest question.",
  },
  {
    title: "You start your trial",
    description:
      "One plan at ₹199 a seat, everything included — you knew that before you called. Fourteen days free, then the whole team goes live.",
  },
];

const GRADIENT_TEXT_CLASSES =
  "bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent";

export default function ContactPage() {
  return (
    <BasicLayout>
      <main className="flex w-full flex-1 flex-col items-center overflow-x-clip">
        {/* hero: copy left, the lead form right */}
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
                  <span className="font-medium text-primary-dark">Contact</span>
                </nav>
              </Reveal>

              <Reveal variant="up" distance={30} delay={80} as="h1">
                <span className="block text-[30px] leading-[1.12] font-medium tracking-[-0.04em] text-ink md:text-[44px] lg:text-[54px]">
                  Let&apos;s talk about{" "}
                  <span className={`${GRADIENT_TEXT_CLASSES} whitespace-nowrap`}>
                    your business
                  </span>
                </span>
              </Reveal>

              <Reveal variant="up" distance={30} delay={160}>
                <p className="max-w-[520px] text-[16px] leading-[1.6] tracking-[-0.02em] text-ink-70">
                  Leave your details and we&apos;ll call you back to book a
                  live demo — all seven modules and the AI voice agent, run on
                  your own use case. The price is already public: ₹199 a seat.
                </p>
              </Reveal>

              <Reveal variant="up" distance={30} delay={240}>
                <div className="flex flex-col gap-2.5">
                  <Link
                    href="mailto:hello@webspidersolutions.com"
                    className="group inline-flex items-center gap-2.5 text-[14px] font-medium text-ink transition-colors hover:text-primary-dark"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-primary-10">
                      <Mark name="mail" className="size-4 text-primary-dark" />
                    </span>
                    hello@webspidersolutions.com
                  </Link>
                  <span className="inline-flex items-center gap-2.5 text-[14px] text-ink-70">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-primary-10">
                      <Mark name="building" className="size-4 text-primary-dark" />
                    </span>
                    Web Spider Solutions · Hosted in Mumbai, data stays in India
                  </span>
                </div>
              </Reveal>
            </div>

            {/* the form, where the glass panel usually sits */}
            <Reveal
              variant="up"
              distance={40}
              delay={200}
              className="relative mx-auto w-full max-w-[500px]"
            >
              <div id="contact-form" className="relative scroll-mt-[110px] lg:scroll-mt-[130px]">
                <ContactForm />

                {/* floating satellites (after the card; no z-index so the
                    fixed header still wins) */}
                <div className="nf-float absolute -top-7 -right-4 hidden items-center gap-3 rounded-[14px] border border-ink/10 bg-white/90 px-4 py-3 shadow-[0_16px_40px_rgba(69,6,147,0.14)] backdrop-blur-md md:flex lg:-right-10">
                  <span className="flex size-8 items-center justify-center rounded-full bg-emerald-100">
                    <Mark name="check" className="size-4 text-emerald-600" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[13px] leading-[1.3] font-semibold text-ink">
                      No obligation
                    </span>
                    <span className="text-[11px] leading-[1.3] text-ink-50">
                      A demo, not a hard sell
                    </span>
                  </div>
                </div>

                <div
                  className="nf-float absolute top-24 -left-6 hidden size-12 items-center justify-center rounded-[14px] border border-ink/10 bg-white/90 shadow-[0_12px_28px_rgba(69,6,147,0.12)] backdrop-blur-md md:flex"
                  style={{ "--nf-delay": "600ms" } as CSSProperties}
                >
                  <Mark name="mail" className="size-5 text-primary-dark" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* picks the hero gradient up exactly where it ends (rgba .35) and
            fades it out, so hero and ticker read as one continuous band */}
        <TradesTicker className="bg-[linear-gradient(180deg,rgba(140,0,255,0.35)_0%,rgba(140,0,255,0)_100%)] pt-4 pb-10 lg:pb-14" />

        {/* the three ways in */}
        <section className="mx-auto flex w-full max-w-[500px] flex-col gap-10 px-5 py-10 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:py-14">
          <Reveal
            variant="up"
            distance={30}
            className="flex flex-col items-center gap-3 text-center"
          >
            <span className="text-[12px] font-semibold tracking-[0.14em] text-primary-dark uppercase">
              Ways to reach us
            </span>
            <h2 className="max-w-[560px] text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-ink md:text-[36px]">
              Pick whatever&apos;s{" "}
              <span className={GRADIENT_TEXT_CLASSES}>easiest for you</span>
            </h2>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {CHANNELS.map((channel, i) => (
              <Reveal
                key={channel.title}
                variant="up"
                distance={30}
                delay={(i % 3) * 60}
                className="h-full"
              >
                <div className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-[16px] border border-primary/10 bg-gradient-to-b from-[#FBF9FF] to-[#F3EDFC] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_24px_48px_-24px_rgba(69,6,147,0.28)]">
                  <span className="pointer-events-none absolute -right-10 -bottom-10 size-32 rounded-full bg-primary/5 blur-2xl transition-colors duration-300 group-hover:bg-primary/15" />

                  <span className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-primary-10 transition-colors duration-300 group-hover:bg-primary">
                    <Mark
                      name={channel.icon}
                      className="size-5 text-primary-dark transition-colors duration-300 group-hover:text-white"
                    />
                  </span>
                  <p className="text-[15px] leading-[1.3] font-semibold tracking-[-0.02em] text-ink">
                    {channel.title}
                  </p>
                  <p className="text-[13px] leading-[1.6] tracking-[-0.02em] text-ink-70">
                    {channel.description}
                  </p>
                  <Link
                    href={channel.href}
                    {...(channel.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group/more relative mt-auto inline-flex items-center gap-1.5 text-[13px] font-medium text-primary-dark transition-colors hover:text-primary"
                  >
                    {channel.linkLabel}
                    <ArrowUpRightIcon className="size-3 transition-transform duration-200 group-hover/more:translate-x-0.5 group-hover/more:-translate-y-0.5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* what happens next, on the soft band as an open timeline */}
        <section className="w-full bg-[linear-gradient(180deg,rgba(140,0,255,0.05)_0%,rgba(140,0,255,0)_75%)]">
          <div className="mx-auto flex w-full max-w-[500px] flex-col gap-10 px-5 py-10 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:py-14">
            <Reveal
              variant="up"
              distance={30}
              className="flex flex-col items-center gap-3 text-center"
            >
              <span className="text-[12px] font-semibold tracking-[0.14em] text-primary-dark uppercase">
                What happens next
              </span>
              <h2 className="max-w-[560px] text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-ink md:text-[36px]">
                From form-fill to{" "}
                <span className={GRADIENT_TEXT_CLASSES}>a live workspace</span>
              </h2>
            </Reveal>

            <div className="flex flex-col gap-14 md:flex-row md:gap-10">
              {NEXT_STEPS.map((step, i) => {
                const last = i === NEXT_STEPS.length - 1;
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
                href="/faqs"
                className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-primary-dark transition-colors hover:text-primary"
              >
                Questions first? Read the FAQs
                <ArrowUpRightIcon className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
    </BasicLayout>
  );
}
