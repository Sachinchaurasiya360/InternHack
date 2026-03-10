-- CreateEnum
CREATE TYPE "UsageAction" AS ENUM ('ATS_SCORE', 'COVER_LETTER', 'GENERATE_RESUME');

-- CreateTable
CREATE TABLE "usageLog" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "action" "UsageAction" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usageLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "usageLog_userId_action_createdAt_idx" ON "usageLog"("userId", "action", "createdAt");

-- AddForeignKey
ALTER TABLE "usageLog" ADD CONSTRAINT "usageLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
