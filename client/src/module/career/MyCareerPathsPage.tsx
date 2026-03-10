import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, ArrowRight, TrendingUp, Zap, CheckCircle2, Clock, GraduationCap, Database, Globe, Monitor, Cpu, PencilRuler, Wrench, BookOpen, HelpCircle, ChevronDown, ChevronRight, ChevronLeft, Shuffle, StickyNote, ExternalLink, Check } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import api from "../../lib/axios";
import { queryKeys } from "../../lib/query-keys";
import type { StudentCareerEnrollment } from "../../lib/types";
import { LoadingScreen } from "../../components/LoadingScreen";
import { getTopicsForSkill } from "./components/skillTopics";
import { getQuestionsForSkill, shuffleArray } from "./components/skillQuestions";

const CATEGORY_RING: Record<string, string> = {
  ENGINEERING: "stroke-blue-500",
  DATA:        "stroke-purple-500",
  DESIGN:      "stroke-pink-500",
  PRODUCT:     "stroke-orange-500",
  MARKETING:   "stroke-green-500",
  DEVOPS:      "stroke-cyan-500",
  SECURITY:    "stroke-red-500",
  OTHER:       "stroke-gray-400",
};

function CircularProgress({ progress, category }: { progress: number; category: string }) {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const offset = circ - (progress / 100) * circ;
  const ringClass = CATEGORY_RING[category] ?? "stroke-gray-400";

  return (
    <div className="relative w-16 h-16 shrink-0">
      <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r={r} fill="none" stroke="#f3f4f6" className="dark:stroke-gray-700" strokeWidth="5" />
        <circle
          cx="32" cy="32" r={r}
          fill="none"
          className={ringClass}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={`${circ}`}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-800 dark:text-gray-200">
        {progress}%
      </span>
    </div>
  );
}

const CORE_SUBJECTS = [
  { key: "dbms", label: "DBMS", description: "Database concepts, SQL, normalization & transactions", icon: Database, iconColor: "text-indigo-500" },
  { key: "computer network", label: "Computer Networks", description: "OSI model, TCP/IP, routing & network protocols", icon: Globe, iconColor: "text-violet-500" },
  { key: "computer fundamental", label: "Computer Fundamentals", description: "Architecture, number systems, memory & logic gates", icon: Monitor, iconColor: "text-emerald-500" },
  { key: "operating system", label: "Operating Systems", description: "Processes, scheduling, memory management & deadlocks", icon: Cpu, iconColor: "text-sky-500" },
  { key: "hld", label: "High-Level Design", description: "System design, scalability, caching & distributed systems", icon: PencilRuler, iconColor: "text-rose-500" },
  { key: "lld", label: "Low-Level Design", description: "SOLID principles, design patterns & OOP concepts", icon: Wrench, iconColor: "text-teal-500" },
];

