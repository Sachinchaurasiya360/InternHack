import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Compass } from "lucide-react";
import api from "../../lib/axios";
import type { Career, CareerCategory } from "../../lib/types";
import CareerCard from "./components/CareerCard";

const CATEGORIES: { label: string; value: CareerCategory | "ALL" }[] = [
  { label: "All", value: "ALL" },
  { label: "Engineering", value: "ENGINEERING" },
  { label: "Data", value: "DATA" },
  { label: "Design", value: "DESIGN" },
  { label: "DevOps", value: "DEVOPS" },
  { label: "Security", value: "SECURITY" },
  { label: "Product", value: "PRODUCT" },
  { label: "Marketing", value: "MARKETING" },
  { label: "Other", value: "OTHER" },
];

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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Compass className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Career Roadmaps</h1>
          <p className="text-gray-500 max-w-lg mx-auto">
            Explore structured career paths with skills, resources, and tools to guide your journey.
          </p>
        </motion.div>

        {/* Search + Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search careers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  category === cat.value
                    ? "bg-black text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Career Grid */}
        {loading ? (
          <div className="text-center py-16 text-gray-500">Loading careers...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-500">No careers found matching your criteria.</div>
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
