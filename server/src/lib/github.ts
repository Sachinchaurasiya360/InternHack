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
