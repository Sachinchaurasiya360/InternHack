import { useState, useRef, useEffect, type ReactNode } from "react";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ExternalLink,
  Trophy,
  ChevronDown,
  X,
  Code2,
  Globe,
  Calendar,
  Layers,
  Tag,

  Mail,
  MessageSquare,
  Lightbulb,
  BookOpen,
  ArrowUpRight,
  Copy,
  Check,
} from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { PaginationControls } from "../../../components/ui/PaginationControls";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import type { GSoCOrganization, GSoCStats } from "../../../lib/types";

const cardBase =
  "group relative flex h-full w-full flex-col rounded-md border border-stone-200 bg-white p-5 text-left transition-colors hover:border-stone-400 dark:border-white/10 dark:bg-stone-900 dark:hover:border-white/30";

function EditorialLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
      <span className="h-1 w-1 bg-lime-400" />
      {children}
    </div>
  );
}

function OrgMark({ org }: { org: GSoCOrganization }) {
  if (org.imageUrl) {
    return (
      <img
        src={org.imageUrl}
        alt={org.name}
        className="h-10 w-10 shrink-0 rounded-md border border-stone-200 bg-stone-50 object-contain p-1 dark:border-white/10 dark:bg-stone-800"
      />
    );
  }

  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-stone-200 bg-stone-100 text-sm font-bold text-stone-900 dark:border-white/10 dark:bg-stone-800 dark:text-stone-50">
      {org.name.charAt(0).toUpperCase()}
    </div>
  );
}

function MetaChip({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-stone-200 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-stone-600 dark:border-white/10 dark:text-stone-400">
      <span className="text-stone-400">{icon}</span>
      {children}
    </span>
  );
}

