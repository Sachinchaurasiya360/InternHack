/*
  Warnings:

  - A unique constraint covering the columns `[jobId,name]` on the table `round` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
ALTER TYPE "AIServiceType" ADD VALUE 'DSA_CODE_REVIEW';

-- AlterEnum
ALTER TYPE "UsageAction" ADD VALUE 'STREAK_TICK';

-- DropIndex
DROP INDEX "opensourceRepo_healthScore_idx";

-- DropIndex
DROP INDEX "opensourceStreak_userId_idx";

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
CREATE TABLE "githubConnection" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "githubUsername" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "connectedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSyncAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "prsMerged" INTEGER NOT NULL DEFAULT 0,
    "reposContributed" INTEGER NOT NULL DEFAULT 0,
    "publicRepos" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "githubConnection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "dsaProblemLabel_userId_idx" ON "dsaProblemLabel"("userId");

-- CreateIndex
CREATE INDEX "dsaProblemLabel_problemId_idx" ON "dsaProblemLabel"("problemId");

-- CreateIndex
CREATE UNIQUE INDEX "dsaProblemLabel_userId_problemId_label_key" ON "dsaProblemLabel"("userId", "problemId", "label");

-- CreateIndex
CREATE UNIQUE INDEX "githubConnection_userId_key" ON "githubConnection"("userId");

-- CreateIndex
CREATE INDEX "githubConnection_userId_idx" ON "githubConnection"("userId");

-- CreateIndex
CREATE INDEX "guideCertificate_userId_idx" ON "guideCertificate"("userId");

-- CreateIndex
CREATE INDEX "guideCertificate_token_idx" ON "guideCertificate"("token");

-- CreateIndex
CREATE INDEX "opensourceBookmark_userId_idx" ON "opensourceBookmark"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "round_jobId_name_key" ON "round"("jobId", "name");

-- CreateIndex
CREATE INDEX "savedCandidate_recruiterId_studentId_idx" ON "savedCandidate"("recruiterId", "studentId");

-- AddForeignKey
ALTER TABLE "dsaProblemLabel" ADD CONSTRAINT "dsaProblemLabel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dsaProblemLabel" ADD CONSTRAINT "dsaProblemLabel_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "dsaProblem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "githubConnection" ADD CONSTRAINT "githubConnection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
