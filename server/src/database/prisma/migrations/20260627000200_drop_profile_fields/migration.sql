-- Remove profile fields: recruiter visibility, job status, and achievements.
ALTER TABLE "user" DROP COLUMN IF EXISTS "isProfilePublic";
ALTER TABLE "user" DROP COLUMN IF EXISTS "jobStatus";
ALTER TABLE "user" DROP COLUMN IF EXISTS "achievements";
