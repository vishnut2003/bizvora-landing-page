"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { Mark } from "@/components/icons";
import { PillButton } from "@/components/pill-button";
import { GHOST_BUTTON_CLASSES } from "@/app/modules/_components/shared";
import { PLAN, inr } from "@/lib/bizvora";
import { cn } from "@/lib/utils";

const SLIDER_MAX = 100;
const SEAT_MAX = 500;

type Cycle = "monthly" | "annual";

const CYCLES: { id: Cycle; label: string }[] = [
  { id: "monthly", label: "Monthly" },
  { id: "annual", label: "Yearly" },
];

/**
 * The price card and the seat calculator share one piece of state — the billing
 * cycle drives both the headline rate and the running total — so the whole card
 * is a single client component. Arithmetic only: nothing here talks to a server.
 */
export function PlanCard() {
  const [cycle, setCycle] = useState<Cycle>("monthly");
  const [seats, setSeats] = useState(10);
  const sliderId = useId();
  const seatFieldId = useId();

  const annual = cycle === "annual";
  const rate = annual ? PLAN.annualPerUser : PLAN.monthly;
  const total = seats * rate;

  const clamp = (n: number) => Math.min(SEAT_MAX, Math.max(1, n));

  return (
    <div className="flex w-full max-w-[980px] flex-col overflow-hidden rounded-[24px] border border-primary/15 bg-white shadow-[0_40px_80px_-48px_rgba(69,6,147,0.4)] lg:flex-row">
      {/* the price itself */}
      <div className="flex flex-col items-start gap-6 p-8 lg:w-[42%] lg:shrink-0 lg:p-10">
        <span className="text-[12px] font-semibold tracking-[0.14em] text-primary-dark uppercase">
          All-in-one plan
        </span>

        {/* billing cycle */}
        <div
          role="radiogroup"
          aria-label="Billing cycle"
          className="inline-flex rounded-full bg-surface-muted p-1"
        >
          {CYCLES.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="radio"
              aria-checked={cycle === id}
              onClick={() => setCycle(id)}
              className={cn(
                "rounded-full px-4 py-1.5 text-[13px] leading-[1.6] font-medium transition-colors duration-200",
                cycle === id
                  ? "bg-white text-ink shadow-[0_2px_8px_rgba(14,20,8,0.08)]"
                  : "text-ink-50 hover:text-ink",
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-end gap-2">
            <span className="text-[56px] leading-none font-medium tracking-[-0.04em] text-ink lg:text-[64px]">
              {inr(annual ? PLAN.annualPerMonth : PLAN.monthly)}
            </span>
            <span className="pb-2 text-[14px] leading-[1.3] tracking-[-0.02em] text-ink-50">
              per user
              <br />
              per month
            </span>
          </div>

          <p className="text-[13px] leading-[1.6] tracking-[-0.02em] text-ink-50">
            {annual ? (
              <>
                <span className="line-through">{inr(PLAN.monthly)}</span> billed
                monthly · {inr(PLAN.annualPerUser)} per user, yearly
              </>
            ) : (
              <>GST included · billed monthly · cancel any month</>
            )}
          </p>
        </div>

        {annual ? (
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-10 px-3 py-1.5 text-[12px] leading-none font-medium text-primary-dark">
            <Mark name="check" className="size-3" />
            Save {inr(PLAN.annualSavingPerUser)} a user — about{" "}
            {PLAN.annualSavingPercent}%
          </span>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-10 px-3 py-1.5 text-[12px] leading-none font-medium text-primary-dark">
            <Mark name="check" className="size-3" />
            {PLAN.trialDays} days free, no card
          </span>
        )}

        <div className="flex w-full flex-col gap-3">
          <PillButton href="/contact" className="w-full">
            {`Start your ${PLAN.trialDays}-day trial`}
          </PillButton>
          <Link href="#included" className={cn(GHOST_BUTTON_CLASSES, "w-full")}>
            See what&apos;s included
          </Link>
        </div>
      </div>

      {/* what that costs your team */}
      <div className="flex flex-1 flex-col gap-6 border-t border-ink/5 bg-gradient-to-b from-[#FBF9FF] to-[#F3EDFC] p-8 lg:border-t-0 lg:border-l lg:p-10">
        <div className="flex flex-col gap-1">
          <span className="text-[12px] font-semibold tracking-[0.14em] text-ink-50 uppercase">
            What it costs your team
          </span>
          <p className="text-[13px] leading-[1.6] tracking-[-0.02em] text-ink-50">
            Move the slider. No hidden line items appear later.
          </p>
        </div>

        {/* seat count: slider for the common range, a field for the rest */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-4">
            <label
              htmlFor={sliderId}
              className="text-[14px] leading-[1.4] font-medium text-ink"
            >
              Users
            </label>
            <div className="flex items-center gap-2">
              <label htmlFor={seatFieldId} className="sr-only">
                Number of users
              </label>
              <input
                id={seatFieldId}
                type="number"
                min={1}
                max={SEAT_MAX}
                value={seats}
                onChange={(e) => setSeats(clamp(Number(e.target.value) || 1))}
                className="h-9 w-20 rounded-[10px] border border-ink/10 bg-white px-3 text-center text-[15px] font-medium text-ink transition-colors focus:border-primary/50 focus:ring-2 focus:ring-primary/25 focus:outline-none"
              />
            </div>
          </div>

          <input
            id={sliderId}
            type="range"
            min={1}
            max={SLIDER_MAX}
            step={1}
            value={Math.min(seats, SLIDER_MAX)}
            aria-valuetext={`${seats} users`}
            onChange={(e) => setSeats(Number(e.target.value))}
            className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-primary/20 accent-primary"
          />

          <div className="flex justify-between text-[11px] text-ink-50">
            <span>1</span>
            <span>{SLIDER_MAX}+</span>
          </div>
        </div>

        {/* the running total */}
        <div className="mt-auto flex flex-col gap-1 rounded-[16px] border border-primary/15 bg-white p-6">
          <span className="text-[12px] font-semibold tracking-[0.14em] text-primary-dark uppercase">
            {annual ? "Your yearly total" : "Your monthly total"}
          </span>
          <p aria-live="polite" className="flex items-end gap-2">
            <span className="text-[36px] leading-[1.1] font-medium tracking-[-0.03em] text-ink lg:text-[40px]">
              {inr(total)}
            </span>
            <span className="pb-1.5 text-[13px] text-ink-50">
              {annual ? "/ year" : "/ month"}
            </span>
          </p>
          <p className="text-[13px] leading-[1.6] tracking-[-0.02em] text-ink-70">
            {seats} {seats === 1 ? "user" : "users"} × {inr(rate)}
            {annual ? " a year" : " a month"}, GST included.
          </p>
          {annual && (
            <p className="mt-1 text-[13px] leading-[1.6] font-medium tracking-[-0.02em] text-primary-dark">
              You save {inr(seats * PLAN.annualSavingPerUser)} a year.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
