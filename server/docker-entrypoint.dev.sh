#!/bin/sh
set -e
cd /app

npx prisma generate --config src/database/prisma.config.ts
npx prisma migrate deploy --config src/database/prisma.config.ts

exec npm run dev
