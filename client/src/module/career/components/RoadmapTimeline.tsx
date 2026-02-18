import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  CheckSquare,
  Square,
  ExternalLink,
  BookOpen,
  Video,
  FileText,
  Wrench,
  ListChecks,
} from "lucide-react";
import type { CareerPhase, CareerSkill } from "../../../lib/types";
import { getTopicsForSkill } from "./skillTopics";

const RESOURCE_ICONS: Record<string, React.ReactNode> = {
  ARTICLE: <FileText className="w-3.5 h-3.5" />,
  VIDEO: <Video className="w-3.5 h-3.5" />,
  COURSE: <BookOpen className="w-3.5 h-3.5" />,
  BOOK: <BookOpen className="w-3.5 h-3.5" />,
  DOCUMENTATION: <FileText className="w-3.5 h-3.5" />,
  TUTORIAL: <BookOpen className="w-3.5 h-3.5" />,
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

  const getPhaseCompletion = (phase: CareerPhase) => {
    if (!interactive) return null;
    const completed = phase.skills.filter((s) => s.completed).length;
    return { completed, total: phase.skills.length };
  };

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-200 via-gray-200 to-transparent" />

      <div className="space-y-4">
        {phases.map((phase, index) => {
          const isExpanded = expandedPhases.has(phase.id);
          const completion = getPhaseCompletion(phase);
          const isComplete = completion && completion.completed === completion.total && completion.total > 0;
          const pct = completion && completion.total > 0
            ? Math.round((completion.completed / completion.total) * 100)
            : 0;

          return (
            <div key={phase.id} className="relative pl-12">
              {/* Timeline dot */}
              <div
                className={`absolute left-3 top-5 w-5 h-5 rounded-full border-2 flex items-center justify-center z-10 transition-all ${
                  isComplete
                    ? "bg-green-500 border-green-500 shadow-lg shadow-green-200"
                    : completion && completion.completed > 0
                      ? "bg-amber-50 border-amber-400 shadow-sm"
                      : "bg-white border-gray-300"
                }`}
              >
                {isComplete ? (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <span className="text-[10px] font-bold text-gray-400">{index + 1}</span>
                )}
              </div>

              {/* Phase card */}
              <div className={`bg-white rounded-xl border shadow-sm overflow-hidden transition-all ${
                isComplete ? "border-green-100" : "border-gray-100"
              }`}>
                <button
                  onClick={() => togglePhase(phase.id)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50/70 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm font-semibold text-gray-900">{phase.title}</h3>
                      {phase.durationWeeks && (
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                          {phase.durationWeeks}w
                        </span>
                      )}
                      {isComplete && (
                        <span className="text-xs bg-green-50 text-green-600 font-medium px-2 py-0.5 rounded-full">
                          Complete
                        </span>
                      )}
                    </div>
                    {completion && (
                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-32 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{ duration: 0.5 }}
                            className={`h-full rounded-full ${
                              isComplete ? "bg-green-500" : pct > 0 ? "bg-amber-400" : "bg-gray-200"
                            }`}
                          />
                        </div>
                        <span className="text-xs text-gray-400 font-medium">
                          {completion.completed}/{completion.total} skills
                        </span>
                      </div>
                    )}
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 space-y-5 border-t border-gray-50">
                        {phase.description && (
                          <p className="text-sm text-gray-500 pt-3">{phase.description}</p>
                        )}

                        {/* Skills */}
                        {phase.skills.length > 0 && (
                          <div>
                            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                              <ListChecks className="w-3.5 h-3.5" />
                              Skills to Master
                            </h4>
                            <div className="space-y-1">
                              {phase.skills.map((skill) => (
                                <SkillRow
                                  key={skill.id}
                                  skill={skill}
                                  interactive={interactive}
                                  onToggle={onToggleSkill}
                                />
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Resources */}
                        {phase.resources.length > 0 && (
                          <div>
                            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                              <BookOpen className="w-3.5 h-3.5" />
                              Learning Resources
                            </h4>
                            <div className="space-y-2">
                              {phase.resources.map((resource) => (
                                <a
                                  key={resource.id}
                                  href={resource.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-black no-underline group px-2 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                  <span className="text-gray-400 group-hover:text-black shrink-0">
                                    {RESOURCE_ICONS[resource.type] ?? <FileText className="w-3.5 h-3.5" />}
                                  </span>
                                  <span className="flex-1 font-medium">{resource.title}</span>
                                  <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${
                                    resource.free ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-500"
                                  }`}>
                                    {resource.free ? "Free" : "Paid"}
                                  </span>
                                  <ExternalLink className="w-3 h-3 text-gray-300 group-hover:text-gray-500" />
                                </a>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Tools */}
                        {phase.tools.length > 0 && (
                          <div>
                            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                              <Wrench className="w-3.5 h-3.5" />
                              Tools & Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {phase.tools.map((tool) => (
                                <span
                                  key={tool.id}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-100 text-gray-600 rounded-lg text-xs font-medium hover:bg-gray-100 transition-colors"
                                >
                                  <Wrench className="w-3 h-3 text-gray-400" />
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Skill Row with expandable topic checklist ────────────────────────────────

function SkillRow({
  skill,
  interactive,
  onToggle,
}: {
  skill: CareerSkill;
  interactive: boolean;
  onToggle?: (skillId: number) => void;
}) {
  const topics = getTopicsForSkill(skill.name);
  const [topicsOpen, setTopicsOpen] = useState(false);

  // localStorage key for this skill's topic completions
  const storageKey = `career-topics-${skill.id}`;
  const [completedTopics, setCompletedTopics] = useState<Set<number>>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? new Set(JSON.parse(saved) as number[]) : new Set();
    } catch {
      return new Set();
    }
  });

  const toggleTopic = (i: number) => {
    setCompletedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      try {
        localStorage.setItem(storageKey, JSON.stringify([...next]));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const levelConfig = {
    BEGINNER: { bg: "bg-green-50", text: "text-green-600", label: "Beginner" },
    INTERMEDIATE: { bg: "bg-amber-50", text: "text-amber-600", label: "Intermediate" },
    ADVANCED: { bg: "bg-red-50", text: "text-red-600", label: "Advanced" },
  }[skill.level] ?? { bg: "bg-gray-50", text: "text-gray-500", label: skill.level };

  if (interactive) {
    return (
      <div className="rounded-xl border border-transparent hover:border-gray-100 transition-all">
        {/* Main skill row */}
        <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
          {/* Skill complete toggle (backend) */}
          <button
            onClick={() => onToggle?.(skill.id)}
            className="shrink-0 p-0.5 rounded transition-colors hover:bg-gray-100"
            title={skill.completed ? "Mark incomplete" : "Mark complete"}
          >
            {skill.completed ? (
              <CheckSquare className="w-4 h-4 text-green-500" />
            ) : (
              <Square className="w-4 h-4 text-gray-300 hover:text-gray-400" />
            )}
          </button>

          {/* Skill name — click to expand topics */}
          <button
            onClick={() => topics.length > 0 && setTopicsOpen((o) => !o)}
            className="flex-1 text-left flex items-center justify-between gap-2 min-w-0"
            disabled={topics.length === 0}
          >
            <span
              className={`text-sm font-medium truncate transition-colors ${
                skill.completed ? "text-gray-400 line-through" : "text-gray-800"
              }`}
            >
              {skill.name}
            </span>
            <div className="flex items-center gap-1.5 shrink-0">
              <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md ${levelConfig.bg} ${levelConfig.text}`}>
                {levelConfig.label}
              </span>
              {topics.length > 0 && (
                <>
                  <span className="text-[10px] text-gray-400 font-medium">
                    {completedTopics.size}/{topics.length}
                  </span>
                  {topicsOpen ? (
                    <ChevronDown className="w-3 h-3 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-3 h-3 text-gray-400" />
                  )}
                </>
              )}
            </div>
          </button>
        </div>

        {/* Topic checklist */}
        <AnimatePresence>
          {topicsOpen && topics.length > 0 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="overflow-hidden"
            >
              <div className="ml-9 mr-2 mb-2 mt-0.5 bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                <div className="px-3 py-2 border-b border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                    Topics to cover in {skill.name}
                  </span>
                  <span className="text-[10px] text-gray-400">
                    {completedTopics.size} / {topics.length} done
                  </span>
                </div>
                {/* Mini progress bar */}
                <div className="h-0.5 bg-gray-100">
                  <div
                    className="h-full bg-green-400 transition-all duration-300"
                    style={{ width: `${topics.length > 0 ? (completedTopics.size / topics.length) * 100 : 0}%` }}
                  />
                </div>
                <div className="divide-y divide-gray-100">
                  {topics.map((topic, i) => {
                    const done = completedTopics.has(i);
                    return (
                      <button
                        key={i}
                        onClick={() => toggleTopic(i)}
                        className="flex items-start gap-2.5 w-full text-left px-3 py-2.5 hover:bg-white transition-colors group"
                      >
                        <span className="shrink-0 mt-0.5">
                          {done ? (
                            <CheckSquare className="w-3.5 h-3.5 text-green-500" />
                          ) : (
                            <Square className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-400" />
                          )}
                        </span>
                        <span
                          className={`text-xs leading-relaxed transition-colors ${
                            done
                              ? "text-gray-400 line-through"
                              : "text-gray-600 group-hover:text-gray-800"
                          }`}
                        >
                          {topic}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Non-interactive view (public career detail page)
  return (
    <div>
      <div className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg">
        <div className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0 mt-0.5" />
        <span className="text-sm text-gray-700 flex-1 font-medium">{skill.name}</span>
        <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md ${levelConfig.bg} ${levelConfig.text}`}>
          {levelConfig.label}
        </span>
      </div>
      {/* Show topic count hint for non-interactive */}
      {topics.length > 0 && (
        <p className="text-[10px] text-gray-400 ml-6 mb-1">
          {topics.length} subtopics to study
        </p>
      )}
    </div>
  );
}
