import { Link, useParams } from "react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUp,
  Building2,
  Calendar,
  Eye,
  CheckCircle2,
  XCircle,
  Tag,
  Star,
  User as UserIcon,
  GraduationCap,
  Link2,
  BookOpen,
  IndianRupee,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { useAuthStore } from "../../../lib/auth.store";
import toast from "../../../components/ui/toast";
import { queryKeys } from "../../../lib/query-keys";
import type {
  InterviewDifficulty,
  InterviewExperience,
  InterviewOutcome,
} from "../../../lib/types";
import { getExperience, toggleUpvote } from "./interviews-api";

const OUTCOME_LABEL: Record<InterviewOutcome, string> = {
  SELECTED: "Selected",
  REJECTED: "Rejected",
  WITHDRAWN: "Withdrawn",
  PENDING: "Pending",
  GHOSTED: "Ghosted",
};

const OUTCOME_TONE: Record<InterviewOutcome, string> = {
  SELECTED: "text-lime-700 dark:text-lime-400",
  REJECTED: "text-red-600 dark:text-red-400",
  WITHDRAWN: "text-stone-500",
  PENDING: "text-amber-600 dark:text-amber-400",
  GHOSTED: "text-stone-500",
};

const DIFFICULTY_LABEL: Record<InterviewDifficulty, string> = {
  EASY: "Easy",
  MEDIUM: "Medium",
  HARD: "Hard",
};

const SOURCE_LABEL: Record<string, string> = {
  ON_CAMPUS: "On-campus",
  OFF_CAMPUS: "Off-campus",
  REFERRAL: "Referral",
  LINKEDIN: "LinkedIn",
  PORTAL: "Portal",
  OTHER: "Other",
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
      <span className="h-1.5 w-1.5 bg-lime-400" />
      {children}
    </div>
  );
}

