import "dotenv/config";
import { prisma } from "./db.js";

const DRY_RUN = process.argv.includes("--dry-run");

async function main() {
  const now = new Date();
  console.log(`[cleanup] Run at ${now.toISOString()}${DRY_RUN ? "  (DRY RUN)" : ""}`);

  const [scrapedExpiredCount, adminExpiredCount, partnerExpiredCount] = await Promise.all([
    prisma.scrapedJob.count({ where: { status: "EXPIRED" } }),
    prisma.adminJob.count({ where: { expiresAt: { lt: now } } }),
    prisma.job.count({
      where: {
        deadline: { lt: now },
        status: { in: ["PUBLISHED", "DRAFT"] },
      },
    }),
  ]);

  console.log("Targets:");
  console.log(`  scrapedJob  [status=EXPIRED]          : ${scrapedExpiredCount}`);
  console.log(`  adminJob    [expiresAt < now]         : ${adminExpiredCount}`);
  console.log(`  job         [deadline < now, active]  : ${partnerExpiredCount}  (will be archived, not deleted)`);

  if (DRY_RUN) {
    console.log("\n[cleanup] Dry run complete, nothing deleted.");
    await prisma.$disconnect();
    return;
  }

  if (scrapedExpiredCount + adminExpiredCount + partnerExpiredCount === 0) {
    console.log("\n[cleanup] Nothing to do.");
    await prisma.$disconnect();
    return;
  }

  console.log("\n[cleanup] Deleting...");

  const scrapedDeleted = await prisma.scrapedJob.deleteMany({
    where: { status: "EXPIRED" },
  });
  console.log(`  scrapedJob deleted    : ${scrapedDeleted.count}`);

  // adminJob cascade-deletes externalJobApplication (onDelete: Cascade)
  const adminDeleted = await prisma.adminJob.deleteMany({
    where: { expiresAt: { lt: now } },
  });
  console.log(`  adminJob  deleted    : ${adminDeleted.count}  (applications cascaded)`);

  // Partner jobs may have student applications; archive rather than hard-delete
  const partnerArchived = await prisma.job.updateMany({
    where: {
      deadline: { lt: now },
      status: { in: ["PUBLISHED", "DRAFT"] },
    },
    data: { status: "ARCHIVED" },
  });
  console.log(`  job        archived   : ${partnerArchived.count}`);

  console.log("\n[cleanup] Done.");
  await prisma.$disconnect();
}

main().catch(async (e) => {
  console.error("[cleanup] Failed:", e);
  await prisma.$disconnect();
  process.exit(1);
});
