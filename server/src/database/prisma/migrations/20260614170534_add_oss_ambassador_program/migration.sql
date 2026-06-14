/*
  Warnings:

  - A unique constraint covering the columns `[jobId,name]` on the table `round` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "AmbassadorStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "ShareStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

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
CREATE TABLE "ambassador" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" "AmbassadorStatus" NOT NULL DEFAULT 'PENDING',
    "guidesCompleted" INTEGER NOT NULL DEFAULT 0,
    "reposContributed" INTEGER NOT NULL DEFAULT 0,
    "leaderboardRank" INTEGER,
    "accountAgeDays" INTEGER NOT NULL DEFAULT 0,
    "premiumGranted" BOOLEAN NOT NULL DEFAULT false,
    "premiumGrantedAt" TIMESTAMP(3),
    "appliedAt" TIMESTAMP(3),
    "reviewedAt" TIMESTAMP(3),
    "reviewedBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ambassador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "referralLink" (
    "id" TEXT NOT NULL,
    "ambassadorId" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "label" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "referralLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "referralConversion" (
    "id" SERIAL NOT NULL,
    "referralLinkId" TEXT NOT NULL,
    "referredUserId" INTEGER NOT NULL,
    "referredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "referralConversion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ambassadorSpotlight" (
    "id" SERIAL NOT NULL,
    "ambassadorId" INTEGER NOT NULL,
    "month" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ambassadorSpotlight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ambassadorShare" (
    "id" SERIAL NOT NULL,
    "ambassadorId" INTEGER NOT NULL,
    "platform" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT,
    "status" "ShareStatus" NOT NULL DEFAULT 'PENDING',
    "adminNotes" TEXT,
    "reviewedAt" TIMESTAMP(3),
    "reviewedBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ambassadorShare_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "dsaProblemLabel_userId_idx" ON "dsaProblemLabel"("userId");

-- CreateIndex
CREATE INDEX "dsaProblemLabel_problemId_idx" ON "dsaProblemLabel"("problemId");

-- CreateIndex
CREATE UNIQUE INDEX "dsaProblemLabel_userId_problemId_label_key" ON "dsaProblemLabel"("userId", "problemId", "label");

-- CreateIndex
CREATE UNIQUE INDEX "ambassador_userId_key" ON "ambassador"("userId");

-- CreateIndex
CREATE INDEX "ambassador_status_idx" ON "ambassador"("status");

-- CreateIndex
CREATE INDEX "ambassador_userId_idx" ON "ambassador"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "referralLink_code_key" ON "referralLink"("code");

-- CreateIndex
CREATE INDEX "referralLink_ambassadorId_idx" ON "referralLink"("ambassadorId");

-- CreateIndex
CREATE INDEX "referralLink_code_idx" ON "referralLink"("code");

-- CreateIndex
CREATE UNIQUE INDEX "referralConversion_referredUserId_key" ON "referralConversion"("referredUserId");

-- CreateIndex
CREATE INDEX "referralConversion_referralLinkId_idx" ON "referralConversion"("referralLinkId");

-- CreateIndex
CREATE INDEX "referralConversion_referredUserId_idx" ON "referralConversion"("referredUserId");

-- CreateIndex
CREATE INDEX "ambassadorSpotlight_month_year_isActive_idx" ON "ambassadorSpotlight"("month", "year", "isActive");

-- CreateIndex
CREATE UNIQUE INDEX "ambassadorSpotlight_ambassadorId_month_year_key" ON "ambassadorSpotlight"("ambassadorId", "month", "year");

-- CreateIndex
CREATE INDEX "ambassadorShare_ambassadorId_idx" ON "ambassadorShare"("ambassadorId");

-- CreateIndex
CREATE INDEX "ambassadorShare_status_idx" ON "ambassadorShare"("status");

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
ALTER TABLE "ambassador" ADD CONSTRAINT "ambassador_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ambassador" ADD CONSTRAINT "ambassador_reviewedBy_fkey" FOREIGN KEY ("reviewedBy") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "referralLink" ADD CONSTRAINT "referralLink_ambassadorId_fkey" FOREIGN KEY ("ambassadorId") REFERENCES "ambassador"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "referralConversion" ADD CONSTRAINT "referralConversion_referralLinkId_fkey" FOREIGN KEY ("referralLinkId") REFERENCES "referralLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "referralConversion" ADD CONSTRAINT "referralConversion_referredUserId_fkey" FOREIGN KEY ("referredUserId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ambassadorSpotlight" ADD CONSTRAINT "ambassadorSpotlight_ambassadorId_fkey" FOREIGN KEY ("ambassadorId") REFERENCES "ambassador"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ambassadorShare" ADD CONSTRAINT "ambassadorShare_ambassadorId_fkey" FOREIGN KEY ("ambassadorId") REFERENCES "ambassador"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ambassadorShare" ADD CONSTRAINT "ambassadorShare_reviewedBy_fkey" FOREIGN KEY ("reviewedBy") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
