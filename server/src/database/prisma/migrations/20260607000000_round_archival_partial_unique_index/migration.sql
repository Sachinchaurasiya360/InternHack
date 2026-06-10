-- Drop the broad unique constraint that conflicts with archived rounds.
ALTER TABLE "round" DROP CONSTRAINT IF EXISTS "round_jobId_orderIndex_key";

-- Enforce unique orderIndex values only for active rounds.
CREATE UNIQUE INDEX IF NOT EXISTS "round_jobId_orderIndex_active_idx"
ON "round"("jobId", "orderIndex")
WHERE NOT "isArchived";