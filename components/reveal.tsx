"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** "scale" = opacity 0 + scale(.9); "up" = opacity 0 + translateY(distance). */
  variant?: "scale" | "up";
  /** Only meaningful for "up". Matches the target: 60px for headings, 30px otherwise. */
  distance?: number;
  delay?: number;
  className?: string;
  as?: ElementType;
}

/**
 * Reproduces Framer's Motion-driven appear animations with an IntersectionObserver.
 * Fires once; the actual transitions live in globals.css under [data-reveal].
 */
export function Reveal({
  children,
  variant = "scale",
  distance = 30,
  delay = 0,
  className,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || revealed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [revealed]);

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      data-revealed={revealed || undefined}
      className={className}
      style={
        {
          "--reveal-delay": `${delay}ms`,
          ...(variant === "up" ? { "--reveal-distance": `${distance}px` } : {}),
        } as React.CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
