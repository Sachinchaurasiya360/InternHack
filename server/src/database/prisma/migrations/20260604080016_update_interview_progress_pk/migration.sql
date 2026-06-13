-- AlterTable
ALTER TABLE "userInterviewProgress" DROP CONSTRAINT "userInterviewProgress_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "userInterviewProgress_pkey" PRIMARY KEY ("id");

