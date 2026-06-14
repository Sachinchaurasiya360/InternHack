-- CreateIndex
CREATE UNIQUE INDEX "unique_active_pair_student_a" ON "roadmapStudyBuddyPair"("roadmapId", "studentAId") WHERE ("active" = true);

-- CreateIndex
CREATE UNIQUE INDEX "unique_active_pair_student_b" ON "roadmapStudyBuddyPair"("roadmapId", "studentBId") WHERE ("active" = true);

-- Add check constraint to prevent self-pairing
ALTER TABLE "roadmapStudyBuddyPair" ADD CONSTRAINT "check_not_self_pair" CHECK ("studentAId" <> "studentBId");
