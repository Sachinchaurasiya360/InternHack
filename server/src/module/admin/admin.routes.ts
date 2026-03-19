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

// Error logs
adminRouter.get("/error-logs", (req, res) => adminController.getErrorLogs(req, res));

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

// Open Source Repos
adminRouter.get("/repos", (req, res, next) => adminController.listRepos(req, res, next));
adminRouter.get("/repos/:id", (req, res, next) => adminController.getRepo(req, res, next));
adminRouter.post("/repos", (req, res, next) => adminController.createRepo(req, res, next));
adminRouter.put("/repos/:id", (req, res, next) => adminController.updateRepo(req, res, next));
adminRouter.delete("/repos/:id", (req, res, next) => adminController.deleteRepo(req, res, next));

// DSA Management
adminRouter.get("/dsa/topics", (req, res, next) => adminController.listDsaTopics(req, res, next));
adminRouter.get("/dsa/topics/:id", (req, res, next) => adminController.getDsaTopic(req, res, next));
adminRouter.post("/dsa/topics", (req, res, next) => adminController.createDsaTopic(req, res, next));
adminRouter.put("/dsa/topics/:id", (req, res, next) => adminController.updateDsaTopic(req, res, next));
adminRouter.delete("/dsa/topics/:id", (req, res, next) => adminController.deleteDsaTopic(req, res, next));
adminRouter.post("/dsa/problems", (req, res, next) => adminController.createDsaProblem(req, res, next));
adminRouter.put("/dsa/problems/:id", (req, res, next) => adminController.updateDsaProblem(req, res, next));
adminRouter.delete("/dsa/problems/:id", (req, res, next) => adminController.deleteDsaProblem(req, res, next));

// Aptitude Management
adminRouter.get("/aptitude/categories", (req, res, next) => adminController.listAptitudeCategories(req, res, next));
adminRouter.get("/aptitude/categories/:id", (req, res, next) => adminController.getAptitudeCategory(req, res, next));
adminRouter.post("/aptitude/categories", (req, res, next) => adminController.createAptitudeCategory(req, res, next));
adminRouter.put("/aptitude/categories/:id", (req, res, next) => adminController.updateAptitudeCategory(req, res, next));
adminRouter.delete("/aptitude/categories/:id", (req, res, next) => adminController.deleteAptitudeCategory(req, res, next));
adminRouter.post("/aptitude/topics", (req, res, next) => adminController.createAptitudeTopic(req, res, next));
adminRouter.put("/aptitude/topics/:id", (req, res, next) => adminController.updateAptitudeTopic(req, res, next));
adminRouter.delete("/aptitude/topics/:id", (req, res, next) => adminController.deleteAptitudeTopic(req, res, next));
adminRouter.get("/aptitude/questions", (req, res, next) => adminController.listAptitudeQuestions(req, res, next));
adminRouter.post("/aptitude/questions", (req, res, next) => adminController.createAptitudeQuestion(req, res, next));
adminRouter.put("/aptitude/questions/:id", (req, res, next) => adminController.updateAptitudeQuestion(req, res, next));
adminRouter.delete("/aptitude/questions/:id", (req, res, next) => adminController.deleteAptitudeQuestion(req, res, next));

// Skill Test Management
adminRouter.get("/skill-tests", (req, res, next) => adminController.listAdminSkillTests(req, res, next));
adminRouter.get("/skill-tests/:id", (req, res, next) => adminController.getAdminSkillTest(req, res, next));
adminRouter.post("/skill-tests", (req, res, next) => adminController.createAdminSkillTest(req, res, next));
adminRouter.put("/skill-tests/:id", (req, res, next) => adminController.updateAdminSkillTest(req, res, next));
adminRouter.delete("/skill-tests/:id", (req, res, next) => adminController.deleteAdminSkillTest(req, res, next));
adminRouter.patch("/skill-tests/:id/toggle", (req, res, next) => adminController.toggleSkillTestActive(req, res, next));

// Hackathon Management
adminRouter.get("/hackathons", (req, res, next) => adminController.listHackathons(req, res, next));
adminRouter.get("/hackathons/:id", (req, res, next) => adminController.getHackathon(req, res, next));
adminRouter.post("/hackathons", (req, res, next) => adminController.createHackathon(req, res, next));
adminRouter.put("/hackathons/:id", (req, res, next) => adminController.updateHackathon(req, res, next));
adminRouter.delete("/hackathons/:id", (req, res, next) => adminController.deleteHackathon(req, res, next));

// External Jobs (admin-posted)
adminRouter.get("/external-jobs", (req, res) => adminController.listExternalJobs(req, res));
adminRouter.post("/external-jobs", (req, res) => adminController.createExternalJob(req, res));
adminRouter.put("/external-jobs/:id", (req, res) => adminController.updateExternalJob(req, res));
adminRouter.delete("/external-jobs/:id", (req, res) => adminController.deleteExternalJob(req, res));

// AI Provider Management
adminRouter.get("/ai/config", (req, res, next) => adminController.getAIServiceConfigs(req, res, next));
adminRouter.put("/ai/switch", (req, res, next) => adminController.switchAIProvider(req, res, next));
adminRouter.get("/ai/stats", (req, res, next) => adminController.getAIRequestStats(req, res, next));
