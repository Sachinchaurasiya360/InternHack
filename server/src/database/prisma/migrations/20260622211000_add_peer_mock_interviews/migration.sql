-- CreateEnum
CREATE TYPE "MockInterviewTopic" AS ENUM ('DSA', 'SYSTEM_DESIGN', 'FRONTEND');

-- CreateEnum
CREATE TYPE "MockInterviewStatus" AS ENUM ('SCHEDULED', 'COMPLETED', 'CANCELLED');

-- CreateTable
CREATE TABLE "peerMockInterviewPreference" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "topic" "MockInterviewTopic" NOT NULL,
    "availability" TEXT[] NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "peerMockInterviewPreference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "peerMockInterview" (
    "id" SERIAL NOT NULL,
    "topic" "MockInterviewTopic" NOT NULL,
    "studentAId" INTEGER,
    "studentBId" INTEGER,
    "assignedProblemId" INTEGER,
    "status" "MockInterviewStatus" NOT NULL DEFAULT 'SCHEDULED',
    "scheduledAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "ratingAForB" INTEGER,
    "ratingBForA" INTEGER,
    "feedbackAForB" TEXT,
    "feedbackBForA" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "peerMockInterview_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "peerMockInterview_no_self_pairing" CHECK ("studentAId" IS NULL OR "studentBId" IS NULL OR "studentAId" <> "studentBId"),
    CONSTRAINT "peerMockInterview_ratingA_range" CHECK ("ratingAForB" IS NULL OR ("ratingAForB" >= 1 AND "ratingAForB" <= 5)),
    CONSTRAINT "peerMockInterview_ratingB_range" CHECK ("ratingBForA" IS NULL OR ("ratingBForA" >= 1 AND "ratingBForA" <= 5)),
    CONSTRAINT "peerMockInterview_completion_timestamp" CHECK ("status" <> 'COMPLETED' OR "completedAt" IS NOT NULL)
);

-- CreateIndex
CREATE UNIQUE INDEX "peerMockInterviewPreference_userId_key" ON "peerMockInterviewPreference"("userId");

-- CreateIndex
CREATE INDEX "peerMockInterview_studentAId_idx" ON "peerMockInterview"("studentAId");

-- CreateIndex
CREATE INDEX "peerMockInterview_studentBId_idx" ON "peerMockInterview"("studentBId");

-- CreateIndex
CREATE INDEX "peerMockInterview_status_idx" ON "peerMockInterview"("status");

-- AddForeignKey
ALTER TABLE "peerMockInterviewPreference" ADD CONSTRAINT "peerMockInterviewPreference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "peerMockInterview" ADD CONSTRAINT "peerMockInterview_studentAId_fkey" FOREIGN KEY ("studentAId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "peerMockInterview" ADD CONSTRAINT "peerMockInterview_studentBId_fkey" FOREIGN KEY ("studentBId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "peerMockInterview" ADD CONSTRAINT "peerMockInterview_assignedProblemId_fkey" FOREIGN KEY ("assignedProblemId") REFERENCES "dsaProblem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
