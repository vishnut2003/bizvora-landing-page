import { CalendarDays, Clock } from "lucide-react";
import { Mark } from "@/components/icons";
import { JUMP_CHIP_CLASSES } from "@/app/modules/_components/shared";
import type { BlogPost } from "@/lib/wp";

/** Date, reading time, author — and the post's tags as chips. */
export function PostMeta({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13.5px] tracking-[-0.02em] text-ink-70">
        <span className="inline-flex items-center gap-2">
          <CalendarDays className="size-4 text-primary-dark" aria-hidden />
          <time dateTime={post.date}>{post.dateLabel}</time>
        </span>
        {post.readingMinutes !== null && (
          <span className="inline-flex items-center gap-2">
            <Clock className="size-4 text-primary-dark" aria-hidden />
            {post.readingMinutes} min read
          </span>
        )}
        <span className="inline-flex items-center gap-2">
          <Mark name="user" className="size-4 text-primary-dark" />
          {post.author}
        </span>
      </div>
      {post.tags.length > 0 && (
        <ul className="flex list-none flex-wrap gap-2">
          {post.tags.map((tag) => (
            <li key={tag.id}>
              <span className={JUMP_CHIP_CLASSES}>{tag.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
