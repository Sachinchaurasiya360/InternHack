-- CreateTable
CREATE TABLE "college" (
    "id" SERIAL NOT NULL,
    "aisheCode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "district" TEXT,

    CONSTRAINT "college_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "college_state_idx" ON "college"("state");

-- Enable trigram search so ILIKE '%term%' name lookups can use a GIN index
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- CreateIndex
CREATE INDEX "college_name_trgm_idx" ON "college" USING GIN ("name" gin_trgm_ops);
