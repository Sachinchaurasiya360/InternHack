import { prisma } from "../../database/db.js";
import { hashPassword, comparePassword } from "../../utils/password.utils.js";
import { generateToken } from "../../utils/jwt.utils.js";
import { invalidateVersionCache } from "../../middleware/auth.middleware.js";
import type { AdminTier } from "@prisma/client";

export class AdminAuthService {
  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error("Invalid email or password");
    if (user.role !== "ADMIN") throw new Error("Invalid email or password");
    if (!user.isActive) throw new Error("Account is deactivated");

    const isValid = await comparePassword(password, user.password);
    if (!isValid) throw new Error("Invalid email or password");

    const adminProfile = await prisma.adminProfile.findUnique({
      where: { userId: user.id },
    });
    if (!adminProfile || !adminProfile.isActive)
      throw new Error("Admin account is inactive");

    // Increment tokenVersion to invalidate all previous sessions (single-device enforcement)
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { tokenVersion: { increment: 1 } },
      select: { tokenVersion: true },
    });
    invalidateVersionCache(user.id);

    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
      tokenVersion: updatedUser.tokenVersion,
    });

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        isVerified: true,
        company: user.company,
        designation: user.designation,
      },
      adminProfile: { tier: adminProfile.tier },
      token,
    };
  }

  async createAdmin(
    data: { name: string; email: string; password: string; tier: AdminTier },
    creatorId: number,
  ) {
    const creatorProfile = await prisma.adminProfile.findUnique({
      where: { userId: creatorId },
    });
    if (!creatorProfile || creatorProfile.tier !== "SUPER_ADMIN")
      throw new Error("Only SUPER_ADMIN can create admins");

    const existing = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (existing) throw new Error("Email already registered");

    const hashedPassword = await hashPassword(data.password);

    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        role: "ADMIN",
      },
    });

    const adminProfile = await prisma.adminProfile.create({
      data: { userId: user.id, tier: data.tier },
    });

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      adminProfile: { tier: adminProfile.tier },
    };
  }
}
