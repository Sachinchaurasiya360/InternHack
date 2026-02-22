-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('STUDENT', 'RECRUITER', 'ADMIN');

-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'CLOSED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('APPLIED', 'IN_PROGRESS', 'SHORTLISTED', 'REJECTED', 'HIRED', 'WITHDRAWN');

-- CreateEnum
CREATE TYPE "RoundStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED', 'SKIPPED');

-- CreateEnum
CREATE TYPE "FieldType" AS ENUM ('TEXT', 'TEXTAREA', 'DROPDOWN', 'MULTI_SELECT', 'FILE_UPLOAD', 'BOOLEAN', 'NUMERIC', 'DATE', 'EMAIL', 'URL');

-- CreateEnum
CREATE TYPE "CompanySize" AS ENUM ('STARTUP', 'SMALL', 'MEDIUM', 'LARGE', 'ENTERPRISE');

-- CreateEnum
CREATE TYPE "ReviewStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "ContributionStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "ContributionType" AS ENUM ('NEW_COMPANY', 'EDIT_COMPANY', 'ADD_CONTACT', 'ADD_REVIEW');

-- CreateEnum
CREATE TYPE "AdminTier" AS ENUM ('SUPER_ADMIN', 'ADMIN', 'MODERATOR');

-- CreateEnum
CREATE TYPE "SubscriptionPlan" AS ENUM ('FREE', 'MONTHLY', 'YEARLY');

-- CreateEnum
CREATE TYPE "SubscriptionStatus" AS ENUM ('ACTIVE', 'EXPIRED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "CareerDifficulty" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED');

-- CreateEnum
CREATE TYPE "ResourceType" AS ENUM ('ARTICLE', 'VIDEO', 'COURSE', 'BOOK', 'DOCUMENTATION', 'TUTORIAL');

-- CreateEnum
CREATE TYPE "SkillLevel" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED');

-- CreateEnum
CREATE TYPE "CareerCategory" AS ENUM ('ENGINEERING', 'DESIGN', 'DATA', 'PRODUCT', 'MARKETING', 'DEVOPS', 'SECURITY', 'OTHER');

