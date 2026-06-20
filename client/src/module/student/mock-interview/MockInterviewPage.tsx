import { useMemo, useState, useEffect, useRef, type ReactNode } from "react";
import { toast } from "react-hot-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "../../../lib/auth.store";
import { motion } from "framer-motion";
import {
  Calendar,
  Bot,
  Users,
  Clock,
  MessageSquare,
  ExternalLink,
  Loader2,
  Send,
  ArrowLeft,
  Star,
  RotateCcw,
  ClipboardList,
  BrainCircuit,
  Code2,
  MessageSquareMore,
  ArrowRight,
  Zap,
  CheckCircle,
  Server,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import api from "../../../lib/axios";
import type { AxiosError } from "axios";
import { Button } from "../../../components/ui/button";
import { Textarea } from "../../../components/ui/textarea";
import type {
  MockInterviewFeedback,
  MockInterviewFeedbackResponse,
  MockInterviewTranscriptEntry,
} from "../../../lib/types";

const CALENDLY_URL = "https://calendly.com/mrsachinchaurasiya/30min";

type InterviewMode = null | "ai" | "expert" | "peer";

const OPTIONS = [
  {
    id: "ai" as const,
    number: "01",
    title: "AI Interview",
    description:
      "Practice anytime with our AI interviewer. Instant feedback on your answers, communication, and problem-solving approach.",
    icon: Bot,
    tags: ["24 / 7", "instant feedback"],
  },
  {
    id: "expert" as const,
    number: "02",
    title: "Expert Interview",
    description:
      "Book a 30-minute live session with an industry expert via Calendly for personalised, real-world feedback.",
    icon: Users,
    tags: ["1 on 1", "real feedback"],
  },
  {
    id: "peer" as const,
    number: "03",
    title: "Peer Mock Interview",
    description:
      "Practice 1-on-1 with fellow students on your roadmap. Coordinate sessions, solve assigned problems, and review each other's performance.",
    icon: Users,
    tags: ["Weekly Matches", "Collaborative"],
  },
];

type AiStage = "setup" | "interview" | "generating" | "results";
type MockTopicId = "frontend" | "backend" | "dsa" | "behavioral" | "system-design";

interface MockTopic {
  id: MockTopicId;
  title: string;
  description: string;
  icon: typeof ClipboardList;
  questions: string[];
}

const MOCK_TOPICS: MockTopic[] = [
  {
    id: "frontend",
    title: "Frontend / React",
    description: "Component design, state, performance, and accessibility.",
    icon: Code2,
    questions: [
      "Walk me through how you would structure a reusable React component for long-term maintainability.",
      "When would you choose local state, context, or server state in a frontend app?",
      "How do you diagnose a UI that feels slow or janky to users?",
      "What does accessible frontend behavior look like in a real production feature?",
      "Tell me about a trade-off you would make when optimizing a React feature for performance.",
    ],
  },
  {
    id: "backend",
    title: "Backend / APIs",
    description: "REST design, auth, databases, and operational thinking.",
    icon: BrainCircuit,
    questions: [
      "Design a REST endpoint for a feature you have built recently and explain the choices you made.",
      "How would you validate and protect an authenticated API endpoint?",
      "How do you reason about database indexes and query performance?",
      "What would you do to make a background job reliable in production?",
      "When would you reach for caching, and what trade-offs do you keep in mind?",
    ],
  },
  {
    id: "dsa",
    title: "DSA / Problem Solving",
    description: "Complexity, patterns, and code-level reasoning.",
    icon: ClipboardList,
    questions: [
      "How do you approach estimating time and space complexity before writing code?",
      "Explain how you would solve a problem with a hash map, stack, or queue.",
      "What trade-offs do you consider between recursion and iteration?",
      "How do you approach dynamic programming problems when you first see them?",
      "How do you make sure your solution covers edge cases and unusual inputs?",
    ],
  },
  {
    id: "behavioral",
    title: "Behavioral / Ownership",
    description: "Communication, ownership, and teamwork under pressure.",
    icon: MessageSquareMore,
    questions: [
      "Tell me about a project you owned from start to finish.",
      "Describe a bug or failure you had to debug under time pressure.",
      "How do you handle feedback when someone challenges your approach?",
      "Tell me about a conflict on a team and how you resolved it.",
      "What are you actively improving about your work style right now?",
    ],
  },
  {
    id: "system-design",
    title: "System Design",
    description: "Architecture, scaling, databases, trade-offs, and distributed systems.",
    icon: Server,
    questions: [
      "Design a URL shortening service like TinyURL. Walk through your data model, API, and scaling strategy.",
      "How would you design a real-time chat system like WhatsApp? Discuss message delivery guarantees and storage.",
      "Design a news feed system like Twitter. How do you handle the celebrity fan-out problem?",
      "Walk through the design of a distributed rate limiter. What algorithms and data stores would you use?",
      "How would you design a video streaming platform like YouTube? Cover the upload pipeline and playback.",
    ],
  },
];

function getFallbackFeedback(topicTitle: string): MockInterviewFeedback {
  return {
    communication:
      "Your answers were understandable, but you can improve clarity by leading with a direct answer, then adding one short explanation and a closing sentence.",
    technicalAccuracy: `You showed a basic grasp of ${topicTitle.toLowerCase()}, but the strongest answers would be more precise with clearer terminology and a few concrete examples.`,
    areasToImprove: [
      "Use a tighter answer structure: answer first, then explain the reasoning.",
      "Add one concrete example, trade-off, or metric to support each response.",
      "Pause briefly before answering so you can organize your thoughts.",
    ],
    strengths: [
      "You stayed engaged throughout the session.",
      "You were able to connect your answers back to practical situations.",
    ],
    overallRating: 3,
  };
}

function FeedbackStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < rating
              ? "text-lime-400 fill-lime-400"
              : "text-stone-200 dark:text-stone-700"
          }`}
        />
      ))}
      <span className="ml-2 text-xl font-bold tabular-nums text-stone-900 dark:text-stone-50">
        {rating}
        <span className="text-sm font-normal text-stone-400 dark:text-stone-600">
          /5
        </span>
      </span>
    </div>
  );
}

function SessionPanel({
  title,
  children,
  right,
}: {
  title: string;
  children: ReactNode;
  right?: ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
      <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950/40">
        <div className="flex items-center gap-2">
          <div className="h-1 w-1 bg-lime-400 shrink-0" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            {title}
          </span>
        </div>
        {right && <div className="shrink-0">{right}</div>}
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}

function AiMockInterview({ onBack }: { onBack: () => void }) {
  const [stage, setStage] = useState<AiStage>("setup");
  const [selectedTopicId, setSelectedTopicId] = useState<MockTopicId>(
    MOCK_TOPICS[0].id,
  );
  const [activeTopicId, setActiveTopicId] = useState<MockTopicId>(
    MOCK_TOPICS[0].id,
  );
  const [questionIndex, setQuestionIndex] = useState(0);
  const [draftAnswer, setDraftAnswer] = useState("");
  const [transcript, setTranscript] = useState<MockInterviewTranscriptEntry[]>(
    [],
  );
  const [feedback, setFeedback] = useState<MockInterviewFeedback | null>(null);
  const [feedbackNote, setFeedbackNote] = useState<string | null>(null);
  const [sessionError, setSessionError] = useState<string | null>(null);

  const activeTopic = useMemo(
    () =>
      MOCK_TOPICS.find((topic) => topic.id === activeTopicId) ?? MOCK_TOPICS[0],
    [activeTopicId],
  );
  const currentQuestion =
    activeTopic.questions[questionIndex] ??
    activeTopic.questions[activeTopic.questions.length - 1] ??
    "";
  const progress = Math.min(
    100,
    Math.round(((questionIndex + 1) / activeTopic.questions.length) * 100),
  );

  const beginSession = (topicId: MockTopicId) => {
    setActiveTopicId(topicId);
    setQuestionIndex(0);
    setDraftAnswer("");
    setTranscript([]);
    setFeedback(null);
    setFeedbackNote(null);
    setSessionError(null);
    setStage("interview");
  };

  const retrySession = () => {
    beginSession(activeTopic.id as MockTopicId);
  };

  const goToSetup = () => {
    setStage("setup");
    setFeedback(null);
    setFeedbackNote(null);
    setSessionError(null);
    setDraftAnswer("");
  };

  const submitAnswer = async () => {
    const answer = draftAnswer.trim();
    if (!answer || stage !== "interview") {
      if (stage === "interview") {
        setSessionError("Enter an answer before moving to the next question.");
      }
      return;
    }

    setSessionError(null);

    const question = currentQuestion;
    const nextTranscript = [...transcript, { question, answer }];

    setTranscript(nextTranscript);
    setDraftAnswer("");

    if (questionIndex < activeTopic.questions.length - 1) {
      setQuestionIndex((value) => value + 1);
      return;
    }

    setStage("generating");

    try {
      const response = await api.post<MockInterviewFeedbackResponse>(
        "/student/mock-interview/feedback",
        { topic: activeTopic.title, transcript: nextTranscript },
      );
      setFeedback(response.data.feedback);
      setFeedbackNote(
        response.data.fallbackUsed
          ? "We used a safe fallback review because the Gemini response could not be parsed reliably."
          : null,
      );
      setSessionError(null);
    } catch {
      setFeedback(getFallbackFeedback(activeTopic.title));
      setFeedbackNote(
        "We used a safe fallback review because the feedback service was unavailable.",
      );
      setSessionError(null);
    } finally {
      setStage("results");
    }
  };

  // ── Setup ────────────────────────────────────────────────────────────────
  if (stage === "setup") {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-stone-50 dark:bg-stone-950">
        <SEO title="AI Mock Interview" noIndex />
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="mb-8 flex items-start justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-7">
              <div>
                <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  <span className="h-1.5 w-1.5 bg-lime-400" />
                  interview / ai
                </div>
                <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                  AI mock interview.
                </h1>
                <p className="mt-2 text-sm text-stone-500 max-w-xl">
                  Choose a topic, answer five focused questions, and get
                  Gemini-powered feedback when you finish.
                </p>
              </div>
              <Button
                variant="ghost"
                mode="icon"
                aria-label="Go back"
                size="sm"
                onClick={onBack}
                className="bg-stone-100 hover:bg-stone-200 dark:bg-white/5 dark:hover:bg-white/10 rounded-md shrink-0"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6">
              {/* Topic picker */}
              <SessionPanel title="choose a topic">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {MOCK_TOPICS.map((topic) => {
                    const Icon = topic.icon;
                    const selected = selectedTopicId === topic.id;
                    return (
                      <button
                        key={topic.id}
                        type="button"
                        onClick={() => setSelectedTopicId(topic.id)}
                        className={`group text-left rounded-md border p-4 transition-all cursor-pointer ${
                          selected
                            ? "border-lime-400 bg-lime-50 dark:bg-lime-400/10"
                            : "border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 hover:border-stone-300 dark:hover:border-white/20 hover:bg-stone-50 dark:hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-md transition-colors ${
                              selected
                                ? "bg-lime-400 text-stone-950"
                                : "bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-400"
                            }`}
                          >
                            <Icon className="h-4.5 w-4.5" />
                          </div>
                          {selected && (
                            <CheckCircle className="w-4 h-4 text-lime-500 shrink-0 mt-0.5" />
                          )}
                        </div>
                        <h3 className="text-sm font-bold text-stone-900 dark:text-stone-50">
                          {topic.title}
                        </h3>
                        <p className="mt-1 text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                          {topic.description}
                        </p>
                        <p className="mt-3 text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-600">
                          5 questions
                        </p>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-5 flex items-center justify-between gap-3 pt-5 border-t border-stone-200 dark:border-white/10">
                  <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
                    <Zap className="h-3.5 w-3.5 text-lime-500 shrink-0" />
                    <span>
                      Gemini reviews communication, accuracy, strengths, and
                      areas to improve.
                    </span>
                  </div>
                  <Button
                    variant="primary"
                    onClick={() => beginSession(selectedTopicId)}
                    className="bg-lime-400 text-stone-950 hover:bg-lime-300 shrink-0"
                  >
                    Start interview
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </SessionPanel>

              {/* What to expect */}
              <SessionPanel title="what to expect">
                <div className="space-y-3">
                  {[
                    {
                      icon: Clock,
                      title: "5 focused questions",
                      body: "Each session is a short, tight loop — no filler, just signal.",
                    },
                    {
                      icon: MessageSquare,
                      title: "Full transcript saved",
                      body: "Every question and answer is preserved and sent to Gemini for review.",
                    },
                    {
                      icon: Star,
                      title: "Structured feedback",
                      body: "You get a rating, strengths, and clear improvement points at the end.",
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="flex gap-3 p-4 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-white/5"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10">
                          <Icon className="h-4 w-4 text-stone-600 dark:text-stone-400" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-stone-900 dark:text-stone-50">
                            {item.title}
                          </p>
                          <p className="mt-0.5 text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </SessionPanel>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // ── Generating ───────────────────────────────────────────────────────────
  if (stage === "generating") {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-stone-50 dark:bg-stone-950">
        <SEO title="AI Mock Interview" noIndex />
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md text-center"
          >
            <div className="w-16 h-16 rounded-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 flex items-center justify-center mx-auto mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              >
                <Loader2 className="h-7 w-7 text-lime-500" />
              </motion.div>
            </div>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-3">
              <span className="h-1.5 w-1.5 bg-lime-400" />
              analysis in progress
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-2">
              Generating your feedback.
            </h2>
            <p className="text-sm text-stone-500 leading-relaxed">
              Gemini is reviewing your full transcript across communication,
              technical accuracy, strengths, and areas to improve.
            </p>
            <div className="mt-8 w-full h-1 bg-stone-100 dark:bg-stone-800 rounded-md overflow-hidden">
              <motion.div
                className="h-full bg-lime-400 rounded-md"
                animate={{ x: ["-100%", "250%"] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ width: "40%" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // ── Results ──────────────────────────────────────────────────────────────
  if (stage === "results" && feedback) {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-stone-50 dark:bg-stone-950">
        <SEO title="AI Mock Interview Results" noIndex />
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="mb-8 flex items-start justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-7">
              <div>
                <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  <span className="h-1.5 w-1.5 bg-lime-400" />
                  interview / results
                </div>
                <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                  Your feedback is ready.
                </h1>
                <p className="mt-2 text-sm text-stone-500 max-w-xl">
                  Review the breakdown below, then retry or pick a new topic.
                </p>
              </div>
              <Button
                variant="ghost"
                mode="icon"
                aria-label="Go back"
                size="sm"
                onClick={onBack}
                className="bg-stone-100 hover:bg-stone-200 dark:bg-white/5 dark:hover:bg-white/10 rounded-md shrink-0"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6">
              {/* Left: feedback */}
              <div className="space-y-5">
                {/* Rating card */}
                <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1">
                        overall rating
                      </p>
                      <FeedbackStars rating={feedback.overallRating} />
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-1">
                        topic
                      </p>
                      <p className="text-sm font-bold text-stone-900 dark:text-stone-50">
                        {activeTopic.title}
                      </p>
                    </div>
                  </div>
                </div>

                {feedbackNote && (
                  <div className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-800 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-200">
                    {feedbackNote}
                  </div>
                )}

                {/* Communication + Technical */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      label: "communication",
                      body: feedback.communication,
                    },
                    {
                      label: "technical accuracy",
                      body: feedback.technicalAccuracy,
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 p-4"
                    >
                      <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-2">
                        {item.label}
                      </p>
                      <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Strengths + Areas to improve */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 p-4">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">
                      strengths
                    </p>
                    <ul className="space-y-2">
                      {feedback.strengths.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm text-stone-700 dark:text-stone-300">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-lime-400" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 p-4">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">
                      areas to improve
                    </p>
                    <ul className="space-y-2">
                      {feedback.areasToImprove.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm text-stone-700 dark:text-stone-300">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-stone-400 dark:bg-stone-600" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    variant="primary"
                    onClick={retrySession}
                    className="bg-lime-400 text-stone-950 hover:bg-lime-300"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Retry same topic
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={goToSetup}
                    className="bg-stone-100 text-stone-900 hover:bg-stone-200 dark:bg-white/5 dark:text-stone-100 dark:hover:bg-white/10"
                  >
                    Change topic
                  </Button>
                </div>
              </div>

              {/* Right: transcript */}
              <SessionPanel
                title="session transcript"
                right={
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                    {transcript.length} questions
                  </span>
                }
              >
                <div className="space-y-4">
                  {transcript.map((entry, index) => (
                    <div
                      key={`${entry.question}-${index}`}
                      className="rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-white/5 p-4"
                    >
                      <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-2">
                        Q{index + 1}
                      </p>
                      <p className="text-sm font-semibold text-stone-900 dark:text-stone-50 leading-relaxed">
                        {entry.question}
                      </p>
                      <div className="mt-3 pt-3 border-t border-stone-200 dark:border-white/10">
                        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed whitespace-pre-wrap">
                          {entry.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </SessionPanel>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // ── Interview ────────────────────────────────────────────────────────────
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-stone-50 dark:bg-stone-950">
      <SEO title="AI Mock Interview" noIndex />
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header with progress */}
          <div className="mb-6 flex items-center justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-5">
            <div className="flex items-center gap-4 min-w-0">
              <Button
                variant="ghost"
                mode="icon"
                aria-label="Go back"
                size="sm"
                onClick={onBack}
                className="bg-stone-100 hover:bg-stone-200 dark:bg-white/5 dark:hover:bg-white/10 rounded-md shrink-0"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-0.5">
                  <span className="h-1 w-1 bg-lime-400 shrink-0" />
                  {activeTopic.title}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-stone-900 dark:text-stone-50">
                    Question {questionIndex + 1} of {activeTopic.questions.length}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">
                    {progress}% done
                  </span>
                </div>
              </div>
            </div>
            {/* Step dots */}
            <div className="hidden sm:flex items-center gap-1.5 shrink-0">
              {activeTopic.questions.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-sm transition-all ${
                    i < questionIndex
                      ? "w-4 bg-lime-400"
                      : i === questionIndex
                        ? "w-4 bg-lime-400"
                        : "w-4 bg-stone-200 dark:bg-stone-700"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6">
            {/* Question + answer */}
            <div className="space-y-4">
              {/* Progress bar */}
              <div className="h-1 w-full overflow-hidden rounded-sm bg-stone-100 dark:bg-stone-800">
                <motion.div
                  className="h-full bg-lime-400 rounded-sm"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Question card */}
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6">
                <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-600 mb-3">
                  current question
                </p>
                <p className="text-lg font-semibold leading-8 text-stone-900 dark:text-stone-50">
                  {currentQuestion}
                </p>
              </div>

              {sessionError && (
                <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-400/30 dark:bg-red-400/10 dark:text-red-300">
                  {sessionError}
                </div>
              )}

              {/* Answer area */}
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
                <div className="px-5 pt-5 pb-3">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-2">
                    Your answer
                  </label>
                  <Textarea
                    value={draftAnswer}
                    onChange={(event) => {
                      setDraftAnswer(event.target.value);
                      if (sessionError) setSessionError(null);
                    }}
                    rows={8}
                    placeholder="Type your response here..."
                    className="resize-none border-0 rounded-none bg-transparent text-stone-900 dark:text-stone-50 placeholder:text-stone-400 dark:placeholder:text-stone-600 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 shadow-none"
                    onKeyDown={(event) => {
                      if (
                        (event.ctrlKey || event.metaKey) &&
                        event.key === "Enter"
                      ) {
                        event.preventDefault();
                        void submitAnswer();
                      }
                    }}
                  />
                </div>
                <div className="flex items-center justify-between gap-3 px-5 py-3 border-t border-stone-100 dark:border-white/5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-600">
                    Ctrl + Enter to submit
                  </span>
                  <Button
                    variant="primary"
                    onClick={() => void submitAnswer()}
                    disabled={!draftAnswer.trim()}
                    className="bg-lime-400 text-stone-950 hover:bg-lime-300 disabled:opacity-40"
                  >
                    <Send className="w-3.5 h-3.5" />
                    {questionIndex < activeTopic.questions.length - 1
                      ? "Next question"
                      : "Finish session"}
                  </Button>
                </div>
              </div>
            </div>

            {/* Transcript panel */}
            <SessionPanel
              title="transcript"
              right={
                transcript.length > 0 ? (
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                    {transcript.length} answered
                  </span>
                ) : null
              }
            >
              <div className="space-y-3">
                {transcript.length === 0 ? (
                  <div className="rounded-md border border-dashed border-stone-200 dark:border-white/10 p-5 text-sm text-stone-500 dark:text-stone-400 text-center">
                    Your answers will appear here as you progress.
                  </div>
                ) : (
                  transcript.map((entry, index) => (
                    <div
                      key={`${entry.question}-${index}`}
                      className="rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-white/5 p-4"
                    >
                      <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-600 mb-1.5">
                        Q{index + 1}
                      </p>
                      <p className="text-xs font-semibold text-stone-800 dark:text-stone-200 leading-relaxed mb-2">
                        {entry.question}
                      </p>
                      <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed whitespace-pre-wrap">
                        {entry.answer}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </SessionPanel>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ── Main page ────────────────────────────────────────────────────────────────
export default function MockInterviewPage() {
  const [mode, setMode] = useState<InterviewMode>(null);

  // Expert mode
  if (mode === "expert") {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-stone-50 dark:bg-stone-950">
        <SEO title="Expert Mock Interview" noIndex />
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-8 flex items-start justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-7">
              <div>
                <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                  <span className="h-1.5 w-1.5 bg-lime-400" />
                  interview / expert
                </div>
                <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                  Book an expert session.
                </h1>
                <p className="mt-2 text-sm text-stone-500 max-w-xl">
                  Schedule a 30-minute live mock interview with an industry
                  expert. Pick a time that works for you below.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setMode(null)}
                className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-stone-100 hover:bg-stone-200 dark:bg-white/5 dark:hover:bg-white/10 text-stone-600 dark:text-stone-400 transition-colors border-0 cursor-pointer shrink-0"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950/40">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 bg-lime-400" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                    calendly / 30 min slot
                  </span>
                </div>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold text-stone-700 dark:text-stone-300 bg-transparent border border-stone-300 dark:border-white/15 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  open in new tab
                </a>
              </div>
              <iframe
                src={CALENDLY_URL}
                className="w-full border-0 block bg-white"
                style={{ minHeight: "660px" }}
                title="Schedule Mock Interview"
              />
            </div>

            <div className="flex justify-center mt-6">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-bold text-stone-950 bg-lime-400 hover:bg-lime-300 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Open full calendar
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Peer mode
  if (mode === "peer") {
    return <PeerMockInterview onBack={() => setMode(null)} />;
  }

  // AI mode
  if (mode === "ai") {
    return <AiMockInterview onBack={() => setMode(null)} />;
  }

  // Landing
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-stone-50 dark:bg-stone-950">
      <SEO title="Mock Interview" noIndex />
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Editorial header */}
          <div className="mt-2 mb-10 border-b border-stone-200 dark:border-white/10 pb-8">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
              <span className="h-1.5 w-1.5 bg-lime-400" />
              practice / mock interview
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-none">
              Practice your{" "}
              <span className="relative inline-block">
                <span className="relative z-10">interview.</span>
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
              AI-powered practice anytime, or book a session with a real expert.
              Walk away with feedback you can act on.
            </p>
          </div>

          {/* Option tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
            {OPTIONS.map((opt) => {
              const Icon = opt.icon;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setMode(opt.id)}
                  className="group relative flex flex-col gap-5 p-7 text-left transition-all duration-200 bg-white dark:bg-stone-900 hover:bg-stone-900 dark:hover:bg-stone-50 cursor-pointer"
                >
                  {/* Number + icon */}
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-600 group-hover:text-lime-400 dark:group-hover:text-lime-500">
                      / {opt.number}
                    </span>
                    <div className="w-11 h-11 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center transition-colors group-hover:bg-lime-400">
                      <Icon className="w-5 h-5 text-stone-600 dark:text-stone-400 group-hover:text-stone-950" />
                    </div>
                  </div>

                  {/* Title + description */}
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50 group-hover:text-stone-50 dark:group-hover:text-stone-900">
                      {opt.title}
                    </h3>
                    <p className="mt-2 text-sm text-stone-500 dark:text-stone-400 group-hover:text-stone-400 dark:group-hover:text-stone-600 leading-relaxed">
                      {opt.description}
                    </p>
                  </div>

                  {/* Tags + arrow */}
                  <div className="flex items-center justify-between gap-3 mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {opt.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 rounded-md text-[10px] font-mono uppercase tracking-widest bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-400 group-hover:bg-white/10 dark:group-hover:bg-black/10 group-hover:text-stone-200 dark:group-hover:text-stone-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 dark:text-stone-600 group-hover:text-lime-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stats strip */}
          <div className="mt-px grid grid-cols-1 sm:grid-cols-3 gap-px bg-stone-200 dark:bg-white/10 border border-t-0 border-stone-200 dark:border-white/10 rounded-b-md overflow-hidden">
            {[
              {
                icon: Clock,
                label: "30 min",
                sub: "typical session length",
              },
              {
                icon: MessageSquare,
                label: "structured feedback",
                sub: "communication, accuracy, rating",
              },
              {
                icon: Calendar,
                label: "flexible timing",
                sub: "ai now, expert on your schedule",
              },
            ].map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 p-4 bg-white dark:bg-stone-900"
              >
                <div className="w-9 h-9 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                  <f.icon className="w-4 h-4 text-stone-500 dark:text-stone-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900 dark:text-stone-50">
                    {f.label}
                  </p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                    {f.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function PeerMockInterview({ onBack }: { onBack: () => void }) {
  const queryClient = useQueryClient();

  // Query preferences
  const { data: preference, isLoading: loadingPref } = useQuery({
    queryKey: ["peer-mock-interview", "preferences"],
    queryFn: async () => {
      const res = await api.get("/student/peer-mock-interview/preferences");
      return res.data;
    },
  });

  // Query upcoming pairing
  const { data: pairing, isLoading: loadingPairing } = useQuery({
    queryKey: ["peer-mock-interview", "upcoming"],
    queryFn: async () => {
      const res = await api.get("/student/peer-mock-interview/pairings/upcoming");
      return res.data;
    },
  });

  // Preferences mutation
  const upsertPreferenceMutation = useMutation({
    mutationFn: async (payload: { topic: string; availability: string[]; enabled: boolean }) => {
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

  // Complete mutation
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

  // Rating mutation
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

  // Form states
  const [topic, setTopic] = useState<"DSA" | "SYSTEM_DESIGN" | "FRONTEND">("DSA");
  const [availability, setAvailability] = useState<string[]>([]);
  const [enabled, setEnabled] = useState(false);

  // Modal states for rating
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [rating, setRating] = useState(5);
  const [feedbackText, setFeedbackText] = useState("");

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
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
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
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
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

  // Sync preference state
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (preference) {
      setTopic(preference.topic || "DSA");
      setAvailability(preference.availability || []);
      setEnabled(preference.enabled ?? true);
    } else {
      setEnabled(false);
    }
  }, [preference]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const handleSavePreferences = () => {
    upsertPreferenceMutation.mutate({ topic, availability, enabled });
  };

  const handleToggleOptIn = () => {
    const nextEnabled = !enabled;
    setEnabled(nextEnabled);
    upsertPreferenceMutation.mutate({ topic, availability, enabled: nextEnabled });
  };

  const handleCheckboxChange = (slot: string) => {
    setAvailability((prev) =>
      prev.includes(slot) ? prev.filter((s) => s !== slot) : [...prev, slot]
    );
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
  const isA = pairing && pairing.studentAId === currentUserId;
  const partner = pairing ? (isA ? pairing.studentB : pairing.studentA) : null;
  const alreadyRated = pairing ? (isA ? pairing.ratingAForB !== null : pairing.ratingBForA !== null) : false;

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-stone-50 dark:bg-stone-950">
      <SEO title="Peer Mock Interview" noIndex />
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="mb-8 flex items-start justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-7">
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-stone-500">
                <span className="h-1.5 w-1.5 bg-lime-400" />
                practice / peer mock interview
              </div>
              <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                Peer mock interview matching.
              </h1>
              <p className="mt-2 text-sm text-stone-500 max-w-xl">
                Match weekly with students for live mock interviews. Practice, rate, and level up together.
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
              {enabled && pairing ? (
                // Match Found Card
                <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden p-6 space-y-6">
                  <div className="flex items-center justify-between border-b border-stone-100 dark:border-white/5 pb-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">Match Found</span>
                      <h2 className="text-xl font-bold text-stone-900 dark:text-stone-50 mt-1">Upcoming Practice Session</h2>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-lime-400/10 text-lime-500 text-xs font-mono uppercase tracking-wider">
                      {pairing.topic}
                    </span>
                  </div>

                  {/* Partner Details */}
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

                  {/* Assigned Problem Section */}
                  {pairing.assignedProblem ? (
                    <div className="bg-stone-50 dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-md p-4 space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block">Assigned practice problem</span>
                      <h4 className="font-bold text-stone-900 dark:text-stone-50">{pairing.assignedProblem.title}</h4>
                      <p className="text-xs text-stone-500 dark:text-stone-400">
                        Difficulty: <span className="font-semibold text-stone-700 dark:text-stone-300">{pairing.assignedProblem.difficulty}</span>
                      </p>
                      <div className="pt-2">
                        <a
                          href={`/learn/dsa/problem/${pairing.assignedProblem.slug}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-lime-400 hover:bg-lime-300 text-stone-950 text-xs font-bold rounded transition-colors"
                        >
                          View Problem Details
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-stone-50 dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-md p-4">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block">Assigned practice problem</span>
                      <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                        No code problem auto-assigned for this topic. Use the availability details to coordinate custom questions.
                      </p>
                    </div>
                  )}

                  {/* Complete/Feedback Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-stone-100 dark:border-white/5">
                    {pairing.status === "SCHEDULED" ? (
                      <Button
                        variant="primary"
                        onClick={() => completeMutation.mutate(pairing.id)}
                        disabled={completeMutation.isPending}
                        className="bg-lime-400 text-stone-950 hover:bg-lime-300"
                      >
                        Mark Session Completed
                      </Button>
                    ) : (
                      <span className="text-xs text-stone-400 italic">Session marked as completed.</span>
                    )}
                    {pairing.status === "SCHEDULED" && (
                      <Button
                        variant="ghost"
                        mode="link"
                        onClick={() => {
                          upsertPreferenceMutation.mutate({ topic, availability, enabled: false });
                        }}
                        className="text-xs font-bold text-red-500 hover:underline"
                      >
                        Cancel / Opt Out
                      </Button>
                    )}
                  </div>
                </div>
              ) : enabled ? (
                // Searching pool Card
                <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-lime-400/10 text-lime-500 flex items-center justify-center rounded mx-auto">
                    <RotateCcw className="w-6 h-6 animate-spin" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-stone-900 dark:text-stone-50">Searching for a partner...</h2>
                    <p className="text-sm text-stone-500 mt-1 max-w-sm mx-auto">
                      You are in the matching pool! A weekly matching job runs every Sunday at midnight UTC to pair compatible students.
                    </p>
                  </div>
                  <div className="bg-stone-50 dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-md p-4 text-left max-w-md mx-auto space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block">Your matching settings</span>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      Topic: <span className="font-semibold text-stone-950 dark:text-stone-50">{topic}</span>
                    </p>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      Availability: <span className="font-semibold text-stone-950 dark:text-stone-50">{availability.join(", ") || "Anytime"}</span>
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    mode="link"
                    onClick={handleToggleOptIn}
                    disabled={upsertPreferenceMutation.isPending}
                    className="text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 underline"
                  >
                    Leave matching pool
                  </Button>
                </div>
              ) : (
                // Opted Out Card
                <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-stone-100 dark:bg-white/5 text-stone-400 flex items-center justify-center rounded mx-auto">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-stone-900 dark:text-stone-50">Peer Mock Interviews are disabled</h2>
                    <p className="text-sm text-stone-500 mt-1 max-w-sm mx-auto">
                      Opt in to get paired with other students on your roadmap for live mock interview practice.
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

              {/* Completed / Review needed matches */}
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
              <SessionPanel title="Matching Preferences">
                <div className="space-y-5">
                  {/* Enabled flag */}
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

                  {/* Topic Select */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-stone-900 dark:text-stone-50">Select Topic</label>
                    <div className="grid grid-cols-3 gap-2">
                      {(["DSA", "SYSTEM_DESIGN", "FRONTEND"] as const).map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTopic(t)}
                          className={`px-3 py-2 text-center text-xs font-semibold rounded border transition-colors cursor-pointer ${
                            topic === t
                              ? "border-lime-400 bg-lime-50 dark:bg-lime-400/10 text-stone-900 dark:text-stone-50"
                              : "border-stone-200 dark:border-white/10 bg-transparent text-stone-500 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-white/5"
                          }`}
                        >
                          {t.replace("_", " ")}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Availability checkboxes */}
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

                  {/* Save button */}
                  <Button
                    variant="primary"
                    onClick={handleSavePreferences}
                    disabled={upsertPreferenceMutation.isPending}
                    className="w-full bg-lime-400 text-stone-950 hover:bg-lime-300"
                  >
                    Save Preferences
                  </Button>
                </div>
              </SessionPanel>
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
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">Post Practice Session</span>
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
