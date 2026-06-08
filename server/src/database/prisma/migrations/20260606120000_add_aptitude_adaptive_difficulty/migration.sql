-- CreateEnum
CREATE TYPE "AptitudeDifficulty" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- AlterTable: convert aptitudeQuestion.difficulty from text to enum
ALTER TABLE "aptitudeQuestion" ALTER COLUMN "difficulty" DROP DEFAULT;
ALTER TABLE "aptitudeQuestion"
  ALTER COLUMN "difficulty" TYPE "AptitudeDifficulty"
  USING (
    CASE UPPER(TRIM("difficulty"))
      WHEN 'EASY' THEN 'EASY'::"AptitudeDifficulty"
      WHEN 'HARD' THEN 'HARD'::"AptitudeDifficulty"
      ELSE 'MEDIUM'::"AptitudeDifficulty"
    END
  );
ALTER TABLE "aptitudeQuestion" ALTER COLUMN "difficulty" SET DEFAULT 'MEDIUM';

-- CreateTable
CREATE TABLE "studentAptitudeTopicProgress" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "topicId" INTEGER NOT NULL,
    "currentDifficulty" "AptitudeDifficulty" NOT NULL DEFAULT 'MEDIUM',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "studentAptitudeTopicProgress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "studentAptitudeTopicProgress_studentId_topicId_key" ON "studentAptitudeTopicProgress"("studentId", "topicId");
CREATE INDEX "studentAptitudeTopicProgress_studentId_idx" ON "studentAptitudeTopicProgress"("studentId");
CREATE INDEX "aptitudeQuestion_topicId_difficulty_idx" ON "aptitudeQuestion"("topicId", "difficulty");

-- AddForeignKey
ALTER TABLE "studentAptitudeTopicProgress" ADD CONSTRAINT "studentAptitudeTopicProgress_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "studentAptitudeTopicProgress" ADD CONSTRAINT "studentAptitudeTopicProgress_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "aptitudeTopic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
