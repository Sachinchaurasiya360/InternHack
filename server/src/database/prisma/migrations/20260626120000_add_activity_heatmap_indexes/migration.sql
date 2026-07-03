-- Activity heatmap composite indexes (issue #2302 / PR #2559)
--
-- These back the per-user, 90-day range scans in
-- OpensourceService.getActivityHeatmap. PR #2559 added the matching @@index
-- lines to schema but shipped no migration, so prod would never have created
-- them (migrate deploy applies migration SQL, not a schema diff).
--
-- IF NOT EXISTS so `migrate deploy` is a no-op where an index was already
-- created via `db push`, and still creates it on a fresh database.

CREATE INDEX IF NOT EXISTS "guideProgress_userId_createdAt_idx"
ON "guideProgress" ("userId", "createdAt");

CREATE INDEX IF NOT EXISTS "repoRequest_userId_status_createdAt_idx"
ON "repoRequest" ("userId", "status", "createdAt");

CREATE INDEX IF NOT EXISTS "guideFeedback_userId_createdAt_idx"
ON "guideFeedback" ("userId", "createdAt");
