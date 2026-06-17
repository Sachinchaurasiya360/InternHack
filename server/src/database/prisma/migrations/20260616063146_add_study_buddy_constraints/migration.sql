-- AlterEnum
ALTER TYPE "AIServiceType" ADD VALUE 'DSA_CODE_REVIEW';

-- AlterEnum
ALTER TYPE "UsageAction" ADD VALUE 'STREAK_TICK';

-- DropIndex
DROP INDEX "opensourceRepo_healthScore_idx";

-- DropIndex
DROP INDEX "opensourceStreak_userId_idx";

-- DropIndex
DROP INDEX "round_jobId_orderIndex_active_idx";

-- DropIndex
DROP INDEX "round_jobId_orderIndex_key";

-- DropIndex
DROP INDEX "savedCandidate_recruiterId_idx";

-- DropIndex
DROP INDEX "user_passwordResetLockedUntil_idx";

-- AlterTable
ALTER TABLE "opensourceRepo" ADD COLUMN     "githubStatsUpdatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "roadmap" ADD COLUMN     "isPubliclyShared" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "roadmapEnrollment" ADD COLUMN     "bestStreak" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "currentStreak" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "lastStreakDate" TIMESTAMP(3),
ADD COLUMN     "lastWeeklyStreakAt" TIMESTAMP(3),
ADD COLUMN     "weeklyStreak" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "ossTier" TEXT,
ADD COLUMN     "verificationAttempts" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "verificationLockedUntil" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "dsaProblemLabel" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "problemId" INTEGER NOT NULL,
    "label" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dsaProblemLabel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roadmapStudyBuddyPreference" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "roadmapId" INTEGER NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "preferSameCollege" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roadmapStudyBuddyPreference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roadmapStudyBuddyPair" (
    "id" SERIAL NOT NULL,
    "roadmapId" INTEGER NOT NULL,
    "studentAId" INTEGER NOT NULL,
    "studentBId" INTEGER NOT NULL,
    "matchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roadmapStudyBuddyPair_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "dsaProblemLabel_userId_idx" ON "dsaProblemLabel"("userId");

-- CreateIndex
CREATE INDEX "dsaProblemLabel_problemId_idx" ON "dsaProblemLabel"("problemId");

-- CreateIndex
CREATE UNIQUE INDEX "dsaProblemLabel_userId_problemId_label_key" ON "dsaProblemLabel"("userId", "problemId", "label");

-- CreateIndex
CREATE INDEX "roadmapStudyBuddyPreference_userId_idx" ON "roadmapStudyBuddyPreference"("userId");

-- CreateIndex
CREATE INDEX "roadmapStudyBuddyPreference_roadmapId_idx" ON "roadmapStudyBuddyPreference"("roadmapId");

-- CreateIndex
CREATE UNIQUE INDEX "roadmapStudyBuddyPreference_userId_roadmapId_key" ON "roadmapStudyBuddyPreference"("userId", "roadmapId");

-- CreateIndex
CREATE INDEX "roadmapStudyBuddyPair_roadmapId_idx" ON "roadmapStudyBuddyPair"("roadmapId");

-- CreateIndex
CREATE INDEX "roadmapStudyBuddyPair_studentAId_idx" ON "roadmapStudyBuddyPair"("studentAId");

-- CreateIndex
CREATE INDEX "roadmapStudyBuddyPair_studentBId_idx" ON "roadmapStudyBuddyPair"("studentBId");

-- CreateIndex
CREATE UNIQUE INDEX "unique_active_pair_student_a" ON "roadmapStudyBuddyPair"("roadmapId", "studentAId") WHERE ("active" = true);

-- CreateIndex
CREATE UNIQUE INDEX "unique_active_pair_student_b" ON "roadmapStudyBuddyPair"("roadmapId", "studentBId") WHERE ("active" = true);

-- CreateIndex
CREATE INDEX "guideCertificate_userId_idx" ON "guideCertificate"("userId");

-- CreateIndex
CREATE INDEX "guideCertificate_token_idx" ON "guideCertificate"("token");

-- CreateIndex
CREATE INDEX "opensourceBookmark_userId_idx" ON "opensourceBookmark"("userId");

-- CreateIndex
CREATE INDEX "savedCandidate_recruiterId_studentId_idx" ON "savedCandidate"("recruiterId", "studentId");

-- AddForeignKey
ALTER TABLE "dsaProblemLabel" ADD CONSTRAINT "dsaProblemLabel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dsaProblemLabel" ADD CONSTRAINT "dsaProblemLabel_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "dsaProblem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roadmapStudyBuddyPreference" ADD CONSTRAINT "roadmapStudyBuddyPreference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roadmapStudyBuddyPreference" ADD CONSTRAINT "roadmapStudyBuddyPreference_roadmapId_fkey" FOREIGN KEY ("roadmapId") REFERENCES "roadmap"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roadmapStudyBuddyPair" ADD CONSTRAINT "roadmapStudyBuddyPair_roadmapId_fkey" FOREIGN KEY ("roadmapId") REFERENCES "roadmap"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roadmapStudyBuddyPair" ADD CONSTRAINT "roadmapStudyBuddyPair_studentAId_fkey" FOREIGN KEY ("studentAId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roadmapStudyBuddyPair" ADD CONSTRAINT "roadmapStudyBuddyPair_studentBId_fkey" FOREIGN KEY ("studentBId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Add check constraint to prevent self-pairing
ALTER TABLE "roadmapStudyBuddyPair" ADD CONSTRAINT "check_not_self_pair" CHECK ("studentAId" <> "studentBId");
