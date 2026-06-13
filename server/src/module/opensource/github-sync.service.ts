import crypto from "crypto";
import { prisma } from "../../database/db.js";
import { encrypt, decrypt } from "../../utils/crypto.utils.js";

const GITHUB_API_URL = "https://api.github.com";
const GITHUB_TOKEN_URL = "https://github.com/login/oauth/access_token";

export interface GithubConnectionStatus {
  isConnected: boolean;
  githubUsername?: string;
  connectedAt?: Date;
  lastSyncAt?: Date;
  prsMerged?: number;
  reposContributed?: number;
  publicRepos?: number;
}

export class GithubSyncService {
  /**
   * Generates the GitHub OAuth authorization URL.
   */
  getGithubAuthUrl(state: string): string {
    const clientId = process.env["GITHUB_CLIENT_ID"];
    if (!clientId) {
      throw new Error("GITHUB_CLIENT_ID environment variable is not configured.");
    }

    const apiBase = process.env["VITE_API_URL"] || "http://localhost:3000/api";
    const redirectUri = `${apiBase.replace(/\/$/, "")}/opensource/github/callback`;

    // Strict scopes requested: read:user, public_repo
    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      scope: "read:user public_repo",
      state: state,
    });

    return `https://github.com/login/oauth/authorize?${params.toString()}`;
  }

  /**
   * Exchanges the OAuth callback code for an access token, saves the connection,
   * and runs the first contribution sync.
   */
  async handleGithubCallback(userId: number, code: string): Promise<void> {
    const clientId = process.env["GITHUB_CLIENT_ID"];
    const clientSecret = process.env["GITHUB_CLIENT_SECRET"];

    if (!clientId || !clientSecret) {
      throw new Error("GitHub OAuth credentials are not fully configured.");
    }

    const apiBase = process.env["VITE_API_URL"] || "http://localhost:3000/api";
    const redirectUri = `${apiBase.replace(/\/$/, "")}/opensource/github/callback`;

    // Exchange code for token
    const tokenResponse = await fetch(GITHUB_TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "InternHack-App",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
        redirect_uri: redirectUri,
      }),
    });

    if (!tokenResponse.ok) {
      throw new Error(`Failed to exchange code for token: ${tokenResponse.statusText}`);
    }

    const tokenData = (await tokenResponse.json()) as {
      access_token?: string;
      error?: string;
      error_description?: string;
    };

    if (tokenData.error || !tokenData.access_token) {
      throw new Error(tokenData.error_description || tokenData.error || "OAuth exchange failed.");
    }

    const rawToken = tokenData.access_token;
    const encryptedToken = encrypt(rawToken);

    // Fetch user profile from GitHub to get username
    const profileResponse = await fetch(`${GITHUB_API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${rawToken}`,
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "InternHack-App",
      },
    });

    if (!profileResponse.ok) {
      throw new Error(`Failed to retrieve GitHub user profile: ${profileResponse.statusText}`);
    }

    const profileData = (await profileResponse.json()) as {
      login: string;
    };

    // Save/update connection
    await prisma.githubConnection.upsert({
      where: { userId: userId },
      update: {
        githubUsername: profileData.login,
        accessToken: encryptedToken,
        connectedAt: new Date(),
        lastSyncAt: new Date(),
      },
      create: {
        userId: userId,
        githubUsername: profileData.login,
        accessToken: encryptedToken,
        connectedAt: new Date(),
        lastSyncAt: new Date(),
      },
    });

    // Run initial sync
    try {
      await this.syncUserGithubContributions(userId);
    } catch (syncErr) {
      console.error(`Initial GitHub contribution sync failed for user ${userId}:`, syncErr);
    }
  }

  /**
   * Syncs the user's public repositories, PRs, and repositories contributed to.
   */
  async syncUserGithubContributions(userId: number): Promise<void> {
    const connection = await prisma.githubConnection.findUnique({
      where: { userId: userId },
    });

    if (!connection || !connection.accessToken) {
      throw new Error("No connected GitHub account found for this user.");
    }

    const rawToken = decrypt(connection.accessToken);
    const headers = {
      Authorization: `Bearer ${rawToken}`,
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "InternHack-App",
    };

    // 1. Fetch user profile for public repos count
    const profileRes = await fetch(`${GITHUB_API_URL}/user`, { headers });

    if (profileRes.status === 401) {
      // Token revoked or expired: Nullify accessToken and throw error
      await prisma.githubConnection.update({
        where: { userId: userId },
        data: { accessToken: "" }, // Or remove connection if preferred, we clear token to mark disconnected
      });
      throw new Error("GitHub access token has been revoked or expired. Please reconnect.");
    }

    if (!profileRes.ok) {
      throw new Error(`GitHub user request failed: ${profileRes.status}`);
    }

    const profile = (await profileRes.json()) as {
      login: string;
      public_repos: number;
    };

    const username = profile.login;
    const publicReposCount = profile.public_repos ?? 0;

    // 2. Query GitHub Search API for public merged pull requests
    // Query limits search to: author:username, is:pr, is:merged, is:public (safety constraint)
    const searchQuery = `author:${username} type:pr is:merged is:public`;
    const searchUrl = `${GITHUB_API_URL}/search/issues?q=${encodeURIComponent(searchQuery)}&per_page=100`;

    const searchRes = await fetch(searchUrl, { headers });

    if (searchRes.status === 403) {
      const rateLimitRemaining = searchRes.headers.get("x-ratelimit-remaining");
      if (rateLimitRemaining === "0") {
        console.warn(`GitHub API search rate limit hit for user ${username}. Skipping sync.`);
        return; // Skip sync gracefully without breaking/throwing database lock issues
      }
      throw new Error(`GitHub API request forbidden: ${searchRes.statusText}`);
    }

    if (!searchRes.ok) {
      throw new Error(`GitHub search request failed: ${searchRes.status}`);
    }

    const searchResult = (await searchRes.json()) as {
      total_count: number;
      items: { html_url: string }[];
    };

    const totalPrsMerged = searchResult.total_count ?? 0;

    // 3. Deduplicate repositories from merged PR URLs to find distinct contributed repos
    const contributedRepos = new Set<string>();
    if (searchResult.items) {
      for (const item of searchResult.items) {
        try {
          // html_url is like: https://github.com/owner/repo/pull/123
          const url = new URL(item.html_url);
          const parts = url.pathname.split("/").filter(Boolean);
          if (parts[0] && parts[1]) {
            contributedRepos.add(`${parts[0]}/${parts[1]}`);
          }
        } catch {
          // Skip malformed URLs
        }
      }
    }

    const totalReposContributed = contributedRepos.size;

    // 4. Update the connection record with sync stats
    await prisma.githubConnection.update({
      where: { userId: userId },
      data: {
        prsMerged: totalPrsMerged,
        reposContributed: totalReposContributed,
        publicRepos: publicReposCount,
        lastSyncAt: new Date(),
      },
    });
  }

  /**
   * Disconnects a user's GitHub account by deleting the connection record.
   */
  async disconnectGithub(userId: number): Promise<void> {
    const connection = await prisma.githubConnection.findUnique({
      where: { userId: userId },
    });

    if (connection) {
      await prisma.githubConnection.delete({
        where: { userId: userId },
      });
    }
  }

  /**
   * Returns status information for a user's GitHub connection.
   */
  async getStatus(userId: number): Promise<GithubConnectionStatus> {
    const connection = await prisma.githubConnection.findUnique({
      where: { userId: userId },
    });

    if (!connection || !connection.accessToken) {
      return { isConnected: false };
    }

    return {
      isConnected: true,
      githubUsername: connection.githubUsername,
      connectedAt: connection.connectedAt,
      lastSyncAt: connection.lastSyncAt,
      prsMerged: connection.prsMerged,
      reposContributed: connection.reposContributed,
      publicRepos: connection.publicRepos,
    };
  }
}
