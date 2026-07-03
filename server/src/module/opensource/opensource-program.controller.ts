import { type Request, type Response, type NextFunction } from "express";
import { OpensourceProgramService } from "./opensource-program.service.js";
import {
  toggleProgramSchema,
  createProgramSchema,
  updateProgramSchema,
} from "./opensource-program.validation.js";
import { programToIcsEvents } from "../../utils/ics.utils.js";

const service = new OpensourceProgramService();

export class OpensourceProgramController {
  async listPrograms(req: Request, res: Response, next: NextFunction) {
    try {
      const all = req.query.all === "true";
      const programs = await service.listPrograms(!all);
      res.json({ programs });
    } catch (err) {
      next(err);
    }
  }

  async getProgram(req: Request, res: Response, next: NextFunction) {
    try {
      const slug = String(req.params.slug);
      const program = await service.getProgram(slug);
      if (!program) {
        res.status(404).json({ message: "Program not found" });
        return;
      }
      res.json({ program });
    } catch (err) {
      next(err);
    }
  }

  async createProgram(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = createProgramSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten().fieldErrors });
        return;
      }
      const program = await service.createProgram(parsed.data);
      res.status(201).json({ program });
    } catch (err) {
      next(err);
    }
  }

  async updateProgram(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: "Invalid program ID" });
        return;
      }
      const parsed = updateProgramSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten().fieldErrors });
        return;
      }
      const program = await service.updateProgram(id, parsed.data);
      res.json({ program });
    } catch (err) {
      next(err);
    }
  }

  async deleteProgram(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: "Invalid program ID" });
        return;
      }
      await service.deleteProgram(id);
      res.json({ message: "Program deleted" });
    } catch (err) {
      next(err);
    }
  }

  async toggleProgram(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = toggleProgramSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: "Validation failed", errors: parsed.error.flatten().fieldErrors });
        return;
      }
      const programs = await service.toggleProgram(req.user!.id, parsed.data.slug, parsed.data.tracked);
      res.json({ trackedPrograms: programs });
    } catch (err) {
      next(err);
    }
  }

  async getTrackedPrograms(req: Request, res: Response, next: NextFunction) {
    try {
      const programs = await service.getTrackedPrograms(req.user!.id);
      res.json({ programs });
    } catch (err) {
      next(err);
    }
  }

  async downloadIcs(req: Request, res: Response, next: NextFunction) {
    try {
      const slug = String(req.params.slug);
      const program = await service.getProgram(slug);
      if (!program) {
        res.status(404).json({ message: "Program not found" });
        return;
      }
      const events = programToIcsEvents({
        name: program.name,
        short: program.short,
        description: program.description,
        website: program.website,
        applicationStart: program.applicationStart,
        applicationDeadline: program.applicationDeadline,
        resultsDate: program.resultsDate,
        programStart: program.programStart,
        programEnd: program.programEnd,
      });

      if (events.length === 0) {
        res.status(400).json({ message: "No dates available for this program" });
        return;
      }

      if (events.length === 1) {
        res.setHeader("Content-Type", "text/calendar; charset=utf-8");
        res.setHeader("Content-Disposition", `attachment; filename="${events[0].filename}"`);
        res.send(events[0].content);
        return;
      }

      res.json({ events });
    } catch (err) {
      next(err);
    }
  }
}
