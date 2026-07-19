import crypto from "crypto";
import { OAuth2Client } from "google-auth-library";
import { prisma } from "../../database/db.js";
import { hashPassword, comparePassword } from "../../utils/password.utils.js";
import { generateToken } from "../../utils/jwt.utils.js";
import { invalidateVersionCache } from "../../middleware/auth.middleware.js";
import { cacheGet, cacheSet, cacheDel, cacheDelPattern } from "../../utils/cache.js";

// TTL shorter than S3 presigned URL expiry (S3 default â‰¥15 min)
const PROFILE_TTL = 300;

import { signUrl, signUrls } from "../../utils/s3.utils.js";
import { createUniqueProfileSlug } from "../../lib/slug.js";
import { sendEmail } from "../../utils/email.utils.js";
import { welcomeEmailHtml, otpEmailHtml, resetPasswordEmailHtml } from "../../utils/email-templates.js";
import type { z } from "zod";
import type { user as User } from "@prisma/client";
import {
  PERSONAL_EMAIL_DOMAINS,
  type registerSchema,
  type loginSchema,
  type updateProfileSchema,
  type googleAuthSchema,
} from "./auth.validation.js";

type RegisterInput = z.infer<typeof registerSchema>;
type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
type LoginInput = z.infer<typeof loginSchema>;
type GoogleAuthInput = z.infer<typeof googleAuthSchema>;

// ---------------------------------------------------------------------------
// Shared helpers (single source of truth for repeated auth flows)
// ---------------------------------------------------------------------------

const OTP_TTL_MS = 10 * 60 * 1000; // 10 minutes
const GITHUB_API_HEADERS = { "User-Agent": "InternHack-App" };

// Fields returned to the client after authentication (login / register / verify / google).
const AUTH_USER_SELECT = {
  id: true,
  profileSlug: true,
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
} as const;

type AuthUser = Pick<User, keyof typeof AUTH_USER_SELECT>;

const pluralize = (count: number, word: string) => `${word}${count !== 1 ? "s" : ""}`;

/** Pick the standardized auth user payload from a full user record. */
function buildAuthUser(user: AuthUser): AuthUser {
  return {
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
  };
}

/** Generate a 6-digit OTP with its hash and expiry timestamp. */
async function generateOtp() {
  const otp = crypto.randomInt(100000, 1000000).toString();
  const hashedOtp = await hashPassword(otp);
  const expiresAt = new Date(Date.now() + OTP_TTL_MS);
  return { otp, hashedOtp, expiresAt };
}

/** Fire-and-forget account verification OTP email. */
function sendVerificationEmail(to: string, name: string, otp: string) {
  sendEmail({
    to,
    subject: "Verify your InternHack account",
    html: otpEmailHtml(name, otp),
  }).catch((err) => console.error("Failed to send OTP email:", err));
}

/**
 * Sign a session JWT for the user's current tokenVersion. Login no longer rotates
 * the version, so multiple devices can stay signed in at once; tokenVersion is only
 * bumped by explicit revocation (password reset, account delete, admin ban/delete).
 */
function issueToken(user: { id: number; email: string; role: User["role"]; tokenVersion: number }): string {
  return generateToken({ id: user.id, email: user.email, role: user.role, tokenVersion: user.tokenVersion });
}

/** Replace stored S3 keys with presigned URLs, in place. */
async function signProfileMedia(record: Record<string, any>) {
  if (Array.isArray(record.resumes) && record.resumes.length > 0) {
    record.resumes = await signUrls(record.resumes);
  }
  if (record.profilePic) record.profilePic = await signUrl(record.profilePic);
  if (record.coverImage) record.coverImage = await signUrl(record.coverImage);
}

