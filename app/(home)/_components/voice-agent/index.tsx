import { Mark } from "@/components/icons";
import { SectionBadge } from "@/components/section-badge";
import { VOICE_FACTS, VOICE_TRANSCRIPT } from "@/lib/bizvora";

/**
 * The standout section. Header follows the Features pattern; the body reuses
 * the About panel (`bg-ink`, 16px radius) at full width. Static — the only
 * motion on this page is the shared reveal/marquee/count-up set.
 */
export function VoiceAgent() {
  return (
    <section
      id="voice"
      className="flex w-full max-w-[500px] flex-col items-center gap-8 px-5 md:max-w-[900px] md:gap-10 md:px-10 lg:max-w-[1200px] lg:gap-[72px] lg:px-16"
    >
      <div className="flex flex-col items-center gap-6">
        <SectionBadge>Standout</SectionBadge>
        <h2 className="max-w-[550px] text-center text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-ink capitalize md:text-[36px] lg:text-[48px]">
          Every new lead gets a call. Within seconds. Automatically.
        </h2>
      </div>

      <div className="flex w-full flex-col gap-9 rounded-[16px] bg-ink px-8 py-12 lg:flex-row lg:items-center lg:gap-12 lg:px-[52px]">
        <div className="flex flex-col items-start gap-9 lg:w-1/2">
          <p className="text-[16px] leading-[1.6] font-normal tracking-[-0.04em] text-line capitalize">
            A lead lands from Meta Ads, Google Ads, or your website, and
            BizvoraOne’s AI voice agent is already dialing. It qualifies, answers
            questions, books the follow-up, and logs everything back to the CRM
            before your team has read the notification.
          </p>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
            {VOICE_FACTS.map((fact) => (
              <div
                key={fact.value}
                className="flex flex-col gap-2 rounded-[16px] bg-tile p-5"
              >
                <span className="text-[20px] leading-[1.3] font-medium text-ink">
                  {fact.value}
                </span>
                <span className="text-[14px] leading-[1.6] font-normal tracking-[-0.04em] text-ink-70">
                  {fact.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call card */}
        <div className="flex w-full flex-col gap-5 rounded-[16px] bg-surface p-7 lg:w-1/2">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <Mark name="phone" className="mt-0.5 size-6 shrink-0 text-primary-dark" />
              <div className="flex flex-col gap-1">
                <span className="text-[16px] leading-[1.4] font-medium text-ink">
                  Outbound call · Rohan Mehta
                </span>
                <span className="text-[14px] leading-[1.6] font-normal tracking-[-0.04em] text-ink-70">
                  Lead source: Meta Ads · 8 seconds after form submit
                </span>
              </div>
            </div>
            <span className="inline-flex h-[26px] shrink-0 items-center gap-1.5 rounded-[32px] bg-primary px-3 text-[12px] leading-none font-medium text-white">
              <span className="size-1.5 rounded-full bg-white" />
              LIVE
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            {VOICE_TRANSCRIPT.map((row) => (
              <p
                key={row.line}
                className="rounded-[16px] bg-surface-muted p-4 text-[14px] leading-[1.6] font-normal tracking-[-0.04em] text-ink-70"
              >
                <span className="font-medium text-ink">{row.speaker} · </span>
                {row.line}
              </p>
            ))}
          </div>

          <p className="flex items-center gap-2 text-[14px] leading-[1.6] font-normal tracking-[-0.04em] text-ink-70">
            <Mark name="check" className="size-4 shrink-0 text-primary-dark" />
            Logged to CRM · Stage moved to Qualified · Meeting booked
          </p>
        </div>
      </div>
    </section>
  );
}
