"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";
import { ArrowUpRightIcon } from "@/components/icons";
import { PILL_ARROW_CLASSES, pillClasses } from "@/components/pill-styles";
import { useDemoModal } from "@/components/demo-modal/context";

/**
 * Every demo CTA on the site opens the modal — but stays a real link to
 * /contact, so it is still crawlable and still works with JavaScript off.
 * A modified click (new tab, middle-click) is left alone.
 */
function useDemoClick(before?: () => void) {
  const { openModal } = useDemoModal();
  return (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    // e.g. the header's mobile drawer, which would otherwise stay open behind.
    before?.();
    openModal();
  };
}

/** The pill CTA, pixel-identical to <PillButton> but opening the modal. */
export function DemoPillButton({
  children,
  variant = "gradient",
  size = "md",
  className,
  onOpen,
}: {
  children: ReactNode;
  variant?: "gradient" | "dark";
  size?: "sm" | "md";
  className?: string;
  /** Runs just before the modal opens — for dismissing whatever contains it. */
  onOpen?: () => void;
}) {
  const onClick = useDemoClick(onOpen);
  return (
    <Link
      href="/contact"
      onClick={onClick}
      className={pillClasses(variant, size, className)}
    >
      {children}
      <ArrowUpRightIcon className={PILL_ARROW_CLASSES} />
    </Link>
  );
}

/** Bare trigger wearing whatever classes the call site already had. */
export function DemoLink({
  children,
  className,
  onOpen,
}: {
  children: ReactNode;
  className?: string;
  /** Runs just before the modal opens — for dismissing whatever contains it. */
  onOpen?: () => void;
}) {
  const onClick = useDemoClick(onOpen);
  return (
    <Link href="/contact" onClick={onClick} className={className}>
      {children}
    </Link>
  );
}
