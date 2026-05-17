import axios from "@/lib/axios";
import type { BlogPost, Pagination } from "@/lib/types";

export interface BlogListResponse {
  posts: BlogPost[];
  pagination?: Pagination;
}

export interface BlogListParams {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  tag?: string;
  featured?: boolean;
}

export const blogApi = {
  // Get all blog posts
  async getPosts(params?: BlogListParams): Promise<BlogListResponse> {
    const { data } = await axios.get("/blog", {
      params,
    });

    return data;
  },

  // Get single blog post by slug
  async getPostBySlug(slug: string): Promise<BlogPost> {
    const { data } = await axios.get(`/blog/${slug}`);
    return data;
  },

  // Get featured/trending posts
  async getFeaturedPosts(): Promise<BlogPost[]> {
    const { data } = await axios.get("/blog/featured");
    return data;
  },

  // Get related posts
  async getRelatedPosts(slug: string): Promise<BlogPost[]> {
    const { data } = await axios.get(`/blog/${slug}/related`);
    return data;
  },

  // Get posts by tag
  async getPostsByTag(tag: string): Promise<BlogPost[]> {
    const { data } = await axios.get("/blog", {
      params: { tag },
    });

    return data.posts || data;
  },

  // Search posts
  async searchPosts(query: string): Promise<BlogPost[]> {
    const { data } = await axios.get("/blog", {
      params: { search: query },
    });

    return data.posts || data;
  },
};