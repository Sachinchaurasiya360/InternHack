import { prisma } from "../../database/db.js";
import type { Prisma } from "@prisma/client";

interface ListPublishedParams {
  page: number;
  limit: number;
  search?: string | undefined;
  category?: string | undefined;
  tag?: string | undefined;
}

const authorSelect = { id: true, name: true, profilePic: true } as const;

export class BlogService {
  async listPublished(query: ListPublishedParams) {
    const { page, limit, search, category, tag } = query;
    const skip = (page - 1) * limit;

    const where: Prisma.blogPostWhereInput = { status: "PUBLISHED" };

    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { content: { contains: search, mode: "insensitive" } },
      ];
    }

    if (category) {
      where.category = category as Prisma.blogPostWhereInput["category"];
    }

    if (tag) {
      where.tags = { has: tag };
    }

    const [posts, total] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        orderBy: { publishedAt: "desc" },
        skip,
        take: limit,
        include: { author: { select: authorSelect } },
      }),
      prisma.blogPost.count({ where }),
    ]);

    return {
      posts,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getFeatured() {
    return prisma.blogPost.findMany({
      where: { status: "PUBLISHED", isFeatured: true },
      orderBy: { publishedAt: "desc" },
      take: 5,
      include: { author: { select: authorSelect } },
    });
  }

  async getBySlug(slug: string) {
    const post = await prisma.blogPost.findFirst({
      where: { slug, status: "PUBLISHED" },
      include: { author: { select: authorSelect } },
    });

    if (!post) {
      throw new Error("Post not found");
    }

    await prisma.blogPost.update({
      where: { id: post.id },
      data: { viewCount: { increment: 1 } },
    });

    return { ...post, viewCount: post.viewCount + 1 };
  }

  async getRelatedPosts(slug: string, limit = 3) {
    const post = await prisma.blogPost.findFirst({
      where: { slug, status: "PUBLISHED" },
      select: { id: true, tags: true, category: true },
    });

    if (!post || post.tags.length === 0) return [];

    return prisma.blogPost.findMany({
      where: {
        id: { not: post.id },
        status: "PUBLISHED",
        OR: [
          { tags: { hasSome: post.tags } },
          { category: post.category },
        ],
      },
      orderBy: { publishedAt: "desc" },
      take: limit,
      include: { author: { select: authorSelect } },
    });
  }

  async getPostsByTags(tags: string[], limit = 3) {
    if (tags.length === 0) return [];

    return prisma.blogPost.findMany({
      where: {
        status: "PUBLISHED",
        tags: { hasSome: tags },
      },
      orderBy: { publishedAt: "desc" },
      take: limit,
      include: { author: { select: authorSelect } },
    });
  }
}
