"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRightIcon, Mark } from "@/components/icons";
import { cn } from "@/lib/utils";

const FIELDS = [
  { name: "name", type: "text", placeholder: "Your name", required: true },
  { name: "phone", type: "tel", placeholder: "Phone number", required: true },
  { name: "email", type: "email", placeholder: "Email", required: true },
  { name: "company", type: "text", placeholder: "Company", required: false },
];

const TRUST_POINTS = ["Free live demo", "All 6 modules included", "Hosted in Mumbai"];

// No `flex-1` here: its `flex-basis: 0%` beats `h-[58px]` while the form is a
// column on mobile and collapses every field to its text height.
const inputClass =
  "h-[58px] min-w-0 shrink-0 rounded-[40px] border border-transparent bg-surface-muted px-6 text-[14px] leading-[1.6] text-ink transition-colors duration-200 placeholder:text-ink-50 focus:border-primary/50 focus:bg-white focus:ring-2 focus:ring-primary/25 focus:outline-none";

/**
 * The CTA band, carrying the lead form in a white card on the gradient wash.
 * ponytail: no backend — submit only swaps to the thank-you state, exactly
 * like the source page. Wire to an API route or form service when it exists.
 */
export function Contact() {
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
      className="flex w-full justify-center bg-[linear-gradient(180deg,rgba(140,0,255,0.35)_-32%,#fff_72%)] px-5 py-24 lg:py-[104px]"
    >
      <div className="flex w-full max-w-[760px] flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-center text-[24px] leading-[1.2] font-medium tracking-[-0.04em] text-ink capitalize md:text-[36px] lg:text-[48px]">
            Run your whole business from one place.
          </h2>
          <p className="max-w-[560px] text-center text-[16px] leading-[1.6] font-normal tracking-[-0.02em] text-ink-70">
            Leave your details and we&rsquo;ll call you back to book a live demo:
            all six modules and the AI voice agent, on your own use case.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-6 rounded-[24px] border border-primary/15 bg-white p-6 shadow-[0_40px_80px_-48px_rgba(69,6,147,0.4)] md:p-8">
          {sent ? (
            <div className="flex flex-col items-center gap-4 py-6 text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-emerald-500/10">
                <Mark name="check" className="size-6 text-emerald-600" />
              </span>
              <p className="text-[18px] leading-[1.4] font-medium text-ink">
                Thanks, {name}. We&rsquo;ll call you shortly to set up your demo.
              </p>
              <p className="text-[14px] leading-[1.6] text-ink-50">
                Keep your phone nearby — our team usually calls back within
                business hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="flex w-full flex-col items-center gap-3 md:flex-row md:flex-wrap md:justify-center"
            >
              {FIELDS.map((field) => (
                <input
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  placeholder={field.placeholder}
                  aria-label={field.placeholder}
                  onChange={
                    field.name === "name"
                      ? (e) => setName(e.target.value)
                      : undefined
                  }
                  className={cn(inputClass, "w-full md:w-[calc(50%-6px)] md:flex-none")}
                />
              ))}
              {/* PillButton is a Link; the submit reuses its exact shape. */}
              <button
                type="submit"
                className="group mt-2 inline-flex h-[58px] w-full items-center justify-center rounded-[40px] bg-[linear-gradient(125deg,rgb(140,0,255)_9%,rgb(69,6,147)_92%)] px-5 py-4 text-[14px] leading-[1.6] font-medium whitespace-nowrap text-white transition-all duration-200 hover:shadow-[0_16px_32px_-16px_rgba(140,0,255,0.6)] md:w-[232px]"
              >
                Request a Demo
                <ArrowUpRightIcon className="size-3 w-0 shrink-0 overflow-hidden opacity-0 transition-all duration-200 group-hover:ml-[5px] group-hover:w-3 group-hover:opacity-100" />
              </button>
            </form>
          )}

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-ink/5 pt-5">
            {TRUST_POINTS.map((point) => (
              <span
                key={point}
                className="flex items-center gap-2 text-[13px] leading-[1.6] tracking-[-0.02em] text-ink-50"
              >
                <Mark name="check" className="size-3.5 shrink-0 text-primary-dark" />
                {point}
              </span>
            ))}
          </div>
        </div>

        <p className="text-center text-[15px] leading-[1.6] font-normal tracking-[-0.02em] text-ink-70">
          Prefer email?{" "}
          <Link
            href="mailto:hello@webspidersolutions.com"
            className="font-medium text-ink underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary-dark"
          >
            hello@webspidersolutions.com
          </Link>
        </p>
      </div>
    </section>
  );
}
