import { Link } from "react-router";
import { motion } from "framer-motion";
import { Clock, Eye, User, Calendar } from "lucide-react";

import type { BlogPost, BlogCategory } from "@/lib/types";


const CATEGORY_LABELS: Record<BlogCategory, string> = {
  CAREER_ADVICE: "Career Advice",
  INTERVIEW_TIPS: "Interview Tips",
  SALARY_GUIDE: "Salary Guide",
  INDUSTRY_INSIGHTS: "Industry Insights",
  RESUME_TIPS: "Resume Tips",
  TECH_TRENDS: "Tech Trends",
};

const CATEGORY_COLORS: Record<BlogCategory, { bg: string; text: string }> = {
  CAREER_ADVICE: { bg: "bg-blue-100 dark:bg-blue-900/40", text: "text-blue-700 dark:text-blue-300" },
  INTERVIEW_TIPS: { bg: "bg-emerald-100 dark:bg-emerald-900/40", text: "text-emerald-700 dark:text-emerald-300" },
  SALARY_GUIDE: { bg: "bg-amber-100 dark:bg-amber-900/40", text: "text-amber-700 dark:text-amber-300" },
  INDUSTRY_INSIGHTS: { bg: "bg-violet-100 dark:bg-violet-900/40", text: "text-violet-700 dark:text-violet-300" },
  RESUME_TIPS: { bg: "bg-rose-100 dark:bg-rose-900/40", text: "text-rose-700 dark:text-rose-300" },
  TECH_TRENDS: { bg: "bg-cyan-100 dark:bg-cyan-900/40", text: "text-cyan-700 dark:text-cyan-300" },
};

const GRADIENT_FALLBACKS = [
  "from-blue-500 to-indigo-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-violet-500 to-purple-600",
  "from-rose-500 to-pink-600",
  "from-cyan-500 to-blue-600",
];

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const cat = CATEGORY_COLORS[post.category] ?? { bg: "bg-stone-100", text: "text-stone-700" };
  const gradient = GRADIENT_FALLBACKS[post.id % GRADIENT_FALLBACKS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Link
        to={`/blog/${post.slug}`}
        className="group relative flex flex-col h-full bg-white dark:bg-stone-950 rounded-2xl border border-stone-200 dark:border-white/10 hover:shadow-2xl hover:shadow-lime-400/5 hover:border-lime-400/30 transition-all duration-300 no-underline overflow-hidden"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          {post.featuredImage ? (
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className={`w-full h-full bg-linear-to-br ${gradient} opacity-80`} />
          )}
          {/* Category badge */}
          <span
            className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-semibold ${cat.bg} ${cat.text} backdrop-blur-sm`}
          >
            {CATEGORY_LABELS[post.category] ?? post.category}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="text-base font-bold text-stone-900 dark:text-stone-50 mb-2 leading-snug line-clamp-2 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
            {post.title}
          </h3>

          <p className="text-sm text-stone-500 dark:text-stone-400 line-clamp-3 leading-relaxed mb-4 flex-1">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between pt-3 border-t border-stone-100 dark:border-white/10">
            <div className="flex items-center gap-2 text-xs text-stone-400 dark:text-stone-500">
              <User className="w-3.5 h-3.5" />
              <span className="font-medium text-stone-600 dark:text-stone-400">{post.author.name}</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-stone-400 dark:text-stone-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {formatDate(post.publishedAt ?? post.createdAt)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readingTime} min
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {post.viewCount}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export { CATEGORY_LABELS, CATEGORY_COLORS };
