import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ExternalLink,
  X,
  DollarSign,
  CheckCircle2,
  AlertCircle,
  Lock,
  ChevronDown,
  Wand2,
  Globe,
  Tag,
  Users,
  ArrowUpRight,
  Info,
  Bookmark,
  BookmarkCheck,
  ClipboardList,
} from "lucide-react";
import { grants, GRANT_CATEGORIES, type Grant, type GrantCategory } from "./grantsData";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { Link } from "react-router";

function resolveGrantLogo(logo: string, website: string): string {
  if (logo && !logo.includes("placehold.co")) return logo;
  try {
    const domain = new URL(website).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  } catch {
    return logo;
  }
}

const STATUS_CONFIG = {
  Active:        { icon: CheckCircle2, color: "text-lime-600 dark:text-lime-400",     border: "border-lime-300 dark:border-lime-900/60" },
  Paused:        { icon: AlertCircle,  color: "text-amber-600 dark:text-amber-400",   border: "border-amber-300 dark:border-amber-900/60" },
  "Invite Only": { icon: Lock,         color: "text-violet-600 dark:text-violet-400", border: "border-violet-300 dark:border-violet-900/60" },
};

const ECOSYSTEMS = Array.from(new Set(grants.map((g) => g.ecosystem))).sort();

function MetaChip({ icon, children, className = "" }: { icon?: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider border rounded-md ${className || "text-stone-600 dark:text-stone-400 border-stone-200 dark:border-white/10"}`}>
      {icon && <span className="text-stone-400">{icon}</span>}
      {children}
    </span>
  );
}

export default function GrantsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<GrantCategory | "ALL">("ALL");
  const [selectedEcosystem, setSelectedEcosystem] = useState<string>("ALL");
  const [selectedStatus, setSelectedStatus] = useState<string>("ALL");
  const [selectedGrant, setSelectedGrant] = useState<Grant | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [savedGrants, setSavedGrants] = useState<Set<number>>(() => {
    try {
      const stored = localStorage.getItem("savedGrants");
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch {
      return new Set();
    }
  });
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  const toggleSave = (grantId: number) => {
    setSavedGrants((prev) => {
      const next = new Set(prev);
      if (next.has(grantId)) next.delete(grantId);
      else next.add(grantId);
      localStorage.setItem("savedGrants", JSON.stringify([...next]));
      return next;
    });
  };

  const filtered = useMemo(() => {
    let result = grants.filter((g) => {
      if (selectedCategory !== "ALL" && g.category !== selectedCategory) return false;
      if (selectedEcosystem !== "ALL" && g.ecosystem !== selectedEcosystem) return false;
      if (selectedStatus !== "ALL" && g.status !== selectedStatus) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          g.name.toLowerCase().includes(q) ||
          g.organization.toLowerCase().includes(q) ||
          g.ecosystem.toLowerCase().includes(q) ||
          g.tags.some((t) => t.toLowerCase().includes(q))
        );
      }
      return true;
    });
    if (showSavedOnly) result = result.filter((g) => savedGrants.has(g.id));
    if (selectedCategory === "ALL" && !search) {
      const catOrder = new Map(GRANT_CATEGORIES.map((c, i) => [c, i]));
      result = [...result].sort(
        (a, b) => (catOrder.get(a.category) ?? 99) - (catOrder.get(b.category) ?? 99),
      );
    }
    return result;
  }, [search, selectedCategory, selectedEcosystem, selectedStatus, showSavedOnly, savedGrants]);

  const activeFilters =
    (selectedEcosystem !== "ALL" ? 1 : 0) +
    (selectedStatus !== "ALL" ? 1 : 0);

  const clearFilters = () => {
    setSelectedCategory("ALL");
    setSelectedEcosystem("ALL");
    setSelectedStatus("ALL");
    setSearch("");
  };

  const activeCount = grants.filter((g) => g.status === "Active").length;

  return (
    <div className="relative text-stone-900 dark:text-stone-50 pb-12">
      <SEO
        title="Grants & Funding for Students"
        description="Discover grants, scholarships, and funding opportunities for students. Browse tech grants, research funding, and startup grants."
        keywords="student grants, tech scholarships, research funding, startup grants, student funding"
        canonicalUrl={canonicalUrl("/grants")}
      />

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.05] z-0"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(120,113,108,0.25) 1px, transparent 1px)",
          backgroundSize: "120px 100%",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6 mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
              <span className="h-1.5 w-1.5 bg-lime-400" />
              student / grants
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              Fund your{" "}
              <span className="relative inline-block">
                <span className="relative z-10">work.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                  aria-hidden
                  className="absolute bottom-1 left-0 right-0 h-3 md:h-4 bg-lime-400 origin-left z-0"
                />
              </span>
            </h1>
            <p className="mt-3 text-sm text-stone-500 max-w-md">
              Grants, scholarships, and funding across Web3, government, research, climate, and AI, curated for student builders.
            </p>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-stone-500">
            <span>
              total
              <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                {grants.length}
              </span>
            </span>
            <span>
              active
              <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                {activeCount}
              </span>
            </span>
            <span>
              ecosystems
              <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-2">
                {ECOSYSTEMS.length}
              </span>
            </span>
          </div>
        </motion.div>

        {/* Tracker strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-6"
        >
          <Link
            to="/student/grants/tracker"
            className="group flex items-center gap-4 px-5 py-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md hover:border-stone-400 dark:hover:border-white/30 transition-colors no-underline"
          >
            <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
              <ClipboardList className="w-4 h-4 text-stone-600 dark:text-stone-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-stone-900 dark:text-stone-50">
                Application tracker
              </p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-0.5">
                deadlines / statuses / follow-ups
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
          </Link>
        </motion.div>

        {/* Search + filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search grants by name, organization, or ecosystem..."
              className="w-full pl-11 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mr-1">
              category /
            </span>
            {(["ALL", ...GRANT_CATEGORIES] as const).map((cat, i) => {
              const active = selectedCategory === cat;
              return (
                <motion.button
                  key={cat}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.02, duration: 0.2 }}
                  onClick={() =>
                    setSelectedCategory(
                      cat === "ALL" ? "ALL" : cat === selectedCategory ? "ALL" : cat,
                    )
                  }
                  className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                    active
                      ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                      : "bg-transparent text-stone-600 dark:text-stone-400 border-stone-300 dark:border-white/10 hover:border-stone-500 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50"
                  }`}
                >
                  {cat === "ALL" ? "All" : cat}
                </motion.button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-widest border transition-colors cursor-pointer ${
                activeFilters > 0
                  ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                  : "bg-transparent text-stone-600 dark:text-stone-400 border-stone-300 dark:border-white/10 hover:border-stone-500 dark:hover:border-white/30"
              }`}
            >
              more filters
              {activeFilters > 0 && (
                <span className="inline-flex items-center justify-center h-4 min-w-4 px-1 bg-lime-400 text-stone-900 text-[10px] font-bold rounded">
                  {activeFilters}
                </span>
              )}
              <ChevronDown className={`w-3 h-3 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </button>

            <button
              onClick={() => setShowSavedOnly(!showSavedOnly)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-widest border transition-colors cursor-pointer ${
                showSavedOnly
                  ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                  : "bg-transparent text-stone-600 dark:text-stone-400 border-stone-300 dark:border-white/10 hover:border-stone-500 dark:hover:border-white/30"
              }`}
            >
              <Bookmark className="w-3 h-3" />
              saved ({savedGrants.size})
            </button>

            <AnimatePresence>
              {(activeFilters > 0 || search || selectedCategory !== "ALL" || showSavedOnly) && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                  onClick={() => {
                    clearFilters();
                    setShowSavedOnly(false);
                  }}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-red-500 transition-colors border-0 bg-transparent cursor-pointer"
                >
                  <X className="w-3 h-3" /> clear
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-4 p-4 bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10">
                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2 block">
                      ecosystem
                    </label>
                    <select
                      value={selectedEcosystem}
                      onChange={(e) => setSelectedEcosystem(e.target.value)}
                      className="px-3 py-2 rounded-md text-sm border border-stone-300 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-50 focus:outline-none focus:border-lime-400 transition-colors"
                    >
                      <option value="ALL">All ecosystems</option>
                      {ECOSYSTEMS.map((eco) => (
                        <option key={eco} value={eco}>
                          {eco}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2 block">
                      status
                    </label>
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="px-3 py-2 rounded-md text-sm border border-stone-300 dark:border-white/10 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-50 focus:outline-none focus:border-lime-400 transition-colors"
                    >
                      <option value="ALL">All statuses</option>
                      <option value="Active">Active</option>
                      <option value="Paused">Paused</option>
                      <option value="Invite Only">Invite Only</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Section header */}
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
              <span className="h-1 w-1 bg-lime-400" />
              open / funding
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              {showSavedOnly ? "Saved grants" : "Available grants"}
            </h2>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 hidden sm:block">
            {filtered.length} results
          </span>
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md">
            <p className="text-sm text-stone-600 dark:text-stone-400">No grants match your filters.</p>
            <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-2">
              try different search criteria
            </p>
            <button
              onClick={clearFilters}
              className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest text-stone-900 dark:text-stone-50 border border-stone-300 dark:border-white/15 rounded-md hover:bg-lime-400 hover:border-lime-400 hover:text-stone-900 transition-colors cursor-pointer"
            >
              clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((grant, i) => (
              <GrantCard
                key={grant.id}
                grant={grant}
                index={i}
                onClick={() => setSelectedGrant(grant)}
                saved={savedGrants.has(grant.id)}
                onToggleSave={() => toggleSave(grant.id)}
              />
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedGrant && (
          <GrantDetailModal grant={selectedGrant} onClose={() => setSelectedGrant(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function GrantCard({
  grant,
  index,
  onClick,
  saved,
  onToggleSave,
}: {
  grant: Grant;
  index: number;
  onClick: () => void;
  saved: boolean;
  onToggleSave: () => void;
}) {
  const statusCfg = STATUS_CONFIG[grant.status];
  const StatusIcon = statusCfg.icon;
  const logoSrc = resolveGrantLogo(grant.logo, grant.website);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
    >
      <div
        onClick={onClick}
        className="group relative flex flex-col bg-white dark:bg-stone-900 p-5 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 transition-colors h-full cursor-pointer"
      >
        <span
          role="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave();
          }}
          className="absolute top-4 right-4 p-1 rounded hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
        >
          {saved ? (
            <BookmarkCheck className="w-4 h-4 text-lime-500" />
          ) : (
            <Bookmark className="w-4 h-4 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300" />
          )}
        </span>

        <div className="flex items-start gap-3 mb-3 pr-10">
          <div className="w-10 h-10 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center overflow-hidden shrink-0">
            <img
              src={logoSrc}
              alt={grant.organization}
              className="w-6 h-6 object-contain"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.style.display = "none";
                const span = document.createElement("span");
                span.className = "text-sm font-bold text-stone-600 dark:text-stone-300";
                span.textContent = grant.organization.charAt(0);
                img.parentElement?.appendChild(span);
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 line-clamp-1 leading-tight group-hover:text-lime-700 dark:group-hover:text-lime-400 transition-colors">
              {grant.name}
            </h3>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500 mt-0.5 block truncate">
              {grant.organization}
            </span>
          </div>
        </div>

        <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 mb-4 leading-relaxed">
          {grant.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          <MetaChip
            icon={<StatusIcon className={`w-3 h-3 ${statusCfg.color}`} />}
            className={`${statusCfg.color} ${statusCfg.border}`}
          >
            {grant.status}
          </MetaChip>
          <MetaChip icon={<DollarSign className="w-3 h-3" />}>{grant.fundingAmount}</MetaChip>
          <MetaChip icon={<Globe className="w-3 h-3" />}>{grant.ecosystem}</MetaChip>
          <MetaChip icon={<Tag className="w-3 h-3" />}>{grant.category}</MetaChip>
        </div>

        <div className="mt-auto flex items-center justify-between pt-3 border-t border-stone-100 dark:border-white/5">
          <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">
            view details
          </span>
          <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
        </div>
      </div>
    </motion.div>
  );
}

function GrantDetailModal({ grant, onClose }: { grant: Grant; onClose: () => void }) {
  const statusCfg = STATUS_CONFIG[grant.status];
  const StatusIcon = statusCfg.icon;
  const logoSrc = resolveGrantLogo(grant.logo, grant.website);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-white/10 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center overflow-hidden shrink-0">
              <img
                src={logoSrc}
                alt={grant.organization}
                className="w-6 h-6 object-contain"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.style.display = "none";
                  const span = document.createElement("span");
                  span.className = "text-sm font-bold text-stone-600 dark:text-stone-300";
                  span.textContent = grant.organization.charAt(0);
                  img.parentElement?.appendChild(span);
                }}
              />
            </div>
            <div className="min-w-0">
              <h2 className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50 truncate">
                {grant.name}
              </h2>
              <p className="text-xs font-mono uppercase tracking-widest text-stone-500 truncate">
                {grant.organization}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4 text-stone-500" />
          </button>
        </div>

        <div className="px-6 py-6 space-y-6">
          <div className="flex flex-wrap gap-1.5">
            <MetaChip
              icon={<StatusIcon className={`w-3 h-3 ${statusCfg.color}`} />}
              className={`${statusCfg.color} ${statusCfg.border}`}
            >
              {grant.status}
            </MetaChip>
            <MetaChip icon={<DollarSign className="w-3 h-3" />}>{grant.fundingAmount}</MetaChip>
            <MetaChip icon={<Globe className="w-3 h-3" />}>{grant.ecosystem}</MetaChip>
            <MetaChip icon={<Tag className="w-3 h-3" />}>{grant.category}</MetaChip>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
              <Info className="w-3 h-3" /> about
            </div>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
              {grant.description}
            </p>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-3">
              <Wand2 className="w-3 h-3 text-lime-500" /> highlights
            </div>
            <div className="space-y-2">
              {grant.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-stone-600 dark:text-stone-400">
                  <CheckCircle2 className="w-4 h-4 text-lime-500 mt-0.5 shrink-0" />
                  {h}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-3">
              <Users className="w-3 h-3" /> eligibility
            </div>
            <div className="space-y-2">
              {grant.eligibility.map((e, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-stone-600 dark:text-stone-400">
                  <span className="w-1 h-1 bg-lime-400 mt-2 shrink-0" />
                  {e}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-3">
              tags
            </div>
            <div className="flex flex-wrap gap-1.5">
              {grant.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded text-[10px] font-mono uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <a
            href={grant.website}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 w-full py-3.5 rounded-md bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 text-sm font-bold tracking-tight hover:bg-lime-400 hover:text-stone-900 dark:hover:bg-lime-400 dark:hover:text-stone-900 transition-colors no-underline"
          >
            Apply now
            <ExternalLink className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
