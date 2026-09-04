"use client";

import { useState, useTransition } from "react";
import { Reveal } from "@/components/reveal";
import type { BlogSummary } from "@/lib/wp";
import { loadMorePosts } from "../actions";
import { LoadMoreButton } from "./load-more-button";
import { PostCard } from "./post-card";

/**
 * The /blogs grid with its "Load more" state. The server page renders the
 * first batch; each click appends the next page via the Server Action.
 * `total` is refreshed from every response, and appended posts are
 * de-duplicated by id in case a post was published between clicks.
 */
export function PostGrid({
  initialPosts,
  total: initialTotal,
}: {
  initialPosts: BlogSummary[];
  total: number;
}) {
  const [posts, setPosts] = useState(initialPosts);
  const [total, setTotal] = useState(initialTotal);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [pending, startTransition] = useTransition();

  const hasMore = posts.length < total;

  const loadMore = () => {
    if (pending) return;
    const nextPage = page + 1;
    setError(false);
    startTransition(async () => {
      const result = await loadMorePosts(nextPage);
      if (!result.ok) {
        setError(true);
        return;
      }
      const incoming = result.page.posts;
      setPosts((current) => {
        const seen = new Set(current.map((post) => post.id));
        return [...current, ...incoming.filter((post) => !seen.has(post.id))];
      });
      setPage(nextPage);
      // An empty page means the count we held was stale; stop asking.
      setTotal(incoming.length === 0 ? posts.length : result.page.total);
    });
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal
            key={post.id}
            variant="up"
            distance={30}
            delay={(i % 3) * 60}
            className="h-full"
          >
            <PostCard post={post} priority={i < 3} />
          </Reveal>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4">
        <p aria-live="polite" className="text-[13px] tracking-[-0.02em] text-ink-50">
          Showing {posts.length} of {total} {total === 1 ? "post" : "posts"}
        </p>
        {error && (
          <p role="alert" className="text-[13px] tracking-[-0.02em] text-ink-70">
            Couldn&apos;t load more posts. Please try again.
          </p>
        )}
        {hasMore ? (
          <LoadMoreButton pending={pending} onClick={loadMore} />
        ) : (
          <span className="rounded-full border border-ink/10 bg-white/70 px-3.5 py-1.5 text-[12px] font-medium text-ink-50 backdrop-blur-sm">
            You&rsquo;re all caught up
          </span>
        )}
      </div>
    </div>
  );
}
