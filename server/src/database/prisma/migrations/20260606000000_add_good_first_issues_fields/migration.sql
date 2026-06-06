-- AlterTable
ALTER TABLE "opensourceRepo" ADD COLUMN "goodFirstIssuesCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN "goodFirstIssuesUpdatedAt" TIMESTAMP(3);

-- CreateIndex
CREATE INDEX "opensourceRepo_goodFirstIssuesCount_idx" ON "opensourceRepo"("goodFirstIssuesCount");
