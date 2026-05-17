import { useMemo, useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Eye,
} from "lucide-react";

import type { BlogPost, BlogCategory } from "@/lib/types";

const CATEGORY_LABELS: Record<BlogCategory, string> = {
  CAREER_ADVICE: "Career Advice",
  INTERVIEW_TIPS: "Interview Tips",
  SALARY_GUIDE: "Salary Guide",
  INDUSTRY_INSIGHTS: "Industry Insights",
  RESUME_TIPS: "Resume Tips",
  TECH_TRENDS: "Tech Trends",
};

const CATEGORY_COLORS: Record<
  BlogCategory,
  { bg: string; text: string }
> = {
  CAREER_ADVICE: {
    bg: "bg-blue-100 dark:bg-blue-900/40",
    text: "text-blue-700 dark:text-blue-300",
  },
  INTERVIEW_TIPS: {
    bg: "bg-emerald-100 dark:bg-emerald-900/40",
    text: "text-emerald-700 dark:text-emerald-300",
  },
  SALARY_GUIDE: {
    bg: "bg-amber-100 dark:bg-amber-900/40",
    text: "text-amber-700 dark:text-amber-300",
  },
  INDUSTRY_INSIGHTS: {
    bg: "bg-violet-100 dark:bg-violet-900/40",
    text: "text-violet-700 dark:text-violet-300",
  },
  RESUME_TIPS: {
    bg: "bg-rose-100 dark:bg-rose-900/40",
    text: "text-rose-700 dark:text-rose-300",
  },
  TECH_TRENDS: {
    bg: "bg-cyan-100 dark:bg-cyan-900/40",
    text: "text-cyan-700 dark:text-cyan-300",
  },
};

const GRADIENTS = [
  "from-blue-600 to-indigo-700",
  "from-violet-600 to-purple-700",
  "from-cyan-600 to-blue-700",
  "from-emerald-600 to-teal-700",
];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

interface FeaturedCarouselProps {
  posts: BlogPost[];
}

export default function FeaturedCarousel({
  posts,
}: FeaturedCarouselProps) {
  const featuredPosts = useMemo(
    () => posts.filter((p) => p.isFeatured),
    [posts]
  );

  const [current, setCurrent] = useState(0);

  if (!featuredPosts.length) return null;

  const activePost = featuredPosts[current];
  const categoryStyle =
    CATEGORY_COLORS[activePost.category];

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === featuredPosts.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? featuredPosts.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white">
            Featured Articles
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Hand-picked insights and trending reads
          </p>
        </div>

        {featuredPosts.length > 1 && (
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 transition"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 transition"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePost.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to={`/blog/${activePost.slug}`}
              className="group grid md:grid-cols-2 bg-white dark:bg-gray-900 no-underline"
            >
              {/* Image */}
              <div className="relative h-72 md:h-full overflow-hidden">
                {activePost.featuredImage ? (
                  <img
                    src={activePost.featuredImage}
                    alt={activePost.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div
                    className={`h-full w-full bg-gradient-to-br ${
                      GRADIENTS[
                        activePost.id % GRADIENTS.length
                      ]
                    }`}
                  />
                )}

                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 md:p-12">
                <span
                  className={`mb-5 inline-flex w-fit rounded-lg px-3 py-1 text-xs font-semibold ${categoryStyle.bg} ${categoryStyle.text}`}
                >
                  {CATEGORY_LABELS[activePost.category]}
                </span>

                <h3 className="text-3xl md:text-4xl font-black leading-tight text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {activePost.title}
                </h3>

                <p className="mt-5 text-base leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-4">
                  {activePost.excerpt}
                </p>

                {/* Meta */}
                <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {activePost.author.name}
                  </span>

                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formatDate(
                      activePost.publishedAt ??
                        activePost.createdAt
                    )}
                  </span>

                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {activePost.readingTime} min read
                  </span>

                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {activePost.viewCount}
                  </span>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                    Read article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      {featuredPosts.length > 1 && (
        <div className="mt-5 flex items-center justify-center gap-2">
          {featuredPosts.map((post, idx) => (
            <button
              key={post.id}
              onClick={() => setCurrent(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === current
                  ? "w-8 bg-blue-600"
                  : "w-2.5 bg-gray-300 dark:bg-gray-700"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}