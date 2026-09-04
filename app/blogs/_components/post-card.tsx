import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import type { BlogSummary } from "@/lib/wp";
import { FeaturedImage } from "./featured-image";

/**
 * The same gradient-card recipe as CARD_CLASSES in app/modules/_components/
 * shared.ts, copied rather than imported: that module also exports the SVG
 * art map, and this card is rendered from the client grid, so importing it
 * would drag every art component into the browser bundle.
 */
const CARD =
  "group flex h-full flex-col overflow-hidden rounded-[16px] border border-primary/10 bg-gradient-to-b from-[#FBF9FF] to-[#F3EDFC] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_24px_48px_-24px_rgba(69,6,147,0.28)]";

export function PostCard({ post, priority = false }: { post: BlogSummary; priority?: boolean }) {
  return (
    <Link href={`/blogs/${post.slug}`} className={CARD}>
      <FeaturedImage
        src={post.image}
        alt={post.title}
        sizes="(min-width: 1024px) 370px, (min-width: 768px) 50vw, 100vw"
        priority={priority}
        className="aspect-video border-b border-primary/10"
        imageClassName="transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-[12px] leading-[1.5] font-medium tracking-[0.02em] text-ink-50">
          <time dateTime={post.date}>{post.dateLabel}</time>
          {post.readingMinutes !== null && <> · {post.readingMinutes} min read</>}
        </p>
        <h3 className="line-clamp-2 text-[16.5px] leading-[1.35] font-semibold tracking-[-0.02em] text-ink transition-colors group-hover:text-primary-dark">
          {post.title}
        </h3>
        <p className="line-clamp-3 text-[13.5px] leading-[1.6] tracking-[-0.02em] text-ink-70">
          {post.excerpt}
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-[13px] font-medium text-primary-dark">
          Read post
          <ArrowUpRightIcon className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
