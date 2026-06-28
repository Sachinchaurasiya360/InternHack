-- Remove the achievement badges system and the OSS contributor tier.
DROP TABLE IF EXISTS "studentBadge" CASCADE;
DROP TABLE IF EXISTS "badge" CASCADE;

DROP TYPE IF EXISTS "BadgeCategory";

ALTER TABLE "user" DROP COLUMN IF EXISTS "ossTier";
