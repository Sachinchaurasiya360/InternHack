import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  DollarSign,
  ChevronDown,
  Globe,
  MapPin,
  Calendar,
  ArrowRight,
  ExternalLink,
  Info,
  Wand2,
  Users,
  CheckCircle2,
  Tag,
  ArrowLeft,
  Trophy,
  Loader2,
} from "lucide-react";
import api from "../../../lib/axios";
import { SEO } from "../../../components/SEO";
import { Link } from "react-router";

type HackathonStatus = "upcoming" | "ongoing" | "past";
type LocationType = "virtual" | "in-person" | "hybrid";

interface Hackathon {
  id: number;
  name: string;
  organizer: string;
  logo: string;
  description: string;
  prizePool: string;
  startDate: string;
  endDate: string;
  location: string;
  locationType: LocationType;
  website: string;
  tags: string[];
  tracks: string[];
  eligibility: string;
  status: HackathonStatus;
  ecosystem: string;
  highlights: string[];
}

const STATUS_CONFIG = {
  upcoming: {
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-900/30",
    label: "Upcoming",
  },
  ongoing: {
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-900/30",
    label: "Ongoing",
  },
  past: {
    color: "text-gray-500 dark:text-gray-400",
    bg: "bg-gray-100 dark:bg-gray-800",
    label: "Past",
  },
};

const STATUS_OPTIONS: { value: HackathonStatus | "ALL"; label: string }[] = [
  { value: "ALL", label: "All" },
  { value: "upcoming", label: "Upcoming" },
  { value: "ongoing", label: "Ongoing" },
  { value: "past", label: "Past" },
];

const LOCATION_OPTIONS: { value: LocationType | "ALL"; label: string }[] = [
  { value: "ALL", label: "All Locations" },
  { value: "virtual", label: "Virtual" },
  { value: "in-person", label: "In-Person" },
  { value: "hybrid", label: "Hybrid" },
];

function formatDateRange(start: string, end: string): string {
  const s = new Date(start);
  const e = new Date(end);
  const opts: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
  if (s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth()) {
    return `${s.toLocaleDateString("en-US", opts)} - ${e.getDate()}, ${e.getFullYear()}`;
  }
  return `${s.toLocaleDateString("en-US", opts)} - ${e.toLocaleDateString("en-US", opts)}, ${e.getFullYear()}`;
}

