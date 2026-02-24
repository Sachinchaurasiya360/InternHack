/*
  Warnings:

  - You are about to drop the column `resume` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "resume",
ADD COLUMN     "resumes" TEXT[] DEFAULT ARRAY[]::TEXT[];
