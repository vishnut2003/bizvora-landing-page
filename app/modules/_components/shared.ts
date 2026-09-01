import type { ComponentType, SVGProps } from "react";
import {
  AccountingRecoveryArt,
  AiProposalsArt,
  CrmPipelineArt,
} from "@/app/(home)/_components/features/feature-art";
import {
  PayrollPayslipArt,
  ProjectMilestonesArt,
  QuotationBuilderArt,
  VoiceAgentArt,
} from "./module-art";

/** Shared recipes for the /modules overview and /modules/<slug> pages. */

export type Art = ComponentType<SVGProps<SVGSVGElement>>;

/** Animated artwork per module slug — three reused from home, four new. */
export const ARTS: Record<string, Art> = {
  crm: CrmPipelineArt,
  "ai-proposals": AiProposalsArt,
  quotations: QuotationBuilderArt,
  "accounting-recovery": AccountingRecoveryArt,
  projects: ProjectMilestonesArt,
  "hr-payroll": PayrollPayslipArt,
  "ai-voice-agent": VoiceAgentArt,
};

/** Same gradient-card recipe as the home Features cards (not exported there). */
export const CARD_CLASSES =
  "group rounded-[16px] border border-primary/10 bg-gradient-to-b from-[#FBF9FF] to-[#F3EDFC] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_24px_48px_-24px_rgba(69,6,147,0.28)]";

export const GHOST_BUTTON_CLASSES =
  "inline-flex h-[58px] w-[212px] items-center justify-center rounded-[40px] border border-ink/10 bg-white/70 text-[14px] leading-[1.6] font-medium text-ink backdrop-blur-sm transition-colors duration-200 hover:border-primary/40 hover:bg-primary-10";

export const JUMP_CHIP_CLASSES =
  "inline-flex items-center gap-2 rounded-[32px] border border-ink/10 bg-white/70 px-4 py-2 text-[13px] leading-[1.6] tracking-[-0.02em] text-ink-70 backdrop-blur-sm transition-colors duration-200 hover:border-primary/40 hover:bg-primary-10 hover:text-ink";
