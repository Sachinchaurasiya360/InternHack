import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  Check,
  BookOpen,
  Video,
  FileText,
  Wrench,
  ExternalLink,
  Lightbulb,
  HelpCircle,
  Eye,
  EyeOff,
  Shuffle,
  Rocket,
  Clock,
  GraduationCap,
} from "lucide-react";
import type { CareerPhase, CareerSkill } from "../../../lib/types";
import { getTopicsForSkill } from "./skillTopics";
import { getProjectsForSkill } from "./skillProjects";
import { getQuestionsForSkill, shuffleArray } from "./skillQuestions";

const CORE_SUBJECTS = [
  { key: "dbms", label: "DBMS", icon: "🗄️" },
  { key: "computer network", label: "Computer Networks", icon: "🌐" },
  { key: "computer fundamental", label: "Computer Fundamentals", icon: "💻" },
  { key: "operating system", label: "Operating Systems", icon: "⚙️" },
  { key: "hld", label: "High-Level Design (HLD)", icon: "🏗️" },
  { key: "lld", label: "Low-Level Design (LLD)", icon: "🔧" },
  { key: "aptitude", label: "Aptitude", icon: "🧮" },
];

const RESOURCE_ICONS: Record<string, React.ReactNode> = {
  ARTICLE: <FileText className="w-4 h-4" />,
  VIDEO: <Video className="w-4 h-4" />,
  COURSE: <BookOpen className="w-4 h-4" />,
  BOOK: <BookOpen className="w-4 h-4" />,
  DOCUMENTATION: <FileText className="w-4 h-4" />,
  TUTORIAL: <BookOpen className="w-4 h-4" />,
};

interface RoadmapTimelineProps {
  phases: CareerPhase[];
  interactive?: boolean;
  onToggleSkill?: (skillId: number) => void;
}

