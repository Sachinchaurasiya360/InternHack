import crypto from "crypto";
import { OAuth2Client } from "google-auth-library";
import { prisma } from "../../database/db.js";
import { hashPassword, comparePassword } from "../../utils/password.utils.js";
import { generateToken } from "../../utils/jwt.utils.js";
import { invalidateVersionCache } from "../../middleware/auth.middleware.js";
import { BadgeService } from "../badge/badge.service.js";
import { UserService } from "../user/user.service.js";
import { cacheGet, cacheSet, cacheDel } from "../../utils/cache.js";

const userService = new UserService();

// TTL shorter than S3 presigned URL expiry (S3 default â‰¥15 min)
const PROFILE_TTL = 300;

const badgeService = new BadgeService();
import { signUrl, signUrls } from "../../utils/s3.utils.js";
import { createUniqueProfileSlug } from "../../lib/slug.js";
import { sendEmail } from "../../utils/email.utils.js";
import { welcomeEmailHtml, otpEmailHtml, resetPasswordEmailHtml } from "../../utils/email-templates.js";
import type { UserRole } from "@prisma/client";
import { PERSONAL_EMAIL_DOMAINS } from "./auth.validation.js";

interface RegisterInput {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  company?: string | undefined;
  designation?: string | undefined;
  contactNo?: string | undefined;
}

interface UpdateProfileInput {
  name?: string;
  contactNo?: string;
  company?: string;
  designation?: string;
  bio?: string;
  college?: string;
  graduationYear?: number | null;
  skills?: string[];
  location?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  leetcodeUrl?: string;
  jobStatus?: string | null;
  // Added builtAt for GSSoC '26 Featured Projects
  projects?: { id: string; title: string; description: string; techStack: string[]; liveUrl?: string; repoUrl?: string; builtAt?: string }[];
  achievements?: { id: string; title: string; description: string; date?: string }[];
  isProfilePublic?: boolean;
}

interface LoginInput {
  email: string;
  password: string;
}

interface GoogleAuthInput {
  credential?: string;
  accessToken?: string;
  role?: UserRole;
}

const GITHUB_STATS_CACHE_TTL = 60 * 60 * 1000;
const GITHUB_STATS_MAX_REPO_PAGES = 100;

type GitHubStats = {
  username: string;
  profileUrl: string;
  publicRepos: number;
  totalStars: number;
  topLanguages: { name: string; count: number }[];
};

type GitHubStatsRepo = {
  stargazers_count: number;
  language: string | null;
  fork: boolean;
};

const githubStatsCache = new Map<string, { data: GitHubStats; expiresAt: number }>();

