-- Students can now enter a free-text interview topic when theirs isn't listed.
-- The enum gains an OTHER bucket; the actual text lives in customTopic.
ALTER TYPE "MockInterviewTopic" ADD VALUE IF NOT EXISTS 'OTHER';

ALTER TABLE "peerMockInterviewPreference" ADD COLUMN "customTopic" TEXT;
ALTER TABLE "peerMockInterview" ADD COLUMN "customTopic" TEXT;
