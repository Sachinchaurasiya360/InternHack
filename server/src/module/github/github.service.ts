import crypto from "crypto";
import { prisma } from "../../database/db.js";
import { decrypt, encrypt } from "../../utils/crypto.utils.js";

const GITHUB_AUTHORIZE_URL = "https://github.com/login/oauth/authorize";
const GITHUB_TOKEN_URL = "https://github.com/login/oauth/access_token";
const GITHUB_API_URL = "https://api.github.com";
const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";
const STATE_TTL_MS = 10 * 60 * 1000;
const MAX_SEARCH_PAGES = 10;
const SEARCH_PAGE_SIZE = 50;
const RECENT_PR_LIMIT = 25;

type GithubOAuthState = {
  userId: number;
  nonce: string;
  exp: number;
};

type GithubViewerResponse = {
  login: string;
  html_url: string;
  public_repos: number;
};

type GithubPullRequestNode = {
  id: string;
  title: string;
  url: string;
  number: number;
  mergedAt: string | null;
  repository: {
    nameWithOwner: string;
    url: string;
    isFork: boolean;
    stargazerCount: number;
    primaryLanguage: { name: string } | null;
  };
};

type GithubSearchResponse = {
  data?: {
    search: {
      pageInfo: {
        hasNextPage: boolean;
        endCursor: string | null;
      };
      nodes: Array<GithubPullRequestNode | null>;
    };
  };
  errors?: Array<{ message: string }>;
};

type GithubSearchResult = NonNullable<GithubSearchResponse["data"]>["search"];

type GithubContributionRepo = {
  nameWithOwner: string;
  url: string;
  stars: number;
  language: string | null;
  mergedPrs: number;
  lastMergedAt: Date | null;
};

type GithubContributionPullRequest = {
  githubId: string;
  title: string;
  url: string;
  number: number;
  mergedAt: Date;
  repoName: string;
  repoUrl: string;
  repoStars: number;
  language: string | null;
};

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is required for GitHub OAuth`);
  }
  return value;
}

function getClientBaseUrl(): string {
  if (process.env["CLIENT_URL"]) return process.env["CLIENT_URL"];
  const firstAllowedOrigin = process.env["ALLOWED_ORIGINS"]?.split(",")[0]?.trim();
  return firstAllowedOrigin || "http://localhost:5173";
}

function getApiBaseUrl(): string {
  if (process.env["API_URL"]) return process.env["API_URL"].replace(/\/$/, "");
  if (process.env["SERVER_URL"]) return `${process.env["SERVER_URL"].replace(/\/$/, "")}/api`;
  return "http://localhost:3000/api";
}

function getStateSecret(): string {
  return getRequiredEnv("JWT_SECRET");
}

function base64UrlEncode(value: string): string {
  return Buffer.from(value, "utf8").toString("base64url");
}

function base64UrlDecode(value: string): string {
  return Buffer.from(value, "base64url").toString("utf8");
}

function signState(payload: string): string {
  return crypto.createHmac("sha256", getStateSecret()).update(payload).digest("base64url");
}

function createState(userId: number): string {
  const payload: GithubOAuthState = {
    userId,
    nonce: crypto.randomBytes(16).toString("hex"),
    exp: Date.now() + STATE_TTL_MS,
  };
  const encoded = base64UrlEncode(JSON.stringify(payload));
  return `${encoded}.${signState(encoded)}`;
}

function verifyState(state: string): GithubOAuthState {
  const [encoded, signature] = state.split(".");
  if (!encoded || !signature) {
    throw new Error("Invalid GitHub OAuth state");
  }

  const expected = signState(encoded);
  const expectedBuffer = Buffer.from(expected);
  const signatureBuffer = Buffer.from(signature);
  if (
    expectedBuffer.length !== signatureBuffer.length ||
    !crypto.timingSafeEqual(expectedBuffer, signatureBuffer)
  ) {
    throw new Error("Invalid GitHub OAuth state");
  }

  const payload = JSON.parse(base64UrlDecode(encoded)) as GithubOAuthState;
  if (!payload.userId || payload.exp < Date.now()) {
    throw new Error("Expired GitHub OAuth state");
  }
  return payload;
}

function getOAuthRedirectUri(): string {
  return `${getApiBaseUrl()}/github/callback`;
}

function toConnectionResponse(connection: {
  id: number;
  githubUsername: string;
  connectedAt: Date;
  lastSyncAt: Date | null;
  syncStatus: string;
  syncError: string | null;
  prsMerged: number;
  reposContributed: number;
  publicRepos: number;
  contributedStars: number;
  recentPullRequests?: Array<{
    id: number;
    title: string;
    url: string;
    number: number;
    mergedAt: Date;
    repoName: string;
    repoUrl: string;
    repoStars: number;
    language: string | null;
  }>;
  contributedRepos?: Array<{
    id: number;
    nameWithOwner: string;
    url: string;
    stars: number;
    language: string | null;
    mergedPrs: number;
    lastMergedAt: Date | null;
  }>;
}) {
  return {
    connected: true,
    connection: {
      id: connection.id,
      githubUsername: connection.githubUsername,
      profileUrl: `https://github.com/${connection.githubUsername}`,
      connectedAt: connection.connectedAt,
      lastSyncAt: connection.lastSyncAt,
      syncStatus: connection.syncStatus,
      syncError: connection.syncError,
      prsMerged: connection.prsMerged,
      reposContributed: connection.reposContributed,
      publicRepos: connection.publicRepos,
      contributedStars: connection.contributedStars,
      recentPullRequests: connection.recentPullRequests ?? [],
      contributedRepos: connection.contributedRepos ?? [],
    },
  };
}

