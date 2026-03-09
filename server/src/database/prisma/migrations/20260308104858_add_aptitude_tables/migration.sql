/*
  Warnings:

  - You are about to drop the `college` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `collegeCourse` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `collegeCutoff` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `collegeGallery` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `collegePlacement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `collegeReview` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `entranceExam` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `examSubscription` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `forumAnswer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `forumQuestion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `forumVote` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `savedCollege` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `scholarship` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "application" DROP CONSTRAINT "application_studentId_fkey";

-- DropForeignKey
ALTER TABLE "atsScore" DROP CONSTRAINT "atsScore_studentId_fkey";

-- DropForeignKey
ALTER TABLE "blogPost" DROP CONSTRAINT "blogPost_authorId_fkey";

-- DropForeignKey
ALTER TABLE "collegeCourse" DROP CONSTRAINT "collegeCourse_collegeId_fkey";

-- DropForeignKey
ALTER TABLE "collegeCutoff" DROP CONSTRAINT "collegeCutoff_collegeId_fkey";

-- DropForeignKey
ALTER TABLE "collegeCutoff" DROP CONSTRAINT "collegeCutoff_courseId_fkey";

-- DropForeignKey
ALTER TABLE "collegeCutoff" DROP CONSTRAINT "collegeCutoff_examId_fkey";

-- DropForeignKey
ALTER TABLE "collegeGallery" DROP CONSTRAINT "collegeGallery_collegeId_fkey";

-- DropForeignKey
ALTER TABLE "collegePlacement" DROP CONSTRAINT "collegePlacement_collegeId_fkey";

-- DropForeignKey
ALTER TABLE "collegeReview" DROP CONSTRAINT "collegeReview_collegeId_fkey";

-- DropForeignKey
ALTER TABLE "collegeReview" DROP CONSTRAINT "collegeReview_userId_fkey";

-- DropForeignKey
ALTER TABLE "companyContact" DROP CONSTRAINT "companyContact_addedById_fkey";

-- DropForeignKey
ALTER TABLE "companyContribution" DROP CONSTRAINT "companyContribution_userId_fkey";

-- DropForeignKey
ALTER TABLE "companyReview" DROP CONSTRAINT "companyReview_userId_fkey";

-- DropForeignKey
ALTER TABLE "examSubscription" DROP CONSTRAINT "examSubscription_examId_fkey";

-- DropForeignKey
ALTER TABLE "examSubscription" DROP CONSTRAINT "examSubscription_userId_fkey";

-- DropForeignKey
ALTER TABLE "forumAnswer" DROP CONSTRAINT "forumAnswer_questionId_fkey";

-- DropForeignKey
ALTER TABLE "forumAnswer" DROP CONSTRAINT "forumAnswer_userId_fkey";

-- DropForeignKey
ALTER TABLE "forumQuestion" DROP CONSTRAINT "forumQuestion_collegeId_fkey";

-- DropForeignKey
ALTER TABLE "forumQuestion" DROP CONSTRAINT "forumQuestion_examId_fkey";

-- DropForeignKey
ALTER TABLE "forumQuestion" DROP CONSTRAINT "forumQuestion_userId_fkey";

-- DropForeignKey
ALTER TABLE "forumVote" DROP CONSTRAINT "forumVote_answerId_fkey";

-- DropForeignKey
ALTER TABLE "forumVote" DROP CONSTRAINT "forumVote_questionId_fkey";

-- DropForeignKey
ALTER TABLE "forumVote" DROP CONSTRAINT "forumVote_userId_fkey";

-- DropForeignKey
ALTER TABLE "job" DROP CONSTRAINT "job_recruiterId_fkey";

-- DropForeignKey
ALTER TABLE "payment" DROP CONSTRAINT "payment_userId_fkey";

-- DropForeignKey
ALTER TABLE "quizAttempt" DROP CONSTRAINT "quizAttempt_studentId_fkey";

-- DropForeignKey
ALTER TABLE "savedCollege" DROP CONSTRAINT "savedCollege_collegeId_fkey";

-- DropForeignKey
ALTER TABLE "savedCollege" DROP CONSTRAINT "savedCollege_userId_fkey";

-- DropForeignKey
ALTER TABLE "studentCareer" DROP CONSTRAINT "studentCareer_careerId_fkey";

-- DropForeignKey
ALTER TABLE "studentCareer" DROP CONSTRAINT "studentCareer_studentId_fkey";

-- DropForeignKey
ALTER TABLE "studentSkillProgress" DROP CONSTRAINT "studentSkillProgress_studentId_fkey";

-- AlterTable
ALTER TABLE "companyContact" ALTER COLUMN "addedById" DROP NOT NULL;

-- AlterTable
ALTER TABLE "job" ALTER COLUMN "recruiterId" DROP NOT NULL;

-- DropTable
DROP TABLE "college";

-- DropTable
DROP TABLE "collegeCourse";

-- DropTable
DROP TABLE "collegeCutoff";

-- DropTable
DROP TABLE "collegeGallery";

-- DropTable
DROP TABLE "collegePlacement";

-- DropTable
DROP TABLE "collegeReview";

-- DropTable
DROP TABLE "entranceExam";

-- DropTable
DROP TABLE "examSubscription";

-- DropTable
DROP TABLE "forumAnswer";

-- DropTable
DROP TABLE "forumQuestion";

-- DropTable
DROP TABLE "forumVote";

-- DropTable
DROP TABLE "savedCollege";

-- DropTable
DROP TABLE "scholarship";

-- DropEnum
DROP TYPE "CollegeReviewStatus";

-- DropEnum
DROP TYPE "CollegeType";

-- DropEnum
DROP TYPE "CourseMode";

-- DropEnum
DROP TYPE "DegreeLevel";

-- DropEnum
DROP TYPE "ExamType";

-- DropEnum
DROP TYPE "NaacGrade";

-- DropEnum
DROP TYPE "QuestionStatus";

-- DropEnum
DROP TYPE "ScholarshipCategory";

-- DropEnum
DROP TYPE "ScholarshipStatus";

-- DropEnum
DROP TYPE "ScholarshipType";

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
CREATE INDEX "application_status_idx" ON "application"("status");

-- CreateIndex
CREATE INDEX "application_createdAt_idx" ON "application"("createdAt");

-- CreateIndex
CREATE INDEX "atsScore_createdAt_idx" ON "atsScore"("createdAt");

-- CreateIndex
CREATE INDEX "blogPost_authorId_idx" ON "blogPost"("authorId");

-- CreateIndex
CREATE INDEX "company_createdById_idx" ON "company"("createdById");

-- CreateIndex
CREATE INDEX "companyReview_userId_idx" ON "companyReview"("userId");

-- CreateIndex
CREATE INDEX "companyReview_createdAt_idx" ON "companyReview"("createdAt");

-- CreateIndex
CREATE INDEX "dsaProblem_difficulty_idx" ON "dsaProblem"("difficulty");

-- CreateIndex
CREATE INDEX "job_deadline_idx" ON "job"("deadline");

-- CreateIndex
CREATE INDEX "job_createdAt_idx" ON "job"("createdAt");

-- CreateIndex
CREATE INDEX "payment_status_idx" ON "payment"("status");

-- CreateIndex
CREATE INDEX "scrapedJob_createdAt_idx" ON "scrapedJob"("createdAt");

-- CreateIndex
CREATE INDEX "user_createdAt_idx" ON "user"("createdAt");

-- AddForeignKey
ALTER TABLE "job" ADD CONSTRAINT "job_recruiterId_fkey" FOREIGN KEY ("recruiterId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "application" ADD CONSTRAINT "application_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atsScore" ADD CONSTRAINT "atsScore_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentCareer" ADD CONSTRAINT "studentCareer_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentCareer" ADD CONSTRAINT "studentCareer_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "career"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentSkillProgress" ADD CONSTRAINT "studentSkillProgress_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companyReview" ADD CONSTRAINT "companyReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companyContact" ADD CONSTRAINT "companyContact_addedById_fkey" FOREIGN KEY ("addedById") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companyContribution" ADD CONSTRAINT "companyContribution_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blogPost" ADD CONSTRAINT "blogPost_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quizAttempt" ADD CONSTRAINT "quizAttempt_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aptitudeTopic" ADD CONSTRAINT "aptitudeTopic_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "aptitudeCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aptitudeQuestion" ADD CONSTRAINT "aptitudeQuestion_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "aptitudeTopic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentAptitudeProgress" ADD CONSTRAINT "studentAptitudeProgress_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentAptitudeProgress" ADD CONSTRAINT "studentAptitudeProgress_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "aptitudeQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
