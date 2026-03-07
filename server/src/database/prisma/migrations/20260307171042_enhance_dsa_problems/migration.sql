-- AlterTable
ALTER TABLE "dsaProblem" ADD COLUMN     "codechefUrl" TEXT,
ADD COLUMN     "companies" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "hackerrankUrl" TEXT,
ADD COLUMN     "hints" TEXT,
ADD COLUMN     "sheets" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "tags" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- CreateTable
CREATE TABLE "dsaBookmark" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "problemId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dsaBookmark_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "dsaBookmark_studentId_idx" ON "dsaBookmark"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "dsaBookmark_studentId_problemId_key" ON "dsaBookmark"("studentId", "problemId");

-- AddForeignKey
ALTER TABLE "dsaBookmark" ADD CONSTRAINT "dsaBookmark_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dsaBookmark" ADD CONSTRAINT "dsaBookmark_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "dsaProblem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
