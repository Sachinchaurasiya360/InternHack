import { Router } from "express";
import { AdminController } from "./admin.controller.js";
import { AdminService } from "./admin.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const adminService = new AdminService();
const adminController = new AdminController(adminService);

export const adminRouter = Router();

// Admin login (public - no auth required)
adminRouter.post("/login", (req, res) => adminController.login(req, res));

// All routes below require ADMIN role
adminRouter.use(authMiddleware, requireRole("ADMIN"));

// Platform dashboard
adminRouter.get("/platform-dashboard", (req, res) => adminController.getPlatformDashboard(req, res));

// User management
adminRouter.get("/users", (req, res) => adminController.getUsers(req, res));
adminRouter.get("/users/:id", (req, res) => adminController.getUserById(req, res));
adminRouter.patch("/users/:id/status", (req, res) => adminController.updateUserStatus(req, res));
adminRouter.delete("/users/:id", (req, res) => adminController.deleteUserById(req, res));

// Job management
adminRouter.get("/jobs", (req, res) => adminController.getAdminJobs(req, res));
adminRouter.patch("/jobs/:id/status", (req, res) => adminController.updateAdminJobStatus(req, res));
adminRouter.delete("/jobs/:id", (req, res) => adminController.deleteAdminJob(req, res));

// Activity logs
adminRouter.get("/activity-logs", (req, res) => adminController.getActivityLogs(req, res));

// Admin creation (SUPER_ADMIN only - enforced in service)
adminRouter.post("/admins", (req, res) => adminController.createNewAdmin(req, res));

// Company Dashboard (existing)
adminRouter.get("/dashboard", (req, res, next) => adminController.getDashboard(req, res, next));

// Companies
adminRouter.get("/companies", (req, res, next) => adminController.listCompanies(req, res, next));
adminRouter.post("/companies", (req, res, next) => adminController.createCompany(req, res, next));
adminRouter.put("/companies/:id", (req, res, next) => adminController.updateCompany(req, res, next));
adminRouter.put("/companies/:id/approve", (req, res, next) => adminController.approveCompany(req, res, next));
adminRouter.delete("/companies/:id", (req, res, next) => adminController.deleteCompany(req, res, next));

// Reviews
adminRouter.get("/reviews", (req, res, next) => adminController.listReviews(req, res, next));
adminRouter.put("/reviews/:id/status", (req, res, next) => adminController.updateReviewStatus(req, res, next));

// Contributions
adminRouter.get("/contributions", (req, res, next) => adminController.listContributions(req, res, next));
adminRouter.put("/contributions/:id/status", (req, res, next) => adminController.updateContributionStatus(req, res, next));

// Contacts
adminRouter.post("/companies/:id/contacts", (req, res, next) => adminController.addContact(req, res, next));
adminRouter.put("/contacts/:id", (req, res, next) => adminController.updateContact(req, res, next));
adminRouter.delete("/contacts/:id", (req, res, next) => adminController.deleteContact(req, res, next));

// Careers
adminRouter.get("/careers", (req, res, next) => adminController.listCareers(req, res, next));
adminRouter.get("/careers/:id", (req, res, next) => adminController.getCareer(req, res, next));
adminRouter.post("/careers", (req, res, next) => adminController.createCareer(req, res, next));
adminRouter.put("/careers/:id", (req, res, next) => adminController.updateCareer(req, res, next));
adminRouter.delete("/careers/:id", (req, res, next) => adminController.deleteCareer(req, res, next));

// Open Source Repos
adminRouter.get("/repos", (req, res, next) => adminController.listRepos(req, res, next));
adminRouter.get("/repos/:id", (req, res, next) => adminController.getRepo(req, res, next));
adminRouter.post("/repos", (req, res, next) => adminController.createRepo(req, res, next));
adminRouter.put("/repos/:id", (req, res, next) => adminController.updateRepo(req, res, next));
adminRouter.delete("/repos/:id", (req, res, next) => adminController.deleteRepo(req, res, next));
