import { useEffect } from "react";

/**
 * One reference-counted lock for every overlay that holds the page still.
 *
 * Two overlays can overlap: the mobile drawer stays mounted for its exit
 * transition while the demo modal it opened is already up. With each one
 * saving and restoring body styles on its own, the modal captured the
 * drawer's "hidden" as the value to put back, and the page never scrolled
 * again. Only the first lock captures the original styles; only the last
 * unlock restores them.
 */
let locks = 0;
let prevOverflow = "";
let prevPadding = "";

function lock() {
  if (locks++ > 0) return;
  const { body, documentElement } = document;
  prevOverflow = body.style.overflow;
  prevPadding = body.style.paddingRight;
  // The scrollbar's width is handed to padding so the layout behind does
  // not jump sideways as it disappears.
  const gap = window.innerWidth - documentElement.clientWidth;
  body.style.overflow = "hidden";
  if (gap > 0) body.style.paddingRight = `${gap}px`;
}

function unlock() {
  if (--locks > 0) return;
  locks = 0;
  const { body } = document;
  body.style.overflow = prevOverflow;
  body.style.paddingRight = prevPadding;
}

/** Holds the page still while `active`; releases on cleanup. */
export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;
    lock();
    return unlock;
  }, [active]);
}
