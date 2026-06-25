-- Phase 2: Backfill, then clean up the legacy array column.
--
-- Backfill legacy user.trackedPrograms (slug array) into the programInterest
-- join table BEFORE dropping the column, so no tracked-program data is lost
-- when this migration runs on a fresh/non-prod database. The programInterest
-- active / updatedAt columns this relies on are added in the preceding
-- migration 20260622094358_add_program_interest_fields.
--
-- Guarded on column existence so it is a no-op on environments already
-- advanced via `db push` (prod), where "trackedPrograms" is already dropped;
-- without the guard the backfill would throw `column does not exist` and fail
-- the deploy. Idempotent via ON CONFLICT; unknown slugs are skipped (the inner
-- JOIN drops them) to avoid violating the programId foreign key.
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user' AND column_name = 'trackedPrograms'
  ) THEN
    INSERT INTO "programInterest" ("userId", "programId", "active", "createdAt", "updatedAt")
    SELECT u.id, p.id, TRUE, NOW(), NOW()
    FROM "user" u
    CROSS JOIN LATERAL unnest(u."trackedPrograms") AS s(slug)
    JOIN "ossProgram" p ON p.slug = s.slug
    ON CONFLICT ("userId", "programId")
    DO UPDATE SET "active" = TRUE, "updatedAt" = NOW();
  END IF;
END $$;

DROP INDEX IF EXISTS "programInterest_userId_idx";
ALTER TABLE "user" DROP COLUMN IF EXISTS "trackedPrograms";
