import Link from "next/link";
import { BizvoraLogoIcon } from "@/components/icons";
import { DemoLink } from "@/components/demo-trigger";
import { FOOTER_COLUMNS } from "@/lib/bizvora";

/**
 * Dark footer bookending the page (matches the voice-agent/about panels):
 * brand + link columns over a faint top glow, then a split bottom bar.
 */
export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-ink px-5 pt-16 pb-6 md:px-10 lg:px-16">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[320px] w-[640px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-[1055px] flex-col gap-12">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-start lg:gap-6">
          <div className="flex max-w-[341px] flex-col items-start gap-5">
            <Link href="/" className="flex items-center gap-2">
              <BizvoraLogoIcon className="size-6 shrink-0" />
              <span className="text-[20px] leading-6 font-extrabold text-white capitalize">
                BizvoraOne
              </span>
            </Link>
            <p className="text-[14px] leading-[1.7] font-normal tracking-[-0.02em] text-zinc-400">
              A complete operating system for your business, by Web Spider
              Solutions.
            </p>
            <Link
              href="mailto:hello@webspidersolutions.com"
              className="text-[14px] leading-[1.6] tracking-[-0.02em] text-zinc-400 underline decoration-primary/50 underline-offset-4 transition-colors duration-200 hover:text-white"
            >
              hello@webspidersolutions.com
            </Link>
          </div>

          {/* A 2×2 grid below `lg`, so the second row's columns line up with
              the first's — a wrapping flex row would space each row by its
              own widest label. One content-sized row from `lg` up, where the
              long labels can stay on one line. */}
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:flex lg:flex-nowrap lg:justify-start lg:gap-x-[66px]">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.heading} className="flex min-w-0 flex-col items-start gap-4">
                <p className="mb-1 text-[12px] leading-[1.6] font-semibold tracking-[0.1em] whitespace-nowrap text-zinc-500 uppercase">
                  {column.heading}
                </p>
                {column.links.map((link) => {
                  const className =
                    "text-[14px] leading-[1.3] font-normal tracking-[-0.02em] text-zinc-400 transition-colors duration-200 hover:text-white lg:whitespace-nowrap";
                  // The demo row opens the modal; everything else navigates.
                  return link.label === "Request a Demo" ? (
                    <DemoLink key={link.label} className={className}>
                      {link.label}
                    </DemoLink>
                  ) : (
                    <Link key={link.label} href={link.href} className={className}>
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-[13px] leading-[1.6] tracking-[-0.02em] text-zinc-500">
            © 2026 Web Spider Solutions. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-[13px] leading-[1.6] tracking-[-0.02em] text-zinc-500">
            <span className="size-1.5 rounded-full bg-primary" />
            Hosted in Mumbai · Data stays in India
          </p>
        </div>
      </div>
    </footer>
  );
}
