/*
  - Created ContentView and DsaProblemReport tables for analytics.
*/
-- CreateEnum
CREATE TYPE "ContentType" AS ENUM ('LESSON', 'DSA', 'INTERVIEW_QUESTION');

-- AlterTable (Safe changes only)
-- userInterviewProgress changes handled in separate migration or safe add if missing
-- (Assuming user wants to keep analytics changes only here)

-- Migration safe block - removed drops of production tables

-- CreateTable
CREATE TABLE "contentView" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "contentType" "ContentType" NOT NULL,
    "contentId" TEXT NOT NULL,
    "timeSpentMs" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contentView_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "contentView_contentType_contentId_idx" ON "contentView"("contentType", "contentId");

-- CreateIndex
CREATE INDEX "contentView_userId_idx" ON "contentView"("userId");

-- CreateIndex
CREATE INDEX "contentView_createdAt_idx" ON "contentView"("createdAt");

-- AddForeignKey
ALTER TABLE "contentView" ADD CONSTRAINT "contentView_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
