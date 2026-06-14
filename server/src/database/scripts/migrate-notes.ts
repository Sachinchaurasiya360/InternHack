import { prisma } from "../db.js";
import { NoteContentType } from "@prisma/client";

async function main() {
  console.log("Starting unified notes migration...");

  // 1. Migrate DSA Problem Notes
  const dsaProgressNotes = await prisma.studentDsaProgress.findMany({
    where: {
      notes: {
        not: null,
      },
    },
    select: {
      studentId: true,
      problemId: true,
      notes: true,
    },
  });

  console.log(`Found ${dsaProgressNotes.length} DSA progress records with notes.`);

  let dsaMigrated = 0;
  for (const progress of dsaProgressNotes) {
    if (!progress.notes || progress.notes.trim() === "") continue;
    await prisma.studentNote.upsert({
      where: {
        userId_contentType_contentId: {
          userId: progress.studentId,
          contentType: NoteContentType.DSA_PROBLEM,
          contentId: String(progress.problemId),
        },
      },
      update: {
        note: progress.notes.trim(),
      },
      create: {
        userId: progress.studentId,
        contentType: NoteContentType.DSA_PROBLEM,
        contentId: String(progress.problemId),
        note: progress.notes.trim(),
      },
    });
    dsaMigrated++;
  }
  console.log(`Migrated ${dsaMigrated} DSA problem notes.`);

  // 2. Migrate Roadmap Topic Notes
  const roadmapProgressNotes = await prisma.roadmapTopicProgress.findMany({
    where: {
      notes: {
        not: null,
      },
    },
    select: {
      topicId: true,
      notes: true,
      enrollment: {
        select: {
          userId: true,
        },
      },
    },
  });

  console.log(`Found ${roadmapProgressNotes.length} Roadmap progress records with notes.`);

  let roadmapMigrated = 0;
  for (const progress of roadmapProgressNotes) {
    if (!progress.notes || progress.notes.trim() === "" || !progress.enrollment) continue;
    await prisma.studentNote.upsert({
      where: {
        userId_contentType_contentId: {
          userId: progress.enrollment.userId,
          contentType: NoteContentType.ROADMAP_TOPIC,
          contentId: String(progress.topicId),
        },
      },
      update: {
        note: progress.notes.trim(),
      },
      create: {
        userId: progress.enrollment.userId,
        contentType: NoteContentType.ROADMAP_TOPIC,
        contentId: String(progress.topicId),
        note: progress.notes.trim(),
      },
    });
    roadmapMigrated++;
  }
  console.log(`Migrated ${roadmapMigrated} Roadmap topic notes.`);
  console.log("Notes migration completed successfully!");
}

main()
  .catch((e) => {
    console.error("Migration failed:", e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
