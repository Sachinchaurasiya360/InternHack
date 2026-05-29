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

-- CreateIndex
CREATE INDEX "userInterviewProgress_userId_idx" ON "userInterviewProgress"("userId");
