/*
  Warnings:

  - The values [CLAUDE] on the enum `AIProviderType` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[jobId,name]` on the table `round` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AIProviderType_new" AS ENUM ('GEMINI', 'GROQ', 'OPENROUTER', 'CODESTRAL');
ALTER TABLE "public"."aiServiceConfig" ALTER COLUMN "provider" DROP DEFAULT;
ALTER TABLE "aiServiceConfig" ALTER COLUMN "provider" TYPE "AIProviderType_new" USING ("provider"::text::"AIProviderType_new");
ALTER TABLE "aiRequestLog" ALTER COLUMN "providerName" TYPE "AIProviderType_new" USING ("providerName"::text::"AIProviderType_new");
ALTER TYPE "AIProviderType" RENAME TO "AIProviderType_old";
ALTER TYPE "AIProviderType_new" RENAME TO "AIProviderType";
DROP TYPE "public"."AIProviderType_old";
ALTER TABLE "aiServiceConfig" ALTER COLUMN "provider" SET DEFAULT 'GEMINI';
COMMIT;

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

-- CreateIndex
CREATE UNIQUE INDEX "round_jobId_name_key" ON "round"("jobId", "name");

-- AddForeignKey
ALTER TABLE "guideProgress" ADD CONSTRAINT "guideProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