function PlainChip({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return (
    <span
      className={
        accent
          ? "rounded-md bg-lime-400 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-stone-950"
          : "rounded bg-stone-100 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-stone-600 dark:bg-stone-800 dark:text-stone-400"
      }
    >
      {children}
    </span>
  );
}

function EmptyState() {
  return (
    <div className="rounded-md border border-dashed border-stone-300 py-20 text-center dark:border-white/10">
      <div className="inline-flex flex-col items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-md border border-stone-200 bg-white text-stone-400 dark:border-white/10 dark:bg-stone-900">
          <Trophy className="h-5 w-5" />
        </div>
        <p className="text-sm font-medium text-stone-700 dark:text-stone-300">No organizations found</p>
        <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
          try different search criteria
        </p>
      </div>
    </div>
  );
}

function FilterDropdown({
  label,
  icon,
  value,
  options,
  onChange,
  isOpen,
  setIsOpen,
  dropdownRef,
}: {
  label: string;
  icon: ReactNode;
  value: string;
  options: string[];
  onChange: (v: string) => void;
  isOpen: boolean;
  setIsOpen: (v: boolean | ((prev: boolean) => boolean)) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-md border border-stone-300 bg-white px-3 text-xs font-mono uppercase tracking-widest text-stone-600 transition-colors hover:border-stone-500 dark:border-white/10 dark:bg-stone-900 dark:text-stone-400 dark:hover:border-white/30"
      >
        <span className="text-stone-400">{icon}</span>
        <span>{label}</span>
        <span className="max-w-28 truncate font-bold normal-case tracking-normal text-stone-900 dark:text-stone-50">
          {value}
        </span>
        <ChevronDown className={`h-3.5 w-3.5 opacity-60 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div
        className={`${
          isOpen ? "block active" : "hidden"
        } absolute left-0 top-full z-20 mt-1 max-h-80 min-w-56 overflow-y-auto rounded-md border border-stone-200 bg-white p-1 shadow-xl dark:border-white/10 dark:bg-stone-900`}
      >
        {options.map((opt) => {
          const active = opt === value;
          return (
            <button
              key={opt}
              type="button"
onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              className={`flex w-full items-center justify-between gap-3 rounded px-3 py-2 text-left text-sm transition-colors ${
                active
                  ? "bg-stone-900 font-medium text-stone-50 dark:bg-stone-50 dark:text-stone-900"
                  : "text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-white/5"
              }`}
            >
              <span className="truncate">{opt}</span>
              {active && <span className="h-1 w-1 bg-lime-400" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function GSoCOrgCard({ org, onClick }: { org: GSoCOrganization; onClick: () => void }) {
  const years = [...org.yearsParticipated].sort((a, b) => b - a);

  return (
    <button type="button" onClick={onClick} className={cardBase}>
      <div className="mb-3 flex items-start gap-3">
        <OrgMark org={org} />
        <div className="min-w-0 flex-1">
          <h3 className="line-clamp-1 text-base font-bold leading-tight tracking-tight text-stone-900 dark:text-stone-50">
            {org.name}
          </h3>
          <span className="mt-0.5 block truncate text-xs font-mono uppercase tracking-widest text-stone-500">
            {org.category || "organization"}
          </span>
        </div>
        <PlainChip accent>{org.totalProjects} GSoC projects</PlainChip>
      </div>

      <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
        {org.description}
      </p>

      <div className="mb-3 flex flex-wrap gap-1.5">
        <MetaChip icon={<Calendar className="h-3 w-3" />}>
          {years[0] ?? "new"}
          {years.length > 1 && <span className="ml-1 text-stone-400">+{years.length - 1}</span>}
        </MetaChip>
        <MetaChip icon={<Layers className="h-3 w-3" />}>
          {org.technologies.length || 0} tech
        </MetaChip>
      </div>

      {org.technologies.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-1">
          {org.technologies.slice(0, 4).map((tech) => (
            <PlainChip key={tech}>{tech}</PlainChip>
          ))}
          {org.technologies.length > 4 && <PlainChip>+{org.technologies.length - 4}</PlainChip>}
        </div>
      )}

      <div className="mt-auto flex items-center justify-between border-t border-stone-100 pt-3 dark:border-white/5">
        <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">
          inspect org
        </span>
        <ArrowUpRight className="h-4 w-4 text-stone-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime-500" />
      </div>
    </button>
  );
}

interface GSoCOrgModalProps {
  org: GSoCOrganization;
  onClose: () => void;
  githubRepos: { title: string; url: string }[];
  gsocPageUrl: string | null;
  reposLoading: boolean;
}

function GSoCOrgModal({ org, onClose, githubRepos, gsocPageUrl, reposLoading }: GSoCOrgModalProps) {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const years = [...org.yearsParticipated].sort((a, b) => b - a);

  const handleCopy = (url: string, field: string) => {
    navigator.clipboard.writeText(url);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 1500);
  };

  const handleClose = () => {
    setCopiedField(null);
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/50 p-4 backdrop-blur-sm"
      onClick={handleClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-md border border-stone-200 bg-white shadow-2xl dark:border-white/10 dark:bg-stone-900"
      >
        <div className="flex items-start justify-between gap-4 border-b border-stone-200 px-5 py-4 dark:border-white/10">
          <div className="flex min-w-0 items-center gap-3">
            <OrgMark org={org} />
            <div className="min-w-0">
              <EditorialLabel>gsoc organization</EditorialLabel>
              <h2 className="mt-1 line-clamp-1 text-base font-bold text-stone-900 dark:text-stone-50">
                {org.name}
              </h2>
              <p className="text-xs font-mono uppercase tracking-widest text-stone-500">
                {org.totalProjects} projects / {years.length} years
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close"
            className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-md text-stone-500 transition-colors hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-white/5"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 space-y-5 overflow-y-auto px-5 py-5">
          <p className="text-sm leading-relaxed text-stone-700 dark:text-stone-300">{org.description}</p>

          <div className="flex flex-wrap gap-1.5">
            <MetaChip icon={<Globe className="h-3 w-3" />}>{org.category}</MetaChip>
            <MetaChip icon={<Trophy className="h-3 w-3" />}>{org.totalProjects} projects</MetaChip>
          </div>

          {org.technologies.length > 0 && (
            <section>
              <div className="mb-2 flex items-center gap-1.5">
                <span className="h-1 w-1 bg-lime-400" />
                <p className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  <Layers className="h-3 w-3" />
                  technologies
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {org.technologies.map((tech) => (
                  <PlainChip key={tech}>{tech}</PlainChip>
                ))}
              </div>
            </section>
          )}

          {org.topics.length > 0 && (
            <section>
              <div className="mb-2 flex items-center gap-1.5">
                <span className="h-1 w-1 bg-lime-400" />
                <p className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  <Tag className="h-3 w-3" />
                  topics
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {org.topics.map((topic) => (
                  <span key={topic} className="rounded-md bg-stone-100 px-2 py-0.5 text-[11px] font-mono text-stone-600 dark:bg-white/5 dark:text-stone-400">
                    #{topic}
                  </span>
                ))}
              </div>
            </section>
          )}

          {org.projectsData && years.length > 0 && (() => {
            const projectsByYear: Record<number, { title: string; short_description: string; student_name: string; code_url: string }[]> = {};
            for (const year of years) {
              const yd = org.projectsData?.[String(year)];
              if (yd?.projects?.length) projectsByYear[year] = yd.projects;
            }
            const sortedYears = Object.keys(projectsByYear).map(Number).sort((a, b) => b - a);
            if (sortedYears.length === 0) return null;
            return (
              <section>
                <div className="mb-3 flex items-center gap-1.5">
                  <span className="h-1 w-1 bg-lime-400" />
                  <p className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                    <Calendar className="h-3 w-3" />
                    past projects
                  </p>
                </div>
                <div className="space-y-1.5">
                  {sortedYears.map((year, idx) => (
                    <details
                      key={year}
                      open={idx < 3}
                      className="group rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950 overflow-hidden"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 hover:text-lime-500 dark:hover:text-lime-400 transition-colors select-none [&::-webkit-details-marker]:hidden">
                        <span>{year} — {projectsByYear[year].length} project{projectsByYear[year].length !== 1 ? "s" : ""}</span>
                        <ChevronDown className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-open:rotate-180" />
                      </summary>
                      <ul className="px-3 pb-2">
                        {projectsByYear[year].map((project: any, pIdx: number) => (
                          <li
                            key={`${project.title}-${pIdx}`}
                            className={`flex items-center justify-between gap-2 py-1.5 ${
                              pIdx < projectsByYear[year].length - 1 ? "border-b border-stone-100 dark:border-white/5" : ""
                            }`}
                          >
                            <span className="text-sm text-stone-700 dark:text-stone-300 min-w-0">
                              {project.title}
                              <span className="text-stone-400 dark:text-stone-500">
                                {" — "}{project.student_name || project.studentName}
                              </span>
                            </span>
                            {project.code_url && (
                              <a
                                href={project.code_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="shrink-0 text-stone-400 hover:text-lime-500 transition-colors"
                                aria-label="View code"
                              >
                                <Code2 className="h-3.5 w-3.5" />
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </details>
                  ))}
                </div>
                {org.url && (
                  <a
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-stone-500 no-underline hover:text-lime-400 transition-colors"
                  >
                    View all on GSoC website →
                  </a>
                )}
              </section>
            );
          })()}

          <div className="flex flex-wrap gap-2">
            {org.contactEmail && (
              <a href={`mailto:${org.contactEmail}`} className="inline-flex items-center gap-1.5 rounded-md border border-stone-200 px-2.5 py-1 text-xs text-stone-600 no-underline transition-colors hover:border-stone-400 dark:border-white/10 dark:text-stone-400 dark:hover:border-white/30">
                <Mail className="h-3 w-3" />
                Contact
              </a>
            )}
            {org.mailingList && (
              <a href={org.mailingList} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-stone-200 px-2.5 py-1 text-xs text-stone-600 no-underline transition-colors hover:border-stone-400 dark:border-white/10 dark:text-stone-400 dark:hover:border-white/30">
                <MessageSquare className="h-3 w-3" />
                Mailing List
              </a>
            )}
            {org.ideasUrl && (
              <div className="flex items-center gap-1">
                <a href={org.ideasUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-stone-200 px-2.5 py-1 text-xs text-stone-600 no-underline transition-colors hover:border-stone-400 dark:border-white/10 dark:text-stone-400 dark:hover:border-white/30">
                  <Lightbulb className="h-3 w-3" />
                  Project Ideas
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(org.ideasUrl!, "ideas")}
                  className={`px-2 py-1.5 text-[10px] font-mono uppercase tracking-widest border rounded-md inline-flex items-center gap-1.5 transition-colors cursor-pointer ${
                    copiedField === "ideas"
                      ? "border-lime-400 text-lime-600 dark:text-lime-400 bg-lime-50/50 dark:bg-lime-400/5 font-bold"
                      : "border-stone-200 dark:border-white/10 text-stone-500 hover:border-stone-400 bg-white dark:bg-stone-900"
                  }`}
                >
                  {copiedField === "ideas" ? (
                    <>
                      <Check className="h-3 w-3" />
                      Copied!
                    </>
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </button>
              </div>
            )}
            {org.guideUrl && (
              <div className="flex items-center gap-1">
                <a href={org.guideUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-stone-200 px-2.5 py-1 text-xs text-stone-600 no-underline transition-colors hover:border-stone-400 dark:border-white/10 dark:text-stone-400 dark:hover:border-white/30">
                  <BookOpen className="h-3 w-3" />
                  Contributor Guide
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(org.guideUrl!, "guide")}
                  className={`px-2 py-1.5 text-[10px] font-mono uppercase tracking-widest border rounded-md inline-flex items-center gap-1.5 transition-colors cursor-pointer ${
                    copiedField === "guide"
                      ? "border-lime-400 text-lime-600 dark:text-lime-400 bg-lime-50/50 dark:bg-lime-400/5 font-bold"
                      : "border-stone-200 dark:border-white/10 text-stone-500 hover:border-stone-400 bg-white dark:bg-stone-900"
                  }`}
                >
                  {copiedField === "guide" ? (
                    <>
                      <Check className="h-3 w-3" />
                      Copied!
                    </>
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </button>
              </div>
            )}
          </div>

          {reposLoading && (
            <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime-400" />
              finding github repos...
            </div>
          )}
          {!reposLoading && githubRepos.length > 0 && (
            <section>
              <div className="mb-2 flex items-center gap-1.5">
                <span className="h-1 w-1 bg-lime-400" />
                <p className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  <Code2 className="h-3 w-3" />
                  github repos
                </p>
              </div>
              <div className="space-y-1.5">
                {githubRepos.map((repo) => (
                  <a
                    key={repo.url}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 rounded-md border border-stone-200 bg-stone-50 px-3 py-2 no-underline transition-colors hover:border-stone-400 hover:bg-stone-100 dark:border-white/10 dark:bg-stone-950 dark:hover:border-white/30"
                  >
                    <span className="line-clamp-1 font-mono text-[11px] tracking-wide text-stone-700 dark:text-stone-300">
                      {repo.url.replace("https://github.com/", "")}
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 shrink-0 text-stone-400" />
                  </a>
                ))}
              </div>
            </section>
          )}

          <div className="grid gap-2 border-t border-stone-100 pt-4 sm:grid-cols-2 dark:border-white/5">
            <a
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-stone-900 px-4 py-3 text-sm font-bold text-stone-50 no-underline transition-colors hover:bg-stone-800 dark:bg-stone-50 dark:text-stone-900 dark:hover:bg-stone-200"
            >
              Website
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={gsocPageUrl ?? "https://summerofcode.withgoogle.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-lime-400 px-4 py-3 text-sm font-bold text-stone-950 no-underline transition-colors hover:bg-lime-300"
            >
              GSoC Page
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function GSoCReposPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // 1. Initialize state strictly from URL params
  const initialQ = searchParams.get("q") || "";
  const selectedCategory = searchParams.get("category") || "All";
  const selectedTech = searchParams.get("tech") || "All";
  const selectedYear = searchParams.get("year") || "All";

  const [search, setSearch] = useState(initialQ);

  // FIX 1: Depend ONLY on initialQ, not searchParams. 
  // This prevents wiping out half-typed text when other filters change.
  useEffect(() => {
    setSearch(initialQ);
  }, [initialQ]);

  const [page, setPage] = useState(1);
  const [selectedOrg, setSelectedOrg] = useState<GSoCOrganization | null>(null);

  // Dropdown states
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
  const [yearOpen, setYearOpen] = useState(false);

  // Refs for outside click detection
  const categoryRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);

  // Outside click handler
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (categoryRef.current && !categoryRef.current.contains(e.target as Node)) {
        setCategoryOpen(false);
      }
      if (techRef.current && !techRef.current.contains(e.target as Node)) {
        setTechOpen(false);
      }
      if (yearRef.current && !yearRef.current.contains(e.target as Node)) {
        setYearOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Escape key handler
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setCategoryOpen(false);
        setTechOpen(false);
        setYearOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const limit = 18;

  // FIX 2: Functional updater.
  // This ensures that delayed debounced calls always use the freshest URL state.
  const updateFilter = (key: string, value: string) => {
    setSearchParams(
      (prev) => {
        const newParams = new URLSearchParams(prev);
        if (value && value !== "All") {
          newParams.set(key, value);
        } else {
          newParams.delete(key);
        }
        return newParams;
      },
      { replace: true }
    );
    setPage(1);
  };
  const handleSearch = (value: string) => {
    setSearch(value);
    if (timer) clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        updateFilter("q", value);
      }, 400)
    );
  };

  const clearFilters = () => {
    setSearch("");
    setSearchParams({}, { replace: true });
    setPage(1);
  };

  const { data: stats } = useQuery<GSoCStats>({
    queryKey: queryKeys.gsoc.stats(),
    queryFn: () => api.get("/gsoc/stats").then((res) => res.data),
    staleTime: Infinity,
  });

  // 3. Pass current URL state directly to the API query
  const params: Record<string, string | number> = { page, limit };
  if (initialQ) params.search = initialQ;
  if (selectedCategory !== "All") params.category = selectedCategory;
  if (selectedTech !== "All") params.technology = selectedTech;
  if (selectedYear !== "All") params.year = parseInt(selectedYear, 10);

  const { data, isLoading } = useQuery({
    queryKey: queryKeys.gsoc.list(params),
    queryFn: () => api.get("/gsoc/organizations", { params }).then((res) => res.data),
  });

  const organizations: GSoCOrganization[] = data?.organizations ?? [];
  const pagination = data?.pagination ?? { page: 1, total: 0, totalPages: 1 };

  const { data: detailData } = useQuery({
    queryKey: queryKeys.gsoc.detail(selectedOrg?.slug ?? ""),
    queryFn: () => api.get(`/gsoc/organizations/${selectedOrg!.slug}`).then((res) => res.data),
    enabled: !!selectedOrg,
  });

  const detailOrg: GSoCOrganization | null = detailData?.organization ?? selectedOrg;

  const { data: reposData, isLoading: reposLoading } = useQuery({
    queryKey: queryKeys.gsoc.repos(selectedOrg?.slug ?? ""),
    queryFn: () => api.get(`/gsoc/organizations/${selectedOrg!.slug}/repos`).then((res) => res.data),
    enabled: !!selectedOrg,
    staleTime: 1000 * 60 * 60,
  });

  const githubRepos: { title: string; url: string }[] = reposData?.githubRepos ?? [];
  const gsocPageUrl: string | null = reposData?.gsocPageUrl ?? null;
  const categoryOptions = ["All", ...(stats?.categories.map((category) => category.name) ?? [])];
  const yearOptions = ["All", ...(stats?.years.map((year) => String(year.year)) ?? [])];
  const techOptions = ["All", ...(stats?.technologies.slice(0, 30).map((tech) => tech.name) ?? [])];

  const hasFilters =
    Boolean(initialQ) || selectedCategory !== "All" || selectedTech !== "All" || selectedYear !== "All";

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <SEO
        title="GSoC Organizations, Explore Google Summer of Code Orgs"
        description="Browse Google Summer of Code organizations, past projects, technologies, topics, and contributor links."
        keywords="GSoC, Google Summer of Code, open source organizations, student open source"
        canonicalUrl={canonicalUrl("/student/opensource/gsoc")}
      />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-8">
        <div className="mb-8">
          <EditorialLabel>learning / open source / gsoc</EditorialLabel>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="mb-1.5 text-2xl font-bold leading-tight tracking-tight text-stone-900 dark:text-stone-50 sm:text-3xl">
                Explore GSoC{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">organizations.</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                    aria-hidden
                    className="absolute bottom-0.5 left-0 right-0 z-0 h-2.5 origin-left bg-lime-400 sm:h-3"
                  />
                </span>
              </h1>
              <p className="max-w-2xl text-sm text-stone-600 dark:text-stone-400">
                Search accepted organizations, study their past projects, and find a community where your stack fits.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
              <span>
                <span className="text-stone-900 dark:text-stone-50">{stats?.total ?? "-"}</span> orgs
              </span>
              <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
              <span>
                <span className="text-stone-900 dark:text-stone-50">{stats?.categories.length ?? "-"}</span> categories
              </span>
              <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
              <span>
                <span className="text-lime-600 dark:text-lime-400">2016-2026</span> years
              </span>
            </div>
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-2 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={search}
              onChange={(event) => handleSearch(event.target.value)}
              placeholder="Search organizations, technologies, topics..."
              className="w-full rounded-md border border-stone-300 bg-white py-3 pl-11 pr-4 text-sm text-stone-900 transition-colors placeholder:text-stone-400 focus:border-lime-400 focus:outline-none dark:border-white/10 dark:bg-stone-900 dark:text-stone-50 dark:placeholder:text-stone-600"
            />
          </div>
          <FilterDropdown
            icon={<Globe className="h-3.5 w-3.5" />}
            label="category"
            value={selectedCategory}
            options={categoryOptions}
isOpen={categoryOpen}
            setIsOpen={setCategoryOpen}
            dropdownRef={categoryRef}
            onChange={(value) => updateFilter("category", value)}
          />
          <FilterDropdown
            icon={<Calendar className="h-3.5 w-3.5" />}
            label="year"
            value={selectedYear}
            options={yearOptions}
isOpen={yearOpen}
            setIsOpen={setYearOpen}
            dropdownRef={yearRef}
            onChange={(value) => updateFilter("year", value)}
          />
          <FilterDropdown
            icon={<Code2 className="h-3.5 w-3.5" />}
            label="tech"
            value={selectedTech}
            options={techOptions}
isOpen={techOpen}
            setIsOpen={setTechOpen}
            dropdownRef={techRef}
            onChange={(value) => updateFilter("tech", value)}
          />
          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-1 rounded-md border-0 bg-transparent px-3 py-1.5 text-xs font-mono uppercase tracking-widest text-stone-500 transition-colors hover:text-red-500"
            >
              <X className="h-3 w-3" />
              clear
            </button>
          )}
        </div>

        <div className="mb-4 flex items-center justify-between">
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            <span className="text-stone-900 dark:text-stone-50">{pagination.total}</span> organizations
            {hasFilters && (
              <>
                {" "} / <span className="text-stone-900 dark:text-stone-50">filtered</span>
              </>
            )}
            {pagination.totalPages > 1 && <> / page {pagination.page} of {pagination.totalPages}</>}
          </p>
        </div>

        {isLoading ? (
          <LoadingScreen compact />
        ) : organizations.length === 0 ? (
          <EmptyState />
        ) : (
          <motion.div layout className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {organizations.map((org, index) => (
                <motion.div
                  key={org.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.02, duration: 0.25 }}
                >
                  <GSoCOrgCard org={org} onClick={() => setSelectedOrg(org)} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        <PaginationControls
          currentPage={page}
          totalPages={pagination.totalPages}
          onPageChange={setPage}
          showingInfo={{ total: pagination.total, limit }}
        />

      </div>

      <AnimatePresence>
        {detailOrg && selectedOrg && (
          <GSoCOrgModal
            org={detailOrg}
            onClose={() => setSelectedOrg(null)}
            githubRepos={githubRepos}
            gsocPageUrl={gsocPageUrl}
            reposLoading={reposLoading}
          />
        )}
      </AnimatePresence>
    </div>
  );
}