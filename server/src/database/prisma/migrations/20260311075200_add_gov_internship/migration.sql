-- CreateTable
CREATE TABLE "govInternship" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "timeline" TEXT NOT NULL,
    "organizer" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "stipend" TEXT NOT NULL,
    "eligibility" TEXT NOT NULL,
    "reality" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "govInternship_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "govInternship_category_idx" ON "govInternship"("category");
