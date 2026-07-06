import { prisma } from "../../database/db.js";
import { sendEmail, sendEmailBatch, emailSleep } from "../../utils/email.utils.js";
import { buildUnsubscribeUrl } from "../../utils/unsubscribe.utils.js";
import { switchServiceProvider } from "../../lib/ai-provider-registry.js";
import { slugifyWithSuffix } from "../../utils/slug.utils.js";
import type { Prisma, UserRole, AIServiceType, AIProviderType } from "@prisma/client";

export class AdminEventsService {
  // ==================== HACKATHON MANAGEMENT ====================

  async listHackathons(query: {
    page: number; limit: number; search?: string;
    status?: string; locationType?: string;
    sortBy: string; sortOrder: string;
  }) {
    const where: Prisma.hackathonWhereInput = {};
    if (query.status) where.status = query.status;
    if (query.locationType) where.locationType = query.locationType;
    if (query.search) {
      where.OR = [
        { name: { contains: query.search, mode: "insensitive" } },
        { organizer: { contains: query.search, mode: "insensitive" } },
        { ecosystem: { contains: query.search, mode: "insensitive" } },
      ];
    }
    const skip = (query.page - 1) * query.limit;
    const orderBy: Prisma.hackathonOrderByWithRelationInput = { [query.sortBy]: query.sortOrder };
    const [hackathons, total] = await Promise.all([
      prisma.hackathon.findMany({ where, skip, take: query.limit, orderBy }),
      prisma.hackathon.count({ where }),
    ]);
    return {
      hackathons,
      pagination: { page: query.page, limit: query.limit, total, totalPages: Math.ceil(total / query.limit) },
    };
  }

  async getHackathon(id: number) {
    const hackathon = await prisma.hackathon.findUnique({ where: { id } });
    if (!hackathon) throw new Error("Hackathon not found");
    return hackathon;
  }

  async createHackathon(input: {
    name: string; organizer: string; logo?: string; description: string;
    prizePool: string; startDate: string; endDate: string; location: string;
    locationType: string; website?: string; tags: string[]; tracks: string[];
    eligibility?: string; status: string; ecosystem: string; highlights: string[];
  }) {
    return prisma.hackathon.create({ data: input });
  }

  async updateHackathon(id: number, input: Record<string, unknown>) {
    const hackathon = await prisma.hackathon.findUnique({ where: { id } });
    if (!hackathon) throw new Error("Hackathon not found");
    const data: Prisma.hackathonUpdateInput = {};
    if (input["name"] !== undefined) data.name = input["name"] as string;
    if (input["organizer"] !== undefined) data.organizer = input["organizer"] as string;
    if (input["logo"] !== undefined) data.logo = (input["logo"] as string) || null;
    if (input["description"] !== undefined) data.description = input["description"] as string;
    if (input["prizePool"] !== undefined) data.prizePool = input["prizePool"] as string;
    if (input["startDate"] !== undefined) data.startDate = input["startDate"] as string;
    if (input["endDate"] !== undefined) data.endDate = input["endDate"] as string;
    if (input["location"] !== undefined) data.location = input["location"] as string;
    if (input["locationType"] !== undefined) data.locationType = input["locationType"] as string;
    if (input["website"] !== undefined) data.website = (input["website"] as string) || null;
    if (input["tags"] !== undefined) data.tags = input["tags"] as string[];
    if (input["tracks"] !== undefined) data.tracks = input["tracks"] as string[];
    if (input["eligibility"] !== undefined) data.eligibility = (input["eligibility"] as string) || null;
    if (input["status"] !== undefined) data.status = input["status"] as string;
    if (input["ecosystem"] !== undefined) data.ecosystem = input["ecosystem"] as string;
    if (input["highlights"] !== undefined) data.highlights = input["highlights"] as string[];
    return prisma.hackathon.update({ where: { id }, data });
  }

  async deleteHackathon(id: number) {
    const hackathon = await prisma.hackathon.findUnique({ where: { id } });
    if (!hackathon) throw new Error("Hackathon not found");
    return prisma.hackathon.delete({ where: { id } });
  }

  // ==================== BROADCAST EMAIL ====================

  private renderBroadcastHtml(subject: string, body: string) {
    const trimmed = body.trim();
    if (/^<!doctype/i.test(trimmed) || /^<html[\s>]/i.test(trimmed)) {
      return body;
    }

    const looksLikeHtml = /<\/?[a-z][\s\S]*?>/i.test(trimmed);
    const content = looksLikeHtml
      ? body
      : body
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/\n/g, "<br/>");

