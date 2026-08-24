import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "BizvoraOne | All-in-one business management software for Indian teams",
  description:
    "BizvoraOne runs your whole business from one workspace: CRM, AI proposals, quotations, accounting, projects and HR & payroll, plus an AI voice agent that calls every new lead within seconds. Made in India, hosted in Mumbai.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className={`${inter.className} min-h-full flex flex-col overflow-x-hidden bg-surface text-ink`}>
        {children}
      </body>
    </html>
  );
}
