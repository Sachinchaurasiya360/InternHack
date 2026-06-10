-- AlterTable
ALTER TABLE "opensourceRepo" ADD COLUMN "healthScore" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE INDEX "opensourceRepo_healthScore_idx" ON "opensourceRepo"("healthScore");