const CORE_SUBJECT_RESOURCES: Record<string, { label: string; url: string }[]> = {
  dbms: [
    { label: "GeeksforGeeks DBMS", url: "https://www.geeksforgeeks.org/dbms/" },
    { label: "JavaTpoint DBMS", url: "https://www.javatpoint.com/dbms-tutorial" },
    { label: "Gate Smashers (YouTube)", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y" },
  ],
  "computer network": [
    { label: "GeeksforGeeks CN", url: "https://www.geeksforgeeks.org/computer-network-tutorials/" },
    { label: "Gate Smashers CN (YouTube)", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_" },
    { label: "Computer Networking Course", url: "https://www.youtube.com/watch?v=qiQR5rTSshw" },
  ],
  "computer fundamental": [
    { label: "GeeksforGeeks COA", url: "https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/" },
    { label: "Gate Smashers COA (YouTube)", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX" },
    { label: "Neso Academy (YouTube)", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q" },
  ],
  "operating system": [
    { label: "GeeksforGeeks OS", url: "https://www.geeksforgeeks.org/operating-systems/" },
    { label: "Gate Smashers OS (YouTube)", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p" },
    { label: "Neso Academy OS (YouTube)", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAdc0cPiS" },
  ],
  hld: [
    { label: "System Design Primer (GitHub)", url: "https://github.com/donnemartin/system-design-primer" },
    { label: "Gaurav Sen (YouTube)", url: "https://www.youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX" },
    { label: "ByteByteGo", url: "https://bytebytego.com/" },
  ],
  lld: [
    { label: "Refactoring Guru - Design Patterns", url: "https://refactoring.guru/design-patterns" },
    { label: "Head First Design Patterns", url: "https://www.oreilly.com/library/view/head-first-design/9781492077992/" },
    { label: "Sudocode LLD (YouTube)", url: "https://www.youtube.com/playlist?list=PLTCrU9sGybupCpY20eked6blbHI4zZ55k" },
  ],
};

export default function MyCareerPathsPage() {
  const { data: paths = [], isLoading: loading } = useQuery({
    queryKey: queryKeys.careers.myPaths(),
    queryFn: () => api.get("/careers/my-paths").then((res) => res.data.paths as StudentCareerEnrollment[]),
  });

  const completed = paths.filter((p) => p.progress === 100).length;
  const inProgress = paths.filter((p) => p.progress > 0 && p.progress < 100).length;

  if (loading) return <LoadingScreen />;

  return (
    <div className="relative pb-12">
      {/* Atmospheric background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-linear-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/20 dark:to-violet-900/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-32 -left-32 w-125 h-125 bg-linear-to-tr from-slate-100 to-blue-100 dark:from-slate-900/20 dark:to-blue-900/20 rounded-full blur-3xl opacity-40" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-10"
      >
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white mb-3">
          My <span className="text-gradient-accent">Career Paths</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-md mx-auto">
          Track your learning journey and skill progress
        </p>
      </motion.div>

      {/* Stats */}
      {paths.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          {[
            { icon: Zap, value: paths.length, label: "Enrolled", iconColor: "text-indigo-500" },
            { icon: TrendingUp, value: inProgress, label: "In Progress", iconColor: "text-violet-500" },
            { icon: CheckCircle2, value: completed, label: "Completed", iconColor: "text-emerald-500" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 text-center"
            >
              <stat.icon className={`w-6 h-6 ${stat.iconColor} mx-auto mb-3`} />
              <p className="font-display text-2xl font-bold text-gray-950 dark:text-white">{stat.value}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mt-0.5">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Explore button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex justify-end mb-6"
      >
        <Link
          to="/careers"
          className="flex items-center gap-2 px-5 py-2.5 bg-gray-950 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors no-underline dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
        >
          <Compass className="w-4 h-4" /> Explore More
        </Link>
      </motion.div>

      {/* Path list */}
      {paths.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center py-20 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800"
        >
          <Compass className="w-10 h-10 text-indigo-500 mx-auto mb-4" />
          <h3 className="font-display text-lg font-bold text-gray-950 dark:text-white mb-2">No paths yet</h3>
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-6 max-w-sm mx-auto">
            Start a career path to track your skill progress and learning journey.
          </p>
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-950 text-white text-sm font-semibold rounded-2xl hover:bg-gray-800 transition-all no-underline dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
          >
            Explore Career Paths <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      ) : (
        <div className="space-y-3">
          {paths.map((path, i) => {
            const isCompleted = path.progress === 100;

            return (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.05 }}
              >
                <Link
                  to={`/student/careers/${path.career.slug}`}
                  className="group flex items-center gap-5 bg-white dark:bg-gray-900 px-6 py-5 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300 no-underline"
                >
                  <CircularProgress progress={path.progress} category={path.career.category} />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-base font-semibold text-gray-950 dark:text-white truncate">
                        {path.career.title}
                      </h3>
                      {isCompleted && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400 shrink-0">
                          Complete
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-2.5">
                      {path.completedSkills} / {path.totalSkills} skills completed
                    </p>

                    {/* Progress bar */}
                    <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${path.progress}%` }}
                        transition={{ duration: 0.6, delay: 0.15 + i * 0.05 }}
                        className={`h-full rounded-full ${
                          isCompleted ? "bg-green-500" : path.progress > 0 ? "bg-gray-950 dark:bg-white" : "bg-gray-200 dark:bg-gray-700"
                        }`}
                      />
                    </div>

                    <div className="flex items-center gap-3 mt-2.5 text-[11px] text-gray-400 dark:text-gray-500 font-medium">
                      <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-gray-500 dark:text-gray-400">{path.career.category}</span>
                      <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-gray-500 dark:text-gray-400">{path.career.difficulty}</span>
                      {path.career._count && (
                        <span className="flex items-center gap-1 text-gray-400 dark:text-gray-500">
                          <Clock className="w-3 h-3" />
                          {path.career._count.phases} phases
                        </span>
                      )}
                    </div>
                  </div>

                  <ArrowRight className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Core Subject Interview Preparation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mt-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="w-6 h-6 text-violet-500" />
          <div>
            <h2 className="font-display text-xl font-bold text-gray-950 dark:text-white">Core Subject Interview Prep</h2>
            <p className="text-sm text-gray-500 dark:text-gray-500">Master fundamentals for technical interviews</p>
          </div>
        </div>

        <div className="space-y-3">
          {CORE_SUBJECTS.map((subject, i) => (
            <CoreSubjectCard key={subject.key} subject={subject} index={i} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function CoreSubjectCard({ subject, index }: { subject: typeof CORE_SUBJECTS[number]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const topics = getTopicsForSkill(subject.key);
  const allQuestions = getQuestionsForSkill(subject.key);
  const [activeTab, setActiveTab] = useState<"topics" | "questions" | "notes">("topics");
  const resources = CORE_SUBJECT_RESOURCES[subject.key] ?? [];

  // Topic completion (localStorage)
  const storageKey = `core-topics-${subject.key}`;
  const [completedTopics, setCompletedTopics] = useState<Set<number>>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? new Set(JSON.parse(saved) as number[]) : new Set();
    } catch { return new Set(); }
  });

  const toggleTopic = (idx: number) => {
    setCompletedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx); else next.add(idx);
      localStorage.setItem(storageKey, JSON.stringify([...next]));
      return next;
    });
  };

  // Flashcard state
  const [shuffledQuestions, setShuffledQuestions] = useState(() => shuffleArray(allQuestions));
  const [cardIndex, setCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [slideDir, setSlideDir] = useState(1);

  const goNext = () => {
    setShowAnswer(false);
    setSlideDir(1);
    setCardIndex((i) => (i + 1) % shuffledQuestions.length);
  };
  const goPrev = () => {
    setShowAnswer(false);
    setSlideDir(-1);
    setCardIndex((i) => (i - 1 + shuffledQuestions.length) % shuffledQuestions.length);
  };
  const reshuffleCards = () => {
    setShuffledQuestions(shuffleArray(allQuestions));
    setCardIndex(0);
    setShowAnswer(false);
  };

  // Notes (localStorage)
  const notesKey = `core-notes-${subject.key}`;
  const [notes, setNotes] = useState(() => localStorage.getItem(notesKey) ?? "");
  const saveNotes = (val: string) => {
    setNotes(val);
    localStorage.setItem(notesKey, val);
  };

  const Icon = subject.icon;
  const topicPct = topics.length > 0 ? Math.round((completedTopics.size / topics.length) * 100) : 0;
  const currentQ = shuffledQuestions[cardIndex];

  const TABS: { id: typeof activeTab; label: string; icon: React.ReactNode }[] = [
    { id: "topics", label: `Topics (${topics.length})`, icon: <BookOpen className="w-3.5 h-3.5" /> },
    { id: "questions", label: `Interview (${allQuestions.length})`, icon: <HelpCircle className="w-3.5 h-3.5" /> },
    { id: "notes", label: "Notes", icon: <StickyNote className="w-3.5 h-3.5" /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 + index * 0.05 }}
    >
      <button
        onClick={() => setExpanded((o) => !o)}
        className="group w-full flex items-center gap-5 bg-white dark:bg-gray-900 px-6 py-5 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300 text-left"
      >
        <Icon className={`w-6 h-6 ${subject.iconColor} shrink-0`} />

        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-gray-950 dark:text-white truncate">
            {subject.label}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5 truncate">
            {subject.description}
          </p>
          <div className="flex items-center gap-3 mt-2 text-[11px] text-gray-400 dark:text-gray-500 font-medium">
            <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-gray-500 dark:text-gray-400">
              {completedTopics.size}/{topics.length} topics
            </span>
            <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-gray-500 dark:text-gray-400">
              {allQuestions.length} questions
            </span>
          </div>
        </div>

        {expanded
          ? <ChevronDown className="w-5 h-5 text-gray-300 dark:text-gray-600 shrink-0" />
          : <ChevronRight className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 group-hover:translate-x-0.5 transition-all shrink-0" />
        }
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="mt-2 bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm">
              {/* Pill Tabs */}
              <div className="flex gap-1 p-1.5 mx-4 mt-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg transition-all ${
                      activeTab === tab.id
                        ? "bg-white dark:bg-gray-900 text-gray-950 dark:text-white shadow-sm"
                        : "text-gray-500 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
                    }`}
                  >
                    {tab.icon} {tab.label}
                  </button>
                ))}
              </div>

              {/* Topics Tab */}
              {activeTab === "topics" && (
                <div className="p-4">
                  {/* Progress bar */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${topicPct}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className={`h-full rounded-full ${topicPct === 100 ? "bg-green-500" : topicPct > 0 ? "bg-indigo-500" : "bg-gray-200 dark:bg-gray-700"}`}
                      />
                    </div>
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400 tabular-nums whitespace-nowrap">
                      {completedTopics.size}/{topics.length}
                    </span>
                  </div>

                  <div className="space-y-1">
                    {topics.map((topic, i) => {
                      const done = completedTopics.has(i);
                      return (
                        <button
                          key={i}
                          onClick={() => toggleTopic(i)}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                            done
                              ? "bg-green-50/60 dark:bg-green-900/10 hover:bg-green-50 dark:hover:bg-green-900/20"
                              : "hover:bg-gray-50 dark:hover:bg-gray-800/60"
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            done
                              ? "bg-green-500 text-white"
                              : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500"
                          }`}>
                            {done ? (
                              <Check className="w-3.5 h-3.5" />
                            ) : (
                              <span className="text-[10px] font-bold">{i + 1}</span>
                            )}
                          </div>
                          <span className={`text-sm leading-relaxed transition-colors ${
                            done ? "text-green-700 dark:text-green-400 line-through decoration-green-300 dark:decoration-green-700" : "text-gray-700 dark:text-gray-300"
                          }`}>
                            {topic}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Interview Questions - Flashcard */}
              {activeTab === "questions" && currentQ && (
                <div className="p-5">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-gray-400 dark:text-gray-500 tabular-nums">
                      {cardIndex + 1} / {shuffledQuestions.length}
                    </span>
                    <button
                      onClick={reshuffleCards}
                      className="flex items-center gap-1.5 text-xs font-medium text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                    >
                      <Shuffle className="w-3.5 h-3.5" /> Shuffle
                    </button>
                  </div>

                  {/* Flashcard */}
                  <div className="relative min-h-48 overflow-hidden">
                    <AnimatePresence mode="wait" custom={slideDir}>
                      <motion.div
                        key={cardIndex}
                        custom={slideDir}
                        initial={{ x: slideDir * 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: slideDir * -300, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-5"
                      >
                        <p className="text-sm font-semibold text-gray-900 dark:text-white leading-relaxed mb-4">
                          <span className="text-indigo-500 font-bold mr-2">Q.</span>
                          {currentQ.question}
                        </p>

                        {!showAnswer ? (
                          <button
                            onClick={() => setShowAnswer(true)}
                            className="w-full py-3 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                          >
                            Show Answer
                          </button>
                        ) : (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                <span className="text-green-600 dark:text-green-400 font-bold mr-2">A.</span>
                                {currentQ.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-4">
                    <button
                      onClick={goPrev}
                      className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" /> Prev
                    </button>
                    <div className="flex gap-1">
                      {shuffledQuestions.slice(
                        Math.max(0, cardIndex - 2),
                        Math.min(shuffledQuestions.length, cardIndex + 3)
                      ).map((_, i) => {
                        const realIdx = Math.max(0, cardIndex - 2) + i;
                        return (
                          <div
                            key={realIdx}
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${
                              realIdx === cardIndex ? "bg-gray-950 dark:bg-white" : "bg-gray-200 dark:bg-gray-700"
                            }`}
                          />
                        );
                      })}
                    </div>
                    <button
                      onClick={goNext}
                      className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-white dark:text-gray-950 bg-gray-950 dark:bg-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                    >
                      Next <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Notes Tab */}
              {activeTab === "notes" && (
                <div className="p-5">
                  <textarea
                    value={notes}
                    onChange={(e) => saveNotes(e.target.value)}
                    placeholder={`Write your ${subject.label} notes here... They're saved automatically in your browser.`}
                    rows={8}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-950/10 focus:border-gray-400 dark:focus:ring-white/10 dark:focus:border-gray-500 transition-all resize-none placeholder-gray-400 dark:placeholder-gray-500 bg-gray-50/50 dark:bg-gray-800/50 dark:text-white leading-relaxed"
                  />
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-2">
                    Auto-saved to your browser &middot; {notes.length > 0 ? `${notes.length} characters` : "Empty"}
                  </p>
                </div>
              )}

              {/* Resources */}
              {resources.length > 0 && (
                <div className="px-5 pb-4 pt-1 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-2 mb-2">
                    <ExternalLink className="w-3 h-3 text-gray-400 dark:text-gray-500" />
                    <span className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Resources</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {resources.map((r) => (
                      <a
                        key={r.url}
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1.5 rounded-lg border border-indigo-100 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors no-underline"
                      >
                        {r.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
