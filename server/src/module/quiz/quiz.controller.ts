import type { Request, Response, NextFunction } from "express";
import type { QuizService } from "./quiz.service.js";
import {
  submitAttemptSchema,
  createQuizSchema,
  addQuestionsSchema,
  createQuestionSchema,
} from "./quiz.validation.js";

export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  async getQuizForSkill(req: Request, res: Response, next: NextFunction) {
    try {
      const skillId = parseInt(String(req.params["skillId"]), 10);
      if (isNaN(skillId)) {
        res.status(400).json({ error: "Invalid skill ID" });
        return;
      }

      const quiz = await this.quizService.getQuizForSkill(skillId);
      if (!quiz) {
        res.status(404).json({ error: "No quiz found for this skill" });
        return;
      }

      res.json({ quiz });
    } catch (err) {
      next(err);
    }
  }

  async submitAttempt(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ error: "Authentication required" });
        return;
      }

      const quizId = parseInt(String(req.params["quizId"]), 10);
      if (isNaN(quizId)) {
        res.status(400).json({ error: "Invalid quiz ID" });
        return;
      }

      const result = submitAttemptSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ error: "Validation failed", details: result.error.flatten() });
        return;
      }

      const attemptResult = await this.quizService.submitAttempt(
        req.user.id,
        quizId,
        result.data.answers
      );
      res.status(201).json(attemptResult);
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === "Quiz not found") {
          res.status(404).json({ error: err.message });
          return;
        }
        if (err.message === "Not enrolled in this career path") {
          res.status(403).json({ error: err.message });
          return;
        }
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

      const attempts = await this.quizService.getMyAttempts(req.user.id);
      res.json({ attempts });
    } catch (err) {
      next(err);
    }
  }

  async createQuiz(req: Request, res: Response, next: NextFunction) {
    try {
      const result = createQuizSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ error: "Validation failed", details: result.error.flatten() });
        return;
      }

      const quiz = await this.quizService.createQuiz(result.data);
      res.status(201).json({ quiz });
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === "Skill not found") {
          res.status(404).json({ error: err.message });
          return;
        }
        if (err.message === "This skill already has a quiz") {
          res.status(409).json({ error: err.message });
          return;
        }
      }
      next(err);
    }
  }

  async addQuestions(req: Request, res: Response, next: NextFunction) {
    try {
      const quizId = parseInt(String(req.params["quizId"]), 10);
      if (isNaN(quizId)) {
        res.status(400).json({ error: "Invalid quiz ID" });
        return;
      }

      const result = addQuestionsSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ error: "Validation failed", details: result.error.flatten() });
        return;
      }

      const created = await this.quizService.addQuestions(quizId, result.data.questions);
      res.status(201).json({ created });
    } catch (err) {
      if (err instanceof Error && err.message === "Quiz not found") {
        res.status(404).json({ error: err.message });
        return;
      }
      next(err);
    }
  }

  async updateQuestion(req: Request, res: Response, next: NextFunction) {
    try {
      const questionId = parseInt(String(req.params["questionId"]), 10);
      if (isNaN(questionId)) {
        res.status(400).json({ error: "Invalid question ID" });
        return;
      }

      const result = createQuestionSchema.partial().safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ error: "Validation failed", details: result.error.flatten() });
        return;
      }

      const question = await this.quizService.updateQuestion(questionId, result.data);
      res.json({ question });
    } catch (err) {
      if (err instanceof Error && err.message === "Question not found") {
        res.status(404).json({ error: err.message });
        return;
      }
      next(err);
    }
  }

  async deleteQuestion(req: Request, res: Response, next: NextFunction) {
    try {
      const questionId = parseInt(String(req.params["questionId"]), 10);
      if (isNaN(questionId)) {
        res.status(400).json({ error: "Invalid question ID" });
        return;
      }

      const result = await this.quizService.deleteQuestion(questionId);
      res.json(result);
    } catch (err) {
      if (err instanceof Error && err.message === "Question not found") {
        res.status(404).json({ error: err.message });
        return;
      }
      next(err);
    }
  }
}
