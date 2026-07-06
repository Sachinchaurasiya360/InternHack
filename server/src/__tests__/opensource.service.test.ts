import { describe, it, expect, vi, beforeEach } from "vitest";
import { OpensourceService } from "../module/opensource/opensource.service.js";
import { prisma } from "../database/db.js";

vi.mock("../database/db.js", () => ({
  prisma: {
    repoRequest: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
      update: vi.fn(),
      create: vi.fn(),
      count: vi.fn(),
    },
    opensourceRepo: {
      create: vi.fn(),
      findMany: vi.fn(),
      findUnique: vi.fn(),
      count: vi.fn(),
    },
    opensourceBookmark: {
      findMany: vi.fn(),
      create: vi.fn(),
      delete: vi.fn(),
      deleteMany: vi.fn(),
      createMany: vi.fn(),
    },
    $transaction: vi.fn(),
  },
}));

vi.mock("../utils/email.utils.js", () => ({
  sendEmail: vi.fn().mockResolvedValue(undefined),
}));

vi.mock("../utils/email-templates.js", () => ({
  repoRequestSubmittedHtml: vi.fn().mockReturnValue("<html/>"),
  repoRequestApprovedHtml: vi.fn().mockReturnValue("<html/>"),
}));

vi.mock("../lib/github.js", () => ({
  fetchGithubStats: vi.fn().mockResolvedValue({
    stars: 100,
    forks: 50,
    openIssues: 10,
  }),
  fetchRepoHealthData: vi.fn().mockResolvedValue({
    hasReadme: true,
    hasLicense: true,
    hasContributing: true,
    recentCommit: true,
  }),
  fetchGithubGoodFirstIssues: vi.fn().mockResolvedValue([]),
}));

const service = new OpensourceService();
const USER_ID = 42;
const REQUEST_ID = 1;
const REPO_ID = 99;

function makeRequest(overrides: Record<string, unknown> = {}) {
  return {
    id: REQUEST_ID,
    name: "test-repo",
    owner: "test-owner",
    description: "A test repository",
    language: "TypeScript",
    url: "https://github.com/test-owner/test-repo",
    domain: "WEB",
    difficulty: "BEGINNER",
    techStack: [],
    tags: [],
    reason: "For learning",
    status: "PENDING",
    adminNote: null,
    userId: USER_ID,
    repoId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overrides,
  } as any;
}

beforeEach(() => {
  vi.clearAllMocks();
});

describe("OpensourceService.getMyRepoRequests", () => {
  it("returns pending requests with repoId as null", async () => {
    const pendingRequest = makeRequest({ status: "PENDING" });
    vi.mocked(prisma.repoRequest.findMany).mockResolvedValue([pendingRequest]);

    const result = await service.getMyRepoRequests(USER_ID);

    expect(prisma.repoRequest.findMany).toHaveBeenCalledTimes(1);
    expect(result).toHaveLength(1);
    expect(result[0].status).toBe("PENDING");
    expect(result[0].repoId).toBeNull();
  });

  it("returns approved requests with repoId set", async () => {
    const approvedRequest = makeRequest({ status: "APPROVED", repoId: REPO_ID });
    vi.mocked(prisma.repoRequest.findMany).mockResolvedValue([approvedRequest]);

    const result = await service.getMyRepoRequests(USER_ID);

    expect(prisma.repoRequest.findMany).toHaveBeenCalledTimes(1);
    expect(result).toHaveLength(1);
    expect(result[0].status).toBe("APPROVED");
    expect(result[0].repoId).toBe(REPO_ID);
  });

  it("returns rejected requests with repoId as null", async () => {
    const rejectedRequest = makeRequest({ status: "REJECTED" });
    vi.mocked(prisma.repoRequest.findMany).mockResolvedValue([rejectedRequest]);

    const result = await service.getMyRepoRequests(USER_ID);

    expect(prisma.repoRequest.findMany).toHaveBeenCalledTimes(1);
    expect(result).toHaveLength(1);
    expect(result[0].status).toBe("REJECTED");
    expect(result[0].repoId).toBeNull();
  });

  it("returns mixed status requests in a single query", async () => {
    const requests = [
      makeRequest({ status: "APPROVED", repoId: REPO_ID }),
      makeRequest({ id: 2, status: "PENDING" }),
      makeRequest({ id: 3, status: "REJECTED" }),
    ];
    vi.mocked(prisma.repoRequest.findMany).mockResolvedValue(requests);

    const result = await service.getMyRepoRequests(USER_ID);

    expect(prisma.repoRequest.findMany).toHaveBeenCalledTimes(1);
    expect(result).toHaveLength(3);
    expect(result[0].repoId).toBe(REPO_ID);
    expect(result[1].repoId).toBeNull();
    expect(result[2].repoId).toBeNull();
  });

  it("filters by the correct userId and orders by createdAt desc", async () => {
    vi.mocked(prisma.repoRequest.findMany).mockResolvedValue([]);

    await service.getMyRepoRequests(USER_ID);

    expect(prisma.repoRequest.findMany).toHaveBeenCalledWith({
      where: { userId: USER_ID },
      orderBy: { createdAt: "desc" },
    });
  });
});

