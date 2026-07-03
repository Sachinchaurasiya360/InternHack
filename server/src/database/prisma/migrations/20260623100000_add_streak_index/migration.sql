DROP INDEX IF EXISTS "roadmapTopicProgress_enrollmentId_idx";
CREATE INDEX IF NOT EXISTS "roadmapTopicProgress_enrollmentId_status_completedAt_idx"
  ON "roadmapTopicProgress"("enrollmentId", "status", "completedAt");
