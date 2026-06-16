// Mirror of the UsageAction Prisma enum — keeps this config file free of
// a generated-client import while staying in sync with base.prisma.
export type UsageAction =
  | "ATS_SCORE"
  | "COVER_LETTER"
  | "GENERATE_RESUME"
  | "JOB_APPLICATION"
  | "MOCK_INTERVIEW"
  | "BEHAVIORAL_EVAL"
  | "AI_JOB_CHAT"
  | "CODE_RUN"
  | "GITHUB_STATS"
  | "ROADMAP_GENERATION"
  | "STREAK_TICK";

export type PlanTier = "FREE" | "PREMIUM";

export const DAILY_LIMITS: Record<UsageAction, Record<PlanTier, number>> = {
  ATS_SCORE:       { FREE: 2,  PREMIUM: 20 },
  COVER_LETTER:    { FREE: 2,  PREMIUM: 20 },
  GENERATE_RESUME: { FREE: 1,  PREMIUM: 20 },
  JOB_APPLICATION: { FREE: 10, PREMIUM: 9999 },
  MOCK_INTERVIEW:  { FREE: 0,  PREMIUM: 99 },
  BEHAVIORAL_EVAL: { FREE: 5,  PREMIUM: 999999 },
  AI_JOB_CHAT:     { FREE: 2,  PREMIUM: 50 },
  CODE_RUN:        { FREE: 0,  PREMIUM: 50 },
  GITHUB_STATS:    { FREE: 20, PREMIUM: 9999 },
  ROADMAP_GENERATION: { FREE: 0, PREMIUM: 10 }, // placeholder — actual limits in MONTHLY_LIMITS
  STREAK_TICK: { FREE: 1, PREMIUM: 10 },
};

export function getPlanTier(
  subscriptionPlan: string,
  subscriptionStatus: string,
  subscriptionEndDate?: Date | null,
): PlanTier {
  if (
    (subscriptionPlan === "MONTHLY" || subscriptionPlan === "YEARLY") &&
    subscriptionStatus === "ACTIVE" &&
    (subscriptionEndDate === null || subscriptionEndDate === undefined || subscriptionEndDate > new Date())
  ) {
    return "PREMIUM";
  }
  return "FREE";
}

export const MONTHLY_LIMITS: Partial<Record<UsageAction, Record<PlanTier, number>>> = {
  ATS_SCORE: { FREE: 3, PREMIUM: 20 },
  ROADMAP_GENERATION: { FREE: 5, PREMIUM: 50 },
};
