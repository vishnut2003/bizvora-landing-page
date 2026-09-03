"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { createPortal } from "react-dom";
import {
  ArrowUpRightIcon,
  CloseIcon,
  Mark,
  type MarkName,
} from "@/components/icons";
import {
  LEAD_FIELDS,
  LEAD_TRUST_POINTS,
  leadInputClass,
} from "@/components/lead-form-fields";
import { useScrollLock } from "@/lib/scroll-lock";
import { cn } from "@/lib/utils";

/** Must outlast the longest exit transition in globals.css (.dm-panel). */
const EXIT_MS = 280;
/** Drag the sheet past this and it dismisses; below it, it springs back. */
const DRAG_CLOSE_PX = 100;

const FOCUSABLE =
  'a[href],button:not([disabled]),input:not([disabled]),textarea:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])';

/** The split view's left panel — the same proof points the site makes elsewhere. */
const PROOF_POINTS: { icon: MarkName; label: string }[] = [
  { icon: "crm", label: "All 7 modules in one workspace" },
  { icon: "phone", label: "An AI voice agent that calls every new lead" },
  { icon: "ledger", label: "Tally-style books — zero retraining" },
  { icon: "building", label: "Hosted in Mumbai. Your data stays in India." },
];

/**
 * The demo lead form: a centred split panel on desktop, a bottom sheet on
 * mobile. Portalled to <body> — the header is a z-10 stacking context with a
 * backdrop-blur layer and its mega-menu already sits at z-[11], so a dialog
 * rendered inside that subtree would be trapped beneath it.
 *
 * No backend: submitting swaps to the thank-you state, the same contract as
 * ContactForm and the home Contact section. TODO: wire all three at once.
 */
