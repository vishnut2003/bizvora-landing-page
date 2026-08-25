import { Mark } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionBadge } from "@/components/section-badge";
import { VOICE_FACTS, VOICE_TRANSCRIPT } from "@/lib/bizvora";

/**
 * The standout section. Header follows the Features pattern; the body is a
 * dark `bg-ink` panel with ambient purple glows. The transcript renders as a
 * chat (AI left / lead right) whose bubbles stagger in on reveal; the AI
 * avatar carries a looping equalizer and the LIVE badge a ping.
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

      <div className="relative flex w-full flex-col gap-9 overflow-hidden rounded-[16px] bg-ink px-8 py-12 lg:flex-row lg:items-center lg:gap-12 lg:px-[52px]">
        {/* ambient glows behind both columns */}
        <div className="pointer-events-none absolute -top-24 -left-24 size-[320px] rounded-full bg-primary/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -bottom-28 size-[340px] rounded-full bg-violet-500/15 blur-3xl" />

        <div className="relative flex flex-col items-start gap-8 lg:w-1/2">
          <div className="flex flex-col gap-4">
            <span className="text-[12px] font-semibold tracking-[0.14em] text-[#C084FC] uppercase">
              AI voice agent
            </span>
            <p className="text-[16px] leading-[1.7] font-normal tracking-[-0.02em] text-zinc-300">
              A lead lands from Meta Ads, Google Ads, or your website, and
              BizvoraOne&rsquo;s AI voice agent is{" "}
              <span className="font-medium text-white">already dialing</span>. It
              qualifies, answers questions, books the follow-up, and logs
              everything back to the CRM{" "}
              <span className="font-medium text-white">
                before your team has read the notification
              </span>
              .
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
            {VOICE_FACTS.map((fact) => (
              <div
                key={fact.value}
                className="flex flex-col gap-2 rounded-[16px] bg-white/5 p-5 ring-1 ring-white/10 transition-colors duration-300 hover:ring-primary/50"
              >
                <span className="text-[20px] leading-[1.3] font-semibold text-white">
                  {fact.value}
                </span>
                <span className="text-[13px] leading-[1.6] font-normal tracking-[-0.02em] text-zinc-400">
                  {fact.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call card */}
        <div className="relative flex w-full flex-col gap-5 rounded-[16px] bg-surface p-7 shadow-[0_32px_64px_-32px_rgba(0,0,0,0.6)] ring-1 ring-white/10 lg:w-1/2">
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
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70" />
                <span className="relative inline-flex size-1.5 rounded-full bg-white" />
              </span>
              LIVE
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {VOICE_TRANSCRIPT.map((row, i) => {
              const isAi = row.speaker.includes("AI");
              return (
                <Reveal
                  key={row.line}
                  variant="up"
                  distance={16}
                  delay={i * 150}
                  className={`w-fit max-w-[92%] ${isAi ? "self-start" : "self-end"}`}
                >
                  <div className={`flex items-start gap-2.5 ${isAi ? "" : "flex-row-reverse"}`}>
                    <span
                      className={`mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full ${
                        isAi
                          ? "bg-gradient-to-br from-primary to-primary-dark"
                          : "bg-surface-muted text-[11px] font-semibold text-ink-70 ring-1 ring-ink/10"
                      }`}
                    >
                      {isAi ? (
                        <span className="flex items-end gap-[2px]" aria-hidden>
                          {[7, 11, 8].map((h, j) => (
                            <span
                              key={j}
                              className="eq-bar w-[2.5px] rounded-full bg-white"
                              style={{ height: h, animationDelay: `${j * 0.15}s` }}
                            />
                          ))}
                        </span>
                      ) : (
                        "R"
                      )}
                    </span>
                    <div
                      className={`rounded-[14px] px-4 py-3 text-[14px] leading-[1.6] tracking-[-0.02em] ${
                        isAi
                          ? "rounded-tl-[4px] bg-primary-10 text-ink"
                          : "rounded-tr-[4px] bg-surface-muted text-ink-70"
                      }`}
                    >
                      <span className="mb-0.5 block text-[11px] font-semibold tracking-[0.06em] text-ink-50 uppercase">
                        {row.speaker}
                      </span>
                      {row.line}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <p className="flex items-center gap-2 border-t border-line pt-4 text-[13px] leading-[1.6] font-normal tracking-[-0.02em] text-ink-70">
            <Mark name="check" className="size-4 shrink-0 text-emerald-600" />
            Logged to CRM · Stage moved to Qualified · Meeting booked
          </p>
        </div>
      </div>
    </section>
  );
}
