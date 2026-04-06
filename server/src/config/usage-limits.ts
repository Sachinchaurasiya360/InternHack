import type { UsageAction } from "@prisma/client";

export type PlanTier = "FREE" | "PREMIUM";

export const DAILY_LIMITS: Record<UsageAction, Record<PlanTier, number>> = {
  ATS_SCORE:       { FREE: 2,  PREMIUM: 20 },
  COVER_LETTER:    { FREE: 2,  PREMIUM: 20 },
  GENERATE_RESUME: { FREE: 1,  PREMIUM: 20 },
  JOB_APPLICATION: { FREE: 10, PREMIUM: 999999 },
  MOCK_INTERVIEW:  { FREE: 0,  PREMIUM: 999999 },
  AI_JOB_CHAT:     { FREE: 2,  PREMIUM: 50 },
  CODE_RUN:        { FREE: 0,  PREMIUM: 50 },
};

export function getPlanTier(
  subscriptionPlan: string,
  subscriptionStatus: string,
  subscriptionEndDate?: Date | null,
): PlanTier {
  if (
    (subscriptionPlan === "MONTHLY" || subscriptionPlan === "YEARLY") &&
    subscriptionStatus === "ACTIVE" &&
    subscriptionEndDate != null &&
    subscriptionEndDate > new Date()
  ) {
    return "PREMIUM";
  }
  return "FREE";
}
