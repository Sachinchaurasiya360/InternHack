-- AlterEnum: GSoC proposal review was incorrectly metered off the ATS_SCORE
-- bucket, capping Premium users at 20/month instead of the promised unlimited
-- reviews. Give it its own dedicated counter.
ALTER TYPE "UsageAction" ADD VALUE 'GSOC_REVIEW';
