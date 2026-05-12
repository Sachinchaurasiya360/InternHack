/*
  Warnings:

  - You are about to drop the column `orderIndex` on the `dsaProblem` table. All the data in the column will be lost.
  - You are about to drop the column `subTopicId` on the `dsaProblem` table. All the data in the column will be lost.
  - The `hints` column on the `dsaProblem` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `razorpayOrderId` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the column `razorpayPaymentId` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the column `razorpaySignature` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the `dsaSubTopic` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[slug]` on the table `adminJob` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `dsaProblem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[leetcodeSlug]` on the table `dsaProblem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[dodoPaymentId]` on the table `payment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `dsaProblem` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "JobSourceType" AS ENUM ('INTERNAL', 'SCRAPED', 'ADMIN');

-- CreateEnum
CREATE TYPE "FundingSignalStatus" AS ENUM ('ACTIVE', 'STALE', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "RepoRequestStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "EmailCampaignStatus" AS ENUM ('DRAFT', 'QUEUED', 'SENDING', 'PAUSED', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "EmailLogStatus" AS ENUM ('PENDING', 'SENT', 'FAILED');

-- CreateEnum
CREATE TYPE "InterviewSource" AS ENUM ('ON_CAMPUS', 'OFF_CAMPUS', 'REFERRAL', 'LINKEDIN', 'PORTAL', 'OTHER');

-- CreateEnum
CREATE TYPE "InterviewDifficulty" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- CreateEnum
CREATE TYPE "InterviewOutcome" AS ENUM ('SELECTED', 'REJECTED', 'WITHDRAWN', 'PENDING', 'GHOSTED');

-- CreateEnum
CREATE TYPE "EmploymentStatus" AS ENUM ('ONBOARDING', 'ACTIVE', 'ON_LEAVE', 'ON_PROBATION', 'NOTICE_PERIOD', 'EXITED', 'ALUMNI');

-- CreateEnum
CREATE TYPE "EmploymentType" AS ENUM ('FULL_TIME', 'PART_TIME', 'CONTRACT', 'INTERN', 'FREELANCER');

-- CreateEnum
CREATE TYPE "LeaveType" AS ENUM ('CASUAL', 'SICK', 'EARNED', 'MATERNITY', 'PATERNITY', 'COMPENSATORY', 'UNPAID', 'BEREAVEMENT');

-- CreateEnum
CREATE TYPE "LeaveRequestStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "AttendanceStatus" AS ENUM ('PRESENT', 'ABSENT', 'HALF_DAY', 'ON_LEAVE', 'HOLIDAY', 'WEEKEND', 'WORK_FROM_HOME');

-- CreateEnum
CREATE TYPE "PayrollStatus" AS ENUM ('DRAFT', 'PROCESSING', 'APPROVED', 'PAID', 'CANCELLED');

-- CreateEnum
CREATE TYPE "ReviewCycle" AS ENUM ('QUARTERLY', 'HALF_YEARLY', 'ANNUAL');

-- CreateEnum
CREATE TYPE "HRReviewStatus" AS ENUM ('DRAFT', 'SELF_REVIEW', 'MANAGER_REVIEW', 'CALIBRATION', 'COMPLETED');

-- CreateEnum
CREATE TYPE "TaskPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'URGENT');

-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('TODO', 'IN_PROGRESS', 'IN_REVIEW', 'DONE', 'CANCELLED');

-- CreateEnum
CREATE TYPE "InterviewType" AS ENUM ('PHONE', 'VIDEO', 'IN_PERSON', 'PANEL', 'TECHNICAL', 'HR');

-- CreateEnum
CREATE TYPE "InterviewStatus" AS ENUM ('SCHEDULED', 'CONFIRMED', 'COMPLETED', 'CANCELLED', 'NO_SHOW', 'RESCHEDULED');

-- CreateEnum
CREATE TYPE "OnboardingItemStatus" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED', 'OVERDUE');

-- CreateEnum
CREATE TYPE "ReimbursementStatus" AS ENUM ('DRAFT', 'SUBMITTED', 'MANAGER_APPROVED', 'FINANCE_APPROVED', 'PAID', 'REJECTED');

-- CreateEnum
CREATE TYPE "WorkflowStatus" AS ENUM ('ACTIVE', 'PAUSED', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "RoadmapLevel" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'ALL_LEVELS');

-- CreateEnum
CREATE TYPE "ResourceKind" AS ENUM ('VIDEO', 'ARTICLE', 'DOCS', 'COURSE', 'BOOK', 'PROJECT', 'OTHER');

-- CreateEnum
CREATE TYPE "ExperienceLevel" AS ENUM ('NEW', 'SOME', 'EXPERIENCED');

-- CreateEnum
CREATE TYPE "EnrollmentGoal" AS ENUM ('JOB_READY', 'SIDE_PROJECT', 'SCHOOL', 'CURIOUS');

-- CreateEnum
CREATE TYPE "EnrollmentStatus" AS ENUM ('ACTIVE', 'PAUSED', 'COMPLETED', 'ABANDONED');

-- CreateEnum
CREATE TYPE "RoadmapTopicStatus" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED', 'SKIPPED');

-- CreateEnum
CREATE TYPE "ScheduledEmailKind" AS ENUM ('ROADMAP_DAY_10', 'ROADMAP_WEEKLY_DIGEST');

-- AlterEnum
ALTER TYPE "AIProviderType" ADD VALUE 'CLAUDE';

-- AlterEnum
ALTER TYPE "AIServiceType" ADD VALUE 'EMAIL_CHAT';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "UsageAction" ADD VALUE 'AI_JOB_CHAT';
ALTER TYPE "UsageAction" ADD VALUE 'CODE_RUN';

-- DropForeignKey
ALTER TABLE "dsaProblem" DROP CONSTRAINT "dsaProblem_subTopicId_fkey";

-- DropForeignKey
ALTER TABLE "dsaSubTopic" DROP CONSTRAINT "dsaSubTopic_topicId_fkey";

-- DropIndex
DROP INDEX "dsaProblem_subTopicId_orderIndex_key";

-- DropIndex
DROP INDEX "payment_razorpayOrderId_idx";

-- DropIndex
DROP INDEX "payment_razorpayOrderId_key";

-- AlterTable
ALTER TABLE "adminJob" ADD COLUMN     "slug" TEXT;

-- AlterTable
ALTER TABLE "dsaProblem" DROP COLUMN "orderIndex",
DROP COLUMN "subTopicId",
ADD COLUMN     "acceptanceRate" TEXT,
ADD COLUMN     "category" TEXT,
ADD COLUMN     "constraints" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "examples" TEXT,
ADD COLUMN     "isPremium" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "leetcodeId" INTEGER,
ADD COLUMN     "leetcodeSlug" TEXT,
ADD COLUMN     "similarQuestions" JSONB DEFAULT '[]',
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "totalAccepted" INTEGER,
ADD COLUMN     "totalSubmissions" INTEGER,
DROP COLUMN "hints",
ADD COLUMN     "hints" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- AlterTable
ALTER TABLE "payment" DROP COLUMN "razorpayOrderId",
DROP COLUMN "razorpayPaymentId",
DROP COLUMN "razorpaySignature",
ADD COLUMN     "dodoCheckoutUrl" TEXT,
ADD COLUMN     "dodoPaymentId" TEXT,
ADD COLUMN     "dodoSubscriptionId" TEXT,
ALTER COLUMN "currency" SET DEFAULT 'USD';

-- AlterTable
ALTER TABLE "studentDsaProgress" ADD COLUMN     "source" TEXT NOT NULL DEFAULT 'INTERNAL';

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "tokenVersion" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "dsaSubTopic";

-- CreateTable
CREATE TABLE "jobIndex" (
    "id" SERIAL NOT NULL,
    "sourceType" "JobSourceType" NOT NULL,
    "sourceId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "salary" TEXT,
    "salaryMin" INTEGER,
    "salaryMax" INTEGER,
    "description" TEXT NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "skills" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "experienceLevel" TEXT,
    "workMode" TEXT,
    "domain" TEXT,
    "applicationUrl" TEXT,
    "deadline" TIMESTAMP(3),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isEnriched" BOOLEAN NOT NULL DEFAULT false,
    "hasEmbedding" BOOLEAN NOT NULL DEFAULT false,
    "lastEnrichedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "jobIndex_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userJobPreference" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "desiredRoles" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "desiredSkills" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "desiredLocations" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "minSalary" INTEGER,
    "workMode" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "experienceLevel" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "domains" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "profileSkills" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "profileSummary" TEXT,
    "viewedJobIds" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "appliedJobIds" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "dismissedJobIds" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "savedJobIds" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "hasEmbedding" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "userJobPreference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jobMatch" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "jobIndexId" INTEGER NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "skillMatch" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "locationMatch" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "salaryMatch" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "vectorScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "seen" BOOLEAN NOT NULL DEFAULT false,
    "dismissed" BOOLEAN NOT NULL DEFAULT false,
    "saved" BOOLEAN NOT NULL DEFAULT false,
    "applied" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "jobMatch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jobAgentConversation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "messages" JSONB NOT NULL DEFAULT '[]',
    "context" JSONB NOT NULL DEFAULT '{}',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "jobAgentConversation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fundingSignal" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyWebsite" TEXT,
    "logoUrl" TEXT,
    "fundingRound" TEXT,
    "fundingAmount" TEXT,
    "amountUsd" BIGINT,
    "announcedAt" TIMESTAMP(3) NOT NULL,
    "hqLocation" TEXT,
    "industry" TEXT,
    "description" TEXT,
    "sourceUrl" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "investors" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "careersUrl" TEXT,
    "hiringSignal" BOOLEAN NOT NULL DEFAULT false,
    "status" "FundingSignalStatus" NOT NULL DEFAULT 'ACTIVE',
    "metadata" JSONB NOT NULL DEFAULT '{}',
    "scrapedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "fundingSignal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fundingSignalLog" (
    "id" SERIAL NOT NULL,
    "source" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "signalsFound" INTEGER NOT NULL DEFAULT 0,
    "signalsCreated" INTEGER NOT NULL DEFAULT 0,
    "signalsUpdated" INTEGER NOT NULL DEFAULT 0,
    "error" TEXT,
    "duration" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "fundingSignalLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "repoRequest" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "domain" "RepoDomain" NOT NULL DEFAULT 'WEB',
    "difficulty" "RepoDifficulty" NOT NULL DEFAULT 'BEGINNER',
    "techStack" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "reason" TEXT NOT NULL,
    "status" "RepoRequestStatus" NOT NULL DEFAULT 'PENDING',
    "adminNote" TEXT,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "repoRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dsaTestCase" (
    "id" SERIAL NOT NULL,
    "problemId" INTEGER NOT NULL,
    "input" TEXT NOT NULL,
    "expected" TEXT NOT NULL,
    "label" TEXT,
    "orderIndex" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dsaTestCase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dsaSubmission" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "problemId" INTEGER NOT NULL,
    "language" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "passed" INTEGER NOT NULL DEFAULT 0,
    "total" INTEGER NOT NULL DEFAULT 0,
    "allPassed" BOOLEAN NOT NULL DEFAULT false,
    "timeMs" INTEGER,
    "memoryKb" INTEGER,
    "results" JSONB NOT NULL DEFAULT '[]',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dsaSubmission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "externalJobApplication" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "adminJobId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "externalJobApplication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "emailCampaign" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "chatHistory" JSONB NOT NULL DEFAULT '[]',
    "emailSubject" TEXT,
    "emailTemplate" TEXT,
    "contactType" TEXT NOT NULL,
    "filters" JSONB NOT NULL DEFAULT '{}',
    "intervalSeconds" INTEGER NOT NULL DEFAULT 60,
    "totalEmails" INTEGER NOT NULL DEFAULT 0,
    "sentCount" INTEGER NOT NULL DEFAULT 0,
    "failedCount" INTEGER NOT NULL DEFAULT 0,
    "status" "EmailCampaignStatus" NOT NULL DEFAULT 'DRAFT',
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "errorMessage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "emailCampaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "emailLog" (
    "id" SERIAL NOT NULL,
    "campaignId" INTEGER NOT NULL,
    "recipientName" TEXT NOT NULL,
    "recipientEmail" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "status" "EmailLogStatus" NOT NULL DEFAULT 'PENDING',
    "sentAt" TIMESTAMP(3),
    "errorMessage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "emailLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "errorLog" (
    "id" SERIAL NOT NULL,
    "method" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "statusCode" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "rawError" TEXT,
    "userId" INTEGER,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "requestBody" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "errorLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "milestoneEmail" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "milestoneType" TEXT NOT NULL,
    "milestoneKey" TEXT NOT NULL,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "milestoneEmail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interviewExperience" (
    "id" SERIAL NOT NULL,
    "companyId" INTEGER,
    "companyName" TEXT,
    "userId" INTEGER NOT NULL,
    "role" TEXT NOT NULL,
    "experienceYears" INTEGER,
    "interviewYear" INTEGER NOT NULL,
    "interviewMonth" INTEGER,
    "source" "InterviewSource" NOT NULL DEFAULT 'ON_CAMPUS',
    "difficulty" "InterviewDifficulty" NOT NULL DEFAULT 'MEDIUM',
    "outcome" "InterviewOutcome" NOT NULL DEFAULT 'PENDING',
    "offered" BOOLEAN NOT NULL DEFAULT false,
    "ctcLpa" DOUBLE PRECISION,
    "totalRounds" INTEGER NOT NULL DEFAULT 1,
    "overallRating" INTEGER NOT NULL DEFAULT 3,
    "rounds" JSONB NOT NULL DEFAULT '[]',
    "tips" TEXT,
    "prepResources" JSONB NOT NULL DEFAULT '[]',
    "isAnonymous" BOOLEAN NOT NULL DEFAULT false,
    "status" "ReviewStatus" NOT NULL DEFAULT 'PENDING',
    "upvotes" INTEGER NOT NULL DEFAULT 0,
    "views" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "interviewExperience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interviewExperienceUpvote" (
    "id" SERIAL NOT NULL,
    "experienceId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "interviewExperienceUpvote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "department" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "parentId" INTEGER,
    "headId" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "employeeCode" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "dateOfBirth" TIMESTAMP(3),
    "gender" TEXT,
    "bloodGroup" TEXT,
    "profilePic" TEXT,
    "departmentId" INTEGER NOT NULL,
    "designation" TEXT NOT NULL,
    "employmentType" "EmploymentType" NOT NULL DEFAULT 'FULL_TIME',
    "status" "EmploymentStatus" NOT NULL DEFAULT 'ONBOARDING',
    "joiningDate" TIMESTAMP(3) NOT NULL,
    "confirmationDate" TIMESTAMP(3),
    "exitDate" TIMESTAMP(3),
    "reportingManagerId" INTEGER,
    "address" JSONB,
    "emergencyContact" JSONB,
    "bankDetails" JSONB,
    "documents" JSONB NOT NULL DEFAULT '[]',
    "currentSalary" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customRole" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "permissions" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "isSystem" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "customRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userCustomRole" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "userCustomRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leavePolicy" (
    "id" SERIAL NOT NULL,
    "leaveType" "LeaveType" NOT NULL,
    "name" TEXT NOT NULL,
    "annualAllocation" INTEGER NOT NULL,
    "maxCarryForward" INTEGER NOT NULL DEFAULT 0,
    "minConsecutiveDays" INTEGER NOT NULL DEFAULT 1,
    "maxConsecutiveDays" INTEGER,
    "requiresApproval" BOOLEAN NOT NULL DEFAULT true,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "leavePolicy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "departmentLeavePolicy" (
    "id" SERIAL NOT NULL,
    "departmentId" INTEGER NOT NULL,
    "policyId" INTEGER NOT NULL,
    "overrideAllocation" INTEGER,

    CONSTRAINT "departmentLeavePolicy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leaveBalance" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "leaveType" "LeaveType" NOT NULL,
    "year" INTEGER NOT NULL,
    "allocated" INTEGER NOT NULL,
    "used" INTEGER NOT NULL DEFAULT 0,
    "pending" INTEGER NOT NULL DEFAULT 0,
    "carryForward" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "leaveBalance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leaveRequest" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "leaveType" "LeaveType" NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "totalDays" DOUBLE PRECISION NOT NULL,
    "reason" TEXT NOT NULL,
    "status" "LeaveRequestStatus" NOT NULL DEFAULT 'PENDING',
    "approverId" INTEGER,
    "approverNote" TEXT,
    "approvedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "leaveRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attendanceRecord" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "status" "AttendanceStatus" NOT NULL DEFAULT 'PRESENT',
    "checkIn" TIMESTAMP(3),
    "checkOut" TIMESTAMP(3),
    "workHours" DOUBLE PRECISION,
    "overtime" DOUBLE PRECISION,
    "isLate" BOOLEAN NOT NULL DEFAULT false,
    "lateMinutes" INTEGER,
    "notes" TEXT,
    "isRegularized" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "attendanceRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payrollRecord" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "status" "PayrollStatus" NOT NULL DEFAULT 'DRAFT',
    "basicSalary" DOUBLE PRECISION NOT NULL,
    "hra" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "da" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "specialAllow" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "bonus" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "otherEarnings" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "grossEarnings" DOUBLE PRECISION NOT NULL,
    "pf" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "esi" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "profTax" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "tds" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "loanEmi" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "otherDeduct" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalDeductions" DOUBLE PRECISION NOT NULL,
    "netPay" DOUBLE PRECISION NOT NULL,
    "payslipUrl" TEXT,
    "paidAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payrollRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contractorPayment" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "invoiceNumber" TEXT,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'INR',
    "description" TEXT NOT NULL,
    "periodStart" TIMESTAMP(3) NOT NULL,
    "periodEnd" TIMESTAMP(3) NOT NULL,
    "status" "PayrollStatus" NOT NULL DEFAULT 'DRAFT',
    "invoiceUrl" TEXT,
    "paidAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contractorPayment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "performanceReview" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "reviewerId" INTEGER NOT NULL,
    "cycle" "ReviewCycle" NOT NULL,
    "period" TEXT NOT NULL,
    "status" "HRReviewStatus" NOT NULL DEFAULT 'DRAFT',
    "selfRating" DOUBLE PRECISION,
    "managerRating" DOUBLE PRECISION,
    "finalRating" DOUBLE PRECISION,
    "selfComments" TEXT,
    "managerComments" TEXT,
    "goals" JSONB NOT NULL DEFAULT '[]',
    "strengths" TEXT,
    "improvements" TEXT,
    "promotionRecommended" BOOLEAN NOT NULL DEFAULT false,
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "performanceReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hrTask" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "assigneeId" INTEGER NOT NULL,
    "creatorId" INTEGER NOT NULL,
    "priority" "TaskPriority" NOT NULL DEFAULT 'MEDIUM',
    "status" "TaskStatus" NOT NULL DEFAULT 'TODO',
    "dueDate" TIMESTAMP(3),
    "labels" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "parentTaskId" INTEGER,
    "comments" JSONB NOT NULL DEFAULT '[]',
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hrTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reimbursement" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'INR',
    "description" TEXT NOT NULL,
    "receiptUrls" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "status" "ReimbursementStatus" NOT NULL DEFAULT 'DRAFT',
    "approverNote" TEXT,
    "paidAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reimbursement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interview" (
    "id" SERIAL NOT NULL,
    "applicationId" INTEGER NOT NULL,
    "type" "InterviewType" NOT NULL DEFAULT 'VIDEO',
    "scheduledAt" TIMESTAMP(3) NOT NULL,
    "durationMinutes" INTEGER NOT NULL DEFAULT 60,
    "meetingLink" TEXT,
    "location" TEXT,
    "status" "InterviewStatus" NOT NULL DEFAULT 'SCHEDULED',
    "interviewerIds" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "feedback" JSONB NOT NULL DEFAULT '[]',
    "candidateNotes" TEXT,
    "cancelReason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "interview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "onboardingChecklist" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "status" "OnboardingItemStatus" NOT NULL DEFAULT 'NOT_STARTED',
    "items" JSONB NOT NULL DEFAULT '[]',
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "targetDate" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "onboardingChecklist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "complianceDocument" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT,
    "documentUrl" TEXT,
    "expiryDate" TIMESTAMP(3),
    "isRequired" BOOLEAN NOT NULL DEFAULT true,
    "assignedTo" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "acknowledgedBy" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "complianceDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workflowDefinition" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "triggerEvent" TEXT NOT NULL,
    "steps" JSONB NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "workflowDefinition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workflowInstance" (
    "id" SERIAL NOT NULL,
    "definitionId" INTEGER NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" INTEGER NOT NULL,
    "currentStep" INTEGER NOT NULL DEFAULT 0,
    "status" "WorkflowStatus" NOT NULL DEFAULT 'ACTIVE',
    "stepHistory" JSONB NOT NULL DEFAULT '[]',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "workflowInstance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "holiday" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "isOptional" BOOLEAN NOT NULL DEFAULT false,
    "location" TEXT,
    "year" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "holiday_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roadmap" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "level" "RoadmapLevel" NOT NULL DEFAULT 'ALL_LEVELS',
    "estimatedHours" INTEGER NOT NULL,
    "coverImage" TEXT,
    "ogImage" TEXT,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "isPremium" BOOLEAN NOT NULL DEFAULT false,
    "isAiGenerated" BOOLEAN NOT NULL DEFAULT false,
    "topicCount" INTEGER NOT NULL DEFAULT 0,
    "outcomes" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "prerequisites" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "faqs" JSONB NOT NULL DEFAULT '[]',
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "enrolledCount" INTEGER NOT NULL DEFAULT 0,
    "ownerUserId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roadmap_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roadmapSection" (
    "id" SERIAL NOT NULL,
    "roadmapId" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "orderIndex" INTEGER NOT NULL,

    CONSTRAINT "roadmapSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roadmapTopic" (
    "id" SERIAL NOT NULL,
    "sectionId" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "contentMd" TEXT NOT NULL,
    "estimatedHours" INTEGER NOT NULL DEFAULT 2,
    "difficulty" INTEGER NOT NULL DEFAULT 2,
    "orderIndex" INTEGER NOT NULL,
    "prerequisiteSlugs" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "miniProject" TEXT,
    "selfCheck" TEXT,

    CONSTRAINT "roadmapTopic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roadmapResource" (
    "id" SERIAL NOT NULL,
    "topicId" INTEGER NOT NULL,
    "kind" "ResourceKind" NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "source" TEXT,
    "isFree" BOOLEAN NOT NULL DEFAULT true,
    "orderIndex" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "roadmapResource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roadmapEnrollment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "roadmapId" INTEGER NOT NULL,
    "hoursPerWeek" INTEGER NOT NULL DEFAULT 8,
    "preferredDays" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "targetEndDate" TIMESTAMP(3) NOT NULL,
    "experienceLevel" "ExperienceLevel" NOT NULL DEFAULT 'NEW',
    "goal" "EnrollmentGoal" NOT NULL DEFAULT 'JOB_READY',
    "status" "EnrollmentStatus" NOT NULL DEFAULT 'ACTIVE',
    "weeklyPlan" JSONB NOT NULL DEFAULT '[]',
    "pdfUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roadmapEnrollment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roadmapTopicProgress" (
    "id" SERIAL NOT NULL,
    "enrollmentId" INTEGER NOT NULL,
    "topicId" INTEGER NOT NULL,
    "status" "RoadmapTopicStatus" NOT NULL DEFAULT 'NOT_STARTED',
    "bookmarked" BOOLEAN NOT NULL DEFAULT false,
    "notes" TEXT,
    "completedAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roadmapTopicProgress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scheduledEmail" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "kind" "ScheduledEmailKind" NOT NULL,
    "payload" JSONB NOT NULL DEFAULT '{}',
    "sendAt" TIMESTAMP(3) NOT NULL,
    "sentAt" TIMESTAMP(3),
    "failedAt" TIMESTAMP(3),
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "lastError" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "scheduledEmail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "jobIndex_isActive_idx" ON "jobIndex"("isActive");

-- CreateIndex
CREATE INDEX "jobIndex_isActive_createdAt_idx" ON "jobIndex"("isActive", "createdAt");

-- CreateIndex
CREATE INDEX "jobIndex_workMode_idx" ON "jobIndex"("workMode");

-- CreateIndex
CREATE INDEX "jobIndex_experienceLevel_idx" ON "jobIndex"("experienceLevel");

-- CreateIndex
CREATE INDEX "jobIndex_domain_idx" ON "jobIndex"("domain");

-- CreateIndex
CREATE INDEX "jobIndex_isEnriched_idx" ON "jobIndex"("isEnriched");

-- CreateIndex
CREATE INDEX "jobIndex_hasEmbedding_idx" ON "jobIndex"("hasEmbedding");

-- CreateIndex
CREATE UNIQUE INDEX "jobIndex_sourceType_sourceId_key" ON "jobIndex"("sourceType", "sourceId");

-- CreateIndex
CREATE UNIQUE INDEX "userJobPreference_userId_key" ON "userJobPreference"("userId");

-- CreateIndex
CREATE INDEX "jobMatch_userId_score_idx" ON "jobMatch"("userId", "score");

-- CreateIndex
CREATE INDEX "jobMatch_userId_seen_dismissed_idx" ON "jobMatch"("userId", "seen", "dismissed");

-- CreateIndex
CREATE INDEX "jobMatch_createdAt_idx" ON "jobMatch"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "jobMatch_userId_jobIndexId_key" ON "jobMatch"("userId", "jobIndexId");

-- CreateIndex
CREATE INDEX "jobAgentConversation_userId_isActive_idx" ON "jobAgentConversation"("userId", "isActive");

-- CreateIndex
CREATE INDEX "fundingSignal_status_idx" ON "fundingSignal"("status");

-- CreateIndex
CREATE INDEX "fundingSignal_source_idx" ON "fundingSignal"("source");

-- CreateIndex
CREATE INDEX "fundingSignal_announcedAt_idx" ON "fundingSignal"("announcedAt");

-- CreateIndex
CREATE INDEX "fundingSignal_industry_idx" ON "fundingSignal"("industry");

-- CreateIndex
CREATE UNIQUE INDEX "fundingSignal_source_sourceId_key" ON "fundingSignal"("source", "sourceId");

-- CreateIndex
CREATE INDEX "repoRequest_status_idx" ON "repoRequest"("status");

-- CreateIndex
CREATE INDEX "repoRequest_userId_idx" ON "repoRequest"("userId");

-- CreateIndex
CREATE INDEX "dsaTestCase_problemId_idx" ON "dsaTestCase"("problemId");

-- CreateIndex
CREATE INDEX "dsaSubmission_studentId_problemId_idx" ON "dsaSubmission"("studentId", "problemId");

-- CreateIndex
CREATE INDEX "dsaSubmission_studentId_idx" ON "dsaSubmission"("studentId");

-- CreateIndex
CREATE INDEX "dsaSubmission_createdAt_idx" ON "dsaSubmission"("createdAt");

-- CreateIndex
CREATE INDEX "externalJobApplication_studentId_idx" ON "externalJobApplication"("studentId");

-- CreateIndex
CREATE INDEX "externalJobApplication_adminJobId_idx" ON "externalJobApplication"("adminJobId");

-- CreateIndex
CREATE UNIQUE INDEX "externalJobApplication_studentId_adminJobId_key" ON "externalJobApplication"("studentId", "adminJobId");

-- CreateIndex
CREATE INDEX "emailCampaign_userId_idx" ON "emailCampaign"("userId");

-- CreateIndex
CREATE INDEX "emailCampaign_status_idx" ON "emailCampaign"("status");

-- CreateIndex
CREATE INDEX "emailLog_campaignId_idx" ON "emailLog"("campaignId");

-- CreateIndex
CREATE INDEX "emailLog_status_idx" ON "emailLog"("status");

-- CreateIndex
CREATE INDEX "errorLog_statusCode_idx" ON "errorLog"("statusCode");

-- CreateIndex
CREATE INDEX "errorLog_createdAt_idx" ON "errorLog"("createdAt");

-- CreateIndex
CREATE INDEX "milestoneEmail_studentId_idx" ON "milestoneEmail"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "milestoneEmail_studentId_milestoneType_milestoneKey_key" ON "milestoneEmail"("studentId", "milestoneType", "milestoneKey");

-- CreateIndex
CREATE INDEX "interviewExperience_companyId_status_idx" ON "interviewExperience"("companyId", "status");

-- CreateIndex
CREATE INDEX "interviewExperience_status_idx" ON "interviewExperience"("status");

-- CreateIndex
CREATE INDEX "interviewExperience_role_idx" ON "interviewExperience"("role");

-- CreateIndex
CREATE INDEX "interviewExperience_interviewYear_idx" ON "interviewExperience"("interviewYear");

-- CreateIndex
CREATE INDEX "interviewExperience_userId_idx" ON "interviewExperience"("userId");

-- CreateIndex
CREATE INDEX "interviewExperienceUpvote_experienceId_idx" ON "interviewExperienceUpvote"("experienceId");

-- CreateIndex
CREATE UNIQUE INDEX "interviewExperienceUpvote_experienceId_userId_key" ON "interviewExperienceUpvote"("experienceId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "department_name_key" ON "department"("name");

-- CreateIndex
CREATE UNIQUE INDEX "department_slug_key" ON "department"("slug");

-- CreateIndex
CREATE INDEX "department_parentId_idx" ON "department"("parentId");

-- CreateIndex
CREATE INDEX "department_isActive_idx" ON "department"("isActive");

-- CreateIndex
CREATE UNIQUE INDEX "employee_userId_key" ON "employee"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "employee_employeeCode_key" ON "employee"("employeeCode");

-- CreateIndex
CREATE UNIQUE INDEX "employee_email_key" ON "employee"("email");

-- CreateIndex
CREATE INDEX "employee_departmentId_idx" ON "employee"("departmentId");

-- CreateIndex
CREATE INDEX "employee_status_idx" ON "employee"("status");

-- CreateIndex
CREATE INDEX "employee_reportingManagerId_idx" ON "employee"("reportingManagerId");

-- CreateIndex
CREATE INDEX "employee_employmentType_idx" ON "employee"("employmentType");

-- CreateIndex
CREATE INDEX "employee_joiningDate_idx" ON "employee"("joiningDate");

-- CreateIndex
CREATE UNIQUE INDEX "customRole_name_key" ON "customRole"("name");

-- CreateIndex
CREATE INDEX "userCustomRole_userId_idx" ON "userCustomRole"("userId");

-- CreateIndex
CREATE INDEX "userCustomRole_roleId_idx" ON "userCustomRole"("roleId");

-- CreateIndex
CREATE UNIQUE INDEX "userCustomRole_userId_roleId_key" ON "userCustomRole"("userId", "roleId");

-- CreateIndex
CREATE UNIQUE INDEX "leavePolicy_leaveType_key" ON "leavePolicy"("leaveType");

-- CreateIndex
CREATE UNIQUE INDEX "departmentLeavePolicy_departmentId_policyId_key" ON "departmentLeavePolicy"("departmentId", "policyId");

-- CreateIndex
CREATE INDEX "leaveBalance_employeeId_idx" ON "leaveBalance"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "leaveBalance_employeeId_leaveType_year_key" ON "leaveBalance"("employeeId", "leaveType", "year");

-- CreateIndex
CREATE INDEX "leaveRequest_employeeId_idx" ON "leaveRequest"("employeeId");

-- CreateIndex
CREATE INDEX "leaveRequest_status_idx" ON "leaveRequest"("status");

-- CreateIndex
CREATE INDEX "leaveRequest_startDate_endDate_idx" ON "leaveRequest"("startDate", "endDate");

-- CreateIndex
CREATE INDEX "leaveRequest_approverId_idx" ON "leaveRequest"("approverId");

-- CreateIndex
CREATE INDEX "attendanceRecord_employeeId_idx" ON "attendanceRecord"("employeeId");

-- CreateIndex
CREATE INDEX "attendanceRecord_date_idx" ON "attendanceRecord"("date");

-- CreateIndex
CREATE INDEX "attendanceRecord_status_idx" ON "attendanceRecord"("status");

-- CreateIndex
CREATE UNIQUE INDEX "attendanceRecord_employeeId_date_key" ON "attendanceRecord"("employeeId", "date");

-- CreateIndex
CREATE INDEX "payrollRecord_employeeId_idx" ON "payrollRecord"("employeeId");

-- CreateIndex
CREATE INDEX "payrollRecord_month_year_idx" ON "payrollRecord"("month", "year");

-- CreateIndex
CREATE INDEX "payrollRecord_status_idx" ON "payrollRecord"("status");

-- CreateIndex
CREATE UNIQUE INDEX "payrollRecord_employeeId_month_year_key" ON "payrollRecord"("employeeId", "month", "year");

-- CreateIndex
CREATE INDEX "contractorPayment_employeeId_idx" ON "contractorPayment"("employeeId");

-- CreateIndex
CREATE INDEX "contractorPayment_status_idx" ON "contractorPayment"("status");

-- CreateIndex
CREATE INDEX "performanceReview_employeeId_idx" ON "performanceReview"("employeeId");

-- CreateIndex
CREATE INDEX "performanceReview_reviewerId_idx" ON "performanceReview"("reviewerId");

-- CreateIndex
CREATE INDEX "performanceReview_cycle_period_idx" ON "performanceReview"("cycle", "period");

-- CreateIndex
CREATE INDEX "performanceReview_status_idx" ON "performanceReview"("status");

-- CreateIndex
CREATE INDEX "hrTask_assigneeId_idx" ON "hrTask"("assigneeId");

-- CreateIndex
CREATE INDEX "hrTask_creatorId_idx" ON "hrTask"("creatorId");

-- CreateIndex
CREATE INDEX "hrTask_status_idx" ON "hrTask"("status");

-- CreateIndex
CREATE INDEX "hrTask_priority_idx" ON "hrTask"("priority");

-- CreateIndex
CREATE INDEX "hrTask_dueDate_idx" ON "hrTask"("dueDate");

-- CreateIndex
CREATE INDEX "reimbursement_employeeId_idx" ON "reimbursement"("employeeId");

-- CreateIndex
CREATE INDEX "reimbursement_status_idx" ON "reimbursement"("status");

-- CreateIndex
CREATE INDEX "reimbursement_createdAt_idx" ON "reimbursement"("createdAt");

-- CreateIndex
CREATE INDEX "interview_applicationId_idx" ON "interview"("applicationId");

-- CreateIndex
CREATE INDEX "interview_scheduledAt_idx" ON "interview"("scheduledAt");

-- CreateIndex
CREATE INDEX "interview_status_idx" ON "interview"("status");

-- CreateIndex
CREATE UNIQUE INDEX "onboardingChecklist_employeeId_key" ON "onboardingChecklist"("employeeId");

-- CreateIndex
CREATE INDEX "complianceDocument_category_idx" ON "complianceDocument"("category");

-- CreateIndex
CREATE INDEX "complianceDocument_expiryDate_idx" ON "complianceDocument"("expiryDate");

-- CreateIndex
CREATE UNIQUE INDEX "workflowDefinition_name_key" ON "workflowDefinition"("name");

-- CreateIndex
CREATE INDEX "workflowInstance_entityType_entityId_idx" ON "workflowInstance"("entityType", "entityId");

-- CreateIndex
CREATE INDEX "workflowInstance_status_idx" ON "workflowInstance"("status");

-- CreateIndex
CREATE INDEX "holiday_year_idx" ON "holiday"("year");

-- CreateIndex
CREATE INDEX "holiday_date_idx" ON "holiday"("date");

-- CreateIndex
CREATE UNIQUE INDEX "holiday_name_date_key" ON "holiday"("name", "date");

-- CreateIndex
CREATE UNIQUE INDEX "roadmap_slug_key" ON "roadmap"("slug");

-- CreateIndex
CREATE INDEX "roadmap_isPublished_idx" ON "roadmap"("isPublished");

-- CreateIndex
CREATE INDEX "roadmap_slug_idx" ON "roadmap"("slug");

-- CreateIndex
CREATE INDEX "roadmap_ownerUserId_idx" ON "roadmap"("ownerUserId");

-- CreateIndex
CREATE INDEX "roadmapSection_roadmapId_idx" ON "roadmapSection"("roadmapId");

-- CreateIndex
CREATE UNIQUE INDEX "roadmapSection_roadmapId_slug_key" ON "roadmapSection"("roadmapId", "slug");

-- CreateIndex
CREATE INDEX "roadmapTopic_sectionId_idx" ON "roadmapTopic"("sectionId");

-- CreateIndex
CREATE UNIQUE INDEX "roadmapTopic_sectionId_slug_key" ON "roadmapTopic"("sectionId", "slug");

-- CreateIndex
CREATE INDEX "roadmapResource_topicId_idx" ON "roadmapResource"("topicId");

-- CreateIndex
CREATE INDEX "roadmapEnrollment_userId_idx" ON "roadmapEnrollment"("userId");

-- CreateIndex
CREATE INDEX "roadmapEnrollment_status_idx" ON "roadmapEnrollment"("status");

-- CreateIndex
CREATE UNIQUE INDEX "roadmapEnrollment_userId_roadmapId_key" ON "roadmapEnrollment"("userId", "roadmapId");

-- CreateIndex
CREATE INDEX "roadmapTopicProgress_enrollmentId_idx" ON "roadmapTopicProgress"("enrollmentId");

-- CreateIndex
CREATE INDEX "roadmapTopicProgress_topicId_idx" ON "roadmapTopicProgress"("topicId");

-- CreateIndex
CREATE UNIQUE INDEX "roadmapTopicProgress_enrollmentId_topicId_key" ON "roadmapTopicProgress"("enrollmentId", "topicId");

-- CreateIndex
CREATE INDEX "scheduledEmail_sendAt_sentAt_idx" ON "scheduledEmail"("sendAt", "sentAt");

-- CreateIndex
CREATE INDEX "scheduledEmail_userId_kind_idx" ON "scheduledEmail"("userId", "kind");

-- CreateIndex
CREATE UNIQUE INDEX "adminJob_slug_key" ON "adminJob"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "dsaProblem_slug_key" ON "dsaProblem"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "dsaProblem_leetcodeSlug_key" ON "dsaProblem"("leetcodeSlug");

-- CreateIndex
CREATE INDEX "dsaProblem_leetcodeId_idx" ON "dsaProblem"("leetcodeId");

-- CreateIndex
CREATE UNIQUE INDEX "payment_dodoPaymentId_key" ON "payment"("dodoPaymentId");

-- CreateIndex
CREATE INDEX "payment_dodoPaymentId_idx" ON "payment"("dodoPaymentId");

-- AddForeignKey
ALTER TABLE "userJobPreference" ADD CONSTRAINT "userJobPreference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobMatch" ADD CONSTRAINT "jobMatch_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobMatch" ADD CONSTRAINT "jobMatch_jobIndexId_fkey" FOREIGN KEY ("jobIndexId") REFERENCES "jobIndex"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobAgentConversation" ADD CONSTRAINT "jobAgentConversation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repoRequest" ADD CONSTRAINT "repoRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dsaTestCase" ADD CONSTRAINT "dsaTestCase_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "dsaProblem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dsaSubmission" ADD CONSTRAINT "dsaSubmission_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dsaSubmission" ADD CONSTRAINT "dsaSubmission_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "dsaProblem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "externalJobApplication" ADD CONSTRAINT "externalJobApplication_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "externalJobApplication" ADD CONSTRAINT "externalJobApplication_adminJobId_fkey" FOREIGN KEY ("adminJobId") REFERENCES "adminJob"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emailCampaign" ADD CONSTRAINT "emailCampaign_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emailLog" ADD CONSTRAINT "emailLog_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "emailCampaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "milestoneEmail" ADD CONSTRAINT "milestoneEmail_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interviewExperience" ADD CONSTRAINT "interviewExperience_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interviewExperience" ADD CONSTRAINT "interviewExperience_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interviewExperienceUpvote" ADD CONSTRAINT "interviewExperienceUpvote_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "interviewExperience"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interviewExperienceUpvote" ADD CONSTRAINT "interviewExperienceUpvote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "department" ADD CONSTRAINT "department_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_reportingManagerId_fkey" FOREIGN KEY ("reportingManagerId") REFERENCES "employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userCustomRole" ADD CONSTRAINT "userCustomRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "customRole"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userCustomRole" ADD CONSTRAINT "userCustomRole_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "departmentLeavePolicy" ADD CONSTRAINT "departmentLeavePolicy_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "department"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "departmentLeavePolicy" ADD CONSTRAINT "departmentLeavePolicy_policyId_fkey" FOREIGN KEY ("policyId") REFERENCES "leavePolicy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leaveBalance" ADD CONSTRAINT "leaveBalance_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leaveRequest" ADD CONSTRAINT "leaveRequest_approverId_fkey" FOREIGN KEY ("approverId") REFERENCES "employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leaveRequest" ADD CONSTRAINT "leaveRequest_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendanceRecord" ADD CONSTRAINT "attendanceRecord_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payrollRecord" ADD CONSTRAINT "payrollRecord_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contractorPayment" ADD CONSTRAINT "contractorPayment_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "performanceReview" ADD CONSTRAINT "performanceReview_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "performanceReview" ADD CONSTRAINT "performanceReview_reviewerId_fkey" FOREIGN KEY ("reviewerId") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hrTask" ADD CONSTRAINT "hrTask_assigneeId_fkey" FOREIGN KEY ("assigneeId") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hrTask" ADD CONSTRAINT "hrTask_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hrTask" ADD CONSTRAINT "hrTask_parentTaskId_fkey" FOREIGN KEY ("parentTaskId") REFERENCES "hrTask"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reimbursement" ADD CONSTRAINT "reimbursement_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interview" ADD CONSTRAINT "interview_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "application"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "onboardingChecklist" ADD CONSTRAINT "onboardingChecklist_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workflowInstance" ADD CONSTRAINT "workflowInstance_definitionId_fkey" FOREIGN KEY ("definitionId") REFERENCES "workflowDefinition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roadmap" ADD CONSTRAINT "roadmap_ownerUserId_fkey" FOREIGN KEY ("ownerUserId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roadmapSection" ADD CONSTRAINT "roadmapSection_roadmapId_fkey" FOREIGN KEY ("roadmapId") REFERENCES "roadmap"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roadmapTopic" ADD CONSTRAINT "roadmapTopic_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "roadmapSection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roadmapResource" ADD CONSTRAINT "roadmapResource_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "roadmapTopic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roadmapEnrollment" ADD CONSTRAINT "roadmapEnrollment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roadmapEnrollment" ADD CONSTRAINT "roadmapEnrollment_roadmapId_fkey" FOREIGN KEY ("roadmapId") REFERENCES "roadmap"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roadmapTopicProgress" ADD CONSTRAINT "roadmapTopicProgress_enrollmentId_fkey" FOREIGN KEY ("enrollmentId") REFERENCES "roadmapEnrollment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roadmapTopicProgress" ADD CONSTRAINT "roadmapTopicProgress_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "roadmapTopic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scheduledEmail" ADD CONSTRAINT "scheduledEmail_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
