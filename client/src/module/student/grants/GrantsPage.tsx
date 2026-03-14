import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
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
  Award,
  Users,
  ArrowRight,
  Info,
  Bookmark,
  BookmarkCheck,
  ClipboardList,
  Calendar,
} from "lucide-react";
import { grants, GRANT_CATEGORIES, type Grant, type GrantCategory } from "./grantsData";
import { SEO } from "../../../components/SEO";
import { Link } from "react-router";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  ClipboardList, Calendar,
};

/** Resolve a real logo for grants that only have placehold.co placeholders */
function resolveGrantLogo(logo: string, website: string): string {
  if (logo && !logo.includes("placehold.co")) return logo;
  try {
    const domain = new URL(website).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  } catch {
    return logo;
  }
}

const GUIDANCE_CARDS = [
  { to: "/student/grants/tracker", icon: "ClipboardList", title: "Application Tracker", desc: "Track your grant applications, statuses, and deadlines", iconColor: "text-emerald-500 dark:text-emerald-400", hoverBorder: "hover:border-emerald-300 dark:hover:border-emerald-600" },
  { to: "/student/grants/hackathons", icon: "Calendar", title: "Hackathon Calendar", desc: "Upcoming blockchain hackathons with prizes and details", iconColor: "text-amber-500 dark:text-amber-400", hoverBorder: "hover:border-amber-300 dark:hover:border-amber-600" },
];

