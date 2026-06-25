-- DropIndex
DROP INDEX "opensourceRepo_tags_idx";

-- DropIndex
DROP INDEX "roadmapStudyBuddyPair_roadmapId_active_idx";

-- DropIndex
DROP INDEX "roadmapStudyBuddyPair_roadmapId_active_studentAId_idx";

-- DropIndex
DROP INDEX "roadmapStudyBuddyPair_roadmapId_active_studentBId_idx";

-- AlterTable
ALTER TABLE "UserInterviewQuestionState" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "programInterest" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- CreateTable
CREATE TABLE "outreachTemplate" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "placeholders" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "outreachTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "outreachLog" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "contactName" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "channel" TEXT NOT NULL,
    "templateId" INTEGER,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "followUpDate" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'sent',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "outreachLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "outreachLog_studentId_idx" ON "outreachLog"("studentId");

-- CreateIndex
CREATE INDEX "peerMockInterviewPreference_userId_idx" ON "peerMockInterviewPreference"("userId");

-- AddForeignKey
ALTER TABLE "outreachLog" ADD CONSTRAINT "outreachLog_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
