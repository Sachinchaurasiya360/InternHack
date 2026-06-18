-- CreateEnum
CREATE TYPE "NoteContentType" AS ENUM ('DSA_PROBLEM', 'ROADMAP_TOPIC', 'INTERVIEW_QUESTION', 'APTITUDE_QUESTION');

-- CreateTable
CREATE TABLE "studentNote" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "contentType" "NoteContentType" NOT NULL,
    "contentId" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "studentNote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "studentNote_userId_contentType_contentId_key" ON "studentNote"("userId", "contentType", "contentId");

-- CreateIndex
CREATE INDEX "studentNote_userId_idx" ON "studentNote"("userId");

-- CreateIndex
CREATE INDEX "studentNote_contentType_contentId_idx" ON "studentNote"("contentType", "contentId");

-- CreateIndex
CREATE INDEX "studentNote_userId_updatedAt_idx" ON "studentNote"("userId", "updatedAt");

-- AddForeignKey
ALTER TABLE "studentNote" ADD CONSTRAINT "studentNote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
