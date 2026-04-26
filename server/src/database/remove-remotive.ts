import "dotenv/config";
import { prisma } from "./db.js";

async function main() {
  const [jobCount, logCount] = await Promise.all([
    prisma.scrapedJob.count({ where: { source: "remotive" } }),
    prisma.scrapeLog.count({ where: { source: "remotive" } }),
  ]);
  console.log(`Remotive scrapedJob rows: ${jobCount}`);
  console.log(`Remotive scrapeLog rows : ${logCount}`);

  if (process.argv.includes("--dry-run")) {
    console.log("(dry-run) nothing deleted.");
    await prisma.$disconnect();
    return;
  }

  const jobs = await prisma.scrapedJob.deleteMany({ where: { source: "remotive" } });
  const logs = await prisma.scrapeLog.deleteMany({ where: { source: "remotive" } });
  console.log(`Deleted scrapedJob rows: ${jobs.count}`);
  console.log(`Deleted scrapeLog rows : ${logs.count}`);

  await prisma.$disconnect();
}

main().catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
