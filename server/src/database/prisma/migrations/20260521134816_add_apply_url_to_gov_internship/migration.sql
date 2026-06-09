-- AlterEnum
ALTER TYPE "AIServiceType" ADD VALUE 'AI_ROADMAP_GENERATION';

-- AlterTable
ALTER TABLE "govInternship" ADD COLUMN     "applyUrl" TEXT;

-- CreateTable
CREATE TABLE "generatedCoverLetter" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "jobTitle" TEXT,
    "companyName" TEXT,
    "jobDescription" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "tone" TEXT NOT NULL,
    "useProfile" BOOLEAN NOT NULL DEFAULT false,
    "keySkills" TEXT,
    "excerpt" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "generatedCoverLetter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leetcodeImportLog" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "username" TEXT,
    "source" TEXT NOT NULL DEFAULT 'LEETCODE_USERNAME',
    "matched" INTEGER NOT NULL DEFAULT 0,
    "imported" INTEGER NOT NULL DEFAULT 0,
    "importedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "leetcodeImportLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "generatedCoverLetter_studentId_idx" ON "generatedCoverLetter"("studentId");

-- CreateIndex
CREATE INDEX "generatedCoverLetter_createdAt_idx" ON "generatedCoverLetter"("createdAt");

-- CreateIndex
CREATE INDEX "leetcodeImportLog_userId_idx" ON "leetcodeImportLog"("userId");

-- CreateIndex
CREATE INDEX "leetcodeImportLog_importedAt_idx" ON "leetcodeImportLog"("importedAt");

-- AddForeignKey
ALTER TABLE "generatedCoverLetter" ADD CONSTRAINT "generatedCoverLetter_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leetcodeImportLog" ADD CONSTRAINT "leetcodeImportLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
