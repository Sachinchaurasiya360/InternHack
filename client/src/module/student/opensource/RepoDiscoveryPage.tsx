import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Star,
  GitFork,
  CircleDot,
  ExternalLink,
  X,
  ChevronDown,
  TrendingUp,
  Filter,
  Code2,
  Sparkles,
  Globe,
  Flame,
  ArrowUpRight,
} from "lucide-react";
import {
  reposData,
  REPO_DOMAINS,
  DIFFICULTY_OPTIONS,
  SORT_OPTIONS,
  LANGUAGE_COLORS,
} from "./reposData";
import type { OpenSourceRepo } from "./reposData";

// ─── Helpers ────────────────────────────────────────────────────
function formatCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return String(n);
}

function difficultyBadge(d: OpenSourceRepo["difficulty"]) {
  const map = {
    BEGINNER: { label: "Beginner", cls: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
    INTERMEDIATE: { label: "Intermediate", cls: "bg-amber-50 text-amber-700 ring-amber-200" },
    ADVANCED: { label: "Advanced", cls: "bg-rose-50 text-rose-700 ring-rose-200" },
  };
  return map[d];
}

// ─── Component ──────────────────────────────────────────────────
export default function RepoDiscoveryPage() {
  // State
  const [search, setSearch] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("ALL");
  const [selectedDifficulty, setSelectedDifficulty] = useState("ALL");
  const [sortKey, setSortKey] = useState("stars");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState<OpenSourceRepo | null>(null);

  // Derived data
  const filtered = useMemo(() => {
    let list = [...reposData];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.owner.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.tags.some((t) => t.toLowerCase().includes(q)) ||
          r.language.toLowerCase().includes(q)
      );
    }

    if (selectedDomain !== "ALL") {
      list = list.filter((r) => r.domain === selectedDomain);
    }

    if (selectedDifficulty !== "ALL") {
      list = list.filter((r) => r.difficulty === selectedDifficulty);
    }

    const sortOpt = SORT_OPTIONS.find((s) => s.key === sortKey) ?? SORT_OPTIONS[0];
    list.sort((a, b) => {
      const av = a[sortOpt.key as keyof OpenSourceRepo];
      const bv = b[sortOpt.key as keyof OpenSourceRepo];
      if (typeof av === "number" && typeof bv === "number") {
        return sortOpt.order === "desc" ? bv - av : av - bv;
      }
      return sortOpt.order === "desc"
        ? String(bv).localeCompare(String(av))
        : String(av).localeCompare(String(bv));
    });

    return list;
  }, [search, selectedDomain, selectedDifficulty, sortKey]);

  const stats = useMemo(() => {
    const totalStars = reposData.reduce((s, r) => s + r.stars, 0);
    const trendingCount = reposData.filter((r) => r.trending).length;
    return {
      totalRepos: reposData.length,
      totalStars: formatCount(totalStars),
      trendingCount,
      languages: [...new Set(reposData.map((r) => r.language))].length,
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm mb-8">
        {/* Subtle gradient blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-50 to-indigo-50 opacity-60 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-cyan-50 to-emerald-50 opacity-60 blur-3xl" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10 py-12 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-sm text-purple-700">
              <Sparkles className="w-4 h-4 text-purple-500" />
              Open Source Discovery
            </div>
            <h1 className="mb-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-gray-950">
              Discover &amp; Contribute
            </h1>
            <p className="mx-auto mb-6 max-w-2xl text-base text-gray-500 leading-relaxed">
              Find beginner-friendly open-source projects, explore trending repositories, and make your first contribution today.
            </p>

            {/* Stat pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {[
                { icon: <Code2 size={14} />, label: `${stats.totalRepos} Repos` },
                { icon: <Star size={14} />, label: `${stats.totalStars} Stars` },
                { icon: <Flame size={14} />, label: `${stats.trendingCount} Trending` },
                { icon: <Globe size={14} />, label: `${stats.languages} Languages` },
              ].map((s) => (
                <span
                  key={s.label}
                  className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600 shadow-sm"
                >
                  {s.icon}
                  {s.label}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Search + Controls ───────────────────────────────── */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Search bar */}
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search repos, languages, tags…"
            className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 outline-none transition shadow-sm focus:border-purple-300 focus:ring-2 focus:ring-purple-500/20"
          />
        </div>

        <div className="flex items-center gap-3">
          {/* Filter toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm transition ${
              showFilters
                ? "border-purple-300 bg-purple-50 text-purple-700"
                : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50 shadow-sm"
            }`}
          >
            <Filter size={16} />
            Filters
          </button>

          {/* Sort dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-600 transition shadow-sm hover:bg-gray-50">
              <TrendingUp size={16} />
              {SORT_OPTIONS.find((s) => s.key === sortKey)?.label ?? "Sort"}
              <ChevronDown size={14} />
            </button>
            <div className="absolute right-0 top-full z-20 mt-1 hidden min-w-[180px] rounded-xl border border-gray-100 bg-white p-1 shadow-xl group-hover:block">
              {SORT_OPTIONS.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => setSortKey(opt.key)}
                  className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                    sortKey === opt.key
                      ? "bg-purple-50 text-purple-700 font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Filter bar ─────────────────────────────────────── */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mb-6 overflow-hidden"
          >
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              {/* Domain chips */}
              <div className="mb-4">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Domain</p>
                <div className="flex flex-wrap gap-2">
                  {REPO_DOMAINS.map((d) => (
                    <button
                      key={d.key}
                      onClick={() => setSelectedDomain(d.key)}
                      className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition ${
                        selectedDomain === d.key
                          ? "bg-purple-50 text-purple-700 ring-1 ring-purple-200"
                          : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      }`}
                    >
                      <span>{d.icon}</span>
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty */}
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Difficulty</p>
                <div className="flex flex-wrap gap-2">
                  {DIFFICULTY_OPTIONS.map((d) => (
                    <button
                      key={d.key}
                      onClick={() => setSelectedDifficulty(d.key)}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                        selectedDifficulty === d.key
                          ? "bg-purple-50 text-purple-700 ring-1 ring-purple-200"
                          : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Results count ──────────────────────────────────── */}
      <p className="mb-6 text-sm text-gray-400">
        Showing <span className="text-gray-900 font-medium">{filtered.length}</span> of {reposData.length} repositories
      </p>

      {/* ── Cards grid ─────────────────────────────────────── */}
      {filtered.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-24 text-center"
        >
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-50">
            <Search size={32} className="text-gray-300" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-gray-700">No repositories found</h3>
          <p className="max-w-md text-sm text-gray-400">
            Try adjusting your search or filters to discover more projects.
          </p>
        </motion.div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((repo, i) => (
              <motion.div
                layout
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                onClick={() => setSelectedRepo(repo)}
                className="group relative cursor-pointer rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-purple-200"
              >
                {/* Trending badge */}
                {repo.trending && (
                  <div className="absolute -top-2.5 right-4 flex items-center gap-1 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                    <Flame size={10} />
                    Trending
                  </div>
                )}

                {/* Header */}
                <div className="mb-3 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 text-lg font-bold text-purple-600 border border-purple-100">
                    {repo.owner[0].toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-base font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                      {repo.owner}/<span className="text-purple-600">{repo.name}</span>
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span
                        className="inline-block h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: LANGUAGE_COLORS[repo.language] ?? "#888" }}
                      />
                      <span className="text-xs text-gray-500">{repo.language}</span>
                      <span className={`ml-auto rounded-full px-2 py-0.5 text-[10px] font-medium ring-1 ${difficultyBadge(repo.difficulty).cls}`}>
                        {difficultyBadge(repo.difficulty).label}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-4 line-clamp-2 text-sm text-gray-500">
                  {repo.description}
                </p>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {repo.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-gray-50 px-2 py-0.5 text-[10px] text-gray-500"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Stats bar */}
                <div className="flex items-center gap-4 border-t border-gray-50 pt-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Star size={13} className="text-amber-500" />
                    {formatCount(repo.stars)}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={13} className="text-cyan-500" />
                    {formatCount(repo.forks)}
                  </span>
                  <span className="flex items-center gap-1">
                    <CircleDot size={13} className="text-emerald-500" />
                    {formatCount(repo.openIssues)} issues
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto text-gray-300 transition group-hover:text-purple-500"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* ── Detail Modal ─────────────────────────────────────── */}
      <AnimatePresence>
        {selectedRepo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4"
            onClick={() => setSelectedRepo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedRepo(null)}
                className="absolute right-4 top-4 rounded-full bg-gray-50 p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
              >
                <X size={18} />
              </button>

              {/* Header */}
              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 text-2xl font-bold text-purple-600 border border-purple-100">
                  {selectedRepo.owner[0].toUpperCase()}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {selectedRepo.owner}/{selectedRepo.name}
                  </h2>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <span
                      className="inline-block h-3 w-3 rounded-full"
                      style={{ backgroundColor: LANGUAGE_COLORS[selectedRepo.language] ?? "#888" }}
                    />
                    <span className="text-sm text-gray-500">{selectedRepo.language}</span>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ${difficultyBadge(selectedRepo.difficulty).cls}`}>
                      {difficultyBadge(selectedRepo.difficulty).label}
                    </span>
                    {selectedRepo.trending && (
                      <span className="flex items-center gap-1 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                        <Flame size={10} /> Trending
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="mb-6 text-sm leading-relaxed text-gray-600">
                {selectedRepo.description}
              </p>

              {/* Stats */}
              <div className="mb-6 grid grid-cols-3 gap-3">
                {[
                  { label: "Stars", value: formatCount(selectedRepo.stars), icon: <Star size={16} className="text-amber-500" /> },
                  { label: "Forks", value: formatCount(selectedRepo.forks), icon: <GitFork size={16} className="text-cyan-500" /> },
                  { label: "Open Issues", value: formatCount(selectedRepo.openIssues), icon: <CircleDot size={16} className="text-emerald-500" /> },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-gray-100 bg-gray-50 p-3 text-center">
                    <div className="flex items-center justify-center gap-1.5 mb-1">{s.icon}<span className="text-lg font-bold text-gray-900">{s.value}</span></div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              {selectedRepo.techStack.length > 0 && (
                <div className="mb-5">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedRepo.techStack.map((t) => (
                      <span key={t} className="rounded-lg bg-purple-50 px-2.5 py-1 text-xs text-purple-700 ring-1 ring-purple-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Issue Types */}
              {selectedRepo.issueTypes.length > 0 && (
                <div className="mb-5">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Issue Labels</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedRepo.issueTypes.map((t) => (
                      <span key={t} className="rounded-lg bg-emerald-50 px-2.5 py-1 text-xs text-emerald-700 ring-1 ring-emerald-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              {selectedRepo.highlights.length > 0 && (
                <div className="mb-6">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Why Contribute?</h4>
                  <ul className="space-y-1.5">
                    {selectedRepo.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <Sparkles size={14} className="mt-0.5 shrink-0 text-purple-500" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              <div className="mb-6">
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedRepo.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-gray-50 px-2.5 py-1 text-xs text-gray-500">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href={selectedRepo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-950 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 no-underline"
              >
                <ExternalLink size={16} />
                View on GitHub
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
