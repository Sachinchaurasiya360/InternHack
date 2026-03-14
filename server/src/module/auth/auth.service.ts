import crypto from "crypto";
import { OAuth2Client } from "google-auth-library";
import { prisma } from "../../database/db.js";
import { hashPassword, comparePassword } from "../../utils/password.utils.js";
import { generateToken } from "../../utils/jwt.utils.js";
import { BadgeService } from "../badge/badge.service.js";

const badgeService = new BadgeService();
import { signUrls } from "../../utils/s3.utils.js";
import { sendEmail } from "../../utils/email.utils.js";
import { welcomeEmailHtml, otpEmailHtml, resetPasswordEmailHtml } from "../../utils/email-templates.js";
import type { UserRole } from "@prisma/client";

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
  graduationYear?: number;
  skills?: string[];
  location?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  leetcodeUrl?: string;
  jobStatus?: string | null;
  projects?: { id: string; title: string; description: string; techStack: string[]; liveUrl?: string; repoUrl?: string }[];
  achievements?: { id: string; title: string; description: string; date?: string }[];
  isProfilePublic?: boolean;
}

interface LoginInput {
  email: string;
  password: string;
}

interface GoogleAuthInput {
  credential: string;
  role?: UserRole;
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
        isVerified: true,
        createdAt: true,
        subscriptionPlan: true,
        subscriptionStatus: true,
        subscriptionEndDate: true,
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

    // Send OTP email (fire-and-forget, don't block registration)
    sendEmail({
      to: user.email,
      subject: "Verify your InternHack account",
      html: otpEmailHtml(user.name, otp),
    }).catch((err) => console.error("Failed to send OTP email:", err));

    const token = generateToken({ id: user.id, email: user.email, role: user.role });

    return { user, token };
  }

  async googleAuth(data: GoogleAuthInput) {
    const ticket = await this.googleClient.verifyIdToken({
      idToken: data.credential,
      audience: process.env["GOOGLE_CLIENT_ID"] ?? "",
    });

    const payload = ticket.getPayload();
    if (!payload || !payload.email) {
      throw new Error("Invalid Google token");
    }

    const { email, name, picture } = payload;

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

      // Send welcome email (fire-and-forget)
      sendEmail({
        to: user.email,
        subject: "Welcome to InternHack!",
        html: welcomeEmailHtml(user.name),
      }).catch((err) => console.error("Failed to send welcome email:", err));
    }

    const token = generateToken({ id: user.id, email: user.email, role: user.role });

    return {
      user: {
        id: user.id,
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

    // Block unverified students/recruiters — admins skip verification
    if (!user.isVerified && user.role !== "ADMIN") {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      const hashedOtp = await hashPassword(otp);
      const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000);

      await prisma.user.update({
        where: { id: user.id },
        data: { verificationOtp: hashedOtp, otpExpiresAt },
      });

      sendEmail({
        to: user.email,
        subject: "Verify your InternHack account",
        html: otpEmailHtml(user.name, otp),
      }).catch((err) => console.error("Failed to send OTP email:", err));

      throw new Error("EMAIL_NOT_VERIFIED");
    }

    const token = generateToken({ id: user.id, email: user.email, role: user.role });

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        company: user.company,
        designation: user.designation,
        isVerified: user.isVerified,
        createdAt: user.createdAt,
        subscriptionPlan: user.subscriptionPlan,
        subscriptionStatus: user.subscriptionStatus,
        subscriptionEndDate: user.subscriptionEndDate,
      },
      token,
    };
  }

  private readonly profileSelect = {
    id: true,
    name: true,
    email: true,
    role: true,
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
  } as const;

  async getProfile(userId: number) {
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
      updateData.skills = Array.isArray(data.skills) ? data.skills : [];
    }
    if ("jobStatus" in data) {
      updateData.jobStatus = data.jobStatus || null;
    }
    if ("projects" in data) {
      updateData.projects = Array.isArray(data.projects) ? data.projects : [];
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
    badgeService.checkAndAwardBadges(userId, "profile_complete").catch(() => {});

    if (user.resumes.length > 0) {
      (user as Record<string, unknown>).resumes = await signUrls(user.resumes);
    }

    return user;
  }

  async getPublicProfile(userId: number) {
    const user = await prisma.user.findUnique({
      where: { id: userId, role: "STUDENT", isProfilePublic: true },
      select: {
        ...this.profileSelect,
        verifiedSkills: {
          select: { skillName: true, score: true, verifiedAt: true },
        },
        atsScores: {
          select: { overallScore: true },
          orderBy: { overallScore: "desc" },
          take: 1,
        },
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const { atsScores, ...rest } = user;
    if (rest.resumes.length > 0) {
      (rest as Record<string, unknown>).resumes = await signUrls(rest.resumes);
    }
    return {
      ...rest,
      bestAtsScore: atsScores[0]?.overallScore ?? null,
    };
  }

  async verifyEmail(email: string, otp: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new Error("User not found");
    }

    if (user.isVerified) {
      throw new Error("Email is already verified");
    }

    if (!user.verificationOtp || !user.otpExpiresAt) {
      throw new Error("No verification code found. Please request a new one");
    }

    if (new Date() > user.otpExpiresAt) {
      throw new Error("Verification code has expired. Please request a new one");
    }

    const isValid = await comparePassword(otp, user.verificationOtp);
    if (!isValid) {
      throw new Error("Invalid verification code");
    }

    const updated = await prisma.user.update({
      where: { id: user.id },
      data: {
        isVerified: true,
        verificationOtp: null,
        otpExpiresAt: null,
      },
      select: {
        id: true,
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
      },
    });

    // Send welcome email (fire-and-forget)
    sendEmail({
      to: user.email,
      subject: "Welcome to InternHack!",
      html: welcomeEmailHtml(user.name),
    }).catch((err) => console.error("Failed to send welcome email:", err));

    const token = generateToken({ id: updated.id, email: updated.email, role: updated.role });

    return { user: updated, token };
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
      data: { verificationOtp: hashedOtp, otpExpiresAt },
    });

    await sendEmail({
      to: user.email,
      subject: "Verify your InternHack account",
      html: otpEmailHtml(user.name, otp),
    });
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

    await prisma.user.update({
      where: { id: user.id },
      data: { resetPasswordOtp: hashedOtp, resetOtpExpiresAt },
    });

    await sendEmail({
      to: user.email,
      subject: "Reset your InternHack password",
      html: resetPasswordEmailHtml(user.name, otp),
    });
  }

  async resetPassword(email: string, otp: string, newPassword: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new Error("Invalid or expired reset code");
    }

    if (!user.resetPasswordOtp || !user.resetOtpExpiresAt) {
      throw new Error("No reset code found. Please request a new one");
    }

    if (new Date() > user.resetOtpExpiresAt) {
      throw new Error("Reset code has expired. Please request a new one");
    }

    const isValid = await comparePassword(otp, user.resetPasswordOtp);
    if (!isValid) {
      throw new Error("Invalid or expired reset code");
    }

    const hashedPassword = await hashPassword(newPassword);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetPasswordOtp: null,
        resetOtpExpiresAt: null,
      },
    });
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
}
