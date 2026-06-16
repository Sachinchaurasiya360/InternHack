-- Add nullable column
ALTER TABLE "roadmapEnrollment"
ADD COLUMN "shareToken" TEXT;

-- Backfill existing rows
UPDATE "roadmapEnrollment"
SET "shareToken" = md5(random()::text || id::text)
WHERE "shareToken" IS NULL;

-- Enforce constraints
ALTER TABLE "roadmapEnrollment"
ALTER COLUMN "shareToken" SET NOT NULL;

CREATE UNIQUE INDEX "roadmapEnrollment_shareToken_key"
ON "roadmapEnrollment"("shareToken");