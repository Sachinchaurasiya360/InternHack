-- Add optional guide feedback reason column
ALTER TABLE "guideFeedback"
ADD COLUMN IF NOT EXISTS "reason" TEXT;
