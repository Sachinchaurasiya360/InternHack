-- CreateTable
CREATE TABLE "programInterest" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "programId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "programInterest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "programInterest_userId_programId_key" ON "programInterest"("userId", "programId");

-- CreateIndex
CREATE INDEX "programInterest_userId_idx" ON "programInterest"("userId");

-- AddForeignKey
ALTER TABLE "programInterest" ADD CONSTRAINT "programInterest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
