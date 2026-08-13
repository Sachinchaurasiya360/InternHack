import { prisma } from "../../database/db.js";
import { generateBundledIcs } from "../../utils/ics.utils.js";

export type OpportunityType = "JOB" | "EXTERNAL_JOB";

export interface CalendarOpportunity {
  id: string;
  type: OpportunityType;
  title: string;
  subtitle: string | null;
  deadline: string;
  status: string | null;
  url: string | null;
}

const CLOSED_STATUSES = new Set(["REJECTED", "WITHDRAWN", "HIRED"]);

export class CalendarService {
  async getOpportunities(userId: number): Promise<CalendarOpportunity[]> {
    const [applications, externalApplications] = await Promise.all([
      this.getJobDeadlines(userId),
      this.getExternalJobDeadlines(userId),
    ]);
    return [...applications, ...externalApplications].sort(
      (a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime(),
    );
  }

  private async getJobDeadlines(userId: number): Promise<CalendarOpportunity[]> {
    const applications = await prisma.application.findMany({
      where: { studentId: userId, job: { deadline: { not: null } } },
      select: {
        id: true,
        status: true,
        job: { select: { id: true, title: true, company: true, deadline: true } },
      },
    });

    return applications
      .filter((app) => !CLOSED_STATUSES.has(app.status))
      .map((app) => ({
        id: `job-${app.id}`,
        type: "JOB" as const,
        title: app.job.title,
        subtitle: app.job.company,
        deadline: app.job.deadline!.toISOString(),
        status: app.status,
        url: `/student/jobs/${app.job.id}`,
      }));
  }

  private async getExternalJobDeadlines(userId: number): Promise<CalendarOpportunity[]> {
    const applications = await prisma.externalJobApplication.findMany({
      where: { studentId: userId },
      select: {
        id: true,
        adminJob: { select: { id: true, role: true, company: true, expiresAt: true, applyLink: true, isActive: true } },
      },
    });

    return applications
      .filter((app) => app.adminJob.isActive)
      .map((app) => ({
        id: `external-${app.id}`,
        type: "EXTERNAL_JOB" as const,
        title: app.adminJob.role || "Open role",
        subtitle: app.adminJob.company,
        deadline: app.adminJob.expiresAt.toISOString(),
        status: null,
        url: app.adminJob.applyLink,
      }));
  }

  async exportIcs(userId: number): Promise<string> {
    const opportunities = await this.getOpportunities(userId);
    return generateBundledIcs(
      "InternHack Opportunity Calendar",
      opportunities.map((opp) => ({
        uid: opp.id,
        title: `${opp.title}${opp.subtitle ? ` @ ${opp.subtitle}` : ""} — Deadline`,
        description: opp.url ? `Details: ${opp.url}` : undefined,
        url: opp.url ?? undefined,
        startDate: new Date(opp.deadline),
      })),
    );
  }
}

export const calendarService = new CalendarService();
