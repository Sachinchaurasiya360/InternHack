-- Add lastPracticedAt field to studentAptitudeProgress
-- This field is updated on every answer attempt (upsert),
-- unlike createdAt which is set only once at row creation.
-- Using lastPracticedAt ensures the streak is calculated
-- correctly for re-attempted questions.

ALTER TABLE "studentAptitudeProgress" ADD COLUMN "lastPracticedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
