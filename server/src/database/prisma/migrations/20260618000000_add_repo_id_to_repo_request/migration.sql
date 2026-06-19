-- AlterTable
ALTER TABLE "repoRequest" ADD COLUMN "repoId" INTEGER;

-- CreateIndex
CREATE INDEX "repoRequest_repoId_idx" ON "repoRequest"("repoId");

-- AddForeignKey
ALTER TABLE "repoRequest" ADD CONSTRAINT "repoRequest_repoId_fkey" FOREIGN KEY ("repoId") REFERENCES "opensourceRepo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
