-- AlterTable
ALTER TABLE "user" ADD COLUMN     "achievements" JSONB NOT NULL DEFAULT '[]',
ADD COLUMN     "jobStatus" TEXT,
ADD COLUMN     "projects" JSONB NOT NULL DEFAULT '[]';
