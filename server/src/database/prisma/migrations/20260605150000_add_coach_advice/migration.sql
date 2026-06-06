-- CreateTable
CREATE TABLE "coachAdvice" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "trigger" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT 'Coach suggestion',
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "coachAdvice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "coachAdvice_userId_idx" ON "coachAdvice"("userId");

-- CreateIndex
CREATE INDEX "coachAdvice_createdAt_idx" ON "coachAdvice"("createdAt");

-- AddForeignKey
ALTER TABLE "coachAdvice" ADD CONSTRAINT "coachAdvice_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
