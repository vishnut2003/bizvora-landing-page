"use client";

import Link from "next/link";
import { useState } from "react";
import { BizvoraLogoIcon, ChevronDownIcon, MenuIcon } from "@/components/icons";
import { PillButton } from "@/components/pill-button";
import { NAV_LINKS } from "@/lib/bizvora";
import type { NavGroup, NavLink } from "@/types/content";
import { cn } from "@/lib/utils";

const hasChildren = (link: NavLink | NavGroup): link is NavGroup =>
  "children" in link;

/** Hover pill: rgba(171,255,89,.1) capsule with a 4px #61ab19 dot either side. */
function NavItem({ link }: { link: NavLink }) {
  return (
    // -mx-6.5 cancels the pill's own padding so the resting layout is pure
    // text at a 32px gap, exactly like the target; the pill only shows on hover.
    <Link
      href={link.href}
      className="group relative -mx-[26px] flex h-10 items-center rounded-[64px] px-[26px] py-[7px] transition-colors duration-200 hover:bg-primary-10"
    >
      <span className="absolute left-4 size-1 rounded-full bg-primary-dark opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      <span className="text-[16px] leading-[1.6] font-normal tracking-[-0.04em] whitespace-nowrap text-ink-70 capitalize transition-colors duration-200 group-hover:text-ink">
        {link.label}
      </span>
      <span className="absolute right-4 size-1 rounded-full bg-primary-dark opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
    </Link>
  );
}

function PagesMenu({ group }: { group: NavGroup }) {
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

      {/* #000, radius 10, shadow 0 10px 20px rgba(0,0,0,.05). Width follows the
          longest label now that the children are real, differently-named routes. */}
      <div
        className={cn(
          "invisible absolute top-full left-1/2 z-[11] w-max min-w-[200px] -translate-x-1/2 pt-3 opacity-0",
          "transition-[opacity,visibility] duration-200",
          // focus-within keeps the links tabbable: `invisible` removes them
          // from the tab order, so hover-only would strand keyboard users.
          "group-hover:visible group-hover:opacity-100",
          "group-focus-within:visible group-focus-within:opacity-100",
        )}
      >
        <div className="rounded-[10px] bg-black px-5 py-3 shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col gap-2.5">
            {group.children.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                className="text-[16px] leading-[1.6] font-medium whitespace-nowrap text-white transition-opacity duration-150 hover:opacity-70"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-10 flex justify-center py-5 lg:py-10">
      <nav className="flex w-full max-w-[1055px] items-center justify-between px-5 py-[15px] lg:px-0 lg:py-0">
        <Link href="/" className="flex items-center gap-2">
          <BizvoraLogoIcon className="size-8 shrink-0" />
          <span className="text-[20px] leading-[1.4] font-medium text-ink capitalize">
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

        <PillButton
          href="/demo"
          variant="dark"
          size="sm"
          className="hidden w-[165px] lg:inline-flex"
        >
          Request a Demo
        </PillButton>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full text-ink lg:hidden"
        >
          <MenuIcon className="size-6" />
        </button>
      </nav>

      {open && (
        <div className="absolute top-full right-5 left-5 max-h-[calc(100dvh-7rem)] overflow-y-auto rounded-[16px] bg-black p-6 shadow-[0_10px_20px_rgba(0,0,0,0.05)] lg:hidden">
          <div className="flex flex-col gap-4">
            {/* Groups render their children indented: on mobile there is no
                hover, so a flat list would strand every sub-page. */}
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="flex flex-col gap-3">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[16px] leading-[1.6] font-medium text-white capitalize"
                >
                  {link.label}
                </Link>
                {hasChildren(link) && (
                  <div className="flex flex-col gap-2.5 border-l border-white/20 pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="text-[15px] leading-[1.4] font-normal text-white/70 transition-colors hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <PillButton
              href="/demo"
              variant="gradient"
              size="sm"
              className="mt-2 self-start"
            >
              Request a Demo
            </PillButton>
          </div>
        </div>
      )}
    </header>
  );
}
