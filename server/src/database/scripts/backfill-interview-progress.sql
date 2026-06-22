-- backfill-interview-progress.sql
-- Extracts unnested data from legacy array columns in userInterviewProgress
-- into the new normalized UserInterviewQuestionState table.
--
-- ⚠ Run this BEFORE applying the Prisma migration that drops the array columns.
--    If the columns are already dropped, skip the INSERT and just create the table.
--
-- Usage:
--   1. psql -d your_database -f backfill-interview-progress.sql
--   2. npx prisma migrate dev  (applies the schema change that drops arrays)
--
-- This script is idempotent: it uses "CREATE TABLE IF NOT EXISTS" and
-- "ON CONFLICT DO NOTHING" so it can be re-run safely.

BEGIN;

-- ── 1. Create the normalized table if it does not already exist ─────────────
CREATE TABLE IF NOT EXISTS "UserInterviewQuestionState" (
    "id"           SERIAL       PRIMARY KEY,
    "userId"       INTEGER      NOT NULL,
    "questionId"   TEXT         NOT NULL,
    "isCompleted"  BOOLEAN      NOT NULL DEFAULT false,
    "isBookmarked" BOOLEAN      NOT NULL DEFAULT false,
    "createdAt"    TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"    TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserInterviewQuestionState_userId_questionId_key"
        UNIQUE ("userId", "questionId")
);

CREATE INDEX IF NOT EXISTS "UserInterviewQuestionState_userId_idx"
    ON "UserInterviewQuestionState" ("userId");

CREATE INDEX IF NOT EXISTS "UserInterviewQuestionState_questionId_idx"
    ON "UserInterviewQuestionState" ("questionId");

CREATE INDEX IF NOT EXISTS "UserInterviewQuestionState_userId_questionId_isCompleted_idx"
    ON "UserInterviewQuestionState" ("userId", "questionId", "isCompleted");

CREATE INDEX IF NOT EXISTS "UserInterviewQuestionState_userId_questionId_isBookmarked_idx"
    ON "UserInterviewQuestionState" ("userId", "questionId", "isBookmarked");

-- ── 2. Backfill completedIds ────────────────────────────────────────────────
--    unnest(...) WITH ORDINALITY preserves position (not needed here, but clean).
INSERT INTO "UserInterviewQuestionState" ("userId", "questionId", "isCompleted", "isBookmarked")
SELECT
    uip."userId",
    trimmed.qId,
    true AS "isCompleted",
    false AS "isBookmarked"
FROM "userInterviewProgress" uip
CROSS JOIN LATERAL unnest(uip."completedIds") AS trimmed(qId)
ON CONFLICT ("userId", "questionId") DO NOTHING;

-- ── 3. Backfill bookmarkedIds (mark isBookmarked = true for these rows) ─────
--     First pass: insert rows that may not exist yet from completedIds.
INSERT INTO "UserInterviewQuestionState" ("userId", "questionId", "isCompleted", "isBookmarked")
SELECT
    uip."userId",
    trimmed.qId,
    false AS "isCompleted",
    true AS "isBookmarked"
FROM "userInterviewProgress" uip
CROSS JOIN LATERAL unnest(uip."bookmarkedIds") AS trimmed(qId)
ON CONFLICT ("userId", "questionId") DO NOTHING;

--     Second pass: for rows already present (e.g. from completedIds), flip bookmark flag.
UPDATE "UserInterviewQuestionState" uqs
SET "isBookmarked" = true,
    "updatedAt"    = NOW()
FROM "userInterviewProgress" uip,
     LATERAL unnest(uip."bookmarkedIds") AS b(qId)
WHERE uqs."userId" = uip."userId"
  AND uqs."questionId" = b.qId
  AND uqs."isBookmarked" = false;

-- ── 4. (Optional) Add FK constraint back if Prisma migration hasn't added it ──
--     Prisma will manage this. Uncomment only if running entirely outside Prisma.
-- ALTER TABLE "UserInterviewQuestionState"
--     ADD CONSTRAINT "UserInterviewQuestionState_userId_fkey"
--     FOREIGN KEY ("userId") REFERENCES "user"(id) ON DELETE CASCADE;

COMMIT;

-- ── 5. Verification queries (run these manually to confirm) ──────────────────
-- SELECT 'completedIds total' AS metric, count(*) FROM "userInterviewProgress", unnest("completedIds") AS qId
-- UNION ALL
-- SELECT 'bookmarkedIds total',  count(*) FROM "userInterviewProgress", unnest("bookmarkedIds") AS qId
-- UNION ALL
-- SELECT 'UserInterviewQuestionState rows', count(*) FROM "UserInterviewQuestionState"
-- UNION ALL
-- SELECT 'of which isCompleted',  count(*) FROM "UserInterviewQuestionState" WHERE "isCompleted" = true
-- UNION ALL
-- SELECT 'of which isBookmarked', count(*) FROM "UserInterviewQuestionState" WHERE "isBookmarked" = true;
