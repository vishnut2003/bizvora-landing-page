"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import {
  ArrowUpRightIcon,
  BizvoraLogoIcon,
  ChevronDownIcon,
  CloseIcon,
  Mark,
} from "@/components/icons";
import { DemoPillButton } from "@/components/demo-trigger";
import { NAV_LINKS } from "@/lib/bizvora";
import type { NavGroup, NavLink } from "@/types/content";
import { cn } from "@/lib/utils";
import { ITEM_META, hasChildren, isUnder } from "./nav-meta";

/** Must outlast the .mn-panel exit transition in globals.css. */
const EXIT_MS = 320;

const FOCUSABLE =
  'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])';

/** The group that owns the current page opens by default; the rest stay shut. */
const initialGroup = (pathname: string) =>
  NAV_LINKS.find(
    (link) =>
      hasChildren(link) &&
      link.children.some((child) => isUnder(pathname, child.href)),
  )?.label ?? null;

function ChildLink({
  child,
  active,
  onNavigate,
}: {
  child: NavLink;
  active: boolean;
  onNavigate: () => void;
}) {
  const meta = ITEM_META[child.href];
  const isAll = !meta && child.label.toLowerCase().startsWith("all ");

  if (isAll) {
    return (
      <Link
        href={child.href}
        onClick={onNavigate}
        className="group/all mt-1 flex items-center justify-between rounded-[12px] bg-tile/70 px-3.5 py-2.5 text-[13px] leading-[1.4] font-medium text-primary-dark transition-colors hover:bg-tile"
      >
        {child.label}
        <ArrowUpRightIcon className="size-3 transition-transform duration-150 group-hover/all:translate-x-0.5 group-hover/all:-translate-y-0.5" />
      </Link>
    );
  }

  if (!meta) {
    return (
      <Link
        href={child.href}
        onClick={onNavigate}
        aria-current={active ? "page" : undefined}
        className={cn(
          "flex items-center justify-between rounded-[12px] px-3.5 py-2.5 text-[14.5px] leading-[1.4] font-medium transition-colors hover:bg-white",
          active ? "bg-white text-primary-dark" : "text-ink",
        )}
      >
        {child.label}
        <ChevronDownIcon className="h-[5px] w-2 -rotate-90 text-ink-50" />
      </Link>
    );
  }

  return (
    <Link
      href={child.href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group/item flex items-center gap-3 rounded-[12px] px-2.5 py-2 transition-colors hover:bg-white",
        active && "bg-white",
      )}
    >
      <span
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-[10px] ring-1 transition-colors duration-150",
          active
            ? "bg-primary text-white ring-primary"
            : "bg-white text-primary-dark ring-line group-hover/item:bg-primary group-hover/item:text-white group-hover/item:ring-primary",
        )}
      >
        <Mark name={meta.icon} className="size-[18px]" />
      </span>
      <span className="flex min-w-0 flex-col gap-0.5">
        <span
          className={cn(
            "truncate text-[14.5px] leading-[1.3] font-medium",
            active ? "text-primary-dark" : "text-ink",
          )}
        >
          {child.label}
        </span>
        <span className="truncate text-[12px] leading-[1.3] text-ink-50">
          {meta.blurb}
        </span>
      </span>
    </Link>
  );
}

