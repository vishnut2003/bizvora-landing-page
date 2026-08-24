import { Reveal } from "@/components/reveal";
import { SectionBadge } from "@/components/section-badge";
import { ROLES } from "@/lib/bizvora";

/** Role-scoped dashboard cards. */
export function RoleDashboards() {
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

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-5">
        {ROLES.map((role, i) => (
          <Reveal
            key={role.name}
            variant="scale"
            delay={(i % 3) * 100}
            className="flex h-full"
          >
            <div className="flex h-full w-full flex-col items-start gap-5 rounded-[16px] bg-surface-muted p-10">
              <p className="text-[24px] leading-[1.3] font-medium text-ink">
                {role.name}
              </p>
              <p className="text-[16px] leading-[1.6] font-normal tracking-[-0.04em] text-ink-70 capitalize">
                {role.sees}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
