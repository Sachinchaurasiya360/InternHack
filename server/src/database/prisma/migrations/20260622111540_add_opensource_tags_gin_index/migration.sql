-- CreateIndex
-- IF NOT EXISTS so `migrate deploy` is a no-op where the GIN index was already
-- created via `db push` (prod), and still creates it on a fresh database.
CREATE INDEX IF NOT EXISTS "opensourceRepo_tags_idx" ON "opensourceRepo" USING GIN ("tags");
