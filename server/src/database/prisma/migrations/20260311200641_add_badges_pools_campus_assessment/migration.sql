-- CreateEnum
CREATE TYPE "BadgeCategory" AS ENUM ('CAREER', 'QUIZ', 'SKILL', 'CONTRIBUTION', 'MILESTONE');

-- CreateEnum
CREATE TYPE "CampusDriveStatus" AS ENUM ('DRAFT', 'OPEN', 'CLOSED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "CampusRegistrationStatus" AS ENUM ('REGISTERED', 'SHORTLISTED', 'REJECTED');

-- AlterTable
ALTER TABLE "round" ADD COLUMN     "assessmentQuestions" JSONB NOT NULL DEFAULT '[]',
ADD COLUMN     "autoGrade" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "timeLimitSecs" INTEGER;

-- CreateTable
CREATE TABLE "badge" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "iconUrl" TEXT,
    "category" "BadgeCategory" NOT NULL,
    "criteria" JSONB NOT NULL DEFAULT '{}',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "badge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studentBadge" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "badgeId" INTEGER NOT NULL,
    "earnedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "studentBadge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "talentPool" (
    "id" SERIAL NOT NULL,
    "recruiterId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "talentPool_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "talentPoolMember" (
    "id" SERIAL NOT NULL,
    "poolId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    "notes" TEXT,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "talentPoolMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campusDrive" (
    "id" SERIAL NOT NULL,
    "recruiterId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "targetColleges" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "eligibleBranches" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "minCGPA" DOUBLE PRECISION,
    "eligibleGraduationYears" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "registrationDeadline" TIMESTAMP(3) NOT NULL,
    "driveDate" TIMESTAMP(3),
    "status" "CampusDriveStatus" NOT NULL DEFAULT 'DRAFT',
    "jobIds" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "campusDrive_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campusDriveRegistration" (
    "id" SERIAL NOT NULL,
    "driveId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    "status" "CampusRegistrationStatus" NOT NULL DEFAULT 'REGISTERED',
    "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "campusDriveRegistration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "badge_slug_key" ON "badge"("slug");

-- CreateIndex
CREATE INDEX "badge_category_idx" ON "badge"("category");

-- CreateIndex
CREATE INDEX "badge_isActive_idx" ON "badge"("isActive");

-- CreateIndex
CREATE INDEX "studentBadge_studentId_idx" ON "studentBadge"("studentId");

-- CreateIndex
CREATE INDEX "studentBadge_badgeId_idx" ON "studentBadge"("badgeId");

-- CreateIndex
CREATE UNIQUE INDEX "studentBadge_studentId_badgeId_key" ON "studentBadge"("studentId", "badgeId");

-- CreateIndex
CREATE INDEX "talentPool_recruiterId_idx" ON "talentPool"("recruiterId");

-- CreateIndex
CREATE INDEX "talentPoolMember_poolId_idx" ON "talentPoolMember"("poolId");

-- CreateIndex
CREATE INDEX "talentPoolMember_studentId_idx" ON "talentPoolMember"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "talentPoolMember_poolId_studentId_key" ON "talentPoolMember"("poolId", "studentId");

-- CreateIndex
CREATE INDEX "campusDrive_recruiterId_idx" ON "campusDrive"("recruiterId");

-- CreateIndex
CREATE INDEX "campusDrive_status_idx" ON "campusDrive"("status");

-- CreateIndex
CREATE INDEX "campusDrive_registrationDeadline_idx" ON "campusDrive"("registrationDeadline");

-- CreateIndex
CREATE INDEX "campusDriveRegistration_driveId_idx" ON "campusDriveRegistration"("driveId");

-- CreateIndex
CREATE INDEX "campusDriveRegistration_studentId_idx" ON "campusDriveRegistration"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "campusDriveRegistration_driveId_studentId_key" ON "campusDriveRegistration"("driveId", "studentId");

-- AddForeignKey
ALTER TABLE "studentBadge" ADD CONSTRAINT "studentBadge_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentBadge" ADD CONSTRAINT "studentBadge_badgeId_fkey" FOREIGN KEY ("badgeId") REFERENCES "badge"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "talentPool" ADD CONSTRAINT "talentPool_recruiterId_fkey" FOREIGN KEY ("recruiterId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "talentPoolMember" ADD CONSTRAINT "talentPoolMember_poolId_fkey" FOREIGN KEY ("poolId") REFERENCES "talentPool"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "talentPoolMember" ADD CONSTRAINT "talentPoolMember_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campusDrive" ADD CONSTRAINT "campusDrive_recruiterId_fkey" FOREIGN KEY ("recruiterId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campusDriveRegistration" ADD CONSTRAINT "campusDriveRegistration_driveId_fkey" FOREIGN KEY ("driveId") REFERENCES "campusDrive"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campusDriveRegistration" ADD CONSTRAINT "campusDriveRegistration_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
