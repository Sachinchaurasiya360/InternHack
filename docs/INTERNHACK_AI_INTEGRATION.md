efore going live
Run Prisma migration from server/src/database/:

npx prisma migrate dev --name add-internhack-ai-tables
Enable pgvector on PostgreSQL: CREATE EXTENSION IF NOT EXISTS vector;
Add vector columns via raw SQL (pgvector isn't natively supported by Prisma)