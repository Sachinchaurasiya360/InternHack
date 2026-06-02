import { useMemo, useState, type ReactNode } from "react";
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
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import api from "../../../lib/axios";
import { Button } from "../../../components/ui/button";
import { Textarea } from "../../../components/ui/textarea";
import type {
  MockInterviewFeedback,
  MockInterviewFeedbackResponse,
  MockInterviewTranscriptEntry,
} from "../../../lib/types";

const CALENDLY_URL = "https://calendly.com/mrsachinchaurasiya/30min";

type InterviewMode = null | "ai" | "expert";

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
];

type AiStage = "setup" | "interview" | "generating" | "results";
type MockTopicId = "frontend" | "backend" | "dsa" | "behavioral";

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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-stone-200 dark:bg-white/10 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
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
