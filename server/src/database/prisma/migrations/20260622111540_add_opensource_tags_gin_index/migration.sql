-- CreateIndex
CREATE INDEX "opensourceRepo_tags_idx" ON "opensourceRepo" USING GIN ("tags");