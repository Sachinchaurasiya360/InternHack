-- AlterTable
ALTER TABLE "user" ADD COLUMN "verificationAttempts" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN "verificationLockedUntil" TIMESTAMP(3);
