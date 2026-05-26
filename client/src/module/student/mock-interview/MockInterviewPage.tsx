import { useMemo, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Video, Calendar, Bot, Users, Clock, MessageSquare, ExternalLink, Loader2, Send, ArrowLeft, Sparkles, Star, RotateCcw, ClipboardList, BrainCircuit, Code2, MessageSquareMore } from "lucide-react";
import { SEO } from "../../../components/SEO";
import api from "../../../lib/axios";
import { Button } from "../../../components/ui/button";
import { Textarea } from "../../../components/ui/textarea";
import type { MockInterviewFeedback, MockInterviewFeedbackResponse, MockInterviewTranscriptEntry } from "../../../lib/types";

const CALENDLY_URL = "https://calendly.com/mrsachinchaurasiya/30min";

type InterviewMode = null | "ai" | "expert";

const OPTIONS = [
  {
    id: "ai" as const,
    kicker: "option 01",
    title: "AI Interview",
    description: "Practice anytime with our AI interviewer. Instant feedback on your answers, communication, and problem-solving approach.",
    icon: Bot,
    tags: ["24 / 7", "instant feedback"],
  },
  {
    id: "expert" as const,
    kicker: "option 02",
    title: "Expert Interview",
    description: "Book a thirty-minute live session with an industry expert via Calendly for personalised, real-world feedback.",
    icon: Users,
    tags: ["1 on 1", "real feedback"],
  },
];

const ghostBtnCls =
  "inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold text-stone-700 dark:text-stone-300 bg-transparent border border-stone-300 dark:border-white/15 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer";
const limeBtnCls =
  "inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-bold text-stone-950 bg-lime-400 hover:bg-lime-300 transition-colors border-0 cursor-pointer no-underline";

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
    technicalAccuracy:
      `You showed a basic grasp of ${topicTitle.toLowerCase()}, but the strongest answers would be more precise with clearer terminology and a few concrete examples.`,
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
    <div className="flex items-center gap-1.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className={`w-4 h-4 ${index < rating ? "text-lime-400 fill-lime-400" : "text-stone-300 dark:text-stone-600"}`} />
      ))}
      <span className="ml-1 text-sm font-semibold text-stone-900 dark:text-stone-50">{rating}/5</span>
    </div>
  );
}

function SessionPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950/40">
        <div className="h-1 w-1 bg-lime-400"></div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">{title}</span>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}

