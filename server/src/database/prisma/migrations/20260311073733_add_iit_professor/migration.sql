-- CreateTable
CREATE TABLE "iitProfessor" (
    "id" SERIAL NOT NULL,
    "collegeName" TEXT NOT NULL,
    "collegeType" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "areaOfInterest" TEXT,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "iitProfessor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "iitProfessor_collegeName_idx" ON "iitProfessor"("collegeName");

-- CreateIndex
CREATE INDEX "iitProfessor_department_idx" ON "iitProfessor"("department");

-- CreateIndex
CREATE INDEX "iitProfessor_name_idx" ON "iitProfessor"("name");
