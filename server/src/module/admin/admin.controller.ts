import type { Request, Response, NextFunction } from "express";
import type { AdminService } from "./admin.service.js";
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
} from "./admin.validation.js";

export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // ==================== ADMIN AUTH ====================

  async login(req: Request, res: Response) {
    try {
      const result = adminLoginSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const data = await this.adminService.login(result.data.email, result.data.password);
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
}
