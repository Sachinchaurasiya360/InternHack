-- CreateEnum
CREATE TYPE "TrackedGrantStatus" AS ENUM ('INTERESTED', 'PREPARING', 'APPLIED', 'ACCEPTED', 'REJECTED');

-- CreateTable
CREATE TABLE "trackedGrant" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "grantName" TEXT NOT NULL,
    "organization" TEXT NOT NULL,
    "status" "TrackedGrantStatus" NOT NULL DEFAULT 'INTERESTED',
    "notes" TEXT NOT NULL DEFAULT '',
    "deadline" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "trackedGrant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "trackedGrant_userId_grantName_organization_key" ON "trackedGrant"("userId", "grantName", "organization");

-- CreateIndex
CREATE INDEX "trackedGrant_userId_idx" ON "trackedGrant"("userId");

-- CreateIndex
CREATE INDEX "trackedGrant_deadline_idx" ON "trackedGrant"("deadline");

-- AddForeignKey
ALTER TABLE "trackedGrant" ADD CONSTRAINT "trackedGrant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
