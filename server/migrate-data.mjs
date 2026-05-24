import pg from "pg";
const { Client } = pg;

const SOURCE_URL =
  "postgres://e2c1dff2ab923de897faf2110bab9db6cc3cc7997d9e16bf1118a5f23cc24687:sk_smxqS1ItrO16_j-yW-euU@db.prisma.io:5432/postgres?sslmode=require";

const TARGET_URL =
  "postgresql://postgres:Claude420Sachin@internhack-prod.cbw6eew4qz0n.ap-south-1.rds.amazonaws.com:5432/postgres?sslmode=require";

const SKIP = new Set(["_prisma_migrations"]);

const src = new Client({ connectionString: SOURCE_URL, ssl: { rejectUnauthorized: false } });
const tgt = new Client({ connectionString: TARGET_URL, ssl: { rejectUnauthorized: false } });

const log = (msg) => console.log(`[${new Date().toISOString()}] ${msg}`);

async function getTables(client) {
  const res = await client.query(
    `SELECT tablename FROM pg_tables WHERE schemaname = 'public' ORDER BY tablename`
  );
  return res.rows.map((r) => r.tablename).filter((t) => !SKIP.has(t));
}

async function copyTable(table) {
  const countRes = await src.query(`SELECT COUNT(*) FROM "${table}"`);
  const total = parseInt(countRes.rows[0].count, 10);
  if (total === 0) { log(`  ${table}: 0 rows — skip`); return 0; }

  const rows = await src.query(`SELECT * FROM "${table}"`);
  if (rows.rows.length === 0) return 0;

  const fields = rows.fields;
  const cols = fields.map((f) => `"${f.name}"`).join(", ");
  const BATCH = 200;
  let inserted = 0;

  while (inserted < rows.rows.length) {
    const batch = rows.rows.slice(inserted, inserted + BATCH);
    const placeholders = batch
      .map((_, bi) =>
        `(${fields.map((_, ci) => `$${bi * fields.length + ci + 1}`).join(", ")})`
      )
      .join(", ");
    const values = batch.flatMap((row) => fields.map((f) => row[f.name]));
    await tgt.query(
      `INSERT INTO "${table}" (${cols}) VALUES ${placeholders} ON CONFLICT DO NOTHING`,
      values
    );
    inserted += batch.length;
  }

  log(`  ${table}: ${total} rows`);
  return total;
}

async function resetSequences() {
  const res = await tgt.query(`
    SELECT s.relname AS seq, t.relname AS tbl, a.attname AS col
    FROM pg_class s
    JOIN pg_depend d ON d.objid = s.oid AND d.classid = 'pg_class'::regclass AND d.refclassid = 'pg_class'::regclass
    JOIN pg_class t ON t.oid = d.refobjid
    JOIN pg_attribute a ON a.attrelid = t.oid AND a.attnum = d.refobjsubid
    JOIN pg_namespace n ON n.oid = s.relnamespace
    WHERE s.relkind = 'S' AND n.nspname = 'public'
  `);
  for (const { seq, tbl, col } of res.rows) {
    try {
      await tgt.query(
        `SELECT setval('"${seq}"', COALESCE((SELECT MAX("${col}") FROM "${tbl}"), 1), true)`
      );
    } catch (_) {}
  }
  log(`Reset ${res.rows.length} sequences`);
}

async function main() {
  log("Connecting...");
  await src.connect();
  await tgt.connect();

  const tables = await getTables(src);
  log(`${tables.length} tables found: ${tables.join(", ")}`);

  await tgt.query("SET session_replication_role = 'replica'");

  let totalRows = 0;
  for (const table of tables) {
    try {
      totalRows += await copyTable(table);
    } catch (err) {
      log(`  ERROR ${table}: ${err.message}`);
    }
  }

  await tgt.query("SET session_replication_role = 'origin'");
  await resetSequences();

  log(`\nVerification:`);
  let ok = 0, mismatch = 0;
  for (const table of tables) {
    try {
      const s = parseInt((await src.query(`SELECT COUNT(*) FROM "${table}"`)).rows[0].count, 10);
      const t = parseInt((await tgt.query(`SELECT COUNT(*) FROM "${table}"`)).rows[0].count, 10);
      if (s !== t) { log(`  MISMATCH ${table}: src=${s} tgt=${t}`); mismatch++; }
      else ok++;
    } catch (_) {}
  }
  log(`${ok} tables match, ${mismatch} mismatches, ${totalRows} total rows migrated`);

  await src.end();
  await tgt.end();
  log("Done.");
}

main().catch((err) => { console.error(err); process.exit(1); });
