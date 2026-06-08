-- Add SOLUTION_REVIEW to AIServiceType enum
ALTER TYPE "AIServiceType" ADD VALUE IF NOT EXISTS 'SOLUTION_REVIEW';

-- Add SOLUTION_REVIEW to UsageAction enum
ALTER TYPE "UsageAction" ADD VALUE IF NOT EXISTS 'SOLUTION_REVIEW';

-- Create solutionReview table
CREATE TABLE "solutionReview" (
    "id" SERIAL PRIMARY KEY,
    "userId" INTEGER NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
    "title" TEXT NOT NULL DEFAULT 'Untitled Review',
    "language" TEXT NOT NULL DEFAULT 'python',
    "code" TEXT NOT NULL,
    "problemContext" TEXT,
    "review" JSONB,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX "solutionReview_userId_idx" ON "solutionReview"("userId");
CREATE INDEX "solutionReview_createdAt_idx" ON "solutionReview"("createdAt");
