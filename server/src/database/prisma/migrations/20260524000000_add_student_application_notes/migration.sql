-- Add private student-owned notes to internal and external application trackers.
ALTER TABLE "application" ADD COLUMN "studentNotes" TEXT;

ALTER TABLE "externalJobApplication" ADD COLUMN "studentNotes" TEXT;
ALTER TABLE "externalJobApplication" ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
