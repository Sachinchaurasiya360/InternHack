import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Search, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router";

const QUICK_EXAMS = [
  { label: "JEE Main", slug: "jee-main" },
  { label: "NEET", slug: "neet-ug" },
  { label: "CAT", slug: "cat" },
  { label: "GATE", slug: "gate" },
  { label: "MHT-CET", slug: "mht-cet" },
  { label: "CUET", slug: "cuet-ug" },
];

const QUICK_STREAMS = [
  "Engineering",
  "Medical",
  "Management",
  "Law",
  "Design",
  "Science",
];

export function CollegeDiscoverySection() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) navigate(`/colleges?search=${encodeURIComponent(query.trim())}`);
  };

  return (
    <section className="relative py-24 md:py-32 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/40 to-transparent dark:from-blue-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-6">
            <GraduationCap className="w-3.5 h-3.5" />
            College Discovery
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-950 dark:text-white tracking-tight mb-4">
            Find your dream college
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Explore 39,000+ colleges across India. Compare placements, fees, rankings, and reviews all in one place.
          </p>
        </motion.div>

        {/* Search bar */}
        <motion.form
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search colleges by name, city, or state..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-32 py-4 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2.5 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Search
            </button>
          </div>
        </motion.form>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          {/* Exam chips */}
          <div className="mb-6">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3 text-center">Browse by Entrance Exam</p>
            <div className="flex flex-wrap justify-center gap-2">
              {QUICK_EXAMS.map((exam) => (
                <Link
                  key={exam.slug}
                  to={`/colleges/exam/${exam.slug}`}
                  className="px-4 py-2 text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors no-underline"
                >
                  {exam.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Stream chips */}
          <div className="mb-8">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3 text-center">Browse by Stream</p>
            <div className="flex flex-wrap justify-center gap-2">
              {QUICK_STREAMS.map((stream) => (
                <Link
                  key={stream}
                  to={`/colleges?stream=${encodeURIComponent(stream)}`}
                  className="px-4 py-2 text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:border-emerald-300 dark:hover:border-emerald-600 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors no-underline"
                >
                  {stream}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              to="/colleges"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-950 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors no-underline group"
            >
              Explore all colleges
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
