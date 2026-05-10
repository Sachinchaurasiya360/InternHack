import type { Request, Response } from "express";
import { bookmarkService } from "./bookmark.service";

export class BookmarkController {
  async toggleBookmark(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.user?.id;
      if (!userId) {
        res.status(401).json({ message: "Unauthorized" });
        return;
      }

      const { entityId, entityType, title, url, data } = req.body;

      if (!entityId || !entityType) {
        res.status(400).json({ message: "Missing entityId or entityType" });
        return;
      }

      const result = await bookmarkService.toggleBookmark(
        userId,
        entityId,
        entityType,
        title,
        url,
        data
      );

      res.status(200).json(result);
    } catch (error) {
      console.error("[toggleBookmark] error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async getUserBookmarks(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.user?.id;
      if (!userId) {
        res.status(401).json({ message: "Unauthorized" });
        return;
      }

      const typeFilter = req.query.type as string | undefined;
      const bookmarks = await bookmarkService.getUserBookmarks(userId, typeFilter);

      res.status(200).json(bookmarks);
    } catch (error) {
      console.error("[getUserBookmarks] error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async syncLocalBookmarks(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.user?.id;
      if (!userId) {
        res.status(401).json({ message: "Unauthorized" });
        return;
      }

      const { localBookmarks } = req.body;

      if (!localBookmarks || !Array.isArray(localBookmarks)) {
        res.status(400).json({ message: "Invalid payload for localBookmarks" });
        return;
      }

      const result = await bookmarkService.syncLocalBookmarks(userId, localBookmarks);
      res.status(200).json(result);
    } catch (error) {
      console.error("[syncLocalBookmarks] error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

export const bookmarkController = new BookmarkController();
