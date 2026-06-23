-- Phase 2: Clean up the dropped array column
DROP INDEX IF EXISTS "programInterest_userId_idx";
ALTER TABLE "user" DROP COLUMN IF EXISTS "trackedPrograms";