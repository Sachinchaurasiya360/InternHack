import { Router } from "express";
import { QuizService } from "./quiz.service.js";
import { QuizController } from "./quiz.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const quizService = new QuizService();
const quizController = new QuizController(quizService);

export const quizRouter = Router();

// Student routes
quizRouter.get("/skill/:skillId", authMiddleware, requireRole("STUDENT"), (req, res, next) => quizController.getQuizForSkill(req, res, next));
quizRouter.post("/:quizId/attempt", authMiddleware, requireRole("STUDENT"), (req, res, next) => quizController.submitAttempt(req, res, next));
quizRouter.get("/my-attempts", authMiddleware, requireRole("STUDENT"), (req, res, next) => quizController.getMyAttempts(req, res, next));

// Admin routes
quizRouter.post("/", authMiddleware, requireRole("ADMIN"), (req, res, next) => quizController.createQuiz(req, res, next));
quizRouter.post("/:quizId/questions", authMiddleware, requireRole("ADMIN"), (req, res, next) => quizController.addQuestions(req, res, next));
quizRouter.put("/questions/:questionId", authMiddleware, requireRole("ADMIN"), (req, res, next) => quizController.updateQuestion(req, res, next));
quizRouter.delete("/questions/:questionId", authMiddleware, requireRole("ADMIN"), (req, res, next) => quizController.deleteQuestion(req, res, next));