async function githubJson<T>(url: string, init: RequestInit): Promise<T> {
  const res = await fetch(url, {
    ...init,
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "InternHack-App",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(init.headers ?? {}),
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`GitHub API error ${res.status}: ${text || res.statusText}`);
  }

  return (await res.json()) as T;
}

async function fetchGithubGraphQL<T>(token: string, query: string, variables: Record<string, unknown>): Promise<T> {
  const res = await fetch(GITHUB_GRAPHQL_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "InternHack-App",
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`GitHub GraphQL error ${res.status}: ${text || res.statusText}`);
  }

  const payload = (await res.json()) as GithubSearchResponse;
  if (payload.errors?.length) {
    throw new Error(payload.errors.map((error) => error.message).join("; "));
  }

  return payload as T;
}

async function exchangeCodeForToken(code: string): Promise<string> {
  const data = await githubJson<{ access_token?: string; error?: string; error_description?: string }>(
    GITHUB_TOKEN_URL,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: getRequiredEnv("GITHUB_CLIENT_ID"),
        client_secret: getRequiredEnv("GITHUB_CLIENT_SECRET"),
        code,
        redirect_uri: getOAuthRedirectUri(),
      }),
    },
  );

  if (!data.access_token) {
    throw new Error(data.error_description || data.error || "GitHub did not return an access token");
  }

  return data.access_token;
}

