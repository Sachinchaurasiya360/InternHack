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

-- CreateIndex
CREATE INDEX "guideFeedback_userId_guideId_idx" ON "guideFeedback"("userId", "guideId");

-- CreateIndex
CREATE INDEX "repoRequest_userId_status_idx" ON "repoRequest"("userId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "round_jobId_name_key" ON "round"("jobId", "name");
