import Link from "next/link";
import { BizvoraLogoIcon } from "@/components/icons";
import { FOOTER_COLUMNS } from "@/lib/bizvora";

export function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-[30px] bg-surface px-5 md:px-10 lg:px-16">
      <div className="flex w-full max-w-[1055px] flex-col justify-between gap-10 lg:flex-row lg:items-start lg:gap-0">
        <div className="flex max-w-[341px] flex-col items-start gap-6">
          <Link href="/" className="flex items-center gap-2">
            <BizvoraLogoIcon className="size-8 shrink-0" />
            <span className="text-[20px] leading-[1.4] font-medium text-ink capitalize">
              BizvoraOne
            </span>
          </Link>
          <p className="text-[16px] leading-[1.6] font-normal tracking-[-0.04em] text-ink-70 capitalize">
            A complete operating system for your business, by Web Spider
            Solutions.
          </p>
        </div>

        {/* One row from `sm` up (gap 24 → 66). BizvoraOne's labels are far
            long and are `nowrap`, so below that they wrap
            onto a second line rather than pushing the page sideways. */}
        <div className="flex flex-wrap justify-between gap-x-6 gap-y-10 lg:flex-nowrap lg:justify-start lg:gap-x-[66px]">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading} className="flex flex-col items-start gap-6">
              <p className="text-[14px] leading-[1.6] font-bold tracking-[-0.02em] whitespace-nowrap text-ink">
                {column.heading}
              </p>
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[16px] leading-[1.2] font-normal tracking-[-0.04em] whitespace-nowrap text-ink-70 capitalize transition-colors duration-200 hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Copyright block: 1px rgba(14,20,8,.1) rule, 10px gap, 10px bottom pad. */}
      <div className="flex w-full max-w-[1200px] flex-col gap-2.5 pb-2.5">
        <div className="h-px w-full rounded-[5px] bg-[rgba(14,20,8,0.1)]" />
        <p className="text-center text-[16px] leading-[1.6] font-normal tracking-[-0.04em] text-ink">
          © 2026 Web Spider Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
