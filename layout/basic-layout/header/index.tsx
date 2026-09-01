"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpRightIcon,
  BizvoraLogoIcon,
  ChevronDownIcon,
  Mark,
  MenuIcon,
  type MarkName,
} from "@/components/icons";
import { PillButton } from "@/components/pill-button";
import { NAV_LINKS } from "@/lib/bizvora";
import type { NavGroup, NavLink } from "@/types/content";
import { cn } from "@/lib/utils";

const hasChildren = (link: NavLink | NavGroup): link is NavGroup =>
  "children" in link;

/**
 * Mega-menu enrichment, keyed by route. Children without an entry render as a
 * plain link list (Company); "All …" links become the panel's footer row.
 */
const ITEM_META: Record<string, { icon: MarkName; blurb: string }> = {
  "/modules/crm": { icon: "crm", blurb: "Customers, leads & 9-stage pipeline" },
  "/modules/ai-proposals": { icon: "doc", blurb: "Drafted by AI, branded PDF output" },
  "/modules/quotations": { icon: "quote", blurb: "Itemized quotes in seconds" },
  "/modules/accounting-recovery": { icon: "ledger", blurb: "Tally-style vouchers & collections" },
  "/modules/projects": { icon: "kanban", blurb: "Milestones with review gates" },
  "/modules/hr-payroll": { icon: "hr", blurb: "Payroll runs & payslip PDFs" },
  "/modules/ai-voice-agent": { icon: "phone", blurb: "Calls every new lead in seconds" },
  "/industries/manufacturing": { icon: "factory", blurb: "Orders, vouchers & recovery" },
  "/industries/real-estate-construction": { icon: "building", blurb: "Site enquiries called back fast" },
  "/industries/it-agencies": { icon: "laptop", blurb: "Proposals to milestones to payroll" },
  "/industries/service-consulting": { icon: "brief", blurb: "Client engagements, end to end" },
  "/industries/law-ca-cs": { icon: "scale", blurb: "Matters, filings & fee recovery" },
  "/industries/education": { icon: "cap", blurb: "Admissions enquiries never go cold" },
  "/industries/healthcare": { icon: "pulse", blurb: "Appointments, billing & payroll" },
  "/industries/trading-distribution": { icon: "truck", blurb: "Quotes, ledgers & collections" },
};

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
            href="https://app.bizvora.com"
            className="text-[14px] leading-[1.6] font-medium text-ink underline decoration-ink/30 underline-offset-4 transition-colors hover:text-primary-dark hover:decoration-primary/50"
          >
            Login
          </a>
          <PillButton href="/demo" variant="gradient" size="sm" className="w-[165px]">
            Request a Demo
          </PillButton>
        </div>

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
        <div className="absolute top-full right-5 left-5 max-h-[calc(100dvh-7rem)] overflow-y-auto rounded-[16px] bg-white/95 p-6 ring-1 ring-line shadow-[0_20px_45px_rgba(14,20,8,0.12)] backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-4">
            {/* Groups render their children indented: on mobile there is no
                hover, so a flat list would strand every sub-page. */}
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="flex flex-col gap-3">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[16px] leading-[1.6] font-medium text-ink capitalize"
                >
                  {link.label}
                </Link>
                {hasChildren(link) && (
                  <div className="flex flex-col gap-2.5 border-l border-line pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2.5 text-[15px] leading-[1.4] font-normal text-ink-70 transition-colors hover:text-ink"
                      >
                        {ITEM_META[child.href] && (
                          <Mark
                            name={ITEM_META[child.href].icon}
                            className="size-4 shrink-0 text-primary-dark"
                          />
                        )}
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-2 flex items-center gap-6">
              <a
                href="https://app.bizvora.com"
                onClick={() => setOpen(false)}
                className="text-[15px] leading-[1.6] font-medium text-ink underline decoration-ink/30 underline-offset-4 transition-colors hover:text-primary-dark hover:decoration-primary/50"
              >
                Login
              </a>
              <PillButton href="/demo" variant="gradient" size="sm">
                Request a Demo
              </PillButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
