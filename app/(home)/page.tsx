import { BasicLayout } from "@/layout/basic-layout";
import { About } from "./_components/about";
import { Contact } from "./_components/contact";
import { Faq } from "./_components/faq";
import { Features } from "./_components/features";
import { Hero } from "./_components/hero";
import { Industries } from "./_components/industries";
import { Metrics } from "./_components/metrics";
import { Pricing } from "./_components/pricing";
import { RoleDashboards } from "./_components/role-dashboards";
import { VoiceAgent } from "./_components/voice-agent";

export default function Home() {
  return (
    <BasicLayout>
      {/* main: column, centred. Section gap 64 / 72 / 104 per breakpoint. */}
      <main className="flex w-full flex-col items-center gap-16 md:gap-[72px] lg:gap-[104px]">
        <Hero />
        <Features />
        <VoiceAgent />
        <Metrics />
        <Industries />
        <RoleDashboards />
        <About />
        <Pricing />
        <Faq />
        <Contact />
      </main>
    </BasicLayout>
  );
}
