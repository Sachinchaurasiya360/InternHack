import { prisma } from "../../database/db.js";
import { getProviderForService } from "../../lib/ai-provider-registry.js";
import { logAIRequest } from "../../lib/ai-request-logger.js";

type RepoSummary = {
  name: string;
  owner: string;
  language: string;
  domain: string;
  difficulty: string;
  url: string;
  reason: string;
  techStack: string[];
};

type CertificateSummary = {
  name: string;
  category: string;
  earnedAt: Date;
};

type RepoRequestRecord = Omit<RepoSummary, "domain" | "difficulty"> & {
  domain: unknown;
  difficulty: unknown;
};

type StudentBadgeRecord = {
  earnedAt: Date;
  badge: {
    name: string;
    category: unknown;
  };
};

type OssSectionResult = {
  title: string;
  bullets: string[];
  rawActivity: {
    approvedRepos: RepoSummary[];
    completedGuides: Array<{ name: string; completedSteps: number; totalSteps: number }>;
    certificates: CertificateSummary[];
  };
};

const FIRST_PR_TOTAL_STEPS = 7;
const MAX_BULLETS = 5;

export class ResumeService {
  async buildOssSection(userId: number): Promise<OssSectionResult> {
    const [user, approvedRequests, firstPrProgress, badges] = await Promise.all([
      prisma.user.findUnique({
        where: { id: userId },
        select: { name: true, skills: true, githubUrl: true },
      }),
      prisma.repoRequest.findMany({
        where: { userId, status: "APPROVED" },
        orderBy: { updatedAt: "desc" },
        take: 6,
        select: {
          name: true,
          owner: true,
          language: true,
          domain: true,
          difficulty: true,
          url: true,
          reason: true,
          techStack: true,
        },
      }),
      prisma.studentFirstPrProgress.findUnique({
        where: { userId },
        select: { completedStepIds: true },
      }),
      prisma.studentBadge.findMany({
        where: { studentId: userId },
        orderBy: { earnedAt: "desc" },
        take: 5,
        select: {
          earnedAt: true,
          badge: {
            select: {
              name: true,
              category: true,
            },
          },
        },
      }),
    ]);

    const repos: RepoSummary[] = (approvedRequests as RepoRequestRecord[]).map((repo) => ({
      ...repo,
      domain: String(repo.domain),
      difficulty: String(repo.difficulty),
    }));
    const completedStepCount = firstPrProgress?.completedStepIds.length ?? 0;
    const completedGuides =
      completedStepCount > 0
        ? [{ name: "First PR Guide", completedSteps: completedStepCount, totalSteps: FIRST_PR_TOTAL_STEPS }]
        : [];
    const certificates: CertificateSummary[] = (badges as StudentBadgeRecord[]).map((item) => ({
      name: item.badge.name,
      category: String(item.badge.category),
      earnedAt: item.earnedAt,
    }));

    const fallbackBullets = this.buildFallbackBullets(repos, completedGuides, certificates, user?.skills ?? []);
    const polishedBullets = await this.polishBullets({
      userName: user?.name ?? "Student",
      githubUrl: user?.githubUrl ?? null,
      repos,
      completedGuides,
      certificates,
      fallbackBullets,
    });

    return {
      title: "Open Source Contributions",
      bullets: polishedBullets.length > 0 ? polishedBullets : fallbackBullets,
      rawActivity: {
        approvedRepos: repos,
        completedGuides,
        certificates,
      },
    };
  }

  private buildFallbackBullets(
    repos: RepoSummary[],
    completedGuides: Array<{ name: string; completedSteps: number; totalSteps: number }>,
    certificates: CertificateSummary[],
    skills: string[]
  ): string[] {
    const bullets: string[] = [];
    const primaryRepos = repos.slice(0, 3).map((repo) => `${repo.owner}/${repo.name}`);
    const languages = [...new Set(repos.map((repo) => repo.language).filter(Boolean))].slice(0, 4);
    const techStack = [...new Set(repos.flatMap((repo) => repo.techStack).concat(skills))].slice(0, 5);

    if (primaryRepos.length > 0) {
      bullets.push(
        `Identified and proposed ${String(repos.length)} open-source repos including ${primaryRepos.join(", ")} for contribution readiness and issue discovery.`
      );
    } else {
      bullets.push("Built open-source contribution readiness through InternHack guide work, GitHub workflows, and structured project discovery.");
    }

    if (languages.length > 0 || techStack.length > 0) {
      bullets.push(
        `Mapped contribution opportunities across ${languages.join(", ") || "multiple stacks"} using ${techStack.join(", ") || "Git, GitHub, and code review workflows"}.`
      );
    }

    if (completedGuides.length > 0) {
      const guide = completedGuides[0];
      bullets.push(
        `Completed ${String(guide.completedSteps)} of ${String(guide.totalSteps)} ${guide.name} steps, practicing repository setup, issue selection, commits, and pull request hygiene.`
      );
    }

    if (certificates.length > 0) {
      bullets.push(`Earned ${String(certificates.length)} InternHack badge${certificates.length === 1 ? "" : "s"} including ${certificates.map((badge) => badge.name).slice(0, 3).join(", ")}.`);
    }

    return bullets.slice(0, MAX_BULLETS);
  }

  private async polishBullets(input: {
    userName: string;
    githubUrl: string | null;
    repos: RepoSummary[];
    completedGuides: Array<{ name: string; completedSteps: number; totalSteps: number }>;
    certificates: CertificateSummary[];
    fallbackBullets: string[];
  }): Promise<string[]> {
    try {
      const provider = getProviderForService("RESUME_GEN");
      const prompt = `You are an expert technical resume writer.

Create 3-5 concise resume bullets for an "Open Source Contributions" section.
Use a STAR-style framing where possible, but do not invent pull requests, merged code, metrics, employers, or outcomes not present here.
Keep each bullet under 28 words, start with an action verb, and return only bullet lines.

Candidate: ${input.userName}
GitHub: ${input.githubUrl ?? "Not provided"}
Approved repository suggestions: ${JSON.stringify(input.repos)}
Guide progress: ${JSON.stringify(input.completedGuides)}
Badges/certificates: ${JSON.stringify(input.certificates)}
Draft bullets to refine: ${JSON.stringify(input.fallbackBullets)}`;

      const response = await provider.generateText(prompt);
      logAIRequest("RESUME_GEN", response, true, undefined, undefined);
      return this.parseBulletLines(response.text);
    } catch {
      return [];
    }
  }

  private parseBulletLines(text: string): string[] {
    return text
      .split("\n")
      .map((line) => line.trim().replace(/^[-*\d.)\s]+/, "").trim())
      .filter(Boolean)
      .slice(0, MAX_BULLETS);
  }
}
