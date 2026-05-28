-- CreateEnum
CREATE TYPE "ActivityType" AS ENUM ('APPLICATION_SUBMITTED', 'APPLICATION_STATUS_UPDATED', 'MOCK_INTERVIEW_COMPLETED', 'SKILL_VERIFIED', 'BADGE_EARNED', 'ROADMAP_ENROLLED', 'COURSE_COMPLETED');

-- CreateTable
CREATE TABLE "activityLog" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "type" "ActivityType" NOT NULL,
    "metadata" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "activityLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "activityLog_userId_createdAt_idx" ON "activityLog"("userId", "createdAt");

-- AddForeignKey
ALTER TABLE "activityLog" ADD CONSTRAINT "activityLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
