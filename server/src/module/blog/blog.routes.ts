import { Router } from "express";
import { BlogService } from "./blog.service.js";
import { BlogController } from "./blog.controller.js";

const blogService = new BlogService();
const blogController = new BlogController(blogService);

export const blogRouter = Router();

// Public routes
blogRouter.get("/", (req, res, next) => blogController.listPublished(req, res, next));
blogRouter.get("/featured", (req, res, next) => blogController.getFeatured(req, res, next));
blogRouter.get("/by-tags", (req, res, next) => blogController.getPostsByTags(req, res, next));

// Public slug routes
blogRouter.get("/:slug", (req, res, next) => blogController.getBySlug(req, res, next));
blogRouter.get("/:slug/related", (req, res, next) => blogController.getRelatedPosts(req, res, next));
