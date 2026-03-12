import type { Request, Response } from "express";
import { CampusDriveService } from "./campus-drive.service.js";
import {
  createDriveSchema,
  updateDriveSchema,
  updateDriveStatusSchema,
  updateRegistrationStatusSchema,
} from "./campus-drive.validation.js";

export class CampusDriveController {
  constructor(private readonly campusDriveService: CampusDriveService) {}

  // ==================== RECRUITER METHODS ====================

  async createDrive(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const result = createDriveSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const drive = await this.campusDriveService.createDrive(req.user.id, result.data);
      return res.status(201).json({ message: "Campus drive created successfully", drive });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getMyDrives(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const page = Math.max(1, parseInt(String(req.query["page"]), 10) || 1);
      const limit = Math.min(100, Math.max(1, parseInt(String(req.query["limit"]), 10) || 10));

      const data = await this.campusDriveService.getRecruiterDrives(req.user.id, page, limit);
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getDriveById(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid drive ID" });

      const drive = await this.campusDriveService.getDriveById(id, req.user.id);
      return res.status(200).json({ drive });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Drive not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateDrive(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid drive ID" });

      const result = updateDriveSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const drive = await this.campusDriveService.updateDrive(id, req.user.id, result.data);
      return res.status(200).json({ message: "Campus drive updated successfully", drive });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Drive not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async deleteDrive(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid drive ID" });

      await this.campusDriveService.deleteDrive(id, req.user.id);
      return res.status(200).json({ message: "Campus drive deleted successfully" });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Drive not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
        if (error.message === "Only DRAFT drives can be deleted") return res.status(400).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateDriveStatus(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const id = parseInt(String(req.params["id"]), 10);
      if (isNaN(id)) return res.status(400).json({ message: "Invalid drive ID" });

      const result = updateDriveStatusSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const drive = await this.campusDriveService.updateDriveStatus(id, req.user.id, result.data.status);
      return res.status(200).json({ message: "Drive status updated", drive });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Drive not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getDriveRegistrations(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const driveId = parseInt(String(req.params["id"]), 10);
      if (isNaN(driveId)) return res.status(400).json({ message: "Invalid drive ID" });

      const page = Math.max(1, parseInt(String(req.query["page"]), 10) || 1);
      const limit = Math.min(100, Math.max(1, parseInt(String(req.query["limit"]), 10) || 10));

      const data = await this.campusDriveService.getDriveRegistrations(driveId, req.user.id, page, limit);
      return res.status(200).json(data);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Drive not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateRegistrationStatus(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const driveId = parseInt(String(req.params["id"]), 10);
      const regId = parseInt(String(req.params["regId"]), 10);
      if (isNaN(driveId) || isNaN(regId)) return res.status(400).json({ message: "Invalid ID" });

      const result = updateRegistrationStatusSchema.safeParse(req.body);
      if (!result.success) return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });

      const registration = await this.campusDriveService.updateRegistrationStatus(driveId, regId, req.user.id, result.data.status);
      return res.status(200).json({ message: "Registration status updated", registration });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Drive not found") return res.status(404).json({ message: error.message });
        if (error.message === "Not authorized") return res.status(403).json({ message: error.message });
        if (error.message === "Registration not found") return res.status(404).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  // ==================== STUDENT METHODS ====================

  async getEligibleDrives(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const page = Math.max(1, parseInt(String(req.query["page"]), 10) || 1);
      const limit = Math.min(100, Math.max(1, parseInt(String(req.query["limit"]), 10) || 10));

      const data = await this.campusDriveService.getEligibleDrives(req.user.id, page, limit);
      return res.status(200).json(data);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Student not found") return res.status(404).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getDriveDetail(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const driveId = parseInt(String(req.params["driveId"]), 10);
      if (isNaN(driveId)) return res.status(400).json({ message: "Invalid drive ID" });

      const drive = await this.campusDriveService.getDriveDetail(driveId);
      return res.status(200).json({ drive });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Drive not found") return res.status(404).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async registerForDrive(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const driveId = parseInt(String(req.params["driveId"]), 10);
      if (isNaN(driveId)) return res.status(400).json({ message: "Invalid drive ID" });

      const registration = await this.campusDriveService.registerForDrive(driveId, req.user.id);
      return res.status(201).json({ message: "Registered for campus drive successfully", registration });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Drive not found") return res.status(404).json({ message: error.message });
        if (error.message === "Drive is not open for registration") return res.status(400).json({ message: error.message });
        if (error.message === "Registration deadline has passed") return res.status(400).json({ message: error.message });
        if (error.message === "Already registered for this drive") return res.status(409).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getMyRegistrations(req: Request, res: Response) {
    try {
      if (!req.user) return res.status(401).json({ message: "Authentication required" });

      const registrations = await this.campusDriveService.getMyRegistrations(req.user.id);
      return res.status(200).json({ registrations });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
