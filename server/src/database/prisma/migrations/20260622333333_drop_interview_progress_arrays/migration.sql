-- Backfill, then drop the legacy array columns.
--
-- Backfill completedIds / bookmarkedIds from userInterviewProgress into the
-- normalized UserInterviewQuestionState table BEFORE dropping them, so no
-- progress or bookmark data is lost when this migration is applied on deploy.
-- The target table + indexes are created in the preceding migration
-- 20260622102727_add_interview_question_state. Idempotent via ON CONFLICT.

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

ALTER TABLE "userInterviewProgress" DROP COLUMN IF EXISTS "bookmarkedIds";
ALTER TABLE "userInterviewProgress" DROP COLUMN IF EXISTS "completedIds";
