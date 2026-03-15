import type { Request, Response } from "express";
import type { HRAnalyticsService } from "./hr-analytics.service.js";

export class HRAnalyticsController {
  constructor(private readonly analyticsService: HRAnalyticsService) {}

  async getDashboard(_req: Request, res: Response) {
    try {
      const data = await this.analyticsService.getDashboard();
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getHeadcountByDepartment(_req: Request, res: Response) {
    try {
      const data = await this.analyticsService.getHeadcountByDepartment();
      return res.json({ departments: data });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getHeadcountByType(_req: Request, res: Response) {
    try {
      const data = await this.analyticsService.getHeadcountByType();
      return res.json({ types: data });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getAttritionRate(req: Request, res: Response) {
    try {
      const months = Number(req.query["months"]) || 12;
      const data = await this.analyticsService.getAttritionRate(months);
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getLeaveAnalytics(req: Request, res: Response) {
    try {
      const year = Number(req.query["year"]) || new Date().getFullYear();
      const data = await this.analyticsService.getLeaveAnalytics(year);
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getAttendanceAnalytics(req: Request, res: Response) {
    try {
      const month = Number(req.query["month"]) || new Date().getMonth() + 1;
      const year = Number(req.query["year"]) || new Date().getFullYear();
      const data = await this.analyticsService.getAttendanceAnalytics(month, year);
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getPayrollSummary(req: Request, res: Response) {
    try {
      const month = Number(req.query["month"]) || new Date().getMonth() + 1;
      const year = Number(req.query["year"]) || new Date().getFullYear();
      const data = await this.analyticsService.getPayrollSummary(month, year);
      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getReimbursementSummary(_req: Request, res: Response) {
    try {
      const data = await this.analyticsService.getReimbursementSummary();
      return res.json({ summary: data });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
