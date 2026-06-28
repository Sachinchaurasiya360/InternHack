-- Corrective migration for #2563.
--
-- The original migration (20260625000000_add_pending_schedule_and_fields) added
-- the new columns and the PENDING_SCHEDULE enum value, but did NOT alter the
-- existing `scheduledAt` column (still NOT NULL DEFAULT now()) or the `status`
-- column default. The async scheduling flow creates pairings with
-- scheduledAt = NULL and status = PENDING_SCHEDULE, so without this the matching
-- job hits a NOT NULL violation on prod and no pairings are created.
--
-- PENDING_SCHEDULE was committed in the prior migration (separate transaction),
-- so it is safe to reference it as a column default here.
--
-- All statements are idempotent (DROP NOT NULL / DROP DEFAULT / SET DEFAULT are
-- no-ops if already applied), so this is safe to re-run / self-heals drift.

ALTER TABLE "peerMockInterview" ALTER COLUMN "scheduledAt" DROP NOT NULL;
ALTER TABLE "peerMockInterview" ALTER COLUMN "scheduledAt" DROP DEFAULT;
ALTER TABLE "peerMockInterview" ALTER COLUMN "status" SET DEFAULT 'PENDING_SCHEDULE';
