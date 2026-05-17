import { useState, useEffect, useRef } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import api from "../../lib/axios";
import { queryKeys } from "../../lib/query-keys";
import { Navbar } from "../../components/Navbar";
import { SEO } from "../../components/SEO";
import { canonicalUrl } from "../../lib/seo.utils";

import BlogCard, {
  CATEGORY_LABELS,
} from "./components/BlogCard";

import BlogHero from "./components/BlogHero";
import BlogSkeleton from "./components/BlogSkeleton";
import EmptyState from "./components/EmptyState";
import FeaturedCarousel from "./components/FeaturedCarousel";
import CategoryPills from "./components/CategoryPills";

import type {
  BlogPost,
  BlogCategory,
  Pagination,
} from "../../lib/types";


export default function BlogListPage() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState<BlogCategory | "ALL">("ALL");
  const [page, setPage] = useState(1);

  const limit = 9;

  // Debounce search
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSearchChange = (value: string) => {
    setSearch(value);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setDebouncedSearch(value);
      setPage(1);
    }, 400);
  };

  // Cleanup debounce timer
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  // Fetch blog posts
  const {
    data,
    isLoading,
  } = useQuery<{
    posts: BlogPost[];
    pagination: Pagination;
  }>({
    queryKey: queryKeys.blog.list({
      page,
      limit,
      category,
      search: debouncedSearch,
    }),

    queryFn: async () => {
      const params: Record<string, string | number> = {
        page,
        limit,
      };

      if (category !== "ALL") {
        params.category = category;
      }

      if (debouncedSearch) {
        params.search = debouncedSearch;
      }

      const res = await api.get("/blog", { params });

      return res.data;
    },

    placeholderData: keepPreviousData,
  });

  // Featured posts
  const { data: featuredData } = useQuery<{
    posts: BlogPost[];
  }>({
    queryKey: queryKeys.blog.featured(),

    queryFn: async () => {
      const res = await api.get("/blog/featured");
      return res.data;
    },
  });

  const posts = data?.posts ?? [];
  const pagination = data?.pagination;
  const featuredPosts = featuredData?.posts ?? [];

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950">
      <SEO
        title="Blog & Resources"
        description="Career tips, interview strategies, salary insights, and industry trends to help you land your dream role. Read expert articles on InternHack."
        keywords="career blog, interview tips, salary guide, resume tips, tech trends, career advice, industry insights"
        canonicalUrl={canonicalUrl("/blog")}
      />

      <Navbar />

      {/* Hero */}
      <BlogHero
        search={search}
        setSearch={handleSearchChange}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Category Pills */}
        <CategoryPills
          selected={category}
          onChange={(value) => {
            setCategory(value);
            setPage(1);
          }}
        />

        {/* Featured */}
        {featuredPosts.length > 0 &&
          category === "ALL" &&
          !debouncedSearch &&
          page === 1 && (
            <div className="mb-12">
              <FeaturedCarousel
                posts={featuredPosts.slice(0, 3)}
              />
            </div>
          )}

        {/* Blog Grid */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-gray-400 dark:text-gray-500" />

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {category === "ALL"
                ? "All Articles"
                : CATEGORY_LABELS[category]}
            </h2>

            {pagination && (
              <span className="text-sm text-gray-400 dark:text-gray-500 ml-2">
                ({pagination.total} article
                {pagination.total !== 1 ? "s" : ""})
              </span>
            )}
          </div>

          {isLoading ? (
            <BlogSkeleton count={6} />
          ) : posts.length === 0 ? (
            <EmptyState
              title="No articles found"
              description={
                debouncedSearch
                  ? `No results for "${debouncedSearch}". Try a different search term.`
                  : "No articles in this category yet. Check back soon!"
              }
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  index={i}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          {pagination && pagination.totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-10">
              <button
                onClick={() =>
                  setPage((p) => Math.max(1, p - 1))
                }
                disabled={page <= 1}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              <span className="text-sm text-gray-500 dark:text-gray-400 px-3">
                Page {pagination.page} of{" "}
                {pagination.totalPages}
              </span>

              <button
                onClick={() =>
                  setPage((p) =>
                    Math.min(
                      pagination.totalPages,
                      p + 1
                    )
                  )
                }
                disabled={page >= pagination.totalPages}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}