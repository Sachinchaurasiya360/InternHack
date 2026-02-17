import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, CheckSquare, Square, ExternalLink, BookOpen, Video, FileText, Wrench } from "lucide-react";
import type { CareerPhase, CareerSkill } from "../../../lib/types";

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
    // Expand the first phase by default
    const first = phases[0];
    return first ? new Set([first.id]) : new Set();
  });

  const togglePhase = (phaseId: number) => {
    setExpandedPhases((prev) => {
      const next = new Set(prev);
      if (next.has(phaseId)) {
        next.delete(phaseId);
      } else {
        next.add(phaseId);
      }
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
      <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200" />

      <div className="space-y-4">
        {phases.map((phase, index) => {
          const isExpanded = expandedPhases.has(phase.id);
          const completion = getPhaseCompletion(phase);
          const isComplete = completion && completion.completed === completion.total && completion.total > 0;

          return (
            <div key={phase.id} className="relative pl-12">
              {/* Timeline dot */}
              <div
                className={`absolute left-3 top-4 w-5 h-5 rounded-full border-2 flex items-center justify-center z-10 ${
                  isComplete
                    ? "bg-green-500 border-green-500"
                    : completion && completion.completed > 0
                      ? "bg-yellow-100 border-yellow-500"
                      : "bg-white border-gray-300"
                }`}
              >
                {isComplete && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
                {!isComplete && (
                  <span className="text-[10px] font-bold text-gray-400">{index + 1}</span>
                )}
              </div>

              {/* Phase card */}
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <button
                  onClick={() => togglePhase(phase.id)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-gray-900">{phase.title}</h3>
                      {phase.durationWeeks && (
                        <span className="text-xs text-gray-400">{phase.durationWeeks} weeks</span>
                      )}
                    </div>
                    {completion && (
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-green-500 rounded-full transition-all duration-300"
                            style={{ width: `${completion.total > 0 ? (completion.completed / completion.total) * 100 : 0}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-400">
                          {completion.completed}/{completion.total}
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
                      <div className="px-5 pb-5 space-y-4">
                        {phase.description && (
                          <p className="text-sm text-gray-500">{phase.description}</p>
                        )}

                        {/* Skills */}
                        {phase.skills.length > 0 && (
                          <div>
                            <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Skills</h4>
                            <div className="space-y-1.5">
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
                            <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Resources</h4>
                            <div className="space-y-1.5">
                              {phase.resources.map((resource) => (
                                <a
                                  key={resource.id}
                                  href={resource.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-black no-underline group"
                                >
                                  <span className="text-gray-400 group-hover:text-black">
                                    {RESOURCE_ICONS[resource.type] ?? <FileText className="w-3.5 h-3.5" />}
                                  </span>
                                  <span className="flex-1">{resource.title}</span>
                                  <span className="flex items-center gap-1 text-xs text-gray-300">
                                    {resource.free ? "Free" : "Paid"}
                                    <ExternalLink className="w-3 h-3" />
                                  </span>
                                </a>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Tools */}
                        {phase.tools.length > 0 && (
                          <div>
                            <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Tools</h4>
                            <div className="flex flex-wrap gap-2">
                              {phase.tools.map((tool) => (
                                <span
                                  key={tool.id}
                                  className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-50 text-gray-600 rounded-lg text-xs font-medium"
                                >
                                  <Wrench className="w-3 h-3" />
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

function SkillRow({ skill, interactive, onToggle }: { skill: CareerSkill; interactive: boolean; onToggle?: (skillId: number) => void }) {
  const levelColor = skill.level === "BEGINNER" ? "text-green-500" : skill.level === "INTERMEDIATE" ? "text-yellow-500" : "text-red-500";

  if (interactive) {
    return (
      <button
        onClick={() => onToggle?.(skill.id)}
        className="flex items-center gap-2 w-full text-left group hover:bg-gray-50 rounded-lg px-2 py-1 -mx-2 transition-colors"
      >
        {skill.completed ? (
          <CheckSquare className="w-4 h-4 text-green-500 shrink-0" />
        ) : (
          <Square className="w-4 h-4 text-gray-300 group-hover:text-gray-400 shrink-0" />
        )}
        <span className={`text-sm flex-1 ${skill.completed ? "text-gray-400 line-through" : "text-gray-700"}`}>
          {skill.name}
        </span>
        <span className={`text-[10px] font-medium ${levelColor}`}>{skill.level}</span>
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2 px-2 py-1">
      <div className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
      <span className="text-sm text-gray-700 flex-1">{skill.name}</span>
      <span className={`text-[10px] font-medium ${levelColor}`}>{skill.level}</span>
    </div>
  );
}