const STATUS_CONFIG = {
  Active: { icon: CheckCircle2, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/30" },
  Paused: { icon: AlertCircle, color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-900/30" },
  "Invite Only": { icon: Lock, color: "text-violet-600 dark:text-violet-400", bg: "bg-violet-50 dark:bg-violet-900/30" },
};

const ECOSYSTEMS = Array.from(new Set(grants.map((g) => g.ecosystem))).sort();

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

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
    } catch { return new Set(); }
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
    if (showSavedOnly) {
      result = result.filter((g) => savedGrants.has(g.id));
    }
    if (selectedCategory === "ALL" && !search) {
      const catOrder = new Map(GRANT_CATEGORIES.map((c, i) => [c, i]));
      result = [...result].sort((a, b) => (catOrder.get(a.category) ?? 99) - (catOrder.get(b.category) ?? 99));
    }
    return result;
  }, [search, selectedCategory, selectedEcosystem, selectedStatus, showSavedOnly, savedGrants]);

  const activeFilters =
    (selectedCategory !== "ALL" ? 1 : 0) +
    (selectedEcosystem !== "ALL" ? 1 : 0) +
    (selectedStatus !== "ALL" ? 1 : 0);

  const clearFilters = () => {
    setSelectedCategory("ALL");
    setSelectedEcosystem("ALL");
    setSelectedStatus("ALL");
    setSearch("");
  };

  return (
    <div className="relative pb-12">
      <SEO title="Grants & Funding" noIndex />

      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-linear-to-br from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-linear-to-tr from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-full blur-3xl opacity-40" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-10 mt-6"
      >
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
          Grants & <span className="text-gradient-accent">Funding</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
          Discover {grants.length}+ grants across Web3, government, research, climate, AI, and more
        </p>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
      >
        {[
          { label: "Total Grants", count: grants.length, icon: Award },
          { label: "Active", count: grants.filter((g) => g.status === "Active").length, icon: CheckCircle2 },
          { label: "Ecosystems", count: ECOSYSTEMS.length, icon: Globe },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 text-center"
          >
            <div className="w-10 h-10 rounded-xl bg-gray-950 dark:bg-white flex items-center justify-center mx-auto mb-3">
              <stat.icon className="w-4.5 h-4.5 text-white dark:text-gray-950" />
            </div>
            <p className="font-display text-2xl font-bold text-gray-950 dark:text-white">{stat.count}</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mt-0.5">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Guidance cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="grid grid-cols-2 gap-3 mb-8"
      >
        {GUIDANCE_CARDS.map((card, i) => {
          const Icon = ICON_MAP[card.icon];
          return (
            <motion.div
              key={card.to}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.05 }}
            >
              <Link
                to={card.to}
                className={`block p-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl ${card.hoverBorder} hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300 no-underline group`}
              >
                {Icon && <Icon className={`w-5 h-5 ${card.iconColor} mb-2`} />}
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">{card.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-500 line-clamp-2">{card.desc}</p>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Search & Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-3 mb-8"
      >
        <div className="bg-white dark:bg-gray-900 p-3 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-lg shadow-black/4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search grants by name, organization, or ecosystem..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all dark:text-white dark:placeholder-gray-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          <Filter className="w-4 h-4 text-gray-400 shrink-0" />
          <button
            onClick={() => setSelectedCategory("ALL")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              selectedCategory === "ALL"
                ? "bg-gray-950 dark:bg-white text-white dark:text-gray-950"
                : "bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
            }`}
          >
            All
          </button>
          {GRANT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat === selectedCategory ? "ALL" : cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-gray-950 dark:bg-white text-white dark:text-gray-950"
                  : "bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}

          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeFilters > 0
                ? "bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800"
                : "bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
            }`}
          >
            <Filter className="w-3.5 h-3.5" />
            More
            {activeFilters > 0 && (
              <span className="w-4 h-4 rounded-full bg-amber-500 text-white text-[10px] flex items-center justify-center">
                {activeFilters}
              </span>
            )}
            <ChevronDown className={`w-3 h-3 transition-transform ${showFilters ? "rotate-180" : ""}`} />
          </button>

          <button
            onClick={() => setShowSavedOnly(!showSavedOnly)}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              showSavedOnly
                ? "bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800"
                : "bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            Saved ({savedGrants.size})
          </button>
        </div>
      </motion.div>

      {/* Expanded filters */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mb-6"
          >
            <div className="flex flex-wrap gap-4 p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
              <div>
                <label className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-2 block">Ecosystem</label>
                <select
                  value={selectedEcosystem}
                  onChange={(e) => setSelectedEcosystem(e.target.value)}
                  className="px-3 py-2 rounded-xl text-sm border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                >
                  <option value="ALL">All Ecosystems</option>
                  {ECOSYSTEMS.map((eco) => (
                    <option key={eco} value={eco}>{eco}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-2 block">Status</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-3 py-2 rounded-xl text-sm border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                >
                  <option value="ALL">All Statuses</option>
                  <option value="Active">Active</option>
                  <option value="Paused">Paused</option>
                  <option value="Invite Only">Invite Only</option>
                </select>
              </div>
              {activeFilters > 0 && (
                <div className="flex items-end">
                  <button
                    onClick={clearFilters}
                    className="px-3 py-2 text-sm text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 underline underline-offset-2"
                  >
                    Clear all
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results count */}
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm text-gray-500 dark:text-gray-500">
          <span className="font-semibold text-gray-900 dark:text-white">{filtered.length}</span> grant{filtered.length !== 1 ? "s" : ""}
          {selectedCategory !== "ALL" && <> in <span className="font-semibold text-gray-900 dark:text-white">{selectedCategory}</span></>}
          {search && <> matching &quot;<span className="font-semibold text-gray-900 dark:text-white">{search}</span>&quot;</>}
        </p>
      </div>

      {/* Grants list */}
      {filtered.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800"
        >
          <div className="w-16 h-16 rounded-2xl bg-gray-950 dark:bg-white flex items-center justify-center mx-auto mb-4">
            <Award className="w-7 h-7 text-white dark:text-gray-950" />
          </div>
          <h3 className="font-display text-lg font-bold text-gray-950 dark:text-white mb-2">No grants found</h3>
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-6 max-w-sm mx-auto">
            Try adjusting your search or filters to find more grants.
          </p>
          <button onClick={clearFilters}
            className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
            Clear filters
          </button>
        </motion.div>
      ) : (
        <div className="space-y-3">
          {filtered.map((grant, i) => (
            <GrantCard key={grant.id} grant={grant} index={i} onClick={() => setSelectedGrant(grant)} saved={savedGrants.has(grant.id)} onToggleSave={() => toggleSave(grant.id)} />
          ))}
        </div>
      )}

      {/* Detail modal */}
      <AnimatePresence>
        {selectedGrant && (
          <GrantDetailModal grant={selectedGrant} onClose={() => setSelectedGrant(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function GrantCard({ grant, index, onClick, saved, onToggleSave }: { grant: Grant; index: number; onClick: () => void; saved: boolean; onToggleSave: () => void }) {
  const statusCfg = STATUS_CONFIG[grant.status];
  const StatusIcon = statusCfg.icon;
  const logoSrc = resolveGrantLogo(grant.logo, grant.website);

  return (
    <motion.div
      custom={index}
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300 overflow-hidden"
    >
      <button onClick={onClick} className="w-full text-left p-5 sm:p-6">
        <div className="flex items-start gap-4">
          {/* Logo / Initial */}
          <div className="w-11 h-11 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center overflow-hidden shrink-0">
            <img
              src={logoSrc}
              alt={grant.organization}
              className="w-6 h-6 object-contain"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.style.display = "none";
                const span = document.createElement("span");
                span.className = "text-sm font-bold text-gray-400";
                span.textContent = grant.organization.charAt(0);
                img.parentElement?.appendChild(span);
              }}
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-gray-950 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate">
                  {grant.name}
                </h3>
                <div className="flex items-center gap-3 mt-1 text-sm text-gray-500 dark:text-gray-500">
                  <span className="truncate">{grant.organization}</span>
                  <span className="flex items-center gap-1 shrink-0">
                    <DollarSign className="w-3.5 h-3.5" />{grant.fundingAmount}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span
                  role="button"
                  onClick={(e) => { e.stopPropagation(); onToggleSave(); }}
                  className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {saved ? <BookmarkCheck className="w-4 h-4 text-amber-500" /> : <Bookmark className="w-4 h-4 text-gray-400" />}
                </span>
                <div className={`flex items-center gap-1 px-2.5 py-1 rounded-lg ${statusCfg.bg}`}>
                  <StatusIcon className={`w-3 h-3 ${statusCfg.color}`} />
                  <span className={`text-xs font-medium ${statusCfg.color}`}>{grant.status}</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-500 line-clamp-1 mt-2">{grant.description}</p>

            {/* Bottom row */}
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50 dark:border-gray-800">
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-medium">
                  {grant.category}
                </span>
                <span className="px-2 py-0.5 rounded bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium">
                  {grant.ecosystem}
                </span>
              </div>
              <span className="flex items-center gap-1 text-xs font-medium text-gray-400 dark:text-gray-500">
                Details <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </button>
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 px-6 py-4 rounded-t-2xl flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center overflow-hidden">
              <img
                src={logoSrc}
                alt={grant.organization}
                className="w-6 h-6 object-contain"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.style.display = "none";
                  const span = document.createElement("span");
                  span.className = "text-sm font-bold text-gray-400";
                  span.textContent = grant.organization.charAt(0);
                  img.parentElement?.appendChild(span);
                }}
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">{grant.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-500">{grant.organization}</p>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center transition-colors">
            <X className="w-4 h-4 text-gray-500 dark:text-gray-500" />
          </button>
        </div>

        <div className="px-6 py-6 space-y-6">
          <div className="flex flex-wrap gap-3">
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl ${statusCfg.bg}`}>
              <StatusIcon className={`w-4 h-4 ${statusCfg.color}`} />
              <span className={`text-sm font-medium ${statusCfg.color}`}>{grant.status}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-50 dark:bg-gray-800">
              <DollarSign className="w-4 h-4 text-gray-500 dark:text-gray-500" />
              <span className="text-sm font-semibold text-gray-900 dark:text-white">{grant.fundingAmount}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-50 dark:bg-gray-800">
              <Globe className="w-4 h-4 text-gray-500 dark:text-gray-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{grant.ecosystem}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-900/30">
              <Tag className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className="text-sm font-medium text-amber-700 dark:text-amber-400">{grant.category}</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-gray-400 dark:text-gray-500" /> About
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{grant.description}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-1.5">
              <Wand2 className="w-4 h-4 text-amber-500" /> Highlights
            </h3>
            <div className="space-y-2">
              {grant.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  {h}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-gray-400 dark:text-gray-500" /> Eligibility & Requirements
            </h3>
            <div className="space-y-2">
              {grant.eligibility.map((e, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 mt-1.5 shrink-0" />
                  {e}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {grant.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-xs font-medium text-gray-600 dark:text-gray-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <a
            href={grant.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors no-underline"
          >
            Apply Now
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
