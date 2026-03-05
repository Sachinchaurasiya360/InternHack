-- CreateEnum
CREATE TYPE "CollegeType" AS ENUM ('GOVERNMENT', 'PRIVATE', 'DEEMED', 'AUTONOMOUS', 'CENTRAL', 'STATE');

-- CreateEnum
CREATE TYPE "DegreeLevel" AS ENUM ('DIPLOMA', 'BACHELOR', 'MASTER', 'DOCTORAL', 'CERTIFICATE');

-- CreateEnum
CREATE TYPE "CourseMode" AS ENUM ('FULL_TIME', 'PART_TIME', 'DISTANCE', 'ONLINE');

-- CreateEnum
CREATE TYPE "NaacGrade" AS ENUM ('A_PLUS_PLUS', 'A_PLUS', 'A', 'B_PLUS_PLUS', 'B_PLUS', 'B', 'C', 'UNGRADED');

-- CreateEnum
CREATE TYPE "ExamType" AS ENUM ('NATIONAL', 'STATE', 'UNIVERSITY', 'PRIVATE');

-- CreateEnum
CREATE TYPE "CollegeReviewStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "BlogCategory" AS ENUM ('CAREER_ADVICE', 'INTERVIEW_TIPS', 'SALARY_GUIDE', 'INDUSTRY_INSIGHTS', 'RESUME_TIPS', 'TECH_TRENDS');

-- CreateEnum
CREATE TYPE "BlogStatus" AS ENUM ('DRAFT', 'PUBLISHED');

