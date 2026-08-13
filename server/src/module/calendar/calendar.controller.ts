import type { Request, Response, NextFunction } from "express";
import { calendarService } from "./calendar.service.js";

export class CalendarController {
  getOpportunities = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const opportunities = await calendarService.getOpportunities(req.user.id);
      res.json({ opportunities });
    } catch (err) { next(err); }
  };

  exportIcs = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) { res.status(401).json({ message: "Authentication required" }); return; }
      const ics = await calendarService.exportIcs(req.user.id);
      res.setHeader("Content-Type", "text/calendar; charset=utf-8");
      res.setHeader("Content-Disposition", "attachment; filename=internhack-opportunity-calendar.ics");
      res.send(ics);
    } catch (err) { next(err); }
  };
}

export const calendarController = new CalendarController();
