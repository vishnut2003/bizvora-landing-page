import type { Metadata } from "next";
import Link from "next/link";
import { BasicLayout } from "@/layout/basic-layout";
import { Reveal } from "@/components/reveal";
import { ROUTE_GROUPS } from "@/lib/routes";
import { getPostStubs } from "@/lib/wp";

export const metadata: Metadata = {
  title: "Sitemap | BizvoraOne",
  description:
    "Every page on BizvoraOne — modules, industries, company pages, legal and the blog — on one page.",
  alternates: { canonical: "/sitemap.html" },
};

const LINK_CLASSES =
  "font-medium text-ink underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary-dark";

const MACHINE_FILES = [
  { label: "sitemap.xml", href: "/sitemap.xml" },
  { label: "robots.txt", href: "/robots.txt" },
  { label: "llms.txt", href: "/llms.txt" },
];

/**
 * The human-readable sitemap, on the same plain template as /terms and
 * /privacy: a slim gradient hero, then one list per route group. Blog posts
 * come from WordPress with the hourly ISR the blog itself uses.
 */
export default async function SitemapPage() {
  const posts = await getPostStubs();

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
                <span className="font-medium text-primary-dark">Sitemap</span>
              </nav>
            </Reveal>

            <Reveal variant="up" distance={30} delay={80} as="h1">
              <span className="block text-[28px] leading-[1.15] font-medium tracking-[-0.04em] text-ink md:text-[38px]">
                Sitemap
              </span>
            </Reveal>

            <Reveal variant="up" distance={30} delay={160}>
              <p className="text-[15px] leading-[1.7] tracking-[-0.02em] text-ink-70">
                Every page on BizvoraOne in one place — the product and its modules, the
                industries it serves, the company pages, the legal pages and every post on the
                blog.
              </p>
            </Reveal>
          </div>
        </div>

        {/* the link lists */}
        <section className="mx-auto w-full max-w-[760px] px-5 py-10 md:px-10 lg:py-14">
          <div className="flex flex-col gap-10">
            {ROUTE_GROUPS.map((group, i) => (
              <Reveal
                key={group.heading}
                variant="up"
                distance={30}
                delay={(i % 2) * 60}
                as="article"
              >
                <h2 className="text-[18px] leading-[1.3] font-semibold tracking-[-0.02em] text-ink md:text-[20px]">
                  {group.heading}
                </h2>
                <ul className="mt-3 flex flex-col gap-2 text-[14.5px] leading-[1.8] tracking-[-0.02em] text-ink-70">
                  {group.routes.map((route) => (
                    <li key={route.path}>
                      <Link href={route.path} className={LINK_CLASSES}>
                        {route.label}
                      </Link>
                      <span className="text-ink-50"> — {route.description}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}

            <Reveal variant="up" distance={30} as="article">
              <h2 className="text-[18px] leading-[1.3] font-semibold tracking-[-0.02em] text-ink md:text-[20px]">
                Blog
              </h2>
              {posts.length ? (
                <ul className="mt-3 flex flex-col gap-2 text-[14.5px] leading-[1.8] tracking-[-0.02em] text-ink-70">
                  {posts.map((post) => (
                    <li key={post.slug}>
                      <Link href={`/blogs/${post.slug}`} className={LINK_CLASSES}>
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
              <p className="mt-3 text-[14.5px] leading-[1.8] tracking-[-0.02em] text-ink-70">
                <Link href="/blogs" className={LINK_CLASSES}>
                  View all posts
                </Link>
              </p>
            </Reveal>

            <Reveal variant="up" distance={20}>
              <p className="border-t border-ink/10 pt-6 text-[13.5px] leading-[1.7] text-ink-50">
                For crawlers:{" "}
                {MACHINE_FILES.map((file, i) => (
                  <span key={file.href}>
                    {i > 0 ? " · " : null}
                    <a href={file.href} className={LINK_CLASSES}>
                      {file.label}
                    </a>
                  </span>
                ))}
                .
              </p>
            </Reveal>
          </div>
        </section>
      </main>
    </BasicLayout>
  );
}
