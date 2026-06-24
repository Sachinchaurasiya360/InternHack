-- Phase 1: Safe Additive Changes Only
--
-- Made fully idempotent so `prisma migrate deploy` is a safe no-op on
-- environments already advanced to this state via `db push` (prod), while
-- still creating everything from scratch on a fresh database.

-- Create Table
CREATE TABLE IF NOT EXISTS "UserInterviewQuestionState" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "questionId" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "isBookmarked" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT NOW(), -- Added default safe fallback

    CONSTRAINT "UserInterviewQuestionState_pkey" PRIMARY KEY ("id")
);

-- Create Indexes
CREATE INDEX IF NOT EXISTS "UserInterviewQuestionState_userId_idx" ON "UserInterviewQuestionState"("userId");
CREATE INDEX IF NOT EXISTS "UserInterviewQuestionState_questionId_idx" ON "UserInterviewQuestionState"("questionId");
CREATE INDEX IF NOT EXISTS "UserInterviewQuestionState_userId_questionId_isCompleted_idx" ON "UserInterviewQuestionState"("userId", "questionId", "isCompleted");
CREATE INDEX IF NOT EXISTS "UserInterviewQuestionState_userId_questionId_isBookmarked_idx" ON "UserInterviewQuestionState"("userId", "questionId", "isBookmarked");
CREATE UNIQUE INDEX IF NOT EXISTS "UserInterviewQuestionState_userId_questionId_key" ON "UserInterviewQuestionState"("userId", "questionId");

-- Sync tracking indexes found from environment drift
CREATE INDEX IF NOT EXISTS "roadmapStudyBuddyPair_roadmapId_active_idx" ON "roadmapStudyBuddyPair"("roadmapId", "active");
CREATE INDEX IF NOT EXISTS "roadmapStudyBuddyPair_roadmapId_active_studentAId_idx" ON "roadmapStudyBuddyPair"("roadmapId", "active", "studentAId");
CREATE INDEX IF NOT EXISTS "roadmapStudyBuddyPair_roadmapId_active_studentBId_idx" ON "roadmapStudyBuddyPair"("roadmapId", "active", "studentBId");

-- Add ForeignKey (Postgres has no ADD CONSTRAINT IF NOT EXISTS; guard it)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'UserInterviewQuestionState_userId_fkey') THEN
    ALTER TABLE "UserInterviewQuestionState" ADD CONSTRAINT "UserInterviewQuestionState_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
  END IF;
END $$;