/** Throw a uniform lockout error when an account is temporarily locked. */
function assertNotLocked(lockedUntil: Date | null) {
  if (lockedUntil && new Date() < lockedUntil) {
    const remainingMinutes = Math.ceil((lockedUntil.getTime() - Date.now()) / 60000);
    throw new Error(`Too many failed attempts. Please try again in ${remainingMinutes} ${pluralize(remainingMinutes, "minute")}`);
  }
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
        role: "STUDENT",
        contactNo: data.contactNo ?? null,
      },
      select: AUTH_USER_SELECT,
    });

    const { otp, hashedOtp, expiresAt } = await generateOtp();
    await prisma.user.update({
      where: { id: user.id },
      data: { verificationOtp: hashedOtp, otpExpiresAt: expiresAt },
    });

    const slug = await createUniqueProfileSlug(user.name, user.id, prisma);
    (user as any).profileSlug = slug;

    // Send OTP email (fire-and-forget, don't block registration)
    sendEmail({
      to: user.email,
      subject: "Verify your InternHack account",
      html: otpEmailHtml(user.name, otp),
    }).catch((err) => console.error("Failed to send OTP email:", err));

    return { user };
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
          role: "STUDENT",
          profilePic: picture ?? null,
          isVerified: true,
        },
      });

      const slug = await createUniqueProfileSlug(user.name, user.id, prisma);
      user.profileSlug = slug;

      sendEmail({
        to: user.email,
        subject: "Welcome to InternHack!",
        html: welcomeEmailHtml(user.name),
      }).catch((err) => console.error("Failed to send welcome email:", err));
    }

    const token = issueToken(user);

    return {
      user: buildAuthUser(user),
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

    // Block unverified students, admins skip verification
    if (!user.isVerified && user.role !== "ADMIN") {
      const { otp, hashedOtp, expiresAt } = await generateOtp();
      await prisma.user.update({
        where: { id: user.id },
        data: { verificationOtp: hashedOtp, otpExpiresAt: expiresAt, verificationAttempts: 0, verificationLockedUntil: null },
      });

      sendVerificationEmail(user.email, user.name, otp);

      throw new Error("EMAIL_NOT_VERIFIED");
    }

    const token = issueToken(user);

    return {
      user: buildAuthUser(user),
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
    projects: true,
    createdAt: true,
    subscriptionPlan: true,
    subscriptionStatus: true,
    subscriptionEndDate: true,
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

    await signProfileMedia(user as Record<string, any>);

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

    const user = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: this.profileSelect,
    });

    await signProfileMedia(user as Record<string, any>);

    // Bust cached profile so next GET /auth/me and public profile returns fresh data.
    // Use cacheDelPattern so both visitor variants (:auth and :guest) are flushed.
    await cacheDel(`profile:me:${userId}`);
    await cacheDelPattern(`profile:public:${userId}:`);
    if (user.profileSlug) {
      await cacheDelPattern(`profile:public:${user.profileSlug}:`);
    }

    return user;
  }

  /**
   * Fetch the public profile for a given identifier (slug or numeric id).
   *
   * DB query count per request:
   *   CACHED  – 0 Prisma queries (served from the in-process cache)
   *   UNCACHED – 1-2 Prisma queries:
   *     • 1 × user.findUnique (by profileSlug)
   *     • +1 × user.findUnique (by id, only when slug lookup returns null and identifier is numeric)
   *
   * Returns the profile object and whether the response was served from cache.
   */
  async getPublicProfile(identifier: string, visitor?: { id: number; role: string }): Promise<{ profile: unknown; cacheHit: boolean }> {
    // Because public profiles vary by visitor authorization, include role in cache key.
    const isVisitorAuthorized = visitor?.role === "ADMIN";
    const cacheKey = `profile:public:${identifier}:${isVisitorAuthorized ? "auth" : "guest"}`;
    const cached = await cacheGet(cacheKey);
    if (cached) return { profile: cached, cacheHit: true };

    const selectOptions = {
      ...this.profileSelect,
      verifiedSkills: {
        select: { skillName: true, score: true, verifiedAt: true },
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

    if (!isOwner && !isVisitorAuthorized) {
      throw new Error("Profile is private");
    }

    const rest = { ...user };

    await signProfileMedia(rest as Record<string, any>);

    // Full view (includes email/contactNo). Only the owner and authorized
    // viewers ever receive this; it is never written to the shared guest key.
    const fullResult = {
      ...rest,
    };
    // Authorized tier (admin): cache and return the full view under
    // the ":auth" key, which is only ever served back to authorized viewers.
    if (isVisitorAuthorized) {
      await cacheSet(cacheKey, fullResult, PROFILE_TTL);
      return { profile: fullResult, cacheHit: false };
    }

    // Only the owner reaches this point (non-owner, non-authorized visitors are
    // rejected above). Return the owner's full view; never cache under the
    // shared key so it can't be served to another visitor.
    return { profile: fullResult, cacheHit: false };
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

    assertNotLocked(user.verificationLockedUntil);

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
      throw new Error(`Invalid verification code. ${attemptsRemaining} ${pluralize(attemptsRemaining, "attempt")} remaining`);
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
      select: AUTH_USER_SELECT,
    });

    sendEmail({
      to: user.email,
      subject: "Welcome to InternHack!",
      html: welcomeEmailHtml(user.name),
    }).catch((err) => console.error("Failed to send welcome email:", err));

    const token = issueToken({ id: updated.id, email: updated.email, role: updated.role, tokenVersion: user.tokenVersion });

    return { user: buildAuthUser(updated), token };
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

    const { otp, hashedOtp, expiresAt } = await generateOtp();
    await prisma.user.update({
      where: { id: user.id },
      data: { verificationOtp: hashedOtp, otpExpiresAt: expiresAt, verificationAttempts: 0, verificationLockedUntil: null },
    });

    sendVerificationEmail(user.email, user.name, otp);

    return { message: "OTP sent successfully" };
  }

  async forgotPassword(email: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      // Don't reveal whether the email exists
      return;
    }

    const { otp, hashedOtp, expiresAt } = await generateOtp();

    // Reset attempt counter and unlock on new OTP request
    await prisma.user.update({
      where: { id: user.id },
      data: {
        resetPasswordOtp: hashedOtp,
        resetOtpExpiresAt: expiresAt,
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
    assertNotLocked(user.passwordResetLockedUntil);

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
        `Invalid reset code. ${attemptsRemaining} ${pluralize(attemptsRemaining, "attempt")} remaining`
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
    const headers = GITHUB_API_HEADERS;

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
}

