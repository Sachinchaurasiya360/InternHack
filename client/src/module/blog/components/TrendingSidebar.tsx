import { Link } from "react-router";
import { TrendingUp, Clock } from "lucide-react";
import { motion } from "framer-motion";

import type { BlogPost } from "@/lib/types";

interface TrendingSidebarProps {
  posts: BlogPost[];
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export default function TrendingSidebar({
  posts,
}: TrendingSidebarProps) {
  if (!posts.length) return null;

  return (
    <aside className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-900/30">
          <TrendingUp className="h-5 w-5 text-orange-600 dark:text-orange-400" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Trending
          </h3>

          <p className="text-xs text-gray-500 dark:text-gray-400">
            Popular reads right now
          </p>
        </div>
      </div>

      {/* Articles */}
      <div className="space-y-4">
        {posts.slice(0, 5).map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.05,
              duration: 0.3,
            }}
          >
            <Link
              to={`/blog/${post.slug}`}
              className="group flex gap-4 rounded-2xl border border-transparent p-3 transition-all hover:border-gray-200 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/60 no-underline"
            >
              {/* Ranking */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-sm font-black text-gray-700 dark:text-gray-300">
                {index + 1}
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <h4 className="line-clamp-2 text-sm font-semibold leading-snug text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h4>

                <div className="mt-2 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <Clock className="h-3.5 w-3.5" />

                  <span>
                    {formatDate(
                      post.publishedAt ??
                        post.createdAt
                    )}
                  </span>

                  <span>•</span>

                  <span>
                    {post.readingTime} min read
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </aside>
  );
}