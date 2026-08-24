import Image from "next/image";
import { PillButton } from "@/components/pill-button";
import { SectionBadge } from "@/components/section-badge";
import aboutTeam from "./assets/about-team.png";

/**
 * Two 524×520 panels: composed photo left, #0e1408 card right.
 */
export function About() {
  return (
    <section
      id="about"
      className="flex w-full max-w-[500px] flex-col gap-3 px-5 md:max-w-[900px] md:px-10 lg:max-w-[1200px] lg:flex-row lg:gap-6 lg:px-16"
    >
      <div className="relative aspect-[524/520] w-full overflow-hidden rounded-[16px] lg:w-1/2">
        <Image
          src={aboutTeam}
          alt="A team reviewing their business dashboards"
          fill
          sizes="(max-width: 1199px) 100vw, 524px"
          className="object-cover"
        />
      </div>

      <div className="flex w-full items-center rounded-[16px] bg-ink px-8 py-12 lg:w-1/2 lg:px-[52px] lg:py-0">
        <div className="flex flex-col items-start gap-9">
          <div className="flex flex-col items-start gap-4">
            <SectionBadge>About</SectionBadge>
            <div className="flex flex-col gap-2.5">
              <h4 className="text-[24px] leading-[1.3] font-medium text-white lg:text-[32px]">
                A complete operating system for your business
              </h4>
              <p className="text-[16px] leading-[1.6] font-normal tracking-[-0.04em] text-line capitalize">
                BizvoraOne is built by Web Spider Solutions for how Indian
                businesses actually run. Tally-style vouchers your accountant
                needs zero retraining for. Amounts in lakhs and crores, not
                commas in the wrong place. Your data hosted in the MongoDB Atlas
                Mumbai region, so it stays in India. And a secure REST API with
                JWT, so your team keeps working on the move.
              </p>
            </div>
          </div>
          <PillButton href="#contact" className="w-[192px]">
            More About Us
          </PillButton>
        </div>
      </div>
    </section>
  );
}
