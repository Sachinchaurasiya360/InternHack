import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Compass, Cpu, Palette, BarChart2, Box, Shield, ShoppingBag, Layers, SlidersHorizontal, Sparkles } from "lucide-react";
import api from "../../lib/axios";
import type { Career, CareerCategory } from "../../lib/types";
import CareerCard from "./components/CareerCard";
import { Navbar } from "../../components/Navbar";
import { SEO } from "../../components/SEO";

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

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
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

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <SEO
        title="Career Roadmaps"
        description="Explore guided career roadmaps across Engineering, Data, Design, DevOps, Security, Product, and Marketing. Follow step-by-step learning paths from beginner to expert."
        keywords="career roadmap, learning path, career guide, engineering career, data science career, design career, career progression, skill development"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#fafafa] pt-28 pb-20 px-6">
        {/* Gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-125 h-125 rounded-full bg-linear-to-br from-indigo-100 to-violet-100 opacity-60 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-100 h-100 rounded-full bg-linear-to-tr from-slate-100 to-blue-100 opacity-60 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full border border-black/3" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/10 shadow-sm text-sm text-gray-600 mb-8"
          >
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span>Guided Learning Paths</span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-950 mb-4"
          >
            Career Roadmaps
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-lg text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Structured paths with skills, resources, and per-topic checklists to guide every step of your journey.
          </motion.p>

          {/* Search bar */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="relative max-w-lg mx-auto"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search — Full Stack, Data Science, DevOps..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-5 py-3.5 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300 transition-all shadow-sm"
            />
          </motion.div>

          {/* Quick stat pills */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex items-center justify-center gap-4 mt-6"
          >
            <span className="text-gray-400 text-sm">{careers.length} paths available</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="text-gray-400 text-sm">Topic-level checklists</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="text-gray-400 text-sm">Track your progress</span>
          </motion.div>
        </div>
      </section>

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
                    ? "bg-gray-950 text-white border-gray-950 shadow-sm"
                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm"
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
              <div key={i} className="bg-white rounded-2xl border border-gray-200 animate-pulse p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 bg-gray-100 rounded-xl" />
                  <div className="h-6 bg-gray-100 rounded-lg w-24" />
                </div>
                <div className="h-5 bg-gray-100 rounded-lg w-3/4 mb-3" />
                <div className="h-3 bg-gray-100 rounded w-full mb-2" />
                <div className="h-3 bg-gray-100 rounded w-2/3 mb-6" />
                <div className="flex gap-4 mb-5">
                  <div className="h-4 bg-gray-100 rounded w-20" />
                  <div className="h-4 bg-gray-100 rounded w-16" />
                </div>
                <div className="h-px bg-gray-100 mb-4" />
                <div className="flex justify-between">
                  <div className="h-3 bg-gray-100 rounded w-20" />
                  <div className="h-3 bg-gray-100 rounded w-16" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gray-100">
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
