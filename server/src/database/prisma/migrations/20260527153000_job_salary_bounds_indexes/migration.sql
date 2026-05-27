-- CreateIndex
CREATE INDEX IF NOT EXISTS "job_salaryAnnualMin_idx" ON "job"("salaryAnnualMin");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "job_salaryAnnualMax_idx" ON "job"("salaryAnnualMax");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "job_salaryAnnualMin_salaryAnnualMax_idx" ON "job"("salaryAnnualMin", "salaryAnnualMax");
