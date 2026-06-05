-- AlterTable
ALTER TABLE "roadmapSection" ADD COLUMN     "aiRegeneratedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "profileSlug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "user_profileSlug_key" ON "user"("profileSlug");
