-- CreateTable
CREATE TABLE "userRecommendation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "weakAreas" JSONB NOT NULL DEFAULT '[]',
    "lastRefreshedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "userRecommendation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userRecommendation_userId_key" ON "userRecommendation"("userId");

-- CreateIndex
CREATE INDEX "userRecommendation_userId_idx" ON "userRecommendation"("userId");

-- AddForeignKey
ALTER TABLE "userRecommendation" ADD CONSTRAINT "userRecommendation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
