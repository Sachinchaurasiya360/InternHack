import React, { useState, useEffect, useCallback } from "react";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { PaginationControls } from "../../../components/ui/PaginationControls";
import { Link, useSearchParams, useLocation } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MapPin,
  Building2,
  Filter,
  Star,
  Users,
  X,
  Rocket,
  ExternalLink,
  ChevronDown,
  Lock,
  GraduationCap,
  Mail,
  BookOpen,
  ArrowUpRight,
  Plus,
  MessageCircle,
  Clock,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import api, { SERVER_URL } from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import { cn } from "@/lib/utils";
import type {
  Company,
  CityCount,
  Pagination,
  YCCompany,
  YCStats,
  InterviewCompanyListItem,
  InterviewCompanyListResponse,
} from "../../../lib/types";
import { listInterviewCompanies } from "../interviews/interviews-api";

const SIZE_LABELS: Record<string, string> = {
  STARTUP: "Startup",
  SMALL: "Small",
  MEDIUM: "Medium",
  LARGE: "Large",
  ENTERPRISE: "Enterprise",
};

// ─── Shared editorial atoms ────────────────────────────
const cardBase =
  "group relative flex flex-col bg-white dark:bg-stone-900 p-5 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 transition-colors h-full no-underline";

function EditorialLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
      <span className="h-1 w-1 bg-lime-400" />
      {children}
    </div>
  );
}

function CompanyMark({ label, src }: { label: string; src?: string | null }) {
  if (src) {
    return (
      <img
        src={src.startsWith("http") ? src : `${SERVER_URL}${src}`}
        alt={label}
        className="w-10 h-10 rounded-md object-cover bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 shrink-0"
      />
    );
  }
  return (
    <div className="w-10 h-10 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0 text-stone-900 dark:text-stone-50 text-sm font-bold">
      {label?.charAt(0)?.toUpperCase() || "?"}
    </div>
  );
}

function MetaChip({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-white/10 rounded-md">
      <span className="text-stone-400">{icon}</span>
      {children}
    </span>
  );
}

function StatusChip({ label, tone = "neutral" }: { label: string; tone?: "hiring" | "neutral" | "accent" }) {
  const styles =
    tone === "hiring"
      ? "text-lime-700 dark:text-lime-400 border-lime-300/70 dark:border-lime-500/30 bg-lime-50/60 dark:bg-lime-500/5"
      : tone === "accent"
        ? "text-stone-900 dark:text-stone-50 border-stone-300 dark:border-white/20 bg-stone-100 dark:bg-stone-800"
        : "text-stone-600 dark:text-stone-400 border-stone-200 dark:border-white/10";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest border rounded-md",
        styles
      )}
    >
      {tone === "hiring" && <span className="h-1 w-1 bg-lime-500" />}
      {label}
    </span>
  );
}

function EmptyState({
  icon,
  title,
  hint,
}: {
  icon: React.ReactNode;
  title: string;
  hint: string;
}) {
  return (
    <div className="py-20 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md">
      <div className="inline-flex flex-col items-center gap-3">
        <div className="w-12 h-12 rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 flex items-center justify-center text-stone-400">
          {icon}
        </div>
        <p className="text-sm text-stone-700 dark:text-stone-300 font-medium">{title}</p>
        <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
          {hint}
        </p>
      </div>
    </div>
  );
}

function Spinner() {
  return (
    <div className="py-20 text-center">
      <div className="inline-flex flex-col items-center gap-3">
        <div className="w-6 h-6 border-2 border-stone-300 dark:border-stone-700 border-t-lime-400 rounded-full animate-spin" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
          loading...
        </span>
      </div>
    </div>
  );
}

