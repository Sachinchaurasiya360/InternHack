-- CreateTable
CREATE TABLE "guideCertificate" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "guideName" TEXT NOT NULL,
    "issuedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "studentName" TEXT NOT NULL,

    CONSTRAINT "guideCertificate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "guideCertificate_token_key" ON "guideCertificate"("token");

ALTER TABLE "guideCertificate" ADD CONSTRAINT "guideCertificate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
