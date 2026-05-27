/**
 * Backfills job.salaryAnnualMin / salaryAnnualMax from parseable job.salary text.
 * Processes every row once using a strictly increasing id cursor (no infinite loop when parseSalary returns nulls).
 *
 * Usage: cd server && npx tsx src/database/backfill-job-salary-bounds.ts
 */
import "dotenv/config";
import { prisma } from "./db.js";
import { parseSalary } from "../module/job-index/job-normalizer.js";

const BATCH = 250;

async function main() {
  let lastId = 0;
  let batches = 0;

  for (;;) {
    const rows = await prisma.job.findMany({
      where: { id: { gt: lastId } },
      orderBy: { id: "asc" },
      take: BATCH,
      select: { id: true, salary: true },
    });

    if (rows.length === 0) break;

    let unparsedInBatch = 0;
    for (const row of rows) {
      const { min, max } = parseSalary(row.salary);
      if (min === null || max === null) unparsedInBatch += 1;

      await prisma.job.update({
        where: { id: row.id },
        data: { salaryAnnualMin: min, salaryAnnualMax: max },
      });
      lastId = row.id;
    }

    batches += 1;
    console.log(
      `[backfill-job-salary-bounds] batch=${batches} lastId=${lastId} size=${rows.length} unparsedInBatch=${unparsedInBatch}`,
    );
  }

  console.log("[backfill-job-salary-bounds] complete.");
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  void prisma.$disconnect().finally(() => process.exit(1));
});
