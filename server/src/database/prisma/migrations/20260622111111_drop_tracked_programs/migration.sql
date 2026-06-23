-- Phase 2: Backfill, then clean up the legacy array column.
--
-- Backfill legacy user.trackedPrograms (slug array) into the programInterest
-- join table BEFORE dropping the column, so no tracked-program data is lost
-- when this migration is applied on deploy. The programInterest.active /
-- updatedAt columns this relies on are added in the preceding migration
-- 20260622094358_add_program_interest_fields. Idempotent via ON CONFLICT.
DO $$
DECLARE
  u       RECORD;
  p       TEXT;
  prog_id INT;
BEGIN
  FOR u IN
    SELECT id, "trackedPrograms"
    FROM "user"
    WHERE array_length("trackedPrograms", 1) > 0
  LOOP
    FOREACH p IN ARRAY u."trackedPrograms"
    LOOP
      SELECT id INTO prog_id FROM "ossProgram" WHERE slug = p;
      IF prog_id IS NULL THEN
        RAISE WARNING '[SKIP] Program slug "%" not found for user %', p, u.id;
        CONTINUE;
      END IF;

      INSERT INTO "programInterest" ("userId", "programId", "active", "createdAt", "updatedAt")
      VALUES (u.id, prog_id, TRUE, NOW(), NOW())
      ON CONFLICT ("userId", "programId")
      DO UPDATE SET "active" = TRUE, "updatedAt" = NOW();
    END LOOP;
  END LOOP;
END $$;

DROP INDEX IF EXISTS "programInterest_userId_idx";
ALTER TABLE "user" DROP COLUMN IF EXISTS "trackedPrograms";
