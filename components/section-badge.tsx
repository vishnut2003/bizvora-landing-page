import { cn } from "@/lib/utils";

/**
 * Small capsule above a section heading ("Features", "Testimonial", "About").
 * 12px/16px padding, 32px radius, 1px green ring, 14px/400 #61ab19 label.
 */
export function SectionBadge({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        // Fixed 33px height — Framer clips the 12px vertical padding.
        "inline-flex h-[33px] items-center justify-center rounded-[32px] px-4",
        "text-[14px] leading-[1.6] font-normal text-primary-dark capitalize",
        "ring-1 ring-[rgba(140,0,255,0.3)] ring-inset",
        className,
      )}
    >
      {children}
    </span>
  );
}
