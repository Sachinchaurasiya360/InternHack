-- CreateTable
CREATE TABLE "dsaTopic" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "orderIndex" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dsaTopic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dsaSubTopic" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "orderIndex" INTEGER NOT NULL,
    "topicId" INTEGER NOT NULL,

    CONSTRAINT "dsaSubTopic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dsaProblem" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "leetcodeUrl" TEXT,
    "gfgUrl" TEXT,
    "articleUrl" TEXT,
    "videoUrl" TEXT,
    "orderIndex" INTEGER NOT NULL,
    "subTopicId" INTEGER NOT NULL,

    CONSTRAINT "dsaProblem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studentDsaProgress" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "problemId" INTEGER NOT NULL,
    "solved" BOOLEAN NOT NULL DEFAULT true,
    "notes" TEXT,
    "solvedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "studentDsaProgress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "dsaTopic_slug_key" ON "dsaTopic"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "dsaTopic_orderIndex_key" ON "dsaTopic"("orderIndex");

-- CreateIndex
CREATE UNIQUE INDEX "dsaSubTopic_topicId_orderIndex_key" ON "dsaSubTopic"("topicId", "orderIndex");

-- CreateIndex
CREATE UNIQUE INDEX "dsaProblem_subTopicId_orderIndex_key" ON "dsaProblem"("subTopicId", "orderIndex");

-- CreateIndex
CREATE INDEX "studentDsaProgress_studentId_idx" ON "studentDsaProgress"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "studentDsaProgress_studentId_problemId_key" ON "studentDsaProgress"("studentId", "problemId");

-- AddForeignKey
ALTER TABLE "dsaSubTopic" ADD CONSTRAINT "dsaSubTopic_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "dsaTopic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dsaProblem" ADD CONSTRAINT "dsaProblem_subTopicId_fkey" FOREIGN KEY ("subTopicId") REFERENCES "dsaSubTopic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentDsaProgress" ADD CONSTRAINT "studentDsaProgress_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentDsaProgress" ADD CONSTRAINT "studentDsaProgress_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "dsaProblem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
