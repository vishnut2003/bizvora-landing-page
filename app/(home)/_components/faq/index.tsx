import { ChevronDownIcon } from "@/components/icons";
import { SectionBadge } from "@/components/section-badge";
import { FAQS } from "@/lib/bizvora";

/** Native <details>/<summary> — no JavaScript, same as the source page. */
export function Faq() {
  return (
    <section
      id="faq"
      className="flex w-full max-w-[500px] flex-col items-center gap-8 px-5 md:max-w-[900px] md:gap-10 md:px-10 lg:max-w-[1200px] lg:gap-[72px] lg:px-16"
    >
      <div className="flex flex-col items-center gap-6">
        <SectionBadge>FAQ</SectionBadge>
        <h2 className="max-w-[550px] text-center text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-ink capitalize md:text-[36px] lg:text-[48px]">
          Frequently asked questions
        </h2>
      </div>

      <div className="flex w-full max-w-[860px] flex-col gap-4">
        {FAQS.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-[16px] bg-surface-muted p-7"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[16px] leading-[1.4] font-medium text-ink lg:text-[20px] [&::-webkit-details-marker]:hidden">
              {faq.question}
              <ChevronDownIcon className="h-[5px] w-2 shrink-0 text-ink-70 transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <p className="pt-5 text-[16px] leading-[1.6] font-normal tracking-[-0.04em] text-ink-70 capitalize">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
