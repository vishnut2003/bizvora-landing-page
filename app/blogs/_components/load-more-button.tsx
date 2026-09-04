import { ArrowUpRightIcon } from "@/components/icons";
import { PILL_ARROW_CLASSES, pillClasses } from "@/components/pill-styles";

/** The site's pill, as a button (pillClasses is JSX-free for exactly this). */
export function LoadMoreButton({
  pending,
  onClick,
}: {
  pending: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={pending}
      aria-busy={pending}
      className={pillClasses(
        "gradient",
        "md",
        "min-w-[212px] hover:shadow-[0_16px_32px_-16px_rgba(140,0,255,0.6)] disabled:cursor-wait disabled:opacity-70 disabled:hover:shadow-none",
      )}
    >
      {pending ? "Loading…" : "Load more posts"}
      <ArrowUpRightIcon className={PILL_ARROW_CLASSES} />
    </button>
  );
}
