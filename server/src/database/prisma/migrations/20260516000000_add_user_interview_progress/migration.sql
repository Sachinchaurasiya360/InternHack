-- Persist interview lesson progress per student so completion state survives browser and device switches.
CREATE TABLE "userInterviewProgress" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "completedIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
    "bookmarkedIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
    "lastVisitedId" TEXT,
    "lastVisitedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "userInterviewProgress_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "userInterviewProgress_userId_key" ON "userInterviewProgress"("userId");

ALTER TABLE "userInterviewProgress"
ADD CONSTRAINT "userInterviewProgress_userId_fkey"
FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
