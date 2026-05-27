/**
 * One-off backfill for job.salaryAnnualMin / job.salaryAnnualMax from free-text job.salary.
 *
 * Usage (from repo server/):
 *   DATABASE_URL="..." npx tsx scripts/backfill-job-salary-bounds.ts
 */

import "dotenv/config";

import { prisma } from "../src/database/db.js";
import { parseSalary } from "../src/module/job-index/job-normalizer.js";

async function main() {
  const jobs = await prisma.job.findMany({ select: { id: true, salary: true } });

  for (const j of jobs) {
    const { min, max } = parseSalary(j.salary);
    await prisma.job.update({
      where: { id: j.id },
      data: {
        salaryAnnualMin: min,
        salaryAnnualMax: max,
      },
    });
  }

  console.log(`[backfill-job-salary-bounds] processed ${jobs.length} rows`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