function parseGitHubUsername(input: string) {
  const value = input.trim();
  if (!value) return "";

  try {
    const parsed = new URL(value.startsWith("http") ? value : `https://${value}`);
    if (!parsed.hostname.toLowerCase().includes("github.com")) return value.replace(/^@/, "");
    return parsed.pathname.split("/").filter(Boolean)[0]?.replace(/^@/, "") ?? "";
  } catch {
    return value.replace(/^github\.com\//i, "").split("/")[0]?.replace(/^@/, "") ?? "";
  }
}

async function fetchAllGitHubStatsRepos(username: string, headers: Record<string, string>): Promise<GitHubStatsRepo[]> {
  const repos: GitHubStatsRepo[] = [];
  let hasNextPage = false;

  for (let page = 1; page <= GITHUB_STATS_MAX_REPO_PAGES; page += 1) {
    const reposRes = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&type=owner&sort=updated&page=${page}`,
      { headers },
    );
    if (!reposRes.ok) {
      throw new Error(`GitHub API error: ${reposRes.status}`);
    }

    const pageRepos = (await reposRes.json()) as GitHubStatsRepo[];
    repos.push(...pageRepos);
    const linkHeader = reposRes.headers.get("link") ?? "";
    hasNextPage = linkHeader.includes('rel="next"');
    if (!hasNextPage) break;
  }

  if (hasNextPage) {
    throw new Error("Exceeded max GitHub repository pages while fetching stats");
  }

  return repos;
}

export class AuthService {
  private googleClient: OAuth2Client;

  constructor() {
    this.googleClient = new OAuth2Client(process.env["GOOGLE_CLIENT_ID"] ?? "");
  }

  async register(data: RegisterInput) {
    const existing = await prisma.user.findUnique({ where: { email: data.email } });
    if (existing) {
      throw new Error("Email already registered");
    }

    const hashedPassword = await hashPassword(data.password);

    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        role: data.role,
        company: data.company ?? null,
        designation: data.designation ?? null,
        contactNo: data.contactNo ?? null,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        company: true,
        designation: true,
        profilePic: true,
        isVerified: true,
        createdAt: true,
        subscriptionPlan: true,
        subscriptionStatus: true,
        subscriptionEndDate: true,
        ossTier: true,
      },
    });

    // Generate 6-digit OTP, hash it, and store it
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const hashedOtp = await hashPassword(otp);
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    await prisma.user.update({
      where: { id: user.id },
      data: { verificationOtp: hashedOtp, otpExpiresAt },
    });

    const slug = await createUniqueProfileSlug(user.name, user.id, prisma);
    (user as any).profileSlug = slug;

    // Send OTP email (fire-and-forget, don't block registration)
    sendEmail({
      to: user.email,
      subject: "Verify your InternHack account",
      html: otpEmailHtml(user.name, otp),
    }).catch((err) => console.error("Failed to send OTP email:", err));

    return { user: { ...user, profileSlug: slug } };
  }

  async googleAuth(data: GoogleAuthInput) {
    if (!process.env["GOOGLE_CLIENT_ID"]) {
      throw Object.assign(new Error("Google authentication is not configured on this server"), { statusCode: 503 });
    }

    let email: string | undefined;
    let name: string | undefined;
    let picture: string | undefined;

    if (data.credential) {
      const ticket = await this.googleClient.verifyIdToken({
        idToken: data.credential,
        audience: process.env["GOOGLE_CLIENT_ID"] ?? "",
      });
      const payload = ticket.getPayload();
      if (!payload || !payload.email) {
        throw new Error("Invalid Google token");
      }
      email = payload.email;
      name = payload.name;
      picture = payload.picture;
    } else if (data.accessToken) {
      const tokenInfoResp = await fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${encodeURIComponent(data.accessToken)}`);
      if (!tokenInfoResp.ok) {
        throw new Error("Invalid Google token");
      }
      const tokenInfo = await tokenInfoResp.json() as { aud?: string; azp?: string };
      if (tokenInfo.aud !== process.env["GOOGLE_CLIENT_ID"] && tokenInfo.azp !== process.env["GOOGLE_CLIENT_ID"]) {
        throw new Error("Invalid Google token");
      }
      const resp = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${data.accessToken}` },
      });
      if (!resp.ok) {
        throw new Error("Invalid Google token");
      }
      const info = (await resp.json()) as {
        email?: string;
        name?: string;
        picture?: string;
        email_verified?: boolean;
      };
      if (!info.email || info.email_verified === false) {
        throw new Error("Invalid Google token");
      }
      email = info.email;
      name = info.name;
      picture = info.picture;
    } else {
      throw new Error("Invalid Google token");
    }

    if (!email) {
      throw new Error("Invalid Google token");
    }

    // Block personal emails for recruiter signups
    if (data.role === "RECRUITER") {
      const domain = email.split("@")[1]?.toLowerCase();
      if (domain && PERSONAL_EMAIL_DOMAINS.includes(domain)) {
        throw new Error("Please use your company email. Personal email addresses (Gmail, Yahoo, etc.) are not allowed for recruiter accounts.");
      }
    }

    // Check if user already exists
    let user = await prisma.user.findUnique({ where: { email } });

    if (user) {
      // Existing user - check if active
      if (!user.isActive) {
        throw new Error("Account is deactivated");
      }

      // Update profile pic if not set
      if (!user.profilePic && picture) {
        user = await prisma.user.update({
          where: { id: user.id },
          data: { profilePic: picture },
        });
      }
    } else {
      // New user - create account with isVerified true (Google-verified email)
      const randomPassword = crypto.randomBytes(32).toString("hex");
      const hashedPassword = await hashPassword(randomPassword);

      user = await prisma.user.create({
        data: {
          name: name ?? email.split("@")[0] ?? "User",
          email,
          password: hashedPassword,
          role: data.role ?? "STUDENT",
          profilePic: picture ?? null,
          isVerified: true,
        },
      });

      const slug = await createUniqueProfileSlug(user.name, user.id, prisma);
      user.profileSlug = slug;

      // Send welcome email (fire-and-forget) – temporarily disabled
      // sendEmail({
      //   to: user.email,
      //   subject: "Welcome to InternHack!",
      //   html: welcomeEmailHtml(user.name),
      // }).catch((err) => console.error("Failed to send welcome email:", err));
    }

    // Increment tokenVersion to invalidate all previous sessions (single-device enforcement)
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { tokenVersion: { increment: 1 } },
      select: { tokenVersion: true },
    });
    invalidateVersionCache(user.id);

    const token = generateToken({ id: user.id, email: user.email, role: user.role, tokenVersion: updatedUser.tokenVersion });
    const ossTier = user.ossTier;

    return {
      user: {
        id: user.id,
        profileSlug: user.profileSlug,
        name: user.name,
        email: user.email,
        role: user.role,
        company: user.company,
        designation: user.designation,
        profilePic: user.profilePic,
        isVerified: user.isVerified,
        createdAt: user.createdAt,
        subscriptionPlan: user.subscriptionPlan,
        subscriptionStatus: user.subscriptionStatus,
        subscriptionEndDate: user.subscriptionEndDate,
        ossTier,
      },
      token,
      isNewUser: !user.createdAt || (Date.now() - user.createdAt.getTime()) < 5000,
    };
  }

  async login(data: LoginInput) {
    const user = await prisma.user.findUnique({ where: { email: data.email } });
    if (!user) {
      throw new Error("Invalid email or password");
    }

    if (!user.isActive) {
      throw new Error("Account is deactivated");
    }

    const isValid = await comparePassword(data.password, user.password);
    if (!isValid) {
      throw new Error("Invalid email or password");
    }

    // Block unverified students/recruiters, admins skip verification
    if (!user.isVerified && user.role !== "ADMIN") {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      const hashedOtp = await hashPassword(otp);
      const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000);

      await prisma.user.update({
        where: { id: user.id },
        data: { verificationOtp: hashedOtp, otpExpiresAt, verificationAttempts: 0, verificationLockedUntil: null },
      });

      sendEmail({
        to: user.email,
        subject: "Verify your InternHack account",
        html: otpEmailHtml(user.name, otp),
      }).catch((err) => console.error("Failed to send OTP email:", err));

      throw new Error("EMAIL_NOT_VERIFIED");
    }

    // Increment tokenVersion to invalidate all previous sessions (single-device enforcement)
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { tokenVersion: { increment: 1 } },
      select: { tokenVersion: true },
    });
    invalidateVersionCache(user.id);

    const token = generateToken({ id: user.id, email: user.email, role: user.role, tokenVersion: updatedUser.tokenVersion });
    const ossTier = user.ossTier;

    return {
      user: {
        id: user.id,
        profileSlug: user.profileSlug,
        name: user.name,
        email: user.email,
        role: user.role,
        company: user.company,
        designation: user.designation,
        profilePic: user.profilePic,
        isVerified: user.isVerified,
        createdAt: user.createdAt,
        subscriptionPlan: user.subscriptionPlan,
        subscriptionStatus: user.subscriptionStatus,
        subscriptionEndDate: user.subscriptionEndDate,
        ossTier,
      },
      token,
    };
  }

  async deleteAccount(userId: number, password: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { password: true },
    });
    if (!user) throw new Error("User not found");

    const isValid = await comparePassword(password, user.password);
    if (!isValid) throw new Error("Incorrect password");

    await prisma.user.delete({ where: { id: userId } });
    invalidateVersionCache(userId);
  }

  private readonly profileSelect = {
    id: true,
    name: true,
    email: true,
    role: true,
    profileSlug: true,
    isVerified: true,
    contactNo: true,
    profilePic: true,
    coverImage: true,
    resumes: true,
    company: true,
    designation: true,
    bio: true,
    college: true,
    graduationYear: true,
    skills: true,
    location: true,
    linkedinUrl: true,
    githubUrl: true,
    portfolioUrl: true,
    leetcodeUrl: true,
    jobStatus: true,
    isProfilePublic: true,
    projects: true,
    achievements: true,
    createdAt: true,
    subscriptionPlan: true,
    subscriptionStatus: true,
    subscriptionEndDate: true,
    ossTier: true,
  } as const;

  async getProfile(userId: number) {
    const cacheKey = `profile:me:${userId}`;
    const cached = await cacheGet(cacheKey);
    if (cached) return cached as never;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: this.profileSelect,
    });

    if (!user) {
      throw new Error("User not found");
    }

    if (user.resumes.length > 0) {
      (user as Record<string, unknown>).resumes = await signUrls(user.resumes);
    }
    if (user.profilePic) {
      (user as Record<string, unknown>).profilePic = await signUrl(user.profilePic);
    }
    if (user.coverImage) {
      (user as Record<string, unknown>).coverImage = await signUrl(user.coverImage);
    }


    await cacheSet(cacheKey, user, PROFILE_TTL);
    return user;
  }

  async updateProfile(userId: number, data: UpdateProfileInput) {
    const updateData: Record<string, unknown> = {};

    if (data.name && data.name.trim()) updateData.name = data.name.trim();
    for (const key of ["contactNo", "company", "designation", "bio", "college", "location", "linkedinUrl", "githubUrl", "portfolioUrl", "leetcodeUrl"] as const) {
      if (key in data) updateData[key] = (data[key] as string)?.trim() || null;
    }
    if ("graduationYear" in data) {
      updateData.graduationYear = data.graduationYear ? Number(data.graduationYear) : null;
    }
    if ("skills" in data) {
      updateData.skills = Array.isArray(data.skills) ? data.skills.map((s) => s.trim().toLowerCase()) : [];
    }
    if ("jobStatus" in data) {
      updateData.jobStatus = data.jobStatus || null;
    }
    if ("projects" in data) {
      if (Array.isArray(data.projects)) {
        const dateRegex = /^\d{4}-(?:0[1-9]|1[0-2])$/;
        updateData.projects = data.projects.map((p: any) => {
          if (!p || typeof p !== "object") return p;
          const proj = { ...p };
          if (proj.builtAt != null && typeof proj.builtAt !== "string") {
            throw Object.assign(new Error("Invalid type for builtAt. Expected string."), { statusCode: 400 });
          }
          if (typeof proj.builtAt === "string") {
            const trimmed = proj.builtAt.trim();
            if (trimmed) {
              if (dateRegex.test(trimmed)) {
                proj.builtAt = trimmed;
              } else if (!isNaN(Date.parse(trimmed))) {
                proj.builtAt = new Date(trimmed).toISOString();
              } else {
                throw Object.assign(new Error(`Invalid date format for builtAt. Use YYYY-MM or ISO-8601.`), { statusCode: 400 });
              }
            } else {
              delete proj.builtAt;
            }
          }
          return proj;
        });
      } else {
        updateData.projects = [];
      }
    }
    if ("achievements" in data) {
      updateData.achievements = Array.isArray(data.achievements) ? data.achievements : [];
    }
    if ("isProfilePublic" in data) {
      updateData.isProfilePublic = !!data.isProfilePublic;
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: this.profileSelect,
    });

    // Check profile_complete badge (fire-and-forget)
    badgeService.checkAndAwardBadges(userId, "profile_complete").catch((err) => console.error("Badge check failed (profile_complete):", err));

    if (user.resumes.length > 0) {
      (user as Record<string, unknown>).resumes = await signUrls(user.resumes);
    }
    if (user.profilePic) {
      (user as Record<string, unknown>).profilePic = await signUrl(user.profilePic);
    }
    if (user.coverImage) {
      (user as Record<string, unknown>).coverImage = await signUrl(user.coverImage);
    }

    // Bust cached profile so next GET /auth/me returns fresh data
    await cacheDel(`profile:me:${userId}`);
    await cacheDel(`profile:public:${userId}`);
    if (user.profileSlug) {
      await cacheDel(`profile:public:${user.profileSlug}`);
    }


    return user;
  }

  async getPublicProfile(identifier: string, visitor?: { id: number; role: string }) {
    // Because public profiles vary by visitor authorization, include role in cache key if authorized
    const isVisitorAuthorized = visitor?.role === "ADMIN" || visitor?.role === "RECRUITER";
    const cacheKey = `profile:public:${identifier}:${isVisitorAuthorized ? "auth" : "guest"}`;
    const cached = await cacheGet(cacheKey);
    if (cached) return cached as never;

    const selectOptions = {
      ...this.profileSelect,
      verifiedSkills: {
        select: { skillName: true, score: true, verifiedAt: true },
      },
      atsScores: {
        select: { overallScore: true },
        orderBy: { overallScore: "desc" as const },
        take: 1,
      },
    };

    let user: any;
    user = await prisma.user.findUnique({
      where: { profileSlug: identifier },
      select: selectOptions,
    });

    if (!user && /^\d+$/.test(identifier)) {
      user = await prisma.user.findUnique({
        where: { id: Number(identifier) },
        select: selectOptions,
      });
    }

    if (!user || user.role !== "STUDENT") {
      throw new Error("User not found");
    }

    const isOwner = visitor?.id === user.id;

    if (!user.isProfilePublic && !isOwner && !isVisitorAuthorized) {
      throw new Error("Profile is private");
    }

    const { atsScores, ...rest } = user;
    
    // Sanitize for unauthorized guest viewers
    if (!isOwner && !isVisitorAuthorized) {
      delete (rest as any).email;
      delete (rest as any).contactNo;
      // We will keep resumes for now as per normal portfolio behavior, but sensitive identifiers are stripped.
    }

    if (rest.resumes && rest.resumes.length > 0) {
      (rest as Record<string, unknown>).resumes = await signUrls(rest.resumes);
    }
    if (rest.profilePic) {
      (rest as Record<string, unknown>).profilePic = await signUrl(rest.profilePic);
    }
    if (rest.coverImage) {
      (rest as Record<string, unknown>).coverImage = await signUrl(rest.coverImage);
    }

    const result = {
      ...rest,
      bestAtsScore: atsScores[0]?.overallScore ?? null,
    };
    await cacheSet(cacheKey, result, PROFILE_TTL);
    return result;
  }

  async verifyEmail(email: string, otp: string) {
    const MAX_VERIFICATION_ATTEMPTS = 5;
    const LOCKOUT_DURATION_MS = 30 * 60 * 1000; // 30 minutes

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new Error("User not found");
    }

    if (user.isVerified) {
      throw new Error("Email is already verified");
    }

    if (user.verificationLockedUntil && new Date() < user.verificationLockedUntil) {
      const remainingMinutes = Math.ceil(
        (user.verificationLockedUntil.getTime() - Date.now()) / 60000
      );
      throw new Error(
        `Too many failed attempts. Please try again in ${remainingMinutes} minute${remainingMinutes !== 1 ? "s" : ""}`
      );
    }

    if (!user.verificationOtp || !user.otpExpiresAt) {
      throw new Error("No verification code found. Please request a new one");
    }

    if (new Date() > user.otpExpiresAt) {
      throw new Error("Verification code has expired. Please request a new one");
    }

    const isValid = await comparePassword(otp, user.verificationOtp);
    if (!isValid) {
      const updatedAttempts = user.verificationAttempts + 1;

      if (updatedAttempts >= MAX_VERIFICATION_ATTEMPTS) {
        await prisma.user.update({
          where: { id: user.id },
          data: {
            verificationAttempts: updatedAttempts,
            verificationLockedUntil: new Date(Date.now() + LOCKOUT_DURATION_MS),
          },
        });
        throw new Error("Too many failed attempts. Account locked for 30 minutes for security");
      }

      await prisma.user.update({
        where: { id: user.id },
        data: { verificationAttempts: updatedAttempts },
      });

      const attemptsRemaining = MAX_VERIFICATION_ATTEMPTS - updatedAttempts;
      throw new Error(`Invalid verification code. ${attemptsRemaining} attempt${attemptsRemaining !== 1 ? "s" : ""} remaining`);
    }

    const updated = await prisma.user.update({
      where: { id: user.id },
      data: {
        isVerified: true,
        verificationOtp: null,
        otpExpiresAt: null,
        verificationAttempts: 0,
        verificationLockedUntil: null,
      },
      select: {
        id: true,
        profileSlug: true,
        name: true,
        email: true,
        role: true,
        isVerified: true,
        company: true,
        designation: true,
        createdAt: true,
        subscriptionPlan: true,
        subscriptionStatus: true,
        subscriptionEndDate: true,
        ossTier: true,
      },
    });

    // Send welcome email (fire-and-forget) â€” temporarily disabled
    // sendEmail({
    //   to: user.email,
    //   subject: "Welcome to InternHack!",
    //   html: welcomeEmailHtml(user.name),
    // }).catch((err) => console.error("Failed to send welcome email:", err));

    // Increment tokenVersion, first real login after email verification
    const versionUpdate = await prisma.user.update({
      where: { id: updated.id },
      data: { tokenVersion: { increment: 1 } },
      select: { tokenVersion: true },
    });
    invalidateVersionCache(updated.id);

	    const token = generateToken({ id: updated.id, email: updated.email, role: updated.role, tokenVersion: versionUpdate.tokenVersion });
    const ossTier = updated.ossTier;

    return { user: { ...updated, ossTier }, token };
  }

  async resendOtp(email: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new Error("User not found");
    }

    if (user.isVerified) {
      throw new Error("Email is already verified");
    }

    // Cooldown check: if otpExpiresAt exists and (otpExpiresAt - 8 minutes) > now,
    // that means the OTP was sent less than 2 minutes ago
    if (user.otpExpiresAt) {
      const cooldownEnd = new Date(user.otpExpiresAt.getTime() - 8 * 60 * 1000);
      if (cooldownEnd > new Date()) {
        throw new Error("Please wait before requesting again");
      }
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const hashedOtp = await hashPassword(otp);
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000);

    await prisma.user.update({
      where: { id: user.id },
      data: { verificationOtp: hashedOtp, otpExpiresAt, verificationAttempts: 0, verificationLockedUntil: null },
    });

    sendEmail({
      to: user.email,
      subject: "Verify your InternHack account",
      html: otpEmailHtml(user.name, otp),
    }).catch((err) => console.error("Failed to send OTP email:", err));

    return { message: "OTP sent successfully" };
  }

  async forgotPassword(email: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      // Don't reveal whether the email exists
      return;
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const hashedOtp = await hashPassword(otp);
    const resetOtpExpiresAt = new Date(Date.now() + 10 * 60 * 1000);

    // Reset attempt counter and unlock on new OTP request
    await prisma.user.update({
      where: { id: user.id },
      data: {
        resetPasswordOtp: hashedOtp,
        resetOtpExpiresAt,
        passwordResetAttempts: 0,
        passwordResetLockedUntil: null,
      },
    });

    await sendEmail({
      to: user.email,
      subject: "Reset your InternHack password",
      html: resetPasswordEmailHtml(user.name, otp),
    });
  }

  async resetPassword(email: string, otp: string, newPassword: string) {
    const MAX_RESET_ATTEMPTS = 3;
    const LOCKOUT_DURATION_MS = 30 * 60 * 1000; // 30 minutes

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new Error("Invalid or expired reset code");
    }

    // Check if account is temporarily locked due to too many failed attempts
    if (user.passwordResetLockedUntil && new Date() < user.passwordResetLockedUntil) {
      const remainingMinutes = Math.ceil(
        (user.passwordResetLockedUntil.getTime() - Date.now()) / 60000
      );
      throw new Error(
        `Too many failed attempts. Please try again in ${remainingMinutes} minute${remainingMinutes !== 1 ? "s" : ""}`
      );
    }

    if (!user.resetPasswordOtp || !user.resetOtpExpiresAt) {
      throw new Error("No reset code found. Please request a new one");
    }

    if (new Date() > user.resetOtpExpiresAt) {
      throw new Error("Reset code has expired. Please request a new one");
    }

    const isValid = await comparePassword(otp, user.resetPasswordOtp);
    if (!isValid) {
      const updatedAttempts = user.passwordResetAttempts + 1;

      // Lock account if max attempts exceeded
      if (updatedAttempts >= MAX_RESET_ATTEMPTS) {
        await prisma.user.update({
          where: { id: user.id },
          data: {
            passwordResetAttempts: updatedAttempts,
            passwordResetLockedUntil: new Date(Date.now() + LOCKOUT_DURATION_MS),
          },
        });
        throw new Error(
          `Too many failed attempts. Account locked for 30 minutes for security`
        );
      }

      // Increment attempt counter
      await prisma.user.update({
        where: { id: user.id },
        data: { passwordResetAttempts: updatedAttempts },
      });

      const attemptsRemaining = MAX_RESET_ATTEMPTS - updatedAttempts;
      throw new Error(
        `Invalid reset code. ${attemptsRemaining} attempt${attemptsRemaining !== 1 ? "s" : ""} remaining`
      );
    }

    const hashedPassword = await hashPassword(newPassword);

    // Password reset successful - clear attempts and lockout
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetPasswordOtp: null,
        resetOtpExpiresAt: null,
        passwordResetAttempts: 0,
        passwordResetLockedUntil: null,
        tokenVersion: { increment: 1 },
      },
    });
    // Revoke existing sessions only after the atomic password + version update succeeds.
    invalidateVersionCache(user.id);
  }

  async importGitHub(username: string) {
    const headers = { "User-Agent": "InternHack-App" };

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, { headers }),
      fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=stars&per_page=10&type=owner`, { headers }),
    ]);

    if (!userRes.ok) {
      if (userRes.status === 404) throw new Error("GitHub user not found");
      throw new Error(`GitHub API error: ${userRes.status}`);
    }

    const profile = (await userRes.json()) as {
      name: string | null;
      bio: string | null;
      avatar_url: string | null;
      blog: string | null;
      location: string | null;
    };

    if (!reposRes.ok) {
      throw new Error(`GitHub API error: ${reposRes.status}`);
    }

    const repos = (await reposRes.json()) as {
      name: string;
      description: string | null;
      language: string | null;
      html_url: string;
      homepage: string | null;
      fork: boolean;
    }[];

    const ownRepos = repos.filter((r) => !r.fork);

    const languages = [...new Set(ownRepos.map((r) => r.language).filter(Boolean))] as string[];

    const projects = ownRepos.map((repo) => ({
      title: repo.name,
      description: repo.description ?? "",
      techStack: repo.language ? [repo.language] : [],
      repoUrl: repo.html_url,
      liveUrl: repo.homepage ?? "",
    }));

    return {
      name: profile.name ?? username,
      bio: profile.bio ?? "",
      avatar: profile.avatar_url ?? "",
      portfolioUrl: profile.blog ?? "",
      location: profile.location ?? "",
      languages,
      projects,
    };
  }

  async getGitHubStats(input: string): Promise<GitHubStats> {
    const username = parseGitHubUsername(input);
    if (!username) {
      throw new Error("GitHub username is required");
    }

    const cacheKey = username.toLowerCase();
    const cached = githubStatsCache.get(cacheKey);
    if (cached && cached.expiresAt > Date.now()) {
      return cached.data;
    }

    const headers = { "User-Agent": "InternHack-App" };
    const [userRes, repos] = await Promise.all([
      fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, { headers }),
      fetchAllGitHubStatsRepos(username, headers),
    ]);

    if (!userRes.ok) {
      if (userRes.status === 404) throw new Error("GitHub user not found");
      throw new Error(`GitHub API error: ${userRes.status}`);
    }
    const profile = (await userRes.json()) as {
      login: string;
      html_url: string;
      public_repos: number;
    };

    const ownRepos = repos.filter((repo) => !repo.fork);
    const languageCounts = new Map<string, number>();
    let totalStars = 0;

    for (const repo of ownRepos) {
      totalStars += repo.stargazers_count ?? 0;
      if (repo.language) {
        languageCounts.set(repo.language, (languageCounts.get(repo.language) ?? 0) + 1);
      }
    }

    const data: GitHubStats = {
      username: profile.login,
      profileUrl: profile.html_url,
      publicRepos: profile.public_repos ?? ownRepos.length,
      totalStars,
      topLanguages: [...languageCounts.entries()]
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .slice(0, 3)
        .map(([name, count]) => ({ name, count })),
    };

    githubStatsCache.set(cacheKey, { data, expiresAt: Date.now() + GITHUB_STATS_CACHE_TTL });
    if (githubStatsCache.size > 200) {
      const now = Date.now();
      for (const [key, entry] of githubStatsCache) {
        if (entry.expiresAt <= now) githubStatsCache.delete(key);
      }
      while (githubStatsCache.size > 200) {
        const oldestKey = githubStatsCache.keys().next().value;
        if (oldestKey !== undefined) {
          githubStatsCache.delete(oldestKey);
        } else {
          break;
        }
      }
    }

    return data;
  }
}

