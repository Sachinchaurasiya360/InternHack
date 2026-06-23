-- Backfill, then drop the legacy array columns.
--
-- Backfill completedIds / bookmarkedIds from userInterviewProgress into the
-- normalized UserInterviewQuestionState table BEFORE dropping them, so no
-- progress or bookmark data is lost when this migration runs on a fresh/non-prod
-- database. The target table + indexes are created in the preceding migration
-- 20260622102727_add_interview_question_state.
--
-- Guarded on column existence so it is a no-op on environments already advanced
-- via `db push` (prod), where these columns are already dropped; without the
-- guard the unnest() would throw `column does not exist` and fail the deploy.
-- Idempotent via ON CONFLICT.
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'userInterviewProgress'
      AND column_name IN ('completedIds', 'bookmarkedIds')
  ) THEN
    -- completedIds -> rows marked isCompleted
    INSERT INTO "UserInterviewQuestionState" ("userId", "questionId", "isCompleted", "isBookmarked")
    SELECT uip."userId", q.qid, TRUE, FALSE
    FROM "userInterviewProgress" uip
    CROSS JOIN LATERAL unnest(uip."completedIds") AS q(qid)
    ON CONFLICT ("userId", "questionId") DO NOTHING;

    -- bookmarkedIds -> rows marked isBookmarked (insert any not already present)
    INSERT INTO "UserInterviewQuestionState" ("userId", "questionId", "isCompleted", "isBookmarked")
    SELECT uip."userId", q.qid, FALSE, TRUE
    FROM "userInterviewProgress" uip
    CROSS JOIN LATERAL unnest(uip."bookmarkedIds") AS q(qid)
    ON CONFLICT ("userId", "questionId") DO NOTHING;

    -- flip the bookmark flag on rows that already existed from completedIds
    UPDATE "UserInterviewQuestionState" uqs
    SET "isBookmarked" = TRUE,
        "updatedAt"    = NOW()
    FROM "userInterviewProgress" uip,
         LATERAL unnest(uip."bookmarkedIds") AS b(qid)
    WHERE uqs."userId" = uip."userId"
      AND uqs."questionId" = b.qid
      AND uqs."isBookmarked" = FALSE;
  END IF;
END $$;

ALTER TABLE "userInterviewProgress" DROP COLUMN IF EXISTS "bookmarkedIds";
ALTER TABLE "userInterviewProgress" DROP COLUMN IF EXISTS "completedIds";
