import Link from "next/link";
import { BasicLayout } from "@/layout/basic-layout";
import { Reveal } from "@/components/reveal";

export interface LegalSection {
  heading: string;
  /** Each string renders as one paragraph; items starting with "- " render as a list. */
  body: string[];
}

/**
 * The deliberately plain template shared by /terms and /privacy: a slim
 * gradient hero, then a single prose column. No panels, tickers or CTAs.
 */
export function LegalPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <BasicLayout>
      <main className="flex w-full flex-1 flex-col items-center overflow-x-clip">
        {/* slim hero band */}
        <div className="relative w-full bg-[linear-gradient(180deg,#fff_18%,rgba(140,0,255,0.18)_100%)] px-5 pt-[120px] pb-10 md:px-10 lg:pt-[150px] lg:pb-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(140,0,255,0.12)_1.5px,transparent_1.5px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_35%,black,transparent)]" />

          <div className="relative mx-auto flex w-full max-w-[760px] flex-col items-start gap-5">
            <Reveal variant="up" distance={20}>
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-[13px] tracking-[-0.02em]"
              >
                <Link href="/" className="text-ink-50 transition-colors hover:text-ink">
                  Home
                </Link>
                <span className="text-ink-50">/</span>
                <span className="font-medium text-primary-dark">{title}</span>
              </nav>
            </Reveal>

            <Reveal variant="up" distance={30} delay={80} as="h1">
              <span className="block text-[28px] leading-[1.15] font-medium tracking-[-0.04em] text-ink md:text-[38px]">
                {title}
              </span>
            </Reveal>

            <Reveal variant="up" distance={30} delay={160}>
              <p className="text-[15px] leading-[1.7] tracking-[-0.02em] text-ink-70">
                {intro}
              </p>
            </Reveal>

            <Reveal variant="up" distance={20} delay={220}>
              <span className="rounded-full border border-ink/10 bg-white/70 px-3.5 py-1.5 text-[12px] font-medium text-ink-50 backdrop-blur-sm">
                Last updated: {updated}
              </span>
            </Reveal>
          </div>
        </div>

        {/* the prose column */}
        <section className="mx-auto w-full max-w-[760px] px-5 py-10 md:px-10 lg:py-14">
          <div className="flex flex-col gap-10">
            {sections.map((section, i) => (
              <Reveal
                key={section.heading}
                variant="up"
                distance={30}
                delay={(i % 2) * 60}
                as="article"
              >
                <h2 className="text-[18px] leading-[1.3] font-semibold tracking-[-0.02em] text-ink md:text-[20px]">
                  {i + 1}. {section.heading}
                </h2>
                <div className="mt-3 flex flex-col gap-3">
                  {section.body.map((paragraph) =>
                    paragraph.startsWith("- ") ? (
                      <ul
                        key={paragraph}
                        className="list-disc pl-5 text-[14.5px] leading-[1.8] tracking-[-0.02em] text-ink-70"
                      >
                        {paragraph
                          .split("\n")
                          .map((item) => item.replace(/^- /, ""))
                          .map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                      </ul>
                    ) : (
                      <p
                        key={paragraph}
                        className="text-[14.5px] leading-[1.8] tracking-[-0.02em] text-ink-70"
                      >
                        {paragraph}
                      </p>
                    ),
                  )}
                </div>
              </Reveal>
            ))}

            <Reveal variant="up" distance={20}>
              <p className="border-t border-ink/10 pt-6 text-[13.5px] leading-[1.7] text-ink-50">
                Questions about this page? Write to{" "}
                <Link
                  href="mailto:hello@webspidersolutions.com"
                  className="font-medium text-ink underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary-dark"
                >
                  hello@webspidersolutions.com
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </section>
      </main>
    </BasicLayout>
  );
}
