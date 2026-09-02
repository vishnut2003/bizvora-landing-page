import Link from "next/link";
import { Mark } from "@/components/icons";
import { PillButton } from "@/components/pill-button";
import { Reveal } from "@/components/reveal";
import { MODULES, PLAN } from "@/lib/bizvora";

/**
 * The dark conversion panel shared by /modules and /modules/<slug>.
 * `tileLinkMode` decides where the seven module icon tiles point:
 * "anchor" (overview) jumps to the section ids on the same page,
 * "page" (detail pages) navigates to the sibling module pages.
 */
export function CtaPanel({ tileLinkMode = "anchor" }: { tileLinkMode?: "anchor" | "page" }) {
  return (
    <section className="flex w-full max-w-[500px] flex-col px-5 py-8 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:py-12">
      <Reveal variant="up" distance={30}>
        <div className="relative flex w-full flex-col items-center gap-6 overflow-hidden rounded-[24px] border border-white/10 bg-ink px-8 py-12 text-center lg:px-[52px] lg:py-16">
          {/* layered backdrop: orbs + a white dot grid fading from the top */}
          <div className="pointer-events-none absolute -top-24 left-[8%] size-[320px] rounded-full bg-primary/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 right-[6%] size-[340px] rounded-full bg-violet-400/30 blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_75%_85%_at_50%_0%,black,transparent)]" />

          <span className="relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-white/70 uppercase backdrop-blur-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C084FC] opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-[#C084FC]" />
            </span>
            One plan, every module included
          </span>

          <h2 className="relative max-w-[560px] text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-white md:text-[36px] lg:text-[40px]">
            See all of it working together —{" "}
            <span className="bg-gradient-to-r from-[#C084FC] to-primary bg-clip-text text-transparent">
              on your data
            </span>
          </h2>
          <p className="relative max-w-[520px] text-[15px] leading-[1.6] tracking-[-0.02em] text-white/70">
            ₹{PLAN.monthly} per user per month, GST included — every module,
            every dashboard. You&apos;ll never discover a feature you need lives
            on a higher tier.
          </p>

          {/* all seven modules, right here — each tile links per tileLinkMode */}
          <div className="relative flex flex-wrap items-center justify-center gap-3">
            {MODULES.map((module, i) => (
              <Link
                key={module.slug}
                href={
                  tileLinkMode === "page" ? `/modules/${module.slug}` : `#${module.slug}`
                }
                title={module.name}
                aria-label={module.name}
                className="group/mod flex size-11 items-center justify-center rounded-[12px] bg-white/5 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:ring-primary"
                style={{ transitionDelay: `${i * 15}ms` }}
              >
                <Mark
                  name={module.icon}
                  className="size-5 text-[#C084FC] transition-colors duration-300 group-hover/mod:text-white"
                />
              </Link>
            ))}
          </div>

          <div className="relative flex flex-col items-center gap-3 sm:flex-row">
            <PillButton href="/#contact" className="w-[212px]">
              Request a Demo
            </PillButton>
            <Link
              href="/pricing"
              className="inline-flex h-[58px] w-[212px] items-center justify-center rounded-[40px] border border-white/20 bg-white/5 text-[14px] leading-[1.6] font-medium text-white backdrop-blur-sm transition-colors duration-200 hover:border-white/40 hover:bg-white/10"
            >
              See Pricing
            </Link>
          </div>

          <div className="relative flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {["No per-module pricing", "All 8 role dashboards", "Hosted in Mumbai"].map(
              (point) => (
                <span
                  key={point}
                  className="flex items-center gap-2 text-[13px] leading-[1.6] tracking-[-0.02em] text-white/60"
                >
                  <Mark name="check" className="size-3.5 shrink-0 text-[#C084FC]" />
                  {point}
                </span>
              ),
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
