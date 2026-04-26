import { useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  MapPin,
  GraduationCap,
  Linkedin,
  Github,
  Globe,
  FileText,
  CheckCircle,
  Mail,
  Eye,
  Bookmark,
  BookmarkCheck,
  ShieldCheck,
} from "lucide-react";
import api, { SERVER_URL } from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";

export interface TalentResult {
  id: number;
  name: string;
  email: string;
  profilePic: string | null;
  bio: string | null;
  college: string | null;
  graduationYear: number | null;
  skills: string[];
  location: string | null;
  linkedinUrl: string | null;
  githubUrl: string | null;
  portfolioUrl: string | null;
  resumes: string[];
  jobStatus?: string | null;
  bestAtsScore: number | null;
  verifiedSkillCount: number;
  verifiedSkills: string[];
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function getAtsAccent(score: number): string {
  if (score >= 80) return "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30";
  if (score >= 60) return "text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30";
  return "text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-950/30";
}

function getJobStatusDot(status: string | null | undefined) {
  if (!status) return null;
  const map: Record<string, { label: string; dot: string }> = {
    LOOKING: { label: "Actively looking", dot: "bg-emerald-500" },
    OPEN_TO_OFFER: { label: "Open to offers", dot: "bg-blue-500" },
    NO_OFFER: { label: "Not looking", dot: "bg-stone-400" },
  };
  const info = map[status];
  if (!info) return null;
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-stone-600 dark:text-stone-400">
      <span className={`h-1.5 w-1.5 rounded-full ${info.dot}`} />
      {info.label}
    </span>
  );
}

function getResumeUrl(url: string): string {
  return url.startsWith("http") ? url : `${SERVER_URL}${url}`;
}

interface TalentCardProps {
  student: TalentResult;
  index?: number;
  saved?: boolean;
}

export default function TalentCard({ student, index = 0, saved = false }: TalentCardProps) {
  const hasResume = student.resumes.length > 0;
  const queryClient = useQueryClient();

  const toggleSave = useMutation({
    mutationFn: async () => {
      if (saved) {
        await api.delete(`/recruiter/saved-candidates/${student.id}`);
      } else {
        await api.post(`/recruiter/saved-candidates/${student.id}`, {});
      }
    },
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: queryKeys.savedCandidates.ids() });
      const prev = queryClient.getQueryData<number[]>(queryKeys.savedCandidates.ids()) ?? [];
      const next = saved ? prev.filter((id) => id !== student.id) : [...prev, student.id];
      queryClient.setQueryData(queryKeys.savedCandidates.ids(), next);
      return { prev };
    },
    onError: (_err, _vars, ctx) => {
      if (ctx?.prev) queryClient.setQueryData(queryKeys.savedCandidates.ids(), ctx.prev);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.savedCandidates.ids() });
      queryClient.invalidateQueries({ queryKey: queryKeys.savedCandidates.list() });
    },
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.03, duration: 0.25 }}
        className="group relative bg-white dark:bg-stone-950 border border-stone-200 dark:border-white/10 rounded-md p-5 flex flex-col hover:border-stone-400 dark:hover:border-white/30 transition-colors"
      >
        {/* Header: Avatar + Name + Save */}
        <div className="flex items-start gap-3 mb-4">
          {student.profilePic ? (
            <img
              src={student.profilePic}
              alt={student.name}
              className="w-11 h-11 rounded-md object-cover shrink-0 border border-stone-200 dark:border-white/10"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <div className="w-11 h-11 rounded-md bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-stone-600 dark:text-stone-400">
                {getInitials(student.name)}
              </span>
            </div>
          )}

          <div className="min-w-0 flex-1">
            <Link
              to={`/recruiters/profile/${student.id}`}
              className="no-underline"
            >
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
            onClick={() => toggleSave.mutate()}
            disabled={toggleSave.isPending}
            title={saved ? "Remove from saved" : "Save candidate"}
            className={`shrink-0 inline-flex items-center justify-center p-1.5 rounded-md border transition-colors disabled:opacity-60 ${
              saved
                ? "text-stone-900 dark:text-stone-50 bg-lime-400 border-lime-400 hover:bg-lime-300"
                : "text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 hover:bg-stone-100 dark:hover:bg-stone-900 border-transparent hover:border-stone-200 dark:hover:border-white/10"
            }`}
          >
            {saved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
          </button>
        </div>

        {/* Status + ATS row */}
        <div className="flex items-center gap-3 gap-y-2 mb-4 flex-wrap">
          {getJobStatusDot(student.jobStatus)}
          {student.bestAtsScore !== null && (
            <span
              className={`inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-1.5 py-0.5 rounded-sm tabular-nums ${getAtsAccent(student.bestAtsScore)}`}
            >
              ATS {student.bestAtsScore}
            </span>
          )}
          {student.verifiedSkillCount > 0 && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-400">
              <ShieldCheck className="w-3 h-3" />
              {student.verifiedSkillCount} verified
            </span>
          )}
        </div>

        {/* Bio */}
        {student.bio && (
          <p className="text-xs text-stone-600 dark:text-stone-400 mb-4 line-clamp-2 leading-relaxed">
            {student.bio}
          </p>
        )}

        {/* Skills */}
        {student.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {student.skills.slice(0, 6).map((skill) => {
              const isVerified = student.verifiedSkills.includes(skill);
              return (
                <span
                  key={skill}
                  className={`inline-flex items-center gap-1 text-[11px] px-1.5 py-0.5 rounded-sm font-medium ${
                    isVerified
                      ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400"
                      : "bg-stone-100 text-stone-700 dark:bg-stone-900 dark:text-stone-400"
                  }`}
                >
                  {isVerified && <CheckCircle className="w-3 h-3" />}
                  {skill}
                </span>
              );
            })}
            {student.skills.length > 6 && (
              <span className="text-[11px] font-mono text-stone-400 px-1 py-0.5">
                +{student.skills.length - 6}
              </span>
            )}
          </div>
        )}

        <div className="flex-1" />

        {/* Footer */}
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

          <div className="flex items-center gap-1.5">
            <Link
              to={`/recruiters/profile/${student.id}`}
              className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1.5 rounded-md text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900 hover:text-stone-900 dark:hover:text-stone-50 transition-colors no-underline"
            >
              <Eye className="w-3.5 h-3.5" />
              View
            </Link>
            <a
              href={hasResume ? getResumeUrl(student.resumes[0]!) : undefined}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-md transition-colors no-underline ${
                hasResume
                  ? "bg-stone-900 text-stone-50 hover:bg-stone-800 dark:bg-stone-50 dark:text-stone-900 dark:hover:bg-stone-200 cursor-pointer"
                  : "bg-stone-100 text-stone-400 dark:bg-stone-900 dark:text-stone-600 cursor-not-allowed pointer-events-none"
              }`}
              aria-disabled={!hasResume}
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
