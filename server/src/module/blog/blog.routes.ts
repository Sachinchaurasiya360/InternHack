import { Router } from "express";
import { BlogService } from "./blog.service.js";
import { BlogController } from "./blog.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requireRole } from "../../middleware/role.middleware.js";

const blogService = new BlogService();
const blogController = new BlogController(blogService);

export const blogRouter = Router();

// Public routes
blogRouter.get("/", (req, res, next) => blogController.listPublished(req, res, next));
blogRouter.get("/featured", (req, res, next) => blogController.getFeatured(req, res, next));
blogRouter.get("/by-tags", (req, res, next) => blogController.getPostsByTags(req, res, next));

// Admin routes (must come before /:slug to avoid conflicts)
blogRouter.get("/admin/posts", authMiddleware, requireRole("ADMIN"), (req, res, next) => blogController.listAll(req, res, next));
blogRouter.post("/admin/posts", authMiddleware, requireRole("ADMIN"), (req, res, next) => blogController.create(req, res, next));
blogRouter.get("/admin/posts/:id", authMiddleware, requireRole("ADMIN"), (req, res, next) => blogController.getById(req, res, next));
blogRouter.put("/admin/posts/:id", authMiddleware, requireRole("ADMIN"), (req, res, next) => blogController.update(req, res, next));
blogRouter.patch("/admin/posts/:id/publish", authMiddleware, requireRole("ADMIN"), (req, res, next) => blogController.togglePublish(req, res, next));
blogRouter.patch("/admin/posts/:id/feature", authMiddleware, requireRole("ADMIN"), (req, res, next) => blogController.toggleFeatured(req, res, next));
blogRouter.delete("/admin/posts/:id", authMiddleware, requireRole("ADMIN"), (req, res, next) => blogController.delete(req, res, next));

// Public slug routes (after admin routes)
blogRouter.get("/:slug", (req, res, next) => blogController.getBySlug(req, res, next));
blogRouter.get("/:slug/related", (req, res, next) => blogController.getRelatedPosts(req, res, next));
