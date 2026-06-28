// Applies pending Prisma migrations during a Vercel *production* build.
//
// Why this exists: the runtime app connects through the Supabase transaction
// pooler (DATABASE_URL, pgbouncer port 6543, prepared statements disabled),
// which is not a valid target for `prisma migrate deploy`. Migrations must run
// over the direct connection (DIRECT_URL). Previously this was a manual step
// (see plan.md step 10.3) and got skipped, causing prod schema drift such as
// the missing `repoRequest.repoId` column.
//
// Guarded to VERCEL_ENV=production so preview deploys and local `npm run build`
// never touch the production database.
import { execSync } from "node:child_process";

const isVercelProd =
  process.env.VERCEL === "1" && process.env.VERCEL_ENV === "production";

if (!isVercelProd) {
  console.log(
    `[migrate-on-deploy] Skipping prisma migrate deploy (VERCEL_ENV=${
      process.env.VERCEL_ENV ?? "unset"
    }). Migrations only run on Vercel production builds.`,
  );
  process.exit(0);
}

// Prefer the direct connection for migrations; fall back to DATABASE_URL only if
// DIRECT_URL is not configured.
const migrateUrl = process.env.DIRECT_URL || process.env.DATABASE_URL;
if (!migrateUrl) {
  console.error(
    "[migrate-on-deploy] Neither DIRECT_URL nor DATABASE_URL is set; cannot run migrations.",
  );
  process.exit(1);
}

console.log(
  `[migrate-on-deploy] Running prisma migrate deploy via ${
    process.env.DIRECT_URL ? "DIRECT_URL (direct connection)" : "DATABASE_URL"
  } ...`,
);

// prisma.config.ts resolves the datasource from env("DATABASE_URL"), so override
// it for this command only. dotenv (loaded by the config) does not override
// existing process env vars, so this value wins.
execSync("prisma migrate deploy --config src/database/prisma.config.ts", {
  stdio: "inherit",
  env: { ...process.env, DATABASE_URL: migrateUrl },
});

console.log("[migrate-on-deploy] Migrations applied.");