async function fetchViewer(token: string): Promise<GithubViewerResponse> {
  return githubJson<GithubViewerResponse>(`${GITHUB_API_URL}/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

async function fetchContributionSnapshot(token: string, githubUsername: string) {
  const query = `
    query InternHackContributionSearch($query: String!, $cursor: String) {
      search(type: ISSUE, query: $query, first: ${SEARCH_PAGE_SIZE}, after: $cursor) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          ... on PullRequest {
            id
            title
            url
            number
            mergedAt
            repository {
              nameWithOwner
              url
              isFork
              stargazerCount
              primaryLanguage {
                name
              }
            }
          }
        }
      }
    }
  `;

  const pullRequests: GithubContributionPullRequest[] = [];
  const repos = new Map<string, GithubContributionRepo>();
  let cursor: string | null = null;

  for (let page = 0; page < MAX_SEARCH_PAGES; page += 1) {
    const payload: GithubSearchResponse = await fetchGithubGraphQL<GithubSearchResponse>(token, query, {
      query: `author:${githubUsername} is:pr is:merged archived:false`,
      cursor,
    });

    const search: GithubSearchResult | undefined = payload.data?.search;
    if (!search) break;

    for (const node of search.nodes) {
      if (!node?.mergedAt || node.repository.isFork) continue;

      const mergedAt = new Date(node.mergedAt);
      const language = node.repository.primaryLanguage?.name ?? null;
      const pullRequest: GithubContributionPullRequest = {
        githubId: node.id,
        title: node.title,
        url: node.url,
        number: node.number,
        mergedAt,
        repoName: node.repository.nameWithOwner,
        repoUrl: node.repository.url,
        repoStars: node.repository.stargazerCount ?? 0,
        language,
      };
      pullRequests.push(pullRequest);

      const existing = repos.get(node.repository.nameWithOwner);
      if (existing) {
        existing.mergedPrs += 1;
        if (!existing.lastMergedAt || mergedAt > existing.lastMergedAt) {
          existing.lastMergedAt = mergedAt;
        }
      } else {
        repos.set(node.repository.nameWithOwner, {
          nameWithOwner: node.repository.nameWithOwner,
          url: node.repository.url,
          stars: node.repository.stargazerCount ?? 0,
          language,
          mergedPrs: 1,
          lastMergedAt: mergedAt,
        });
      }
    }

    if (!search.pageInfo.hasNextPage || !search.pageInfo.endCursor) break;
    cursor = search.pageInfo.endCursor;
  }

  pullRequests.sort((a, b) => b.mergedAt.getTime() - a.mergedAt.getTime());
  const contributedRepos = [...repos.values()].sort((a, b) => {
    if (b.mergedPrs !== a.mergedPrs) return b.mergedPrs - a.mergedPrs;
    return b.stars - a.stars;
  });

  return {
    pullRequests,
    recentPullRequests: pullRequests.slice(0, RECENT_PR_LIMIT),
    contributedRepos,
    contributedStars: contributedRepos.reduce((sum, repo) => sum + repo.stars, 0),
  };
}

export class GithubService {
  getConnectUrl(userId: number) {
    const params = new URLSearchParams({
      client_id: getRequiredEnv("GITHUB_CLIENT_ID"),
      redirect_uri: getOAuthRedirectUri(),
      scope: "read:user",
      state: createState(userId),
      allow_signup: "true",
    });

    return `${GITHUB_AUTHORIZE_URL}?${params.toString()}`;
  }

  async handleCallback(code: string, state: string) {
    const payload = verifyState(state);
    const token = await exchangeCodeForToken(code);
    const viewer = await fetchViewer(token);
    const encryptedToken = encrypt(token);

    const connection = await prisma.githubConnection.upsert({
      where: { userId: payload.userId },
      create: {
        userId: payload.userId,
        githubUsername: viewer.login,
        accessToken: encryptedToken,
        publicRepos: viewer.public_repos ?? 0,
        syncStatus: "PENDING",
        syncError: null,
      },
      update: {
        githubUsername: viewer.login,
        accessToken: encryptedToken,
        publicRepos: viewer.public_repos ?? 0,
        syncStatus: "PENDING",
        syncError: null,
      },
      select: { id: true, userId: true },
    });

    await this.syncConnection(connection.userId);
    return `${getClientBaseUrl().replace(/\/$/, "")}/student/opensource/analytics?github=connected`;
  }

  async getConnection(userId: number) {
    const connection = await prisma.githubConnection.findUnique({
      where: { userId },
      include: {
        recentPullRequests: {
          orderBy: { mergedAt: "desc" },
          take: RECENT_PR_LIMIT,
        },
        contributedRepos: {
          orderBy: [{ mergedPrs: "desc" }, { stars: "desc" }],
          take: 50,
        },
      },
    });

    if (!connection) {
      return { connected: false, connection: null };
    }

    return toConnectionResponse(connection);
  }

  async disconnect(userId: number) {
    await prisma.githubConnection.deleteMany({ where: { userId } });
    return { connected: false, connection: null };
  }

  async syncConnection(userId: number) {
    const existing = await prisma.githubConnection.findUnique({
      where: { userId },
      select: {
        id: true,
        accessToken: true,
        githubUsername: true,
      },
    });

    if (!existing) {
      throw new Error("GitHub is not connected");
    }

    await prisma.githubConnection.update({
      where: { userId },
      data: { syncStatus: "SYNCING", syncError: null },
    });

    try {
      const token = decrypt(existing.accessToken);
      const [viewer, snapshot] = await Promise.all([
        fetchViewer(token),
        fetchContributionSnapshot(token, existing.githubUsername),
      ]);

      await prisma.$transaction(async (tx) => {
        await tx.githubPullRequest.deleteMany({ where: { connectionId: existing.id } });
        await tx.githubContributedRepo.deleteMany({ where: { connectionId: existing.id } });

        if (snapshot.recentPullRequests.length > 0) {
          await tx.githubPullRequest.createMany({
            data: snapshot.recentPullRequests.map((pullRequest) => ({
              connectionId: existing.id,
              ...pullRequest,
            })),
          });
        }

        if (snapshot.contributedRepos.length > 0) {
          await tx.githubContributedRepo.createMany({
            data: snapshot.contributedRepos.map((repo) => ({
              connectionId: existing.id,
              ...repo,
            })),
          });
        }

        await tx.githubConnection.update({
          where: { userId },
          data: {
            githubUsername: viewer.login,
            publicRepos: viewer.public_repos ?? 0,
            prsMerged: snapshot.pullRequests.length,
            reposContributed: snapshot.contributedRepos.length,
            contributedStars: snapshot.contributedStars,
            lastSyncAt: new Date(),
            syncStatus: "SUCCESS",
            syncError: null,
          },
        });
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "GitHub sync failed";
      await prisma.githubConnection.update({
        where: { userId },
        data: {
          syncStatus: "FAILED",
          syncError: message.slice(0, 500),
        },
      });
      throw err;
    }

    return this.getConnection(userId);
  }

  async syncStaleConnections() {
    const staleBefore = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const connections = await prisma.githubConnection.findMany({
      where: {
        OR: [{ lastSyncAt: null }, { lastSyncAt: { lt: staleBefore } }],
      },
      select: { userId: true, githubUsername: true },
      take: 50,
      orderBy: [{ lastSyncAt: "asc" }, { connectedAt: "asc" }],
    });

    const result = { attempted: connections.length, synced: 0, failed: 0 };
    for (const connection of connections) {
      try {
        await this.syncConnection(connection.userId);
        result.synced += 1;
      } catch (err) {
        result.failed += 1;
        console.error(`[github] sync failed for ${connection.githubUsername}:`, err);
      }
    }

    return result;
  }
}
