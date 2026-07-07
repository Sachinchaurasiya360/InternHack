-- AlterTable
ALTER TABLE "peerMockInterviewPreference" ADD COLUMN     "targetRole" TEXT,
ADD COLUMN     "experienceLevel" TEXT,
ADD COLUMN     "focusAreas" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- CreateEnum
CREATE TYPE "ExpertSessionStatus" AS ENUM ('PENDING_PAYMENT', 'SCHEDULED', 'COMPLETED', 'CANCELLED');

-- CreateTable
CREATE TABLE "expertAvailabilityBlock" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "startTime" TEXT,
    "endTime" TEXT,
    "reason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "expertAvailabilityBlock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expertSession" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" "ExpertSessionStatus" NOT NULL DEFAULT 'PENDING_PAYMENT',
    "scheduledAt" TIMESTAMP(3) NOT NULL,
    "targetRole" TEXT,
    "experienceLevel" TEXT,
    "focusAreas" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "notes" TEXT,
    "meetingLink" TEXT,
    "dodoCheckoutUrl" TEXT,
    "dodoPaymentId" TEXT,
    "amount" INTEGER NOT NULL DEFAULT 4900,
    "currency" TEXT NOT NULL DEFAULT 'INR',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "expertSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "expertAvailabilityBlock_date_idx" ON "expertAvailabilityBlock"("date");

-- CreateIndex
CREATE UNIQUE INDEX "expertSession_dodoPaymentId_key" ON "expertSession"("dodoPaymentId");

-- CreateIndex
CREATE INDEX "expertSession_userId_idx" ON "expertSession"("userId");

-- CreateIndex
CREATE INDEX "expertSession_status_idx" ON "expertSession"("status");

-- CreateIndex
CREATE INDEX "expertSession_scheduledAt_idx" ON "expertSession"("scheduledAt");

-- CreateIndex
CREATE INDEX "expertSession_dodoPaymentId_idx" ON "expertSession"("dodoPaymentId");

-- AddForeignKey
ALTER TABLE "expertSession" ADD CONSTRAINT "expertSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