function AiMockInterview({ onBack }: { onBack: () => void }) {
  const [stage, setStage] = useState<AiStage>("setup");
  const [selectedTopicId, setSelectedTopicId] = useState<MockTopicId>(MOCK_TOPICS[0].id);
  const [activeTopicId, setActiveTopicId] = useState<MockTopicId>(MOCK_TOPICS[0].id);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [draftAnswer, setDraftAnswer] = useState("");
  const [transcript, setTranscript] = useState<MockInterviewTranscriptEntry[]>([]);
  const [feedback, setFeedback] = useState<MockInterviewFeedback | null>(null);
  const [feedbackNote, setFeedbackNote] = useState<string | null>(null);
  const [sessionError, setSessionError] = useState<string | null>(null);

  const activeTopic = useMemo(() => MOCK_TOPICS.find((topic) => topic.id === activeTopicId) ?? MOCK_TOPICS[0], [activeTopicId]);
  const currentQuestion = activeTopic.questions[questionIndex] ?? activeTopic.questions[activeTopic.questions.length - 1] ?? "";
  const progress = Math.min(100, Math.round(((questionIndex + 1) / activeTopic.questions.length) * 100));

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
      const response = await api.post<MockInterviewFeedbackResponse>("/student/mock-interview/feedback", {
        topic: activeTopic.title,
        transcript: nextTranscript,
      });

      setFeedback(response.data.feedback);
      setFeedbackNote(
        response.data.fallbackUsed
          ? "We used a safe fallback review because the Gemini response could not be parsed reliably."
          : null,
      );
      setSessionError(null);
    } catch {
      setFeedback(getFallbackFeedback(activeTopic.title));
      setFeedbackNote("We used a safe fallback review because the feedback service was unavailable.");
      setSessionError(null);
    } finally {
      setStage("results");
    }
  };

  if (stage === "setup") {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-stone-50 dark:bg-stone-950">
        <SEO title="AI Mock Interview" noIndex />
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-1 w-1 bg-lime-400"></div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                    interview / ai
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-2">
                  AI mock interview.
                </h1>
                <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
                  Choose a topic, answer a short interview loop, and get Gemini-powered feedback when you finish.
                </p>
              </div>
              <Button variant="ghost" mode="icon" size="sm" onClick={onBack} className="bg-stone-100 hover:bg-stone-200 dark:bg-white/5 dark:hover:bg-white/10 rounded-md">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6">
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
                        className={`group text-left rounded-md border p-4 transition-colors cursor-pointer ${selected ? "border-lime-400 bg-lime-50 dark:bg-lime-400/10" : "border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-50/5"}`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">topic</p>
                            <h3 className="mt-1 text-base font-bold text-stone-900 dark:text-stone-50">{topic.title}</h3>
                          </div>
                          <div className={`flex h-9 w-9 items-center justify-center rounded-md ${selected ? "bg-lime-400 text-stone-950" : "bg-stone-100 dark:bg-white/5 text-stone-700 dark:text-stone-300"}`}>
                            <Icon className="h-4 w-4" />
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-stone-600 dark:text-stone-400">{topic.description}</p>
                        <p className="mt-3 text-xs text-stone-500 dark:text-stone-400">5 questions · Gemini feedback at the end</p>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
                    <Sparkles className="h-4 w-4 text-lime-500" />
                    Feedback includes communication, technical accuracy, strengths, improvements, and rating.
                  </div>
                  <Button variant="primary" onClick={() => beginSession(selectedTopicId)} className="bg-lime-400 text-stone-950 hover:bg-lime-300">
                    Start interview
                  </Button>
                </div>
              </SessionPanel>

              <SessionPanel title="what to expect">
                <div className="space-y-4">
                  {[
                    { icon: Clock, title: "Short loop", body: "Answer a focused set of questions for one topic." },
                    { icon: MessageSquare, title: "Clear transcript", body: "Each question and answer is preserved for the feedback prompt." },
                    { icon: Star, title: "Structured feedback", body: "You get clear ratings and specific suggestions after the final answer." },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex gap-3 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-white/5 p-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10">
                          <Icon className="h-4 w-4 text-stone-700 dark:text-stone-300" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-50">{item.title}</h3>
                          <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{item.body}</p>
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

  if (stage === "generating") {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-stone-50 dark:bg-stone-950">
        <SEO title="AI Mock Interview" noIndex />
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-1 w-1 bg-lime-400"></div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                    interview / ai
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-2">
                  Generating feedback.
                </h1>
                <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
                  Gemini is reviewing your full transcript and preparing a structured result screen.
                </p>
              </div>
              <Button variant="ghost" mode="icon" size="sm" onClick={onBack} className="bg-stone-100 hover:bg-stone-200 dark:bg-white/5 dark:hover:bg-white/10 rounded-md">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </div>

            <SessionPanel title="analysis in progress">
              <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
                <Loader2 className="h-10 w-10 animate-spin text-lime-500" />
                <h2 className="mt-4 text-lg font-semibold text-stone-900 dark:text-stone-50">Preparing your results</h2>
                <p className="mt-2 max-w-md text-sm text-stone-600 dark:text-stone-400">
                  The full question-and-answer transcript is being evaluated for communication, technical accuracy, strengths, and improvement areas.
                </p>
              </div>
            </SessionPanel>
          </motion.div>
        </div>
      </div>
    );
  }

  if (stage === "results" && feedback) {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-stone-50 dark:bg-stone-950">
        <SEO title="AI Mock Interview Results" noIndex />
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-1 w-1 bg-lime-400"></div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                    interview / results
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-2">
                  Your feedback is ready.
                </h1>
                <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
                  Review the summary below, then retry the same topic to practice again.
                </p>
              </div>
              <Button variant="ghost" mode="icon" size="sm" onClick={onBack} className="bg-stone-100 hover:bg-stone-200 dark:bg-white/5 dark:hover:bg-white/10 rounded-md">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6">
              <SessionPanel title="feedback summary">
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-white/5 p-4">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">topic</p>
                      <h2 className="mt-1 text-lg font-bold text-stone-900 dark:text-stone-50">{activeTopic.title}</h2>
                    </div>
                    <FeedbackStars rating={feedback.overallRating} />
                  </div>

                  {feedbackNote && (
                    <div className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-200">
                      {feedbackNote}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-950 p-4">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">communication</p>
                      <p className="mt-2 text-sm text-stone-700 dark:text-stone-300 leading-6">{feedback.communication}</p>
                    </div>
                    <div className="rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-950 p-4">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">technical accuracy</p>
                      <p className="mt-2 text-sm text-stone-700 dark:text-stone-300 leading-6">{feedback.technicalAccuracy}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-950 p-4">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">areas to improve</p>
                      <ul className="mt-3 space-y-2 text-sm text-stone-700 dark:text-stone-300">
                        {feedback.areasToImprove.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-400"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-950 p-4">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">strengths</p>
                      <ul className="mt-3 space-y-2 text-sm text-stone-700 dark:text-stone-300">
                        {feedback.strengths.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-900 dark:bg-stone-50"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Button variant="primary" onClick={retrySession} className="bg-lime-400 text-stone-950 hover:bg-lime-300">
                      <RotateCcw className="w-4 h-4" />
                      Retry same topic
                    </Button>
                    <Button variant="secondary" onClick={goToSetup} className="bg-stone-100 text-stone-900 hover:bg-stone-200 dark:bg-white/5 dark:text-stone-100 dark:hover:bg-white/10">
                      Change topic
                    </Button>
                  </div>
                </div>
              </SessionPanel>

              <SessionPanel title="session transcript">
                <div className="space-y-4">
                  {transcript.map((entry, index) => (
                    <div key={`${entry.question}-${index}`} className="rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-white/5 p-4">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">question {index + 1}</p>
                      <p className="mt-2 text-sm font-semibold text-stone-900 dark:text-stone-50 leading-6">{entry.question}</p>
                      <p className="mt-3 text-sm text-stone-600 dark:text-stone-400 leading-6 whitespace-pre-wrap">{entry.answer}</p>
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

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-stone-50 dark:bg-stone-950">
      <SEO title="AI Mock Interview" noIndex />
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-1 w-1 bg-lime-400"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  interview / ai
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-2">
                AI mock interview.
              </h1>
              <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
                Practice a focused question loop and get Gemini feedback when you finish.
              </p>
            </div>
            <Button variant="ghost" mode="icon" size="sm" onClick={onBack} className="bg-stone-100 hover:bg-stone-200 dark:bg-white/5 dark:hover:bg-white/10 rounded-md">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6">
            <SessionPanel title={`question ${questionIndex + 1} of ${activeTopic.questions.length}`}>
              <div className="space-y-5">
                <div>
                  <div className="mb-3 flex items-center justify-between gap-3 text-xs text-stone-500 dark:text-stone-400">
                    <span className="font-mono uppercase tracking-widest">{activeTopic.title}</span>
                    <span>{progress}% complete</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-stone-100 dark:bg-white/10">
                    <div className="h-full rounded-full bg-lime-400 transition-all" style={{ width: `${progress}%` }} />
                  </div>
                </div>

                <div className="rounded-md border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-white/5 p-5">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-2">current question</p>
                  <p className="text-lg font-semibold leading-8 text-stone-900 dark:text-stone-50">{currentQuestion}</p>
                </div>

                {sessionError && (
                  <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-400/30 dark:bg-red-400/10 dark:text-red-200">
                    {sessionError}
                  </div>
                )}

                <div>
                  <label className="mb-2 block text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
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
                    className="resize-none rounded-md border-stone-200 bg-white text-stone-900 placeholder:text-stone-400 focus:border-lime-400 focus:ring-lime-400/20 dark:border-white/10 dark:bg-stone-950 dark:text-stone-50"
                    onKeyDown={(event) => {
                      if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
                        event.preventDefault();
                        void submitAnswer();
                      }
                    }}
                  />
                  <div className="mt-3 flex items-center justify-between gap-3 text-xs text-stone-500 dark:text-stone-400">
                    <span>Use Ctrl + Enter to submit quickly.</span>
                    <Button variant="primary" onClick={() => void submitAnswer()} disabled={!draftAnswer.trim()} className="bg-lime-400 text-stone-950 hover:bg-lime-300 disabled:opacity-50">
                      <Send className="w-4 h-4" />
                      Submit answer
                    </Button>
                  </div>
                </div>
              </div>
            </SessionPanel>

            <SessionPanel title="transcript">
              <div className="space-y-4">
                {transcript.length === 0 ? (
                  <div className="rounded-md border border-dashed border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-white/5 p-5 text-sm text-stone-500 dark:text-stone-400">
                    Your answers will appear here as you move through the session.
                  </div>
                ) : (
                  transcript.map((entry, index) => (
                    <div key={`${entry.question}-${index}`} className="rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-950 p-4">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">question {index + 1}</div>
                      <p className="mt-2 text-sm font-semibold text-stone-900 dark:text-stone-50 leading-6">{entry.question}</p>
                      <div className="mt-3 border-l-2 border-lime-400 pl-3 text-sm text-stone-600 dark:text-stone-400 whitespace-pre-wrap leading-6">
                        {entry.answer}
                      </div>
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

export default function MockInterviewPage() {
  const [mode, setMode] = useState<InterviewMode>(null);

  // Expert mode
  if (mode === "expert") {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-stone-50 dark:bg-stone-950">
        <SEO title="Expert Mock Interview" noIndex />
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            {/* Editorial header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-1 w-1 bg-lime-400"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  interview / expert
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-2">
                Book an expert mock interview.
              </h1>
              <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
                Schedule a thirty-minute session with an industry expert. Pick a time that works for you below.
              </p>
            </div>

            {/* Calendly iframe card */}
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950/40">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 bg-lime-400"></div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                    calendly / 30 min slot
                  </span>
                </div>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ghostBtnCls}
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
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={limeBtnCls}>
                <Calendar className="w-4 h-4" />
                Open full calendar
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // AI mode (coming soon)
  if (mode === "ai") {
    return <AiMockInterview onBack={() => setMode(null)} />;
  }

  // Landing (choose mode)
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-stone-50 dark:bg-stone-950">
      <SEO title="Mock Interview" noIndex />
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          {/* Editorial header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-1 w-1 bg-lime-400"></div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                practice / mock interview
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-2">
              Practice your next interview.
            </h1>
            <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
              Pick your interview style and start practicing. AI for anytime reps, an expert for real feedback.
            </p>
          </div>

          {/* Hero tile */}
          <div className="mb-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-md bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0">
              <Video className="w-5 h-5 text-stone-700 dark:text-stone-300" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-0.5">
                how it works
              </p>
              <p className="text-sm text-stone-700 dark:text-stone-300">
                Choose a mode, run the session, walk away with specific feedback you can act on.
              </p>
            </div>
          </div>

          {/* Options grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-l border-stone-200 dark:border-white/10">
            {OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setMode(opt.id)}
                className="group relative flex flex-col gap-3 p-6 text-left transition-colors border-r border-b border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 hover:bg-stone-900 dark:hover:bg-stone-50 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 group-hover:text-lime-400">
                    / {opt.kicker}
                  </span>
                  <div className="w-8 h-8 rounded-md bg-stone-100 dark:bg-white/5 group-hover:bg-stone-50 dark:group-hover:bg-white/10 flex items-center justify-center transition-colors">
                    <opt.icon className="w-4 h-4 text-stone-700 dark:text-stone-300 group-hover:text-lime-600 dark:group-hover:text-lime-400" />
                  </div>
                </div>
                <h3 className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-50 group-hover:text-stone-50 dark:group-hover:text-stone-900">
                  {opt.title}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 group-hover:text-stone-300 dark:group-hover:text-stone-700 line-clamp-3">
                  {opt.description}
                </p>
                <div className="flex flex-wrap items-center gap-1.5 mt-auto pt-2">
                  {opt.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-widest bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-400 group-hover:bg-white/10 dark:group-hover:bg-stone-900/10 group-hover:text-stone-50 dark:group-hover:text-stone-900"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>

          {/* Footer hint strip */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-l border-stone-200 dark:border-white/10">
            {[
              { icon: Clock, label: "30 min", sub: "typical session length" },
              { icon: MessageSquare, label: "feedback", sub: "what to improve, clearly" },
              { icon: Calendar, label: "flexible", sub: "ai now, expert on your schedule" },
            ].map((f) => (
              <div
                key={f.label}
                className="flex items-start gap-3 p-4 border-r border-b border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900"
              >
                <div className="w-8 h-8 rounded-md bg-stone-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                  <f.icon className="w-4 h-4 text-stone-700 dark:text-stone-300" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-400">
                    {f.label}
                  </span>
                  <span className="text-xs text-stone-600 dark:text-stone-400">{f.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
