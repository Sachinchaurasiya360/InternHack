-- CreateTable
CREATE TABLE "ycCompany" (
    "id" SERIAL NOT NULL,
    "ycId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "oneLiner" TEXT,
    "longDescription" TEXT,
    "batch" TEXT,
    "batchShort" TEXT,
    "status" TEXT,
    "website" TEXT,
    "smallLogoUrl" TEXT,
    "allLocations" TEXT,
    "teamSize" INTEGER,
    "industry" TEXT,
    "subindustry" TEXT,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "industries" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "regions" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "stage" TEXT,
    "isHiring" BOOLEAN NOT NULL DEFAULT false,
    "topCompany" BOOLEAN NOT NULL DEFAULT false,
    "ycUrl" TEXT,
    "launchedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ycCompany_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ycCompany_ycId_key" ON "ycCompany"("ycId");

-- CreateIndex
CREATE UNIQUE INDEX "ycCompany_slug_key" ON "ycCompany"("slug");

-- CreateIndex
CREATE INDEX "ycCompany_batchShort_idx" ON "ycCompany"("batchShort");

-- CreateIndex
CREATE INDEX "ycCompany_industry_idx" ON "ycCompany"("industry");

-- CreateIndex
CREATE INDEX "ycCompany_status_idx" ON "ycCompany"("status");

-- CreateIndex
CREATE INDEX "ycCompany_isHiring_idx" ON "ycCompany"("isHiring");

-- CreateIndex
CREATE INDEX "ycCompany_topCompany_idx" ON "ycCompany"("topCompany");

-- CreateIndex
CREATE INDEX "ycCompany_name_idx" ON "ycCompany"("name");
