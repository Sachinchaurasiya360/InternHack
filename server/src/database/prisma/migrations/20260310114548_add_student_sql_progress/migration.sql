-- CreateTable
CREATE TABLE "studentSqlProgress" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "solved" BOOLEAN NOT NULL DEFAULT false,
    "code" TEXT,
    "solvedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "studentSqlProgress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "studentSqlProgress_studentId_idx" ON "studentSqlProgress"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "studentSqlProgress_studentId_exerciseId_key" ON "studentSqlProgress"("studentId", "exerciseId");

-- AddForeignKey
ALTER TABLE "studentSqlProgress" ADD CONSTRAINT "studentSqlProgress_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
