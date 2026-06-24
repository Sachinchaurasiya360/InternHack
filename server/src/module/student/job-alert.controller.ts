import type { Request, Response, NextFunction } from "express";
import { JobAlertService } from "./job-alert.service.js";

export class JobAlertController {
  constructor(
    private readonly jobAlertService: JobAlertService
  ) {}

  async createAlert(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      if (!req.user) {
        return res
          .status(401)
          .json({ message: "Authentication required" });
      }

      const alert =
        await this.jobAlertService.createAlert(
          req.user.id,
          req.body
        );

      return res.status(201).json({
        message: "Job alert created",
        alert,
      });
    } catch (err) {
      next(err);
    }
  }

  async getAlerts(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      if (!req.user) {
        return res
          .status(401)
          .json({ message: "Authentication required" });
      }

      const alerts =
        await this.jobAlertService.getAlerts(
          req.user.id
        );

      return res.json(alerts);
    } catch (err) {
      next(err);
    }
  }

  async updateAlert(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: "Authentication required",
      });
    }

    await this.jobAlertService.updateAlert(
      String(req.params["id"]),
      req.user.id,
      req.body
    );

    return res.json({
      message: "Job alert updated successfully",
    });
  } catch (err) {
    next(err);
  }
}

async deleteAlert(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (!req.user) {
      return res.status(401).json({
        message: "Authentication required",
      });
    }

    await this.jobAlertService.deleteAlert(
      String(req.params["id"]),
      req.user.id
    );

    return res.json({
      message: "Job alert deleted successfully",
    });
  } catch (err) {
    next(err);
  }
}
}