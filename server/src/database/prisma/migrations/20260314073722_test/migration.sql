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
CREATE TYPE "BadgeCategory" AS ENUM ('CAREER', 'QUIZ', 'SKILL', 'CONTRIBUTION', 'MILESTONE');

-- CreateEnum
CREATE TYPE "CampusDriveStatus" AS ENUM ('DRAFT', 'OPEN', 'CLOSED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "CampusRegistrationStatus" AS ENUM ('REGISTERED', 'SHORTLISTED', 'REJECTED');

-- CreateEnum
CREATE TYPE "AIProviderType" AS ENUM ('GEMINI', 'GROQ', 'OPENROUTER', 'CODESTRAL');

-- CreateEnum
CREATE TYPE "AIServiceType" AS ENUM ('ATS_SCORE', 'COVER_LETTER', 'RESUME_GEN', 'LATEX_CHAT');

-- CreateEnum
CREATE TYPE "ScrapedJobStatus" AS ENUM ('ACTIVE', 'EXPIRED', 'REMOVED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'SUCCESS', 'FAILED');

-- CreateEnum
CREATE TYPE "RepoDifficulty" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED');

-- CreateEnum
CREATE TYPE "RepoDomain" AS ENUM ('AI', 'WEB', 'DEVOPS', 'MOBILE', 'BLOCKCHAIN', 'DATA', 'SECURITY', 'CLOUD', 'GAMING', 'OTHER');

-- CreateEnum
CREATE TYPE "BlogCategory" AS ENUM ('CAREER_ADVICE', 'INTERVIEW_TIPS', 'SALARY_GUIDE', 'INDUSTRY_INSIGHTS', 'RESUME_TIPS', 'TECH_TRENDS');

-- CreateEnum
CREATE TYPE "BlogStatus" AS ENUM ('DRAFT', 'PUBLISHED');

-- CreateEnum
CREATE TYPE "TestDifficulty" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED');

-- CreateEnum
CREATE TYPE "UsageAction" AS ENUM ('ATS_SCORE', 'COVER_LETTER', 'GENERATE_RESUME', 'JOB_APPLICATION', 'MOCK_INTERVIEW');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'STUDENT',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isProfilePublic" BOOLEAN NOT NULL DEFAULT false,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "verificationOtp" TEXT,
    "otpExpiresAt" TIMESTAMP(3),
    "resetPasswordOtp" TEXT,
    "resetOtpExpiresAt" TIMESTAMP(3),
    "contactNo" TEXT,
    "profilePic" TEXT,
    "coverImage" TEXT,
    "resumes" TEXT[] DEFAULT ARRAY[]::TEXT[],
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
    "leetcodeUrl" TEXT,
    "location" TEXT,
    "jobStatus" TEXT,
    "projects" JSONB NOT NULL DEFAULT '[]',
    "achievements" JSONB NOT NULL DEFAULT '[]',

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
    "recruiterId" INTEGER,
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
    "assessmentQuestions" JSONB NOT NULL DEFAULT '[]',
    "timeLimitSecs" INTEGER,
    "autoGrade" BOOLEAN NOT NULL DEFAULT false,
    "activateAt" TIMESTAMP(3),
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
    "addedById" INTEGER,
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

-- CreateTable
CREATE TABLE "blogPost" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "excerpt" TEXT,
    "category" "BlogCategory" NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "authorId" INTEGER NOT NULL,
    "status" "BlogStatus" NOT NULL DEFAULT 'DRAFT',
    "featuredImage" TEXT,
    "readingTime" INTEGER NOT NULL DEFAULT 0,
    "viewCount" INTEGER NOT NULL DEFAULT 0,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blogPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gsocOrganization" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "imageUrl" TEXT,
    "imageBgColor" TEXT,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "topics" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "technologies" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "yearsParticipated" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "totalProjects" INTEGER NOT NULL DEFAULT 0,
    "projectsData" JSONB,
    "contactEmail" TEXT,
    "mailingList" TEXT,
    "ideasUrl" TEXT,
    "guideUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "gsocOrganization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ycCompany" (
    "id" SERIAL NOT NULL,
    "ycId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "oneLiner" TEXT,
    "longDescription" TEXT,
    "batch" TEXT,
    "batchShort" TEXT,
    "status" TEXT,
    "website" TEXT,
    "smallLogoUrl" TEXT,
    "allLocations" TEXT,
    "teamSize" INTEGER,
    "industry" TEXT,
    "subindustry" TEXT,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "industries" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "regions" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "stage" TEXT,
    "isHiring" BOOLEAN NOT NULL DEFAULT false,
    "topCompany" BOOLEAN NOT NULL DEFAULT false,
    "ycUrl" TEXT,
    "launchedAt" TIMESTAMP(3),
    "founders" JSONB,
    "socialLinks" JSONB,
    "scrapedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ycCompany_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dsaTopic" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "orderIndex" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dsaTopic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dsaSubTopic" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "orderIndex" INTEGER NOT NULL,
    "topicId" INTEGER NOT NULL,

    CONSTRAINT "dsaSubTopic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dsaProblem" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "leetcodeUrl" TEXT,
    "gfgUrl" TEXT,
    "articleUrl" TEXT,
    "videoUrl" TEXT,
    "hackerrankUrl" TEXT,
    "codechefUrl" TEXT,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "companies" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "hints" TEXT,
    "sheets" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "orderIndex" INTEGER NOT NULL,
    "subTopicId" INTEGER NOT NULL,

    CONSTRAINT "dsaProblem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studentDsaProgress" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "problemId" INTEGER NOT NULL,
    "solved" BOOLEAN NOT NULL DEFAULT true,
    "notes" TEXT,
    "solvedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "studentDsaProgress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dsaBookmark" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "problemId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dsaBookmark_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studentSqlProgress" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "solved" BOOLEAN NOT NULL DEFAULT false,
    "code" TEXT,
    "solvedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "studentSqlProgress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aptitudeCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "orderIndex" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "aptitudeCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aptitudeTopic" (
    "id" SERIAL NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "orderIndex" INTEGER NOT NULL DEFAULT 0,
    "sourceUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "aptitudeTopic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aptitudeQuestion" (
    "id" SERIAL NOT NULL,
    "topicId" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "optionA" TEXT NOT NULL,
    "optionB" TEXT NOT NULL,
    "optionC" TEXT NOT NULL,
    "optionD" TEXT NOT NULL,
    "optionE" TEXT,
    "correctAnswer" TEXT NOT NULL,
    "explanation" TEXT,
    "difficulty" TEXT NOT NULL DEFAULT 'MEDIUM',
    "companies" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "sourceUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "aptitudeQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studentAptitudeProgress" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    "answered" BOOLEAN NOT NULL DEFAULT false,
    "correct" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "studentAptitudeProgress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skillTest" (
    "id" SERIAL NOT NULL,
    "skillName" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "difficulty" "TestDifficulty" NOT NULL DEFAULT 'INTERMEDIATE',
    "timeLimitSecs" INTEGER NOT NULL DEFAULT 1800,
    "passThreshold" INTEGER NOT NULL DEFAULT 70,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdById" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "skillTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skillTestQuestion" (
    "id" SERIAL NOT NULL,
    "testId" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "options" JSONB NOT NULL,
    "correctIndex" INTEGER NOT NULL,
    "explanation" TEXT,
    "orderIndex" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "skillTestQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skillTestAttempt" (
    "id" SERIAL NOT NULL,
    "testId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "passed" BOOLEAN NOT NULL,
    "answers" JSONB NOT NULL,
    "proctorLog" JSONB,
    "proctoringScore" INTEGER,
    "autoTerminated" BOOLEAN NOT NULL DEFAULT false,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "skillTestAttempt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verifiedSkill" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "skillName" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "attemptId" INTEGER,
    "verifiedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "verifiedSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usageLog" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "action" "UsageAction" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usageLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hackathon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "organizer" TEXT NOT NULL,
    "logo" TEXT,
    "description" TEXT NOT NULL,
    "prizePool" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "locationType" TEXT NOT NULL,
    "website" TEXT,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "tracks" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "eligibility" TEXT,
    "status" TEXT NOT NULL DEFAULT 'upcoming',
    "ecosystem" TEXT NOT NULL,
    "highlights" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hackathon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "iitProfessor" (
    "id" SERIAL NOT NULL,
    "collegeName" TEXT NOT NULL,
    "collegeType" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "areaOfInterest" TEXT,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "iitProfessor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "govInternship" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "timeline" TEXT NOT NULL,
    "organizer" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "stipend" TEXT NOT NULL,
    "eligibility" TEXT NOT NULL,
    "reality" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "govInternship_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "aiServiceConfig" (
    "id" SERIAL NOT NULL,
    "service" "AIServiceType" NOT NULL,
    "provider" "AIProviderType" NOT NULL DEFAULT 'GEMINI',
    "modelName" TEXT NOT NULL DEFAULT 'gemini-2.5-flash-lite',
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "aiServiceConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aiRequestLog" (
    "id" SERIAL NOT NULL,
    "serviceConfigId" INTEGER NOT NULL,
    "service" "AIServiceType" NOT NULL,
    "providerName" "AIProviderType" NOT NULL,
    "modelName" TEXT NOT NULL,
    "latencyMs" INTEGER NOT NULL,
    "inputTokens" INTEGER,
    "outputTokens" INTEGER,
    "success" BOOLEAN NOT NULL DEFAULT true,
    "errorMessage" TEXT,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "aiRequestLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "adminJob" (
    "id" SERIAL NOT NULL,
    "company" TEXT,
    "role" TEXT,
    "description" TEXT,
    "salary" TEXT,
    "location" TEXT,
    "applyLink" TEXT,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "adminJob_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE INDEX "user_role_idx" ON "user"("role");

-- CreateIndex
CREATE INDEX "user_role_isActive_idx" ON "user"("role", "isActive");

-- CreateIndex
CREATE INDEX "user_createdAt_idx" ON "user"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "adminProfile_userId_key" ON "adminProfile"("userId");

-- CreateIndex
CREATE INDEX "adminActivityLog_adminId_idx" ON "adminActivityLog"("adminId");

-- CreateIndex
CREATE INDEX "adminActivityLog_targetType_targetId_idx" ON "adminActivityLog"("targetType", "targetId");

-- CreateIndex
CREATE INDEX "adminActivityLog_createdAt_idx" ON "adminActivityLog"("createdAt");

-- CreateIndex
CREATE INDEX "job_recruiterId_idx" ON "job"("recruiterId");

-- CreateIndex
CREATE INDEX "job_status_idx" ON "job"("status");

-- CreateIndex
CREATE INDEX "job_status_createdAt_idx" ON "job"("status", "createdAt");

-- CreateIndex
CREATE INDEX "job_deadline_idx" ON "job"("deadline");

-- CreateIndex
CREATE INDEX "job_createdAt_idx" ON "job"("createdAt");

-- CreateIndex
CREATE INDEX "round_jobId_idx" ON "round"("jobId");

-- CreateIndex
CREATE UNIQUE INDEX "round_jobId_orderIndex_key" ON "round"("jobId", "orderIndex");

-- CreateIndex
CREATE INDEX "application_jobId_idx" ON "application"("jobId");

-- CreateIndex
CREATE INDEX "application_studentId_idx" ON "application"("studentId");

-- CreateIndex
CREATE INDEX "application_status_idx" ON "application"("status");

-- CreateIndex
CREATE INDEX "application_createdAt_idx" ON "application"("createdAt");

-- CreateIndex
CREATE INDEX "application_jobId_status_idx" ON "application"("jobId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "application_jobId_studentId_key" ON "application"("jobId", "studentId");

-- CreateIndex
CREATE INDEX "roundSubmission_roundId_idx" ON "roundSubmission"("roundId");

-- CreateIndex
CREATE UNIQUE INDEX "roundSubmission_applicationId_roundId_key" ON "roundSubmission"("applicationId", "roundId");

-- CreateIndex
CREATE INDEX "scrapedJob_status_idx" ON "scrapedJob"("status");

-- CreateIndex
CREATE INDEX "scrapedJob_source_idx" ON "scrapedJob"("source");

-- CreateIndex
CREATE INDEX "scrapedJob_createdAt_idx" ON "scrapedJob"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "scrapedJob_source_sourceId_key" ON "scrapedJob"("source", "sourceId");

-- CreateIndex
CREATE INDEX "atsScore_studentId_idx" ON "atsScore"("studentId");

-- CreateIndex
CREATE INDEX "atsScore_createdAt_idx" ON "atsScore"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "company_slug_key" ON "company"("slug");

-- CreateIndex
CREATE INDEX "company_city_idx" ON "company"("city");

-- CreateIndex
CREATE INDEX "company_industry_idx" ON "company"("industry");

-- CreateIndex
CREATE INDEX "company_isApproved_idx" ON "company"("isApproved");

-- CreateIndex
CREATE INDEX "company_createdById_idx" ON "company"("createdById");

-- CreateIndex
CREATE INDEX "companyReview_companyId_idx" ON "companyReview"("companyId");

-- CreateIndex
CREATE INDEX "companyReview_userId_idx" ON "companyReview"("userId");

-- CreateIndex
CREATE INDEX "companyReview_status_idx" ON "companyReview"("status");

-- CreateIndex
CREATE INDEX "companyReview_createdAt_idx" ON "companyReview"("createdAt");

-- CreateIndex
CREATE INDEX "companyContact_companyId_idx" ON "companyContact"("companyId");

-- CreateIndex
CREATE INDEX "companyContribution_status_idx" ON "companyContribution"("status");

-- CreateIndex
CREATE INDEX "companyContribution_userId_idx" ON "companyContribution"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "newsletterSubscriber_email_key" ON "newsletterSubscriber"("email");

-- CreateIndex
CREATE UNIQUE INDEX "payment_razorpayOrderId_key" ON "payment"("razorpayOrderId");

-- CreateIndex
CREATE INDEX "payment_userId_idx" ON "payment"("userId");

-- CreateIndex
CREATE INDEX "payment_status_idx" ON "payment"("status");

-- CreateIndex
CREATE INDEX "payment_razorpayOrderId_idx" ON "payment"("razorpayOrderId");

-- CreateIndex
CREATE INDEX "opensourceRepo_domain_idx" ON "opensourceRepo"("domain");

-- CreateIndex
CREATE INDEX "opensourceRepo_difficulty_idx" ON "opensourceRepo"("difficulty");

-- CreateIndex
CREATE INDEX "opensourceRepo_language_idx" ON "opensourceRepo"("language");

-- CreateIndex
CREATE UNIQUE INDEX "blogPost_slug_key" ON "blogPost"("slug");

-- CreateIndex
CREATE INDEX "blogPost_authorId_idx" ON "blogPost"("authorId");

-- CreateIndex
CREATE INDEX "blogPost_status_idx" ON "blogPost"("status");

-- CreateIndex
CREATE INDEX "blogPost_category_idx" ON "blogPost"("category");

-- CreateIndex
CREATE INDEX "blogPost_publishedAt_idx" ON "blogPost"("publishedAt");

-- CreateIndex
CREATE UNIQUE INDEX "gsocOrganization_slug_key" ON "gsocOrganization"("slug");

-- CreateIndex
CREATE INDEX "gsocOrganization_category_idx" ON "gsocOrganization"("category");

-- CreateIndex
CREATE INDEX "gsocOrganization_name_idx" ON "gsocOrganization"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ycCompany_ycId_key" ON "ycCompany"("ycId");

-- CreateIndex
CREATE INDEX "ycCompany_batchShort_idx" ON "ycCompany"("batchShort");

-- CreateIndex
CREATE INDEX "ycCompany_industry_idx" ON "ycCompany"("industry");

-- CreateIndex
CREATE INDEX "ycCompany_status_idx" ON "ycCompany"("status");

-- CreateIndex
CREATE INDEX "ycCompany_isHiring_idx" ON "ycCompany"("isHiring");

-- CreateIndex
CREATE INDEX "ycCompany_topCompany_idx" ON "ycCompany"("topCompany");

-- CreateIndex
CREATE INDEX "ycCompany_name_idx" ON "ycCompany"("name");

-- CreateIndex
CREATE UNIQUE INDEX "dsaTopic_slug_key" ON "dsaTopic"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "dsaTopic_orderIndex_key" ON "dsaTopic"("orderIndex");

-- CreateIndex
CREATE UNIQUE INDEX "dsaSubTopic_topicId_orderIndex_key" ON "dsaSubTopic"("topicId", "orderIndex");

-- CreateIndex
CREATE INDEX "dsaProblem_difficulty_idx" ON "dsaProblem"("difficulty");

-- CreateIndex
CREATE UNIQUE INDEX "dsaProblem_subTopicId_orderIndex_key" ON "dsaProblem"("subTopicId", "orderIndex");

-- CreateIndex
CREATE INDEX "studentDsaProgress_studentId_idx" ON "studentDsaProgress"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "studentDsaProgress_studentId_problemId_key" ON "studentDsaProgress"("studentId", "problemId");

-- CreateIndex
CREATE INDEX "dsaBookmark_studentId_idx" ON "dsaBookmark"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "dsaBookmark_studentId_problemId_key" ON "dsaBookmark"("studentId", "problemId");

-- CreateIndex
CREATE INDEX "studentSqlProgress_studentId_idx" ON "studentSqlProgress"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "studentSqlProgress_studentId_exerciseId_key" ON "studentSqlProgress"("studentId", "exerciseId");

-- CreateIndex
CREATE UNIQUE INDEX "aptitudeCategory_name_key" ON "aptitudeCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "aptitudeCategory_slug_key" ON "aptitudeCategory"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "aptitudeTopic_slug_key" ON "aptitudeTopic"("slug");

-- CreateIndex
CREATE INDEX "studentAptitudeProgress_studentId_idx" ON "studentAptitudeProgress"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "studentAptitudeProgress_studentId_questionId_key" ON "studentAptitudeProgress"("studentId", "questionId");

-- CreateIndex
CREATE INDEX "skillTest_skillName_idx" ON "skillTest"("skillName");

-- CreateIndex
CREATE INDEX "skillTest_isActive_idx" ON "skillTest"("isActive");

-- CreateIndex
CREATE UNIQUE INDEX "skillTest_skillName_difficulty_key" ON "skillTest"("skillName", "difficulty");

-- CreateIndex
CREATE INDEX "skillTestQuestion_testId_idx" ON "skillTestQuestion"("testId");

-- CreateIndex
CREATE INDEX "skillTestAttempt_studentId_idx" ON "skillTestAttempt"("studentId");

-- CreateIndex
CREATE INDEX "skillTestAttempt_testId_idx" ON "skillTestAttempt"("testId");

-- CreateIndex
CREATE INDEX "verifiedSkill_studentId_idx" ON "verifiedSkill"("studentId");

-- CreateIndex
CREATE INDEX "verifiedSkill_skillName_idx" ON "verifiedSkill"("skillName");

-- CreateIndex
CREATE UNIQUE INDEX "verifiedSkill_studentId_skillName_key" ON "verifiedSkill"("studentId", "skillName");

-- CreateIndex
CREATE INDEX "usageLog_userId_action_createdAt_idx" ON "usageLog"("userId", "action", "createdAt");

-- CreateIndex
CREATE INDEX "hackathon_status_idx" ON "hackathon"("status");

-- CreateIndex
CREATE INDEX "hackathon_ecosystem_idx" ON "hackathon"("ecosystem");

-- CreateIndex
CREATE INDEX "iitProfessor_collegeName_idx" ON "iitProfessor"("collegeName");

-- CreateIndex
CREATE INDEX "iitProfessor_department_idx" ON "iitProfessor"("department");

-- CreateIndex
CREATE INDEX "iitProfessor_name_idx" ON "iitProfessor"("name");

-- CreateIndex
CREATE INDEX "govInternship_category_idx" ON "govInternship"("category");

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

-- CreateIndex
CREATE UNIQUE INDEX "aiServiceConfig_service_key" ON "aiServiceConfig"("service");

-- CreateIndex
CREATE INDEX "aiRequestLog_providerName_createdAt_idx" ON "aiRequestLog"("providerName", "createdAt");

-- CreateIndex
CREATE INDEX "aiRequestLog_service_createdAt_idx" ON "aiRequestLog"("service", "createdAt");

-- CreateIndex
CREATE INDEX "aiRequestLog_createdAt_idx" ON "aiRequestLog"("createdAt");

-- CreateIndex
CREATE INDEX "adminJob_isActive_expiresAt_idx" ON "adminJob"("isActive", "expiresAt");

-- AddForeignKey
ALTER TABLE "adminProfile" ADD CONSTRAINT "adminProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adminActivityLog" ADD CONSTRAINT "adminActivityLog_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job" ADD CONSTRAINT "job_recruiterId_fkey" FOREIGN KEY ("recruiterId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "round" ADD CONSTRAINT "round_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "application" ADD CONSTRAINT "application_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "application" ADD CONSTRAINT "application_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roundSubmission" ADD CONSTRAINT "roundSubmission_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "application"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roundSubmission" ADD CONSTRAINT "roundSubmission_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "round"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atsScore" ADD CONSTRAINT "atsScore_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "company" ADD CONSTRAINT "company_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companyReview" ADD CONSTRAINT "companyReview_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companyReview" ADD CONSTRAINT "companyReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companyContact" ADD CONSTRAINT "companyContact_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companyContact" ADD CONSTRAINT "companyContact_addedById_fkey" FOREIGN KEY ("addedById") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companyContribution" ADD CONSTRAINT "companyContribution_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companyContribution" ADD CONSTRAINT "companyContribution_reviewedById_fkey" FOREIGN KEY ("reviewedById") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blogPost" ADD CONSTRAINT "blogPost_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dsaSubTopic" ADD CONSTRAINT "dsaSubTopic_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "dsaTopic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dsaProblem" ADD CONSTRAINT "dsaProblem_subTopicId_fkey" FOREIGN KEY ("subTopicId") REFERENCES "dsaSubTopic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentDsaProgress" ADD CONSTRAINT "studentDsaProgress_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentDsaProgress" ADD CONSTRAINT "studentDsaProgress_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "dsaProblem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dsaBookmark" ADD CONSTRAINT "dsaBookmark_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dsaBookmark" ADD CONSTRAINT "dsaBookmark_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "dsaProblem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentSqlProgress" ADD CONSTRAINT "studentSqlProgress_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aptitudeTopic" ADD CONSTRAINT "aptitudeTopic_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "aptitudeCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aptitudeQuestion" ADD CONSTRAINT "aptitudeQuestion_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "aptitudeTopic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentAptitudeProgress" ADD CONSTRAINT "studentAptitudeProgress_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentAptitudeProgress" ADD CONSTRAINT "studentAptitudeProgress_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "aptitudeQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skillTest" ADD CONSTRAINT "skillTest_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skillTestQuestion" ADD CONSTRAINT "skillTestQuestion_testId_fkey" FOREIGN KEY ("testId") REFERENCES "skillTest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skillTestAttempt" ADD CONSTRAINT "skillTestAttempt_testId_fkey" FOREIGN KEY ("testId") REFERENCES "skillTest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skillTestAttempt" ADD CONSTRAINT "skillTestAttempt_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "verifiedSkill" ADD CONSTRAINT "verifiedSkill_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usageLog" ADD CONSTRAINT "usageLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE "aiRequestLog" ADD CONSTRAINT "aiRequestLog_serviceConfigId_fkey" FOREIGN KEY ("serviceConfigId") REFERENCES "aiServiceConfig"("id") ON DELETE CASCADE ON UPDATE CASCADE;
