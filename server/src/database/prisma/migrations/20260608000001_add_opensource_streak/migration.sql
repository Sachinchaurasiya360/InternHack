-- CreateTable
CREATE TABLE "opensourceStreak" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "currentStreak" INTEGER NOT NULL DEFAULT 0,
    "longestStreak" INTEGER NOT NULL DEFAULT 0,
    "lastActivityAt" TIMESTAMP(3),
    "totalDays" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "opensourceStreak_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "opensourceStreak_userId_key" ON "opensourceStreak"("userId");

-- CreateIndex
CREATE INDEX "opensourceStreak_userId_idx" ON "opensourceStreak"("userId");

-- AddForeignKey
ALTER TABLE "opensourceStreak" ADD CONSTRAINT "opensourceStreak_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
