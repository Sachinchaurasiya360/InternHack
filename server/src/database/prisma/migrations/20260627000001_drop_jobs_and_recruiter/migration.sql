-- Drop the internal recruiter jobs / ATS data model and the RECRUITER role.
-- The recruiter feature and its UI/code were archived to /archived; the external
-- (scraped/admin) job board, job feed, and external applications are retained.
-- CASCADE removes foreign keys and dependent objects; IF EXISTS keeps it idempotent.

-- ── Jobs / ATS tables ───────────────────────────────────────────────────────
DROP TABLE IF EXISTS "roundSubmission" CASCADE;
DROP TABLE IF EXISTS "applicationStatusHistory" CASCADE;
DROP TABLE IF EXISTS "application" CASCADE;
DROP TABLE IF EXISTS "round" CASCADE;
DROP TABLE IF EXISTS "savedCandidate" CASCADE;
DROP TABLE IF EXISTS "job" CASCADE;

-- ── Jobs / ATS enums ────────────────────────────────────────────────────────
DROP TYPE IF EXISTS "JobStatus";
DROP TYPE IF EXISTS "ApplicationStatus";
DROP TYPE IF EXISTS "RoundStatus";
DROP TYPE IF EXISTS "FieldType";

-- ── Remove RECRUITER from the UserRole enum ─────────────────────────────────
-- Reassign any existing recruiter accounts to STUDENT, then rebuild the enum
-- without the RECRUITER value (Postgres cannot drop an in-use enum value).
UPDATE "user" SET "role" = 'STUDENT' WHERE "role" = 'RECRUITER';

CREATE TYPE "UserRole_new" AS ENUM ('STUDENT', 'ADMIN');
ALTER TABLE "user" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "user" ALTER COLUMN "role" TYPE "UserRole_new" USING ("role"::text::"UserRole_new");
ALTER TYPE "UserRole" RENAME TO "UserRole_old";
ALTER TYPE "UserRole_new" RENAME TO "UserRole";
DROP TYPE "UserRole_old";
ALTER TABLE "user" ALTER COLUMN "role" SET DEFAULT 'STUDENT';
