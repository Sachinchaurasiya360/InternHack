import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// Strip sslmode from the URL so the explicit ssl option below takes full control.
// Newer pg versions treat sslmode=require as verify-full and reject AWS RDS certs.
const connectionString = (process.env["DATABASE_URL"] ?? "").replace(
  /([?&])sslmode=[^&]*/,
  (m) => (m.startsWith("?") ? "?" : ""),
);

const adapter = new PrismaPg(
  {
    connectionString,
    max: 20,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 5_000,
    keepAlive: true,
    ssl: { rejectUnauthorized: false },
  },
  {
    // Without these, an idle pg client erroring (managed Postgres dropping
    // idle TCP connections, network blips) emits an unhandled 'error' event
    // on the pool and crashes the Node process.
    onPoolError: (err) => {
      console.error("[prisma/pg] pool error:", err);
    },
    onConnectionError: (err) => {
      console.error("[prisma/pg] connection error:", err);
    },
  },
);

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