function UpgradeBanner({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mt-8 flex items-center gap-4 p-5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md">
      <div className="w-10 h-10 rounded-md bg-lime-50 dark:bg-lime-500/10 border border-lime-200/70 dark:border-lime-500/20 flex items-center justify-center shrink-0">
        <Lock className="w-4 h-4 text-lime-700 dark:text-lime-400" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-stone-900 dark:text-stone-50">{title}</p>
        <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-1">
          {subtitle}
        </p>
      </div>
      <Link
        to="/student/checkout"
        className="group inline-flex items-center gap-2 px-4 py-2 bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 text-xs font-bold uppercase tracking-widest rounded-md hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors no-underline shrink-0"
      >
        Upgrade
        <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
}

// ─── Cards ──────────────────────────────────────────────
const CompanyCard = React.memo(function CompanyCard({ company }: { company: Company }) {
  return (
    <Link to={`/companies/${company.slug}`} className={cardBase}>
      <div className="flex items-start gap-3 mb-3">
        <CompanyMark label={company.name} src={company.logo} />
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 line-clamp-1 leading-tight">
            {company.name}
          </h3>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 mt-0.5 block truncate">
            {company.industry || "company"}
          </span>
        </div>
        {company.hiringStatus && <StatusChip label="hiring" tone="hiring" />}
      </div>

      {company.description && (
        <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 mb-4 leading-relaxed">
          {company.description}
        </p>
      )}

      <div className="flex flex-wrap gap-1.5 mb-3">
        {company.city && (
          <MetaChip icon={<MapPin className="w-3 h-3" />}>{company.city}</MetaChip>
        )}
        <MetaChip icon={<Users className="w-3 h-3" />}>
          {SIZE_LABELS[company.size] ?? company.size}
        </MetaChip>
        <MetaChip icon={<Star className="w-3 h-3" />}>
          {company.avgRating > 0 ? company.avgRating.toFixed(1) : "new"}
          {company.reviewCount > 0 && (
            <span className="text-stone-400 ml-1">({company.reviewCount})</span>
          )}
        </MetaChip>
      </div>

      {company.technologies.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-4">
          {company.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded text-[10px] font-mono uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
          {company.technologies.length > 4 && (
            <span className="px-2 py-0.5 text-stone-500 text-[10px] font-mono uppercase tracking-wider">
              +{company.technologies.length - 4}
            </span>
          )}
        </div>
      )}

      <div className="mt-auto flex items-center justify-between pt-3 border-t border-stone-100 dark:border-white/5">
        <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">
          view company
        </span>
        <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
      </div>
    </Link>
  );
});

const YCCard = React.memo(function YCCard({ company }: { company: YCCompany }) {
  return (
    <Link to={`/yc/${company.slug}`} className={cardBase}>
      <div className="flex items-start gap-3 mb-3">
        <CompanyMark label={company.name} src={company.smallLogoUrl} />
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 line-clamp-1 leading-tight">
            {company.name}
          </h3>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 mt-0.5 block truncate">
            {company.industry || company.subindustry || "yc company"}
          </span>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          {company.batchShort && <StatusChip label={company.batchShort} tone="accent" />}
          {company.isHiring && <StatusChip label="hiring" tone="hiring" />}
        </div>
      </div>

      {company.oneLiner && (
        <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 mb-4 leading-relaxed">
          {company.oneLiner}
        </p>
      )}

      <div className="flex flex-wrap gap-1.5 mb-3">
        {company.allLocations && (
          <MetaChip icon={<MapPin className="w-3 h-3" />}>
            <span className="truncate max-w-32 inline-block align-bottom">
              {company.allLocations}
            </span>
          </MetaChip>
        )}
        {company.teamSize && (
          <MetaChip icon={<Users className="w-3 h-3" />}>{company.teamSize}</MetaChip>
        )}
        {company.status && <MetaChip icon={<Rocket className="w-3 h-3" />}>{company.status}</MetaChip>}
      </div>

      {company.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-4">
          {company.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded text-[10px] font-mono uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex items-center justify-between pt-3 border-t border-stone-100 dark:border-white/5">
        <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">
          view yc profile
        </span>
        <div className="flex items-center gap-2">
          {company.website && (
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors"
              title="Visit website"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
        </div>
      </div>
    </Link>
  );
});

function timeAgo(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const days = Math.round(diffMs / 86_400_000);
  if (days < 1) return "today";
  if (days < 30) return `${String(days)}d ago`;
  const months = Math.round(days / 30);
  return `${String(months)}mo ago`;
}

const InterviewCompanyCard = React.memo(function InterviewCompanyCard({
  company,
  insideLayout,
}: {
  company: InterviewCompanyListItem;
  insideLayout: boolean;
}) {
  const target = `${insideLayout ? "/student/companies" : "/companies"}/${company.slug}#interviews`;
  return (
    <Link to={target} className={cardBase}>
      <div className="flex items-start gap-3 mb-3">
        <CompanyMark label={company.name} src={company.logo} />
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 line-clamp-1 leading-tight">
            {company.name}
          </h3>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 mt-0.5 block truncate">
            {company.industry || "company"}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {company.city && (
          <MetaChip icon={<MapPin className="w-3 h-3" />}>{company.city}</MetaChip>
        )}
        <MetaChip icon={<MessageCircle className="w-3 h-3" />}>
          {company.experienceCount} experience{company.experienceCount === 1 ? "" : "s"}
        </MetaChip>
        <MetaChip icon={<Star className="w-3 h-3" />}>
          {company.avgRating > 0 ? company.avgRating.toFixed(1) : "new"}
          {company.reviewCount > 0 && (
            <span className="text-stone-400 ml-1">({company.reviewCount})</span>
          )}
        </MetaChip>
        <MetaChip icon={<Clock className="w-3 h-3" />}>{timeAgo(company.latestAt)}</MetaChip>
      </div>

      <div className="mt-auto flex items-center justify-between pt-3 border-t border-stone-100 dark:border-white/5">
        <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">
          read interviews + reviews
        </span>
        <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
      </div>
    </Link>
  );
});

// ─── Professor types ──────────────────────────────────────
interface Professor {
  id: number;
  collegeName: string;
  collegeType: string;
  department: string;
  name: string;
  areaOfInterest: string | null;
  email: string | null;
}

interface ProfessorStats {
  total: number;
  colleges: { name: string; count: number }[];
  departments: { name: string; count: number }[];
}

const ProfessorCard = React.memo(function ProfessorCard({ professor }: { professor: Professor }) {
  return (
    <div className={cardBase}>
      <div className="flex items-start gap-3 mb-3">
        <CompanyMark label={professor.name} />
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 line-clamp-1 leading-tight">
            {professor.name}
          </h3>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 mt-0.5 block truncate">
            {professor.collegeName}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        <MetaChip icon={<BookOpen className="w-3 h-3" />}>{professor.department}</MetaChip>
        {professor.collegeType && (
          <MetaChip icon={<GraduationCap className="w-3 h-3" />}>{professor.collegeType}</MetaChip>
        )}
      </div>

      {professor.areaOfInterest && (
        <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 mb-4 leading-relaxed">
          {professor.areaOfInterest}
        </p>
      )}

      <div className="mt-auto flex items-center justify-between pt-3 border-t border-stone-100 dark:border-white/5">
        <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">
          {professor.email ? "contact" : "no email"}
        </span>
        {professor.email && (
          <a
            href={`mailto:${professor.email}`}
            className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-stone-500 hover:text-lime-500 transition-colors truncate max-w-48"
          >
            <Mail className="w-3 h-3 shrink-0" />
            <span className="truncate">{professor.email}</span>
          </a>
        )}
      </div>
    </div>
  );
});

// ─── Dropdown (hover-driven select) ───────────────────────
interface DropdownOption {
  value: string;
  label: string;
  count?: number;
}

function EditorialDropdown({
  icon,
  label,
  value,
  options,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
}) {
  const current = options.find((o) => o.value === value);
  return (
    <div className="relative group">
      <button
        type="button"
        className="inline-flex items-center gap-2 h-10 px-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 hover:border-stone-500 dark:hover:border-white/30 transition-colors cursor-pointer"
      >
        <span className="text-stone-400">{icon}</span>
        <span>{label}</span>
        <span className="text-stone-900 dark:text-stone-50 font-bold normal-case tracking-normal truncate max-w-28">
          {current?.label ?? "All"}
        </span>
        <ChevronDown className="w-3.5 h-3.5 opacity-60" />
      </button>
      <div className="absolute left-0 top-full z-20 mt-1 hidden min-w-55 max-h-80 overflow-y-auto rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 p-1 shadow-xl group-hover:block">
        {options.map((opt) => {
          const active = opt.value === value;
          return (
            <button
              key={opt.value || "__all"}
              type="button"
              onClick={() => onChange(opt.value)}
              className={cn(
                "flex w-full items-center justify-between gap-3 rounded px-3 py-2 text-left text-sm transition-colors",
                active
                  ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 font-medium"
                  : "text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-50"
              )}
            >
              <span className="truncate">{opt.label}</span>
              {typeof opt.count === "number" && (
                <span
                  className={cn(
                    "text-[10px] font-mono tabular-nums shrink-0",
                    active ? "text-stone-300 dark:text-stone-500" : "text-stone-400"
                  )}
                >
                  {opt.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Tab type ─────────────────────────────────────────────
type Tab = "all" | "interviews" | "yc" | "professors";

export default function CompanyListPage() {
  const isInsideLayout = useLocation().pathname.startsWith("/student/");
  const [searchParams, setSearchParams] = useSearchParams();
  const [companies, setCompanies] = useState<Company[]>([]);
  const [cities, setCities] = useState<CityCount[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [cityLimited, setCityLimited] = useState(false);
  const [totalUnlimited, setTotalUnlimited] = useState(0);

  // Active tab
  const [activeTab, setActiveTab] = useState<Tab>("all");

  // YC filters
  const [ycSearchInput, setYcSearchInput] = useState("");
  const [ycSearch, setYcSearch] = useState("");
  const [ycBatch, setYcBatch] = useState("");
  const [ycIndustry, setYcIndustry] = useState("");
  const [ycPage, setYcPage] = useState(1);

  // Professor filters
  const [profSearchInput, setProfSearchInput] = useState("");
  const [profSearch, setProfSearch] = useState("");
  const [profCollege, setProfCollege] = useState("");
  const [profDepartment, setProfDepartment] = useState("");
  const [profPage, setProfPage] = useState(1);

  // Interview filters
  const [interviewSearchInput, setInterviewSearchInput] = useState("");
  const [interviewSearch, setInterviewSearch] = useState("");
  const [interviewPage, setInterviewPage] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setYcSearch(ycSearchInput);
      setYcPage(1);
    }, 400);
    return () => clearTimeout(timer);
  }, [ycSearchInput]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProfSearch(profSearchInput);
      setProfPage(1);
    }, 400);
    return () => clearTimeout(timer);
  }, [profSearchInput]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInterviewSearch(interviewSearchInput);
      setInterviewPage(1);
    }, 400);
    return () => clearTimeout(timer);
  }, [interviewSearchInput]);

  const selectedCity = searchParams.get("city") || "";
  const search = searchParams.get("search") || "";
  const industry = searchParams.get("industry") || "";
  const size = searchParams.get("size") || "";
  const hiring = searchParams.get("hiring") || "";
  const minRating = searchParams.get("minRating") || "";
  const page = searchParams.get("page") || "1";

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    if (key !== "page") params.delete("page");
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const fetchCompanies = useCallback(async () => {
    setLoading(true);
    try {
      const params: Record<string, string> = { page };
      if (selectedCity) params["city"] = selectedCity;
      if (search) params["search"] = search;
      if (industry) params["industry"] = industry;
      if (size) params["size"] = size;
      if (hiring) params["hiring"] = hiring;
      if (minRating) params["minRating"] = minRating;

      const res = await api.get("/companies", { params });
      setCompanies(res.data.companies);
      setPagination(res.data.pagination);
      setCityLimited(!!res.data.limited);
      setTotalUnlimited(res.data.totalUnlimited || 0);
    } catch {
      setCompanies([]);
    } finally {
      setLoading(false);
    }
  }, [selectedCity, search, industry, size, hiring, minRating, page]);

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  useEffect(() => {
    api
      .get("/companies/cities")
      .then((res) => setCities(res.data.cities))
      .catch(() => {});
  }, []);

  const hasActiveFilters =
    selectedCity || industry || size || hiring || minRating || search;

  // ── YC queries ──
  const { data: ycStats } = useQuery<YCStats>({
    queryKey: queryKeys.yc.stats(),
    queryFn: () => api.get("/yc/stats").then((r) => r.data),
    staleTime: 5 * 60 * 1000,
  });

  const ycQueryParams: Record<string, string | number> = { page: ycPage, limit: 24 };
  if (ycSearch) ycQueryParams["search"] = ycSearch;
  if (ycBatch) ycQueryParams["batch"] = ycBatch;
  if (ycIndustry) ycQueryParams["industry"] = ycIndustry;

  const { data: ycData, isLoading: ycLoading } = useQuery<{
    companies: YCCompany[];
    pagination: Pagination;
  }>({
    queryKey: queryKeys.yc.list(ycQueryParams),
    queryFn: () => api.get("/yc/companies", { params: ycQueryParams }).then((r) => r.data),
    enabled: activeTab === "yc",
  });

  const ycCompanies = ycData?.companies ?? [];
  const ycPagination = ycData?.pagination ?? null;

  // ── Professor queries ──
  const { data: profStats } = useQuery<ProfessorStats>({
    queryKey: queryKeys.professors.stats(),
    queryFn: () => api.get("/professors/stats").then((r) => r.data),
    staleTime: 5 * 60 * 1000,
  });

  const profQueryParams: Record<string, string | number> = { page: profPage, limit: 24 };
  if (profSearch) profQueryParams["search"] = profSearch;
  if (profCollege) profQueryParams["college"] = profCollege;
  if (profDepartment) profQueryParams["department"] = profDepartment;

  const { data: profData, isLoading: profLoading } = useQuery<{
    professors: Professor[];
    pagination: Pagination;
    premiumRequired?: boolean;
  }>({
    queryKey: queryKeys.professors.list(profQueryParams),
    queryFn: () => api.get("/professors", { params: profQueryParams }).then((r) => r.data),
    enabled: activeTab === "professors",
  });

  const professors = profData?.professors ?? [];
  const profPagination = profData?.pagination ?? null;

  // ── Interview experience queries ──
  const interviewQueryParams: Record<string, string | number> = {
    page: interviewPage,
    limit: 24,
  };
  if (interviewSearch) interviewQueryParams["search"] = interviewSearch;

  const { data: interviewData, isLoading: interviewLoading } =
    useQuery<InterviewCompanyListResponse>({
      queryKey: queryKeys.interviews.companies(interviewQueryParams),
      queryFn: () =>
        listInterviewCompanies({
          page: interviewPage,
          limit: 24,
          search: interviewSearch || undefined,
        }),
      enabled: activeTab === "interviews",
      staleTime: 5 * 60 * 1000,
    });

  const interviewCompanies = interviewData?.companies ?? [];
  const interviewPagination = interviewData?.pagination ?? null;

  const tabs: { key: Tab; label: string; icon: React.ReactNode; count?: number | string }[] = [
    { key: "all", label: "Companies", icon: <Building2 className="w-4 h-4" />, count: pagination?.total },
    { key: "interviews", label: "Interviews", icon: <MessageCircle className="w-4 h-4" />, count: interviewPagination?.total },
    { key: "yc", label: "YC", icon: <Rocket className="w-4 h-4" />, count: ycStats?.total },
    { key: "professors", label: "Professors", icon: <GraduationCap className="w-4 h-4" />, count: profStats?.total },
  ];

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 relative">
      <SEO
        title="Explore Companies"
        description="Discover companies hiring on InternHack. Browse by industry, size, and location. Read reviews, see tech stacks, and find your ideal workplace."
        keywords="company explorer, companies hiring, company reviews, tech companies, startup jobs, company directory, workplace reviews"
        canonicalUrl={canonicalUrl("/companies")}
      />

      {!isInsideLayout && <Navbar />}

      {/* Grid line background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(120,113,108,0.25) 1px, transparent 1px)",
          backgroundSize: "120px 100%",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-8 pb-20">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6 mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-8"
        >
          <div>
            <EditorialLabel>browse / companies</EditorialLabel>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              The people and places{" "}
              <span className="relative inline-block">
                <span className="relative z-10">hiring.</span>
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
              Partner companies, YC startups, and professors. One directory to map your next move.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
            {typeof pagination?.total === "number" && (
              <span>
                companies{" "}
                <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-1">
                  {pagination.total}
                </span>
              </span>
            )}
            {typeof ycStats?.total === "number" && (
              <span>
                yc{" "}
                <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-1">
                  {ycStats.total}
                </span>
              </span>
            )}
            {typeof profStats?.total === "number" && (
              <span>
                profs{" "}
                <span className="text-stone-900 dark:text-stone-50 text-sm font-bold tabular-nums ml-1">
                  {profStats.total}
                </span>
              </span>
            )}
          </div>
        </motion.div>

        {/* Contribute strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-8"
        >
          <Link
            to={isInsideLayout ? "/student/companies/add" : "/companies/add"}
            className="group flex items-center gap-4 px-5 py-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md hover:border-stone-400 dark:hover:border-white/30 transition-colors no-underline"
          >
            <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
              <Plus className="w-4 h-4 text-stone-600 dark:text-stone-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-stone-900 dark:text-stone-50">
                Add a company to the directory
              </p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-0.5">
                help the community / earn contributor points
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
          </Link>
        </motion.div>

        {/* Tabs (underline style) */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 border-b border-stone-200 dark:border-white/10"
        >
          <div className="flex items-center gap-0 overflow-x-auto -mb-px">
            {tabs.map((t) => {
              const active = activeTab === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => setActiveTab(t.key)}
                  className={cn(
                    "inline-flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors cursor-pointer",
                    active
                      ? "border-lime-400 text-stone-900 dark:text-stone-50"
                      : "border-transparent text-stone-500 hover:text-stone-900 dark:hover:text-stone-50"
                  )}
                >
                  <span
                    className={
                      active ? "text-stone-900 dark:text-stone-50" : "text-stone-400"
                    }
                  >
                    {t.icon}
                  </span>
                  {t.label}
                  {typeof t.count !== "undefined" && (
                    <span
                      className={cn(
                        "text-[10px] font-mono tabular-nums",
                        active ? "text-stone-400" : "text-stone-400"
                      )}
                    >
                      {t.count ?? "..."}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── TAB: All Companies ───────────────────────── */}
        {activeTab === "all" && (
          <>
            {/* City filter row */}
            {cities.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mr-1 shrink-0">
                    city /
                  </span>
                  <button
                    onClick={() => updateParam("city", "")}
                    className={cn(
                      "px-3 py-1.5 rounded-md text-xs font-medium border transition-colors whitespace-nowrap cursor-pointer",
                      !selectedCity
                        ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                        : "bg-transparent text-stone-600 dark:text-stone-400 border-stone-300 dark:border-white/10 hover:border-stone-500 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50"
                    )}
                  >
                    All
                  </button>
                  {cities.map((c) => (
                    <button
                      key={c.city}
                      onClick={() => updateParam("city", c.city)}
                      className={cn(
                        "px-3 py-1.5 rounded-md text-xs font-medium border transition-colors whitespace-nowrap cursor-pointer",
                        selectedCity === c.city
                          ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                          : "bg-transparent text-stone-600 dark:text-stone-400 border-stone-300 dark:border-white/10 hover:border-stone-500 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50"
                      )}
                    >
                      {c.city}{" "}
                      <span
                        className={cn(
                          "font-mono text-[10px] ml-1",
                          selectedCity === c.city
                            ? "text-stone-300 dark:text-stone-500"
                            : "text-stone-400"
                        )}
                      >
                        {c.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Search + filter toggle */}
            <div className="flex flex-col sm:flex-row gap-2 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => updateParam("search", e.target.value)}
                  placeholder="Search by name or industry..."
                  className="w-full pl-11 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={cn(
                  "inline-flex items-center justify-center gap-2 px-4 h-12 sm:h-auto rounded-md text-sm font-medium border transition-colors cursor-pointer",
                  showFilters
                    ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                    : "bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-white/10 hover:border-stone-500 dark:hover:border-white/30"
                )}
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
              <AnimatePresence>
                {hasActiveFilters && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                    onClick={clearFilters}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-red-500 transition-colors border-0 bg-transparent cursor-pointer"
                  >
                    <X className="w-3 h-3" /> clear
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* Filter panel */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden mb-6"
                >
                  <div className="bg-white dark:bg-stone-900 p-5 rounded-md border border-stone-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
                        industry
                      </label>
                      <input
                        type="text"
                        value={industry}
                        onChange={(e) => updateParam("industry", e.target.value)}
                        placeholder="e.g. Technology"
                        className="w-full px-3 py-2 bg-white dark:bg-stone-950 border border-stone-300 dark:border-white/10 rounded-md text-sm focus:outline-none focus:border-lime-400 dark:text-stone-50"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
                        company size
                      </label>
                      <select
                        value={size}
                        onChange={(e) => updateParam("size", e.target.value)}
                        className="w-full px-3 py-2 bg-white dark:bg-stone-950 border border-stone-300 dark:border-white/10 rounded-md text-sm focus:outline-none focus:border-lime-400 dark:text-stone-50"
                      >
                        <option value="">All sizes</option>
                        <option value="STARTUP">Startup</option>
                        <option value="SMALL">Small</option>
                        <option value="MEDIUM">Medium</option>
                        <option value="LARGE">Large</option>
                        <option value="ENTERPRISE">Enterprise</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
                        hiring status
                      </label>
                      <select
                        value={hiring}
                        onChange={(e) => updateParam("hiring", e.target.value)}
                        className="w-full px-3 py-2 bg-white dark:bg-stone-950 border border-stone-300 dark:border-white/10 rounded-md text-sm focus:outline-none focus:border-lime-400 dark:text-stone-50"
                      >
                        <option value="">All</option>
                        <option value="true">Hiring now</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
                        min rating
                      </label>
                      <select
                        value={minRating}
                        onChange={(e) => updateParam("minRating", e.target.value)}
                        className="w-full px-3 py-2 bg-white dark:bg-stone-950 border border-stone-300 dark:border-white/10 rounded-md text-sm focus:outline-none focus:border-lime-400 dark:text-stone-50"
                      >
                        <option value="">Any</option>
                        <option value="4">4+ stars</option>
                        <option value="3">3+ stars</option>
                        <option value="2">2+ stars</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Results */}
            {loading ? (
              <LoadingScreen compact />
            ) : companies.length === 0 ? (
              <EmptyState
                icon={<Building2 className="w-5 h-5" />}
                title="No companies found"
                hint="try different search criteria"
              />
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {companies.map((company, i) => (
                    <motion.div
                      key={company.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03, duration: 0.3 }}
                    >
                      <CompanyCard company={company} />
                    </motion.div>
                  ))}
                </div>

                {cityLimited && selectedCity && (
                  <UpgradeBanner
                    title={`Showing first 20 of ${totalUnlimited} companies in ${selectedCity}`}
                    subtitle="upgrade to premium / see every company in this city"
                  />
                )}

                {pagination && (
                  <PaginationControls
                    currentPage={pagination.page}
                    totalPages={pagination.totalPages}
                    onPageChange={(p) => updateParam("page", String(p))}
                  />
                )}
              </>
            )}
          </>
        )}

        {/* ── TAB: YC ──────────────────────────────────── */}
        {activeTab === "yc" && (
          <>
            <div className="flex flex-col sm:flex-row gap-2 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  value={ycSearchInput}
                  onChange={(e) => setYcSearchInput(e.target.value)}
                  placeholder="Search YC companies..."
                  className="w-full pl-11 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600"
                />
              </div>
              <EditorialDropdown
                icon={<Rocket className="w-3.5 h-3.5" />}
                label="batch"
                value={ycBatch}
                onChange={(v) => {
                  setYcBatch(v);
                  setYcPage(1);
                }}
                options={[
                  { value: "", label: "All" },
                  ...(ycStats?.batches ?? []).map((b) => ({
                    value: b.name,
                    label: b.name,
                    count: b.count,
                  })),
                ]}
              />
              <EditorialDropdown
                icon={<Filter className="w-3.5 h-3.5" />}
                label="industry"
                value={ycIndustry}
                onChange={(v) => {
                  setYcIndustry(v);
                  setYcPage(1);
                }}
                options={[
                  { value: "", label: "All" },
                  ...(ycStats?.industries ?? []).slice(0, 30).map((ind) => ({
                    value: ind.name,
                    label: ind.name,
                    count: ind.count,
                  })),
                ]}
              />
              {(ycSearch || ycBatch || ycIndustry) && (
                <button
                  onClick={() => {
                    setYcSearchInput("");
                    setYcSearch("");
                    setYcBatch("");
                    setYcIndustry("");
                    setYcPage(1);
                  }}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-red-500 transition-colors border-0 bg-transparent cursor-pointer"
                >
                  <X className="w-3 h-3" /> clear
                </button>
              )}
            </div>

            {ycLoading ? (
              <Spinner />
            ) : ycCompanies.length === 0 ? (
              <EmptyState
                icon={<Rocket className="w-5 h-5" />}
                title="No YC companies found"
                hint="try different search criteria"
              />
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {ycCompanies.map((company, i) => (
                    <motion.div
                      key={company.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03, duration: 0.3 }}
                    >
                      <YCCard company={company} />
                    </motion.div>
                  ))}
                </div>
                {ycPagination && (
                  <PaginationControls
                    currentPage={ycPage}
                    totalPages={ycPagination.totalPages}
                    onPageChange={setYcPage}
                  />
                )}
              </>
            )}
          </>
        )}

        {/* ── TAB: Professors ──────────────────────────── */}
        {activeTab === "professors" && (
          <>
            <div className="flex flex-col sm:flex-row gap-2 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  value={profSearchInput}
                  onChange={(e) => setProfSearchInput(e.target.value)}
                  placeholder="Search by name, area of interest..."
                  className="w-full pl-11 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600"
                />
              </div>
              <EditorialDropdown
                icon={<GraduationCap className="w-3.5 h-3.5" />}
                label="college"
                value={profCollege}
                onChange={(v) => {
                  setProfCollege(v);
                  setProfPage(1);
                }}
                options={[
                  { value: "", label: "All" },
                  ...(profStats?.colleges ?? []).map((c) => ({
                    value: c.name,
                    label: c.name,
                    count: c.count,
                  })),
                ]}
              />
              <EditorialDropdown
                icon={<BookOpen className="w-3.5 h-3.5" />}
                label="dept"
                value={profDepartment}
                onChange={(v) => {
                  setProfDepartment(v);
                  setProfPage(1);
                }}
                options={[
                  { value: "", label: "All" },
                  ...(profStats?.departments ?? []).map((d) => ({
                    value: d.name,
                    label: d.name,
                    count: d.count,
                  })),
                ]}
              />
              {(profSearch || profCollege || profDepartment) && (
                <button
                  onClick={() => {
                    setProfSearchInput("");
                    setProfSearch("");
                    setProfCollege("");
                    setProfDepartment("");
                    setProfPage(1);
                  }}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-red-500 transition-colors border-0 bg-transparent cursor-pointer"
                >
                  <X className="w-3 h-3" /> clear
                </button>
              )}
            </div>

            {profLoading ? (
              <Spinner />
            ) : professors.length === 0 ? (
              <EmptyState
                icon={<GraduationCap className="w-5 h-5" />}
                title="No professors found"
                hint="try different search criteria"
              />
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {professors.map((prof, i) => (
                    <motion.div
                      key={prof.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03, duration: 0.3 }}
                    >
                      <ProfessorCard professor={prof} />
                    </motion.div>
                  ))}
                </div>

                {profData?.premiumRequired && (
                  <UpgradeBanner
                    title="First 100 professors are free"
                    subtitle={`upgrade to premium / unlock all ${profStats?.total ?? 1584} iit professors`}
                  />
                )}

                {profPagination && (
                  <PaginationControls
                    currentPage={profPage}
                    totalPages={profPagination.totalPages}
                    onPageChange={setProfPage}
                  />
                )}
              </>
            )}
          </>
        )}

        {/* ── TAB: Interview Experiences ───────────────── */}
        {activeTab === "interviews" && (
          <>
            {/* Intro strip with "Share yours" CTA */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md">
              <div className="min-w-0">
                <p className="text-sm font-bold text-stone-900 dark:text-stone-50">
                  Real interviews, real reviews
                </p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mt-1">
                  rounds, questions, ratings, work culture / earn a contributor badge when you share
                </p>
              </div>
              <Link
                to={isInsideLayout ? "/student/interviews/share" : "/student/interviews/share"}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-lime-400 hover:bg-lime-500 text-stone-900 rounded-md text-sm font-semibold transition-colors no-underline shrink-0"
              >
                <Plus className="w-4 h-4" />
                Share experience
              </Link>
            </div>

            {/* Search */}
            <div className="flex flex-col sm:flex-row gap-2 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  value={interviewSearchInput}
                  onChange={(e) => setInterviewSearchInput(e.target.value)}
                  placeholder="Search by company..."
                  className="w-full pl-11 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-white/10 rounded-md focus:outline-none focus:border-lime-400 transition-colors text-sm text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-600"
                />
              </div>
              {interviewSearch && (
                <button
                  onClick={() => {
                    setInterviewSearchInput("");
                    setInterviewSearch("");
                    setInterviewPage(1);
                  }}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-red-500 transition-colors border-0 bg-transparent cursor-pointer"
                >
                  <X className="w-3 h-3" /> clear
                </button>
              )}
            </div>

            {interviewLoading ? (
              <Spinner />
            ) : interviewCompanies.length === 0 ? (
              <EmptyState
                icon={<MessageCircle className="w-5 h-5" />}
                title="No interview experiences yet"
                hint="be the first to share, earn a badge"
              />
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {interviewCompanies.map((company, i) => (
                    <motion.div
                      key={company.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03, duration: 0.3 }}
                    >
                      <InterviewCompanyCard company={company} insideLayout={isInsideLayout} />
                    </motion.div>
                  ))}
                </div>

                {interviewPagination && interviewPagination.totalPages > 1 && (
                  <PaginationControls
                    currentPage={interviewPage}
                    totalPages={interviewPagination.totalPages}
                    onPageChange={setInterviewPage}
                  />
                )}
              </>
            )}
          </>
        )}

      </div>
      {!isInsideLayout && <Footer />}
    </div>
  );
}
