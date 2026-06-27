import { prisma } from "../../database/db.js";
import { invalidatePermissionCache } from "../../middleware/permission.middleware.js";

interface CreateRoleData {
  name: string;
  description?: string | undefined;
  permissions: string[];
}

interface UpdateRoleData {
  name?: string | undefined;
  description?: string | undefined;
  permissions?: string[] | undefined;
}

export class RBACService {
  async createRole(data: CreateRoleData) {
    return prisma.customRole.create({
      data: {
        name: data.name,
        description: data.description ?? null,
        permissions: data.permissions,
      },
    });
  }

  async getRoles() {
    return prisma.customRole.findMany({
      include: { _count: { select: { userRoles: true } } },
      orderBy: { name: "asc" },
    });
  }

  async getRoleById(id: number) {
    const role = await prisma.customRole.findUnique({
      where: { id },
      include: {
        userRoles: {
          include: { user: { select: { id: true, name: true, email: true, role: true } } },
        },
      },
    });
    if (!role) throw new Error("Role not found");
    return role;
  }

  async updateRole(id: number, data: UpdateRoleData) {
    const role = await prisma.customRole.findUnique({ where: { id } });
    if (!role) throw new Error("Role not found");
    if (role.isSystem) throw new Error("Cannot modify system role");

    const updateData: Record<string, unknown> = {};
    if (data.name !== undefined) updateData.name = data.name;
    if (data.description !== undefined) updateData.description = data.description;
    if (data.permissions !== undefined) updateData.permissions = data.permissions;

    const updated = await prisma.customRole.update({ where: { id }, data: updateData });

    // Invalidate caches for all users with this role
    if (data.permissions) {
      const userRoles = await prisma.userCustomRole.findMany({ where: { roleId: id } });
      for (const ur of userRoles) invalidatePermissionCache(ur.userId);
    }

    return updated;
  }

  async deleteRole(id: number) {
    const role = await prisma.customRole.findUnique({ where: { id } });
    if (!role) throw new Error("Role not found");
    if (role.isSystem) throw new Error("Cannot delete system role");

    // Invalidate caches for affected users
    const userRoles = await prisma.userCustomRole.findMany({ where: { roleId: id } });
    for (const ur of userRoles) invalidatePermissionCache(ur.userId);

    await prisma.customRole.delete({ where: { id } });
  }

  async assignRole(userId: number, roleId: number) {
    const [user, role] = await Promise.all([
      prisma.user.findUnique({ where: { id: userId } }),
      prisma.customRole.findUnique({ where: { id: roleId } }),
    ]);
    if (!user) throw new Error("User not found");
    if (!role) throw new Error("Role not found");

    const result = await prisma.userCustomRole.create({
      data: { userId, roleId },
    });

    invalidatePermissionCache(userId);
    return result;
  }

  async revokeRole(userId: number, roleId: number) {
    const assignment = await prisma.userCustomRole.findUnique({
      where: { userId_roleId: { userId, roleId } },
    });
    if (!assignment) throw new Error("Role assignment not found");

    await prisma.userCustomRole.delete({
      where: { userId_roleId: { userId, roleId } },
    });

    invalidatePermissionCache(userId);
  }

  async getUserPermissions(userId: number) {
    const userRoles = await prisma.userCustomRole.findMany({
      where: { userId },
      include: { role: { select: { name: true, permissions: true } } },
    });

    const roles = userRoles.map((ur) => ur.role);
    const permissions = [...new Set(roles.flatMap((r) => r.permissions))];
    return { roles, permissions };
  }
}
