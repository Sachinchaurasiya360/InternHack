import type { Request, Response, NextFunction } from "express";
import type { BlogService } from "./blog.service.js";
import {
  createPostSchema,
  updatePostSchema,
  listPostsQuerySchema,
} from "./blog.validation.js";

export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  async listPublished(req: Request, res: Response, next: NextFunction) {
    try {
      const result = listPostsQuerySchema.safeParse(req.query);
      if (!result.success) {
        res.status(400).json({ message: "Invalid query parameters", errors: result.error.flatten() });
        return;
      }

      const data = await this.blogService.listPublished(result.data);
      res.json(data);
    } catch (err) {
      next(err);
    }
  }

  async getFeatured(req: Request, res: Response, next: NextFunction) {
    try {
      const posts = await this.blogService.getFeatured();
      res.json({ posts });
    } catch (err) {
      next(err);
    }
  }

  async getBySlug(req: Request, res: Response, next: NextFunction) {
    try {
      const slug = String(req.params["slug"] || "");
      if (!slug) {
        res.status(400).json({ message: "Slug is required" });
        return;
      }

      const post = await this.blogService.getBySlug(slug);
      res.json({ post });
    } catch (err) {
      if (err instanceof Error && err.message === "Post not found") {
        res.status(404).json({ message: err.message });
        return;
      }
      next(err);
    }
  }

  async listAll(req: Request, res: Response, next: NextFunction) {
    try {
      const result = listPostsQuerySchema.safeParse(req.query);
      if (!result.success) {
        res.status(400).json({ message: "Invalid query parameters", errors: result.error.flatten() });
        return;
      }

      const data = await this.blogService.listAll(result.data);
      res.json(data);
    } catch (err) {
      next(err);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params["id"] || "", 10);
      if (isNaN(id)) {
        res.status(400).json({ message: "Valid post ID is required" });
        return;
      }

      const post = await this.blogService.getById(id);
      res.json({ post });
    } catch (err) {
      if (err instanceof Error && err.message === "Post not found") {
        res.status(404).json({ message: err.message });
        return;
      }
      next(err);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const result = createPostSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      const post = await this.blogService.create(req.user.id, result.data);
      res.status(201).json({ message: "Post created", post });
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const id = parseInt(req.params["id"] || "", 10);
      if (isNaN(id)) {
        res.status(400).json({ message: "Valid post ID is required" });
        return;
      }

      const result = updatePostSchema.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
        return;
      }

      const isAdmin = req.user.role === "ADMIN";
      const post = await this.blogService.update(id, result.data, req.user.id, isAdmin);
      res.json({ message: "Post updated", post });
    } catch (err) {
      if (err instanceof Error && err.message === "Post not found") {
        res.status(404).json({ message: err.message });
        return;
      }
      if (err instanceof Error && err.message === "Not authorized to modify this post") {
        res.status(403).json({ message: err.message });
        return;
      }
      next(err);
    }
  }

  async togglePublish(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const id = parseInt(req.params["id"] || "", 10);
      if (isNaN(id)) {
        res.status(400).json({ message: "Valid post ID is required" });
        return;
      }

      const isAdmin = req.user.role === "ADMIN";
      const post = await this.blogService.togglePublish(id, req.user.id, isAdmin);
      res.json({ message: `Post ${post.status === "PUBLISHED" ? "published" : "unpublished"}`, post });
    } catch (err) {
      if (err instanceof Error && err.message === "Post not found") {
        res.status(404).json({ message: err.message });
        return;
      }
      if (err instanceof Error && err.message === "Not authorized to modify this post") {
        res.status(403).json({ message: err.message });
        return;
      }
      next(err);
    }
  }

  async toggleFeatured(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const id = parseInt(req.params["id"] || "", 10);
      if (isNaN(id)) {
        res.status(400).json({ message: "Valid post ID is required" });
        return;
      }

      const isAdmin = req.user.role === "ADMIN";
      const post = await this.blogService.toggleFeatured(id, req.user.id, isAdmin);
      res.json({ message: `Post ${post.isFeatured ? "featured" : "unfeatured"}`, post });
    } catch (err) {
      if (err instanceof Error && err.message === "Post not found") {
        res.status(404).json({ message: err.message });
        return;
      }
      if (err instanceof Error && err.message === "Not authorized to modify this post") {
        res.status(403).json({ message: err.message });
        return;
      }
      next(err);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const id = parseInt(req.params["id"] || "", 10);
      if (isNaN(id)) {
        res.status(400).json({ message: "Valid post ID is required" });
        return;
      }

      const isAdmin = req.user.role === "ADMIN";
      await this.blogService.delete(id, req.user.id, isAdmin);
      res.json({ message: "Post deleted" });
    } catch (err) {
      if (err instanceof Error && err.message === "Post not found") {
        res.status(404).json({ message: err.message });
        return;
      }
      if (err instanceof Error && err.message === "Not authorized to modify this post") {
        res.status(403).json({ message: err.message });
        return;
      }
      next(err);
    }
  }
}