    const safeSubject = subject.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${safeSubject}</title>
  </head>
  <body style="margin:0;padding:0;background:#f5f6f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1f2937;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f6f8;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="padding:24px 28px;border-bottom:1px solid #f1f2f4;">
                <div style="font-size:18px;font-weight:700;color:#0f172a;">InternHack</div>
              </td>
            </tr>
            <tr>
              <td style="padding:28px;font-size:15px;line-height:1.65;color:#374151;">
                <h1 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 16px;">${safeSubject}</h1>
                <div>${content}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 28px;border-top:1px solid #f1f2f4;background:#fafafa;font-size:12px;color:#6b7280;text-align:center;">
                Sent from InternHack · <a href="https://www.internhack.xyz" style="color:#6366f1;text-decoration:none;">internhack.xyz</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
  }

  async sendBroadcastEmail(input: {
    subject: string;
    body: string;
    filter: { role: "STUDENT" | "ADMIN" | "ALL"; isVerified?: boolean | undefined; subscriptionPlan: "FREE" | "MONTHLY" | "YEARLY" | "ALL" };
    testEmail?: string | undefined;
    adminId: number;
  }) {
    const html = this.renderBroadcastHtml(input.subject, input.body);

    if (input.testEmail) {
      const testEmailAddr = input.testEmail;
      const sample = (s: string) =>
        s
          .replace(/\{\{?\s*username\s*\}?\}/gi, "Sachin")
          .replace(/\{\{?\s*name\s*\}?\}/gi, "Sachin")
          .replace(/\{\{?\s*firstName\s*\}?\}/gi, "Sachin")
          .replace(/\{\{?\s*email\s*\}?\}/gi, testEmailAddr);
      await sendEmail({ to: input.testEmail, subject: `[TEST] ${sample(input.subject)}`, html: sample(html) });
      return { test: true, sent: 1, failed: 0, recipients: 1 };
    }

    const where: Prisma.userWhereInput = { isActive: true, unsubscribeDigest: false };
    if (input.filter.role !== "ALL") where.role = input.filter.role as UserRole;
    if (typeof input.filter.isVerified === "boolean") where.isVerified = input.filter.isVerified;
    if (input.filter.subscriptionPlan !== "ALL") {
      where.subscriptionPlan = input.filter.subscriptionPlan as Prisma.userWhereInput["subscriptionPlan"];
    }

    const users = await prisma.user.findMany({ where, select: { id: true, email: true, name: true } });

    const personalize = (template: string, name: string | null, email: string) => {
      const username = (name && name.trim()) || (email.split("@")[0] ?? "there");
      const firstName = username.split(" ")[0] ?? username;
      return template
        .replace(/\{\{?\s*username\s*\}?\}/gi, username)
        .replace(/\{\{?\s*name\s*\}?\}/gi, username)
        .replace(/\{\{?\s*firstName\s*\}?\}/gi, firstName)
        .replace(/\{\{?\s*email\s*\}?\}/gi, email);
    };

    let sent = 0;
    let failed = 0;
    const batchSize = 100;
    const throttleMs = 1200;

    for (let i = 0; i < users.length; i += batchSize) {
      const batch = users.slice(i, i + batchSize);
      const payload = batch.map((u) => ({
        to: u.email,
        subject: personalize(input.subject, u.name, u.email),
        html: personalize(html, u.name, u.email),
        unsubscribeUrl: buildUnsubscribeUrl(u.id),
      }));
      const result = await sendEmailBatch(payload);
      sent += result.sent;
      failed += result.failed;
      if (i + batchSize < users.length) await emailSleep(throttleMs);
    }

    return { test: false, sent, failed, recipients: users.length };
  }

  // ==================== AI PROVIDER MANAGEMENT ====================

  async getAIServiceConfigs() {
    const configs = await prisma.aiServiceConfig.findMany({
      orderBy: { service: "asc" },
    });

    const envStatus: Record<string, boolean> = {
      GEMINI: !!process.env["GEMINI_API_KEY"],
      GROQ: !!process.env["GROQ_API_KEY"],
      OPENROUTER: !!process.env["OPENROUTER_API_KEY"],
      CODESTRAL: !!process.env["CODESTRAL_API_KEY"]
    };

    return { configs, envStatus };
  }

  async switchAIServiceProvider(
    service: AIServiceType,
    provider: AIProviderType,
    modelName: string,
    adminId: number,
  ) {
    await switchServiceProvider(service, provider, modelName);
    return prisma.aiServiceConfig.findUnique({ where: { service } });
  }

  async getAIRequestStats(range: "day" | "week" | "month") {
    const since = new Date();
    if (range === "day") since.setDate(since.getDate() - 1);
    else if (range === "week") since.setDate(since.getDate() - 7);
    else since.setMonth(since.getMonth() - 1);

    const [byProvider, byService, totalRequests, avgLatency, errorCount] =
      await Promise.all([
        prisma.aiRequestLog.groupBy({
          by: ["providerName"],
          where: { createdAt: { gte: since } },
          _count: { id: true },
          _avg: { latencyMs: true },
        }),
        prisma.aiRequestLog.groupBy({
          by: ["service"],
          where: { createdAt: { gte: since } },
          _count: { id: true },
        }),
        prisma.aiRequestLog.count({ where: { createdAt: { gte: since } } }),
        prisma.aiRequestLog.aggregate({
          where: { createdAt: { gte: since } },
          _avg: { latencyMs: true },
        }),
        prisma.aiRequestLog.count({
          where: { createdAt: { gte: since }, success: false },
        }),
      ]);

    return {
      byProvider: byProvider.map((p) => ({
        provider: p.providerName,
        count: p._count.id,
        avgLatencyMs: Math.round(p._avg.latencyMs ?? 0),
      })),
      byService: byService.map((s) => ({
        service: s.service,
        count: s._count.id,
      })),
      totalRequests,
      avgLatencyMs: Math.round(avgLatency._avg.latencyMs ?? 0),
      errorCount,
      errorRate: totalRequests > 0 ? Math.round((errorCount / totalRequests) * 100) : 0,
    };
  }

  // ==================== ADMIN EXTERNAL JOBS ====================

  async createExternalJob(data: {
    company?: string; role?: string; description?: string;
    salary?: string; location?: string; applyLink?: string; tags?: string[];
  }) {
    const expiresAt = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000); // 10 days
    const slug = slugifyWithSuffix([data.company, data.role].filter(Boolean).join(" "), "job");
    return prisma.adminJob.create({
      data: {
        slug,
        company: data.company || null,
        role: data.role || null,
        description: data.description || null,
        salary: data.salary || null,
        location: data.location || null,
        applyLink: data.applyLink || null,
        tags: data.tags ?? [],
        expiresAt,
      },
    });
  }

  async listExternalJobs(query: { page: number; limit: number; search?: string }) {
    const where: Record<string, unknown> = {};
    if (query.search) {
      where.OR = [
        { company: { contains: query.search, mode: "insensitive" } },
        { role: { contains: query.search, mode: "insensitive" } },
      ];
    }
    const [jobs, total] = await Promise.all([
      prisma.adminJob.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (query.page - 1) * query.limit,
        take: query.limit,
      }),
      prisma.adminJob.count({ where }),
    ]);
    return { jobs, total, totalPages: Math.ceil(total / query.limit), page: query.page };
  }

  async updateExternalJob(id: number, data: Record<string, unknown>) {
    const job = await prisma.adminJob.findUnique({ where: { id } });
    if (!job) throw new Error("Job not found");
    return prisma.adminJob.update({ where: { id }, data });
  }

  async deleteExternalJob(id: number) {
    const job = await prisma.adminJob.findUnique({ where: { id } });
    if (!job) throw new Error("Job not found");
    return prisma.adminJob.delete({ where: { id } });
  }

  async getPublicExternalJobs(query: { page: number; limit: number; search?: string; location?: string; tags?: string }) {
    const now = new Date();
    const where: Record<string, unknown> = {
      isActive: true,
      expiresAt: { gt: now },
    };
    if (query.search) {
      where.OR = [
        { company: { contains: query.search, mode: "insensitive" } },
        { role: { contains: query.search, mode: "insensitive" } },
        { description: { contains: query.search, mode: "insensitive" } },
      ];
    }
    if (query.location) {
      where.location = { contains: query.location, mode: "insensitive" };
    }
    if (query.tags) {
      const tagList = query.tags.split(",").map((t) => t.trim()).filter(Boolean);
      if (tagList.length) {
        where.tags = { hasSome: tagList };
      }
    }
    const [jobs, total] = await Promise.all([
      prisma.adminJob.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (query.page - 1) * query.limit,
        take: query.limit,
        select: {
          id: true, slug: true, company: true, role: true, description: true,
          salary: true, location: true, applyLink: true, tags: true,
          expiresAt: true, createdAt: true,
        },
      }),
      prisma.adminJob.count({ where }),
    ]);
    return { jobs, total, totalPages: Math.ceil(total / query.limit), page: query.page };
  }

  async getPublicExternalJobBySlug(slug: string) {
    const now = new Date();
    return prisma.adminJob.findFirst({
      where: { slug, isActive: true, expiresAt: { gt: now } },
      select: {
        id: true, slug: true, company: true, role: true, description: true,
        salary: true, location: true, applyLink: true, tags: true,
        expiresAt: true, createdAt: true,
      },
    });
  }
}
