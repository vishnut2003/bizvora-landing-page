import { Reveal } from "@/components/reveal";
import { SectionBadge } from "@/components/section-badge";
import { ROLES } from "@/lib/bizvora";

/** Browser-window chrome: traffic dots + the role's dashboard URL. */
function WindowBar({ slug, dark = false }: { slug: string; dark?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between border-b px-5 py-3 ${
        dark ? "border-white/10" : "border-ink/5"
      }`}
    >
      <span className="flex items-center gap-1.5" aria-hidden>
        <span className="size-2 rounded-full bg-[#FF5F57]/70" />
        <span className="size-2 rounded-full bg-[#FEBC2E]/70" />
        <span className="size-2 rounded-full bg-[#28C840]/70" />
      </span>
      <span
        className={`text-[10px] tracking-[0.08em] ${dark ? "text-zinc-500" : "text-ink-50"}`}
      >
        bizvora.one/{slug}
      </span>
    </div>
  );
}

/**
 * Role-scoped dashboards as a bento of mini app windows: Admin opens wide
 * with a skeleton chart, six roles sit as regular windows, and Management
 * closes full-width on dark — it sees every other role's dashboard.
 */
export function RoleDashboards() {
  const management = ROLES[ROLES.length - 1];

  return (
    <section
      id="dashboards"
      className="flex w-full max-w-[500px] flex-col items-center gap-6 px-5 md:max-w-[900px] md:gap-10 md:px-10 lg:max-w-[1200px] lg:gap-[72px] lg:px-16"
    >
      <div className="flex flex-col items-center gap-6">
        <SectionBadge>Role-scoped dashboards</SectionBadge>
        <h2 className="max-w-[550px] text-center text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-ink capitalize md:text-[36px] lg:text-[48px]">
          Eight dashboards. Each person sees exactly their job.
        </h2>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
        {ROLES.slice(0, -1).map((role, i) => {
          const isFeature = i === 0;
          return (
            <Reveal
              key={role.name}
              variant="scale"
              delay={(i % 4) * 90}
              className={`flex h-full ${isFeature ? "md:col-span-2" : ""}`}
            >
              <div
                className={`flex h-full w-full flex-col overflow-hidden rounded-[16px] border transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_40px_-24px_rgba(69,6,147,0.35)] ${
                  isFeature
                    ? "border-primary/10 bg-gradient-to-b from-[#FBF9FF] to-[#F3EDFC]"
                    : "border-ink/10 bg-white"
                }`}
              >
                <WindowBar slug={role.name.toLowerCase()} />
                <div className="flex flex-1 items-center justify-between gap-6 p-6">
                  <div className="flex flex-col gap-2">
                    <p className="text-[18px] leading-[1.3] font-semibold text-ink">
                      {role.name}
                    </p>
                    <p className="text-[14px] leading-[1.6] tracking-[-0.02em] text-ink-50">
                      {role.sees}
                    </p>
                  </div>
                  {isFeature && (
                    <div className="hidden shrink-0 items-end gap-1.5 self-end sm:flex" aria-hidden>
                      {[24, 38, 20, 46, 32].map((h, j) => (
                        <span
                          key={j}
                          className={`w-3 rounded-t-[3px] ${
                            j === 3 ? "bg-primary/70" : "bg-primary/20"
                          }`}
                          style={{ height: h }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}

        {/* Management: sees every other role's dashboard */}
        <Reveal variant="scale" delay={200} className="flex h-full md:col-span-2 lg:col-span-4">
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[16px] border border-ink bg-ink transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(69,6,147,0.5)]">
            <div className="pointer-events-none absolute -top-20 right-[10%] size-[260px] rounded-full bg-primary/25 blur-3xl" />
            <WindowBar slug="management" dark />
            <div className="relative flex flex-1 flex-col items-start justify-between gap-6 p-6 md:flex-row md:items-center lg:px-8">
              <div className="flex max-w-[440px] flex-col gap-2">
                <p className="text-[18px] leading-[1.3] font-semibold text-white">
                  {management.name}
                </p>
                <p className="text-[14px] leading-[1.6] tracking-[-0.02em] text-zinc-400">
                  {management.sees}
                </p>
              </div>
              <div className="flex max-w-[360px] flex-wrap gap-1.5">
                {ROLES.slice(0, -1).map((role) => (
                  <span
                    key={role.name}
                    className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] leading-none font-medium text-zinc-300 ring-1 ring-white/10"
                  >
                    {role.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
