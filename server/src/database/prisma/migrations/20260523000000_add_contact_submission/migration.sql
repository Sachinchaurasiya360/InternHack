-- CreateTable
CREATE TABLE "contactSubmission" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contactSubmission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "contactSubmission_createdAt_idx" ON "contactSubmission"("createdAt");
