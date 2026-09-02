import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "../_components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service | BizvoraOne",
  description:
    "The terms that govern your use of BizvoraOne, the business workspace built by Web Spider Solutions.",
};

/**
 * DRAFT — written from the product's published facts to hold the page.
 * Have legal counsel review before treating this as a binding document.
 */
const SECTIONS: LegalSection[] = [
  {
    heading: "Acceptance of these terms",
    body: [
      "BizvoraOne is a business management workspace operated by Web Spider Solutions (\"we\", \"us\"). By creating an account, logging in, or using BizvoraOne in any way, you agree to these terms on behalf of yourself and the business you represent. If you do not agree, do not use the service.",
    ],
  },
  {
    heading: "The service",
    body: [
      "BizvoraOne provides business modules — including CRM, AI proposals, quotations, accounting and recovery, projects, HR and payroll, and an AI voice agent — delivered as one workspace under one plan. The exact features available at any time are described on our website; features marked \"coming soon\" are in active development and not yet part of the service.",
    ],
  },
  {
    heading: "Accounts and access",
    body: [
      "Access to your workspace is role-scoped: each user sees the dashboards and records their role permits. You are responsible for keeping login credentials confidential, for the actions taken under your accounts, and for assigning roles within your team appropriately.",
    ],
  },
  {
    heading: "Plan and billing",
    body: [
      "BizvoraOne is sold as a single plan that includes every module, charged per user per month at the rate published on our pricing page and confirmed in your order. Published prices are inclusive of GST, and your invoice shows the tax split. The plan does not gate features behind higher tiers.",
      "New workspaces may begin with a free trial of the period stated at sign-up, after which the subscription continues at the confirmed rate unless you tell us otherwise. You may add or remove users during a billing cycle, and charges adjust accordingly. Published rates may change on notice; a change does not affect a billing cycle already paid for. Billing cycle and payment terms are set out in your order or invoice.",
    ],
  },
  {
    heading: "Your data",
    body: [
      "Your business records — leads, quotes, vouchers, projects, payroll data and everything else you enter — belong to you. We host them in the MongoDB Atlas Mumbai region, and your business data stays in India. We access it only to operate, support and improve the service, as described in our Privacy Policy.",
    ],
  },
  {
    heading: "AI features",
    body: [
      "Some features use artificial intelligence: the AI voice agent places and answers calls to your leads, and AI proposals drafts documents from your data. AI output is a starting point, not advice — your team reviews and approves it before it is used.",
      "The voice agent includes a disclosure toggle that, when enabled, tells call recipients they are speaking with an AI assistant. Whether and how to disclose is your decision, and complying with the laws that apply to your calls and communications is your responsibility.",
    ],
  },
  {
    heading: "Acceptable use",
    body: [
      "You agree not to:",
      "- use the service to send spam or place unlawful, deceptive or harassing calls or messages\n- attempt to breach, probe or overload our systems or access another customer's data\n- resell, sublicense or copy the service, or use it to build a competing product\n- upload content that is unlawful or that you have no right to use",
      "We may suspend accounts that put the service or other customers at risk.",
    ],
  },
  {
    heading: "Availability and changes",
    body: [
      "We work to keep BizvoraOne available and fast, but the service is provided \"as is\" and we do not promise uninterrupted operation. We may improve, add or change features over time; if a change materially reduces what you have paid for, we will tell you.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "To the maximum extent permitted by law, Web Spider Solutions is not liable for indirect or consequential losses — including lost profits, lost data or business interruption — arising from your use of the service. Our total liability for any claim is limited to the fees you paid for the service in the twelve months before the claim arose.",
    ],
  },
  {
    heading: "Termination",
    body: [
      "You may stop using BizvoraOne at any time; termination terms, including any notice period and the return of your data, are set out in your order. We may terminate or suspend access for material breach of these terms that is not cured after notice.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These terms are governed by the laws of India, and the courts at Mumbai, Maharashtra have jurisdiction over any dispute arising from them.",
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "We may update these terms as the service evolves. When we do, we will change the \"last updated\" date on this page, and material changes will be communicated to account holders. Continued use of the service after a change means you accept the updated terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="These terms govern your use of BizvoraOne, the business workspace built and operated by Web Spider Solutions. They are written to be read — short, plain and without surprises."
      updated="2 September 2026"
      sections={SECTIONS}
    />
  );
}
