import { Router } from "express";
import { RBACController } from "./rbac.controller.js";
import { RBACService } from "./rbac.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const rbacService = new RBACService();
const rbacController = new RBACController(rbacService);

export const rbacRouter = Router();

// All RBAC routes require ADMIN role
rbacRouter.use(authMiddleware, requireRole("ADMIN"));

rbacRouter.post("/roles", (req, res) => rbacController.createRole(req, res));
rbacRouter.get("/roles", (req, res) => rbacController.getRoles(req, res));
rbacRouter.get("/roles/:id", (req, res) => rbacController.getRoleById(req, res));
rbacRouter.put("/roles/:id", (req, res) => rbacController.updateRole(req, res));
rbacRouter.delete("/roles/:id", (req, res) => rbacController.deleteRole(req, res));
rbacRouter.get("/permissions", (req, res) => rbacController.getPermissions(req, res));
rbacRouter.post("/assign", (req, res) => rbacController.assignRole(req, res));
rbacRouter.delete("/revoke", (req, res) => rbacController.revokeRole(req, res));
rbacRouter.get("/users/:userId/permissions", (req, res) => rbacController.getUserPermissions(req, res));