-- AlterTable
ALTER TABLE "studentSkillProgress" ADD COLUMN     "verifiedAt" TIMESTAMP(3);

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
CREATE TABLE "quiz" (
    "id" SERIAL NOT NULL,
    "skillId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "passThreshold" INTEGER NOT NULL DEFAULT 70,
    "timeLimitSecs" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "quiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quizQuestion" (
    "id" SERIAL NOT NULL,
    "quizId" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "options" JSONB NOT NULL,
    "correctIndex" INTEGER NOT NULL,
    "explanation" TEXT,
    "orderIndex" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "quizQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quizAttempt" (
    "id" SERIAL NOT NULL,
    "quizId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "passed" BOOLEAN NOT NULL,
    "answers" JSONB NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "quizAttempt_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "college" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "logo" TEXT,
    "coverImage" TEXT,
    "description" TEXT NOT NULL,
    "type" "CollegeType" NOT NULL,
    "affiliation" TEXT,
    "naacGrade" "NaacGrade",
    "nirfRanking" INTEGER,
    "nirfYear" INTEGER,
    "website" TEXT,
    "establishedYear" INTEGER,
    "campusSize" TEXT,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT,
    "pincode" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "totalStudents" INTEGER,
    "totalFaculty" INTEGER,
    "acceptedExams" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "facilities" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "streams" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "socialLinks" JSONB NOT NULL DEFAULT '{}',
    "photos" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "avgRating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "reviewCount" INTEGER NOT NULL DEFAULT 0,
    "isApproved" BOOLEAN NOT NULL DEFAULT true,
    "sourceId" TEXT,
    "source" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "college_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collegeCourse" (
    "id" SERIAL NOT NULL,
    "collegeId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "degreeLevel" "DegreeLevel" NOT NULL,
    "specialization" TEXT,
    "stream" TEXT NOT NULL,
    "durationYears" DOUBLE PRECISION NOT NULL,
    "mode" "CourseMode" NOT NULL DEFAULT 'FULL_TIME',
    "totalFees" INTEGER,
    "feesPerYear" INTEGER,
    "eligibility" TEXT,
    "seats" INTEGER,
    "isPopular" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "collegeCourse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collegePlacement" (
    "id" SERIAL NOT NULL,
    "collegeId" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "avgPackageLPA" DOUBLE PRECISION,
    "highestPackageLPA" DOUBLE PRECISION,
    "medianPackageLPA" DOUBLE PRECISION,
    "placementRate" DOUBLE PRECISION,
    "studentsPlaced" INTEGER,
    "totalStudents" INTEGER,
    "topRecruiters" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "sectorWise" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "collegePlacement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "entranceExam" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "fullName" TEXT,
    "type" "ExamType" NOT NULL,
    "conductingBody" TEXT,
    "applicableStreams" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "frequency" TEXT,
    "website" TEXT,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "entranceExam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collegeCutoff" (
    "id" SERIAL NOT NULL,
    "collegeId" INTEGER NOT NULL,
    "courseId" INTEGER,
    "examId" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "gender" TEXT,
    "openingRank" INTEGER,
    "closingRank" INTEGER,
    "openingScore" DOUBLE PRECISION,
    "closingScore" DOUBLE PRECISION,
    "round" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "collegeCutoff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collegeReview" (
    "id" SERIAL NOT NULL,
    "collegeId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "overallRating" INTEGER NOT NULL,
    "placementsRating" INTEGER,
    "infrastructureRating" INTEGER,
    "facultyRating" INTEGER,
    "campusLifeRating" INTEGER,
    "valueForMoneyRating" INTEGER,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "pros" TEXT,
    "cons" TEXT,
    "courseStudied" TEXT,
    "graduationYear" INTEGER,
    "status" "CollegeReviewStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "collegeReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collegeGallery" (
    "id" SERIAL NOT NULL,
    "collegeId" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "caption" TEXT,
    "category" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "collegeGallery_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "blogPost_slug_key" ON "blogPost"("slug");

-- CreateIndex
CREATE INDEX "blogPost_status_idx" ON "blogPost"("status");

-- CreateIndex
CREATE INDEX "blogPost_category_idx" ON "blogPost"("category");

-- CreateIndex
CREATE INDEX "blogPost_publishedAt_idx" ON "blogPost"("publishedAt");

-- CreateIndex
CREATE UNIQUE INDEX "quiz_skillId_key" ON "quiz"("skillId");

-- CreateIndex
CREATE INDEX "quizQuestion_quizId_idx" ON "quizQuestion"("quizId");

-- CreateIndex
CREATE INDEX "quizAttempt_studentId_idx" ON "quizAttempt"("studentId");

-- CreateIndex
CREATE INDEX "quizAttempt_quizId_idx" ON "quizAttempt"("quizId");

-- CreateIndex
CREATE UNIQUE INDEX "gsocOrganization_slug_key" ON "gsocOrganization"("slug");

-- CreateIndex
CREATE INDEX "gsocOrganization_category_idx" ON "gsocOrganization"("category");

-- CreateIndex
CREATE INDEX "gsocOrganization_name_idx" ON "gsocOrganization"("name");

-- CreateIndex
CREATE UNIQUE INDEX "college_slug_key" ON "college"("slug");

-- CreateIndex
CREATE INDEX "college_state_idx" ON "college"("state");

-- CreateIndex
CREATE INDEX "college_city_idx" ON "college"("city");

-- CreateIndex
CREATE INDEX "college_type_idx" ON "college"("type");

-- CreateIndex
CREATE INDEX "college_naacGrade_idx" ON "college"("naacGrade");

-- CreateIndex
CREATE INDEX "college_nirfRanking_idx" ON "college"("nirfRanking");

-- CreateIndex
CREATE INDEX "college_isApproved_idx" ON "college"("isApproved");

-- CreateIndex
CREATE UNIQUE INDEX "college_source_sourceId_key" ON "college"("source", "sourceId");

-- CreateIndex
CREATE INDEX "collegeCourse_collegeId_idx" ON "collegeCourse"("collegeId");

-- CreateIndex
CREATE INDEX "collegeCourse_stream_idx" ON "collegeCourse"("stream");

-- CreateIndex
CREATE INDEX "collegeCourse_degree_idx" ON "collegeCourse"("degree");

-- CreateIndex
CREATE INDEX "collegeCourse_degreeLevel_idx" ON "collegeCourse"("degreeLevel");

-- CreateIndex
CREATE INDEX "collegePlacement_collegeId_idx" ON "collegePlacement"("collegeId");

-- CreateIndex
CREATE UNIQUE INDEX "collegePlacement_collegeId_year_key" ON "collegePlacement"("collegeId", "year");

-- CreateIndex
CREATE UNIQUE INDEX "entranceExam_name_key" ON "entranceExam"("name");

-- CreateIndex
CREATE UNIQUE INDEX "entranceExam_slug_key" ON "entranceExam"("slug");

-- CreateIndex
CREATE INDEX "collegeCutoff_collegeId_idx" ON "collegeCutoff"("collegeId");

-- CreateIndex
CREATE INDEX "collegeCutoff_examId_idx" ON "collegeCutoff"("examId");

-- CreateIndex
CREATE INDEX "collegeCutoff_year_idx" ON "collegeCutoff"("year");

-- CreateIndex
CREATE INDEX "collegeCutoff_category_idx" ON "collegeCutoff"("category");

-- CreateIndex
CREATE INDEX "collegeReview_collegeId_idx" ON "collegeReview"("collegeId");

-- CreateIndex
CREATE INDEX "collegeReview_status_idx" ON "collegeReview"("status");

-- AddForeignKey
ALTER TABLE "blogPost" ADD CONSTRAINT "blogPost_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quiz" ADD CONSTRAINT "quiz_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "careerSkill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quizQuestion" ADD CONSTRAINT "quizQuestion_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "quiz"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quizAttempt" ADD CONSTRAINT "quizAttempt_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "quiz"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quizAttempt" ADD CONSTRAINT "quizAttempt_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collegeCourse" ADD CONSTRAINT "collegeCourse_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "college"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collegePlacement" ADD CONSTRAINT "collegePlacement_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "college"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collegeCutoff" ADD CONSTRAINT "collegeCutoff_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "college"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collegeCutoff" ADD CONSTRAINT "collegeCutoff_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "collegeCourse"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collegeCutoff" ADD CONSTRAINT "collegeCutoff_examId_fkey" FOREIGN KEY ("examId") REFERENCES "entranceExam"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collegeReview" ADD CONSTRAINT "collegeReview_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "college"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collegeReview" ADD CONSTRAINT "collegeReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collegeGallery" ADD CONSTRAINT "collegeGallery_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "college"("id") ON DELETE CASCADE ON UPDATE CASCADE;
