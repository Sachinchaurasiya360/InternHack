import { motion } from "framer-motion";
import { Link } from "react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Bookmark,
  BookmarkCheck,
  GraduationCap,
  MapPin,
  Mail,
  Linkedin,
  Github,
  Globe,
  Eye,
  Users,
} from "lucide-react";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { SavedCandidate } from "../../../lib/types";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function SavedCandidatesPage() {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: queryKeys.savedCandidates.list(),
    queryFn: async () => {
      const res = await api.get("/recruiter/saved-candidates");
      return (res.data?.saved ?? []) as SavedCandidate[];
    },
  });

  const unsave = useMutation({
    mutationFn: async (studentId: number) => {
      await api.delete(`/recruiter/saved-candidates/${studentId}`);
    },
    onMutate: async (studentId) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.savedCandidates.list() });
      const prev = queryClient.getQueryData<SavedCandidate[]>(queryKeys.savedCandidates.list()) ?? [];
      queryClient.setQueryData(
        queryKeys.savedCandidates.list(),
        prev.filter((s) => s.studentId !== studentId),
      );
      return { prev };
    },
    onError: (_e, _v, ctx) => {
      if (ctx?.prev) queryClient.setQueryData(queryKeys.savedCandidates.list(), ctx.prev);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.savedCandidates.list() });
      queryClient.invalidateQueries({ queryKey: queryKeys.savedCandidates.ids() });
    },
  });

  const saved = data ?? [];

  return (
    <div className="max-w-7xl mx-auto">
      <SEO title="Saved Candidates" noIndex />

      <header className="mt-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1 w-1 bg-lime-400" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
            recruiter / saved
          </span>
        </div>

        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Saved{" "}
              <span className="relative inline-block">
                candidates.
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                  className="absolute -bottom-0.5 left-0 right-0 h-0.75 bg-lime-400 origin-left"
                />
              </span>
            </h1>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 max-w-xl">
              Everyone you bookmarked from talent search. One flat list, one click to remove.
            </p>
          </div>

          <Button asChild variant="secondary" size="sm">
            <Link to="/recruiters/talent-search" className="no-underline inline-flex items-center gap-2">
              <Users className="w-4 h-4" />
              Search talent
            </Link>
          </Button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
          <div className="bg-white dark:bg-stone-950 px-4 py-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
              total saved
            </div>
            <div className="mt-0.5 text-lg font-bold tabular-nums text-stone-900 dark:text-stone-50">
              {saved.length}
            </div>
          </div>
        </div>
      </header>

      {isLoading ? (
        <LoadingSkeleton />
      ) : saved.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {saved.map((entry, i) => (
            <SavedCard
              key={entry.id}
              entry={entry}
              index={i}
              onUnsave={() => unsave.mutate(entry.studentId)}
              pending={unsave.isPending}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function SavedCard({
  entry,
  index,
  onUnsave,
  pending,
}: {
  entry: SavedCandidate;
  index: number;
  onUnsave: () => void;
  pending: boolean;
}) {
  const { student } = entry;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.25 }}
      className="group relative bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 rounded-md p-5 flex flex-col hover:border-stone-400 dark:hover:border-white/30 transition-colors"
    >
      <div className="flex items-start gap-3 mb-4">
        {student.profilePic ? (
          <img
            src={student.profilePic}
            alt={student.name}
            className="w-11 h-11 rounded-md object-cover shrink-0 border border-stone-200 dark:border-white/10"
          />
        ) : (
          <div className="w-11 h-11 rounded-md bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
            <span className="text-sm font-bold text-stone-600 dark:text-stone-400">
              {getInitials(student.name)}
            </span>
          </div>
        )}

        <div className="min-w-0 flex-1">
          <Link to={`/recruiters/profile/${student.id}`} className="no-underline">
            <h3 className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate hover:text-stone-600 dark:hover:text-stone-300 transition-colors">
              {student.name}
            </h3>
          </Link>
          {student.college && (
            <p className="mt-0.5 flex items-center gap-1 text-xs text-stone-500 truncate">
              <GraduationCap className="w-3 h-3 shrink-0" />
              <span className="truncate">{student.college}</span>
              {student.graduationYear && (
                <span className="shrink-0 text-stone-400">
                  &middot; {student.graduationYear}
                </span>
              )}
            </p>
          )}
          {student.location && (
            <p className="mt-0.5 flex items-center gap-1 text-xs text-stone-500 truncate">
              <MapPin className="w-3 h-3 shrink-0" />
              {student.location}
            </p>
          )}
        </div>

        <button
          onClick={onUnsave}
          disabled={pending}
          title="Remove from saved"
          className="shrink-0 inline-flex items-center justify-center p-1.5 rounded-md text-stone-900 dark:text-stone-50 bg-lime-400 border border-lime-400 hover:bg-lime-300 transition-colors disabled:opacity-60"
        >
          <BookmarkCheck className="w-4 h-4" />
        </button>
      </div>

      {student.bio && (
        <p className="text-xs text-stone-600 dark:text-stone-400 mb-4 line-clamp-2 leading-relaxed">
          {student.bio}
        </p>
      )}

      {student.skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {student.skills.slice(0, 6).map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center gap-1 text-[11px] px-1.5 py-0.5 rounded-sm font-medium bg-stone-100 text-stone-700 dark:bg-stone-900 dark:text-stone-400"
            >
              {skill}
            </span>
          ))}
          {student.skills.length > 6 && (
            <span className="text-[11px] font-mono text-stone-400 px-1 py-0.5">
              +{student.skills.length - 6}
            </span>
          )}
        </div>
      )}

      <div className="flex-1" />

      <div className="flex items-center justify-between pt-4 border-t border-stone-100 dark:border-white/5">
        <div className="flex items-center gap-0.5">
          <a
            href={`mailto:${student.email}`}
            className="p-1.5 rounded-md text-stone-400 hover:text-stone-900 hover:bg-stone-100 dark:hover:text-stone-50 dark:hover:bg-stone-900 transition-colors"
            title={`Email ${student.name}`}
          >
            <Mail className="w-4 h-4" />
          </a>
          {student.linkedinUrl && (
            <a
              href={student.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-stone-400 hover:text-blue-600 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {student.githubUrl && (
            <a
              href={student.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-stone-400 hover:text-stone-900 hover:bg-stone-100 dark:hover:text-stone-50 dark:hover:bg-stone-900 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {student.portfolioUrl && (
            <a
              href={student.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-stone-400 hover:text-stone-900 hover:bg-stone-100 dark:hover:text-stone-50 dark:hover:bg-stone-900 transition-colors"
              title="Portfolio"
            >
              <Globe className="w-4 h-4" />
            </a>
          )}
        </div>

        <Link
          to={`/recruiters/profile/${student.id}`}
          className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1.5 rounded-md text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900 hover:text-stone-900 dark:hover:text-stone-50 transition-colors no-underline"
        >
          <Eye className="w-3.5 h-3.5" />
          View
        </Link>
      </div>
    </motion.div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 rounded-md p-5 animate-pulse"
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="w-11 h-11 rounded-md bg-stone-100 dark:bg-stone-900" />
            <div className="flex-1 space-y-2">
              <div className="h-3.5 bg-stone-100 dark:bg-stone-900 rounded w-3/4" />
              <div className="h-2.5 bg-stone-100 dark:bg-stone-900 rounded w-1/2" />
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <div className="h-2.5 bg-stone-100 dark:bg-stone-900 rounded w-full" />
            <div className="h-2.5 bg-stone-100 dark:bg-stone-900 rounded w-2/3" />
          </div>
        </div>
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-stone-200 dark:border-white/10 rounded-md bg-white dark:bg-stone-950">
      <div className="w-12 h-12 rounded-md bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 flex items-center justify-center mb-4">
        <Bookmark className="w-5 h-5 text-stone-400" />
      </div>
      <h3 className="text-base font-semibold text-stone-900 dark:text-stone-50 mb-1">
        No saved candidates yet
      </h3>
      <p className="text-sm text-stone-500 max-w-xs mb-4">
        Bookmark candidates from talent search and they'll show up here.
      </p>
      <Button asChild variant="primary" size="sm">
        <Link to="/recruiters/talent-search" className="no-underline inline-flex items-center gap-2">
          <Users className="w-4 h-4" />
          Search talent
        </Link>
      </Button>
    </div>
  );
}