export function DemoModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [present, setPresent] = useState(false); // in the DOM
  const [visible, setVisible] = useState(false); // transitioned in
  const [dragY, setDragY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<number | null>(null);
  const dragOffset = useRef(0);
  const titleId = useId();

  // React's "adjust state when a prop changes" pattern, rather than an effect:
  // mounting has to happen in the same commit as the flag, and a synchronous
  // setState inside an effect would just cascade an extra render.
  const [prevOpen, setPrevOpen] = useState(open);
  if (open !== prevOpen) {
    setPrevOpen(open);
    if (open) {
      setPresent(true);
      setSent(false);
      setName("");
      setDragY(0);
    } else {
      setVisible(false);
    }
  }

  // Mounted, so rise in on the next frame.
  useEffect(() => {
    if (!open) return;
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, [open]);

  // Closed, so leave the node in place until the exit transition has run.
  useEffect(() => {
    if (open || !present) return;
    const timer = window.setTimeout(() => setPresent(false), EXIT_MS);
    return () => window.clearTimeout(timer);
  }, [open, present]);

  useScrollLock(present);

  // Escape closes; Tab cycles inside the dialog.
  useEffect(() => {
    if (!present) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const items = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((el) => el.offsetParent !== null);
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [present, onClose]);

  // Land in the first field on desktop. On a phone that would throw the
  // keyboard up over the sheet the instant it opens, so focus the panel.
  useEffect(() => {
    if (!visible) return;
    const panel = panelRef.current;
    if (!panel) return;
    const desktop = window.matchMedia("(min-width: 768px)").matches;
    const field =
      desktop && !sent ? panel.querySelector<HTMLInputElement>("input") : null;
    (field ?? panel).focus({ preventScroll: true });
  }, [visible, sent]);

  const startDrag = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (window.matchMedia("(min-width: 768px)").matches) return;
    dragStart.current = e.clientY;
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const moveDrag = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null) return;
    const offset = Math.max(0, e.clientY - dragStart.current);
    dragOffset.current = offset;
    setDragY(offset);
  };

  const endDrag = () => {
    if (dragStart.current === null) return;
    dragStart.current = null;
    const offset = dragOffset.current;
    dragOffset.current = 0;
    setDragging(false);
    setDragY(0);
    if (offset > DRAG_CLOSE_PX) onClose();
  };

  if (!present) return null;

  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-end justify-center md:items-center md:p-6">
      <div
        aria-hidden
        onClick={onClose}
        data-visible={visible || undefined}
        className="dm-backdrop absolute inset-0 bg-ink/60 backdrop-blur-sm"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        data-visible={visible || undefined}
        style={
          dragY > 0
            ? { transform: `translateY(${dragY}px)`, transition: "none" }
            : undefined
        }
        className={cn(
          "dm-panel relative flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-[24px] bg-white outline-none",
          "shadow-[0_-24px_60px_-24px_rgba(14,20,8,0.4)]",
          "md:max-h-[88vh] md:max-w-[880px] md:flex-row md:rounded-[24px] md:shadow-[0_48px_96px_-32px_rgba(14,20,8,0.55)]",
          dragging && "select-none",
        )}
      >
        {/* mobile: grab handle + sheet header, and the only draggable surface —
            dragging the whole sheet would fight the form's own scrolling */}
        <div
          onPointerDown={startDrag}
          onPointerMove={moveDrag}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          className="relative shrink-0 cursor-grab touch-none border-b border-ink/5 bg-[linear-gradient(135deg,#FBF9FF_0%,#F3EDFC_100%)] px-6 pt-3 pb-5 active:cursor-grabbing md:hidden"
        >
          <span
            aria-hidden
            className="mx-auto mb-4 block h-1 w-10 rounded-full bg-ink/15"
          />
          <div className="flex items-center gap-3.5">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-[linear-gradient(125deg,rgb(140,0,255)_9%,rgb(69,6,147)_92%)]">
              <Mark name="phone" className="size-5 text-white" />
            </span>
            <div className="flex flex-1 flex-col gap-0.5">
              <span
                id={titleId}
                className="text-[20px] leading-[1.2] font-medium tracking-[-0.03em] text-ink"
              >
                Book your live demo
              </span>
              <span className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] text-ink-50 uppercase">
                <span aria-hidden className="h-px w-4 bg-ink/20" />
                We call you back
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="flex size-9 shrink-0 items-center justify-center rounded-full text-ink-50 transition-colors hover:bg-ink/5 hover:text-ink"
            >
              <CloseIcon className="size-4" />
            </button>
          </div>
        </div>

        {/* desktop: the dark half */}
        <div className="relative hidden overflow-hidden bg-ink p-10 md:flex md:w-[42%] md:shrink-0 md:flex-col md:justify-between">
          <div className="pointer-events-none absolute -top-24 left-[10%] size-[280px] rounded-full bg-primary/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 right-[6%] size-[300px] rounded-full bg-violet-400/30 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_75%_85%_at_50%_0%,black,transparent)]" />

          <div className="relative flex flex-col gap-5">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-white/70 uppercase backdrop-blur-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C084FC] opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-[#C084FC]" />
              </span>
              Free live demo
            </span>
            <h2 className="text-[28px] leading-[1.15] font-medium tracking-[-0.04em] text-white">
              See it working{" "}
              <span className="bg-gradient-to-r from-[#C084FC] to-primary bg-clip-text text-transparent">
                on your data
              </span>
            </h2>
            <p className="text-[14px] leading-[1.6] tracking-[-0.02em] text-white/60">
              Bring your toughest workflow — we run it end to end, live, on the
              actual product.
            </p>
          </div>

          <ul className="relative mt-8 flex list-none flex-col gap-3.5">
            {PROOF_POINTS.map((point) => (
              <li key={point.label} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-[8px] bg-white/10 ring-1 ring-white/10">
                  <Mark name={point.icon} className="size-3.5 text-[#C084FC]" />
                </span>
                <span className="text-[13px] leading-[1.5] tracking-[-0.02em] text-zinc-400">
                  {point.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* the form half — scrolls inside the sheet on mobile */}
        <div className="flex flex-1 flex-col gap-5 overflow-y-auto p-6 md:p-9">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 hidden size-9 items-center justify-center rounded-full text-ink-50 transition-colors hover:bg-ink/5 hover:text-ink md:flex"
          >
            <CloseIcon className="size-4" />
          </button>

          <div className="hidden flex-col gap-1.5 md:flex">
            <h3 className="text-[22px] leading-[1.2] font-medium tracking-[-0.03em] text-ink">
              Request a demo
            </h3>
            <p className="text-[13px] leading-[1.6] text-ink-50">
              Leave your details and we&apos;ll call you back within business
              hours.
            </p>
          </div>

          {sent ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
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
              <button
                type="button"
                onClick={onClose}
                className="mt-2 text-[13px] font-medium text-primary-dark underline underline-offset-4 transition-colors hover:text-primary"
              >
                Back to the site
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="flex w-full flex-col gap-3"
            >
              {LEAD_FIELDS.map((field) => (
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
                  className={leadInputClass}
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

          <div className="mt-auto flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-ink/5 pt-4">
            {LEAD_TRUST_POINTS.map((point) => (
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
      </div>
    </div>,
    document.body,
  );
}
