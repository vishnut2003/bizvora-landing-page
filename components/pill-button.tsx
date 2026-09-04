import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRightIcon } from "@/components/icons";
import { PILL_ARROW_CLASSES, pillClasses } from "@/components/pill-styles";

interface PillButtonProps {
  href: string;
  children: ReactNode;
  /** "gradient" = purple→deep purple; "dark" = solid ink with white label. */
  variant?: "gradient" | "dark";
  /** Nav uses the compact 42px height; body CTAs use 58px. */
  size?: "sm" | "md";
  className?: string;
}

/**
 * The site's single button shape, as a link. The classes themselves live in
 * components/pill-styles so the demo triggers can wear the same shape.
 */
export function PillButton({
  href,
  children,
  variant = "gradient",
  size = "md",
  className,
}: PillButtonProps) {
  return (
    <Link href={href} className={pillClasses(variant, size, className)}>
      {children}
      <ArrowUpRightIcon className={PILL_ARROW_CLASSES} />
    </Link>
  );
}
