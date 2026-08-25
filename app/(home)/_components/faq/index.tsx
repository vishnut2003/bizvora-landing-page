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
        {FAQS.map((faq, i) => (
          <details
            key={faq.question}
            className="group rounded-[16px] border border-ink/10 bg-white px-6 py-5 transition-all duration-200 open:border-primary/25 open:shadow-[0_16px_32px_-24px_rgba(69,6,147,0.35)] hover:border-primary/25"
          >
            <summary className="flex cursor-pointer list-none items-center gap-4 [&::-webkit-details-marker]:hidden">
              <span className="w-7 shrink-0 text-[13px] font-semibold tracking-[0.04em] text-primary/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-[16px] leading-[1.4] font-medium text-ink lg:text-[18px]">
                {faq.question}
              </span>
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-10 transition-all duration-200 group-open:rotate-180 group-open:bg-primary">
                <ChevronDownIcon className="h-[6px] w-2.5 text-primary-dark transition-colors duration-200 group-open:text-white" />
              </span>
            </summary>
            <p className="pt-4 pl-11 text-[15px] leading-[1.7] font-normal tracking-[-0.02em] text-ink-70">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
