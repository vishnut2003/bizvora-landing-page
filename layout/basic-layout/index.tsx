import type { ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

/** Site shell: fixed header, page content, footer. */
export function BasicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
