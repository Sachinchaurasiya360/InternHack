import type { Request, Response, NextFunction } from "express";
import type { BlogService } from "./blog.service.js";
import { listPostsQuerySchema } from "./blog.validation.js";

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

  async getRelatedPosts(req: Request, res: Response, next: NextFunction) {
    try {
      const slug = String(req.params["slug"] || "");
      if (!slug) {
        res.status(400).json({ message: "Slug is required" });
        return;
      }

      const posts = await this.blogService.getRelatedPosts(slug);
      res.json({ posts });
    } catch (err) {
      next(err);
    }
  }

  async getPostsByTags(req: Request, res: Response, next: NextFunction) {
    try {
      const tagsParam = String(req.query["tags"] || "");
      if (!tagsParam) {
        res.json({ posts: [] });
        return;
      }

      const tags = tagsParam.split(",").map((t) => t.trim()).filter(Boolean);
      const posts = await this.blogService.getPostsByTags(tags);
      res.json({ posts });
    } catch (err) {
      next(err);
    }
  }

}
