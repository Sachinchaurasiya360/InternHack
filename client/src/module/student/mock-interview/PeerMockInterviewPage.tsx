import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowLeft, BadgeCheck, CalendarClock, ExternalLink, Loader2, Lock, ShieldCheck, Star, Users, Check } from "lucide-react";
import { SEO } from "../../../components/SEO";
import api from "../../../lib/axios";
import type { AxiosError } from "axios";
import { Button } from "../../../components/ui/button";
import { Textarea } from "../../../components/ui/textarea";
import { useAuthStore } from "../../../lib/auth.store";
import { queryKeys } from "../../../lib/query-keys";
import type {
  PeerMockInterview,
  MockInterviewPreparationMaterial,
  PeerMatchListResponse,
  PeerMatchCandidate,
  PeerLockedMatch,
  PeerMatchStrength,
} from "../../../lib/types";

const FOCUS_AREA_OPTIONS = ["DSA", "System Design", "Frontend", "Backend", "Behavioral", "Resume Review"];

const TOPIC_OPTIONS = [
  { value: "DSA", label: "DSA" },
  { value: "SYSTEM_DESIGN", label: "System Design" },
  { value: "FRONTEND", label: "Frontend" },
  { value: "BACKEND", label: "Backend" },
  { value: "BEHAVIORAL", label: "Behavioral" },
  { value: "DEVOPS", label: "DevOps" },
  { value: "DATA_SCIENCE", label: "Data Science" },
  { value: "OTHER", label: "Other" },
] as const;
type PeerTopic = (typeof TOPIC_OPTIONS)[number]["value"];

const formatTopic = (t?: string, customTopic?: string | null) =>
  t === "OTHER" && customTopic ? customTopic : (t || "").replace(/_/g, " ");
const EXPERIENCE_LEVELS = [
  { value: "STUDENT", label: "Student" },
  { value: "FRESHER", label: "Fresher" },
  { value: "0_2_YEARS", label: "0-2 yrs" },
  { value: "2_PLUS_YEARS", label: "2+ yrs" },
] as const;

const AVAILABILITY_LABELS: Record<string, string> = {
  WEEKDAYS_MORNING: "Weekday mornings",
  WEEKDAYS_AFTERNOON: "Weekday afternoons",
  WEEKDAYS_EVENING: "Weekday evenings",
  WEEKENDS: "Weekends",
};

const STRENGTH_LABELS: Record<PeerMatchStrength, string> = {
  STRONG: "Strong match",
  GOOD: "Good match",
  FAIR: "Fair match",
};

/**
 * A meeting link is supplied by the matched peer, so treat it as untrusted:
 * only render it as a clickable link when it is an http(s) URL. Guards against a
 * javascript:/data: href slipping past the API validation (defense in depth).
 */
function isSafeHttpUrl(url: string): boolean {
  try {
    const protocol = new URL(url).protocol;
    return protocol === "http:" || protocol === "https:";
  } catch {
    return false;
  }
}

