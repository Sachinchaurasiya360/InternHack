import pg from "pg";
import "dotenv/config";

const API_URL = "https://yc-oss.github.io/api/companies/all.json";

interface RawYCCompany {
  id: number;
  name: string;
  slug: string;
  small_logo_thumb_url: string | null;
  website: string | null;
  all_locations: string | null;
  long_description: string | null;
  one_liner: string | null;
  team_size: number | null;
  industry: string | null;
  subindustry: string | null;
  launched_at: number | null;
  tags: string[];
  top_company: boolean;
  isHiring: boolean;
  batch: string | null;
  status: string | null;
  industries: string[];
  regions: string[];
  stage: string | null;
  url: string | null;
}

function toBatchShort(batch: string | null): string | null {
  if (!batch) return null;
  const match = batch.match(/^(Winter|Summer|Fall|Spring)\s+(\d{4})$/i);
  if (!match) return batch;
  return `${match[1]![0]!.toUpperCase()}${match[2]!.slice(-2)}`;
}

async function main() {
  console.log("Fetching YC companies from yc-oss API...");
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error(`API returned ${response.status}`);

  const data: RawYCCompany[] = await response.json();
  console.log(`Fetched ${data.length} companies`);

  const pool = new pg.Pool({
    connectionString: process.env["DATABASE_URL"],
    max: 5,
    idleTimeoutMillis: 60000,
    connectionTimeoutMillis: 10000,
  });

  const countRes = await pool.query("SELECT COUNT(*) FROM \"ycCompany\"");
  console.log(`${countRes.rows[0].count} companies already in DB`);

  let processed = 0;
  let failed = 0;
  const BATCH = 25;

  for (let i = 0; i < data.length; i += BATCH) {
    const batch = data.slice(i, i + BATCH);

    // Build parameterized values for bulk insert
    const params: unknown[] = [];
    const valueClauses: string[] = [];
    let paramIdx = 1;

    for (const c of batch) {
      const batchShort = toBatchShort(c.batch);
      const launchedAt = c.launched_at ? new Date(c.launched_at * 1000) : null;

      valueClauses.push(`(
        $${paramIdx++}, $${paramIdx++}, $${paramIdx++}, $${paramIdx++}, $${paramIdx++},
        $${paramIdx++}, $${paramIdx++}, $${paramIdx++}, $${paramIdx++}, $${paramIdx++},
        $${paramIdx++}, $${paramIdx++}, $${paramIdx++}, $${paramIdx++}, $${paramIdx++},
        $${paramIdx++}, $${paramIdx++}, $${paramIdx++}, $${paramIdx++}, $${paramIdx++},
        $${paramIdx++}, NOW(), NOW()
      )`);

      params.push(
        c.id,                         // ycId
        c.name,                       // name
        c.slug,                       // slug
        c.one_liner || null,          // oneLiner
        c.long_description || null,   // longDescription
        c.batch || null,              // batch
        batchShort,                   // batchShort
        c.status || null,             // status
        c.website || null,            // website
        c.small_logo_thumb_url || null, // smallLogoUrl
        c.all_locations || null,      // allLocations
        c.team_size || null,          // teamSize
        c.industry || null,           // industry
        c.subindustry || null,        // subindustry
        c.tags || [],                 // tags
        c.industries || [],           // industries
        c.regions || [],              // regions
        c.stage || null,              // stage
        c.isHiring ?? false,          // isHiring
        c.top_company ?? false,       // topCompany
        c.url || null,                // ycUrl
      );
    }

    const sql = `
      INSERT INTO "ycCompany" (
        "ycId", "name", "slug", "oneLiner", "longDescription",
        "batch", "batchShort", "status", "website", "smallLogoUrl",
        "allLocations", "teamSize", "industry", "subindustry",
        "tags", "industries", "regions", "stage",
        "isHiring", "topCompany", "ycUrl", "createdAt", "updatedAt"
      ) VALUES ${valueClauses.join(",\n")}
      ON CONFLICT ("ycId") DO UPDATE SET
        "name" = EXCLUDED."name",
        "slug" = EXCLUDED."slug",
        "oneLiner" = EXCLUDED."oneLiner",
        "longDescription" = EXCLUDED."longDescription",
        "batch" = EXCLUDED."batch",
        "batchShort" = EXCLUDED."batchShort",
        "status" = EXCLUDED."status",
        "website" = EXCLUDED."website",
        "smallLogoUrl" = EXCLUDED."smallLogoUrl",
        "allLocations" = EXCLUDED."allLocations",
        "teamSize" = EXCLUDED."teamSize",
        "industry" = EXCLUDED."industry",
        "subindustry" = EXCLUDED."subindustry",
        "tags" = EXCLUDED."tags",
        "industries" = EXCLUDED."industries",
        "regions" = EXCLUDED."regions",
        "stage" = EXCLUDED."stage",
        "isHiring" = EXCLUDED."isHiring",
        "topCompany" = EXCLUDED."topCompany",
        "ycUrl" = EXCLUDED."ycUrl",
        "updatedAt" = NOW()
    `;

    try {
      await pool.query(sql, params);
      processed += batch.length;
    } catch (err) {
      console.error(`  Batch ${i}-${i + batch.length} failed: ${(err as Error).message}`);
      failed += batch.length;
    }

    if ((processed + failed) % 500 < BATCH || i + BATCH >= data.length) {
      console.log(`  ${processed + failed}/${data.length} (${failed} failed)...`);
    }
  }

  console.log(`Done! Inserted/updated ${processed}, failed ${failed} out of ${data.length}.`);
  await pool.end();
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
