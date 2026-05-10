import { Router } from "express";
import { bookmarkController } from "./bookmark.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";

export const bookmarkRouter = Router();

bookmarkRouter.use(authMiddleware);

bookmarkRouter.get("/", (req, res) => bookmarkController.getUserBookmarks(req, res));
bookmarkRouter.post("/toggle", (req, res) => bookmarkController.toggleBookmark(req, res));
bookmarkRouter.post("/sync", (req, res) => bookmarkController.syncLocalBookmarks(req, res));
