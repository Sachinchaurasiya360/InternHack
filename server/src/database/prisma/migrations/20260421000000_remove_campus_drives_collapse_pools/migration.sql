-- Remove Campus Drives feature entirely and collapse Talent Pools into a flat savedCandidate table.

-- DropForeignKey
ALTER TABLE "campusDriveRegistration" DROP CONSTRAINT IF EXISTS "campusDriveRegistration_driveId_fkey";
ALTER TABLE "campusDriveRegistration" DROP CONSTRAINT IF EXISTS "campusDriveRegistration_studentId_fkey";
ALTER TABLE "campusDrive" DROP CONSTRAINT IF EXISTS "campusDrive_recruiterId_fkey";
ALTER TABLE "talentPoolMember" DROP CONSTRAINT IF EXISTS "talentPoolMember_poolId_fkey";
ALTER TABLE "talentPoolMember" DROP CONSTRAINT IF EXISTS "talentPoolMember_studentId_fkey";
ALTER TABLE "talentPool" DROP CONSTRAINT IF EXISTS "talentPool_recruiterId_fkey";

-- DropTable
DROP TABLE IF EXISTS "campusDriveRegistration";
DROP TABLE IF EXISTS "campusDrive";
DROP TABLE IF EXISTS "talentPoolMember";
DROP TABLE IF EXISTS "talentPool";

-- DropEnum
DROP TYPE IF EXISTS "CampusDriveStatus";
DROP TYPE IF EXISTS "CampusRegistrationStatus";

-- CreateTable
CREATE TABLE "savedCandidate" (
    "id" SERIAL NOT NULL,
    "recruiterId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "savedCandidate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "savedCandidate_recruiterId_idx" ON "savedCandidate"("recruiterId");

-- CreateIndex
CREATE INDEX "savedCandidate_studentId_idx" ON "savedCandidate"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "savedCandidate_recruiterId_studentId_key" ON "savedCandidate"("recruiterId", "studentId");

-- AddForeignKey
ALTER TABLE "savedCandidate" ADD CONSTRAINT "savedCandidate_recruiterId_fkey" FOREIGN KEY ("recruiterId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "savedCandidate" ADD CONSTRAINT "savedCandidate_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