export default function HackathonCalendarPage() {
  const [hackathons, setHackathons] = useState<Hackathon[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<HackathonStatus | "ALL">("ALL");
  const [locationFilter, setLocationFilter] = useState<LocationType | "ALL">("ALL");
  const [ecosystemFilter, setEcosystemFilter] = useState<string>("ALL");
  const [selectedHackathon, setSelectedHackathon] = useState<Hackathon | null>(null);

  const fetchHackathons = useCallback(() => {
    setLoading(true);
    api.get("/hackathons").then((res) => {
      setHackathons(res.data.hackathons);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  useEffect(() => { fetchHackathons(); }, [fetchHackathons]);

  const HACKATHON_ECOSYSTEMS = useMemo(
    () => Array.from(new Set(hackathons.map((h) => h.ecosystem))).sort(),
    [hackathons]
  );

  const filtered = useMemo(() => {
    return hackathons.filter((h) => {
      if (statusFilter !== "ALL" && h.status !== statusFilter) return false;
      if (locationFilter !== "ALL" && h.locationType !== locationFilter) return false;
      if (ecosystemFilter !== "ALL" && h.ecosystem !== ecosystemFilter) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          h.name.toLowerCase().includes(q) ||
          h.organizer.toLowerCase().includes(q) ||
          h.ecosystem.toLowerCase().includes(q) ||
          h.tags.some((t) => t.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [hackathons, search, statusFilter, locationFilter, ecosystemFilter]);

  const ongoingCount = hackathons.filter((h) => h.status === "ongoing").length;
  const upcomingCount = hackathons.filter((h) => h.status === "upcoming").length;

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-gray-950">
      <SEO
        title="Hackathon Calendar"
        description="Browse upcoming, ongoing, and past blockchain hackathons. Find hackathons from Ethereum, Solana, Polygon, and more ecosystems with prize pools worth millions."
        keywords="blockchain hackathons, crypto hackathons, web3 hackathons, Ethereum hackathon, Solana hackathon, hackathon calendar, developer hackathons"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#fafafa] dark:bg-gray-950 pt-12 pb-14 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-125 h-125 rounded-full bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 opacity-60 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-100 h-100 rounded-full bg-linear-to-tr from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 opacity-60 blur-3xl" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            <Link
              to="/student/grants"
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Grants
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-950 dark:text-white mb-4"
          >
            Hackathon Calendar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Discover blockchain hackathons across every major ecosystem. Build, compete, and win prizes.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-lg mx-auto"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search hackathons, ecosystems, tags..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-5 py-3.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-300 transition-all shadow-sm"
            />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-4 mt-6"
          >
            <span className="text-gray-400 dark:text-gray-500 text-sm">
              {hackathons.length} hackathons listed
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
            <span className="text-gray-400 dark:text-gray-500 text-sm">
              {upcomingCount} upcoming
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
            <span className="text-gray-400 dark:text-gray-500 text-sm">
              {ongoingCount} ongoing
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
            <span className="text-gray-400 dark:text-gray-500 text-sm">
              {HACKATHON_ECOSYSTEMS.length} ecosystems
            </span>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {/* Status chips */}
          <div className="flex flex-wrap gap-2">
            {STATUS_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setStatusFilter(opt.value)}
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all border ${
                  statusFilter === opt.value
                    ? "bg-gray-950 dark:bg-white text-white dark:text-gray-950 border-gray-950 dark:border-white"
                    : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Location dropdown */}
          <div className="relative">
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value as LocationType | "ALL")}
              className="appearance-none px-3.5 py-2 pr-8 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
            >
              {LOCATION_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
          </div>

          {/* Ecosystem dropdown */}
          <div className="relative">
            <select
              value={ecosystemFilter}
              onChange={(e) => setEcosystemFilter(e.target.value)}
              className="appearance-none px-3.5 py-2 pr-8 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
            >
              <option value="ALL">All Ecosystems</option>
              {HACKATHON_ECOSYSTEMS.map((eco) => (
                <option key={eco} value={eco}>
                  {eco}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            <span className="font-semibold text-gray-900 dark:text-white">{filtered.length}</span>{" "}
            hackathon{filtered.length !== 1 ? "s" : ""}
            {statusFilter !== "ALL" && (
              <>
                {" "}
                with status{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  {STATUS_CONFIG[statusFilter].label}
                </span>
              </>
            )}
            {search && (
              <>
                {" "}
                matching "<span className="font-semibold text-gray-900 dark:text-white">{search}</span>"
              </>
            )}
          </p>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 className="w-6 h-6 text-gray-400 dark:text-gray-500 animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
            <Trophy className="w-10 h-10 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
              No hackathons found
            </h3>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Try adjusting your search or filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((hackathon, i) => (
              <HackathonCard
                key={hackathon.id}
                hackathon={hackathon}
                index={i}
                onClick={() => setSelectedHackathon(hackathon)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selectedHackathon && (
          <HackathonDetailModal
            hackathon={selectedHackathon}
            onClose={() => setSelectedHackathon(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function HackathonCard({
  hackathon,
  index,
  onClick,
}: {
  hackathon: Hackathon;
  index: number;
  onClick: () => void;
}) {
  const statusCfg = STATUS_CONFIG[hackathon.status];

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
        className="group relative flex flex-col h-full w-full text-left bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg hover:shadow-gray-100 dark:hover:shadow-gray-900 transition-all duration-300 cursor-pointer"
      >
        <div className="flex flex-col flex-1 p-6">
          {/* Header: logo + organizer + status */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src={hackathon.logo}
                  alt={hackathon.organizer}
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = "none";
                    const span = document.createElement("span");
                    span.className = "text-sm font-bold text-gray-400";
                    span.textContent = hackathon.organizer.charAt(0);
                    img.parentElement?.appendChild(span);
                  }}
                />
              </div>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-500">
                {hackathon.organizer}
              </span>
            </div>
            <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${statusCfg.bg}`}>
              <span className={`text-xs font-medium ${statusCfg.color}`}>{statusCfg.label}</span>
            </div>
          </div>

          {/* Name */}
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
            {hackathon.name}
          </h3>

          {/* Date range */}
          <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-500 mb-3">
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            <span>{formatDateRange(hackathon.startDate, hackathon.endDate)}</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-500 mb-3">
            {hackathon.locationType === "virtual" ? (
              <Globe className="w-3.5 h-3.5 shrink-0" />
            ) : hackathon.locationType === "in-person" ? (
              <MapPin className="w-3.5 h-3.5 shrink-0" />
            ) : (
              <span className="flex items-center gap-0.5 shrink-0">
                <MapPin className="w-3 h-3" />
                <Globe className="w-3 h-3" />
              </span>
            )}
            <span>{hackathon.location}</span>
          </div>

          {/* Prize pool */}
          <div className="flex items-center gap-1.5 text-sm mb-4">
            <DollarSign className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" />
            <span className="font-semibold text-gray-900 dark:text-white">
              {hackathon.prizePool}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4 flex-1">
            {hackathon.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="flex items-center justify-end pt-4 border-t border-gray-100 dark:border-gray-800">
            <span className="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
              Details
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </button>
    </motion.div>
  );
}

function HackathonDetailModal({
  hackathon,
  onClose,
}: {
  hackathon: Hackathon;
  onClose: () => void;
}) {
  const statusCfg = STATUS_CONFIG[hackathon.status];

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
                src={hackathon.logo}
                alt={hackathon.organizer}
                className="w-6 h-6 object-contain"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.style.display = "none";
                  const span = document.createElement("span");
                  span.className = "text-sm font-bold text-gray-400";
                  span.textContent = hackathon.organizer.charAt(0);
                  img.parentElement?.appendChild(span);
                }}
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                {hackathon.name}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-500">{hackathon.organizer}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-gray-500 dark:text-gray-500" />
          </button>
        </div>

        <div className="px-6 py-6 space-y-6">
          {/* Status + Prize + Location + Ecosystem badges */}
          <div className="flex flex-wrap gap-3">
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl ${statusCfg.bg}`}>
              <span className={`text-sm font-medium ${statusCfg.color}`}>{statusCfg.label}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-50 dark:bg-gray-800">
              <DollarSign className="w-4 h-4 text-gray-500 dark:text-gray-500" />
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {hackathon.prizePool}
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-50 dark:bg-gray-800">
              {hackathon.locationType === "virtual" ? (
                <Globe className="w-4 h-4 text-gray-500 dark:text-gray-500" />
              ) : hackathon.locationType === "in-person" ? (
                <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-500" />
              ) : (
                <>
                  <MapPin className="w-3.5 h-3.5 text-gray-500 dark:text-gray-500" />
                  <Globe className="w-3.5 h-3.5 text-gray-500 dark:text-gray-500" />
                </>
              )}
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {hackathon.location}
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-900/30">
              <Tag className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-400">
                {hackathon.ecosystem}
              </span>
            </div>
          </div>

          {/* Dates */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gray-400 dark:text-gray-500" />
              Dates
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {formatDateRange(hackathon.startDate, hackathon.endDate)}
            </p>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-gray-400 dark:text-gray-500" />
              About
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {hackathon.description}
            </p>
          </div>

          {/* Tracks */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-gray-400 dark:text-gray-500" />
              Tracks
            </h3>
            <div className="flex flex-wrap gap-2">
              {hackathon.tracks.map((track) => (
                <span
                  key={track}
                  className="px-2.5 py-1 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-xs font-medium text-gray-600 dark:text-gray-400"
                >
                  {track}
                </span>
              ))}
            </div>
          </div>

          {/* Eligibility */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-gray-400 dark:text-gray-500" />
              Eligibility
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {hackathon.eligibility}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-1.5">
              <Wand2 className="w-4 h-4 text-blue-500" />
              Highlights
            </h3>
            <div className="space-y-2">
              {hackathon.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  {h}
                </div>
              ))}
            </div>
          </div>

          {/* Register button */}
          <a
            href={hackathon.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors no-underline"
          >
            Register Now
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
