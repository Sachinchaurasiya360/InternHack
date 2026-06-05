-- CreateTable
CREATE TABLE "applicationStatusHistory" (
    "id" SERIAL NOT NULL,
    "applicationId" INTEGER NOT NULL,
    "fromStatus" "ApplicationStatus" NOT NULL,
    "toStatus" "ApplicationStatus" NOT NULL,
    "changedBy" INTEGER,
    "changedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "applicationStatusHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "applicationStatusHistory_applicationId_idx" ON "applicationStatusHistory"("applicationId");

-- AddForeignKey
ALTER TABLE "applicationStatusHistory" ADD CONSTRAINT "applicationStatusHistory_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "application"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applicationStatusHistory" ADD CONSTRAINT "applicationStatusHistory_changedBy_fkey" FOREIGN KEY ("changedBy") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
