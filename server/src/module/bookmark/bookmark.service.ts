import { prisma } from "../../database/db";

export class BookmarkService {
  /**
   * Toggle a bookmark: creates if not exists, deletes if exists.
   */
  async toggleBookmark(
    userId: number,
    entityId: string,
    entityType: string,
    title?: string,
    url?: string,
    data?: any
  ) {
    const existing = await prisma.bookmark.findUnique({
      where: {
        userId_entityId_entityType: {
          userId,
          entityId,
          entityType,
        },
      },
    });

    if (existing) {
      await prisma.bookmark.delete({
        where: { id: existing.id },
      });
      return { bookmarked: false, message: "Bookmark removed" };
    }

    const bookmark = await prisma.bookmark.create({
      data: {
        userId,
        entityId,
        entityType,
        title,
        url,
        data: data || {},
      },
    });

    return { bookmarked: true, bookmark, message: "Bookmark added" };
  }

  /**
   * Get all bookmarks for a user, optionally filtered by type.
   */
  async getUserBookmarks(userId: number, typeFilter?: string) {
    const where: any = { userId };
    if (typeFilter && typeFilter !== "ALL") {
      where.entityType = typeFilter;
    }

    const bookmarks = await prisma.bookmark.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return bookmarks;
  }

  /**
   * Sync local bookmarks to the database.
   */
  async syncLocalBookmarks(userId: number, localBookmarks: any[]) {
    if (!localBookmarks || !Array.isArray(localBookmarks) || localBookmarks.length === 0) {
      return { syncedCount: 0 };
    }

    let syncedCount = 0;
    for (const item of localBookmarks) {
      if (!item.entityId || !item.entityType) continue;

      const existing = await prisma.bookmark.findUnique({
        where: {
          userId_entityId_entityType: {
            userId,
            entityId: item.entityId,
            entityType: item.entityType,
          },
        },
      });

      if (!existing) {
        await prisma.bookmark.create({
          data: {
            userId,
            entityId: item.entityId,
            entityType: item.entityType,
            title: item.title,
            url: item.url,
            data: item.data || {},
          },
        });
        syncedCount++;
      }
    }

    return { syncedCount };
  }
}

export const bookmarkService = new BookmarkService();
