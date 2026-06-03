-- CreateEnum
CREATE TYPE "HackathonParticipationStatus" AS ENUM ('INTERESTED', 'PARTICIPATING');

-- CreateTable
CREATE TABLE "hackathonParticipation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "hackathonId" INTEGER NOT NULL,
    "status" "HackathonParticipationStatus" NOT NULL DEFAULT 'INTERESTED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hackathonParticipation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "hackathonParticipation_userId_idx" ON "hackathonParticipation"("userId");

-- CreateIndex
CREATE INDEX "hackathonParticipation_hackathonId_idx" ON "hackathonParticipation"("hackathonId");

-- CreateIndex
CREATE UNIQUE INDEX "hackathonParticipation_userId_hackathonId_key" ON "hackathonParticipation"("userId", "hackathonId");

-- AddForeignKey
ALTER TABLE "hackathonParticipation" ADD CONSTRAINT "hackathonParticipation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hackathonParticipation" ADD CONSTRAINT "hackathonParticipation_hackathonId_fkey" FOREIGN KEY ("hackathonId") REFERENCES "hackathon"("id") ON DELETE CASCADE ON UPDATE CASCADE;
