import type { Metadata } from "next";
import { Geist, Rubik } from "next/font/google";
import { DemoModalProvider } from "@/components/demo-modal/context";
import { siteOrigin } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/** The real BizvoraOne app font — worn only by the hero dashboard mock. */
const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Resolves the blog's relative canonical / og:url to absolute URLs.
  metadataBase: new URL(siteOrigin()),
  title: "BizvoraOne | All-in-one business management software for Indian teams",
  description:
    "BizvoraOne runs your whole business from one workspace: CRM, AI proposals, quotations, accounting, projects and HR & payroll, plus an AI voice agent that calls every new lead within seconds. Made in India, hosted in Mumbai.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${rubik.variable} h-full antialiased`}>
      <body className={`${geistSans.className} min-h-full flex flex-col overflow-x-hidden bg-surface text-ink`}>
        <DemoModalProvider>{children}</DemoModalProvider>
      </body>
    </html>
  );
}
