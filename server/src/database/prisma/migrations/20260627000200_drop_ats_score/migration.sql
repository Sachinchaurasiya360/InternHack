-- Drop the ATS score history table. The "score over time" progress feature was
-- removed; ATS scoring is now stateless (results are returned but not persisted),
-- so this table and its 24h re-score cache are no longer used. CASCADE removes the
-- studentId foreign key; IF EXISTS keeps the migration idempotent.
DROP TABLE IF EXISTS "atsScore" CASCADE;