function PreparationCard({ material }: { material?: MockInterviewPreparationMaterial | null }) {
  if (!material) {
    return (
      <div className="bg-stone-50 dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-md p-4">
        <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block">Assigned practice problem</span>
        <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
          No code problem auto-assigned for this topic. Use the availability details to coordinate custom questions.
        </p>
      </div>
    );
  }

  if (material.type === "DSA" && material.dsaProblem) {
    return (
      <div className="bg-stone-50 dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-md p-4 space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block">Assigned practice problem</span>
        <h4 className="font-bold text-stone-900 dark:text-stone-50">{material.dsaProblem.title}</h4>
        <p className="text-xs text-stone-500 dark:text-stone-400">
          Difficulty: <span className="font-semibold text-stone-700 dark:text-stone-300">{material.dsaProblem.difficulty}</span>
        </p>
        <div className="pt-2">
          <Button variant="primary" size="sm" asChild>
            <a
              href={`/learn/dsa/problem/${material.dsaProblem.slug}`}
              className="inline-flex items-center gap-1.5"
            >
              View Problem Details
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Button>
        </div>
      </div>
    );
  }

  if (material.generic && material.redacted) {
    return (
      <div className="bg-stone-50 dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-md p-4 space-y-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-stone-400">
          <ShieldCheck className="w-3.5 h-3.5 text-lime-500" />
          You're the candidate this round
        </span>
        <h4 className="font-bold text-stone-900 dark:text-stone-50">{material.generic.prompt}</h4>
        <p className="text-xs text-stone-500 dark:text-stone-400">{material.note}</p>
      </div>
    );
  }

  if (material.generic) {
    return (
      <div className="bg-stone-50 dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-md p-4 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block">Preparation Material</span>
        <h4 className="font-bold text-stone-900 dark:text-stone-50">{material.generic.prompt}</h4>

        {material.generic.requirements && material.generic.requirements.length > 0 && (
          <div>
            <h5 className="text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Sample Questions:</h5>
            <ul className="list-disc pl-4 text-xs text-stone-500 dark:text-stone-400 space-y-0.5">
              {material.generic.requirements.map((req, i) => <li key={i}>{req}</li>)}
            </ul>
          </div>
        )}

        {material.generic.objectives && material.generic.objectives.length > 0 && (
          <div>
            <h5 className="text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Objectives / Tradeoffs:</h5>
            <ul className="list-disc pl-4 text-xs text-stone-500 dark:text-stone-400 space-y-0.5">
              {material.generic.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
            </ul>
          </div>
        )}

        {material.generic.followUpQuestions && material.generic.followUpQuestions.length > 0 && (
          <div>
            <h5 className="text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Follow-up Questions:</h5>
            <ul className="list-disc pl-4 text-xs text-stone-500 dark:text-stone-400 space-y-0.5">
              {material.generic.followUpQuestions.map((q, i) => <li key={i}>{q}</li>)}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return null;
}

function ExpertFallbackCard({ topic, customTopic }: { topic?: string; customTopic?: string | null }) {
  const navigate = useNavigate();
  const { data: slotData } = useQuery<{ slots: string[] }>({
    queryKey: queryKeys.expertSession.availableSlots(),
    queryFn: async () => {
      const res = await api.get("/student/expert-session/available-slots");
      return res.data;
    },
  });
  const nextSlot = slotData?.slots?.[0];

  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6 text-center space-y-4">
      <div className="w-12 h-12 bg-stone-100 dark:bg-white/5 text-stone-400 flex items-center justify-center rounded mx-auto">
        <Users className="w-6 h-6" />
      </div>
      <div>
        <h2 className="text-lg font-bold text-stone-900 dark:text-stone-50">No peers available right now</h2>
        <p className="text-sm text-stone-500 mt-1 max-w-sm mx-auto">
          No compatible students are in the {formatTopic(topic, customTopic)} pool at the moment. You stay in
          the pool, so students opting in later will see you as a match.
        </p>
      </div>
      <div className="bg-stone-50 dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-md p-4 max-w-md mx-auto space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block">
          Practice with an expert instead
        </span>
        <p className="text-xs text-stone-600 dark:text-stone-400">
          Book a 30-minute one-on-one mock interview with our expert for ₹49.
          {nextSlot && (
            <>
              {" "}Next available slot:{" "}
              <span className="font-semibold text-stone-900 dark:text-stone-50">
                {new Date(nextSlot).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })}
              </span>
            </>
          )}
        </p>
        <Button
          variant="primary"
          size="sm"
          onClick={() => navigate("/student/mock-interview/expert")}
          className="bg-lime-400 text-stone-950 hover:bg-lime-300"
        >
          Book Expert Session
        </Button>
      </div>
    </div>
  );
}

function MatchCard({
  match,
  onSelect,
  selecting,
  index,
}: {
  match: PeerMatchCandidate;
  onSelect: (candidateUserId: number) => void;
  selecting: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.07 }}
      className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3 min-w-0">
          {match.profilePic ? (
            <img
              src={match.profilePic}
              alt={match.name}
              className="w-11 h-11 rounded object-cover border border-stone-200 dark:border-white/10 shrink-0"
            />
          ) : (
            <div className="w-11 h-11 bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 flex items-center justify-center text-lg font-bold text-stone-700 dark:text-stone-300 rounded shrink-0">
              {match.name.charAt(0).toUpperCase()}
            </div>
          )}
          <div className="min-w-0">
            <h3 className="font-bold text-stone-900 dark:text-stone-50 truncate">{match.name}</h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 truncate">{match.college || "No college specified"}</p>
            {match.customTopic && (
              <p className="text-xs text-stone-600 dark:text-stone-300 mt-1 truncate">
                Wants to practice: <span className="font-semibold">{match.customTopic}</span>
              </p>
            )}
            {match.verifiedSkills.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {match.verifiedSkills.map((skill) => (
                  <span
                    key={skill.skillName}
                    className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-lime-400/10 text-lime-600 dark:text-lime-400 text-[10px] font-mono uppercase tracking-wider"
                  >
                    <BadgeCheck className="w-3 h-3" />
                    {skill.skillName} {skill.score}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="text-right shrink-0">
          <span className="text-2xl font-bold text-stone-900 dark:text-stone-50">{match.matchPercent}%</span>
          <p className={`text-[10px] font-mono uppercase tracking-widest ${match.matchStrength === "STRONG" ? "text-lime-600 dark:text-lime-400" : "text-stone-400"}`}>
            {STRENGTH_LABELS[match.matchStrength]}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-4 border-t border-stone-100 dark:border-white/5">
        <p className="text-xs text-stone-500 dark:text-stone-400">
          {match.sharedAvailability.length > 0
            ? `Shared availability: ${match.sharedAvailability.map((s) => AVAILABILITY_LABELS[s] || s).join(", ")}`
            : "No overlapping availability, coordinate a time after pairing"}
        </p>
        <Button
          variant="primary"
          size="sm"
          disabled={selecting}
          onClick={() => onSelect(match.userId)}
          className="bg-lime-400 text-stone-950 hover:bg-lime-300"
        >
          Pair Now
        </Button>
      </div>
    </motion.div>
  );
}

function LockedMatchCard({ match, index }: { match: PeerLockedMatch; index: number }) {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.07 }}
      className="relative bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5 overflow-hidden"
    >
      {/* Placeholder content; the server sends no identifying data for locked matches */}
      <div className="blur-[6px] select-none pointer-events-none" aria-hidden="true">
        <div className="flex items-start gap-3">
          <div className="w-11 h-11 bg-stone-200 dark:bg-white/10 flex items-center justify-center text-lg font-bold text-stone-500 rounded shrink-0">
            {match.nameInitial}
          </div>
          <div className="space-y-2 flex-1">
            <div className="h-3.5 w-36 bg-stone-200 dark:bg-white/10 rounded" />
            <div className="h-3 w-52 bg-stone-100 dark:bg-white/5 rounded" />
            <div className="h-3 w-40 bg-stone-100 dark:bg-white/5 rounded" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-white/40 dark:bg-stone-950/40">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15 + index * 0.07 }}
          className="flex items-center gap-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md px-4 py-2.5 shadow-sm"
        >
          <Lock className="w-4 h-4 text-stone-400 shrink-0" />
          <div className="text-left">
            <p className="text-xs font-bold text-stone-900 dark:text-stone-50">
              {STRENGTH_LABELS[match.matchStrength]} hidden
            </p>
            <p className="text-[10px] text-stone-500">Premium unlocks every match</p>
          </div>
          <Button
            variant="primary"
            size="sm"
            onClick={() => navigate("/student/checkout")}
            className="bg-lime-400 text-stone-950 hover:bg-lime-300"
          >
            Unlock
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}

function MatchListSection({
  matchData,
  loading,
  onSelect,
  selecting,
  onLeavePool,
  leaving,
}: {
  matchData?: PeerMatchListResponse;
  loading: boolean;
  onSelect: (candidateUserId: number) => void;
  selecting: boolean;
  onLeavePool: () => void;
  leaving: boolean;
}) {
  if (loading || !matchData) {
    return (
      <div className="flex justify-center p-8 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md">
        <Loader2 className="w-6 h-6 animate-spin text-stone-400" />
      </div>
    );
  }

  const hasAny = matchData.matches.length > 0 || matchData.lockedMatches.length > 0;

  return (
    <div className="space-y-4">
      {hasAny ? (
        <>
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
              Live matches / {formatTopic(matchData.topic, matchData.customTopic)}
            </span>
            <span className="text-xs text-stone-500">
              {matchData.totalCandidates} student{matchData.totalCandidates === 1 ? "" : "s"} in the pool
            </span>
          </div>
          {matchData.matches.map((match, i) => (
            <MatchCard key={match.userId} match={match} onSelect={onSelect} selecting={selecting} index={i} />
          ))}
          {matchData.lockedMatches.map((match, i) => (
            <LockedMatchCard key={`locked-${i}`} match={match} index={matchData.matches.length + i} />
          ))}
        </>
      ) : (
        <ExpertFallbackCard topic={matchData.topic} customTopic={matchData.customTopic} />
      )}
      <div className="text-center">
        <Button
          variant="ghost"
          mode="link"
          onClick={onLeavePool}
          disabled={leaving}
          className="text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 underline"
        >
          Leave matching pool
        </Button>
      </div>
    </div>
  );
}

function HistorySection({ userId }: { userId: number }) {
  const { data: pairings, isLoading } = useQuery<PeerMockInterview[]>({
    queryKey: queryKeys.peerMockInterview.history(userId),
    queryFn: async () => {
      const res = await api.get("/student/peer-mock-interview/pairings/history");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center p-8 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md">
        <Loader2 className="w-6 h-6 animate-spin text-stone-400" />
      </div>
    );
  }

  if (!pairings || pairings.length === 0) {
    return (
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-8 text-center">
        <p className="text-sm text-stone-500">No mock interview history found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {pairings.map((pairing) => {
        const isA = pairing.studentAId === userId;
        const partner = isA ? pairing.studentB : pairing.studentA;
        const myRating = isA ? pairing.ratingBForA : pairing.ratingAForB;
        const myFeedback = isA ? pairing.feedbackBForA : pairing.feedbackAForB;

        return (
          <div key={pairing.id} className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-stone-400">{new Date(pairing.completedAt || pairing.createdAt).toLocaleDateString()}</span>
                <h3 className="font-bold text-stone-900 dark:text-stone-50 mt-1">{formatTopic(pairing.topic, pairing.customTopic)} Mock Interview</h3>
                {partner && (
                  <p className="text-xs text-stone-500 mt-1">
                    Partner: <span className="font-medium text-stone-700 dark:text-stone-300">{partner.name}</span>
                  </p>
                )}
              </div>
              <span className={`text-xs font-mono uppercase tracking-widest px-2 py-0.5 rounded ${pairing.status === "COMPLETED" ? "bg-lime-400/10 text-lime-600 dark:text-lime-400" : "bg-red-400/10 text-red-600 dark:text-red-400"}`}>
                {pairing.status}
              </span>
            </div>

            {pairing.status === "COMPLETED" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-stone-100 dark:border-white/5 pt-4">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-2">Partner's Feedback for You</h4>
                  {myRating ? (
                    <div className="space-y-1">
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className={`w-3.5 h-3.5 ${star <= myRating ? "text-lime-400 fill-lime-400" : "text-stone-200 dark:text-stone-700"}`} />
                        ))}
                      </div>
                      <p className="text-xs text-stone-600 dark:text-stone-300 italic">"{myFeedback}"</p>
                    </div>
                  ) : (
                    <p className="text-xs text-stone-500">No feedback submitted yet.</p>
                  )}
                </div>
              </div>
            )}

            {(pairing.assignedProblem || pairing.preparationMaterial) && (
              <div className="mt-4 pt-4 border-t border-stone-100 dark:border-white/5">
                <PreparationCard material={pairing.preparationMaterial} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function PeerMockInterviewPage() {
  const navigate = useNavigate();
  const onBack = () => navigate("/student/mock-interview");
  const queryClient = useQueryClient();

  const { data: preference, isLoading: loadingPref } = useQuery({
    queryKey: queryKeys.peerMockInterview.preferences(),
    queryFn: async () => {
      const res = await api.get("/student/peer-mock-interview/preferences");
      return res.data;
    },
  });

  const { data: pairing, isLoading: loadingPairing } = useQuery<PeerMockInterview>({
    queryKey: queryKeys.peerMockInterview.upcoming(),
    queryFn: async () => {
      const res = await api.get("/student/peer-mock-interview/pairings/upcoming");
      return res.data;
    },
  });

  const upsertPreferenceMutation = useMutation({
    mutationFn: async (payload: {
      topic: string;
      availability: string[];
      enabled: boolean;
      targetRole?: string;
      experienceLevel?: string;
      focusAreas: string[];
    }) => {
      const res = await api.post("/student/peer-mock-interview/preferences", payload);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["peer-mock-interview"] });
      toast.success("Preferences updated successfully!");
    },
    onError: (err: AxiosError<{ message?: string }>) => {
      toast.error(err.response?.data?.message || "Failed to update preferences.");
    },
  });

  const completeMutation = useMutation({
    mutationFn: async (pairingId: number) => {
      const res = await api.post(`/student/peer-mock-interview/pairings/${pairingId}/complete`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["peer-mock-interview"] });
      toast.success("Mock interview marked completed!");
    },
    onError: (err: AxiosError<{ message?: string }>) => {
      toast.error(err.response?.data?.message || "Failed to mark complete.");
    },
  });

  const rateMutation = useMutation({
    mutationFn: async ({ pairingId, rating, feedback }: { pairingId: number; rating: number; feedback?: string }) => {
      const res = await api.post(`/student/peer-mock-interview/pairings/${pairingId}/rate`, { rating, feedback });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["peer-mock-interview"] });
      toast.success("Rating submitted successfully!");
      setShowRatingModal(false);
    },
    onError: (err: AxiosError<{ message?: string }>) => {
      toast.error(err.response?.data?.message || "Failed to submit rating.");
    },
  });

  const proposeTimeMutation = useMutation({
    mutationFn: async ({ pairingId, proposedTime }: { pairingId: number; proposedTime: string }) => {
      const res = await api.post(`/student/peer-mock-interview/pairings/${pairingId}/propose-time`, { proposedTime });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["peer-mock-interview"] });
      toast.success("Time proposed successfully!");
    },
    onError: (err: AxiosError<{ message?: string }>) => {
      toast.error(err.response?.data?.message || "Failed to propose time.");
    },
  });

  const acceptTimeMutation = useMutation({
    mutationFn: async ({ pairingId, meetingLink }: { pairingId: number; meetingLink?: string }) => {
      const res = await api.post(
        `/student/peer-mock-interview/pairings/${pairingId}/accept-time`,
        meetingLink ? { meetingLink } : {},
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["peer-mock-interview"] });
      toast.success("Time accepted successfully!");
    },
    onError: (err: AxiosError<{ message?: string }>) => {
      toast.error(err.response?.data?.message || "Failed to accept time.");
    },
  });

  const rejectTimeMutation = useMutation({
    mutationFn: async (pairingId: number) => {
      const res = await api.post(`/student/peer-mock-interview/pairings/${pairingId}/reject-time`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["peer-mock-interview"] });
      toast.success("Time rejected.");
    },
    onError: (err: AxiosError<{ message?: string }>) => {
      toast.error(err.response?.data?.message || "Failed to reject time.");
    },
  });

  const selectMatchMutation = useMutation({
    mutationFn: async (candidateUserId: number) => {
      const res = await api.post("/student/peer-mock-interview/matches/select", { candidateUserId });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["peer-mock-interview"] });
      toast.success("Matched! Propose a time to meet.");
    },
    onError: (err: AxiosError<{ message?: string }>) => {
      toast.error(err.response?.data?.message || "Failed to pair with this student.");
    },
  });

  const declineMutation = useMutation({
    mutationFn: async (pairingId: number) => {
      const res = await api.post(`/student/peer-mock-interview/pairings/${pairingId}/decline`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["peer-mock-interview"] });
      toast.success("Pairing declined. You are back in the matching pool.");
    },
    onError: (err: AxiosError<{ message?: string }>) => {
      toast.error(err.response?.data?.message || "Failed to decline pairing.");
    },
  });

  const [topic, setTopic] = useState<PeerTopic>("DSA");
  const [customTopic, setCustomTopic] = useState("");
  const [availability, setAvailability] = useState<string[]>([]);
  const [enabled, setEnabled] = useState(false);

  const { data: matchData, isLoading: loadingMatches } = useQuery<PeerMatchListResponse>({
    queryKey: queryKeys.peerMockInterview.matches(),
    queryFn: async () => {
      const res = await api.get("/student/peer-mock-interview/matches");
      return res.data;
    },
    enabled: enabled && !loadingPairing && !pairing,
  });
  const [targetRole, setTargetRole] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [focusAreas, setFocusAreas] = useState<string[]>([]);

  const [showRatingModal, setShowRatingModal] = useState(false);
  const [rating, setRating] = useState(5);
  const [feedbackText, setFeedbackText] = useState("");

  const [proposedDateStr, setProposedDateStr] = useState("");
  const [proposedTimeStr, setProposedTimeStr] = useState("");
  const [manualMeetingLink, setManualMeetingLink] = useState("");

  const [activeTab, setActiveTab] = useState<"upcoming" | "history">("upcoming");

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showRatingModal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowRatingModal(false);
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    const previousActiveElement = document.activeElement as HTMLElement;

    setTimeout(() => {
      if (modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusableElements.length > 0) {
          (focusableElements[0] as HTMLElement).focus();
        } else {
          modalRef.current.focus();
        }
      }
    }, 50);

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (previousActiveElement) {
        previousActiveElement.focus();
      }
    };
  }, [showRatingModal]);

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (preference) {
      setTopic(preference.topic || "DSA");
      setCustomTopic(preference.customTopic || "");
      setAvailability(preference.availability || []);
      setEnabled(preference.enabled ?? true);
      setTargetRole(preference.targetRole || "");
      setExperienceLevel(preference.experienceLevel || "");
      setFocusAreas(preference.focusAreas || []);
    } else {
      setEnabled(false);
    }
  }, [preference]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const buildPayload = (overrides: Partial<{ enabled: boolean }> = {}) => ({
    topic,
    customTopic: topic === "OTHER" ? customTopic.trim() || undefined : undefined,
    availability,
    enabled,
    targetRole: targetRole.trim() || undefined,
    experienceLevel: experienceLevel || undefined,
    focusAreas,
    ...overrides,
  });

  const requireCustomTopic = () => {
    if (topic === "OTHER" && !customTopic.trim()) {
      toast.error("Enter your interview topic first.");
      return false;
    }
    return true;
  };

  const handleSavePreferences = () => {
    if (!requireCustomTopic()) return;
    upsertPreferenceMutation.mutate(buildPayload());
  };

  const handleToggleOptIn = () => {
    if (!enabled && !requireCustomTopic()) return;
    const nextEnabled = !enabled;
    setEnabled(nextEnabled);
    upsertPreferenceMutation.mutate(buildPayload({ enabled: nextEnabled }));
  };

  const handleCheckboxChange = (slot: string) => {
    setAvailability((prev) =>
      prev.includes(slot) ? prev.filter((s) => s !== slot) : [...prev, slot],
    );
  };

  const toggleFocusArea = (area: string) => {
    setFocusAreas((prev) => (prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]));
  };

  const isLoading = loadingPref || loadingPairing;

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-stone-50 dark:bg-stone-950">
        <Loader2 className="w-8 h-8 animate-spin text-lime-400" />
      </div>
    );
  }

  const currentUserId = useAuthStore.getState().user?.id;
  const todayStr = new Date().toISOString().slice(0, 10);
  const isA = pairing && pairing.studentAId === currentUserId;
  const partner = pairing ? (isA ? pairing.studentB : pairing.studentA) : null;
  const alreadyRated = pairing ? (isA ? pairing.ratingAForB !== null : pairing.ratingBForA !== null) : false;

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-stone-50 dark:bg-stone-950">
      <SEO title="Peer Mock Interview" noIndex />
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          {/* Header */}
          <div className="mb-8 flex items-start justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-7">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
                <span className="h-1.5 w-1.5 bg-lime-400" />
                practice / peer mock interview
              </div>
              <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                Peer mock interview matching.
              </h1>
              <p className="mt-2 text-sm text-stone-500 max-w-xl">
                Get matched instantly with students for live mock interviews. Practice, rate, and level up together.
              </p>
            </div>
            <Button
              variant="ghost"
              mode="icon"
              size="sm"
              onClick={onBack}
              className="bg-stone-100 hover:bg-stone-200 dark:bg-white/5 dark:hover:bg-white/10 rounded-md shrink-0"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6">
            {/* Left Column: Dashboard Status / Match */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-stone-200 dark:border-white/10 mb-4">
                <Button
                  variant="ghost"
                  onClick={() => setActiveTab("upcoming")}
                  className={`pb-2 rounded-none rounded-t border-b-2 transition-colors ${
                    activeTab === "upcoming"
                      ? "border-lime-400 text-stone-900 dark:text-stone-50"
                      : "border-transparent text-stone-500 hover:text-stone-700 dark:hover:text-stone-300"
                  }`}
                >
                  Upcoming Match
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setActiveTab("history")}
                  className={`pb-2 rounded-none rounded-t border-b-2 transition-colors ${
                    activeTab === "history"
                      ? "border-lime-400 text-stone-900 dark:text-stone-50"
                      : "border-transparent text-stone-500 hover:text-stone-700 dark:hover:text-stone-300"
                  }`}
                >
                  History
                </Button>
              </div>

              {activeTab === "history" && currentUserId ? (
                <HistorySection userId={currentUserId} />
              ) : enabled && pairing ? (
                <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden p-6 space-y-6">
                  <div className="flex items-center justify-between border-b border-stone-100 dark:border-white/5 pb-4">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-stone-400">Match Found</span>
                      <h2 className="text-xl font-bold text-stone-900 dark:text-stone-50 mt-1">Upcoming Practice Session</h2>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-lime-400/10 text-lime-500 text-xs font-mono uppercase tracking-wider">
                      {formatTopic(pairing.topic, pairing.customTopic)}
                    </span>
                  </div>

                  {partner && (
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 flex items-center justify-center text-lg font-bold text-stone-700 dark:text-stone-300 rounded shrink-0">
                        {partner.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-stone-900 dark:text-stone-50">{partner.name}</h3>
                        <p className="text-xs text-stone-500 dark:text-stone-400">{partner.college || "No College Specified"}</p>
                        <div className="flex flex-wrap gap-2 pt-1.5">
                          {partner.linkedinUrl && (
                            <a
                              href={partner.linkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
                            >
                              LinkedIn <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                          <a
                            href={`mailto:${partner.email}`}
                            className="inline-flex items-center gap-1 text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
                          >
                            Email <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  <PreparationCard material={pairing.preparationMaterial} />

                  <div className="flex flex-col gap-3 pt-4 border-t border-stone-100 dark:border-white/5">
                    {pairing.status === "PENDING_SCHEDULE" && !pairing.proposedTime && (
                      <div className="space-y-3 bg-stone-50 dark:bg-white/5 p-4 rounded-md border border-stone-200 dark:border-white/10">
                        <div className="flex items-center gap-2">
                          <CalendarClock className="w-4 h-4 text-lime-500 shrink-0" />
                          <p className="text-xs font-semibold text-stone-900 dark:text-stone-50">Propose a meeting time</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2.5">
                          <div className="space-y-1">
                            <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-400">
                              Date
                            </label>
                            <input
                              type="date"
                              value={proposedDateStr}
                              min={todayStr}
                              onChange={(e) => setProposedDateStr(e.target.value)}
                              className="w-full text-sm rounded-md border border-stone-300 dark:border-white/15 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-400">
                              Time
                            </label>
                            <input
                              type="time"
                              value={proposedTimeStr}
                              onChange={(e) => setProposedTimeStr(e.target.value)}
                              className="w-full text-sm rounded-md border border-stone-300 dark:border-white/15 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400"
                            />
                          </div>
                        </div>
                        <Button
                          variant="primary"
                          size="sm"
                          disabled={!proposedDateStr || !proposedTimeStr || proposeTimeMutation.isPending}
                          onClick={() =>
                            proposeTimeMutation.mutate({
                              pairingId: pairing.id,
                              proposedTime: new Date(`${proposedDateStr}T${proposedTimeStr}`).toISOString(),
                            })
                          }
                          className="w-full bg-lime-400 text-stone-950 hover:bg-lime-300"
                        >
                          Propose Time
                        </Button>
                      </div>
                    )}

                    {pairing.status === "PENDING_SCHEDULE" && pairing.proposedTime && pairing.proposedById === currentUserId && (
                      <div className="bg-stone-50 dark:bg-white/5 p-3 rounded border border-stone-200 dark:border-white/10 flex items-center justify-between">
                        <div>
                          <p className="text-xs font-semibold text-stone-900 dark:text-stone-50">Time Proposed</p>
                          <p className="text-xs text-stone-500">Waiting for {partner?.name} to accept {new Date(pairing.proposedTime).toLocaleString()}</p>
                        </div>
                      </div>
                    )}

                    {pairing.status === "PENDING_SCHEDULE" && pairing.proposedTime && pairing.proposedById !== currentUserId && (
                      <div className="space-y-3 bg-stone-50 dark:bg-white/5 p-3 rounded border border-stone-200 dark:border-white/10">
                        <div>
                          <p className="text-xs font-semibold text-stone-900 dark:text-stone-50">Partner Proposed Time</p>
                          <p className="text-xs text-stone-500">{partner?.name} proposed {new Date(pairing.proposedTime).toLocaleString()}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs text-stone-400 dark:text-stone-500">
                            Accepting tries to auto-generate a Google Meet link. If that is not set up, paste your own
                            below (Meet, Zoom, anything) so it still goes out in the confirmation email.
                          </p>
                          <div className="space-y-1">
                            <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-400">
                              Meeting link (optional)
                            </label>
                            <input
                              type="url"
                              value={manualMeetingLink}
                              onChange={(e) => setManualMeetingLink(e.target.value)}
                              placeholder="https://meet.google.com/..."
                              className="w-full text-sm rounded-md border border-stone-300 dark:border-white/15 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400"
                            />
                          </div>
                          <div className="flex gap-2 pt-1">
                            <Button
                              variant="primary"
                              size="sm"
                              disabled={acceptTimeMutation.isPending || rejectTimeMutation.isPending}
                              onClick={() =>
                                acceptTimeMutation.mutate({
                                  pairingId: pairing.id,
                                  meetingLink: manualMeetingLink.trim() || undefined,
                                })
                              }
                              className="bg-lime-400 text-stone-950 hover:bg-lime-300"
                            >
                              Accept Time
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              disabled={acceptTimeMutation.isPending || rejectTimeMutation.isPending}
                              onClick={() => rejectTimeMutation.mutate(pairing.id)}
                              className="text-red-500 hover:text-red-600"
                            >
                              Reject & Propose New
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}

                    {pairing.status === "SCHEDULED" && (
                      <div className="bg-lime-50 dark:bg-lime-400/10 border border-lime-200 dark:border-lime-400/20 p-3 rounded">
                        <p className="text-xs font-semibold text-lime-900 dark:text-lime-500">Scheduled for {pairing.scheduledAt && new Date(pairing.scheduledAt).toLocaleString()}</p>
                        {pairing.meetingLink && isSafeHttpUrl(pairing.meetingLink) && (
                          <a href={pairing.meetingLink} target="_blank" rel="noreferrer" className="text-xs text-lime-600 dark:text-lime-400 underline mt-1 block">
                            Join Meeting Link
                          </a>
                        )}
                      </div>
                    )}

                    <div className="flex items-center gap-3 pt-2">
                      {pairing.status === "SCHEDULED" ? (
                        <Button
                          variant="primary"
                          onClick={() => completeMutation.mutate(pairing.id)}
                          disabled={completeMutation.isPending}
                          className="bg-lime-400 text-stone-950 hover:bg-lime-300"
                        >
                          Mark Session Completed
                        </Button>
                      ) : pairing.status === "COMPLETED" ? (
                        <span className="text-xs text-stone-400 italic">Session marked as completed.</span>
                      ) : null}

                      {pairing.status === "PENDING_SCHEDULE" && (
                        <Button
                          variant="ghost"
                          mode="link"
                          onClick={() => declineMutation.mutate(pairing.id)}
                          disabled={declineMutation.isPending}
                          className="text-xs font-bold text-red-500 hover:underline"
                        >
                          Decline Pairing
                        </Button>
                      )}

                      {(pairing.status === "SCHEDULED" || pairing.status === "PENDING_SCHEDULE") && (
                        <Button
                          variant="ghost"
                          mode="link"
                          onClick={() => {
                            upsertPreferenceMutation.mutate(buildPayload({ enabled: false }));
                          }}
                          className="text-xs font-bold text-red-500 hover:underline"
                        >
                          Opt Out of Future Matches
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ) : enabled && !pairing ? (
                <MatchListSection
                  matchData={matchData}
                  loading={loadingMatches}
                  onSelect={(candidateUserId) => selectMatchMutation.mutate(candidateUserId)}
                  selecting={selectMatchMutation.isPending}
                  onLeavePool={handleToggleOptIn}
                  leaving={upsertPreferenceMutation.isPending}
                />
              ) : (
                <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-stone-100 dark:bg-white/5 text-stone-400 flex items-center justify-center rounded mx-auto">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-stone-900 dark:text-stone-50">Peer Mock Interviews are disabled</h2>
                    <p className="text-sm text-stone-500 mt-1 max-w-sm mx-auto">
                      Opt in on the right to instantly see your top peer matches.
                    </p>
                  </div>
                  <Button
                    variant="primary"
                    onClick={handleToggleOptIn}
                    disabled={upsertPreferenceMutation.isPending}
                    className="bg-lime-400 text-stone-950 hover:bg-lime-300 mx-auto"
                  >
                    Opt In to Matches
                  </Button>
                </div>
              )}

              {pairing && pairing.status === "COMPLETED" && !alreadyRated && (
                <div className="bg-amber-50 dark:bg-amber-400/10 border border-amber-200 dark:border-amber-400/20 rounded-md p-5 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-amber-900 dark:text-amber-200 text-sm">Review your session</h3>
                    <p className="text-xs text-amber-700 dark:text-amber-300 mt-0.5">
                      Your practice session is completed. Please rate your partner's performance.
                    </p>
                  </div>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => setShowRatingModal(true)}
                    className="bg-amber-400 hover:bg-amber-300 text-stone-950"
                  >
                    Rate Partner
                  </Button>
                </div>
              )}
            </div>

            {/* Right Column: Preferences Settings */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
                <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950/40">
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-lime-400 shrink-0" />
                    <span className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                      Matching Preferences
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6 space-y-5">
                  <div className="flex items-center justify-between border-b border-stone-100 dark:border-white/5 pb-3">
                    <span className="text-sm font-bold text-stone-900 dark:text-stone-50">Participate in matching</span>
                    <button
                      type="button"
                      onClick={handleToggleOptIn}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        enabled ? "bg-lime-400" : "bg-stone-200 dark:bg-stone-700"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          enabled ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-stone-900 dark:text-stone-50">Select Topic</label>
                    <div className="grid grid-cols-3 gap-2">
                      {TOPIC_OPTIONS.map((t) => (
                        <button
                          key={t.value}
                          type="button"
                          onClick={() => setTopic(t.value)}
                          className={`px-3 py-2 text-center text-xs font-semibold rounded border transition-colors cursor-pointer ${
                            topic === t.value
                              ? "border-lime-400 bg-lime-50 dark:bg-lime-400/10 text-stone-900 dark:text-stone-50"
                              : "border-stone-200 dark:border-white/10 bg-transparent text-stone-500 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-white/5"
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                    {topic === "OTHER" && (
                      <div className="space-y-1 pt-1">
                        <input
                          type="text"
                          value={customTopic}
                          onChange={(e) => setCustomTopic(e.target.value)}
                          maxLength={60}
                          placeholder="e.g. Android, Blockchain, Machine Learning"
                          className="w-full text-xs rounded border-stone-300 dark:border-white/15 bg-transparent text-stone-900 dark:text-stone-50 px-2 py-1.5"
                        />
                        <p className="text-[11px] text-stone-400 dark:text-stone-500">
                          You'll rank highest with students who entered the same topic.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-stone-900 dark:text-stone-50">Availability</label>
                    <div className="space-y-2.5">
                      {[
                        { id: "WEEKDAYS_MORNING", label: "Weekdays Morning (9am - 12pm)" },
                        { id: "WEEKDAYS_AFTERNOON", label: "Weekdays Afternoon (12pm - 5pm)" },
                        { id: "WEEKDAYS_EVENING", label: "Weekdays Evening (5pm - 9pm)" },
                        { id: "WEEKENDS", label: "Weekends (Anytime)" },
                      ].map((item) => (
                        <label key={item.id} className="flex items-center gap-2.5 text-xs text-stone-700 dark:text-stone-300 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={availability.includes(item.id)}
                            onChange={() => handleCheckboxChange(item.id)}
                            className="rounded border-stone-300 dark:border-white/15 text-lime-500 focus:ring-lime-400 focus:ring-offset-0 bg-transparent"
                          />
                          <span>{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 border-t border-stone-100 dark:border-white/5 pt-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block">
                      Help your partner prepare for you
                    </span>

                    <label className="block text-xs font-bold text-stone-900 dark:text-stone-50 mt-2">Target role (optional)</label>
                    <input
                      type="text"
                      value={targetRole}
                      onChange={(e) => setTargetRole(e.target.value)}
                      placeholder="e.g. SDE Intern"
                      className="w-full text-xs rounded border-stone-300 dark:border-white/15 bg-transparent text-stone-900 dark:text-stone-50 px-2 py-1.5"
                    />

                    <label className="block text-xs font-bold text-stone-900 dark:text-stone-50 mt-3">Experience level</label>
                    <div className="grid grid-cols-4 gap-1.5">
                      {EXPERIENCE_LEVELS.map((lvl) => (
                        <button
                          key={lvl.value}
                          type="button"
                          onClick={() => setExperienceLevel(lvl.value)}
                          className={`px-2 py-1.5 text-center text-[11px] font-semibold rounded border transition-colors cursor-pointer ${
                            experienceLevel === lvl.value
                              ? "border-lime-400 bg-lime-50 dark:bg-lime-400/10 text-stone-900 dark:text-stone-50"
                              : "border-stone-200 dark:border-white/10 bg-transparent text-stone-500 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-white/5"
                          }`}
                        >
                          {lvl.label}
                        </button>
                      ))}
                    </div>

                    <label className="block text-xs font-bold text-stone-900 dark:text-stone-50 mt-3">Focus areas</label>
                    <div className="flex flex-wrap gap-1.5">
                      {FOCUS_AREA_OPTIONS.map((area) => {
                        const selected = focusAreas.includes(area);
                        return (
                          <button
                            key={area}
                            type="button"
                            onClick={() => toggleFocusArea(area)}
                            className={`inline-flex items-center gap-1 px-2 py-1 rounded text-[11px] font-semibold border transition-colors cursor-pointer ${
                              selected
                                ? "border-lime-400 bg-lime-400 text-stone-950"
                                : "border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-white/5"
                            }`}
                          >
                            {selected && <Check className="w-2.5 h-2.5" />}
                            {area}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <Button
                    variant="primary"
                    onClick={handleSavePreferences}
                    disabled={upsertPreferenceMutation.isPending}
                    className="w-full bg-lime-400 text-stone-950 hover:bg-lime-300"
                  >
                    Save Preferences
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Peer Rating Modal */}
      {showRatingModal && pairing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-xs">
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setShowRatingModal(false);
              }
            }}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md max-w-md w-full overflow-hidden focus:outline-none"
          >
            <div className="px-5 py-3.5 border-b border-stone-100 dark:border-white/5 bg-stone-50 dark:bg-stone-950/40">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400">Post Practice Session</span>
              <h3 className="text-base font-bold text-stone-900 dark:text-stone-50 mt-0.5">Rate Your Partner</h3>
            </div>
            <div className="p-5 space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-900 dark:text-stone-50">Score</label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1 cursor-pointer bg-transparent border-0 shrink-0"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          star <= rating
                            ? "text-lime-400 fill-lime-400"
                            : "text-stone-200 dark:text-stone-700"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-900 dark:text-stone-50">Constructive Feedback</label>
                <Textarea
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  rows={4}
                  placeholder="What went well? Where can they improve?"
                  className="bg-transparent border border-stone-200 dark:border-white/10 text-stone-900 dark:text-stone-50 text-xs"
                />
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-3">
                <Button
                  variant="ghost"
                  onClick={() => setShowRatingModal(false)}
                  className="bg-stone-100 dark:bg-white/5 text-stone-700 dark:text-stone-300"
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={() => rateMutation.mutate({ pairingId: pairing.id, rating, feedback: feedbackText })}
                  disabled={rateMutation.isPending}
                  className="bg-lime-400 text-stone-950 hover:bg-lime-300"
                >
                  Submit Review
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
