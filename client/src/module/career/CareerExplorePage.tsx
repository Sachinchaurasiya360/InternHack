import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Compass, Cpu, Palette, BarChart2, Box, Shield, ShoppingBag, Layers, SlidersHorizontal } from "lucide-react";
import api from "../../lib/axios";
import type { Career, CareerCategory } from "../../lib/types";
import CareerCard from "./components/CareerCard";
import { Navbar } from "../../components/Navbar";

const CATEGORIES: { label: string; value: CareerCategory | "ALL"; icon: React.ReactNode }[] = [
  { label: "All", value: "ALL", icon: <Layers className="w-3.5 h-3.5" /> },
  { label: "Engineering", value: "ENGINEERING", icon: <Cpu className="w-3.5 h-3.5" /> },
  { label: "Data", value: "DATA", icon: <BarChart2 className="w-3.5 h-3.5" /> },
  { label: "Design", value: "DESIGN", icon: <Palette className="w-3.5 h-3.5" /> },
  { label: "DevOps", value: "DEVOPS", icon: <Box className="w-3.5 h-3.5" /> },
  { label: "Security", value: "SECURITY", icon: <Shield className="w-3.5 h-3.5" /> },
  { label: "Product", value: "PRODUCT", icon: <ShoppingBag className="w-3.5 h-3.5" /> },
  { label: "Marketing", value: "MARKETING", icon: <SlidersHorizontal className="w-3.5 h-3.5" /> },
];

const CATEGORY_GRADIENTS: Record<string, string> = {
  ALL: "from-gray-900 to-gray-700",
  ENGINEERING: "from-blue-600 to-blue-900",
  DATA: "from-purple-600 to-purple-900",
  DESIGN: "from-pink-500 to-rose-800",
  DEVOPS: "from-cyan-600 to-teal-900",
  SECURITY: "from-red-600 to-red-900",
  PRODUCT: "from-orange-500 to-amber-800",
  MARKETING: "from-green-600 to-emerald-900",
  OTHER: "from-gray-600 to-gray-900",
};

export default function CareerExplorePage() {
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<CareerCategory | "ALL">("ALL");

  useEffect(() => {
    api.get("/careers").then((res) => {
      setCareers(res.data.careers);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const filtered = careers.filter((c) => {
    if (category !== "ALL" && c.category !== category) return false;
    if (search && !c.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const gradient = CATEGORY_GRADIENTS[category] ?? CATEGORY_GRADIENTS["ALL"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Dynamic hero — colour shifts with selected category */}
      <div className={`bg-gradient-to-br ${gradient} pt-28 pb-16 px-6 transition-all duration-500`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-5 border border-white/20"
          >
            <Compass className="w-8 h-8 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-white mb-3"
          >
            Career Roadmaps
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-white/70 text-lg max-w-xl mx-auto mb-8"
          >
            Structured paths with skills, resources, and per-topic checklists to guide every step.
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-lg mx-auto"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
            <input
              type="text"
              placeholder="Search — Full Stack, Data Science, DevOps..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-5 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/15 transition-all"
            />
          </motion.div>

          {/* Quick stat pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4 mt-6"
          >
            <span className="text-white/60 text-sm">{careers.length} paths available</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/60 text-sm">Topic-level checklists</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/60 text-sm">Track your progress</span>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Category filter chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {CATEGORIES.map((cat) => {
            const active = category === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
                  active
                    ? "bg-gray-900 text-white border-gray-900 shadow-sm"
                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-gray-900">{filtered.length}</span> career path{filtered.length !== 1 ? "s" : ""}
            {category !== "ALL" && <> in <span className="font-semibold text-gray-900">{category}</span></>}
            {search && <> matching "<span className="font-semibold text-gray-900">{search}</span>"</>}
          </p>
          {(search || category !== "ALL") && (
            <button
              onClick={() => { setSearch(""); setCategory("ALL"); }}
              className="text-xs text-gray-400 hover:text-gray-700 transition-colors underline underline-offset-2"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Career grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6 animate-pulse">
                <div className="h-3 bg-gray-100 rounded w-1/3 mb-4" />
                <div className="h-5 bg-gray-100 rounded w-3/4 mb-3" />
                <div className="h-3 bg-gray-100 rounded w-full mb-2" />
                <div className="h-3 bg-gray-100 rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-2xl border border-gray-100">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Compass className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1">No careers found</h3>
            <p className="text-sm text-gray-400">Try a different search term or select another category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((career, i) => (
              <CareerCard key={career.id} career={career} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