-- CreateEnum
CREATE TYPE "EnrollmentStatus" AS ENUM ('ACTIVE', 'PAUSED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "ScrapedJobStatus" AS ENUM ('ACTIVE', 'EXPIRED', 'REMOVED');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'STUDENT',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "contactNo" TEXT,
    "profilePic" TEXT,
    "resume" TEXT,
    "company" TEXT,
    "designation" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "subscriptionPlan" "SubscriptionPlan" NOT NULL DEFAULT 'FREE',
    "subscriptionStatus" "SubscriptionStatus" NOT NULL DEFAULT 'EXPIRED',
    "subscriptionStartDate" TIMESTAMP(3),
    "subscriptionEndDate" TIMESTAMP(3),
    "bio" TEXT,
    "college" TEXT,
    "graduationYear" INTEGER,
    "skills" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "linkedinUrl" TEXT,
    "githubUrl" TEXT,
    "portfolioUrl" TEXT,
    "location" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adminProfile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "tier" "AdminTier" NOT NULL DEFAULT 'ADMIN',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "adminProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adminActivityLog" (
    "id" SERIAL NOT NULL,
    "adminId" INTEGER NOT NULL,
    "action" TEXT NOT NULL,
    "targetType" TEXT NOT NULL,
    "targetId" INTEGER NOT NULL,
    "details" JSONB NOT NULL DEFAULT '{}',
    "ipAddress" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "adminActivityLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "salary" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "status" "JobStatus" NOT NULL DEFAULT 'DRAFT',
    "customFields" JSONB NOT NULL DEFAULT '[]',
    "deadline" TIMESTAMP(3),
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "recruiterId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "round" (
    "id" SERIAL NOT NULL,
    "jobId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "orderIndex" INTEGER NOT NULL,
    "instructions" TEXT,
    "customFields" JSONB NOT NULL DEFAULT '[]',
    "evaluationCriteria" JSONB NOT NULL DEFAULT '[]',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "round_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "application" (
    "id" SERIAL NOT NULL,
    "jobId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    "status" "ApplicationStatus" NOT NULL DEFAULT 'APPLIED',
    "currentRoundId" INTEGER,
    "customFieldAnswers" JSONB NOT NULL DEFAULT '{}',
    "resumeUrl" TEXT,
    "coverLetter" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roundSubmission" (
    "id" SERIAL NOT NULL,
    "applicationId" INTEGER NOT NULL,
    "roundId" INTEGER NOT NULL,
    "status" "RoundStatus" NOT NULL DEFAULT 'PENDING',
    "fieldAnswers" JSONB NOT NULL DEFAULT '{}',
    "attachments" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "evaluationScores" JSONB,
    "recruiterNotes" TEXT,
    "submittedAt" TIMESTAMP(3),
    "evaluatedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roundSubmission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scrapedJob" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "salary" TEXT,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "applicationUrl" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "sourceUrl" TEXT,
    "status" "ScrapedJobStatus" NOT NULL DEFAULT 'ACTIVE',
    "scrapedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "scrapedJob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "atsScore" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "resumeUrl" TEXT NOT NULL,
    "jobTitle" TEXT,
    "jobDescription" TEXT,
    "overallScore" INTEGER NOT NULL,
    "categoryScores" JSONB NOT NULL,
    "suggestions" JSONB NOT NULL,
    "keywordAnalysis" JSONB NOT NULL,
    "rawResponse" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "atsScore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scrapeLog" (
    "id" SERIAL NOT NULL,
    "source" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "jobsFound" INTEGER NOT NULL DEFAULT 0,
    "jobsCreated" INTEGER NOT NULL DEFAULT 0,
    "jobsUpdated" INTEGER NOT NULL DEFAULT 0,
    "error" TEXT,
    "duration" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "scrapeLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "career" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" "CareerCategory" NOT NULL,
    "difficulty" "CareerDifficulty" NOT NULL,
    "iconUrl" TEXT,
    "avgSalary" TEXT,
    "demandLevel" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "career_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "careerPhase" (
    "id" SERIAL NOT NULL,
    "careerId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "orderIndex" INTEGER NOT NULL,
    "durationWeeks" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "careerPhase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "careerSkill" (
    "id" SERIAL NOT NULL,
    "phaseId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "level" "SkillLevel" NOT NULL,

    CONSTRAINT "careerSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "careerResource" (
    "id" SERIAL NOT NULL,
    "phaseId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" "ResourceType" NOT NULL,
    "free" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "careerResource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "careerTool" (
    "id" SERIAL NOT NULL,
    "phaseId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT,
    "category" TEXT,

    CONSTRAINT "careerTool_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studentCareer" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "careerId" INTEGER NOT NULL,
    "status" "EnrollmentStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "studentCareer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studentSkillProgress" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "studentSkillProgress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "logo" TEXT,
    "description" TEXT NOT NULL,
    "mission" TEXT,
    "industry" TEXT NOT NULL,
    "size" "CompanySize" NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT,
    "address" TEXT,
    "officeLocations" JSONB NOT NULL DEFAULT '[]',
    "website" TEXT,
    "socialLinks" JSONB NOT NULL DEFAULT '{}',
    "technologies" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "hiringStatus" BOOLEAN NOT NULL DEFAULT false,
    "foundedYear" INTEGER,
    "photos" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "avgRating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "reviewCount" INTEGER NOT NULL DEFAULT 0,
    "isApproved" BOOLEAN NOT NULL DEFAULT false,
    "createdById" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companyReview" (
    "id" SERIAL NOT NULL,
    "companyId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "pros" TEXT,
    "cons" TEXT,
    "interviewExperience" TEXT,
    "workCulture" TEXT,
    "salaryInsights" TEXT,
    "status" "ReviewStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "companyReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companyContact" (
    "id" SERIAL NOT NULL,
    "companyId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "linkedinUrl" TEXT,
    "isPublic" BOOLEAN NOT NULL DEFAULT true,
    "addedById" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "companyContact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companyContribution" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "type" "ContributionType" NOT NULL,
    "companyId" INTEGER,
    "data" JSONB NOT NULL,
    "status" "ContributionStatus" NOT NULL DEFAULT 'PENDING',
    "adminNotes" TEXT,
    "reviewedById" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "companyContribution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "newsletterSubscriber" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "newsletterSubscriber_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "adminProfile_userId_key" ON "adminProfile"("userId");

-- CreateIndex
CREATE INDEX "adminActivityLog_adminId_idx" ON "adminActivityLog"("adminId");

-- CreateIndex
CREATE INDEX "adminActivityLog_targetType_targetId_idx" ON "adminActivityLog"("targetType", "targetId");

-- CreateIndex
CREATE INDEX "adminActivityLog_createdAt_idx" ON "adminActivityLog"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "round_jobId_orderIndex_key" ON "round"("jobId", "orderIndex");

-- CreateIndex
CREATE UNIQUE INDEX "application_jobId_studentId_key" ON "application"("jobId", "studentId");

-- CreateIndex
CREATE UNIQUE INDEX "roundSubmission_applicationId_roundId_key" ON "roundSubmission"("applicationId", "roundId");

-- CreateIndex
CREATE INDEX "scrapedJob_status_idx" ON "scrapedJob"("status");

-- CreateIndex
CREATE INDEX "scrapedJob_source_idx" ON "scrapedJob"("source");

-- CreateIndex
CREATE UNIQUE INDEX "scrapedJob_source_sourceId_key" ON "scrapedJob"("source", "sourceId");

-- CreateIndex
CREATE INDEX "atsScore_studentId_idx" ON "atsScore"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "career_title_key" ON "career"("title");

-- CreateIndex
CREATE UNIQUE INDEX "career_slug_key" ON "career"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "careerPhase_careerId_orderIndex_key" ON "careerPhase"("careerId", "orderIndex");

-- CreateIndex
CREATE UNIQUE INDEX "studentCareer_studentId_careerId_key" ON "studentCareer"("studentId", "careerId");

-- CreateIndex
CREATE UNIQUE INDEX "studentSkillProgress_studentId_skillId_key" ON "studentSkillProgress"("studentId", "skillId");

-- CreateIndex
CREATE UNIQUE INDEX "company_slug_key" ON "company"("slug");

-- CreateIndex
CREATE INDEX "company_city_idx" ON "company"("city");

-- CreateIndex
CREATE INDEX "company_industry_idx" ON "company"("industry");

-- CreateIndex
CREATE INDEX "company_isApproved_idx" ON "company"("isApproved");

-- CreateIndex
CREATE INDEX "companyReview_companyId_idx" ON "companyReview"("companyId");

-- CreateIndex
CREATE INDEX "companyReview_status_idx" ON "companyReview"("status");

-- CreateIndex
CREATE INDEX "companyContact_companyId_idx" ON "companyContact"("companyId");

-- CreateIndex
CREATE INDEX "companyContribution_status_idx" ON "companyContribution"("status");

-- CreateIndex
CREATE INDEX "companyContribution_userId_idx" ON "companyContribution"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "newsletterSubscriber_email_key" ON "newsletterSubscriber"("email");

-- AddForeignKey
ALTER TABLE "adminProfile" ADD CONSTRAINT "adminProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adminActivityLog" ADD CONSTRAINT "adminActivityLog_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job" ADD CONSTRAINT "job_recruiterId_fkey" FOREIGN KEY ("recruiterId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "round" ADD CONSTRAINT "round_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "application" ADD CONSTRAINT "application_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "application" ADD CONSTRAINT "application_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roundSubmission" ADD CONSTRAINT "roundSubmission_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "application"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roundSubmission" ADD CONSTRAINT "roundSubmission_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "round"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atsScore" ADD CONSTRAINT "atsScore_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "careerPhase" ADD CONSTRAINT "careerPhase_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "career"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "careerSkill" ADD CONSTRAINT "careerSkill_phaseId_fkey" FOREIGN KEY ("phaseId") REFERENCES "careerPhase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "careerResource" ADD CONSTRAINT "careerResource_phaseId_fkey" FOREIGN KEY ("phaseId") REFERENCES "careerPhase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "careerTool" ADD CONSTRAINT "careerTool_phaseId_fkey" FOREIGN KEY ("phaseId") REFERENCES "careerPhase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentCareer" ADD CONSTRAINT "studentCareer_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentCareer" ADD CONSTRAINT "studentCareer_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "career"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentSkillProgress" ADD CONSTRAINT "studentSkillProgress_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentSkillProgress" ADD CONSTRAINT "studentSkillProgress_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "careerSkill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "company" ADD CONSTRAINT "company_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companyReview" ADD CONSTRAINT "companyReview_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companyReview" ADD CONSTRAINT "companyReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companyContact" ADD CONSTRAINT "companyContact_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companyContact" ADD CONSTRAINT "companyContact_addedById_fkey" FOREIGN KEY ("addedById") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companyContribution" ADD CONSTRAINT "companyContribution_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companyContribution" ADD CONSTRAINT "companyContribution_reviewedById_fkey" FOREIGN KEY ("reviewedById") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
