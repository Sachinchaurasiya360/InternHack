import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

import { Pool } from "pg";

// Strip sslmode from the URL so the explicit ssl option below takes full control.
// Newer pg versions treat sslmode=require as verify-full and reject AWS RDS certs.
const rawConnectionString = process.env["DATABASE_URL"] ?? "";
const connectionString = rawConnectionString
  .replace(/([?&])sslmode=[^&]*/g, "$1")
  .replace(/[?&]$/, "");

function resolveSsl():
  | false
  | { rejectUnauthorized: false } {
  if (process.env["DATABASE_SSL"] === "true") {
    return { rejectUnauthorized: false };
  }
  if (process.env["DATABASE_SSL"] === "false") {
    return false;
  }
  // Local Postgres does not serve TLS. Match on the resolved hostname so a
  // remote URL whose scheme or database name contains "postgres" does not
  // accidentally disable TLS.
  let sslHost = "";
  try {
    sslHost = new URL(rawConnectionString).hostname;
  } catch {
    // Malformed/empty URL: fall through to the secure default below.
  }
  if (["localhost", "127.0.0.1", "postgres"].includes(sslHost)) {
    return false;
  }
  return { rejectUnauthorized: false };
}

// Pool sizing: each serverless invocation gets its own pool, so the per-process
// max must stay small (default 3 on Vercel) to avoid exhausting the Supabase
// transaction pooler. A long-running EC2/local process can hold more (default
// 20). Override either way with PG_POOL_MAX.
const DEFAULT_POOL_MAX = process.env["VERCEL"] ? 3 : 20;
const poolMax = Number(process.env["PG_POOL_MAX"] ?? DEFAULT_POOL_MAX);

const pool = new Pool({
  connectionString,
  max: Number.isFinite(poolMax) && poolMax > 0 ? poolMax : DEFAULT_POOL_MAX,
  idleTimeoutMillis: 30_000,
  connectionTimeoutMillis: 5_000,
  keepAlive: true,
  ssl: resolveSsl(),
});

pool.on("error", (err) => {
  console.error("[pg pool] error:", err);
});

const adapter = new PrismaPg(pool);

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
