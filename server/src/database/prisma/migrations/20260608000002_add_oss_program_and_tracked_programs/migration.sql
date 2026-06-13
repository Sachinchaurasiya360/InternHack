-- AlterTable
ALTER TABLE "user" ADD COLUMN "trackedPrograms" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[];

-- CreateTable
CREATE TABLE "ossProgram" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "short" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "fullDescription" TEXT,
    "eligibility" TEXT,
    "eligibilityType" TEXT,
    "stipend" TEXT,
    "stipendPaid" TEXT,
    "stipendRange" TEXT,
    "window" TEXT,
    "region" TEXT,
    "website" TEXT,
    "applyUrl" TEXT,
    "color" TEXT,
    "bgColor" TEXT,
    "tags" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
    "requirements" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
    "timeline" JSONB,
    "howToApply" TEXT,
    "applicationStart" TIMESTAMP(3),
    "applicationDeadline" TIMESTAMP(3),
    "resultsDate" TIMESTAMP(3),
    "programStart" TIMESTAMP(3),
    "programEnd" TIMESTAMP(3),
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ossProgram_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ossProgram_slug_key" ON "ossProgram"("slug");

-- CreateIndex
CREATE INDEX "ossProgram_active_idx" ON "ossProgram"("active");

-- CreateIndex
CREATE INDEX "ossProgram_slug_idx" ON "ossProgram"("slug");
