CREATE TABLE "jobAgentEmailLog" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "jobIds" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "context" TEXT,
    "sentCount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "jobAgentEmailLog_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "jobAgentEmailLog_userId_createdAt_idx" ON "jobAgentEmailLog"("userId", "createdAt");

ALTER TABLE "jobAgentEmailLog" ADD CONSTRAINT "jobAgentEmailLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
