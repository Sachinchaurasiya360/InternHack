-- Remove the open-source streak feature (StreakFlame widget, /opensource/streak,
-- /opensource/streak/tick). No usageLog rows reference STREAK_TICK, so the enum
-- value can be dropped without a data migration.
DROP TABLE IF EXISTS "opensourceStreak" CASCADE;

ALTER TYPE "UsageAction" RENAME TO "UsageAction_old";
CREATE TYPE "UsageAction" AS ENUM (
  'ATS_SCORE',
  'COVER_LETTER',
  'GENERATE_RESUME',
  'JOB_APPLICATION',
  'MOCK_INTERVIEW',
  'AI_JOB_CHAT',
  'CODE_RUN',
  'GITHUB_STATS',
  'ROADMAP_GENERATION',
  'BEHAVIORAL_EVAL'
);
ALTER TABLE "usageLog"
  ALTER COLUMN "action" TYPE "UsageAction"
  USING ("action"::text::"UsageAction");
DROP TYPE "UsageAction_old";
