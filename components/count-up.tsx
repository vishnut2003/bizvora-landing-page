"use client";

import { useEffect, useRef, useState } from "react";

const DURATION = 2000;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Counts 0 → `value` once the tile enters the viewport, matching the target's
 * ~2s ease-out. The suffix is static text, not animated.
 */
export function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / DURATION, 1);
          setDisplay(Math.round(easeOut(progress) * value));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref} className="text-[56px] leading-none font-bold text-ink">
      {display}
      {suffix}
    </span>
  );
}
