-- CreateTable
CREATE TABLE "hackathon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "organizer" TEXT NOT NULL,
    "logo" TEXT,
    "description" TEXT NOT NULL,
    "prizePool" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "locationType" TEXT NOT NULL,
    "website" TEXT,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "tracks" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "eligibility" TEXT,
    "status" TEXT NOT NULL DEFAULT 'upcoming',
    "ecosystem" TEXT NOT NULL,
    "highlights" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hackathon_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "hackathon_status_idx" ON "hackathon"("status");

-- CreateIndex
CREATE INDEX "hackathon_ecosystem_idx" ON "hackathon"("ecosystem");
