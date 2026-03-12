-- AlterTable
ALTER TABLE "user" ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "otpExpiresAt" TIMESTAMP(3),
ADD COLUMN     "resetOtpExpiresAt" TIMESTAMP(3),
ADD COLUMN     "resetPasswordOtp" TEXT,
ADD COLUMN     "verificationOtp" TEXT;
