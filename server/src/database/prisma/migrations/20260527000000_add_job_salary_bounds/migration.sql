-- AlterTable
ALTER TABLE "job" ADD COLUMN "salaryAnnualMin" INTEGER,
ADD COLUMN "salaryAnnualMax" INTEGER;

-- CreateIndex
CREATE INDEX "job_salaryAnnualMin_idx" ON "job"("salaryAnnualMin");

-- CreateIndex
CREATE INDEX "job_salaryAnnualMax_idx" ON "job"("salaryAnnualMax");

-- CreateIndex
CREATE INDEX "job_salaryAnnualMin_salaryAnnualMax_idx" ON "job"("salaryAnnualMin", "salaryAnnualMax");
