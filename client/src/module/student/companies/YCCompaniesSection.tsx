import { useState, useMemo } from "react";
import { Search, ExternalLink, ChevronDown, Building2, Rocket, X, Tag, Globe, Briefcase } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ycCompaniesData, YC_BATCHES } from "./ycCompaniesData";
import type { YCCompany } from "./ycCompaniesData";

const STATUS_COLORS: Record<string, string> = {
  Active: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  Acquired: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Public: "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
};

// ── Popup Modal ──────────────────────────────────────────────
function YCCompanyModal({ company, onClose }: { company: YCCompany; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.18 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4">
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-900/30 border border-orange-100 dark:border-orange-800 flex items-center justify-center shrink-0">
              <span className="text-orange-600 dark:text-orange-400 font-bold text-lg">{company.name.charAt(0)}</span>
            </div>
            <div className="min-w-0">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{company.name}</h3>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <span className="px-2 py-0.5 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-[10px] font-bold rounded-full border border-orange-100 dark:border-orange-800">
                  {company.batch}
                </span>
                <span className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${STATUS_COLORS[company.status] ?? "bg-gray-50 dark:bg-gray-950 text-gray-600 dark:text-gray-400"}`}>
                  {company.status}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-300 transition-colors shrink-0 ml-2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 pb-6 space-y-4">
          {/* Industry */}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Briefcase className="w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0" />
            <span className="font-medium">{company.industry}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{company.description}</p>

          {/* Tags */}
          {company.tags.length > 0 && (
            <div className="flex items-start gap-2">
              <Tag className="w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0 mt-0.5" />
              <div className="flex flex-wrap gap-1.5">
                {company.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-500 text-xs rounded-full border border-gray-100 dark:border-gray-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Website / Apply CTA */}
          <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
            <a
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors no-underline"
            >
              <Globe className="w-4 h-4" />
              Visit {company.name}
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
            <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-2">
              Opens the company website — check their careers page for job openings
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ── Company Card ─────────────────────────────────────────────
function YCCard({ company, onClick }: { company: YCCompany; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-left w-full bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all p-5 group"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
            <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">{company.name.charAt(0)}</span>
          </div>
          <div className="min-w-0">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white truncate group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
              {company.name}
            </h4>
            <p className="text-xs text-gray-400 dark:text-gray-500">{company.industry}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="px-2 py-0.5 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-[10px] font-bold rounded-full border border-orange-100 dark:border-orange-800">
            {company.batch}
          </span>
          <span className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${STATUS_COLORS[company.status] ?? "bg-gray-50 dark:bg-gray-950 text-gray-600 dark:text-gray-400"}`}>
            {company.status}
          </span>
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">{company.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {company.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-gray-50 dark:bg-gray-950 text-gray-500 dark:text-gray-500 text-[10px] rounded-full">
              #{tag}
            </span>
          ))}
        </div>
        <ExternalLink className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors" />
      </div>
    </button>
  );
}

// ── Section ───────────────────────────────────────────────────
export default function YCCompaniesSection() {
  const [search, setSearch] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("All");
  const [expanded, setExpanded] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<YCCompany | null>(null);

  const filtered = useMemo(() => {
    let list = [...ycCompaniesData];

    if (selectedBatch !== "All") {
      list = list.filter((c) => c.batch === selectedBatch);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.industry.toLowerCase().includes(q) ||
          c.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return list;
  }, [search, selectedBatch]);

  const displayedList = expanded ? filtered : filtered.slice(0, 6);

  return (
    <section className="mb-10">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-1">
        <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
          <Rocket className="w-4 h-4 text-orange-600 dark:text-orange-400" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">YC Companies</h2>
        <span className="px-2 py-0.5 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-semibold rounded-full border border-orange-100 dark:border-orange-800">
          Y Combinator
        </span>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-500 mb-5 ml-11">
        Explore top startups backed by Y Combinator. Click a company to see details and find job links.
      </p>

      {/* Search + Batch filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search YC companies..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
          />
        </div>

        {/* Batch dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <Building2 className="w-4 h-4" />
            Batch: <span className="font-medium text-gray-900 dark:text-white">{selectedBatch}</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <div className="absolute left-0 top-full z-20 mt-1 hidden min-w-[160px] max-h-[240px] overflow-y-auto rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-1 shadow-xl group-hover:block">
            {YC_BATCHES.map((batch) => (
              <button
                key={batch}
                onClick={() => setSelectedBatch(batch)}
                className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                  selectedBatch === batch
                    ? "bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 font-medium"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                {batch}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 dark:bg-gray-950 rounded-xl">
          <Building2 className="w-10 h-10 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
          <p className="text-sm text-gray-500 dark:text-gray-500">No YC companies match your search</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedList.map((company) => (
              <YCCard
                key={company.name}
                company={company}
                onClick={() => setSelectedCompany(company)}
              />
            ))}
          </div>

          {filtered.length > 6 && (
            <div className="mt-4 text-center">
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-medium text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30 hover:bg-orange-100 dark:hover:bg-orange-900/50 rounded-lg transition-colors"
              >
                {expanded ? "Show Less" : `Show All ${filtered.length} Companies`}
                <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
              </button>
            </div>
          )}
        </>
      )}

      {/* Company Detail Popup */}
      <AnimatePresence>
        {selectedCompany && (
          <YCCompanyModal
            company={selectedCompany}
            onClose={() => setSelectedCompany(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
