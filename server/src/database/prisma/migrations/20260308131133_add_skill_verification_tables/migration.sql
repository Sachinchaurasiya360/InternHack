-- CreateEnum
CREATE TYPE "TestDifficulty" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED');

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
