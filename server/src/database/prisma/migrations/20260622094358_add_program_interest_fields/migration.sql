-- Phase 1: Safe Additive Changes Only
--
-- Made fully idempotent so `prisma migrate deploy` is a safe no-op on
-- environments already advanced to this state via `db push` (prod), while
-- still creating everything from scratch on a fresh database.

-- AlterTable (Add new columns safely with defaults)
ALTER TABLE "programInterest"
ADD COLUMN IF NOT EXISTS "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN IF NOT EXISTS "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT NOW();

-- Create New High-Performance Indexes
CREATE INDEX IF NOT EXISTS "programInterest_userId_active_idx" ON "programInterest"("userId", "active");
CREATE INDEX IF NOT EXISTS "programInterest_programId_active_idx" ON "programInterest"("programId", "active");

-- Add ForeignKey Constraint (Postgres has no ADD CONSTRAINT IF NOT EXISTS; guard it)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'programInterest_programId_fkey') THEN
    ALTER TABLE "programInterest" ADD CONSTRAINT "programInterest_programId_fkey" FOREIGN KEY ("programId") REFERENCES "ossProgram"("id") ON DELETE CASCADE ON UPDATE CASCADE;
  END IF;
END $$;

-- (Keep extra indexes Prisma found if they are part of your local environment drift)
CREATE INDEX IF NOT EXISTS "roadmapStudyBuddyPair_roadmapId_active_idx" ON "roadmapStudyBuddyPair"("roadmapId", "active");
CREATE INDEX IF NOT EXISTS "roadmapStudyBuddyPair_roadmapId_active_studentAId_idx" ON "roadmapStudyBuddyPair"("roadmapId", "active", "studentAId");
CREATE INDEX IF NOT EXISTS "roadmapStudyBuddyPair_roadmapId_active_studentBId_idx" ON "roadmapStudyBuddyPair"("roadmapId", "active", "studentBId");
