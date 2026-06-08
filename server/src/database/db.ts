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
  // Local Postgres installs typically do not support TLS.
  if (/localhost|127\.0\.0\.1/.test(rawConnectionString)) {
    return false;
  }
  return { rejectUnauthorized: false };
}

const pool = new Pool({
  connectionString,
  max: 20,
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
