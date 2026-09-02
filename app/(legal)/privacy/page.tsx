import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "../_components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | BizvoraOne",
  description:
    "How BizvoraOne collects, uses and protects your data — hosted in the MongoDB Atlas Mumbai region, where it stays in India.",
};

/**
 * DRAFT — written from the product's published facts to hold the page.
 * Have legal counsel review before treating this as a binding document.
 */
const SECTIONS: LegalSection[] = [
  {
    heading: "Who we are",
    body: [
      "BizvoraOne is built and operated by Web Spider Solutions (\"we\", \"us\"). This policy explains what we collect when you visit our website or use the BizvoraOne workspace, why we collect it, and the choices you have.",
    ],
  },
  {
    heading: "What we collect",
    body: [
      "On the website: when you request a demo, we collect the details you give us — your name, phone number, email and company — so we can call you back.",
      "In the workspace: the business records your team enters or connects — leads and their contact details, quotes, proposals, accounting vouchers, project records and payroll data — plus account information (user names, roles, login credentials) and technical logs needed to keep the service secure and running.",
      "Through connected lead sources: if you connect Meta Ads or Google Ads lead forms, or point a website form at your webhook, the lead details those forms capture flow into your CRM.",
    ],
  },
  {
    heading: "How we use it",
    body: [
      "We use your information to:",
      "- respond to demo requests and operate your subscription\n- run the workspace's features, including pipelines, vouchers, payroll and dashboards\n- power AI features you use, such as drafting proposals from a lead's context and placing voice-agent calls\n- secure the service, prevent abuse and fix problems\n- tell you about material changes to the service or these policies",
      "We do not sell your data, and we do not use your business records to advertise to your customers.",
    ],
  },
  {
    heading: "Where your data lives",
    body: [
      "Your business data is stored in the MongoDB Atlas Mumbai region. It stays in India.",
    ],
  },
  {
    heading: "AI features and call recordings",
    body: [
      "When the AI voice agent calls a lead, the conversation's transcript and outcome are saved to that lead's CRM record inside your workspace, so your team can follow up fully briefed. An AI-disclosure toggle lets the agent introduce itself as an AI assistant at the start of every call; enabling it is your choice as the workspace owner.",
    ],
  },
  {
    heading: "Who we share it with",
    body: [
      "We share data only with the service providers needed to run BizvoraOne — such as cloud hosting and the AI and telephony providers behind the voice agent — and only to the extent needed to provide the service. We may disclose information where the law requires it.",
    ],
  },
  {
    heading: "Security",
    body: [
      "Access to the workspace is authenticated and role-scoped: each user sees only what their role permits. Our web and mobile apps talk to the service over a JWT-authenticated REST API. No system is perfectly secure, but limiting who can see what is built into the product's design.",
    ],
  },
  {
    heading: "Retention",
    body: [
      "We keep your business records for as long as your subscription is active. When a subscription ends, we delete or return your data in line with your order terms, keeping only what the law requires us to retain.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "You can ask us to access, correct or delete the personal information we hold about you, in line with applicable Indian data-protection law. Write to us at the address below and we will respond. If you are a lead or employee of one of our customers, we may direct your request to that customer, who controls the workspace your data lives in.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this policy as the service evolves. When we do, we will change the \"last updated\" date on this page and communicate material changes to account holders.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Plain answers about your data: what BizvoraOne collects, why, where it lives, and the rights you have over it. The short version — your data is yours, it stays in India, and we don't sell it."
      updated="2 September 2026"
      sections={SECTIONS}
    />
  );
}
