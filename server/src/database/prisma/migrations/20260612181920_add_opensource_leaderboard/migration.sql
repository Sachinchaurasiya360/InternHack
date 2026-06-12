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
CREATE TABLE "opensourceLeaderboard" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "totalScore" INTEGER NOT NULL DEFAULT 0,
    "weeklyScore" INTEGER NOT NULL DEFAULT 0,
    "monthlyScore" INTEGER NOT NULL DEFAULT 0,
    "guidesCompleted" INTEGER NOT NULL DEFAULT 0,
    "reposSuggestedApproved" INTEGER NOT NULL DEFAULT 0,
    "reposSuggestedPending" INTEGER NOT NULL DEFAULT 0,
    "githubPRsMerged" INTEGER NOT NULL DEFAULT 0,
    "currentStreak" INTEGER NOT NULL DEFAULT 0,
    "longestStreak" INTEGER NOT NULL DEFAULT 0,
    "lastActivityDate" TIMESTAMP(3),
    "certificatesEarned" INTEGER NOT NULL DEFAULT 0,
    "globalRank" INTEGER,
    "weeklyRank" INTEGER,
    "monthlyRank" INTEGER,
    "universityRank" INTEGER,
    "domainRank" JSONB NOT NULL DEFAULT '{}',
    "isPublic" BOOLEAN NOT NULL DEFAULT true,
    "showRealName" BOOLEAN NOT NULL DEFAULT true,
    "lastScoreUpdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastRankUpdate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "opensourceLeaderboard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "opensourceLeaderboard_userId_key" ON "opensourceLeaderboard"("userId");

-- CreateIndex
CREATE INDEX "opensourceLeaderboard_totalScore_idx" ON "opensourceLeaderboard"("totalScore");

-- CreateIndex
CREATE INDEX "opensourceLeaderboard_weeklyScore_idx" ON "opensourceLeaderboard"("weeklyScore");

-- CreateIndex
CREATE INDEX "opensourceLeaderboard_monthlyScore_idx" ON "opensourceLeaderboard"("monthlyScore");

-- CreateIndex
CREATE INDEX "opensourceLeaderboard_globalRank_idx" ON "opensourceLeaderboard"("globalRank");

-- CreateIndex
CREATE INDEX "opensourceLeaderboard_lastActivityDate_idx" ON "opensourceLeaderboard"("lastActivityDate");

-- CreateIndex
CREATE INDEX "opensourceLeaderboard_userId_idx" ON "opensourceLeaderboard"("userId");

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
ALTER TABLE "opensourceLeaderboard" ADD CONSTRAINT "opensourceLeaderboard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
