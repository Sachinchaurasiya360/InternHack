-- Add grant reminder preference fields to user

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "grantRemindersEnabled" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "grantReminderDays" INTEGER[] NOT NULL DEFAULT ARRAY[30, 7, 3, 1]::INTEGER[];
