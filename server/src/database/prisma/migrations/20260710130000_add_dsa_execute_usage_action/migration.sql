-- AlterEnum: DSA code execution now runs in the browser and is metered by its
-- own daily counter (not shared with hints/AI review's CODE_RUN bucket).
ALTER TYPE "UsageAction" ADD VALUE 'DSA_EXECUTE';
