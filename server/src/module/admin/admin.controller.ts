import type { Request, Response, NextFunction } from "express";
import type { AdminService } from "./admin.service.js";
import { setTokenCookie } from "../../utils/cookie.utils.js";
import {
  adminLoginSchema,
  createAdminSchema,
  userQuerySchema,
  updateUserStatusSchema,
  adminJobQuerySchema,
  adminUpdateJobStatusSchema,
  activityLogQuerySchema,
  createCompanySchema,
  updateCompanySchema,
  updateReviewStatusSchema,
  updateContributionStatusSchema,
  addContactAdminSchema,
  updateContactSchema,
  createRepoSchema,
  updateRepoSchema,
  repoQuerySchema,
  dsaTopicQuerySchema,
  createDsaTopicSchema,
  updateDsaTopicSchema,
  createDsaProblemSchema,
  updateDsaProblemSchema,
  aptitudeCategoryQuerySchema,
  createAptitudeCategorySchema,
  updateAptitudeCategorySchema,
  createAptitudeTopicSchema,
  updateAptitudeTopicSchema,
  aptitudeQuestionQuerySchema,
  createAptitudeQuestionSchema,
  updateAptitudeQuestionSchema,
  adminSkillTestQuerySchema,
  createSkillTestAdminSchema,
  updateSkillTestAdminSchema,
  hackathonQuerySchema,
  createHackathonSchema,
  updateHackathonSchema,
  switchAIProviderSchema,
  errorLogQuerySchema,
  createAdminJobSchema,
  updateAdminJobSchema,
  adminExternalJobQuerySchema,
} from "./admin.validation.js";

