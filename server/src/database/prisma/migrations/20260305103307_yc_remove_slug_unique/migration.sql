-- DropForeignKey
ALTER TABLE "adminActivityLog" DROP CONSTRAINT "adminActivityLog_adminId_fkey";

-- DropIndex
DROP INDEX "ycCompany_slug_key";

-- CreateIndex
CREATE INDEX "application_jobId_idx" ON "application"("jobId");

-- CreateIndex
CREATE INDEX "application_studentId_idx" ON "application"("studentId");

-- CreateIndex
CREATE INDEX "job_recruiterId_idx" ON "job"("recruiterId");

-- CreateIndex
CREATE INDEX "job_status_idx" ON "job"("status");

-- CreateIndex
CREATE INDEX "job_status_createdAt_idx" ON "job"("status", "createdAt");

-- CreateIndex
CREATE INDEX "round_jobId_idx" ON "round"("jobId");

-- CreateIndex
CREATE INDEX "user_role_idx" ON "user"("role");

-- CreateIndex
CREATE INDEX "user_role_isActive_idx" ON "user"("role", "isActive");

-- AddForeignKey
ALTER TABLE "adminActivityLog" ADD CONSTRAINT "adminActivityLog_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