describe("OpensourceService.approveRepoRequest", () => {
  it("creates a repo and sets repoId on the request", async () => {
    const pendingRequest = makeRequest();
    vi.mocked(prisma.repoRequest.findUnique).mockResolvedValue(pendingRequest);
    vi.mocked(prisma.opensourceRepo.create).mockResolvedValue({
      id: REPO_ID,
      name: "test-repo",
      owner: "test-owner",
    } as any);
    vi.mocked(prisma.repoRequest.update).mockResolvedValue({
      ...pendingRequest,
      status: "APPROVED",
      repoId: REPO_ID,
    } as any);

    const overrides = { adminNote: "Looks good!" };
    const result = await service.approveRepoRequest(REQUEST_ID, overrides);

    expect(prisma.repoRequest.update).toHaveBeenCalledWith({
      where: { id: REQUEST_ID },
      data: { status: "APPROVED", adminNote: "Looks good!", repoId: REPO_ID },
    });
    expect(result).toBeDefined();
    expect(result.id).toBe(REPO_ID);
  });
});

describe("OpensourceService.listRepos — multi-language filter", () => {
  const baseQuery = {
    page: 1,
    limit: 20,
    sortBy: "stars",
    sortOrder: "desc" as const,
  };

  beforeEach(() => {
    vi.mocked(prisma.opensourceRepo.findMany).mockResolvedValue([]);
    vi.mocked(prisma.opensourceRepo.count).mockResolvedValue(0);
  });

  it("queries with { in: [...] } for multiple languages", async () => {
    await service.listRepos({
      ...baseQuery,
      language: ["Python", "TypeScript"],
    });

    expect(prisma.opensourceRepo.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          language: { in: ["Python", "TypeScript"], mode: "insensitive" },
        }),
      }),
    );
  });

  it("still works correctly with a single language", async () => {
    await service.listRepos({ ...baseQuery, language: ["Go"] });

    expect(prisma.opensourceRepo.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          language: { in: ["Go"], mode: "insensitive" },
        }),
      }),
    );
  });

  it("returns empty result when no repos match any selected language", async () => {
    const result = await service.listRepos({
      ...baseQuery,
      language: ["NonexistentLang"],
    });

    expect(result.repos).toEqual([]);
    expect(result.pagination.total).toBe(0);
  });

  it("does not filter by language when none are selected", async () => {
    await service.listRepos({ ...baseQuery, language: undefined });

    const callArgs = vi.mocked(prisma.opensourceRepo.findMany).mock.calls[0][0];
    expect(callArgs!.where).not.toHaveProperty("language");
  });

  it("does not filter by language for empty array", async () => {
    await service.listRepos({ ...baseQuery, language: [] });

    const callArgs = vi.mocked(prisma.opensourceRepo.findMany).mock.calls[0][0];
    expect(callArgs!.where).not.toHaveProperty("language");
  });
});

