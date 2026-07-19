-- Prevent double-booking the same expert-session slot at the database level.
-- Only one "active" (PENDING_PAYMENT or SCHEDULED) session may exist per
-- scheduledAt at a time. CANCELLED/COMPLETED rows are excluded so a freed
-- or historical slot can be rebooked without hitting this constraint.
--
-- This is a backstop for expertSession.service.ts#bookSession, which already
-- runs its availability check + create inside a Serializable transaction.
-- Belt and suspenders: if that transaction is ever bypassed, this index is
-- what actually stops the double booking from being written.
CREATE UNIQUE INDEX IF NOT EXISTS "expertSession_scheduledAt_active_idx"
ON "expertSession"("scheduledAt")
WHERE "status" IN ('PENDING_PAYMENT', 'SCHEDULED');