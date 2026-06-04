/*
  Warnings:

  - You are about to drop the column `githubStatsUpdatedAt` on the `opensourceRepo` table. All the data in the column will be lost.
  - The primary key for the `userInterviewProgress` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `userInterviewProgress` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `adminActivityLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `aiRequestLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `aiServiceConfig` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ContentType" AS ENUM ('LESSON', 'DSA', 'INTERVIEW_QUESTION');

-- DropForeignKey
ALTER TABLE "adminActivityLog" DROP CONSTRAINT "adminActivityLog_adminId_fkey";

-- DropForeignKey
ALTER TABLE "aiRequestLog" DROP CONSTRAINT "aiRequestLog_serviceConfigId_fkey";

-- AlterTable
ALTER TABLE "opensourceRepo" DROP COLUMN "githubStatsUpdatedAt";

-- AlterTable
ALTER TABLE "roadmapSection" ADD COLUMN     "aiRegeneratedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "userInterviewProgress" DROP CONSTRAINT "userInterviewProgress_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "userInterviewProgress_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "adminActivityLog";

-- DropTable
DROP TABLE "aiRequestLog";

-- DropTable
DROP TABLE "aiServiceConfig";

-- DropEnum
DROP TYPE "AIProviderType";

-- DropEnum
DROP TYPE "AIServiceType";

-- CreateTable
CREATE TABLE "dsaProblemReport" (
    "id" SERIAL NOT NULL,
    "reason" TEXT NOT NULL,
    "message" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "problemId" INTEGER NOT NULL,

    CONSTRAINT "dsaProblemReport_pkey" PRIMARY KEY ("id")
);

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

-- CreateIndex
CREATE INDEX "userInterviewProgress_userId_idx" ON "userInterviewProgress"("userId");

-- AddForeignKey
ALTER TABLE "dsaProblemReport" ADD CONSTRAINT "dsaProblemReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dsaProblemReport" ADD CONSTRAINT "dsaProblemReport_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "dsaProblem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contentView" ADD CONSTRAINT "contentView_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