describe("OpensourceService.listRepos — tag-aware search", () => {
  const baseQuery = {
    page: 1,
    limit: 20,
    sortBy: "stars",
    sortOrder: "desc" as const,
  };

  beforeEach(() => {
    vi.mocked(prisma.opensourceRepo.findMany).mockResolvedValue([]);
    vi.mocked(prisma.opensourceRepo.count).mockResolvedValue(0);
  });

  it("adds OR clause with hasSome for a single-word tag search", async () => {
    await service.listRepos({ ...baseQuery, search: "react" });

    expect(prisma.opensourceRepo.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          OR: expect.arrayContaining([
            { tags: { hasSome: ["react"] } },
          ]),
        }),
      }),
    );
  });

  it("splits multi-word search into hasSome array for tag matching", async () => {
    await service.listRepos({ ...baseQuery, search: "react web" });

    const callArgs = vi.mocked(prisma.opensourceRepo.findMany).mock.calls[0][0];
    const orClause = (callArgs!.where as any).OR as any[];
    const tagClause = orClause.find(
      (c: any) => c.tags?.hasSome !== undefined,
    );
    expect(tagClause).toBeDefined();
    expect(tagClause!.tags.hasSome).toContain("react");
    expect(tagClause!.tags.hasSome).toContain("web");
  });

  it("includes name, owner, description, language in the OR clause", async () => {
    await service.listRepos({ ...baseQuery, search: "react" });

    expect(prisma.opensourceRepo.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          OR: expect.arrayContaining([
            { name: { contains: "react", mode: "insensitive" } },
            { owner: { contains: "react", mode: "insensitive" } },
            { description: { contains: "react", mode: "insensitive" } },
            { language: { contains: "react", mode: "insensitive" } },
          ]),
        }),
      }),
    );
  });

  it("combines OR search with other filters (language + search)", async () => {
    await service.listRepos({
      ...baseQuery,
      language: ["TypeScript"],
      search: "state-management",
    });

    expect(prisma.opensourceRepo.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          language: { in: ["TypeScript"], mode: "insensitive" },
          OR: expect.arrayContaining([
            { tags: { hasSome: ["state-management"] } },
          ]),
        }),
      }),
    );
  });

  it("adds no OR clause when search is empty", async () => {
    await service.listRepos({ ...baseQuery, search: "" });

    const callArgs = vi.mocked(prisma.opensourceRepo.findMany).mock.calls[0][0];
    expect(callArgs!.where).not.toHaveProperty("OR");
  });

  it("adds no OR clause when search is undefined", async () => {
    await service.listRepos({ ...baseQuery, search: undefined });

    const callArgs = vi.mocked(prisma.opensourceRepo.findMany).mock.calls[0][0];
    expect(callArgs!.where).not.toHaveProperty("OR");
  });

  it("uses native Prisma filter instead of raw SQL (no $queryRaw call)", async () => {
    const calls = vi.mocked(prisma.opensourceRepo.findMany).mock.calls;

    await service.listRepos({ ...baseQuery, search: "react" });

    expect(calls[0][0]!.where).toHaveProperty("OR");
    const orClause = (calls[0][0]!.where as any).OR as any[];
    const hasTagsClause = orClause.some((c: any) => c.tags?.hasSome !== undefined);
    expect(hasTagsClause).toBe(true);
  });

  it("returns correct pagination shape", async () => {
    vi.mocked(prisma.opensourceRepo.findMany).mockResolvedValue([
      { id: 1, name: "repo-a" },
    ] as any);
    vi.mocked(prisma.opensourceRepo.count).mockResolvedValue(1);

    const result = await service.listRepos({
      ...baseQuery,
      search: "repo-a",
    });

    expect(result).toEqual({
      repos: [{ id: 1, name: "repo-a" }],
      pagination: { total: 1, page: 1, limit: 20, totalPages: 1 },
    });
  });
});
