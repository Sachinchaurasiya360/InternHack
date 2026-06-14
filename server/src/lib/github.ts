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

export async function fetchRepoHealthData(owner: string, repo: string) {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };
    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    // 1. Community Profile (CONTRIBUTING, CODE_OF_CONDUCT, ISSUE_TEMPLATE)
    const communityRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/community/profile`,
      { headers },
    );
    const communityData = communityRes.ok ? await communityRes.json() : null;

    // 2. Commits in last 30 days
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const commitsRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits?since=${thirtyDaysAgo.toISOString()}&per_page=1`,
      { headers },
    );
    const hasRecentCommits = commitsRes.ok && (await commitsRes.json()).length > 0;

    // 3. Good First Issues (count)
    const gfiRes = await fetch(
      `https://api.github.com/search/issues?q=repo:${owner}/${repo}+label:"good first issue"+state:open&per_page=1`,
      { headers },
    );
    const gfiData = gfiRes.ok ? await gfiRes.json() : null;
    const hasGoodFirstIssues = (gfiData?.total_count ?? 0) > 0;

    // 4. PR Merge Rate (last 50 PRs)
    const prsRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/pulls?state=all&per_page=50`,
      { headers },
    );
    const prsData = prsRes.ok ? ((await prsRes.json()) as any[]) : [];
    const closedPrs = prsData.filter((pr) => pr.state === "closed");
    const mergedPrs = prsData.filter((pr) => pr.merged_at);
    const mergeRate = closedPrs.length > 0 ? (mergedPrs.length / closedPrs.length) * 100 : 0;

    // 5. Response Time (avg time to first comment approximate)
    const issuesRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/issues?state=all&per_page=10`,
      { headers },
    );
    const issuesData = issuesRes.ok ? ((await issuesRes.json()) as any[]) : [];
    const issuesOnly = issuesData.filter((i) => !i.pull_request);

    let fastResponse = false;
    if (issuesOnly.length > 0) {
      // If majority of recent issues have comments or are very new
      const responsiveCount = issuesOnly.filter((issue) => {
        if (issue.comments > 0) return true;
        const created = new Date(issue.created_at);
        const ageInDays = (Date.now() - created.getTime()) / (1000 * 60 * 60 * 24);
        return ageInDays < 7;
      }).length;
      fastResponse = responsiveCount / issuesOnly.length >= 0.5;
    }

    return {
      hasContributing: !!communityData?.files?.contributing,
      hasCodeOfConduct: !!communityData?.files?.code_of_conduct,
      hasIssueTemplate: !!communityData?.files?.issue_template,
      hasRecentCommits,
      hasGoodFirstIssues,
      mergeRate,
      fastResponse,
    };
  } catch (err) {
    console.error("[github] fetchRepoHealthData error:", err);
    return null;
  }
}
