/**
 * One-off backfill for `job.salaryAnnualMin` / `job.salaryAnnualMax` from free-text `job.salary`.
 * Only touches rows missing either bound to limit write amplification.
 *
 * Usage (from repo `server/`):
 *   `DATABASE_URL="..." npx tsx scripts/backfill-job-salary-bounds.ts`
 */

import "dotenv/config";

import { prisma } from "../src/database/db.js";
import { parseSalary } from "../src/module/job-index/job-normalizer.js";

/** Batch size for each `prisma.$transaction` to avoid oversized transactions. */
const BATCH_SIZE = 250;

async function main() {
  let total = 0;

  for (;;) {
    const jobs = await prisma.job.findMany({
      where: {
        OR: [{ salaryAnnualMin: null }, { salaryAnnualMax: null }],
      },
      take: BATCH_SIZE,
      orderBy: { id: "asc" },
      select: { id: true, salary: true },
    });

    if (jobs.length === 0) break;

    await prisma.$transaction(
      jobs.map((j) => {
        const { min, max } = parseSalary(j.salary);
        return prisma.job.update({
          where: { id: j.id },
          data: {
            salaryAnnualMin: min,
            salaryAnnualMax: max,
          },
        });
      }),
    );

    total += jobs.length;
  }

  console.log(`[backfill-job-salary-bounds] updated ${total} row(s) that were missing bounds`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
