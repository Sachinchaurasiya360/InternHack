import type { Request } from "express";

export interface Pagination {
  page: number;
  limit: number;
  skip: number;
}

interface ParseOptions {
  defaultLimit?: number;
  maxLimit?: number;
}

function toPositiveInt(value: unknown, fallback: number): number {
  const n = typeof value === "string" ? parseInt(value, 10) : Number(value);
  return Number.isFinite(n) && n >= 1 ? Math.floor(n) : fallback;
}

export function parsePagination(
  req: Request,
  { defaultLimit = 20, maxLimit = 100 }: ParseOptions = {},
): Pagination {
  const page = toPositiveInt(req.query["page"], 1);
  const rawLimit = toPositiveInt(req.query["limit"], defaultLimit);
  const limit = Math.min(rawLimit, maxLimit);
  return { page, limit, skip: (page - 1) * limit };
}

export function paginate(
  page: number,
  limit: number,
  { defaultLimit = 20, maxLimit = 100 }: ParseOptions = {},
): Pagination {
  const safePage = Number.isFinite(page) && page >= 1 ? Math.floor(page) : 1;
  const safeLimit = Math.min(
    Number.isFinite(limit) && limit >= 1 ? Math.floor(limit) : defaultLimit,
    maxLimit,
  );
  return { page: safePage, limit: safeLimit, skip: (safePage - 1) * safeLimit };
}
