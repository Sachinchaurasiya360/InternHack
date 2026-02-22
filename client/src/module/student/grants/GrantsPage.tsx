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
  Sparkles,
  Globe,
  Tag,
  Award,
  Users,
  ArrowRight,
  Info,
} from "lucide-react";
import { grants, GRANT_CATEGORIES, type Grant, type GrantCategory } from "./grantsData";
import { Navbar } from "../../../components/Navbar";
import { SEO } from "../../../components/SEO";

const STATUS_CONFIG = {
  Active: { icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50" },
  Paused: { icon: AlertCircle, color: "text-amber-600", bg: "bg-amber-50" },
  "Invite Only": { icon: Lock, color: "text-violet-600", bg: "bg-violet-50" },
};

const ECOSYSTEMS = Array.from(new Set(grants.map((g) => g.ecosystem))).sort();

export default function GrantsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<GrantCategory | "ALL">("ALL");
  const [selectedEcosystem, setSelectedEcosystem] = useState<string>("ALL");
  const [selectedStatus, setSelectedStatus] = useState<string>("ALL");
  const [selectedGrant, setSelectedGrant] = useState<Grant | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return grants.filter((g) => {
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
  }, [search, selectedCategory, selectedEcosystem, selectedStatus]);

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
    <div className="min-h-screen bg-[#fafafa]">
      <SEO
        title="Web3 Grants"
        description="Explore 50+ active Web3, blockchain, and crypto grants. Find funding for your DeFi, infrastructure, gaming, or education project from top foundations and DAOs."
        keywords="web3 grants, blockchain grants, crypto funding, DeFi grants, Ethereum grants, Solana grants, developer grants, DAO funding"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#fafafa] pt-28 pb-16 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-125 h-125 rounded-full bg-linear-to-br from-amber-50 to-orange-50 opacity-60 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-100 h-100 rounded-full bg-linear-to-tr from-emerald-50 to-teal-50 opacity-60 blur-3xl" />
        </div>

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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/10 shadow-sm text-sm text-gray-600 mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Web3 & Blockchain Funding</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-950 mb-4"
          >
            Web3 Grants
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Discover 50+ grants from top blockchain foundations and DAOs. Find funding for your next project.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-lg mx-auto"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search grants — Ethereum, Solana, DeFi, gaming..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-5 py-3.5 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-300 transition-all shadow-sm"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-4 mt-6"
          >
            <span className="text-gray-400 text-sm">{grants.length} grants listed</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="text-gray-400 text-sm">{grants.filter((g) => g.status === "Active").length} active</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="text-gray-400 text-sm">{ECOSYSTEMS.length} ecosystems</span>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {/* Category chips */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("ALL")}
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all border ${
                selectedCategory === "ALL"
                  ? "bg-gray-950 text-white border-gray-950"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
              }`}
            >
              All
            </button>
            {GRANT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat === selectedCategory ? "ALL" : cat)}
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all border ${
                  selectedCategory === cat
                    ? "bg-gray-950 text-white border-gray-950"
                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* More filters toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-all border ${
              activeFilters > 0
                ? "bg-amber-50 text-amber-700 border-amber-200"
                : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
            }`}
          >
            <Filter className="w-3.5 h-3.5" />
            Filters
            {activeFilters > 0 && (
              <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-xs flex items-center justify-center">
                {activeFilters}
              </span>
            )}
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showFilters ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Expanded filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-6"
            >
              <div className="flex flex-wrap gap-4 p-4 bg-white rounded-2xl border border-gray-200">
                {/* Ecosystem filter */}
                <div>
                  <label className="text-xs font-medium text-gray-500 mb-2 block">Ecosystem</label>
                  <select
                    value={selectedEcosystem}
                    onChange={(e) => setSelectedEcosystem(e.target.value)}
                    className="px-3 py-2 rounded-xl text-sm border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  >
                    <option value="ALL">All Ecosystems</option>
                    {ECOSYSTEMS.map((eco) => (
                      <option key={eco} value={eco}>{eco}</option>
                    ))}
                  </select>
                </div>

                {/* Status filter */}
                <div>
                  <label className="text-xs font-medium text-gray-500 mb-2 block">Status</label>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="px-3 py-2 rounded-xl text-sm border border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
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
                      className="px-3 py-2 text-sm text-gray-400 hover:text-gray-700 underline underline-offset-2"
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
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-gray-900">{filtered.length}</span> grant{filtered.length !== 1 ? "s" : ""}
            {selectedCategory !== "ALL" && <> in <span className="font-semibold text-gray-900">{selectedCategory}</span></>}
            {search && <> matching "<span className="font-semibold text-gray-900">{search}</span>"</>}
          </p>
        </div>

        {/* Grants grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-2xl border border-gray-200">
            <Award className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-700 mb-1">No grants found</h3>
            <p className="text-sm text-gray-400">Try adjusting your search or filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((grant, i) => (
              <GrantCard key={grant.id} grant={grant} index={i} onClick={() => setSelectedGrant(grant)} />
            ))}
          </div>
        )}
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selectedGrant && (
          <GrantDetailModal grant={selectedGrant} onClose={() => setSelectedGrant(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function GrantCard({ grant, index, onClick }: { grant: Grant; index: number; onClick: () => void }) {
  const statusCfg = STATUS_CONFIG[grant.status];
  const StatusIcon = statusCfg.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <button
        onClick={onClick}
        className="group relative flex flex-col h-full w-full text-left bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300 cursor-pointer"
      >
        <div className="flex flex-col flex-1 p-6">
          {/* Header: logo + org + status */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src={grant.logo}
                  alt={grant.organization}
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                    (e.target as HTMLImageElement).parentElement!.innerHTML =
                      `<span class="text-sm font-bold text-gray-400">${grant.organization.charAt(0)}</span>`;
                  }}
                />
              </div>
              <span className="text-xs font-medium text-gray-500">{grant.organization}</span>
            </div>
            <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${statusCfg.bg}`}>
              <StatusIcon className={`w-3 h-3 ${statusCfg.color}`} />
              <span className={`text-xs font-medium ${statusCfg.color}`}>{grant.status}</span>
            </div>
          </div>

          {/* Name */}
          <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug group-hover:text-gray-700 transition-colors">
            {grant.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-4 flex-1">
            {grant.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 text-xs font-medium">
              {grant.category}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-gray-50 text-gray-600 text-xs font-medium">
              {grant.ecosystem}
            </span>
          </div>

          {/* Bottom: funding + CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-1.5 text-sm">
              <DollarSign className="w-3.5 h-3.5 text-gray-400" />
              <span className="font-semibold text-gray-900">{grant.fundingAmount}</span>
            </div>
            <span className="flex items-center gap-1 text-sm font-medium text-gray-400 group-hover:text-gray-900 transition-colors">
              Details
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </button>
    </motion.div>
  );
}

function GrantDetailModal({ grant, onClose }: { grant: Grant; onClose: () => void }) {
  const statusCfg = STATUS_CONFIG[grant.status];
  const StatusIcon = statusCfg.icon;

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
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 rounded-t-2xl flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={grant.logo}
                alt={grant.organization}
                className="w-6 h-6 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  (e.target as HTMLImageElement).parentElement!.innerHTML =
                    `<span class="text-sm font-bold text-gray-400">${grant.organization.charAt(0)}</span>`;
                }}
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">{grant.name}</h2>
              <p className="text-sm text-gray-500">{grant.organization}</p>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors">
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        <div className="px-6 py-6 space-y-6">
          {/* Status + Funding + Ecosystem row */}
          <div className="flex flex-wrap gap-3">
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl ${statusCfg.bg}`}>
              <StatusIcon className={`w-4 h-4 ${statusCfg.color}`} />
              <span className={`text-sm font-medium ${statusCfg.color}`}>{grant.status}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-50">
              <DollarSign className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-semibold text-gray-900">{grant.fundingAmount}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-50">
              <Globe className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">{grant.ecosystem}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50">
              <Tag className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-700">{grant.category}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-gray-400" />
              About
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">{grant.description}</p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Highlights
            </h3>
            <div className="space-y-2">
              {grant.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  {h}
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-gray-400" />
              Eligibility & Requirements
            </h3>
            <div className="space-y-2">
              {grant.eligibility.map((e, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />
                  {e}
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {grant.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-100 text-xs font-medium text-gray-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Apply button */}
          <a
            href={grant.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gray-950 text-white text-sm font-semibold hover:bg-gray-800 transition-colors no-underline"
          >
            Apply Now
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
