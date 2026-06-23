-- Phase 1: Safe Additive Changes Only

-- Create Table
CREATE TABLE "UserInterviewQuestionState" (
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
CREATE INDEX "UserInterviewQuestionState_userId_idx" ON "UserInterviewQuestionState"("userId");
CREATE INDEX "UserInterviewQuestionState_questionId_idx" ON "UserInterviewQuestionState"("questionId");
CREATE INDEX "UserInterviewQuestionState_userId_questionId_isCompleted_idx" ON "UserInterviewQuestionState"("userId", "questionId", "isCompleted");
CREATE INDEX "UserInterviewQuestionState_userId_questionId_isBookmarked_idx" ON "UserInterviewQuestionState"("userId", "questionId", "isBookmarked");
CREATE UNIQUE INDEX "UserInterviewQuestionState_userId_questionId_key" ON "UserInterviewQuestionState"("userId", "questionId");

-- Sync tracking indexes found from environment drift
CREATE INDEX IF NOT EXISTS "roadmapStudyBuddyPair_roadmapId_active_idx" ON "roadmapStudyBuddyPair"("roadmapId", "active");
CREATE INDEX IF NOT EXISTS "roadmapStudyBuddyPair_roadmapId_active_studentAId_idx" ON "roadmapStudyBuddyPair"("roadmapId", "active", "studentAId");
CREATE INDEX IF NOT EXISTS "roadmapStudyBuddyPair_roadmapId_active_studentBId_idx" ON "roadmapStudyBuddyPair"("roadmapId", "active", "studentBId");

-- Add ForeignKey
ALTER TABLE "UserInterviewQuestionState" ADD CONSTRAINT "UserInterviewQuestionState_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;