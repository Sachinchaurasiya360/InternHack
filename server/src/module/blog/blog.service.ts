import { prisma } from "../../database/db.js";
import type { Prisma } from "@prisma/client";

interface ListPublishedParams {
  page: number;
  limit: number;
  search?: string | undefined;
  category?: string | undefined;
  tag?: string | undefined;
}

interface ListAllParams {
  page: number;
  limit: number;
  search?: string | undefined;
  status?: string | undefined;
  category?: string | undefined;
}

const authorSelect = { id: true, name: true, profilePic: true } as const;

export class BlogService {
  async generateSlug(title: string): Promise<string> {
    let slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const existing = await prisma.blogPost.findUnique({ where: { slug } });
    if (existing) {
      slug = `${slug}-${Date.now()}`;
    }

    return slug;
  }

  calculateReadingTime(content: string): number {
    return Math.ceil(content.split(/\s+/).length / 200);
  }

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

  async listAll(query: ListAllParams) {
    const { page, limit, search, status, category } = query;
    const skip = (page - 1) * limit;

    const where: Prisma.blogPostWhereInput = {};

    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { content: { contains: search, mode: "insensitive" } },
      ];
    }

    if (status) {
      where.status = status as Prisma.blogPostWhereInput["status"];
    }

    if (category) {
      where.category = category as Prisma.blogPostWhereInput["category"];
    }

    const [posts, total] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        orderBy: { createdAt: "desc" },
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

  async getById(id: number) {
    const post = await prisma.blogPost.findUnique({
      where: { id },
      include: { author: { select: authorSelect } },
    });

    if (!post) {
      throw new Error("Post not found");
    }

    return post;
  }

  async create(authorId: number, data: {
    title: string;
    content: string;
    excerpt?: string;
    category: string;
    tags?: string[];
    featuredImage?: string;
    status?: string;
  }) {
    const slug = await this.generateSlug(data.title);
    const readingTime = this.calculateReadingTime(data.content);
    const publishedAt = data.status === "PUBLISHED" ? new Date() : null;

    return prisma.blogPost.create({
      data: {
        title: data.title,
        slug,
        content: data.content,
        excerpt: data.excerpt ?? null,
        category: data.category as Prisma.blogPostCreateInput["category"],
        tags: data.tags ?? [],
        featuredImage: data.featuredImage ?? null,
        status: (data.status ?? "DRAFT") as Prisma.blogPostCreateInput["status"],
        readingTime,
        publishedAt,
        authorId,
      },
      include: { author: { select: authorSelect } },
    });
  }

  async update(id: number, data: {
    title?: string;
    content?: string;
    excerpt?: string;
    category?: string;
    tags?: string[];
    featuredImage?: string;
    status?: string;
  }, userId?: number, isAdmin?: boolean) {
    const existing = await prisma.blogPost.findUnique({ where: { id } });
    if (!existing) {
      throw new Error("Post not found");
    }

    if (!isAdmin && userId !== undefined && existing.authorId !== userId) {
      throw new Error("Not authorized to modify this post");
    }

    const updateData: Prisma.blogPostUpdateInput = {};

    if (data.title !== undefined) {
      updateData.title = data.title;
      updateData.slug = await this.generateSlug(data.title);
    }

    if (data.content !== undefined) {
      updateData.content = data.content;
      updateData.readingTime = this.calculateReadingTime(data.content);
    }

    if (data.excerpt !== undefined) updateData.excerpt = data.excerpt;
    if (data.category !== undefined) updateData.category = data.category as Prisma.blogPostUpdateInput["category"];
    if (data.tags !== undefined) updateData.tags = data.tags;
    if (data.featuredImage !== undefined) updateData.featuredImage = data.featuredImage;

    if (data.status !== undefined) {
      updateData.status = data.status as Prisma.blogPostUpdateInput["status"];
      if (data.status === "PUBLISHED" && !existing.publishedAt) {
        updateData.publishedAt = new Date();
      }
    }

    return prisma.blogPost.update({
      where: { id },
      data: updateData,
      include: { author: { select: authorSelect } },
    });
  }

  async togglePublish(id: number, userId?: number, isAdmin?: boolean) {
    const post = await prisma.blogPost.findUnique({ where: { id } });
    if (!post) {
      throw new Error("Post not found");
    }

    if (!isAdmin && userId !== undefined && post.authorId !== userId) {
      throw new Error("Not authorized to modify this post");
    }

    const newStatus = post.status === "PUBLISHED" ? "DRAFT" : "PUBLISHED";
    const publishedAt = newStatus === "PUBLISHED" && !post.publishedAt ? new Date() : post.publishedAt;

    return prisma.blogPost.update({
      where: { id },
      data: { status: newStatus, publishedAt },
      include: { author: { select: authorSelect } },
    });
  }

  async toggleFeatured(id: number, userId?: number, isAdmin?: boolean) {
    const post = await prisma.blogPost.findUnique({ where: { id } });
    if (!post) {
      throw new Error("Post not found");
    }

    if (!isAdmin && userId !== undefined && post.authorId !== userId) {
      throw new Error("Not authorized to modify this post");
    }

    return prisma.blogPost.update({
      where: { id },
      data: { isFeatured: !post.isFeatured },
      include: { author: { select: authorSelect } },
    });
  }

  async delete(id: number, userId?: number, isAdmin?: boolean) {
    const post = await prisma.blogPost.findUnique({ where: { id } });
    if (!post) {
      throw new Error("Post not found");
    }

    if (!isAdmin && userId !== undefined && post.authorId !== userId) {
      throw new Error("Not authorized to modify this post");
    }

    return prisma.blogPost.delete({ where: { id } });
  }
}
