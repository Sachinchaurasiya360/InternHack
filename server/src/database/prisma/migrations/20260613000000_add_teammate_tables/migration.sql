-- CreateTable
CREATE TABLE "teammateProfile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "preferredRole" TEXT NOT NULL,
    "availability" TEXT NOT NULL,
    "experienceLevel" TEXT NOT NULL,
    "skills" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "techStack" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "teammateProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hackathonTeamInvitation" (
    "id" SERIAL NOT NULL,
    "hackathonId" INTEGER NOT NULL,
    "senderId" INTEGER NOT NULL,
    "receiverId" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hackathonTeamInvitation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "teammateProfile_userId_key" ON "teammateProfile"("userId");

-- CreateIndex
CREATE INDEX "teammateProfile_preferredRole_idx" ON "teammateProfile"("preferredRole");

-- CreateIndex
CREATE INDEX "teammateProfile_experienceLevel_idx" ON "teammateProfile"("experienceLevel");

-- CreateIndex
CREATE INDEX "hackathonTeamInvitation_hackathonId_idx" ON "hackathonTeamInvitation"("hackathonId");

-- CreateIndex
CREATE INDEX "hackathonTeamInvitation_senderId_idx" ON "hackathonTeamInvitation"("senderId");

-- CreateIndex
CREATE INDEX "hackathonTeamInvitation_receiverId_idx" ON "hackathonTeamInvitation"("receiverId");

-- CreateIndex
CREATE UNIQUE INDEX "hackathonTeamInvitation_hackathonId_senderId_receiverId_key" ON "hackathonTeamInvitation"("hackathonId", "senderId", "receiverId");

-- AddForeignKey
ALTER TABLE "teammateProfile" ADD CONSTRAINT "teammateProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hackathonTeamInvitation" ADD CONSTRAINT "hackathonTeamInvitation_hackathonId_fkey" FOREIGN KEY ("hackathonId") REFERENCES "hackathon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hackathonTeamInvitation" ADD CONSTRAINT "hackathonTeamInvitation_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hackathonTeamInvitation" ADD CONSTRAINT "hackathonTeamInvitation_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
