import type { Request, Response, NextFunction } from "express";
import type { SkillTestService } from "./skill-test.service.js";
import {
  submitTestSchema,
  createTestSchema,
  addQuestionsSchema,
} from "./skill-test.validation.js";

export class SkillTestController {
  constructor(private readonly service: SkillTestService) {}

  async listTests(req: Request, res: Response, next: NextFunction) {
    try {
      const skill = req.query["skill"] as string | undefined;
      const difficulty = req.query["difficulty"] as string | undefined;
      const tests = await this.service.listTests(skill, difficulty);
      res.json({ tests });
    } catch (err) {
      next(err);
    }
  }

  async getTestDetail(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }

      const testId = parseInt(String(req.params["id"]), 10);
      if (isNaN(testId)) {
        res.status(400).json({ error: "Invalid test ID" });
        return;
      }

      const result = await this.service.getTestDetail(testId, req.user.id);
      if (!result) {
        res.status(404).json({ error: "Test not found" });
        return;
      }

      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async startTest(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }

      const testId = parseInt(String(req.params["id"]), 10);
      if (isNaN(testId)) {
        res.status(400).json({ error: "Invalid test ID" });
        return;
      }

      // Pass studentId to enable server-side session tracking
      const test = await this.service.startTest(testId, req.user.id);
      res.json(test);
    } catch (err) {
      if (err instanceof Error && err.message === "Test not found") {
        res.status(404).json({ error: err.message });
        return;
      }

      // Return 403 if student tries to resume an already-expired session
      if (err instanceof Error && err.message === "TEST_EXPIRED") {
        res
          .status(403)
          .json({ error: "Time is up. Your session has expired." });
        return;
      }
      next(err);
    }
  }

  async submitTest(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }

      const testId = parseInt(String(req.params["id"]), 10);
      if (isNaN(testId)) {
        res.status(400).json({ error: "Invalid test ID" });
        return;
      }

      const parsed = submitTestSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({
          error: "Validation failed",
          details: parsed.error.flatten(),
        });
        return;
      }

      const result = await this.service.submitTest(
        testId,
        req.user.id,
        parsed.data.answers,
        parsed.data.proctorLog,
      );
      res.status(201).json(result);
    } catch (err) {
      if (err instanceof Error && err.message === "Test not found") {
        res.status(404).json({ error: err.message });
        return;
      }
      // Return 403 if submission arrives after server-side expiry
      if (err instanceof Error && err.message === "TEST_EXPIRED") {
        res
          .status(403)
          .json({ error: "Time is up. Your session has expired." });
        return;
      }
      // Return 400 if student tries to submit without starting the test first
      if (err instanceof Error && err.message === "NO_OPEN_SESSION") {
        res
          .status(400)
          .json({
            error: "No active test session found. Please start the test first.",
          });
        return;
      }
      next(err);
    }
  }

  async getMyAttempts(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const attempts = await this.service.getMyAttempts(req.user.id);
      res.json({ attempts });
    } catch (err) {
      next(err);
    }
  }

  async getMyVerified(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }
      const verified = await this.service.getMyVerified(req.user.id);
      res.json({ verified });
    } catch (err) {
      next(err);
    }
  }

  async getStudentVerified(req: Request, res: Response, next: NextFunction) {
    try {
      const studentId = parseInt(String(req.params["studentId"]), 10);
      if (isNaN(studentId)) {
        res.status(400).json({ error: "Invalid student ID" });
        return;
      }

      const verified = await this.service.getStudentVerified(studentId);
      res.json({ verified });
    } catch (err) {
      next(err);
    }
  }

  async createTest(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = createTestSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({
          error: "Validation failed",
          details: parsed.error.flatten(),
        });
        return;
      }

      const test = await this.service.createTest(parsed.data, req.user?.id);
      res.status(201).json({ test });
    } catch (err) {
      if (err instanceof Error && err.message.includes("Unique constraint")) {
        res.status(409).json({
          error: "A test for this skill and difficulty already exists",
        });
        return;
      }
      next(err);
    }
  }

  async addQuestions(req: Request, res: Response, next: NextFunction) {
    try {
      const testId = parseInt(String(req.params["id"]), 10);
      if (isNaN(testId)) {
        res.status(400).json({ error: "Invalid test ID" });
        return;
      }

      const parsed = addQuestionsSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({
          error: "Validation failed",
          details: parsed.error.flatten(),
        });
        return;
      }

      const created = await this.service.addQuestions(
        testId,
        parsed.data.questions,
      );
      res.status(201).json({ created });
    } catch (err) {
      if (err instanceof Error && err.message === "Test not found") {
        res.status(404).json({ error: err.message });
        return;
      }
      next(err);
    }
  }
}
