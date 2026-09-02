import { cn } from "@/lib/utils";

/**
 * The site's single button shape, as classes rather than markup: 40px radius,
 * 16px/20px padding, and an "↗" that slides in on hover while the gap tightens
 * from 8px to 5px.
 *
 * Kept free of JSX and `next/link` so the server <PillButton> and the client
 * demo triggers can share one recipe without either pulling in the other.
 */
export function pillClasses(
  variant: "gradient" | "dark" = "gradient",
  size: "sm" | "md" = "md",
  className?: string,
) {
  return cn(
    "group inline-flex items-center justify-center rounded-[40px] px-5 py-4 transition-all duration-200",
    "text-[14px] leading-[1.6] whitespace-nowrap",
    // Nav uses the compact 42px height; body CTAs use 58px.
    size === "sm" ? "h-[42px]" : "h-[58px]",
    variant === "gradient"
      ? "bg-[linear-gradient(125deg,rgb(140,0,255)_9%,rgb(69,6,147)_92%)] font-medium text-white"
      : "bg-ink font-normal text-white",
    className,
  );
}

/** The trailing arrow: zero-width until hover, then 12px with a 5px gap. */
export const PILL_ARROW_CLASSES = cn(
  "size-3 shrink-0 overflow-hidden transition-all duration-200",
  "w-0 opacity-0 group-hover:ml-[5px] group-hover:w-3 group-hover:opacity-100",
);
