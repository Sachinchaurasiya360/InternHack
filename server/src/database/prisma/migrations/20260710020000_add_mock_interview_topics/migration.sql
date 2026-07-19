-- Widen the peer mock interview topic list. IF NOT EXISTS keeps the migration
-- idempotent if it ever gets replayed against a database that already has them.
ALTER TYPE "MockInterviewTopic" ADD VALUE IF NOT EXISTS 'BACKEND';
ALTER TYPE "MockInterviewTopic" ADD VALUE IF NOT EXISTS 'BEHAVIORAL';
ALTER TYPE "MockInterviewTopic" ADD VALUE IF NOT EXISTS 'DEVOPS';
ALTER TYPE "MockInterviewTopic" ADD VALUE IF NOT EXISTS 'DATA_SCIENCE';
