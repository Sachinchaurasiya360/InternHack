# ── Dependencies (shared) ──────────────────────────────────────
FROM node:20-bookworm-slim AS deps

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# ── Local development (docker compose bind-mounts ./client → /app) ──
FROM deps AS development

ENV NODE_ENV=development

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
