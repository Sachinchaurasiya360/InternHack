export async function fetchGithubStats(repoUrl: string) {
  try {
    // Parse owner/repo from URL
    // Handle formats: https://github.com/owner/repo
    // and https://github.com/owner/repo.git
    const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/\s\.]+)/);
    if (!match) return null;
    const [, owner, repo] = match;

    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };
    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`,
      { headers }
    );

    if (!res.ok) {
      console.warn(`[github] fetch failed for ${owner}/${repo}: ${res.status}`);
      return null;
    }

    const data = (await res.json()) as any;
    return {
      stars: data.stargazers_count ?? 0,
      forks: data.forks_count ?? 0,
      openIssues: data.open_issues_count ?? 0,
      watchers: data.watchers_count ?? 0,
      language: data.language ?? null,
    };
  } catch (err) {
    console.error("[github] fetchGithubStats error:", err);
    return null;
  }
}

export interface GithubGoodFirstIssue {
  id: number;
  title: string;
  html_url: string;
  number: number;
  created_at: string;
  labels: { name: string; color: string }[];
  user: { login: string; avatar_url: string };
}

export async function fetchGithubGoodFirstIssues(
  owner: string,
  repo: string,
  perPage = 5,
): Promise<GithubGoodFirstIssue[]> {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const params = new URLSearchParams({
      labels: "good first issue",
      state: "open",
      per_page: String(perPage),
    });

    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/issues?${params}`,
      { headers },
    );

    if (!res.ok) {
      console.warn(`[github] good-first-issues failed for ${owner}/${repo}: ${res.status}`);
      return [];
    }

    const data = (await res.json()) as Array<Record<string, unknown>>;
    return data
      .filter((issue) => !issue.pull_request)
      .map((issue) => ({
        id: issue.id as number,
        title: issue.title as string,
        html_url: issue.html_url as string,
        number: issue.number as number,
        created_at: issue.created_at as string,
        labels: ((issue.labels as Array<{ name: string; color: string }>) ?? []).map((label) => ({
          name: label.name,
          color: label.color,
        })),
        user: {
          login: (issue.user as { login: string }).login,
          avatar_url: (issue.user as { avatar_url: string }).avatar_url,
        },
      }));
  } catch (err) {
    console.error("[github] fetchGithubGoodFirstIssues error:", err);
    return [];
  }
}
