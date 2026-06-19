DROP INDEX "roadmapTopicProgress_enrollmentId_idx";
CREATE INDEX "roadmapTopicProgress_enrollmentId_status_completedAt_idx"
  ON "roadmapTopicProgress"("enrollmentId", "status", "completedAt");
