import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env["DATABASE_URL"] ?? "";

// Pool size: Neon/Supabase free tiers allow ~20 connections.
// Keep a comfortable margin below the hard limit.
const adapter = new PrismaPg({
  connectionString,
  max: 10,          // max pool connections
  idleTimeoutMillis: 30_000,  // release idle connections after 30 s
  connectionTimeoutMillis: 5_000, // fail fast instead of hanging
});

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
