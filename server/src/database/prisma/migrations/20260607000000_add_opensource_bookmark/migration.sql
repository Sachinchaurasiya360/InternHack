-- CreateTable
CREATE TABLE "opensourceBookmark" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "repoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "opensourceBookmark_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "opensourceBookmark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "opensourceBookmark_repoId_fkey" FOREIGN KEY ("repoId") REFERENCES "opensourceRepo"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "opensourceBookmark_userId_repoId_key" ON "opensourceBookmark"("userId", "repoId");
