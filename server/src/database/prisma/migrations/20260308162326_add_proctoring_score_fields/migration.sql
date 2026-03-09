-- AlterTable
ALTER TABLE "skillTestAttempt" ADD COLUMN     "autoTerminated" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "proctoringScore" INTEGER;
