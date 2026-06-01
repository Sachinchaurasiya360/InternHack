-- CreateTable
CREATE TABLE "guideFeedback" (
    "id" SERIAL NOT NULL,
    "guideId" TEXT NOT NULL,
    "stepId" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "rating" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "guideFeedback_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "guideFeedback_guideId_idx" ON "guideFeedback"("guideId");

-- CreateIndex
CREATE INDEX "guideFeedback_stepId_idx" ON "guideFeedback"("stepId");

-- CreateIndex
CREATE UNIQUE INDEX "guideFeedback_userId_guideId_stepId_key" ON "guideFeedback"("userId", "guideId", "stepId");

-- AddForeignKey
ALTER TABLE "guideFeedback" ADD CONSTRAINT "guideFeedback_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
