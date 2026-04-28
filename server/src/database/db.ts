import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env["DATABASE_URL"] ?? "";

// Pool size: Neon/Supabase free tiers allow ~20 connections.
// Keep a comfortable margin below the hard limit.
const adapter = new PrismaPg(
  {
    connectionString,
    max: 10,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 5_000,
    keepAlive: true,
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
