"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpRightIcon,
  BizvoraLogoIcon,
  ChevronDownIcon,
  Mark,
  MenuIcon,
} from "@/components/icons";
import { DemoPillButton } from "@/components/demo-trigger";
import { NAV_LINKS } from "@/lib/bizvora";
import { appBaseUrl } from "@/lib/site";
import type { NavGroup, NavLink } from "@/types/content";
import { cn } from "@/lib/utils";
import { MobileDrawer } from "./mobile-drawer";
import { ITEM_META, hasChildren } from "./nav-meta";

/** Hover pill: rgba(171,255,89,.1) capsule behind the label. */
function NavItem({ link }: { link: NavLink }) {
  return (
    // -mx-[26px] cancels the pill's own padding so the resting layout is pure
    // text at a 32px gap; the pill only shows on hover.
    <Link
      href={link.href}
      className="group relative -mx-[26px] flex h-10 items-center rounded-[64px] px-[26px] py-[7px] transition-colors duration-200 hover:bg-primary-10"
    >
      <span className="text-[16px] leading-[1.6] font-normal tracking-[-0.04em] whitespace-nowrap text-ink-70 capitalize transition-colors duration-200 group-hover:text-ink">
        {link.label}
      </span>
    </Link>
  );
}

function PagesMenu({ group }: { group: NavGroup }) {
  const rich = group.children.filter((c) => ITEM_META[c.href]);
  const footers = group.children.filter(
    (c) => !ITEM_META[c.href] && c.label.toLowerCase().startsWith("all "),
  );
  const plain = group.children.filter(
    (c) => !ITEM_META[c.href] && !c.label.toLowerCase().startsWith("all "),
  );

  return (
    <div className="group relative">
      <button
        type="button"
        aria-haspopup="true"
        className="-mx-4 flex h-10 items-center gap-1.5 rounded-[64px] px-4 py-[7px] transition-colors duration-200 group-hover:bg-primary-10 group-focus-within:bg-primary-10"
      >
        <span className="text-[16px] leading-[1.6] font-normal tracking-[-0.04em] whitespace-nowrap text-ink-70 capitalize transition-colors duration-200 group-hover:text-ink">
          {group.label}
        </span>
        <ChevronDownIcon className="h-[5px] w-2 text-ink-70 transition-transform duration-200 group-hover:rotate-180" />
      </button>

      {/* Frosted white card: fades in and rises 4px on open.
          focus-within keeps the links tabbable: `invisible` removes them
          from the tab order, so hover-only would strand keyboard users. */}
      <div
        className={cn(
          "invisible absolute top-full left-1/2 z-[11] w-max -translate-x-1/2 translate-y-1 pt-3 opacity-0",
          "transition-[opacity,visibility,transform] duration-200",
          "group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
          "group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100",
        )}
      >
        <div className="overflow-hidden rounded-[16px] bg-white/80 ring-1 ring-line shadow-[0_20px_45px_rgba(14,20,8,0.12)] backdrop-blur-xl">
          {rich.length > 0 && (
            <div className="grid grid-cols-2 gap-1 p-2">
              {rich.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="group/item flex items-start gap-3 rounded-[12px] p-3 transition-colors duration-150 hover:bg-primary-10"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-tile text-primary-dark transition-colors duration-150 group-hover/item:bg-primary group-hover/item:text-white">
                    <Mark name={ITEM_META[child.href].icon} className="size-[18px]" />
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="text-[14px] leading-[1.4] font-medium whitespace-nowrap text-ink">
                      {child.label}
                    </span>
                    <span className="text-[12px] leading-[1.4] font-normal whitespace-nowrap text-ink-50">
                      {ITEM_META[child.href].blurb}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          )}

          {plain.length > 0 && (
            <div className="flex min-w-[220px] flex-col gap-0.5 p-2">
              {plain.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="rounded-[10px] px-3 py-2.5 text-[14px] leading-[1.4] font-medium whitespace-nowrap text-ink transition-colors duration-150 hover:bg-primary-10"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}

          {footers.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="group/all flex items-center justify-between gap-6 border-t border-line bg-surface-muted px-5 py-3 text-[13px] leading-[1.4] font-medium text-ink transition-colors duration-150 hover:bg-primary-10"
            >
              {child.label}
              <ArrowUpRightIcon className="size-3 text-primary-dark transition-transform duration-150 group-hover/all:translate-x-0.5 group-hover/all:-translate-y-0.5" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-10 flex justify-center px-5 py-4 lg:py-6">
      {/* Frosted pill bar so the nav stays legible over every section.
          The glass lives on its own layer: backdrop-filter on the nav itself
          would become the dropdown's backdrop root and break the panel's blur. */}
      <nav className="relative isolate flex w-full max-w-[1055px] items-center justify-between py-2 pr-2 pl-5 lg:pl-6">
        <span
          aria-hidden
          className="absolute inset-0 -z-10 rounded-full bg-white/75 ring-1 ring-line/80 shadow-[0_8px_30px_rgba(14,20,8,0.06)] backdrop-blur-xl"
        />
        <Link href="/" className="flex items-center gap-2">
          <BizvoraLogoIcon className="size-6 shrink-0" />
          <span className="text-[20px] leading-6 font-extrabold text-ink capitalize">
            BizvoraOne
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) =>
            hasChildren(link) ? (
              <PagesMenu key={link.label} group={link} />
            ) : (
              <NavItem key={link.label} link={link} />
            ),
          )}
        </div>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={appBaseUrl()}
            className="text-[14px] leading-[1.6] font-medium text-ink underline decoration-ink/30 underline-offset-4 transition-colors hover:text-primary-dark hover:decoration-primary/50"
          >
            Login
          </a>
          <DemoPillButton variant="gradient" size="sm" className="w-[165px]">
            Request a Demo
          </DemoPillButton>
        </div>

        <button
          type="button"
          aria-label="Open navigation"
          aria-haspopup="dialog"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="flex size-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-primary-10 lg:hidden"
        >
          <MenuIcon className="size-6" />
        </button>
      </nav>

      {/* Portalled sidebar: the header is its own stacking context, so the
          drawer has to live on <body> to cover the page. */}
      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
