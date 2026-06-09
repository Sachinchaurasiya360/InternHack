/*
  Warnings:

  - The primary key for the `userInterviewProgress` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `userInterviewProgress` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `adminActivityLog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "adminActivityLog" DROP CONSTRAINT "adminActivityLog_adminId_fkey";

-- AlterTable
ALTER TABLE "roadmapSection" ADD COLUMN     "aiRegeneratedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "userInterviewProgress" DROP CONSTRAINT "userInterviewProgress_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "userInterviewProgress_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "adminActivityLog";

-- CreateTable
CREATE TABLE "studentFirstPrProgress" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "completedStepIds" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "studentFirstPrProgress_pkey" PRIMARY KEY ("id")
);

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

-- CreateIndex
CREATE UNIQUE INDEX "studentFirstPrProgress_userId_key" ON "studentFirstPrProgress"("userId");

-- CreateIndex
CREATE INDEX "studentFirstPrProgress_userId_idx" ON "studentFirstPrProgress"("userId");

-- CreateIndex
CREATE INDEX "userInterviewProgress_userId_idx" ON "userInterviewProgress"("userId");

-- AddForeignKey
ALTER TABLE "studentFirstPrProgress" ADD CONSTRAINT "studentFirstPrProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dsaProblemReport" ADD CONSTRAINT "dsaProblemReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dsaProblemReport" ADD CONSTRAINT "dsaProblemReport_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "dsaProblem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
