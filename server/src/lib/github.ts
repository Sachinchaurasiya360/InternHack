export interface GoodFirstIssue {
  id: number;
  number: number;
  title: string;
  html_url: string;
  comments: number;
  created_at: string;
  labels: { name: string; color: string }[];
}

export interface GoodFirstIssuesResult {
  issues: GoodFirstIssue[];
  count: number;
}

export async function fetchGoodFirstIssues(owner: string, repo: string): Promise<GoodFirstIssuesResult | null> {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };
    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/issues?labels=good+first+issue&state=open&per_page=20&sort=created&direction=desc`,
      { headers }
    );

    if (!res.ok) {
      console.warn(`[github] fetchGoodFirstIssues failed for ${owner}/${repo}: ${res.status}`);
      return null;
    }

    const data = (await res.json()) as any[];
    const issues = data
      .filter((i: any) => !i.pull_request)
      .map((i: any) => ({
        id: i.id,
        number: i.number,
        title: i.title,
        html_url: i.html_url,
        comments: i.comments,
        created_at: i.created_at,
        labels: (i.labels || []).map((l: any) => ({ name: l.name, color: l.color })),
      }));

    return { issues, count: issues.length };
  } catch (err) {
    console.error("[github] fetchGoodFirstIssues error:", err);
    return null;
  }
}

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
