import { useEffect, useState, type ReactNode } from "react";
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
  Users,
  Mail,
  MessageSquare,
  Lightbulb,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
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
}: {
  label: string;
  icon: ReactNode;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative group">
      <button
        type="button"
        className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-md border border-stone-300 bg-white px-3 text-xs font-mono uppercase tracking-widest text-stone-600 transition-colors hover:border-stone-500 dark:border-white/10 dark:bg-stone-900 dark:text-stone-400 dark:hover:border-white/30"
      >
        <span className="text-stone-400">{icon}</span>
        <span>{label}</span>
        <span className="max-w-28 truncate font-bold normal-case tracking-normal text-stone-900 dark:text-stone-50">
          {value}
        </span>
        <ChevronDown className="h-3.5 w-3.5 opacity-60" />
      </button>
      <div className="absolute left-0 top-full z-20 mt-1 hidden max-h-80 min-w-56 overflow-y-auto rounded-md border border-stone-200 bg-white p-1 shadow-xl group-hover:block dark:border-white/10 dark:bg-stone-900">
        {options.map((opt) => {
          const active = opt === value;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
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

function GSoCOrgCardSkeleton() {
  return (
    <div className="rounded-md border border-stone-200 bg-white p-5 animate-pulse dark:border-white/10 dark:bg-stone-900">
      <div className="mb-3 flex items-start gap-3">
        <div className="h-10 w-10 shrink-0 rounded-md bg-stone-100 dark:bg-stone-800" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-3/4 rounded bg-stone-100 dark:bg-stone-800" />
          <div className="h-3 w-1/3 rounded bg-stone-100 dark:bg-stone-800" />
        </div>
      </div>
      <div className="mb-4 space-y-2">
        <div className="h-3 w-full rounded bg-stone-100 dark:bg-stone-800" />
        <div className="h-3 w-5/6 rounded bg-stone-100 dark:bg-stone-800" />
      </div>
      <div className="flex gap-2">
        <div className="h-6 w-16 rounded bg-stone-100 dark:bg-stone-800" />
        <div className="h-6 w-16 rounded bg-stone-100 dark:bg-stone-800" />
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
  const years = [...org.yearsParticipated].sort((a, b) => b - a);
  const activeYear = selectedYear || (years[0] ? String(years[0]) : null);
  const yearData = activeYear && org.projectsData ? org.projectsData[activeYear] : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/50 p-4 backdrop-blur-sm"
      onClick={onClose}
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
            onClick={onClose}
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

          {org.projectsData && years.length > 0 && (
            <section>
              <div className="mb-2 flex items-center gap-1.5">
                <span className="h-1 w-1 bg-lime-400" />
                <p className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  <Calendar className="h-3 w-3" />
                  projects by year
                </p>
              </div>
              <div className="mb-3 flex flex-wrap gap-1.5">
                {years.map((year) => {
                  const active = String(year) === activeYear;
                  return (
                    <button
                      key={year}
                      type="button"
                      onClick={() => setSelectedYear(String(year))}
                      className={`rounded-md border px-2.5 py-1 text-xs font-mono uppercase tracking-wider transition-colors ${
                        active
                          ? "border-lime-400 bg-lime-400 text-stone-950"
                          : "border-stone-200 bg-white text-stone-600 hover:border-stone-400 dark:border-white/10 dark:bg-stone-900 dark:text-stone-400 dark:hover:border-white/30"
                      }`}
                    >
                      {year} ({org.projectsData?.[String(year)]?.num_projects || 0})
                    </button>
                  );
                })}
              </div>

              {yearData?.projects && yearData.projects.length > 0 && (
                <div className="max-h-52 space-y-2 overflow-y-auto">
                  {yearData.projects.map((project, index) => (
                    <div key={`${project.title}-${index}`} className="rounded-md border border-stone-200 bg-stone-50 p-3 dark:border-white/10 dark:bg-stone-950">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h5 className="text-sm font-bold text-stone-900 dark:text-stone-50">
                            {project.title}
                          </h5>
                          <p className="mt-0.5 inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-stone-500">
                            <Users className="h-3 w-3" />
                            {project.student_name}
                          </p>
                        </div>
                        {project.code_url && (
                          <a
                            href={project.code_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 text-stone-400 transition-colors hover:text-lime-500"
                            aria-label="View project code"
                          >
                            <Code2 className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                      {project.short_description && (
                        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-stone-600 dark:text-stone-400">
                          {project.short_description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

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
              <a href={org.ideasUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-stone-200 px-2.5 py-1 text-xs text-stone-600 no-underline transition-colors hover:border-stone-400 dark:border-white/10 dark:text-stone-400 dark:hover:border-white/30">
                <Lightbulb className="h-3 w-3" />
                Project Ideas
              </a>
            )}
            {org.guideUrl && (
              <a href={org.guideUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-stone-200 px-2.5 py-1 text-xs text-stone-600 no-underline transition-colors hover:border-stone-400 dark:border-white/10 dark:text-stone-400 dark:hover:border-white/30">
                <BookOpen className="h-3 w-3" />
                Contributor Guide
              </a>
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
  const [queryParams, setQueryParams] = useState({
    page: 1,
    search: "",
    category: "",
    tech: "",
    year: "",
  });
  const [searchInputValue, setSearchInputValue] = useState("");
  const [selectedOrg, setSelectedOrg] = useState<GSoCOrganization | null>(null);

  const { data: stats } = useQuery<GSoCStats>({
    queryKey: queryKeys.gsoc.stats(),
    queryFn: () => api.get("/gsoc/stats").then((res) => res.data),
    staleTime: Infinity,
  });

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["gsoc-orgs", queryParams],
    queryFn: () =>
      api.get("/opensource/gsoc/orgs", { params: queryParams }).then((res) => res.data),
    placeholderData: (previousData) => previousData,
    staleTime: 5 * 60 * 1000,
  });

  const organizations: GSoCOrganization[] = data?.orgs ?? [];
  const total = data?.total ?? 0;
  const totalPages = data?.totalPages ?? 1;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [queryParams.page]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setQueryParams((prev) => ({ ...prev, search: searchInputValue, page: 1 }));
    }, 400);
    return () => clearTimeout(timer);
  }, [searchInputValue]);


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

  const hasFilters = Boolean(queryParams.search || queryParams.category || queryParams.tech || queryParams.year);

  const clearFilters = () => {
    setSearchInputValue("");
    setQueryParams({
      page: 1,
      search: "",
      category: "",
      tech: "",
      year: "",
    });
  };

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
              value={searchInputValue}
              onChange={(event) => setSearchInputValue(event.target.value)}
              placeholder="Search organizations, technologies, topics..."
              className="w-full rounded-md border border-stone-300 bg-white py-3 pl-11 pr-4 text-sm text-stone-900 transition-colors placeholder:text-stone-400 focus:border-lime-400 focus:outline-none dark:border-white/10 dark:bg-stone-900 dark:text-stone-50 dark:placeholder:text-stone-600"
            />
          </div>
          <FilterDropdown
            icon={<Globe className="h-3.5 w-3.5" />}
            label="category"
            value={queryParams.category || "All"}
            options={categoryOptions}
            onChange={(value) => {
              setQueryParams((prev) => ({ ...prev, category: value === "All" ? "" : value, page: 1 }));
            }}
          />
          <FilterDropdown
            icon={<Calendar className="h-3.5 w-3.5" />}
            label="year"
            value={String(queryParams.year) || "All"}
            options={yearOptions}
            onChange={(value) => {
              setQueryParams((prev) => ({ ...prev, year: value === "All" ? "" : value, page: 1 }));
            }}
          />
          <FilterDropdown
            icon={<Code2 className="h-3.5 w-3.5" />}
            label="tech"
            value={queryParams.tech || "All"}
            options={techOptions}
            onChange={(value) => {
              setQueryParams((prev) => ({ ...prev, tech: value === "All" ? "" : value, page: 1 }));
            }}
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
            <span className="text-stone-900 dark:text-stone-50">{total}</span> organizations
            {(queryParams.search || queryParams.category || queryParams.tech || queryParams.year) && (
              <>
                {" "} / <span className="text-stone-900 dark:text-stone-50">filtered</span>
              </>
            )}
            {totalPages > 1 && <> / page {queryParams.page} of {totalPages}</>}
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <GSoCOrgCardSkeleton key={i} />
            ))}
          </div>
        ) : organizations.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="relative">
            <AnimatePresence>
              {isFetching && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-10 flex items-start justify-center bg-white/20 pt-20 backdrop-blur-[1px] dark:bg-stone-950/20"
                >
                  <div className="flex items-center gap-2 rounded-md bg-stone-900 px-4 py-2 text-[10px] font-mono uppercase tracking-[0.2em] text-lime-400 shadow-2xl dark:bg-stone-50 dark:text-stone-900">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime-400" />
                    Updating Results
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              layout
              className={`grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-300 ${isFetching ? "opacity-40" : "opacity-100"}`}
            >
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
          </div>
        )}

        <PaginationControls
          currentPage={queryParams.page}
          totalPages={totalPages}
          onPageChange={(page) => setQueryParams((prev) => ({ ...prev, page }))}
          showingInfo={{ total, limit: 24 }}
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
