-- CreateEnum
CREATE TYPE "AmbassadorStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "ShareStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateTable
CREATE TABLE "ambassador" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" "AmbassadorStatus" NOT NULL DEFAULT 'PENDING',
    "guidesCompleted" INTEGER NOT NULL DEFAULT 0,
    "reposContributed" INTEGER NOT NULL DEFAULT 0,
    "leaderboardRank" INTEGER,
    "accountAgeDays" INTEGER NOT NULL DEFAULT 0,
    "premiumGranted" BOOLEAN NOT NULL DEFAULT false,
    "premiumGrantedAt" TIMESTAMP(3),
    "appliedAt" TIMESTAMP(3),
    "reviewedAt" TIMESTAMP(3),
    "reviewedBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ambassador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "referralLink" (
    "id" TEXT NOT NULL,
    "ambassadorId" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "label" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "referralLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "referralConversion" (
    "id" SERIAL NOT NULL,
    "referralLinkId" TEXT NOT NULL,
    "referredUserId" INTEGER NOT NULL,
    "referredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "referralConversion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ambassadorSpotlight" (
    "id" SERIAL NOT NULL,
    "ambassadorId" INTEGER NOT NULL,
    "month" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ambassadorSpotlight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ambassadorShare" (
    "id" SERIAL NOT NULL,
    "ambassadorId" INTEGER NOT NULL,
    "platform" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT,
    "status" "ShareStatus" NOT NULL DEFAULT 'PENDING',
    "adminNotes" TEXT,
    "reviewedAt" TIMESTAMP(3),
    "reviewedBy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ambassadorShare_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ambassador_userId_key" ON "ambassador"("userId");

-- CreateIndex
CREATE INDEX "ambassador_status_idx" ON "ambassador"("status");

-- CreateIndex
CREATE INDEX "ambassador_userId_idx" ON "ambassador"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "referralLink_code_key" ON "referralLink"("code");

-- CreateIndex
CREATE INDEX "referralLink_ambassadorId_idx" ON "referralLink"("ambassadorId");

-- CreateIndex
CREATE INDEX "referralLink_code_idx" ON "referralLink"("code");

-- CreateIndex
CREATE UNIQUE INDEX "referralConversion_referredUserId_key" ON "referralConversion"("referredUserId");

-- CreateIndex
CREATE INDEX "referralConversion_referralLinkId_idx" ON "referralConversion"("referralLinkId");

-- CreateIndex
CREATE INDEX "referralConversion_referredUserId_idx" ON "referralConversion"("referredUserId");

-- CreateIndex
CREATE INDEX "ambassadorSpotlight_month_year_isActive_idx" ON "ambassadorSpotlight"("month", "year", "isActive");

-- CreateIndex
CREATE UNIQUE INDEX "ambassadorSpotlight_ambassadorId_month_year_key" ON "ambassadorSpotlight"("ambassadorId", "month", "year");

-- CreateIndex
CREATE INDEX "ambassadorShare_ambassadorId_idx" ON "ambassadorShare"("ambassadorId");

-- CreateIndex
CREATE INDEX "ambassadorShare_status_idx" ON "ambassadorShare"("status");

-- AddForeignKey
ALTER TABLE "ambassador" ADD CONSTRAINT "ambassador_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ambassador" ADD CONSTRAINT "ambassador_reviewedBy_fkey" FOREIGN KEY ("reviewedBy") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "referralLink" ADD CONSTRAINT "referralLink_ambassadorId_fkey" FOREIGN KEY ("ambassadorId") REFERENCES "ambassador"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "referralConversion" ADD CONSTRAINT "referralConversion_referralLinkId_fkey" FOREIGN KEY ("referralLinkId") REFERENCES "referralLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "referralConversion" ADD CONSTRAINT "referralConversion_referredUserId_fkey" FOREIGN KEY ("referredUserId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ambassadorSpotlight" ADD CONSTRAINT "ambassadorSpotlight_ambassadorId_fkey" FOREIGN KEY ("ambassadorId") REFERENCES "ambassador"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ambassadorShare" ADD CONSTRAINT "ambassadorShare_ambassadorId_fkey" FOREIGN KEY ("ambassadorId") REFERENCES "ambassador"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ambassadorShare" ADD CONSTRAINT "ambassadorShare_reviewedBy_fkey" FOREIGN KEY ("reviewedBy") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
