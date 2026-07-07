
import { memo, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ExternalLink,
  Trophy,
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
  Heart,
} from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { PaginationControls } from "../../../components/ui/PaginationControls";
import { EditorialDropdown } from "../../../components/ui/EditorialDropdown";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import type { GSoCOrganization, GSoCStats } from "../../../lib/types";
import { markLearningPathMilestone } from "./learning-paths.data";

const WISHLIST_KEY = "gsoc_wishlist";

function useWishlist() {
  const [wishlist, setWishlist] = useState<number[]>(() => {
    try {
      const parsed = JSON.parse(localStorage.getItem(WISHLIST_KEY) ?? "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const toggle = useCallback((id: number) => {
    setWishlist((prev) => {
      const next = prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id];
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const has = useCallback((id: number) => wishlist.includes(id), [wishlist]);
  return { wishlist, toggle, has };
}

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

function MetaChip({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-stone-200 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-stone-600 dark:border-white/10 dark:text-stone-400">
      <span className="text-stone-400">{icon}</span>
      {children}
    </span>
  );
}

function PlainChip({
  children,
  accent = false,
}: {
  children: ReactNode;
  accent?: boolean;
}) {
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
        <p className="text-sm font-medium text-stone-700 dark:text-stone-300">
          No organizations found
        </p>
        <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
          try different search criteria
        </p>
      </div>
    </div>
  );
}

const ParticipationBar = ({ participatedYears }: { participatedYears: number[] }) => {
  const currentYear = new Date().getFullYear();
  const yearsRange = Array.from({ length: currentYear - 2015 }, (_, i) => 2016 + i);

  return (
    <div
      className="mb-4 flex items-center gap-1"
      aria-label={`GSoC Participation History (2016-${currentYear})`}
    >
      {yearsRange.map((year) => {
        const participated = participatedYears.includes(year);
        return (
          <div
            key={year}
            title={
              participated
                ? `${year}: Participated`
                : `${year}: Did not participate`
            }
            className={`h-1.5 w-1.5 cursor-help rounded-sm transition-transform duration-200 hover:scale-125 ${participated
              ? "bg-lime-500"
              : "bg-stone-200 dark:bg-stone-700"
              }`}
          />
        );
      })}
    </div>
  );
};

const GSoCOrgCard = memo(function GSoCOrgCard({
  org,
  onSelect,
  wishlisted,
  onWishlistToggle,
  isCompared,
  onCompareToggle,
  compareCount,
}: {
  org: GSoCOrganization;
  onSelect: (org: GSoCOrganization) => void;
  wishlisted: boolean;
  onWishlistToggle: (orgId: number, event: React.MouseEvent) => void;
  isCompared: boolean;
  onCompareToggle: (org: GSoCOrganization) => void;
  compareCount: number;
}) {

  const years = [...org.yearsParticipated].sort((a, b) => b - a);
const handleSelect = () => onSelect(org);
const handleWishlistClick = (event: React.MouseEvent) => onWishlistToggle(org.id, event);

return (
  <div
    role="button"
    tabIndex={0}
    onClick={handleSelect}
    onKeyDown={(e) => {
      const isSpace = e.key === " " || e.key === "Spacebar" || e.code === "Space";
      if (isSpace) {
        e.preventDefault();
      }
      if (e.key === "Enter" || isSpace) {
        handleSelect();
      }
    }}
    className={cardBase}
  >
    <div className="mb-3 flex items-start gap-3">
      <div onClick={(e) => e.stopPropagation()}>
        <input
          type="checkbox"
          checked={isCompared}
          disabled={!isCompared && compareCount >= 2}
          onChange={() => onCompareToggle(org)}
          className="h-4 w-4 cursor-pointer"
          aria-label={`Compare ${org.name}`}
        />
      </div>

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
        {years.length > 1 && (
          <span className="ml-1 text-stone-400">+{years.length - 1}</span>
        )}
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
        {org.technologies.length > 4 && (
          <PlainChip>+{org.technologies.length - 4}</PlainChip>
        )}
      </div>
    )}

    <button
      type="button"
      onClick={handleWishlistClick}
      className="mb-3 flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest transition-colors"
      aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
    >
      <Heart
        className={`h-4 w-4 transition-colors ${wishlisted ? "fill-lime-400 text-lime-400" : "text-stone-400 hover:text-lime-400"}`}
      />
      <span
        className={
          wishlisted ? "text-lime-600 dark:text-lime-400" : "text-stone-400"
        }
      >
        {wishlisted ? "wishlisted" : "wishlist"}
      </span>
    </button>
    <ParticipationBar participatedYears={org.yearsParticipated} />

    <div className="mt-auto flex items-center justify-between border-t border-stone-100 pt-3 dark:border-white/5">
      <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">
        inspect org
      </span>
      <ArrowUpRight className="h-4 w-4 text-stone-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime-500" />
    </div>
  </div>
);
});

interface GSoCOrgModalProps {
  org: GSoCOrganization;
  onClose: () => void;
  githubRepos: { title: string; url: string }[];
  gsocPageUrl: string | null;
  reposLoading: boolean;
  wishlisted: boolean;
  onWishlistToggle: () => void;
}
function GSoCOrgModal({
  org,
  onClose,
  githubRepos,
  gsocPageUrl,
  reposLoading,
  wishlisted,
  onWishlistToggle,
}: GSoCOrgModalProps) {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const years = [...org.yearsParticipated].sort((a, b) => b - a);
  const activeYear = selectedYear || (years[0] ? String(years[0]) : null);
  const yearData =
    activeYear && org.projectsData ? org.projectsData[activeYear] : null;

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
            onClick={onWishlistToggle}
            aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
            className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-md text-stone-500 transition-colors hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-white/5"
          >
            <Heart
              className={`h-4 w-4 ${wishlisted ? "fill-lime-400 text-lime-400" : ""}`}
            />
          </button>
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
          <p className="text-sm leading-relaxed text-stone-700 dark:text-stone-300">
            {org.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            <MetaChip icon={<Globe className="h-3 w-3" />}>
              {org.category}
            </MetaChip>
            <MetaChip icon={<Trophy className="h-3 w-3" />}>
              {org.totalProjects} projects
            </MetaChip>
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
                  <span
                    key={topic}
                    className="rounded-md bg-stone-100 px-2 py-0.5 text-[11px] font-mono text-stone-600 dark:bg-white/5 dark:text-stone-400"
                  >
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
                      className={`rounded-md border px-2.5 py-1 text-xs font-mono uppercase tracking-wider transition-colors ${active
                        ? "border-lime-400 bg-lime-400 text-stone-950"
                        : "border-stone-200 bg-white text-stone-600 hover:border-stone-400 dark:border-white/10 dark:bg-stone-900 dark:text-stone-400 dark:hover:border-white/30"
                        }`}
                    >
                      {year} (
                      {org.projectsData?.[String(year)]?.num_projects || 0})
                    </button>
                  );
                })}
              </div>

              {yearData?.projects && yearData.projects.length > 0 && (
                <div className="max-h-52 space-y-2 overflow-y-auto">
                  {yearData.projects.map((project, index) => (
                    <div
                      key={`${project.title}-${index}`}
                      className="rounded-md border border-stone-200 bg-stone-50 p-3 dark:border-white/10 dark:bg-stone-950"
                    >
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
              <a
                href={`mailto:${org.contactEmail}`}
                className="inline-flex items-center gap-1.5 rounded-md border border-stone-200 px-2.5 py-1 text-xs text-stone-600 no-underline transition-colors hover:border-stone-400 dark:border-white/10 dark:text-stone-400 dark:hover:border-white/30"
              >
                <Mail className="h-3 w-3" />
                Contact
              </a>
            )}
            {org.mailingList && (
              <a
                href={org.mailingList}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-stone-200 px-2.5 py-1 text-xs text-stone-600 no-underline transition-colors hover:border-stone-400 dark:border-white/10 dark:text-stone-400 dark:hover:border-white/30"
              >
                <MessageSquare className="h-3 w-3" />
                Mailing List
              </a>
            )}
            {org.ideasUrl && (
              <a
                href={org.ideasUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-stone-200 px-2.5 py-1 text-xs text-stone-600 no-underline transition-colors hover:border-stone-400 dark:border-white/10 dark:text-stone-400 dark:hover:border-white/30"
              >
                <Lightbulb className="h-3 w-3" />
                Project Ideas
              </a>
            )}
            {org.guideUrl && (
              <a
                href={org.guideUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-stone-200 px-2.5 py-1 text-xs text-stone-600 no-underline transition-colors hover:border-stone-400 dark:border-white/10 dark:text-stone-400 dark:hover:border-white/30"
              >
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
function GSoCComparisonModal({
  organizations,
  onClose,
}: {
  organizations: GSoCOrganization[];
  onClose: () => void;
}) {
  const [orgA, orgB] = organizations;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="max-h-[90vh] w-full max-w-5xl overflow-auto rounded-xl border border-stone-200 bg-white p-6 shadow-xl dark:border-stone-800 dark:bg-stone-900"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
        >
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-stone-900 dark:text-stone-50">
              Compare Organizations
            </h2>

            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-stone-300 px-3 py-2 text-sm hover:bg-stone-100 dark:border-stone-700 dark:hover:bg-stone-800"
            >
              Close
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-stone-200 dark:border-stone-800">
                  <th className="p-3 text-left font-semibold">Feature</th>
                  <th className="p-3 text-left font-semibold">
                    {orgA.name}
                  </th>
                  <th className="p-3 text-left font-semibold">
                    {orgB.name}
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-stone-200 dark:border-stone-800">
                  <td className="p-3 font-medium">Category</td>
                  <td className="p-3">{orgA.category}</td>
                  <td className="p-3">{orgB.category}</td>
                </tr>

                <tr className="border-b border-stone-200 dark:border-stone-800">
                  <td className="p-3 font-medium">Technologies</td>
                  <td className="p-3">
                    {orgA.technologies.join(", ")}
                  </td>
                  <td className="p-3">
                    {orgB.technologies.join(", ")}
                  </td>
                </tr>

                <tr className="border-b border-stone-200 dark:border-stone-800">
                  <td className="p-3 font-medium">Years Participating</td>
                  <td className="p-3">
                    {Math.min(...orgA.yearsParticipated)} -{" "}
                    {Math.max(...orgA.yearsParticipated)}
                  </td>
                  <td className="p-3">
                    {Math.min(...orgB.yearsParticipated)} -{" "}
                    {Math.max(...orgB.yearsParticipated)}
                  </td>
                </tr>

                <tr className="border-b border-stone-200 dark:border-stone-800">
                  <td className="p-3 font-medium">Total Projects</td>
                  <td className="p-3">{orgA.totalProjects}</td>
                  <td className="p-3">{orgB.totalProjects}</td>
                </tr>

                <tr className="border-b border-stone-200 dark:border-stone-800">
                  <td className="p-3 font-medium">Contact</td>
                  <td className="p-3">
                    {orgA.contactEmail || orgA.mailingList || "N/A"}
                  </td>
                  <td className="p-3">
                    {orgB.contactEmail || orgB.mailingList || "N/A"}
                  </td>
                </tr>

                <tr className="border-b border-stone-200 dark:border-stone-800">
                  <td className="p-3 font-medium">Ideas Page</td>

                  <td className="p-3">
                    {orgA.ideasUrl ? (
                      <a
                        href={orgA.ideasUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-lime-600 underline"
                      >
                        Open
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>

                  <td className="p-3">
                    {orgB.ideasUrl ? (
                      <a
                        href={orgB.ideasUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-lime-600 underline"
                      >
                        Open
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                </tr>

                <tr>
                  <td className="p-3 font-medium">Website</td>

                  <td className="p-3">
                    <a
                      href={orgA.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lime-600 underline"
                    >
                      Visit
                    </a>
                  </td>

                  <td className="p-3">
                    <a
                      href={orgB.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lime-600 underline"
                    >
                      Visit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
export default function GSoCReposPage() {
  useEffect(() => {
    markLearningPathMilestone("gsoc-orgs");
  }, []);

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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSearch(initialQ);
  }, [initialQ]);

  const [page, setPage] = useState(1);
  const [selectedOrg, setSelectedOrg] = useState<GSoCOrganization | null>(null);
  const [compareOrgs, setCompareOrgs] = useState<GSoCOrganization[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const { wishlist, toggle, has } = useWishlist();
  const [showWishlist, setShowWishlist] = useState(false);


  // ---> CHANGED TO useRef TO FIX STALE CLOSURES <---
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const limit = 18;

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  const clearPendingSearchTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // FIX 2: Functional updater.
  // This ensures that delayed debounced calls always use the freshest URL state.
  const updateFilter = (key: string, value: string) => {
    if (key === "q") {
      clearPendingSearchTimer();
    }
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

  // ---> UPDATED TO USE timerRef <---
  const handleSearch = (value: string) => {
    setSearch(value);
    clearPendingSearchTimer();

    timerRef.current = setTimeout(() => {
      updateFilter("q", value);
    }, 400);
  };

  const clearFilters = () => {
    clearPendingSearchTimer();
    setSearch("");
    setSearchParams({}, { replace: true });
    setPage(1);
  };

  const handleOrgClick = useCallback((org: GSoCOrganization) => {
    setSelectedOrg(org);
  }, [setSelectedOrg]);

  const handleCompareToggle = useCallback((org: GSoCOrganization) => {
    setCompareOrgs((prev) => {
      const exists = prev.some((item) => item.id === org.id);

      if (exists) {
        return prev.filter((item) => item.id !== org.id);
      }

      if (prev.length >= 2) {
        return prev;
      }

      return [...prev, org];
    });
  }, []);

  const handleWishlistToggle = useCallback(
    (orgId: number, event: React.MouseEvent) => {
      event.stopPropagation();
      toggle(orgId);
    },
    [toggle]
  );

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
    queryFn: () =>
      api.get("/gsoc/organizations", { params }).then((res) => res.data),
  });

const organizations: GSoCOrganization[] = data?.organizations ?? [];

  const filteredOrganizations = showWishlist
    ? organizations.filter((org) => has(org.id))
    : organizations;
  const pagination = data?.pagination ?? { page: 1, total: 0, totalPages: 1 };

  const { data: detailData } = useQuery({
    queryKey: queryKeys.gsoc.detail(selectedOrg?.slug ?? ""),
    queryFn: () =>
      api
        .get(`/gsoc/organizations/${selectedOrg!.slug}`)
        .then((res) => res.data),
    enabled: !!selectedOrg,
  });

  const detailOrg: GSoCOrganization | null =
    detailData?.organization ?? selectedOrg;

  const { data: reposData, isLoading: reposLoading } = useQuery({
    queryKey: queryKeys.gsoc.repos(selectedOrg?.slug ?? ""),
    queryFn: () =>
      api
        .get(`/gsoc/organizations/${selectedOrg!.slug}/repos`)
        .then((res) => res.data),
    enabled: !!selectedOrg,
    staleTime: 1000 * 60 * 60,
  });

  const githubRepos: { title: string; url: string }[] = reposData?.githubRepos ?? [];
  const gsocPageUrl: string | null = reposData?.gsocPageUrl ?? null;
  const categoryOptions = [
    "All",
    ...(stats?.categories.map((category) => category.name) ?? []),
  ];
  const yearOptions = [
    "All",
    ...(stats?.years.map((year) => String(year.year)) ?? []),
  ];
  const techOptions = [
    "All",
    ...(stats?.technologies.map((tech) => tech.name) ?? []),
  ];

  const hasFilters =
    Boolean(initialQ) || selectedCategory !== "All" || selectedTech !== "All" || selectedYear !== "All";

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <SEO
        title="GSoC Organizations, Explore Google Summer of Code Orgs"
        description="Browse Google Summer of Code organizations, past projects, technologies, topics, and contributor links."
        keywords="GSoC, Google Summer of Code, open source organizations, student open source"
        canonicalUrl={canonicalUrl("/student/opensource/gsoc")}
        ogImage="/og/og-gsoc.png"
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
                Search accepted organizations, study their past projects, and
                find a community where your stack fits.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
              <span>
                <span className="text-stone-900 dark:text-stone-50">
                  {stats?.total ?? "-"}
                </span>{" "}
                orgs
              </span>
              <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
              <span>
                <span className="text-stone-900 dark:text-stone-50">
                  {stats?.categories.length ?? "-"}
                </span>{" "}
                categories
              </span>
              <span className="h-1 w-1 bg-stone-300 dark:bg-stone-700" />
              <span>
                <span className="text-lime-600 dark:text-lime-400">2016-{new Date().getFullYear()}</span> years
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
          <EditorialDropdown
            icon={<Globe className="h-3.5 w-3.5" />}
            label="category"
            value={selectedCategory}
            options={categoryOptions.map((o) => ({ value: o, label: o }))}
            onChange={(value) => updateFilter("category", value)}
          />
          <EditorialDropdown
            icon={<Calendar className="h-3.5 w-3.5" />}
            label="year"
            value={selectedYear}
            options={yearOptions.map((o) => ({ value: o, label: o }))}
            onChange={(value) => updateFilter("year", value)}
          />
          <EditorialDropdown
            icon={<Code2 className="h-3.5 w-3.5" />}
            label="tech"
            value={selectedTech}
            options={techOptions.map((o) => ({ value: o, label: o }))}
            onChange={(value) => updateFilter("tech", value)}
            searchable
            searchPlaceholder="Search tech..."
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
          <button
            type="button"
            onClick={() => setShowWishlist((prev) => !prev)}
            className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-2 text-xs font-mono uppercase tracking-widest transition-colors ${showWishlist
              ? "border-lime-400 bg-lime-400 text-stone-950"
              : "border-stone-300 bg-white text-stone-600 hover:border-stone-500 dark:border-white/10 dark:bg-stone-900 dark:text-stone-400"
              }`}
          >
            <Heart
              className={`h-3.5 w-3.5 ${showWishlist ? "fill-stone-950" : ""}`}
            />
            Wishlist {wishlist.length > 0 && `(${wishlist.length})`}
          </button>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            <span className="text-stone-900 dark:text-stone-50">
              {pagination.total}
            </span>{" "}
            organizations
            {hasFilters && (
              <>
                {" "}
                /{" "}
                <span className="text-stone-900 dark:text-stone-50">
                  filtered
                </span>
              </>
            )}
            {pagination.totalPages > 1 && (
              <>
                {" "}
                / page {pagination.page} of {pagination.totalPages}
              </>
            )}
          </p>
          {compareOrgs.length === 2 && (
            <button
              type="button"
              onClick={() => setShowComparison(true)}
              className="rounded-md bg-lime-400 px-4 py-2 text-xs font-mono uppercase tracking-widest text-stone-950 transition-colors hover:bg-lime-300"
            >
              Compare Selected
            </button>
          )}
        </div>

        {isLoading ? (
          <LoadingScreen compact />
        ) : organizations.length === 0 ? (
          <EmptyState />
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredOrganizations.map((org, index) => (
                <motion.div
                  key={org.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.02, duration: 0.25 }}
                >
                  <GSoCOrgCard
                    org={org}
                    onSelect={handleOrgClick}
                    wishlisted={has(org.id)}
                    onWishlistToggle={handleWishlistToggle}
                    isCompared={compareOrgs.some((item) => item.id === org.id)}
                    onCompareToggle={handleCompareToggle}
                    compareCount={compareOrgs.length}
                  />                  
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
      {showComparison && compareOrgs.length === 2 && (
  <GSoCComparisonModal
    organizations={compareOrgs}
    onClose={() => setShowComparison(false)}
  />
)}
      <AnimatePresence>
      
        {detailOrg && selectedOrg && (
          <GSoCOrgModal
            org={detailOrg}
            onClose={() => setSelectedOrg(null)}
            githubRepos={githubRepos}
            gsocPageUrl={gsocPageUrl}
            reposLoading={reposLoading}
            wishlisted={has(detailOrg.id)}
            onWishlistToggle={() => toggle(detailOrg.id)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
