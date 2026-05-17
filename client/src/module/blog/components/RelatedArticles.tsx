import { motion } from "framer-motion";
import type { BlogPost } from "@/lib/types";

import BlogCard from "./BlogCard";

interface RelatedArticlesProps {
  posts: BlogPost[];
}

export default function RelatedArticles({
  posts,
}: RelatedArticlesProps) {
  if (!posts.length) return null;

  return (
    <section className="mt-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white">
            Related Articles
          </h2>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Continue exploring similar insights and career resources
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
              duration: 0.35,
            }}
          >
            <BlogCard post={post} index={index} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}