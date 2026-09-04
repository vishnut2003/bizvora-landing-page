import Link from "next/link";
import { DemoLink, DemoPillButton } from "@/components/demo-trigger";
import { PillButton } from "@/components/pill-button";
import { cn } from "@/lib/utils";

export interface CtaAction {
  label: string;
  /**
   * Phone-only label. Two 40px-radius pills share a 360px row, so anything
   * over ~14 characters needs one; defaults to `label`.
   */
  short?: string;
  /** Omit to open the demo modal instead of navigating. */
  href?: string;
}

/** The primary on nearly every pair: opens the demo modal. */
export const DEMO_CTA: CtaAction = { label: "Request a Demo", short: "Get a Demo" };

/**
 * Both pills share one row at every width: on phones they split it (up to
 * 440px), from `sm` up they are the site's 212px pills.
 */
const ITEM_CLASSES = "min-w-0 flex-1 px-4 sm:w-[212px] sm:flex-none sm:px-5";

const GHOST_TONES = {
  light:
    "border-ink/10 bg-white/70 text-ink hover:border-primary/40 hover:bg-primary-10",
  dark: "border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10",
};

function Label({ label, short }: CtaAction) {
  if (!short || short === label) return label;
  return (
    <>
      <span className="sm:hidden">{short}</span>
      <span className="hidden sm:inline">{label}</span>
    </>
  );
}

/**
 * The gradient-plus-ghost button pair every hero and conversion panel ends
 * on. The hero columns are `items-start`/`items-center`, so a Reveal around
 * the pair shrink-wraps to the labels and defeats `w-full` below — give that
 * Reveal `w-full` (left-aligned) or `flex w-full justify-center` (centred).
 * As a direct child of an `items-center` column the width cap centres it.
 */
export function CtaPair({
  primary,
  secondary,
  tone = "light",
  className,
}: {
  primary: CtaAction;
  secondary: CtaAction;
  /** "dark" = the ghost pill on an ink panel. */
  tone?: "light" | "dark";
  className?: string;
}) {
  const ghost = cn(
    "inline-flex h-[58px] items-center justify-center rounded-[40px] border text-[14px] leading-[1.6] font-medium whitespace-nowrap backdrop-blur-sm transition-colors duration-200",
    GHOST_TONES[tone],
    ITEM_CLASSES,
  );

  return (
    <div
      className={cn(
        "flex w-full max-w-[440px] items-center gap-3 sm:w-auto sm:max-w-none",
        className,
      )}
    >
      {primary.href ? (
        <PillButton href={primary.href} className={ITEM_CLASSES}>
          <Label {...primary} />
        </PillButton>
      ) : (
        <DemoPillButton className={ITEM_CLASSES}>
          <Label {...primary} />
        </DemoPillButton>
      )}
      {secondary.href ? (
        <Link href={secondary.href} className={ghost}>
          <Label {...secondary} />
        </Link>
      ) : (
        <DemoLink className={ghost}>
          <Label {...secondary} />
        </DemoLink>
      )}
    </div>
  );
}
