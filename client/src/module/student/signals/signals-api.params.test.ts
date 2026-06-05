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
  kind?: "funding" | "hiring" | "all";
  hiringOnly?: boolean;
  status?: string;
}) {
  const params: Record<string, string | number | boolean> = {
    page: q.page,
    limit: q.limit,
    sort: q.sort ?? "recent",
  };
  if (q.search) params["search"] = q.search;
  if (q.source) params["source"] = q.source;
  if (q.kind && q.kind !== "all") params["kind"] = q.kind;
  if (q.hiringOnly) params["hiringOnly"] = true;
  if (q.status) params["status"] = q.status;
  return params;
}

describe("signals list params", () => {
  it("omits kind when all (default tab)", () => {
    const params = buildListParams({ page: 1, limit: 12, kind: "all" });
    expect(params.kind).toBeUndefined();
    expect(params.page).toBe(1);
    expect(params.limit).toBe(12);
  });

  it("sends kind=funding for funding tab", () => {
    const params = buildListParams({ page: 1, limit: 12, kind: "funding" });
    expect(params.kind).toBe("funding");
  });

  it("sends kind=hiring for hiring tab", () => {
    const params = buildListParams({ page: 1, limit: 12, kind: "hiring" });
    expect(params.kind).toBe("hiring");
  });

  it("forwards search and source filters", () => {
    const params = buildListParams({
      page: 2,
      limit: 12,
      kind: "hiring",
      search: "acme",
      source: "hn-hiring",
    });
    expect(params.search).toBe("acme");
    expect(params.source).toBe("hn-hiring");
    expect(params.kind).toBe("hiring");
    expect(params.page).toBe(2);
  });
});
