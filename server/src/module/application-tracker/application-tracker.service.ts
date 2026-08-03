import { Prisma } from "@prisma/client";
import { prisma } from "../../database/db.js";

function parseDate(value?: string | null): Date | null {
  return value ? new Date(value) : null;
}

function normalizeText(value?: string | null): string {
  return value?.trim() || "";
}

function statusForLegacyExternal() {
  return "APPLIED" as const;
}

export class ApplicationTrackerService {
  async list(userId: number, filters: { status?: string; sourceType?: string; search?: string; savedOnly?: boolean }) {
    const search = filters.search?.trim();
    const tracked = await prisma.trackedJobApplication.findMany({
      where: {
        userId,
        ...(filters.status ? { status: filters.status as never } : {}),
        ...(filters.sourceType ? { sourceType: filters.sourceType as never } : {}),
        ...(filters.savedOnly ? { status: "SAVED" } : {}),
        ...(search ? {
          OR: [
            { role: { contains: search, mode: "insensitive" } },
            { company: { contains: search, mode: "insensitive" } },
            { location: { contains: search, mode: "insensitive" } },
          ],
        } : {}),
      },
      orderBy: { updatedAt: "desc" },
    });

    const shouldFetchLegacy =
      !filters.savedOnly &&
      (!filters.status || filters.status === "APPLIED") &&
      (!filters.sourceType || filters.sourceType === "INTERNHACK_ADMIN");

    const legacy = shouldFetchLegacy
      ? await prisma.externalJobApplication.findMany({
        where: {
          studentId: userId,
          ...(search ? {
            adminJob: {
              OR: [
                { role: { contains: search, mode: "insensitive" } },
                { company: { contains: search, mode: "insensitive" } },
                { location: { contains: search, mode: "insensitive" } },
              ],
            },
          } : {}),
        },
        include: {
          adminJob: {
            select: {
              id: true,
              slug: true,
              company: true,
              role: true,
              location: true,
              salary: true,
              tags: true,
              applyLink: true,
              description: true,
            },
          },
        },
        orderBy: { updatedAt: "desc" },
      })
      : [];

    const legacyMapped = legacy
      .filter(() => !filters.status || filters.status === statusForLegacyExternal())
      .filter(() => !filters.sourceType || filters.sourceType === "INTERNHACK_ADMIN")
      .filter(() => !filters.savedOnly)
      .map((app) => ({
        id: `legacy-${app.id}`,
        numericId: app.id,
        recordType: "LEGACY_EXTERNAL",
        sourceType: "INTERNHACK_ADMIN",
        sourceId: app.adminJobId,
        adminJobId: app.adminJobId,
        company: app.adminJob.company || "Company",
        role: app.adminJob.role || "Open role",
        location: app.adminJob.location,
        jobUrl: app.adminJob.slug ? `/jobs/ext/${app.adminJob.slug}` : null,
        applicationUrl: app.adminJob.applyLink,
        jobDescription: app.adminJob.description,
        status: statusForLegacyExternal(),
        appliedAt: app.createdAt,
        deadline: null,
        nextFollowUpAt: null,
        resumeUrl: null,
        coverLetterId: null,
        notes: app.studentNotes || "",
        contacts: [],
        events: [],
        extensionMetadata: {},
        createdAt: app.createdAt,
        updatedAt: app.updatedAt,
      }));

    return {
      applications: [
        ...tracked.map((app) => ({ ...app, id: `tracked-${app.id}`, numericId: app.id, recordType: "TRACKED" })),
        ...legacyMapped,
      ].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()),
    };
  }

  async create(userId: number, data: Record<string, any>) {
    const applicationUrl = normalizeText(data.applicationUrl);
    const role = normalizeText(data.role);
    const existing = (applicationUrl && role)
      ? await prisma.trackedJobApplication.findFirst({
        where: {
          userId,
          applicationUrl: { equals: applicationUrl, mode: "insensitive" },
          role: { equals: role, mode: "insensitive" }
        },
      })
      : null;

    const payload = {
      sourceType: data.sourceType,
      sourceId: data.sourceId ?? null,
      jobIndexId: data.jobIndexId ?? null,
      adminJobId: data.adminJobId ?? null,
      scrapedJobId: data.scrapedJobId ?? null,
      company: data.company,
      role: role,
      location: data.location ?? null,
      jobUrl: data.jobUrl ?? null,
      applicationUrl: applicationUrl || null,
      jobDescription: data.jobDescription ?? null,
      status: data.status,
      appliedAt: parseDate(data.appliedAt),
      deadline: parseDate(data.deadline),
      nextFollowUpAt: parseDate(data.nextFollowUpAt),
      resumeUrl: data.resumeUrl ?? null,
      coverLetterId: data.coverLetterId ?? null,
      notes: data.notes ?? "",
      contacts: data.contacts ?? [],
      events: data.events ?? [],
      extensionMetadata: data.extensionMetadata ?? {},
    };

    if (existing) {
      return prisma.trackedJobApplication.update({
        where: { id: existing.id },
        data: payload,
      });
    }

    return prisma.trackedJobApplication.create({
      data: { userId, ...payload },
    });
  }

  async update(userId: number, id: number, data: Record<string, any>) {
    const existing = await prisma.trackedJobApplication.findFirst({ where: { id, userId } });
    if (!existing) return null;

    const payload: Prisma.trackedJobApplicationUpdateInput = {};
    for (const key of [
      "sourceType",
      "sourceId",
      "jobIndexId",
      "adminJobId",
      "scrapedJobId",
      "company",
      "location",
      "jobUrl",
      "jobDescription",
      "status",
      "resumeUrl",
      "coverLetterId",
      "notes",
      "contacts",
      "events",
      "extensionMetadata",
    ]) {
      if (data[key] !== undefined) (payload as Record<string, unknown>)[key] = data[key];
    }
    
    if (data.role !== undefined) payload.role = normalizeText(data.role);
    if (data.applicationUrl !== undefined) payload.applicationUrl = normalizeText(data.applicationUrl) || null;
    for (const key of ["appliedAt", "deadline", "nextFollowUpAt"]) {
      if (data[key] !== undefined) (payload as Record<string, unknown>)[key] = parseDate(data[key]);
    }

    return prisma.trackedJobApplication.update({ where: { id }, data: payload });
  }

  async delete(userId: number, id: number) {
    const existing = await prisma.trackedJobApplication.findFirst({ where: { id, userId }, select: { id: true } });
    if (!existing) return false;
    await prisma.trackedJobApplication.delete({ where: { id } });
    return true;
  }

  async addEvent(userId: number, id: number, event: { type: string; label: string; metadata?: Record<string, unknown> }) {
    return prisma.$transaction(async (tx) => {
      const locked = await tx.$queryRaw<any[]>`SELECT * FROM "trackedJobApplication" WHERE id = ${id} FOR UPDATE`;
      const existing = locked[0];
      if (!existing || existing.userId !== userId) return null;
      
      const events = Array.isArray(existing.events) ? existing.events as Prisma.InputJsonValue[] : [];
      const nextEvent = { ...event, createdAt: new Date().toISOString() } as Prisma.InputJsonObject;
      
      return tx.trackedJobApplication.update({
        where: { id },
        data: {
          events: [...events, nextEvent],
        },
      });
    });
  }

  async stats(userId: number) {
    const [tracked, legacyCount] = await Promise.all([
      prisma.trackedJobApplication.findMany({ where: { userId }, select: { status: true, sourceType: true, createdAt: true, appliedAt: true } }),
      prisma.externalJobApplication.count({ where: { studentId: userId } }),
    ]);

    const byStatus = new Map<string, number>();
    for (const app of tracked) byStatus.set(app.status, (byStatus.get(app.status) || 0) + 1);
    byStatus.set("APPLIED", (byStatus.get("APPLIED") || 0) + legacyCount);

    const now = new Date();
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - 7);
    const applicationsThisWeek = tracked.filter((app) => {
      const date = app.appliedAt ?? app.createdAt;
      return date >= weekStart;
    }).length;

    const total = tracked.length + legacyCount;
    const responses =
      (byStatus.get("OA") || 0) +
      (byStatus.get("PHONE_SCREEN") || 0) +
      (byStatus.get("INTERVIEW") || 0) +
      (byStatus.get("OFFER") || 0) +
      (byStatus.get("REJECTED") || 0);

    return {
      total,
      saved: byStatus.get("SAVED") || 0,
      applied: byStatus.get("APPLIED") || 0,
      interviews: byStatus.get("INTERVIEW") || 0,
      offers: byStatus.get("OFFER") || 0,
      rejections: byStatus.get("REJECTED") || 0,
      ghosted: byStatus.get("GHOSTED") || 0,
      applicationsThisWeek,
      responseRate: total > 0 ? Math.round((responses / total) * 100) : 0,
      byStatus: Object.fromEntries(byStatus),
    };
  }
}

export const applicationTrackerService = new ApplicationTrackerService();
