"use client";

import { useState } from "react";
import { ArrowUpRightIcon, Mark } from "@/components/icons";

const FIELDS = [
  { name: "name", type: "text", placeholder: "Your name", required: true },
  { name: "phone", type: "tel", placeholder: "Phone number", required: true },
  { name: "email", type: "email", placeholder: "Email", required: true },
  { name: "company", type: "text", placeholder: "Company", required: false },
];

const TRUST_POINTS = ["Free live demo", "All 7 modules included", "Hosted in Mumbai"];

const inputClass =
  "h-[54px] w-full min-w-0 shrink-0 rounded-[40px] border border-transparent bg-surface-muted px-6 text-[14px] leading-[1.6] text-ink transition-colors duration-200 placeholder:text-ink-50 focus:border-primary/50 focus:bg-white focus:ring-2 focus:ring-primary/25 focus:outline-none";

/**
 * The lead form, carded for the /contact hero. Same contract as the home
 * Contact section: no backend — submit only swaps to the thank-you state.
 * Wire to an API route or form service when it exists.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="flex w-full flex-col gap-5 rounded-[24px] border border-ink/10 bg-white/85 p-6 shadow-[0_32px_64px_-28px_rgba(69,6,147,0.4)] backdrop-blur-md md:p-7">
      <div className="flex items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-[linear-gradient(125deg,rgb(140,0,255)_9%,rgb(69,6,147)_92%)]">
          <Mark name="phone" className="size-5 text-white" />
        </span>
        <div className="flex flex-col">
          <span className="text-[15px] leading-[1.4] font-semibold text-ink">
            Book your live demo
          </span>
          <span className="text-[12px] leading-[1.5] text-ink-50">
            We call back within business hours
          </span>
        </div>
      </div>

      {sent ? (
        <div className="flex flex-col items-center gap-4 py-8 text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-emerald-500/10">
            <Mark name="check" className="size-6 text-emerald-600" />
          </span>
          <p className="text-[17px] leading-[1.4] font-medium text-ink">
            Thanks, {name}. We&rsquo;ll call you shortly to set up your demo.
          </p>
          <p className="text-[13px] leading-[1.6] text-ink-50">
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
          className="flex w-full flex-col gap-3"
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
                field.name === "name" ? (e) => setName(e.target.value) : undefined
              }
              className={inputClass}
            />
          ))}
          {/* PillButton is a Link; the submit reuses its exact shape. */}
          <button
            type="submit"
            className="group mt-1 inline-flex h-[54px] w-full items-center justify-center rounded-[40px] bg-[linear-gradient(125deg,rgb(140,0,255)_9%,rgb(69,6,147)_92%)] px-5 py-4 text-[14px] leading-[1.6] font-medium whitespace-nowrap text-white transition-all duration-200 hover:shadow-[0_16px_32px_-16px_rgba(140,0,255,0.6)]"
          >
            Request a Demo
            <ArrowUpRightIcon className="size-3 w-0 shrink-0 overflow-hidden opacity-0 transition-all duration-200 group-hover:ml-[5px] group-hover:w-3 group-hover:opacity-100" />
          </button>
        </form>
      )}

      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-ink/5 pt-4">
        {TRUST_POINTS.map((point) => (
          <span
            key={point}
            className="flex items-center gap-2 text-[12.5px] leading-[1.6] tracking-[-0.02em] text-ink-50"
          >
            <Mark name="check" className="size-3.5 shrink-0 text-primary-dark" />
            {point}
          </span>
        ))}
      </div>
    </div>
  );
}
