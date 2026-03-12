import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import {
  Search,
  BookOpen,
  Wand2,
  ChevronLeft,
  ChevronRight,
  Star,
  FileText,
} from "lucide-react";
import api from "../../lib/axios";
import { queryKeys } from "../../lib/query-keys";
import { Navbar } from "../../components/Navbar";
import { SEO } from "../../components/SEO";
import BlogCard, { CATEGORY_LABELS } from "./components/BlogCard";
import type { BlogPost, BlogCategory } from "./components/BlogCard";
import type { Pagination } from "../../lib/types";

const CATEGORIES: { label: string; value: BlogCategory | "ALL" }[] = [
  { label: "All", value: "ALL" },
  { label: "Career Advice", value: "CAREER_ADVICE" },
  { label: "Interview Tips", value: "INTERVIEW_TIPS" },
  { label: "Salary Guide", value: "SALARY_GUIDE" },
  { label: "Industry Insights", value: "INDUSTRY_INSIGHTS" },
  { label: "Resume Tips", value: "RESUME_TIPS" },
  { label: "Tech Trends", value: "TECH_TRENDS" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

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
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setDebouncedSearch(value);
      setPage(1);
    }, 400);
  };

  // Cleanup debounce timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Fetch blog posts
  const { data, isLoading } = useQuery<{ posts: BlogPost[]; pagination: Pagination }>({
    queryKey: queryKeys.blog.list({ page, limit, category, search: debouncedSearch }),
    queryFn: async () => {
      const params: Record<string, string | number> = { page, limit };
      if (category !== "ALL") params.category = category;
      if (debouncedSearch) params.search = debouncedSearch;
      const res = await api.get("/blog", { params });
      return res.data;
    },
    placeholderData: keepPreviousData,
  });

  // Fetch featured posts
  const { data: featuredData } = useQuery<{ posts: BlogPost[] }>({
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
      />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#fafafa] dark:bg-gray-950 pt-28 pb-16 px-6">
        {/* Gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-125 h-125 rounded-full bg-linear-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 opacity-60 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-100 h-100 rounded-full bg-linear-to-tr from-slate-100 to-violet-100 dark:from-slate-900/30 dark:to-violet-900/30 opacity-60 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full border border-black/3 dark:border-white/5" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-950 dark:text-white mb-4"
          >
            Blog & Resources
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Career tips, interview strategies, salary insights, and industry trends to help you land your dream role.
          </motion.p>

          {/* Search bar */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 dark:focus:border-blue-500 transition-all shadow-sm"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        {/* Category filter chips */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setCategory(cat.value);
                setPage(1);
              }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                category === cat.value
                  ? "bg-gray-950 dark:bg-white text-white dark:text-gray-950 shadow-sm"
                  : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Featured posts */}
        {featuredPosts.length > 0 && category === "ALL" && !debouncedSearch && page === 1 && (
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-5 h-5 text-amber-500" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Featured</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.slice(0, 3).map((post, i) => (
                <BlogCard key={post.id} post={post} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* Main blog grid */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {category === "ALL" ? "All Articles" : CATEGORY_LABELS[category]}
            </h2>
            {pagination && (
              <span className="text-sm text-gray-400 dark:text-gray-500 ml-2">
                ({pagination.total} article{pagination.total !== 1 ? "s" : ""})
              </span>
            )}
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden animate-pulse"
                >
                  <div className="h-48 bg-gray-200 dark:bg-gray-800" />
                  <div className="p-5 space-y-3">
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full" />
                    <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-5/6" />
                    <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-2/3" />
                    <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex justify-between">
                      <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-20" />
                      <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-32" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-24">
              <FileText className="w-12 h-12 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                No articles found
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {debouncedSearch
                  ? `No results for "${debouncedSearch}". Try a different search term.`
                  : "No articles in this category yet. Check back soon!"}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <BlogCard key={post.id} post={post} index={i} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {pagination && pagination.totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-10">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              <span className="text-sm text-gray-500 dark:text-gray-400 px-3">
                Page {pagination.page} of {pagination.totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(pagination.totalPages, p + 1))}
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
