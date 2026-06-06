import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

import { Pool } from "pg";

// Strip sslmode from the URL so the explicit ssl option below takes full control.
// Newer pg versions treat sslmode=require as verify-full and reject AWS RDS certs.
const connectionString = (process.env["DATABASE_URL"] ?? "").replace(
  /([?&])sslmode=[^&]*/,
  (m) => (m.startsWith("?") ? "?" : ""),
);

const pool = new Pool({
  connectionString,
  max: 20,
  idleTimeoutMillis: 30_000,
  connectionTimeoutMillis: 5_000,
  keepAlive: true,
  ssl: { rejectUnauthorized: false },
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
