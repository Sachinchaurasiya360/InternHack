/**
 * seed-colleges.ts
 *
 * One-time bulk import of Indian higher-education institutions from the
 * AISHE (All India Survey on Higher Education) directory into the `college`
 * table. Source data: data/aishe-colleges.csv (70,865 rows, sourced from
 * https://dashboard.aishe.gov.in/hedirectory/ via the MIT-licensed
 * aishe-institutions-list npm package).
 *
 * Backs the college autocomplete on the student profile page
 * (GET /api/universities/search).
 *
 * Run from the server directory:
 *   npx tsx src/database/seeds/seed-colleges.ts
 *
 * Safe to re-run — skipped if the table already has rows, unless --force is
 * passed (which truncates and reseeds).
 */

import "dotenv/config";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const __dirname = dirname(fileURLToPath(import.meta.url));
const connectionString = (process.env["DATABASE_URL"] ?? "").replace(
  /([?&])sslmode=[^&]*/,
  (m) => (m.startsWith("?") ? "?" : ""),
);
const adapter = new PrismaPg({ connectionString, ssl: { rejectUnauthorized: false } });
const prisma = new PrismaClient({ adapter });

const FORCE = process.argv.includes("--force");
const BATCH_SIZE = 2000;

interface Row {
  aisheCode: string;
  name: string;
  state: string;
  district: string | null;
}

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let field = "";
  let row: string[] = [];
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; continue; }
        inQuotes = false;
        continue;
      }
      field += c;
      continue;
    }
    if (c === '"') { inQuotes = true; continue; }
    if (c === ",") { row.push(field); field = ""; continue; }
    if (c === "\r") continue;
    if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; continue; }
    field += c;
  }
  if (field.length > 0 || row.length > 0) { row.push(field); rows.push(row); }
  return rows;
}

function loadRows(): Row[] {
  const csvPath = join(__dirname, "data", "aishe-colleges.csv");
  const text = readFileSync(csvPath, "utf8");
  const [, ...dataRows] = parseCsv(text).filter((r) => r.length === 4);

  const seen = new Set<string>();
  const rows: Row[] = [];
  for (const [aisheCode, name, state, district] of dataRows) {
    const key = `${name.trim().toLowerCase()}|${state.trim().toLowerCase()}|${(district ?? "").trim().toLowerCase()}`;
    if (seen.has(key)) continue;
    seen.add(key);
    rows.push({
      aisheCode,
      name: name.trim(),
      state: state.trim(),
      district: district?.trim() || null,
    });
  }
  return rows;
}

async function main() {
  const existingCount = await prisma.college.count();
  if (existingCount > 0 && !FORCE) {
    console.log(`  ⚠ college table already has ${existingCount} rows, skipping (pass --force to reseed)`);
    return;
  }

  if (existingCount > 0 && FORCE) {
    await prisma.college.deleteMany({});
  }

  const rows = loadRows();
  console.log(`  Loaded ${rows.length} deduplicated institutions from CSV`);

  for (let i = 0; i < rows.length; i += BATCH_SIZE) {
    const batch = rows.slice(i, i + BATCH_SIZE);
    await prisma.college.createMany({ data: batch });
    console.log(`  ✓ Inserted ${Math.min(i + BATCH_SIZE, rows.length)} / ${rows.length}`);
  }

  console.log(`  ✓ Colleges: ${rows.length} records seeded`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
