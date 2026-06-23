-- Phase 1: Safe Additive Changes Only

-- AlterTable (Add new columns safely with defaults)
ALTER TABLE "programInterest" 
ADD COLUMN "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT NOW();

-- Create New High-Performance Indexes
CREATE INDEX "programInterest_userId_active_idx" ON "programInterest"("userId", "active");
CREATE INDEX "programInterest_programId_active_idx" ON "programInterest"("programId", "active");

-- Add ForeignKey Constraint
ALTER TABLE "programInterest" ADD CONSTRAINT "programInterest_programId_fkey" FOREIGN KEY ("programId") REFERENCES "ossProgram"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- (Keep extra indexes Prisma found if they are part of your local environment drift)
CREATE INDEX IF NOT EXISTS "roadmapStudyBuddyPair_roadmapId_active_idx" ON "roadmapStudyBuddyPair"("roadmapId", "active");
CREATE INDEX IF NOT EXISTS "roadmapStudyBuddyPair_roadmapId_active_studentAId_idx" ON "roadmapStudyBuddyPair"("roadmapId", "active", "studentAId");
CREATE INDEX IF NOT EXISTS "roadmapStudyBuddyPair_roadmapId_active_studentBId_idx" ON "roadmapStudyBuddyPair"("roadmapId", "active", "studentBId");