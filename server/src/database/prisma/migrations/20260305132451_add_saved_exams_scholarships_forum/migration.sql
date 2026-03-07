-- CreateEnum
CREATE TYPE "ScholarshipType" AS ENUM ('GOVERNMENT', 'PRIVATE', 'UNIVERSITY', 'NGO', 'INTERNATIONAL');

-- CreateEnum
CREATE TYPE "ScholarshipCategory" AS ENUM ('MERIT', 'NEED_BASED', 'MINORITY', 'SPORTS', 'WOMEN', 'DISABILITY', 'SC_ST', 'OBC', 'RESEARCH', 'INTERNATIONAL');

-- CreateEnum
CREATE TYPE "ScholarshipStatus" AS ENUM ('ACTIVE', 'UPCOMING', 'EXPIRED', 'CLOSED');

-- CreateEnum
CREATE TYPE "QuestionStatus" AS ENUM ('OPEN', 'ANSWERED', 'CLOSED');

-- AlterTable
ALTER TABLE "entranceExam" ADD COLUMN     "applicationFees" JSONB,
ADD COLUMN     "durationMinutes" INTEGER,
ADD COLUMN     "eligibility" TEXT,
ADD COLUMN     "examDate" TIMESTAMP(3),
ADD COLUMN     "examPattern" TEXT,
ADD COLUMN     "importantDates" JSONB,
ADD COLUMN     "negativeMarking" TEXT,
ADD COLUMN     "numberOfQuestions" INTEGER,
ADD COLUMN     "officialNotificationUrl" TEXT,
ADD COLUMN     "preparationTips" TEXT,
ADD COLUMN     "previousYearPaperUrl" TEXT,
ADD COLUMN     "registrationEndDate" TIMESTAMP(3),
ADD COLUMN     "registrationStartDate" TIMESTAMP(3),
ADD COLUMN     "resultDate" TIMESTAMP(3),
ADD COLUMN     "syllabus" TEXT,
ADD COLUMN     "totalMarks" INTEGER;

-- CreateTable
CREATE TABLE "savedCollege" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "collegeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "savedCollege_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "examSubscription" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "examId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "examSubscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scholarship" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "type" "ScholarshipType" NOT NULL,
    "description" TEXT NOT NULL,
    "eligibility" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "amountValue" INTEGER,
    "deadline" TIMESTAMP(3),
    "applicationUrl" TEXT,
    "officialUrl" TEXT,
    "streams" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "categories" "ScholarshipCategory"[],
    "status" "ScholarshipStatus" NOT NULL DEFAULT 'ACTIVE',
    "isPopular" BOOLEAN NOT NULL DEFAULT false,
    "applicationProcess" TEXT,
    "documents" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "renewalPolicy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "scholarship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "forumQuestion" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "upvotes" INTEGER NOT NULL DEFAULT 0,
    "downvotes" INTEGER NOT NULL DEFAULT 0,
    "views" INTEGER NOT NULL DEFAULT 0,
    "status" "QuestionStatus" NOT NULL DEFAULT 'OPEN',
    "answerCount" INTEGER NOT NULL DEFAULT 0,
    "userId" INTEGER NOT NULL,
    "collegeId" INTEGER,
    "examId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "forumQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "forumAnswer" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "upvotes" INTEGER NOT NULL DEFAULT 0,
    "downvotes" INTEGER NOT NULL DEFAULT 0,
    "isAccepted" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "forumAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "forumVote" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "questionId" INTEGER,
    "answerId" INTEGER,
    "value" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "forumVote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "savedCollege_userId_idx" ON "savedCollege"("userId");

-- CreateIndex
CREATE INDEX "savedCollege_collegeId_idx" ON "savedCollege"("collegeId");

-- CreateIndex
CREATE UNIQUE INDEX "savedCollege_userId_collegeId_key" ON "savedCollege"("userId", "collegeId");

-- CreateIndex
CREATE INDEX "examSubscription_userId_idx" ON "examSubscription"("userId");

-- CreateIndex
CREATE INDEX "examSubscription_examId_idx" ON "examSubscription"("examId");

-- CreateIndex
CREATE UNIQUE INDEX "examSubscription_userId_examId_key" ON "examSubscription"("userId", "examId");

-- CreateIndex
CREATE UNIQUE INDEX "scholarship_slug_key" ON "scholarship"("slug");

-- CreateIndex
CREATE INDEX "scholarship_type_idx" ON "scholarship"("type");

-- CreateIndex
CREATE INDEX "scholarship_status_idx" ON "scholarship"("status");

-- CreateIndex
CREATE INDEX "scholarship_deadline_idx" ON "scholarship"("deadline");

-- CreateIndex
CREATE UNIQUE INDEX "forumQuestion_slug_key" ON "forumQuestion"("slug");

-- CreateIndex
CREATE INDEX "forumQuestion_userId_idx" ON "forumQuestion"("userId");

-- CreateIndex
CREATE INDEX "forumQuestion_collegeId_idx" ON "forumQuestion"("collegeId");

-- CreateIndex
CREATE INDEX "forumQuestion_examId_idx" ON "forumQuestion"("examId");

-- CreateIndex
CREATE INDEX "forumQuestion_status_idx" ON "forumQuestion"("status");

-- CreateIndex
CREATE INDEX "forumQuestion_createdAt_idx" ON "forumQuestion"("createdAt");

-- CreateIndex
CREATE INDEX "forumQuestion_upvotes_idx" ON "forumQuestion"("upvotes");

-- CreateIndex
CREATE INDEX "forumAnswer_questionId_idx" ON "forumAnswer"("questionId");

-- CreateIndex
CREATE INDEX "forumAnswer_userId_idx" ON "forumAnswer"("userId");

-- CreateIndex
CREATE INDEX "forumAnswer_upvotes_idx" ON "forumAnswer"("upvotes");

-- CreateIndex
CREATE INDEX "forumVote_questionId_idx" ON "forumVote"("questionId");

-- CreateIndex
CREATE INDEX "forumVote_answerId_idx" ON "forumVote"("answerId");

-- CreateIndex
CREATE UNIQUE INDEX "forumVote_userId_questionId_key" ON "forumVote"("userId", "questionId");

-- CreateIndex
CREATE UNIQUE INDEX "forumVote_userId_answerId_key" ON "forumVote"("userId", "answerId");

-- AddForeignKey
ALTER TABLE "savedCollege" ADD CONSTRAINT "savedCollege_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "savedCollege" ADD CONSTRAINT "savedCollege_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "college"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "examSubscription" ADD CONSTRAINT "examSubscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "examSubscription" ADD CONSTRAINT "examSubscription_examId_fkey" FOREIGN KEY ("examId") REFERENCES "entranceExam"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "forumQuestion" ADD CONSTRAINT "forumQuestion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "forumQuestion" ADD CONSTRAINT "forumQuestion_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "college"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "forumQuestion" ADD CONSTRAINT "forumQuestion_examId_fkey" FOREIGN KEY ("examId") REFERENCES "entranceExam"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "forumAnswer" ADD CONSTRAINT "forumAnswer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "forumAnswer" ADD CONSTRAINT "forumAnswer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "forumQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "forumVote" ADD CONSTRAINT "forumVote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "forumVote" ADD CONSTRAINT "forumVote_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "forumQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "forumVote" ADD CONSTRAINT "forumVote_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "forumAnswer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
