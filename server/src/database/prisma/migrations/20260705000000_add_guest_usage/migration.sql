-- CreateTable
CREATE TABLE "guestUsage" (
    "id" SERIAL NOT NULL,
    "ipHash" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "guestUsage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "guestUsage_ipHash_date_key" ON "guestUsage"("ipHash", "date");

-- CreateIndex
CREATE INDEX "guestUsage_date_idx" ON "guestUsage"("date");
