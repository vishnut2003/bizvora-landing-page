import type { Metadata } from "next";
import Link from "next/link";
import { BasicLayout } from "@/layout/basic-layout";
import { CtaPair, DEMO_CTA } from "@/components/cta-pair";
import { Reveal } from "@/components/reveal";
import { CtaPanel } from "@/app/modules/_components/cta-panel";
import { CARD_CLASSES } from "@/app/modules/_components/shared";
import { getPosts, type PostPage } from "@/lib/wp";
import { PostGrid } from "./_components/post-grid";

export const metadata: Metadata = {
  title: "Blog | BizvoraOne",
  description:
    "Practical playbooks for running an Indian business — sales follow-ups, quotations, collections, projects and payroll — from the team building BizvoraOne.",
};

// The list is always fresh: its fetch is no-store, so the route is dynamic.
export const dynamic = "force-dynamic";

const SECTION_CLASSES =
  "mx-auto w-full max-w-[500px] px-5 py-10 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:py-14";

const GRADIENT_TEXT_CLASSES =
  "bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent";

export default async function BlogsPage() {
  let initial: PostPage = { posts: [], total: 0, totalPages: 0 };
  let failed = false;
  try {
    initial = await getPosts({ page: 1 });
  } catch {
    failed = true;
  }

  return (
    <BasicLayout>
      <main className="flex w-full flex-1 flex-col items-center overflow-x-clip">
        {/* hero */}
        <div className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#fff_18%,rgba(140,0,255,0.35)_100%)] px-5 pt-[120px] pb-12 md:px-10 lg:px-16 lg:pt-[150px] lg:pb-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(140,0,255,0.16)_1.5px,transparent_1.5px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_35%,black,transparent)]" />
          <div className="pointer-events-none absolute top-[10%] left-[4%] size-[280px] rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute top-[20%] right-[2%] size-[320px] rounded-full bg-violet-400/20 blur-3xl" />

          <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-start gap-6">
            <Reveal variant="up" distance={20}>
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-[13px] tracking-[-0.02em]"
              >
                <Link href="/" className="text-ink-50 transition-colors hover:text-ink">
                  Home
                </Link>
                <span className="text-ink-50">/</span>
                <span className="font-medium text-primary-dark">Blog</span>
              </nav>
            </Reveal>

            <Reveal variant="up" distance={20} delay={60}>
              <span className="text-[12px] font-semibold tracking-[0.14em] text-primary-dark uppercase">
                From the Bizvora team
              </span>
            </Reveal>

            <Reveal variant="up" distance={30} delay={120} as="h1">
              <span className="block max-w-[820px] text-[30px] leading-[1.12] font-medium tracking-[-0.04em] text-ink md:text-[44px] lg:text-[54px]">
                Playbooks for running the business,{" "}
                <span className={GRADIENT_TEXT_CLASSES}>from enquiry to payslip</span>
              </span>
            </Reveal>

            <Reveal variant="up" distance={30} delay={200}>
              <p className="max-w-[560px] text-[16px] leading-[1.6] tracking-[-0.02em] text-ink-70">
                Sales follow-ups, quotations, collections, projects and payroll —
                how growing Indian teams actually run them, written by the people
                building BizvoraOne.
              </p>
            </Reveal>

            <Reveal variant="up" distance={30} delay={280} className="w-full">
              <CtaPair
                primary={DEMO_CTA}
                secondary={{ label: "Talk to us", href: "/contact" }}
              />
            </Reveal>
          </div>
        </div>

        {/* the posts */}
        <section className={SECTION_CLASSES}>
          {failed ? (
            <div className={`${CARD_CLASSES} flex flex-col items-center gap-4 px-6 py-14 text-center`}>
              <p className="text-[18px] leading-[1.3] font-semibold tracking-[-0.02em] text-ink">
                We couldn&apos;t load the blog right now.
              </p>
              <p className="max-w-[420px] text-[14px] leading-[1.6] text-ink-70">
                Our content server didn&apos;t answer. Give it a moment and try
                again, or talk to us directly.
              </p>
              <Link
                href="/blogs"
                className="text-[14px] font-medium text-primary-dark underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary"
              >
                Try again
              </Link>
            </div>
          ) : initial.total === 0 ? (
            <div className={`${CARD_CLASSES} flex flex-col items-center gap-2 px-6 py-14 text-center`}>
              <p className="text-[18px] leading-[1.3] font-semibold tracking-[-0.02em] text-ink">
                No posts yet.
              </p>
              <p className="text-[14px] leading-[1.6] text-ink-70">
                The first ones are on their way.
              </p>
            </div>
          ) : (
            <PostGrid initialPosts={initial.posts} total={initial.total} />
          )}
        </section>

        <CtaPanel />
      </main>
    </BasicLayout>
  );
}