export default function RoadmapTimeline({ phases, interactive = false, onToggleSkill }: RoadmapTimelineProps) {
  const [expandedPhases, setExpandedPhases] = useState<Set<number>>(() => {
    const first = phases[0];
    return first ? new Set([first.id]) : new Set();
  });

  const togglePhase = (phaseId: number) => {
    setExpandedPhases((prev) => {
      const next = new Set(prev);
      if (next.has(phaseId)) next.delete(phaseId);
      else next.add(phaseId);
      return next;
    });
  };

  const getPhaseProgress = (phase: CareerPhase) => {
    let totalTopics = 0;
    let completedTopics = 0;
    const completedSkills = phase.skills.filter((s) => s.completed).length;

    for (const skill of phase.skills) {
      const topics = getTopicsForSkill(skill.name);
      totalTopics += topics.length;
      if (interactive) {
        try {
          const saved = localStorage.getItem(`career-topics-${skill.id}`);
          if (saved) completedTopics += (JSON.parse(saved) as number[]).length;
        } catch { /* ignore */ }
      }
    }

    return { completedSkills, totalSkills: phase.skills.length, totalTopics, completedTopics };
  };

  return (
    <div className="space-y-6">
      {phases.map((phase, index) => {
        const isExpanded = expandedPhases.has(phase.id);
        const progress = getPhaseProgress(phase);
        const phaseComplete = interactive && progress.completedSkills === progress.totalSkills && progress.totalSkills > 0;
        const pct = interactive && progress.totalTopics > 0
          ? Math.round((progress.completedTopics / progress.totalTopics) * 100)
          : 0;

        return (
          <div key={phase.id}>
            {/* Phase Header */}
            <button
              onClick={() => togglePhase(phase.id)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors group border border-gray-100"
            >
              <div className="flex items-center gap-4 min-w-0">
                <span className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 ${
                  phaseComplete
                    ? "bg-green-500 text-white"
                    : "bg-white border border-gray-200 text-gray-600 shadow-sm"
                }`}>
                  {phaseComplete ? <Check className="w-4 h-4" /> : index + 1}
                </span>
                <div className="text-left min-w-0">
                  <h3 className="text-base font-semibold text-gray-900 truncate">{phase.title}</h3>
                  <div className="flex items-center gap-3 mt-0.5">
                    {phase.durationWeeks && (
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock className="w-3 h-3" /> {phase.durationWeeks} weeks
                      </span>
                    )}
                    <span className="text-xs text-gray-400">{phase.skills.length} skills</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                {interactive && (
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden hidden sm:block">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${phaseComplete ? "bg-green-500" : pct > 0 ? "bg-violet-500" : "bg-gray-200"}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className={`text-sm font-semibold tabular-nums ${
                      phaseComplete ? "text-green-600" : "text-gray-400"
                    }`}>
                      {progress.completedTopics}/{progress.totalTopics}
                    </span>
                  </div>
                )}
                {isExpanded
                  ? <ChevronDown className="w-5 h-5 text-gray-400" />
                  : <ChevronRight className="w-5 h-5 text-gray-400" />
                }
              </div>
            </button>

            {/* Phase Content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                    {phase.description && (
                      <p className="px-6 pt-5 text-sm text-gray-500 leading-relaxed">{phase.description}</p>
                    )}

                    {/* Skills List */}
                    <div className="divide-y divide-gray-50 mt-2">
                      {phase.skills.map((skill, skillIdx) => (
                        <SkillItem
                          key={skill.id}
                          skill={skill}
                          interactive={interactive}
                          onToggle={onToggleSkill}
                          skillIndex={skillIdx}
                        />
                      ))}
                    </div>

                    {/* Resources */}
                    {phase.resources.length > 0 && (
                      <div className="border-t border-gray-100 px-6 py-5">
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          Resources
                        </h4>
                        <div className="space-y-1.5">
                          {phase.resources.map((resource) => (
                            <a
                              key={resource.id}
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 text-sm text-gray-600 hover:text-black no-underline px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group"
                            >
                              <span className="text-gray-400 group-hover:text-black shrink-0">
                                {RESOURCE_ICONS[resource.type] ?? <FileText className="w-4 h-4" />}
                              </span>
                              <span className="flex-1 font-medium">{resource.title}</span>
                              <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${
                                resource.free ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-500"
                              }`}>
                                {resource.free ? "Free" : "Paid"}
                              </span>
                              <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-500" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tools */}
                    {phase.tools.length > 0 && (
                      <div className="border-t border-gray-100 px-6 py-5">
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Wrench className="w-4 h-4" />
                          Tools & Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {phase.tools.map((tool) => (
                            <span
                              key={tool.id}
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-gray-50 border border-gray-100 text-gray-600 rounded-xl text-sm font-medium"
                            >
                              {tool.url ? (
                                <a href={tool.url} target="_blank" rel="noopener noreferrer" className="no-underline text-gray-600 hover:text-black">
                                  {tool.name}
                                </a>
                              ) : (
                                tool.name
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      {/* ── Core Subject Interview Preparation ─────────────────────────── */}
      <CoreSubjectSection />
    </div>
  );
}

// ── Skill Item ────────────────────────────────────────────────────────────────

function SkillItem({
  skill,
  interactive,
  onToggle,
  skillIndex,
}: {
  skill: CareerSkill;
  interactive: boolean;
  onToggle?: (skillId: number) => void;
  skillIndex: number;
}) {
  const topics = getTopicsForSkill(skill.name);
  const projects = getProjectsForSkill(skill.name);
  const allQuestions = getQuestionsForSkill(skill.name);
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<"topics" | "projects" | "interview">("topics");

  const storageKey = `career-topics-${skill.id}`;
  const [completedTopics, setCompletedTopics] = useState<Set<number>>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? new Set(JSON.parse(saved) as number[]) : new Set();
    } catch {
      return new Set();
    }
  });

  const [questions, setQuestions] = useState(() => shuffleArray(allQuestions).slice(0, 3));
  const [revealedAnswers, setRevealedAnswers] = useState<Set<number>>(new Set());

  const reshuffleQuestions = () => {
    setQuestions(shuffleArray(allQuestions).slice(0, 3));
    setRevealedAnswers(new Set());
  };

  const toggleAnswer = (idx: number) => {
    setRevealedAnswers((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx); else next.add(idx);
      return next;
    });
  };

  const toggleTopic = (i: number) => {
    setCompletedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      try {
        localStorage.setItem(storageKey, JSON.stringify([...next]));
      } catch { /* ignore */ }
      return next;
    });
  };

  const getResourceUrl = (topicText: string) => {
    const query = `${topicText} ${skill.name} tutorial`;
    return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  };

  const levelBadge = {
    BEGINNER: { cls: "bg-green-50 text-green-600 border-green-100", label: "Beginner" },
    INTERMEDIATE: { cls: "bg-amber-50 text-amber-600 border-amber-100", label: "Intermediate" },
    ADVANCED: { cls: "bg-red-50 text-red-600 border-red-100", label: "Advanced" },
  }[skill.level] ?? { cls: "bg-gray-50 text-gray-500 border-gray-100", label: skill.level?.toLowerCase() };

  const allTopicsDone = topics.length > 0 && completedTopics.size === topics.length;
  const hasProgress = completedTopics.size > 0;
  const hasContent = topics.length > 0 || projects.length > 0 || allQuestions.length > 0;

  const statusLabel = useMemo(() => {
    if (skill.completed) return { text: "Completed", cls: "bg-green-50 text-green-600 border-green-100" };
    if (allTopicsDone) return { text: "Topics Done", cls: "bg-green-50 text-green-600 border-green-100" };
    if (hasProgress) return { text: "In Progress", cls: "bg-violet-50 text-violet-600 border-violet-100" };
    return null;
  }, [skill.completed, allTopicsDone, hasProgress]);

  return (
    <div>
      {/* Skill header row */}
      <div className="flex items-center gap-3 px-6 py-4 hover:bg-gray-50/60 transition-colors">
        {/* Skill completion checkbox / index */}
        {interactive ? (
          <button
            onClick={() => onToggle?.(skill.id)}
            className="shrink-0 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all hover:scale-105"
            style={{
              borderColor: skill.completed ? "#22c55e" : "#d1d5db",
              backgroundColor: skill.completed ? "#22c55e" : "transparent",
            }}
            title={skill.completed ? "Mark incomplete" : "Mark complete"}
          >
            {skill.completed && <Check className="w-3.5 h-3.5 text-white" />}
          </button>
        ) : (
          <span className="shrink-0 w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
            {skillIndex + 1}
          </span>
        )}

        {/* Skill name — click to expand */}
        <button
          onClick={() => hasContent && setExpanded((o) => !o)}
          disabled={!hasContent}
          className="flex-1 flex items-center justify-between gap-3 text-left min-w-0"
        >
          <span className={`text-base font-medium transition-colors ${
            skill.completed ? "text-gray-400 line-through" : "text-gray-800"
          }`}>
            {skill.name}
          </span>

          <div className="flex items-center gap-2.5 shrink-0">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${levelBadge.cls}`}>
              {levelBadge.label}
            </span>
            {statusLabel && (
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${statusLabel.cls}`}>
                {statusLabel.text}
              </span>
            )}
            {topics.length > 0 && (
              <span className={`text-xs font-semibold tabular-nums ${
                allTopicsDone ? "text-green-600" : hasProgress ? "text-violet-600" : "text-gray-400"
              }`}>
                {completedTopics.size}/{topics.length}
              </span>
            )}
            {hasContent && (
              expanded
                ? <ChevronDown className="w-4 h-4 text-gray-400" />
                : <ChevronRight className="w-4 h-4 text-gray-400" />
            )}
          </div>
        </button>
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && hasContent && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mx-6 mb-4 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-gray-100">
                {topics.length > 0 && (
                  <button
                    onClick={() => setActiveTab("topics")}
                    className={`flex items-center gap-1.5 px-5 py-3 text-sm font-medium transition-colors ${
                      activeTab === "topics"
                        ? "text-gray-900 border-b-2 border-gray-900 bg-white"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Topics ({topics.length})
                  </button>
                )}
                {projects.length > 0 && (
                  <button
                    onClick={() => setActiveTab("projects")}
                    className={`flex items-center gap-1.5 px-5 py-3 text-sm font-medium transition-colors ${
                      activeTab === "projects"
                        ? "text-gray-900 border-b-2 border-gray-900 bg-white"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    <Rocket className="w-3.5 h-3.5" />
                    Projects ({projects.length})
                  </button>
                )}
                {allQuestions.length > 0 && (
                  <button
                    onClick={() => setActiveTab("interview")}
                    className={`flex items-center gap-1.5 px-5 py-3 text-sm font-medium transition-colors ${
                      activeTab === "interview"
                        ? "text-gray-900 border-b-2 border-gray-900 bg-white"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    Interview Prep
                  </button>
                )}
              </div>

              {/* Topics Tab */}
              {activeTab === "topics" && topics.length > 0 && (
                <div>
                  {/* Progress bar */}
                  <div className="h-1 bg-gray-100">
                    <div
                      className={`h-full transition-all duration-300 ${allTopicsDone ? "bg-green-400" : "bg-violet-400"}`}
                      style={{ width: `${topics.length > 0 ? (completedTopics.size / topics.length) * 100 : 0}%` }}
                    />
                  </div>

                  <div className="divide-y divide-gray-100/80">
                    {topics.map((topic, i) => {
                      const done = completedTopics.has(i);
                      return (
                        <div key={i} className="flex items-center gap-4 w-full px-5 py-3.5">
                          <button
                            onClick={() => toggleTopic(i)}
                            className="shrink-0 hover:scale-105 transition-transform"
                            title={done ? "Mark incomplete" : "Mark complete"}
                          >
                            {done ? (
                              <span className="w-5 h-5 rounded-md flex items-center justify-center bg-green-500">
                                <Check className="w-3 h-3 text-white" />
                              </span>
                            ) : (
                              <span className="w-5 h-5 rounded-md border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors" />
                            )}
                          </button>
                          <span className={`flex-1 text-sm leading-relaxed transition-colors ${
                            done ? "text-gray-400 line-through" : "text-gray-700"
                          }`}>
                            {topic}
                          </span>
                          <a
                            href={getResourceUrl(topic.split("—")[0].trim())}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className={`flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-lg border shrink-0 no-underline transition-colors ${
                              done
                                ? "bg-green-50 text-green-600 border-green-100 hover:bg-green-100"
                                : "bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-100"
                            }`}
                          >
                            {done ? (
                              <>
                                <Check className="w-3 h-3" />
                                Done
                              </>
                            ) : (
                              <>
                                <ExternalLink className="w-3 h-3" />
                                Resources
                              </>
                            )}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Projects Tab */}
              {activeTab === "projects" && projects.length > 0 && (
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Mini Projects</span>
                  </div>
                  {projects.map((project, i) => (
                    <div key={i} className="bg-white rounded-xl border border-gray-100 p-4">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h5 className="text-sm font-semibold text-gray-900">{project.title}</h5>
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-lg border shrink-0 ${
                          project.difficulty === "Easy"
                            ? "bg-green-50 text-green-600 border-green-100"
                            : project.difficulty === "Medium"
                            ? "bg-amber-50 text-amber-600 border-amber-100"
                            : "bg-red-50 text-red-600 border-red-100"
                        }`}>
                          {project.difficulty}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">{project.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Interview Prep Tab */}
              {activeTab === "interview" && allQuestions.length > 0 && (
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-indigo-500" />
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Interview Questions</span>
                    </div>
                    <button
                      onClick={reshuffleQuestions}
                      className="flex items-center gap-1.5 text-xs font-medium text-indigo-500 hover:text-indigo-700 transition-colors"
                    >
                      <Shuffle className="w-3.5 h-3.5" />
                      Shuffle
                    </button>
                  </div>
                  {questions.map((q, i) => (
                    <div key={`${q.question}-${i}`} className="bg-white rounded-xl border border-gray-100 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm font-medium text-gray-900 leading-relaxed flex-1">
                          <span className="text-indigo-500 font-semibold mr-1.5">Q{i + 1}.</span>
                          {q.question}
                        </p>
                        <button
                          onClick={() => toggleAnswer(i)}
                          className="shrink-0 flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-gray-700 transition-colors mt-0.5"
                        >
                          {revealedAnswers.has(i) ? (
                            <><EyeOff className="w-3.5 h-3.5" /> Hide</>
                          ) : (
                            <><Eye className="w-3.5 h-3.5" /> Show</>
                          )}
                        </button>
                      </div>
                      <AnimatePresence>
                        {revealedAnswers.has(i) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="overflow-hidden"
                          >
                            <p className="text-sm text-gray-500 leading-relaxed mt-3 pt-3 border-t border-gray-100">
                              {q.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                  {allQuestions.length > 3 && (
                    <p className="text-xs text-gray-400 text-center pt-1">
                      Showing 3 of {allQuestions.length} questions. Click shuffle for new ones.
                    </p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Core Subject Interview Preparation ──────────────────────────────────────

function CoreSubjectSection() {
  const [expanded, setExpanded] = useState(false);
  const [activeSubject, setActiveSubject] = useState(CORE_SUBJECTS[0].key);

  return (
    <div>
      <button
        onClick={() => setExpanded((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 rounded-2xl bg-linear-to-r from-indigo-50 to-violet-50 hover:from-indigo-100 hover:to-violet-100 transition-colors group border border-indigo-100"
      >
        <div className="flex items-center gap-4 min-w-0">
          <span className="w-9 h-9 rounded-xl bg-indigo-500 text-white flex items-center justify-center shrink-0">
            <GraduationCap className="w-5 h-5" />
          </span>
          <div className="text-left min-w-0">
            <h3 className="text-base font-semibold text-gray-900">Core Subject Interview Preparation</h3>
            <span className="text-xs text-gray-500 mt-0.5 block">DBMS, Computer Networks, OS, HLD, LLD, Aptitude & more</span>
          </div>
        </div>
        <div className="shrink-0">
          {expanded
            ? <ChevronDown className="w-5 h-5 text-indigo-400" />
            : <ChevronRight className="w-5 h-5 text-indigo-400" />
          }
        </div>
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
            <div className="mt-3 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              {/* Subject Tabs */}
              <div className="flex flex-wrap gap-2 px-5 pt-5 pb-3">
                {CORE_SUBJECTS.map((sub) => (
                  <button
                    key={sub.key}
                    onClick={() => setActiveSubject(sub.key)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                      activeSubject === sub.key
                        ? "bg-indigo-500 text-white shadow-sm"
                        : "bg-gray-50 text-gray-600 border border-gray-100 hover:bg-gray-100"
                    }`}
                  >
                    <span>{sub.icon}</span>
                    {sub.label}
                  </button>
                ))}
              </div>

              {/* Active Subject Content */}
              {CORE_SUBJECTS.map((sub) =>
                activeSubject === sub.key ? (
                  <CoreSubjectContent key={sub.key} subjectKey={sub.key} label={sub.label} />
                ) : null
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CoreSubjectContent({ subjectKey, label }: { subjectKey: string; label: string }) {
  const topics = getTopicsForSkill(subjectKey);
  const projects = getProjectsForSkill(subjectKey);
  const allQuestions = getQuestionsForSkill(subjectKey);
  const [activeTab, setActiveTab] = useState<"topics" | "projects" | "interview">("interview");
  const [questions, setQuestions] = useState(() => shuffleArray(allQuestions).slice(0, 5));
  const [revealedAnswers, setRevealedAnswers] = useState<Set<number>>(new Set());

  const reshuffleQuestions = () => {
    setQuestions(shuffleArray(allQuestions).slice(0, 5));
    setRevealedAnswers(new Set());
  };

  const toggleAnswer = (idx: number) => {
    setRevealedAnswers((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx); else next.add(idx);
      return next;
    });
  };

  return (
    <div className="border-t border-gray-100">
      {/* Tabs */}
      <div className="flex border-b border-gray-100">
        {topics.length > 0 && (
          <button
            onClick={() => setActiveTab("topics")}
            className={`flex items-center gap-1.5 px-5 py-3 text-sm font-medium transition-colors ${
              activeTab === "topics"
                ? "text-indigo-600 border-b-2 border-indigo-500 bg-white"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Topics ({topics.length})
          </button>
        )}
        {projects.length > 0 && (
          <button
            onClick={() => setActiveTab("projects")}
            className={`flex items-center gap-1.5 px-5 py-3 text-sm font-medium transition-colors ${
              activeTab === "projects"
                ? "text-indigo-600 border-b-2 border-indigo-500 bg-white"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <Rocket className="w-3.5 h-3.5" />
            Projects ({projects.length})
          </button>
        )}
        {allQuestions.length > 0 && (
          <button
            onClick={() => setActiveTab("interview")}
            className={`flex items-center gap-1.5 px-5 py-3 text-sm font-medium transition-colors ${
              activeTab === "interview"
                ? "text-indigo-600 border-b-2 border-indigo-500 bg-white"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            Interview Prep ({allQuestions.length})
          </button>
        )}
      </div>

      {/* Topics Tab */}
      {activeTab === "topics" && topics.length > 0 && (
        <div className="divide-y divide-gray-100/80">
          {topics.map((topic, i) => (
            <div key={i} className="flex items-center gap-4 px-5 py-3.5">
              <span className="w-5 h-5 rounded-md border-2 border-gray-300 flex items-center justify-center shrink-0" />
              <span className="flex-1 text-sm text-gray-700 leading-relaxed">{topic}</span>
            </div>
          ))}
        </div>
      )}

      {/* Projects Tab */}
      {activeTab === "projects" && projects.length > 0 && (
        <div className="p-5 space-y-3">
          <div className="flex items-center gap-2 mb-1">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Practice Projects</span>
          </div>
          {projects.map((project, i) => (
            <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 p-4">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h5 className="text-sm font-semibold text-gray-900">{project.title}</h5>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-lg border shrink-0 ${
                  project.difficulty === "Easy"
                    ? "bg-green-50 text-green-600 border-green-100"
                    : project.difficulty === "Medium"
                    ? "bg-amber-50 text-amber-600 border-amber-100"
                    : "bg-red-50 text-red-600 border-red-100"
                }`}>
                  {project.difficulty}
                </span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Interview Prep Tab */}
      {activeTab === "interview" && allQuestions.length > 0 && (
        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-indigo-500" />
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{label} Interview Questions</span>
            </div>
            <button
              onClick={reshuffleQuestions}
              className="flex items-center gap-1.5 text-xs font-medium text-indigo-500 hover:text-indigo-700 transition-colors"
            >
              <Shuffle className="w-3.5 h-3.5" />
              Shuffle
            </button>
          </div>
          {questions.map((q, i) => (
            <div key={`${q.question}-${i}`} className="bg-gray-50 rounded-xl border border-gray-100 p-4">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-medium text-gray-900 leading-relaxed flex-1">
                  <span className="text-indigo-500 font-semibold mr-1.5">Q{i + 1}.</span>
                  {q.question}
                </p>
                <button
                  onClick={() => toggleAnswer(i)}
                  className="shrink-0 flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-gray-700 transition-colors mt-0.5"
                >
                  {revealedAnswers.has(i) ? (
                    <><EyeOff className="w-3.5 h-3.5" /> Hide</>
                  ) : (
                    <><Eye className="w-3.5 h-3.5" /> Show</>
                  )}
                </button>
              </div>
              <AnimatePresence>
                {revealedAnswers.has(i) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-gray-500 leading-relaxed mt-3 pt-3 border-t border-gray-100">
                      {q.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          {allQuestions.length > 5 && (
            <p className="text-xs text-gray-400 text-center pt-1">
              Showing 5 of {allQuestions.length} questions. Click shuffle for new ones.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
