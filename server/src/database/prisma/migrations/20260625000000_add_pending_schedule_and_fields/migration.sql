-- AlterEnum
ALTER TYPE "MockInterviewStatus" ADD VALUE 'PENDING_SCHEDULE';

-- AlterTable
ALTER TABLE "peerMockInterview" ADD COLUMN "sharedAvailability" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[];
ALTER TABLE "peerMockInterview" ADD COLUMN "proposedTime" TIMESTAMP(3);
ALTER TABLE "peerMockInterview" ADD COLUMN "proposedById" INTEGER;
ALTER TABLE "peerMockInterview" ADD COLUMN "schedulingConfirmed" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "peerMockInterview" ADD COLUMN "meetingLink" TEXT;
