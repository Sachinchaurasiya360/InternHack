-- AlterTable
ALTER TABLE "ycCompany" ADD COLUMN     "founders" JSONB,
ADD COLUMN     "scrapedAt" TIMESTAMP(3),
ADD COLUMN     "socialLinks" JSONB;
