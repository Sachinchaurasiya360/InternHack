import type { Request, Response } from "express";
import type { RBACService } from "./rbac.service.js";
import {
  createRoleSchema,
  updateRoleSchema,
  assignRoleSchema,
  revokeRoleSchema,
  HR_PERMISSIONS,
} from "./rbac.validation.js";

export class RBACController {
  constructor(private readonly rbacService: RBACService) {}

  async createRole(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const result = createRoleSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const role = await this.rbacService.createRole(result.data);
      return res.status(201).json({ message: "Role created successfully", role });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("Unique constraint")) return res.status(409).json({ message: "Role name already exists" });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getRoles(_req: Request, res: Response) {
    try {
      const roles = await this.rbacService.getRoles();
      return res.json({ roles });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getRoleById(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid role ID" });

      const role = await this.rbacService.getRoleById(id);
      return res.json({ role });
    } catch (error) {
      if (error instanceof Error && error.message === "Role not found") return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateRole(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid role ID" });

      const result = updateRoleSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const role = await this.rbacService.updateRole(id, result.data);
      return res.json({ message: "Role updated successfully", role });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Role not found") return res.status(404).json({ message: error.message });
        if (error.message === "Cannot modify system role") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async deleteRole(req: Request, res: Response) {
    try {
      const id = Number(req.params["id"]);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid role ID" });

      await this.rbacService.deleteRole(id);
      return res.json({ message: "Role deleted successfully" });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Role not found") return res.status(404).json({ message: error.message });
        if (error.message === "Cannot delete system role") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getPermissions(_req: Request, res: Response) {
    return res.json({ permissions: HR_PERMISSIONS });
  }

  async assignRole(req: Request, res: Response) {
    try {
      const result = assignRoleSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const assignment = await this.rbacService.assignRole(result.data.userId, result.data.roleId);
      return res.status(201).json({ message: "Role assigned successfully", assignment });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "User not found" || error.message === "Role not found") return res.status(404).json({ message: error.message });
        if (error.message.includes("Unique constraint")) return res.status(409).json({ message: "Role already assigned to user" });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async revokeRole(req: Request, res: Response) {
    try {
      const result = revokeRoleSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      await this.rbacService.revokeRole(result.data.userId, result.data.roleId);
      return res.json({ message: "Role revoked successfully" });
    } catch (error) {
      if (error instanceof Error && error.message === "Role assignment not found") return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getUserPermissions(req: Request, res: Response) {
    try {
      const userId = Number(req.params["userId"]);
      if (isNaN(userId)) return res.status(400).json({ message: "Invalid user ID" });

      const data = await this.rbacService.getUserPermissions(userId);
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
