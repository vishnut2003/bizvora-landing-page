import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BasicLayout } from "@/layout/basic-layout";
import { Reveal } from "@/components/reveal";
import { CtaPanel } from "@/app/modules/_components/cta-panel";
import { JUMP_CHIP_CLASSES } from "@/app/modules/_components/shared";
import { siteOrigin } from "@/lib/site";
import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/wp";
import { ArticleBody } from "../_components/article-body";
import { FeaturedImage } from "../_components/featured-image";
import { PostCard } from "../_components/post-card";
import { PostMeta } from "../_components/post-meta";

/**
 * A single post. ISR: every fetch on this route carries revalidate: 3600, so
 * the page is prerendered for the slugs below, rendered on demand for new
 * ones, and regenerated at most hourly.
 */
export const dynamicParams = true;

export async function generateStaticParams() {
  return (await getAllSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blogs/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post not found | BizvoraOne" };

  const url = `/blogs/${post.slug}`;
  const images = post.image
    ? [{ url: post.image, width: 1024, height: 576, alt: post.title }]
    : undefined;
  const tagNames = post.tags.map((tag) => tag.name);

  return {
    title: `${post.seo.title} | BizvoraOne`,
    description: post.seo.description,
    keywords: tagNames.length > 0 ? tagNames : undefined,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "BizvoraOne",
      title: post.seo.title,
      description: post.seo.description,
      publishedTime: post.seo.publishedTime,
      modifiedTime: post.seo.modifiedTime,
      authors: [post.author],
      tags: tagNames,
      images,
    },
    twitter: {
      card: post.seo.twitterCard === "summary" ? "summary" : "summary_large_image",
      title: post.seo.title,
      description: post.seo.description,
      images: images?.map((image) => image.url),
    },
  };
}

const SECTION_CLASSES =
  "mx-auto w-full max-w-[500px] px-5 py-10 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:py-14";

export default async function BlogPostPage({ params }: PageProps<"/blogs/[slug]">) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(post.id, 3);
  const origin = siteOrigin();
  const eyebrow = post.tags[0]?.name ?? "Blog";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seo.description,
    image: post.image ? [post.image] : undefined,
    datePublished: post.seo.publishedTime,
    dateModified: post.seo.modifiedTime,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "BizvoraOne",
      logo: { "@type": "ImageObject", url: `${origin}/icon.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${origin}/blogs/${post.slug}` },
    keywords: post.tags.map((tag) => tag.name).join(", ") || undefined,
    inLanguage: "en-IN",
  };

  return (
    <BasicLayout>
      <main className="flex w-full flex-1 flex-col items-center overflow-x-clip">
        {/* slim hero */}
        <div className="relative w-full bg-[linear-gradient(180deg,#fff_18%,rgba(140,0,255,0.18)_100%)] px-5 pt-[120px] pb-10 md:px-10 lg:pt-[150px] lg:pb-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(140,0,255,0.12)_1.5px,transparent_1.5px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_35%,black,transparent)]" />

          <div className="relative mx-auto flex w-full max-w-[960px] flex-col items-start gap-5">
            <Reveal variant="up" distance={20}>
              <nav
                aria-label="Breadcrumb"
                className="flex max-w-full items-center gap-2 text-[13px] tracking-[-0.02em]"
              >
                <Link href="/" className="shrink-0 text-ink-50 transition-colors hover:text-ink">
                  Home
                </Link>
                <span className="text-ink-50">/</span>
                <Link href="/blogs" className="shrink-0 text-ink-50 transition-colors hover:text-ink">
                  Blog
                </Link>
                <span className="text-ink-50">/</span>
                <span className="truncate font-medium text-primary-dark">{post.title}</span>
              </nav>
            </Reveal>

            <Reveal variant="up" distance={20} delay={60}>
              <span className="text-[12px] font-semibold tracking-[0.14em] text-primary-dark uppercase">
                {eyebrow}
              </span>
            </Reveal>

            <Reveal variant="up" distance={30} delay={120} as="h1">
              <span className="block text-[28px] leading-[1.15] font-medium tracking-[-0.04em] text-balance text-ink md:text-[40px] lg:text-[48px]">
                {post.title}
              </span>
            </Reveal>

            <Reveal variant="up" distance={20} delay={200}>
              <PostMeta post={post} />
            </Reveal>
          </div>
        </div>

        {/* featured image — the fallback tile keeps the layout stable when WP has none */}
        <div className="mx-auto w-full max-w-[960px] px-5 pt-2 md:px-10">
          <Reveal variant="up" distance={40} delay={120}>
            <FeaturedImage
              src={post.image}
              alt={post.title}
              sizes="(min-width: 1024px) 960px, 100vw"
              priority
              className="aspect-video rounded-[24px] border border-ink/10 shadow-[0_32px_64px_-28px_rgba(69,6,147,0.3)]"
            />
          </Reveal>
        </div>

        {/* the article */}
        <article className="mx-auto w-full max-w-[760px] px-5 py-10 md:px-10 lg:py-14">
          <ArticleBody html={post.html} />

          <footer className="mt-12 flex flex-col gap-5 border-t border-ink/10 pt-6">
            {post.tags.length > 0 && (
              <ul className="flex list-none flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <li key={tag.id}>
                    <span className={JUMP_CHIP_CLASSES}>{tag.name}</span>
                  </li>
                ))}
              </ul>
            )}
            <Link
              href="/blogs"
              className="inline-flex w-fit items-center gap-1.5 text-[14px] font-medium text-primary-dark transition-colors hover:text-primary"
            >
              <span aria-hidden>←</span> All posts
            </Link>
          </footer>
        </article>

        {/* keep reading */}
        {related.length > 0 && (
          <section className="w-full bg-[linear-gradient(180deg,rgba(140,0,255,0.05)_0%,rgba(140,0,255,0)_75%)]">
            <div className={`${SECTION_CLASSES} flex flex-col gap-10`}>
              <Reveal
                variant="up"
                distance={30}
                className="flex flex-col items-center gap-3 text-center"
              >
                <span className="text-[12px] font-semibold tracking-[0.14em] text-primary-dark uppercase">
                  Keep reading
                </span>
                <h2 className="max-w-[560px] text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-ink md:text-[36px]">
                  More from the blog
                </h2>
              </Reveal>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {related.map((item, i) => (
                  <Reveal
                    key={item.id}
                    variant="up"
                    distance={30}
                    delay={i * 60}
                    className="h-full"
                  >
                    <PostCard post={item} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <CtaPanel />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </BasicLayout>
  );
}
