-- Run this BEFORE deploying the migration that drops user.trackedPrograms.
-- It backfills existing flat-array data into the programInterest join table.

DO $$
DECLARE
  u RECORD;
  p RECORD;
  prog_id INT;
  inserted INT := 0;
  skipped INT := 0;
BEGIN
  FOR u IN
    SELECT id, "trackedPrograms" FROM "user" WHERE array_length("trackedPrograms", 1) > 0
  LOOP
    FOREACH p IN ARRAY u."trackedPrograms"
    LOOP
      SELECT id INTO prog_id FROM "ossProgram" WHERE slug = p;
      IF prog_id IS NULL THEN
        RAISE WARNING '[SKIP] Program slug "%" not found for user %', p, u.id;
        skipped := skipped + 1;
        CONTINUE;
      END IF;

      INSERT INTO "programInterest" ("userId", "programId", "active", "createdAt", "updatedAt")
      VALUES (u.id, prog_id, TRUE, NOW(), NOW())
      ON CONFLICT ("userId", "programId")
      DO UPDATE SET "active" = TRUE, "updatedAt" = NOW();

      inserted := inserted + 1;
    END LOOP;
  END LOOP;

  RAISE NOTICE 'Done. Inserted/updated % programInterest rows. Skipped % unknown slugs.', inserted, skipped;
END $$;
