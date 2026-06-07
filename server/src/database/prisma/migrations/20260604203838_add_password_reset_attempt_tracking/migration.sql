-- AlterTable
ALTER TABLE "user" ADD COLUMN "passwordResetAttempts" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN "passwordResetLockedUntil" TIMESTAMP(3);

-- CreateIndex
CREATE INDEX "user_passwordResetLockedUntil_idx" ON "user"("passwordResetLockedUntil");