export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // ==================== ADMIN AUTH ====================

  async login(req: Request, res: Response) {
    try {
      const result = adminLoginSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const data = await this.adminService.login(result.data.email, result.data.password);
      setTokenCookie(res, data.token);
      return res.status(200).json(data);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Invalid email or password") return res.status(401).json({ message: error.message });
        if (error.message === "Account is deactivated" || error.message === "Admin account is inactive") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async createNewAdmin(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const result = createAdminSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const data = await this.adminService.createAdmin(result.data, req.user.id);
      return res.status(201).json({ message: "Admin created successfully", ...data });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Only SUPER_ADMIN can create admins") return res.status(403).json({ message: error.message });
        if (error.message === "Email already registered") return res.status(409).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  // ==================== PLATFORM DASHBOARD ====================

  async getPlatformDashboard(req: Request, res: Response) {
    try {
      const data = await this.adminService.getPlatformDashboard();
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  // ==================== USER MANAGEMENT ====================

  async getUsers(req: Request, res: Response) {
    try {
      const query = userQuerySchema.parse(req.query);
      const data = await this.adminService.getUsers(query);
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid user ID" });

      const user = await this.adminService.getUserById(id);
      return res.status(200).json({ user });
    } catch (error) {
      if (error instanceof Error && error.message === "User not found") return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateUserStatus(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid user ID" });

      const result = updateUserStatusSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const user = await this.adminService.updateUserStatus(id, result.data.isActive, req.user.id, result.data.reason);
      return res.status(200).json({ message: `User ${result.data.isActive ? "activated" : "deactivated"}`, user });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "User not found") return res.status(404).json({ message: error.message });
        if (error.message === "Cannot modify your own status") return res.status(400).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async deleteUserById(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid user ID" });

      await this.adminService.deleteUser(id, req.user.id);
      return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "User not found") return res.status(404).json({ message: error.message });
        if (error.message === "Cannot delete yourself") return res.status(400).json({ message: error.message });
        if (error.message === "Only SUPER_ADMIN can delete admin users") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  // ==================== JOB MANAGEMENT ====================

  async getAdminJobs(req: Request, res: Response) {
    try {
      const query = adminJobQuerySchema.parse(req.query);
      const data = await this.adminService.getAdminJobs(query);
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateAdminJobStatus(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid job ID" });

      const result = adminUpdateJobStatusSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const job = await this.adminService.updateJobStatus(id, result.data.status, req.user.id, result.data.reason);
      return res.status(200).json({ message: "Job status updated", job });
    } catch (error) {
      if (error instanceof Error && error.message === "Job not found") return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async deleteAdminJob(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid job ID" });

      await this.adminService.deleteJob(id, req.user.id);
      return res.status(200).json({ message: "Job deleted successfully" });
    } catch (error) {
      if (error instanceof Error && error.message === "Job not found") return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  // ==================== ACTIVITY LOGS ====================

  async getActivityLogs(req: Request, res: Response) {
    try {
      const query = activityLogQuerySchema.parse(req.query);
      const data = await this.adminService.getActivityLogs(query);
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  // ==================== ERROR LOGS ====================

  async getErrorLogs(req: Request, res: Response) {
    try {
      const query = errorLogQuerySchema.parse(req.query);
      const data = await this.adminService.getErrorLogs(query);
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  // ==================== COMPANY DASHBOARD (existing) ====================

  async getDashboard(req: Request, res: Response, next: NextFunction) {
    try {
      const stats = await this.adminService.getDashboardStats();
      res.json(stats);
    } catch (err) {
      next(err);
    }
  }

  async listCompanies(req: Request, res: Response, next: NextFunction) {
    try {
      const page = parseInt(String(req.query["page"] || "1"), 10);
      const limit = parseInt(String(req.query["limit"] || "20"), 10);
      const data = await this.adminService.listAllCompanies(page, limit);
      res.json(data);
    } catch (err) {
      next(err);
    }
  }

  async createCompany(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }

      const result = createCompanySchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      const company = await this.adminService.createCompany(req.user.id, result.data);
      res.status(201).json({ message: "Company created", company });
    } catch (err) {
      next(err);
    }
  }

  async updateCompany(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid company ID" }); return; }

      const result = updateCompanySchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      const company = await this.adminService.updateCompany(id, result.data as Parameters<typeof this.adminService.updateCompany>[1]);
      res.json({ message: "Company updated", company });
    } catch (err) {
      if (err instanceof Error && err.message === "Company not found") {
        res.status(404).json({ message: err.message }); return;
      }
      next(err);
    }
  }

  async approveCompany(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid company ID" }); return; }

      const company = await this.adminService.approveCompany(id);
      res.json({ message: "Company approved", company });
    } catch (err) {
      if (err instanceof Error && err.message === "Company not found") {
        res.status(404).json({ message: err.message }); return;
      }
      next(err);
    }
  }

  async deleteCompany(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid company ID" }); return; }

      await this.adminService.deleteCompany(id);
      res.json({ message: "Company deleted" });
    } catch (err) {
      if (err instanceof Error && err.message === "Company not found") {
        res.status(404).json({ message: err.message }); return;
      }
      next(err);
    }
  }

  // Reviews
  async listReviews(req: Request, res: Response, next: NextFunction) {
    try {
      const status = req.query["status"] as string | undefined;
      const page = parseInt(String(req.query["page"] || "1"), 10);
      const limit = parseInt(String(req.query["limit"] || "20"), 10);
      const data = await this.adminService.listAllReviews(status, page, limit);
      res.json(data);
    } catch (err) {
      next(err);
    }
  }

  async updateReviewStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid review ID" }); return; }

      const result = updateReviewStatusSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      const review = await this.adminService.updateReviewStatus(id, result.data.status);
      res.json({ message: `Review ${result.data.status.toLowerCase()}`, review });
    } catch (err) {
      if (err instanceof Error && err.message === "Review not found") {
        res.status(404).json({ message: err.message }); return;
      }
      next(err);
    }
  }

  // Contributions
  async listContributions(req: Request, res: Response, next: NextFunction) {
    try {
      const status = req.query["status"] as string | undefined;
      const page = parseInt(String(req.query["page"] || "1"), 10);
      const limit = parseInt(String(req.query["limit"] || "20"), 10);
      const data = await this.adminService.listContributions(status, page, limit);
      res.json(data);
    } catch (err) {
      next(err);
    }
  }

  async updateContributionStatus(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }

      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid contribution ID" }); return; }

      const result = updateContributionStatusSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      const contribution = await this.adminService.updateContributionStatus(id, req.user.id, result.data.status, result.data.adminNotes);
      res.json({ message: `Contribution ${result.data.status.toLowerCase()}`, contribution });
    } catch (err) {
      if (err instanceof Error && err.message === "Contribution not found") {
        res.status(404).json({ message: err.message }); return;
      }
      next(err);
    }
  }

  // Contacts
  async addContact(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }

      const companyId = parseInt(String(req.params["id"]), 10);
      if (isNaN(companyId)) { res.status(400).json({ message: "Invalid company ID" }); return; }

      const result = addContactAdminSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      const contact = await this.adminService.addContact(companyId, req.user.id, result.data);
      res.status(201).json({ message: "Contact added", contact });
    } catch (err) {
      if (err instanceof Error && err.message === "Company not found") {
        res.status(404).json({ message: err.message }); return;
      }
      next(err);
    }
  }

  async updateContact(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid contact ID" }); return; }

      const result = updateContactSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      const contact = await this.adminService.updateContact(id, result.data);
      res.json({ message: "Contact updated", contact });
    } catch (err) {
      if (err instanceof Error && err.message === "Contact not found") {
        res.status(404).json({ message: err.message }); return;
      }
      next(err);
    }
  }

  async deleteContact(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid contact ID" }); return; }

      await this.adminService.deleteContact(id);
      res.json({ message: "Contact deleted" });
    } catch (err) {
      if (err instanceof Error && err.message === "Contact not found") {
        res.status(404).json({ message: err.message }); return;
      }
      next(err);
    }
  }

  // ==================== OPEN SOURCE REPO MANAGEMENT ====================

  async listRepos(req: Request, res: Response, next: NextFunction) {
    try {
      const query = repoQuerySchema.parse(req.query);
      const data = await this.adminService.listRepos(query);
      res.json(data);
    } catch (err) {
      next(err);
    }
  }

  async getRepo(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid repo ID" }); return; }

      const repo = await this.adminService.getRepo(id);
      res.json({ repo });
    } catch (err) {
      if (err instanceof Error && err.message === "Repository not found") {
        res.status(404).json({ message: err.message }); return;
      }
      next(err);
    }
  }

  async createRepo(req: Request, res: Response, next: NextFunction) {
    try {
      const result = createRepoSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      const repo = await this.adminService.createRepo(result.data);
      res.status(201).json({ message: "Repository created", repo });
    } catch (err) {
      next(err);
    }
  }

  async updateRepo(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid repo ID" }); return; }

      const result = updateRepoSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      const repo = await this.adminService.updateRepo(id, result.data);
      res.json({ message: "Repository updated", repo });
    } catch (err) {
      if (err instanceof Error && err.message === "Repository not found") {
        res.status(404).json({ message: err.message }); return;
      }
      next(err);
    }
  }

  async deleteRepo(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid repo ID" }); return; }

      await this.adminService.deleteRepo(id);
      res.json({ message: "Repository deleted" });
    } catch (err) {
      if (err instanceof Error && err.message === "Repository not found") {
        res.status(404).json({ message: err.message }); return;
      }
      next(err);
    }
  }

  // ==================== DSA MANAGEMENT ====================

  async listDsaTopics(req: Request, res: Response, next: NextFunction) {
    try {
      const query = dsaTopicQuerySchema.parse(req.query);
      const data = await this.adminService.listDsaTopics(query);
      res.json(data);
    } catch (err) { next(err); }
  }

  async getDsaTopic(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid topic ID" }); return; }
      const topic = await this.adminService.getDsaTopic(id);
      res.json({ topic });
    } catch (err) {
      if (err instanceof Error && err.message === "DSA topic not found") { res.status(404).json({ message: err.message }); return; }
      next(err);
    }
  }

  async createDsaTopic(req: Request, res: Response, next: NextFunction) {
    try {
      const result = createDsaTopicSchema.safeParse(req.body);
      if (!result.success) { res.status(400).json({ message: "Validation failed", errors: result.error.flatten() }); return; }
      const topic = await this.adminService.createDsaTopic(result.data);
      res.status(201).json({ message: "DSA topic created", topic });
    } catch (err) { next(err); }
  }

  async updateDsaTopic(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid topic ID" }); return; }
      const result = updateDsaTopicSchema.safeParse(req.body);
      if (!result.success) { res.status(400).json({ message: "Validation failed", errors: result.error.flatten() }); return; }
      const topic = await this.adminService.updateDsaTopic(id, result.data as Parameters<typeof this.adminService.updateDsaTopic>[1]);
      res.json({ message: "DSA topic updated", topic });
    } catch (err) {
      if (err instanceof Error && err.message === "DSA topic not found") { res.status(404).json({ message: err.message }); return; }
      next(err);
    }
  }

  async deleteDsaTopic(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid topic ID" }); return; }
      await this.adminService.deleteDsaTopic(id);
      res.json({ message: "DSA topic deleted" });
    } catch (err) {
      if (err instanceof Error && err.message === "DSA topic not found") { res.status(404).json({ message: err.message }); return; }
      next(err);
    }
  }

  async createDsaProblem(req: Request, res: Response, next: NextFunction) {
    try {
      const result = createDsaProblemSchema.safeParse(req.body);
      if (!result.success) { res.status(400).json({ message: "Validation failed", errors: result.error.flatten() }); return; }
      const problem = await this.adminService.createDsaProblem(result.data);
      res.status(201).json({ message: "DSA problem created", problem });
    } catch (err) { next(err); }
  }

  async updateDsaProblem(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid problem ID" }); return; }
      const result = updateDsaProblemSchema.safeParse(req.body);
      if (!result.success) { res.status(400).json({ message: "Validation failed", errors: result.error.flatten() }); return; }
      const problem = await this.adminService.updateDsaProblem(id, result.data);
      res.json({ message: "DSA problem updated", problem });
    } catch (err) {
      if (err instanceof Error && err.message === "DSA problem not found") { res.status(404).json({ message: err.message }); return; }
      next(err);
    }
  }

  async deleteDsaProblem(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid problem ID" }); return; }
      await this.adminService.deleteDsaProblem(id);
      res.json({ message: "DSA problem deleted" });
    } catch (err) {
      if (err instanceof Error && err.message === "DSA problem not found") { res.status(404).json({ message: err.message }); return; }
      next(err);
    }
  }

  // ==================== APTITUDE MANAGEMENT ====================

  async listAptitudeCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const query = aptitudeCategoryQuerySchema.parse(req.query);
      const data = await this.adminService.listAptitudeCategories(query);
      res.json(data);
    } catch (err) { next(err); }
  }

  async getAptitudeCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid category ID" }); return; }
      const category = await this.adminService.getAptitudeCategory(id);
      res.json({ category });
    } catch (err) {
      if (err instanceof Error && err.message === "Aptitude category not found") { res.status(404).json({ message: err.message }); return; }
      next(err);
    }
  }

  async createAptitudeCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const result = createAptitudeCategorySchema.safeParse(req.body);
      if (!result.success) { res.status(400).json({ message: "Validation failed", errors: result.error.flatten() }); return; }
      const category = await this.adminService.createAptitudeCategory(result.data);
      res.status(201).json({ message: "Category created", category });
    } catch (err) { next(err); }
  }

  async updateAptitudeCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid category ID" }); return; }
      const result = updateAptitudeCategorySchema.safeParse(req.body);
      if (!result.success) { res.status(400).json({ message: "Validation failed", errors: result.error.flatten() }); return; }
      const category = await this.adminService.updateAptitudeCategory(id, result.data);
      res.json({ message: "Category updated", category });
    } catch (err) {
      if (err instanceof Error && err.message === "Aptitude category not found") { res.status(404).json({ message: err.message }); return; }
      next(err);
    }
  }

  async deleteAptitudeCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid category ID" }); return; }
      await this.adminService.deleteAptitudeCategory(id);
      res.json({ message: "Category deleted" });
    } catch (err) {
      if (err instanceof Error && err.message === "Aptitude category not found") { res.status(404).json({ message: err.message }); return; }
      next(err);
    }
  }

  async createAptitudeTopic(req: Request, res: Response, next: NextFunction) {
    try {
      const result = createAptitudeTopicSchema.safeParse(req.body);
      if (!result.success) { res.status(400).json({ message: "Validation failed", errors: result.error.flatten() }); return; }
      const topic = await this.adminService.createAptitudeTopic(result.data);
      res.status(201).json({ message: "Topic created", topic });
    } catch (err) { next(err); }
  }

  async updateAptitudeTopic(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid topic ID" }); return; }
      const result = updateAptitudeTopicSchema.safeParse(req.body);
      if (!result.success) { res.status(400).json({ message: "Validation failed", errors: result.error.flatten() }); return; }
      const topic = await this.adminService.updateAptitudeTopic(id, result.data);
      res.json({ message: "Topic updated", topic });
    } catch (err) {
      if (err instanceof Error && err.message === "Aptitude topic not found") { res.status(404).json({ message: err.message }); return; }
      next(err);
    }
  }

  async deleteAptitudeTopic(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid topic ID" }); return; }
      await this.adminService.deleteAptitudeTopic(id);
      res.json({ message: "Topic deleted" });
    } catch (err) {
      if (err instanceof Error && err.message === "Aptitude topic not found") { res.status(404).json({ message: err.message }); return; }
      next(err);
    }
  }

  async listAptitudeQuestions(req: Request, res: Response, next: NextFunction) {
    try {
      const query = aptitudeQuestionQuerySchema.parse(req.query);
      const data = await this.adminService.listAptitudeQuestions(query);
      res.json(data);
    } catch (err) { next(err); }
  }

  async createAptitudeQuestion(req: Request, res: Response, next: NextFunction) {
    try {
      const result = createAptitudeQuestionSchema.safeParse(req.body);
      if (!result.success) { res.status(400).json({ message: "Validation failed", errors: result.error.flatten() }); return; }
      const question = await this.adminService.createAptitudeQuestion(result.data);
      res.status(201).json({ message: "Question created", question });
    } catch (err) { next(err); }
  }

  async updateAptitudeQuestion(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid question ID" }); return; }
      const result = updateAptitudeQuestionSchema.safeParse(req.body);
      if (!result.success) { res.status(400).json({ message: "Validation failed", errors: result.error.flatten() }); return; }
      const question = await this.adminService.updateAptitudeQuestion(id, result.data);
      res.json({ message: "Question updated", question });
    } catch (err) {
      if (err instanceof Error && err.message === "Aptitude question not found") { res.status(404).json({ message: err.message }); return; }
      next(err);
    }
  }

  async deleteAptitudeQuestion(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid question ID" }); return; }
      await this.adminService.deleteAptitudeQuestion(id);
      res.json({ message: "Question deleted" });
    } catch (err) {
      if (err instanceof Error && err.message === "Aptitude question not found") { res.status(404).json({ message: err.message }); return; }
      next(err);
    }
  }

  // ==================== SKILL TEST MANAGEMENT ====================

  async listAdminSkillTests(req: Request, res: Response, next: NextFunction) {
    try {
      const query = adminSkillTestQuerySchema.parse(req.query);
      const data = await this.adminService.listAdminSkillTests(query);
      res.json(data);
    } catch (err) { next(err); }
  }

  async getAdminSkillTest(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid test ID" }); return; }
      const test = await this.adminService.getAdminSkillTest(id);
      res.json({ test });
    } catch (err) {
      if (err instanceof Error && err.message === "Skill test not found") { res.status(404).json({ message: err.message }); return; }
      next(err);
    }
  }

  async createAdminSkillTest(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const result = createSkillTestAdminSchema.safeParse(req.body);
      if (!result.success) { res.status(400).json({ message: "Validation failed", errors: result.error.flatten() }); return; }
      const test = await this.adminService.createAdminSkillTest(result.data, req.user.id);
      res.status(201).json({ message: "Skill test created", test });
    } catch (err) { next(err); }
  }

  async updateAdminSkillTest(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid test ID" }); return; }
      const result = updateSkillTestAdminSchema.safeParse(req.body);
      if (!result.success) { res.status(400).json({ message: "Validation failed", errors: result.error.flatten() }); return; }
      const test = await this.adminService.updateAdminSkillTest(id, result.data as Parameters<typeof this.adminService.updateAdminSkillTest>[1]);
      res.json({ message: "Skill test updated", test });
    } catch (err) {
      if (err instanceof Error && err.message === "Skill test not found") { res.status(404).json({ message: err.message }); return; }
      next(err);
    }
  }

  async deleteAdminSkillTest(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid test ID" }); return; }
      await this.adminService.deleteAdminSkillTest(id);
      res.json({ message: "Skill test deleted" });
    } catch (err) {
      if (err instanceof Error && err.message === "Skill test not found") { res.status(404).json({ message: err.message }); return; }
      next(err);
    }
  }

  async toggleSkillTestActive(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid test ID" }); return; }
      const { isActive } = req.body;
      if (typeof isActive !== "boolean") { res.status(400).json({ message: "isActive is required" }); return; }
      const test = await this.adminService.toggleSkillTestActive(id, isActive);
      res.json({ message: `Skill test ${isActive ? "activated" : "deactivated"}`, test });
    } catch (err) {
      if (err instanceof Error && err.message === "Skill test not found") { res.status(404).json({ message: err.message }); return; }
      next(err);
    }
  }

  // ==================== HACKATHON MANAGEMENT ====================

  async listHackathons(req: Request, res: Response, next: NextFunction) {
    try {
      const query = hackathonQuerySchema.parse(req.query);
      const data = await this.adminService.listHackathons(query);
      res.json(data);
    } catch (err) { next(err); }
  }

  async getHackathon(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid hackathon ID" }); return; }
      const hackathon = await this.adminService.getHackathon(id);
      res.json({ hackathon });
    } catch (err) {
      if (err instanceof Error && err.message === "Hackathon not found") { res.status(404).json({ message: err.message }); return; }
      next(err);
    }
  }

  async createHackathon(req: Request, res: Response, next: NextFunction) {
    try {
      const result = createHackathonSchema.safeParse(req.body);
      if (!result.success) { res.status(400).json({ message: "Validation failed", errors: result.error.flatten() }); return; }
      const hackathon = await this.adminService.createHackathon(result.data);
      res.status(201).json({ message: "Hackathon created", hackathon });
    } catch (err) { next(err); }
  }

  async updateHackathon(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid hackathon ID" }); return; }
      const result = updateHackathonSchema.safeParse(req.body);
      if (!result.success) { res.status(400).json({ message: "Validation failed", errors: result.error.flatten() }); return; }
      const hackathon = await this.adminService.updateHackathon(id, result.data);
      res.json({ message: "Hackathon updated", hackathon });
    } catch (err) {
      if (err instanceof Error && err.message === "Hackathon not found") { res.status(404).json({ message: err.message }); return; }
      next(err);
    }
  }

  async deleteHackathon(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) { res.status(400).json({ message: "Invalid hackathon ID" }); return; }
      await this.adminService.deleteHackathon(id);
      res.json({ message: "Hackathon deleted" });
    } catch (err) {
      if (err instanceof Error && err.message === "Hackathon not found") { res.status(404).json({ message: err.message }); return; }
      next(err);
    }
  }

  // ==================== AI PROVIDER MANAGEMENT ====================

  async getAIServiceConfigs(_req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.adminService.getAIServiceConfigs();
      res.json(data);
    } catch (err) {
      next(err);
    }
  }

  async switchAIProvider(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const result = switchAIProviderSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }
      const config = await this.adminService.switchAIServiceProvider(
        result.data.service,
        result.data.provider,
        result.data.modelName,
        req.user.id,
      );
      res.json({ message: "AI provider switched", config });
    } catch (err) {
      next(err);
    }
  }

  async getAIRequestStats(req: Request, res: Response, next: NextFunction) {
    try {
      const range = (req.query["range"] as string) || "day";
      if (!["day", "week", "month"].includes(range)) {
        res.status(400).json({ message: "range must be day, week, or month" });
        return;
      }
      const data = await this.adminService.getAIRequestStats(range as "day" | "week" | "month");
      res.json(data);
    } catch (err) {
      next(err);
    }
  }

  // ==================== ADMIN EXTERNAL JOBS ====================

  async createExternalJob(req: Request, res: Response) {
    try {
      const result = createAdminJobSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
      const job = await this.adminService.createExternalJob(result.data);
      return res.status(201).json({ message: "External job created", job });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async listExternalJobs(req: Request, res: Response) {
    try {
      const query = adminExternalJobQuerySchema.parse(req.query);
      const data = await this.adminService.listExternalJobs(query);
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateExternalJob(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid job ID" });
      const result = updateAdminJobSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
      const job = await this.adminService.updateExternalJob(id, result.data);
      return res.status(200).json({ message: "External job updated", job });
    } catch (error) {
      if (error instanceof Error && error.message === "Job not found") return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async deleteExternalJob(req: Request, res: Response) {
    try {
      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid job ID" });
      await this.adminService.deleteExternalJob(id);
      return res.status(200).json({ message: "External job deleted" });
    } catch (error) {
      if (error instanceof Error && error.message === "Job not found") return res.status(404).json({ message: error.message });
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getPublicExternalJobs(req: Request, res: Response) {
    try {
      const query = adminExternalJobQuerySchema.parse(req.query);
      const data = await this.adminService.getPublicExternalJobs(query);
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getPublicExternalJobBySlug(req: Request, res: Response) {
    try {
      const slug = req.params["slug"];
      if (!slug) return res.status(400).json({ message: "Slug is required" });

      const job = await this.adminService.getPublicExternalJobBySlug(slug);
      if (!job) return res.status(404).json({ message: "Job not found or expired" });

      return res.status(200).json({ job });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
