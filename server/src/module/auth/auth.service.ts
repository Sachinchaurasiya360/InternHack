import crypto from "crypto";
import { OAuth2Client } from "google-auth-library";
import { prisma } from "../../database/db.js";
import { hashPassword, comparePassword } from "../../utils/password.utils.js";
import { generateToken } from "../../utils/jwt.utils.js";
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
        createdAt: true,
      },
    });

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
      // New user - create account
      const randomPassword = crypto.randomBytes(32).toString("hex");
      const hashedPassword = await hashPassword(randomPassword);

      user = await prisma.user.create({
        data: {
          name: name ?? email.split("@")[0] ?? "User",
          email,
          password: hashedPassword,
          role: data.role ?? "STUDENT",
          profilePic: picture ?? null,
        },
      });
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
        createdAt: user.createdAt,
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

    const token = generateToken({ id: user.id, email: user.email, role: user.role });

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        company: user.company,
        designation: user.designation,
        createdAt: user.createdAt,
      },
      token,
    };
  }

  private readonly profileSelect = {
    id: true,
    name: true,
    email: true,
    role: true,
    contactNo: true,
    profilePic: true,
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
    createdAt: true,
  } as const;

  async getProfile(userId: number) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: this.profileSelect,
    });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  async updateProfile(userId: number, data: UpdateProfileInput) {
    const updateData: Record<string, unknown> = {};

    if (data.name && data.name.trim()) updateData.name = data.name.trim();
    for (const key of ["contactNo", "company", "designation", "bio", "college", "location", "linkedinUrl", "githubUrl", "portfolioUrl"] as const) {
      if (key in data) updateData[key] = (data[key] as string)?.trim() || null;
    }
    if ("graduationYear" in data) {
      updateData.graduationYear = data.graduationYear ? Number(data.graduationYear) : null;
    }
    if ("skills" in data) {
      updateData.skills = Array.isArray(data.skills) ? data.skills : [];
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: this.profileSelect,
    });

    return user;
  }
}
