import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface PillButtonProps {
  href: string;
  children: string;
  /** "gradient" = green→cyan; "dark" = solid #0e1408 with green label. */
  variant?: "gradient" | "dark";
  /** Nav uses the compact 42px height; body CTAs use 58px. */
  size?: "sm" | "md";
  className?: string;
}

/**
 * The site's single button shape: 40px radius, 16px/20px padding, and an "↗"
 * that slides in on hover while the gap tightens from 8px to 5px.
 */
export function PillButton({
  href,
  children,
  variant = "gradient",
  size = "md",
  className,
}: PillButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center rounded-[40px] px-5 py-4 transition-all duration-200",
        "text-[14px] leading-[1.6] whitespace-nowrap",
        size === "sm" ? "h-[42px]" : "h-[58px]",
        variant === "gradient"
          ? "bg-[linear-gradient(125deg,rgb(171,255,89)_9%,rgb(108,211,255)_92%)] font-medium text-ink"
          : "bg-ink font-normal text-primary",
        className,
      )}
    >
      {children}
      <ArrowUpRightIcon
        className={cn(
          "size-3 shrink-0 overflow-hidden transition-all duration-200",
          "w-0 opacity-0 group-hover:ml-[5px] group-hover:w-3 group-hover:opacity-100",
        )}
      />
    </Link>
  );
}
