import crypto from "crypto";
import { Prisma } from "@prisma/client";
import { prisma } from "../../database/db.js";
import { generateToken } from "../../utils/jwt.utils.js";
import { applicationProfileService } from "../application-profile/application-profile.service.js";
import { applicationTrackerService } from "../application-tracker/application-tracker.service.js";

function hashUrl(url?: string | null): string | null {
  if (!url) return null;
  return crypto.createHash("sha256").update(url).digest("hex");
}

function detectSiteType(host: string, markers: string[] = []) {
  const normalizedHost = host.toLowerCase();
  const markerText = markers.join(" ").toLowerCase();
  if (normalizedHost.includes("linkedin.com")) return "LINKEDIN";
  if (normalizedHost.includes("workdayjobs.com") || markerText.includes("workday")) return "WORKDAY";
  if (normalizedHost.includes("greenhouse.io") || markerText.includes("greenhouse")) return "GREENHOUSE";
  if (normalizedHost.includes("lever.co") || markerText.includes("lever")) return "LEVER";
  if (normalizedHost.includes("ashbyhq.com") || markerText.includes("ashby")) return "ASHBY";
  if (normalizedHost.includes("indeed.com")) return "INDEED";
  return "GENERIC";
}

export class ExtensionService {
  async createSession(userId: number) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, role: true, tokenVersion: true },
    });
    if (!user) throw new Error("User not found");
    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
      tokenVersion: user.tokenVersion,
    });
    return { token, expiresInSeconds: 7 * 24 * 60 * 60 };
  }

  async getProfile(userId: number) {
    const merged = await applicationProfileService.getMergedProfile(userId);
    const user = merged.user;
    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        contactNo: user.contactNo,
        bio: user.bio,
        college: user.college,
        graduationYear: user.graduationYear,
        skills: user.skills,
        linkedinUrl: user.linkedinUrl,
        githubUrl: user.githubUrl,
        portfolioUrl: user.portfolioUrl,
        leetcodeUrl: user.leetcodeUrl,
        location: user.location,
        projects: user.projects,
        resumes: user.resumes,
      },
      applicationProfile: merged.applicationProfile,
      generatedResumes: merged.resumes,
      generatedCoverLetters: merged.coverLetters,
      preferences: merged.preferences,
    };
  }

  detect(input: { host: string; markers?: string[] }) {
    const siteType = detectSiteType(input.host, input.markers);
    return {
      siteType,
      supported: siteType !== "GENERIC",
      adapter: siteType.toLowerCase(),
      confidence: siteType === "GENERIC" ? 0.45 : 0.9,
    };
  }

  async logEvent(userId: number, input: {
    applicationId?: number | null;
    host: string;
    siteType?: string | null;
    url?: string | null;
    urlHash?: string | null;
    eventType: string;
    fieldCount?: number;
    filledCount?: number;
    failedCount?: number;
    metadata?: Record<string, unknown>;
  }) {
    return prisma.extensionAutofillEvent.create({
      data: {
        userId,
        applicationId: input.applicationId ?? null,
        host: input.host,
        siteType: input.siteType ?? null,
        urlHash: input.urlHash ?? hashUrl(input.url),
        eventType: input.eventType as never,
        fieldCount: input.fieldCount ?? 0,
        filledCount: input.filledCount ?? 0,
        failedCount: input.failedCount ?? 0,
        metadata: (input.metadata ?? {}) as Prisma.InputJsonObject,
      },
    });
  }

  async trackApplication(userId: number, input: Record<string, any>) {
    const status = input.submitted ? "APPLIED" : input.status;
    const application = await applicationTrackerService.create(userId, {
      sourceType: "EXTENSION",
      company: input.company,
      role: input.role,
      location: input.location,
      jobUrl: input.jobUrl,
      applicationUrl: input.applicationUrl,
      jobDescription: input.jobDescription,
      status,
      appliedAt: status === "APPLIED" ? new Date().toISOString() : null,
      resumeUrl: input.resumeUrl,
      notes: input.notes ?? "",
      extensionMetadata: input.extensionMetadata ?? {},
      events: [
        {
          type: status === "APPLIED" ? "submitted" : "saved",
          label: status === "APPLIED" ? "Application submitted" : "Application saved",
          createdAt: new Date().toISOString(),
        },
      ],
    });

    await this.logEvent(userId, {
      applicationId: application.id,
      host: input.extensionMetadata?.host || "unknown",
      siteType: input.extensionMetadata?.siteType || null,
      url: input.applicationUrl || input.jobUrl || null,
      eventType: "TRACKED",
      metadata: { status },
    }).catch(() => undefined);

    return application;
  }

  async supportRequest(userId: number, input: {
    host: string;
    url?: string | null;
    siteType?: string | null;
    message?: string | null;
    metadata?: Record<string, unknown>;
  }) {
    return this.logEvent(userId, {
      host: input.host,
      siteType: input.siteType ?? "GENERIC",
      url: input.url,
      eventType: "SUPPORT_REQUESTED",
      metadata: {
        message: input.message ?? null,
        ...(input.metadata ?? {}),
      },
    });
  }
}

export const extensionService = new ExtensionService();
