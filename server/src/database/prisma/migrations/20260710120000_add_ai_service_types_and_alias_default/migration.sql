-- AlterEnum: register the services being migrated off hardcoded Gemini model strings
ALTER TYPE "AIServiceType" ADD VALUE 'DSA_TESTCASE_GEN';
ALTER TYPE "AIServiceType" ADD VALUE 'BEHAVIORAL_EVALUATION';
ALTER TYPE "AIServiceType" ADD VALUE 'GSOC_REVIEW';
ALTER TYPE "AIServiceType" ADD VALUE 'JOB_ENRICHMENT';
ALTER TYPE "AIServiceType" ADD VALUE 'LEARN_READINESS';

-- AlterTable: default new configs to the auto-tracking alias so model retirements don't 404
ALTER TABLE "aiServiceConfig" ALTER COLUMN "modelName" SET DEFAULT 'gemini-flash-lite-latest';
