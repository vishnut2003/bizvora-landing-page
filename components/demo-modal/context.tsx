"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { DemoModal } from "./modal";

interface DemoModalValue {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const DemoModalContext = createContext<DemoModalValue | null>(null);

/**
 * Owns the demo modal for the whole site. Mounted once in app/layout.tsx so
 * every CTA — in server components, the header, the footer, the 404 — can open
 * it through useDemoModal() without any page mounting the dialog itself.
 */
export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  // The CTA that opened it, so focus can go home on close.
  const triggerRef = useRef<HTMLElement | null>(null);

  const openModal = useCallback(() => {
    triggerRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    // Focus returns after the exit transition has released the trap.
    const trigger = triggerRef.current;
    if (trigger) window.setTimeout(() => trigger.focus({ preventScroll: true }), 0);
  }, []);

  const value = useMemo(
    () => ({ open, openModal, closeModal }),
    [open, openModal, closeModal],
  );

  return (
    <DemoModalContext.Provider value={value}>
      {children}
      <DemoModal open={open} onClose={closeModal} />
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  const ctx = useContext(DemoModalContext);
  if (!ctx) throw new Error("useDemoModal must be used inside <DemoModalProvider>");
  return ctx;
}
