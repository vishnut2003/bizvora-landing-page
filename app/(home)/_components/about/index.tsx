import Image from "next/image";
import { Mark } from "@/components/icons";
import { PillButton } from "@/components/pill-button";
import { SectionBadge } from "@/components/section-badge";
import aboutTeam from "./assets/about-team.png";

/** The paragraph's four differentiators, broken out as a scannable checklist. */
const ABOUT_POINTS = [
  "Tally-style vouchers — zero retraining for your accountant",
  "Amounts in lakhs and crores, not commas in the wrong place",
  "Data hosted in the MongoDB Atlas Mumbai region — it stays in India",
  "Secure REST API with JWT, so your team keeps working on the move",
];

/**
 * Two 524×520 panels: composed photo left (gradient overlay + glass chip),
 * dark card right with an intro line and the differentiator checklist.
 */
export function About() {
  return (
    <section
      id="about"
      className="flex w-full max-w-[500px] flex-col gap-3 px-5 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:flex-row lg:gap-6 lg:px-16"
    >
      <div className="group relative aspect-[524/520] w-full overflow-hidden rounded-[16px] lg:w-1/2">
        <Image
          src={aboutTeam}
          alt="A team reviewing their business dashboards"
          fill
          sizes="(max-width: 1199px) 100vw, 524px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
        <span className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-[13px] leading-none font-medium text-ink backdrop-blur-sm">
          <span className="size-2 rounded-full bg-primary" />
          Built for Indian businesses
        </span>
      </div>

      <div className="relative flex w-full items-center overflow-hidden rounded-[16px] bg-ink px-8 py-12 lg:w-1/2 lg:px-[52px]">
        <div className="pointer-events-none absolute -top-24 -right-20 size-[300px] rounded-full bg-primary/20 blur-3xl" />
        <div className="relative flex flex-col items-start gap-8">
          <div className="flex flex-col items-start gap-4">
            <SectionBadge>About</SectionBadge>
            <div className="flex flex-col gap-3">
              <h4 className="text-[24px] leading-[1.3] font-medium text-white lg:text-[32px]">
                A complete operating system for your business
              </h4>
              <p className="text-[16px] leading-[1.6] font-normal tracking-[-0.02em] text-zinc-300">
                BizvoraOne is built by Web Spider Solutions for how Indian
                businesses actually run.
              </p>
            </div>
            <ul className="flex list-none flex-col gap-3">
              {ABOUT_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-[14px] leading-[1.6] tracking-[-0.02em] text-zinc-400"
                >
                  <Mark name="check" className="mt-1 size-4 shrink-0 text-[#C084FC]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <PillButton href="#contact" className="w-[192px]">
            More About Us
          </PillButton>
        </div>
      </div>
    </section>
  );
}
