-- CreateTable
CREATE TABLE "guideProgress" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "guideSlug" TEXT NOT NULL,
    "completedStepIds" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "guideProgress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "guideProgress_userId_idx" ON "guideProgress"("userId");

-- CreateIndex
CREATE INDEX "guideProgress_guideSlug_idx" ON "guideProgress"("guideSlug");

-- CreateIndex
CREATE UNIQUE INDEX "guideProgress_userId_guideSlug_key" ON "guideProgress"("userId", "guideSlug");

-- AddForeignKey
ALTER TABLE "guideProgress" ADD CONSTRAINT "guideProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
