-- CreateTable
CREATE TABLE "generatedResume" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL DEFAULT 'Untitled Resume',
    "jobTitle" TEXT,
    "jobDescription" TEXT,
    "keySkills" TEXT,
    "latexContent" TEXT NOT NULL,
    "source" TEXT NOT NULL DEFAULT 'AI_GENERATED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "generatedResume_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "generatedResume_userId_idx" ON "generatedResume"("userId");

-- CreateIndex
CREATE INDEX "generatedResume_createdAt_idx" ON "generatedResume"("createdAt");

-- AddForeignKey
ALTER TABLE "generatedResume" ADD CONSTRAINT "generatedResume_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
