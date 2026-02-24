/*
  Warnings:

  - You are about to drop the column `resume` on the `user` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'SUCCESS', 'FAILED');

-- CreateEnum
CREATE TYPE "RepoDifficulty" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED');

-- CreateEnum
CREATE TYPE "RepoDomain" AS ENUM ('AI', 'WEB', 'DEVOPS', 'MOBILE', 'BLOCKCHAIN', 'DATA', 'SECURITY', 'CLOUD', 'GAMING', 'OTHER');

-- AlterTable
ALTER TABLE "user" DROP COLUMN "resume",
ADD COLUMN     "resumes" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- CreateTable
CREATE TABLE "payment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "razorpayOrderId" TEXT NOT NULL,
    "razorpayPaymentId" TEXT,
    "razorpaySignature" TEXT,
    "amount" INTEGER NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'INR',
    "plan" "SubscriptionPlan" NOT NULL,
    "billing" TEXT NOT NULL,
    "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "opensourceRepo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "techStack" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "difficulty" "RepoDifficulty" NOT NULL DEFAULT 'BEGINNER',
    "domain" "RepoDomain" NOT NULL DEFAULT 'WEB',
    "issueTypes" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "stars" INTEGER NOT NULL DEFAULT 0,
    "forks" INTEGER NOT NULL DEFAULT 0,
    "openIssues" INTEGER NOT NULL DEFAULT 0,
    "url" TEXT NOT NULL,
    "logo" TEXT,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "highlights" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "trending" BOOLEAN NOT NULL DEFAULT false,
    "lastUpdated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "opensourceRepo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "payment_razorpayOrderId_key" ON "payment"("razorpayOrderId");

-- CreateIndex
CREATE INDEX "payment_userId_idx" ON "payment"("userId");

-- CreateIndex
CREATE INDEX "payment_razorpayOrderId_idx" ON "payment"("razorpayOrderId");

-- CreateIndex
CREATE INDEX "opensourceRepo_domain_idx" ON "opensourceRepo"("domain");

-- CreateIndex
CREATE INDEX "opensourceRepo_difficulty_idx" ON "opensourceRepo"("difficulty");

-- CreateIndex
CREATE INDEX "opensourceRepo_language_idx" ON "opensourceRepo"("language");

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
