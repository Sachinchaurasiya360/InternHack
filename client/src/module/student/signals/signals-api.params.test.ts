/**
 * Unit tests for signals list query param building (no network / DB).
 * Run: npx vitest run src/module/student/signals/signals-api.params.test.ts
 */
import { describe, expect, it } from "vitest";

/** Mirrors querySignals param logic in signals-api.ts */
function buildListParams(q: {
  page: number;
  limit: number;
  sort?: "recent" | "amount";
  search?: string;
  source?: string;
  status?: string;
}) {
  const params: Record<string, string | number | boolean> = {
    page: q.page,
    limit: q.limit,
    sort: q.sort ?? "recent",
  };
  if (q.search) params["search"] = q.search;
  if (q.source) params["source"] = q.source;
  if (q.status) params["status"] = q.status;
  return params;
}

describe("signals list params", () => {
  it("defaults sort to recent", () => {
    const params = buildListParams({ page: 1, limit: 12 });
    expect(params.sort).toBe("recent");
    expect(params.page).toBe(1);
    expect(params.limit).toBe(12);
  });

  it("forwards search and source filters", () => {
    const params = buildListParams({
      page: 2,
      limit: 12,
      search: "acme",
      source: "hn-hiring",
    });
    expect(params.search).toBe("acme");
    expect(params.source).toBe("hn-hiring");
    expect(params.page).toBe(2);
  });

  it("omits search and source when not provided", () => {
    const params = buildListParams({ page: 1, limit: 12 });
    expect(params.search).toBeUndefined();
    expect(params.source).toBeUndefined();
  });
});
