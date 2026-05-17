import { motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";

interface BlogHeroProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function BlogHero({
  search,
  setSearch,
}: BlogHeroProps) {
  return (
    <section className="relative overflow-hidden bg-stone-50 dark:bg-stone-950 px-6 py-14 md:px-10 md:py-20">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gray-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gray-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 mb-6"
        >
          <Sparkles className="w-4 h-4 text-yellow-500" />
          <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
            Insights, career growth & tech trends
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.45 }}
          className="text-4xl md:text-6xl font-black tracking-tight text-stone-900 dark:text-white leading-tight"
        >
          Explore the{" "}
          <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
            InternHack Blog
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45 }}
          className="mt-6 text-base md:text-lg text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl mx-auto"
        >
          Discover interview tips, resume strategies, salary guides,
          career advice, and the latest trends shaping the tech industry.
        </motion.p>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.45 }}
          className="mt-10 max-w-2xl mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />

            <input
              type="text"
              placeholder="Search articles, topics, tags..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-14 rounded-2xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 pl-12 pr-4 text-sm md:text-base text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500/20 focus:border-stone-500 transition-all"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}