export default function InterviewExperienceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const expId = Number(id);
  const qc = useQueryClient();
  const { isAuthenticated } = useAuthStore();

  const { data: experience, isLoading, error } = useQuery<InterviewExperience>({
    queryKey: queryKeys.interviews.detail(expId),
    queryFn: () => getExperience(expId),
    enabled: Number.isFinite(expId),
    staleTime: 10 * 60 * 1000,
  });

  const upvoteMutation = useMutation({
    mutationFn: () => toggleUpvote(expId),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: queryKeys.interviews.detail(expId) });
    },
    onError: () => toast.error("Couldn't upvote, try again"),
  });

  if (isLoading) {
    return (
      <div className="pb-16">
        <SEO title="Interview experience" noIndex />
        <div className="h-96 rounded-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 animate-pulse" />
      </div>
    );
  }

  if (error || !experience) {
    return (
      <div className="pb-16">
        <SEO title="Experience not found" noIndex />
        <div className="text-center py-20 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md">
          <p className="text-stone-500 text-sm mb-4">
            This experience could not be loaded, it may be pending moderation or removed.
          </p>
          <Link
            to="/student/interviews"
            className="inline-flex items-center gap-2 text-sm text-stone-900 dark:text-stone-50 hover:underline no-underline"
          >
            <ArrowLeft className="w-4 h-4" /> All experiences
          </Link>
        </div>
      </div>
    );
  }

  const authorName = experience.isAnonymous
    ? "Anonymous student"
    : experience.user?.name ?? "Unknown";
  const dateLabel =
    experience.interviewMonth && experience.interviewYear
      ? `${MONTHS[experience.interviewMonth - 1]} ${String(experience.interviewYear)}`
      : String(experience.interviewYear);
  const companyInitial = experience.company.name.charAt(0).toUpperCase();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody: experience.tips ?? "",
    reviewRating: {
      "@type": "Rating",
      ratingValue: experience.overallRating,
      bestRating: 5,
    },
    itemReviewed: {
      "@type": "Organization",
      name: experience.company.name,
    },
    datePublished: experience.createdAt,
    author: { "@type": "Person", name: authorName },
  };

  return (
    <div className="pb-16">
      <SEO
        title={`${experience.company.name} ${experience.role} interview experience`}
        noIndex
      />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6"
      >
        <div className="mb-4">
          <Link
            to="/student/interviews"
            className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 transition-colors no-underline"
          >
            <ArrowLeft className="w-4 h-4" /> All experiences
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6 md:p-8 mb-4">
          <div className="flex items-start gap-4 flex-wrap">
            <div className="w-14 h-14 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0 text-xl font-bold text-stone-700 dark:text-stone-300 overflow-hidden">
              {experience.company.logo ? (
                <img
                  src={experience.company.logo}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                companyInitial
              )}
            </div>
            <div className="flex-1 min-w-0">
              <Kicker>interview experience</Kicker>
              <h1 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight">
                {experience.company.name} · {experience.role}
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {dateLabel}
                </span>
                <span>{SOURCE_LABEL[experience.source] ?? experience.source}</span>
                <span>Difficulty: {DIFFICULTY_LABEL[experience.difficulty]}</span>
                <span className={`inline-flex items-center gap-1 ${OUTCOME_TONE[experience.outcome]}`}>
                  {experience.outcome === "SELECTED" ? (
                    <CheckCircle2 className="w-3 h-3" />
                  ) : experience.outcome === "REJECTED" ? (
                    <XCircle className="w-3 h-3" />
                  ) : null}
                  {OUTCOME_LABEL[experience.outcome]}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {experience.views} views
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  if (!isAuthenticated) {
                    toast.error("Log in to upvote");
                    return;
                  }
                  upvoteMutation.mutate();
                }}
                disabled={upvoteMutation.isPending}
                className={`inline-flex flex-col items-center gap-0.5 px-4 py-2 rounded-md border transition-colors cursor-pointer ${
                  experience.hasUpvoted
                    ? "bg-lime-400 border-lime-400 text-stone-900"
                    : "bg-transparent border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-300 hover:border-stone-400 dark:hover:border-white/30"
                }`}
                title="Upvote this experience"
              >
                <ArrowUp className="w-4 h-4" />
                <span className="text-xs font-bold tabular-nums">{experience.upvotes}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Main */}
          <div className="lg:col-span-2 space-y-4">
            {/* Rounds */}
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6 md:p-8">
              <h2 className="text-sm font-mono uppercase tracking-widest text-stone-500 mb-4">
                Rounds ({experience.totalRounds})
              </h2>
              <div className="space-y-5">
                {experience.rounds.map((r, i) => (
                  <div
                    key={i}
                    className="border-t first:border-t-0 border-stone-200 dark:border-white/10 pt-5 first:pt-0"
                  >
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                      <h3 className="text-base font-bold text-stone-900 dark:text-stone-50">
                        {r.name}
                      </h3>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                        {r.type}
                        {r.durationMins ? ` · ${String(r.durationMins)} mins` : ""}
                      </div>
                    </div>
                    {r.questions.length > 0 ? (
                      <ol className="space-y-3 list-decimal list-inside">
                        {r.questions.map((q, j) => (
                          <li
                            key={j}
                            className="text-sm text-stone-800 dark:text-stone-200 pl-2"
                          >
                            <span className="leading-relaxed">{q.prompt}</span>
                            {q.topic || q.difficulty ? (
                              <div className="mt-1 ml-1 flex flex-wrap gap-x-3 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                                {q.topic ? (
                                  <span className="inline-flex items-center gap-1">
                                    <Tag className="w-3 h-3" />
                                    {q.topic}
                                  </span>
                                ) : null}
                                {q.difficulty ? (
                                  <span>{q.difficulty.toLowerCase()}</span>
                                ) : null}
                              </div>
                            ) : null}
                          </li>
                        ))}
                      </ol>
                    ) : null}
                    {r.notes ? (
                      <p className="mt-3 text-sm text-stone-600 dark:text-stone-400 leading-relaxed whitespace-pre-wrap">
                        {r.notes}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            {experience.tips ? (
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6 md:p-8">
                <h2 className="text-sm font-mono uppercase tracking-widest text-stone-500 mb-3">
                  Tips for future candidates
                </h2>
                <p className="text-sm text-stone-800 dark:text-stone-200 leading-relaxed whitespace-pre-wrap">
                  {experience.tips}
                </p>
              </div>
            ) : null}

            {/* Prep resources */}
            {experience.prepResources.length > 0 ? (
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6 md:p-8">
                <h2 className="text-sm font-mono uppercase tracking-widest text-stone-500 mb-3">
                  Prep resources
                </h2>
                <ul className="space-y-2">
                  {experience.prepResources.map((p, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <BookOpen className="w-4 h-4 text-stone-500 shrink-0" />
                      {p.url ? (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-stone-900 dark:text-stone-50 hover:underline inline-flex items-center gap-1"
                        >
                          {p.title}
                          <Link2 className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-stone-900 dark:text-stone-50">{p.title}</span>
                      )}
                      <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 ml-auto">
                        {p.type}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6">
              <h2 className="text-sm font-mono uppercase tracking-widest text-stone-500 mb-4">
                Author
              </h2>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0 text-sm font-bold text-stone-700 dark:text-stone-300 overflow-hidden">
                  {!experience.isAnonymous && experience.user?.profilePic ? (
                    <img
                      src={experience.user.profilePic}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <UserIcon className="w-4 h-4 text-stone-400" />
                  )}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-stone-900 dark:text-stone-50 truncate">
                    {experience.isAnonymous ? "Anonymous student" : authorName}
                  </div>
                  {experience.user?.college ? (
                    <div className="text-xs text-stone-500 truncate inline-flex items-center gap-1">
                      <GraduationCap className="w-3 h-3" />
                      {experience.user.college}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6">
              <h2 className="text-sm font-mono uppercase tracking-widest text-stone-500 mb-4">
                Quick facts
              </h2>
              <dl className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-lime-600 dark:text-lime-400 mt-0.5" />
                  <div>
                    <dt className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                      Overall rating
                    </dt>
                    <dd className="text-stone-900 dark:text-stone-50">
                      {experience.overallRating} / 5
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-stone-500 mt-0.5" />
                  <div>
                    <dt className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                      Rounds
                    </dt>
                    <dd className="text-stone-900 dark:text-stone-50">{experience.totalRounds}</dd>
                  </div>
                </div>
                {experience.ctcLpa !== null ? (
                  <div className="flex items-start gap-3">
                    <IndianRupee className="w-4 h-4 text-stone-500 mt-0.5" />
                    <div>
                      <dt className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                        CTC / Stipend
                      </dt>
                      <dd className="text-stone-900 dark:text-stone-50">
                        {experience.ctcLpa} LPA
                      </dd>
                    </div>
                  </div>
                ) : null}
                {experience.experienceYears !== null ? (
                  <div className="flex items-start gap-3">
                    <UserIcon className="w-4 h-4 text-stone-500 mt-0.5" />
                    <div>
                      <dt className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                        Experience
                      </dt>
                      <dd className="text-stone-900 dark:text-stone-50">
                        {experience.experienceYears === 0
                          ? "Fresher"
                          : `${String(experience.experienceYears)} years`}
                      </dd>
                    </div>
                  </div>
                ) : null}
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-stone-500 mt-0.5" />
                  <div>
                    <dt className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                      When
                    </dt>
                    <dd className="text-stone-900 dark:text-stone-50">{dateLabel}</dd>
                  </div>
                </div>
              </dl>
            </div>

            <Link
              to={`/student/companies/${experience.company.slug}`}
              className="block bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6 hover:border-stone-400 dark:hover:border-white/30 transition-colors no-underline"
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-2">
                About the company
              </div>
              <div className="text-sm font-semibold text-stone-900 dark:text-stone-50">
                {experience.company.name}
              </div>
              <div className="text-xs text-stone-500 mt-0.5">
                {experience.company.city} · {experience.company.industry}
              </div>
            </Link>
          </div>
        </div>


      </motion.div>
    </div>
  );
}