function GroupRow({
  group,
  expanded,
  pathname,
  onToggle,
  onNavigate,
}: {
  group: NavGroup;
  expanded: boolean;
  pathname: string;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  const active = group.children.some((c) => isUnder(pathname, c.href));
  return (
    <>
      <button
        type="button"
        aria-expanded={expanded}
        onClick={onToggle}
        className={cn(
          "flex w-full items-center justify-between rounded-[14px] px-3.5 py-3 text-left transition-colors duration-150",
          expanded ? "bg-primary-10" : "hover:bg-primary-10/60",
        )}
      >
        <span className="flex items-center gap-2.5">
          <span
            className={cn(
              "text-[17px] leading-[1.4] font-medium tracking-[-0.02em]",
              active ? "text-primary-dark" : "text-ink",
            )}
          >
            {group.label}
          </span>
          {active && (
            <span aria-hidden className="size-1.5 rounded-full bg-primary" />
          )}
        </span>
        <span
          className={cn(
            "flex size-7 items-center justify-center rounded-full bg-ink/5 text-ink-70 transition-transform duration-300",
            expanded && "rotate-180 bg-white text-primary-dark",
          )}
        >
          <ChevronDownIcon className="h-[5px] w-2" />
        </span>
      </button>

      {/* grid-rows 0fr→1fr animates height without measuring it */}
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="mt-1 mb-1 flex flex-col gap-0.5 rounded-[18px] bg-surface-muted p-1.5">
            {group.children.map((child) => (
              <ChildLink
                key={child.href}
                child={child}
                active={isUnder(pathname, child.href)}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * The phone/tablet navigation: a right-hand drawer, portalled to <body> so it
 * escapes the header's z-10 stacking context, sitting just below the demo
 * modal (z-60) which it can open.
 */
export function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const [present, setPresent] = useState(false); // in the DOM
  const [visible, setVisible] = useState(false); // transitioned in
  const [expanded, setExpanded] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  // Latest onClose for the pathname/keyboard effects, which must not re-run
  // just because the header re-rendered and handed us a new closure.
  const closeRef = useRef(onClose);
  useEffect(() => {
    closeRef.current = onClose;
  });

  // Same mount-in-the-same-commit pattern as the demo modal.
  const [prevOpen, setPrevOpen] = useState(open);
  if (open !== prevOpen) {
    setPrevOpen(open);
    if (open) {
      setPresent(true);
      setExpanded(initialGroup(pathname));
    } else {
      setVisible(false);
    }
  }

  useEffect(() => {
    if (!open) return;
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, [open]);

  useEffect(() => {
    if (open || !present) return;
    const timer = window.setTimeout(() => setPresent(false), EXIT_MS);
    return () => window.clearTimeout(timer);
  }, [open, present]);

  // Back/forward navigation while the drawer is open should dismiss it too.
  useEffect(() => {
    closeRef.current();
  }, [pathname]);

  // Hold the page still behind the drawer.
  useEffect(() => {
    if (!present) return;
    const { body, documentElement } = document;
    const prevOverflow = body.style.overflow;
    const prevPadding = body.style.paddingRight;
    const gap = window.innerWidth - documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (gap > 0) body.style.paddingRight = `${gap}px`;
    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPadding;
    };
  }, [present]);

  // Escape closes; Tab cycles inside the drawer.
  useEffect(() => {
    if (!present) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeRef.current();
        return;
      }
      if (e.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const items = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((el) => el.offsetParent !== null);
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [present]);

  useEffect(() => {
    if (visible) panelRef.current?.focus({ preventScroll: true });
  }, [visible]);

  if (!present) return null;

  return createPortal(
    <div className="fixed inset-0 z-[50] lg:hidden">
      <div
        aria-hidden
        onClick={onClose}
        data-visible={visible || undefined}
        className="mn-backdrop absolute inset-0 bg-ink/45 backdrop-blur-[2px]"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        tabIndex={-1}
        data-visible={visible || undefined}
        className="mn-panel absolute inset-y-0 right-0 flex w-[min(88vw,380px)] flex-col overflow-hidden rounded-l-[28px] bg-white shadow-[-24px_0_80px_-24px_rgba(14,20,8,0.45)] outline-none"
      >
        {/* brand glow + dot grid, echoing the demo modal's left panel */}
        <div className="pointer-events-none absolute -top-28 -right-20 size-[300px] rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(rgba(23,23,23,0.08)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_80%_90%_at_100%_0%,black,transparent)]" />

        <div className="relative flex shrink-0 items-center justify-between px-5 pt-5 pb-3">
          <Link href="/" onClick={onClose} className="flex items-center gap-2">
            <BizvoraLogoIcon className="size-6 shrink-0" />
            <span className="text-[20px] leading-6 font-extrabold text-ink capitalize">
              BizvoraOne
            </span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex size-10 items-center justify-center rounded-full bg-white text-ink-70 ring-1 ring-line transition-colors hover:bg-ink/5 hover:text-ink"
          >
            <CloseIcon className="size-4" />
          </button>
        </div>

        <nav
          aria-label="Mobile"
          // overflow-x-hidden: the rows slide in from 18px right, and an auto
          // x-overflow would flash a horizontal scrollbar for that instant.
          className="relative flex-1 overflow-x-hidden overflow-y-auto px-3 pt-2 pb-4 [scrollbar-width:thin]"
        >
          <ul className="flex list-none flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.label}
                className="mn-item"
                style={{ "--mn-i": i } as CSSProperties}
              >
                {hasChildren(link) ? (
                  <GroupRow
                    group={link}
                    expanded={expanded === link.label}
                    pathname={pathname}
                    onToggle={() =>
                      setExpanded((cur) => (cur === link.label ? null : link.label))
                    }
                    onNavigate={onClose}
                  />
                ) : (
                  <Link
                    href={link.href}
                    onClick={onClose}
                    aria-current={isUnder(pathname, link.href) ? "page" : undefined}
                    className="group/top flex items-center justify-between rounded-[14px] px-3.5 py-3 transition-colors duration-150 hover:bg-primary-10/60"
                  >
                    <span
                      className={cn(
                        "text-[17px] leading-[1.4] font-medium tracking-[-0.02em]",
                        isUnder(pathname, link.href) ? "text-primary-dark" : "text-ink",
                      )}
                    >
                      {link.label}
                    </span>
                    <ArrowUpRightIcon className="size-3 text-ink-50 transition-transform duration-150 group-hover/top:translate-x-0.5 group-hover/top:-translate-y-0.5" />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div
          className="mn-item relative flex shrink-0 flex-col gap-2.5 border-t border-line bg-surface-muted/70 px-5 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))]"
          style={{ "--mn-i": NAV_LINKS.length } as CSSProperties}
        >
          <DemoPillButton
            variant="gradient"
            size="sm"
            className="w-full hover:shadow-[0_16px_32px_-16px_rgba(140,0,255,0.6)]"
            onOpen={onClose}
          >
            Request a Demo
          </DemoPillButton>
          <a
            href="https://app.bizvora.com"
            onClick={onClose}
            className="flex h-[42px] items-center justify-center gap-1.5 rounded-[40px] bg-white text-[14px] leading-[1.6] font-medium text-ink ring-1 ring-line transition-colors hover:bg-tile hover:text-primary-dark"
          >
            Login to BizvoraOne
            <ArrowUpRightIcon className="size-3" />
          </a>
          <p className="mt-1 flex items-center justify-center gap-2 text-center text-[11px] font-semibold tracking-[0.12em] text-ink-50 uppercase">
            <Mark name="building" className="size-3.5 shrink-0 text-primary-dark" />
            Made in India · Hosted in Mumbai
          </p>
        </div>
      </div>
    </div>,
    document.body,
  );
}
