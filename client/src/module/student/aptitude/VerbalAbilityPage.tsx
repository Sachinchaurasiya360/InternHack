import { useState, useMemo } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  ChevronLeft,
  RotateCcw,
  Send,
  BookOpen,
  ArrowLeft,
  Award,
  Check,
  Brain,
  HelpCircle,
  RefreshCw,
  FileText,
  AlertTriangle,
  Shuffle,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { canonicalUrl } from "../../../lib/seo.utils";
import { Button } from "../../../components/ui/button";
import {
  mockReadingComprehension,
  mockSentenceCorrection,
  mockParaJumbles,
  mockErrorSpotting,
  mockSynonymsAntonyms,
  mockClozeTest,
  mockOneWordSubstitution,
} from "./data/verbal-ability-mock";
import type {
  VerbalSubtopicSlug,
  ReadingComprehensionPassage,
  VerbalQuestionItem,
  SubtopicInfo
} from "../../../lib/types/verbal-ability.types";

export default function VerbalAbilityPage() {
  const [activeSubtopic, setActiveSubtopic] = useState<VerbalSubtopicSlug | null>(null);
  
  // Reading Comprehension state
  const [activePassageIndex, setActivePassageIndex] = useState(0);
  const [rcAnswers, setRcAnswers] = useState<Record<string, number>>({}); // key format: `passageId-questionId`
  const [rcSubmitted, setRcSubmitted] = useState<Record<number, boolean>>({}); // key: passageId
  
  // Non-RC states
  const [nonRcAnswers, setNonRcAnswers] = useState<Record<string, number>>({}); // key: `subtopicSlug-questionId`
  const [nonRcSubmitted, setNonRcSubmitted] = useState<Record<string, boolean>>({}); // key: subtopicSlug

  // Completion percentage and tracker state (persisted locally during session)
  const [progressTracker, setProgressTracker] = useState<Record<VerbalSubtopicSlug, number>>({
    "reading-comprehension": 35,
    "sentence-correction": 50,
    "para-jumbles": 20,
    "error-spotting": 75,
    "synonyms-antonyms": 60,
    "cloze-test": 40,
    "one-word-substitution": 80,
  });

  const subtopicsList: SubtopicInfo[] = useMemo(() => [
    {
      name: "Reading Comprehension",
      slug: "reading-comprehension",
      description: "Analyze multi-paragraph essays and answer context-based queries.",
      companies: ["TCS", "Infosys", "Wipro", "Accenture", "Google"],
      completionPercentage: progressTracker["reading-comprehension"],
    },
    {
      name: "Sentence Correction",
      slug: "sentence-correction",
      description: "Rectify grammatical inconsistencies, incorrect prepositions, and structural issues.",
      companies: ["TCS", "Accenture", "Infosys", "Wipro"],
      completionPercentage: progressTracker["sentence-correction"],
    },
    {
      name: "Para Jumbles",
      slug: "para-jumbles",
      description: "Rearrange scrambled text units into logically coherent paragraphs.",
      companies: ["TCS", "Accenture", "Wipro", "Cognizant"],
      completionPercentage: progressTracker["para-jumbles"],
    },
    {
      name: "Error Spotting",
      slug: "error-spotting",
      description: "Identify grammatical breaches, subject-verb mismatches, and double negatives.",
      companies: ["TCS", "Wipro", "Infosys", "Cognizant"],
      completionPercentage: progressTracker["error-spotting"],
    },
    {
      name: "Synonyms & Antonyms",
      slug: "synonyms-antonyms",
      description: "Establish semantic similarities and contrast vocabulary constraints.",
      companies: ["TCS", "Infosys", "Wipro", "Accenture"],
      completionPercentage: progressTracker["synonyms-antonyms"],
    },
    {
      name: "Cloze Test",
      slug: "cloze-test",
      description: "Supply appropriate vocab terms for missing portions of a context flow.",
      companies: ["TCS", "Infosys", "Wipro"],
      completionPercentage: progressTracker["cloze-test"],
    },
    {
      name: "One Word Substitution",
      slug: "one-word-substitution",
      description: "Substitute long conceptual phrases with precise singular terms.",
      companies: ["TCS", "Infosys", "Cognizant", "Accenture"],
      completionPercentage: progressTracker["one-word-substitution"],
    }
  ], [progressTracker]);

  const activeSubtopicInfo = useMemo(() => {
    return subtopicsList.find(s => s.slug === activeSubtopic);
  }, [activeSubtopic, subtopicsList]);

  // Retrieve current active non-RC questions
  const currentNonRcQuestions = useMemo((): VerbalQuestionItem[] => {
    switch (activeSubtopic) {
      case "sentence-correction":
        return mockSentenceCorrection;
      case "para-jumbles":
        return mockParaJumbles;
      case "error-spotting":
        return mockErrorSpotting;
      case "synonyms-antonyms":
        return mockSynonymsAntonyms;
      case "cloze-test":
        return mockClozeTest;
      case "one-word-substitution":
        return mockOneWordSubstitution;
      default:
        return [];
    }
  }, [activeSubtopic]);

  // Handles updating completion bar on mock submit
  const triggerCompletionUpdate = (slug: VerbalSubtopicSlug, ratio: number) => {
    const newPct = Math.round(ratio * 100);
    setProgressTracker(prev => ({
      ...prev,
      [slug]: Math.max(prev[slug], newPct)
    }));
  };

  // Subtopic Selector Dashboard View
  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subtopicsList.map((subtopic) => {
          const IconComponent = {
            "reading-comprehension": BookOpen,
            "sentence-correction": CheckCircle2,
            "para-jumbles": Shuffle,
            "error-spotting": AlertTriangle,
            "synonyms-antonyms": RefreshCw,
            "cloze-test": FileText,
            "one-word-substitution": HelpCircle
          }[subtopic.slug] || Brain;

          return (
            <motion.div
              key={subtopic.slug}
              whileHover={{ y: -2 }}
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-5 flex flex-col justify-between hover:border-stone-400 dark:hover:border-white/30 transition-all duration-200"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-stone-100 dark:bg-stone-800 flex items-center justify-center border border-stone-200 dark:border-stone-700">
                    <IconComponent className="w-5 h-5 text-stone-600 dark:text-stone-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-stone-900 dark:text-stone-50">
                      {subtopic.name}
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-widest text-stone-400">
                      focus subtopic
                    </p>
                  </div>
                </div>

                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed min-h-[40px]">
                  {subtopic.description}
                </p>

                {/* Company badges with rounded-md and specific colors */}
                <div className="flex flex-wrap gap-1">
                  <span className="text-xs font-mono uppercase text-stone-400 self-center mr-1">Tested in:</span>
                  {subtopic.companies.slice(0, 3).map((comp) => (
                    <span
                      key={comp}
                      className="text-xs font-mono font-medium px-2 py-0.5 bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300 rounded-md border border-stone-200 dark:border-stone-700"
                    >
                      {comp}
                    </span>
                  ))}
                  {subtopic.companies.length > 3 && (
                    <span className="text-xs font-mono text-stone-400 self-center">
                      +{subtopic.companies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Progress and Target completion bar */}
              <div className="mt-5 pt-4 border-t border-stone-100 dark:border-stone-800/80 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-stone-500">COMPLETION STATUS</span>
                  <span className="text-lime-600 dark:text-lime-400 font-bold">
                    {subtopic.completionPercentage}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-stone-100 dark:bg-stone-800 rounded-md overflow-hidden">
                  <div
                    className="h-full bg-lime-500 rounded-md transition-all duration-500"
                    style={{ width: `${subtopic.completionPercentage}%` }}
                  />
                </div>
                
                <Button
                  onClick={() => setActiveSubtopic(subtopic.slug)}
                  variant="primary"
                  className="w-full mt-2 font-mono text-xs uppercase tracking-wider h-9 bg-stone-900 text-white hover:bg-lime-500 hover:text-stone-900 border-none rounded-md"
                >
                  Practice Now
                </Button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  // Active Passage Detail (Left Side of Split Pane)
  const activePassage: ReadingComprehensionPassage = mockReadingComprehension[activePassageIndex];
  
  // Submit RC Passage Questions Answers
  const handleSubmitRc = () => {
    if (!activePassage) return;
    const questionsCount = activePassage.questions.length;
    let correctCount = 0;
    
    activePassage.questions.forEach((q) => {
      const answeredIndex = rcAnswers[`${activePassage.id}-${q.id}`];
      if (answeredIndex === q.correctOptionIndex) {
        correctCount++;
      }
    });

    setRcSubmitted(prev => ({ ...prev, [activePassage.id]: true }));
    triggerCompletionUpdate("reading-comprehension", correctCount / questionsCount);
  };

  const handleResetRc = () => {
    if (!activePassage) return;
    const newAnswers = { ...rcAnswers };
    activePassage.questions.forEach((q) => {
      delete newAnswers[`${activePassage.id}-${q.id}`];
    });
    setRcAnswers(newAnswers);
    setRcSubmitted(prev => ({ ...prev, [activePassage.id]: false }));
  };

  // Submit Non-RC subtopic answers
  const handleSubmitNonRc = () => {
    if (!activeSubtopic) return;
    const questionsCount = currentNonRcQuestions.length;
    let correctCount = 0;

    currentNonRcQuestions.forEach((q) => {
      const answeredIndex = nonRcAnswers[`${activeSubtopic}-${q.id}`];
      if (answeredIndex === q.correctOptionIndex) {
        correctCount++;
      }
    });

    setNonRcSubmitted(prev => ({ ...prev, [activeSubtopic]: true }));
    triggerCompletionUpdate(activeSubtopic, correctCount / questionsCount);
  };

  const handleResetNonRc = () => {
    if (!activeSubtopic) return;
    const newAnswers = { ...nonRcAnswers };
    currentNonRcQuestions.forEach((q) => {
      delete newAnswers[`${activeSubtopic}-${q.id}`];
    });
    setNonRcAnswers(newAnswers);
    setNonRcSubmitted(prev => ({ ...prev, [activeSubtopic]: false }));
  };

  // Calculate score values for display
  const rcScoreInfo = useMemo(() => {
    if (!activePassage) return { correct: 0, total: 0, percentage: 0 };
    const total = activePassage.questions.length;
    let correct = 0;
    activePassage.questions.forEach(q => {
      if (rcAnswers[`${activePassage.id}-${q.id}`] === q.correctOptionIndex) {
        correct++;
      }
    });
    return {
      correct,
      total,
      percentage: Math.round((correct / total) * 100)
    };
  }, [activePassage, rcAnswers]);

  const nonRcScoreInfo = useMemo(() => {
    if (!activeSubtopic || currentNonRcQuestions.length === 0) return { correct: 0, total: 0, percentage: 0 };
    const total = currentNonRcQuestions.length;
    let correct = 0;
    currentNonRcQuestions.forEach(q => {
      if (nonRcAnswers[`${activeSubtopic}-${q.id}`] === q.correctOptionIndex) {
        correct++;
      }
    });
    return {
      correct,
      total,
      percentage: Math.round((correct / total) * 100)
    };
  }, [activeSubtopic, currentNonRcQuestions, nonRcAnswers]);

  return (
    <div className="relative text-stone-900 dark:text-stone-50 pb-12 p-6 min-h-screen bg-stone-50 dark:bg-stone-900 transition-colors duration-300">
      <SEO
        title="Verbal Ability & Reading Comprehension"
        description="Comprehensive verbal practice module featuring Reading Comprehension, Sentence Correction, Error Spotting, Para Jumbles, Synonyms, and Cloze tests."
        canonicalUrl={canonicalUrl("/learn/aptitude/verbal-ability")}
      />

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-6">
          <div className="space-y-3">
            {activeSubtopic ? (
              <button
                onClick={() => setActiveSubtopic(null)}
                className="group inline-flex items-center gap-2 text-xs text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                Back to Dashboard
              </button>
            ) : (
              <Link
                to="/learn/aptitude"
                className="group inline-flex items-center gap-2 text-xs text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                Back to Aptitude
              </Link>
            )}

            <div className="space-y-1">
              <h1 className="text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50">
                {activeSubtopicInfo ? activeSubtopicInfo.name : "Verbal Ability & Reading Comprehension"}
              </h1>
              <p className="text-sm text-stone-500 max-w-2xl">
                {activeSubtopicInfo
                  ? activeSubtopicInfo.description
                  : "Crack the verbal assessment phase. Master grammatical precision, comprehension, sentence rearrangements, and quick substitutions."
                }
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-stone-500">
            <div>
              Total focus topics
              <span className="text-stone-900 dark:text-stone-100 text-sm font-bold ml-2">
                7
              </span>
            </div>
            <div>
              Mock Pool
              <span className="text-stone-900 dark:text-stone-100 text-sm font-bold ml-2">
                200+
              </span>
            </div>
          </div>
        </div>

        {/* Dashboard and Interactive UI views */}
        <AnimatePresence mode="wait">
          {!activeSubtopic ? (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderDashboard()}
            </motion.div>
          ) : activeSubtopic === "reading-comprehension" ? (
            // SPLIT-PANE READING COMPREHENSION PRACTICE UI
            <motion.div
              key="rc-practice"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="space-y-6"
            >
              {/* Selector for Passages */}
              <div className="flex items-center justify-between bg-white dark:bg-stone-900 p-4 border border-stone-200 dark:border-white/10 rounded-md">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-stone-500">PASSAGE SELECTION:</span>
                  <div className="flex gap-2">
                    {mockReadingComprehension.map((pass, i) => (
                      <button
                        key={pass.id}
                        onClick={() => {
                          setActivePassageIndex(i);
                        }}
                        className={`px-3 py-1.5 text-xs font-mono font-medium border rounded-md transition-all cursor-pointer ${
                          activePassageIndex === i
                            ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 border-stone-900 dark:border-stone-50"
                            : "bg-transparent text-stone-600 dark:text-stone-400 border-stone-300 dark:border-white/10 hover:border-stone-500 dark:hover:border-white/30"
                        }`}
                      >
                        Passage {String(i + 1).padStart(2, "0")}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-stone-400 uppercase">Tested in:</span>
                  {activePassage.companies.map(c => (
                    <span key={c} className="text-xs font-mono bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300 px-2 py-0.5 rounded-md border border-stone-200 dark:border-stone-700">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Split-pane container */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                
                {/* Left Pane (Passage Box) - Scrollable, stone-50 background */}
                <div className="bg-stone-50 dark:bg-stone-900/60 border border-stone-200 dark:border-white/10 rounded-md p-6 max-h-[600px] overflow-y-auto space-y-4">
                  <div className="flex items-center gap-2 border-b border-stone-200 dark:border-stone-800 pb-3">
                    <BookOpen className="w-4 h-4 text-lime-600 dark:text-lime-400" />
                    <h2 className="text-md font-bold text-stone-800 dark:text-stone-200">
                      {activePassage.title}
                    </h2>
                  </div>
                  
                  <div className="space-y-4 text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
                    {activePassage.paragraphs.map((para, pIdx) => (
                      <p key={pIdx} className="text-justify">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Right Pane (Interactive Cards) - Questions list */}
                <div className="space-y-6">
                  {/* Results summary header on active passage submit */}
                  {rcSubmitted[activePassage.id] && (
                    <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-md bg-lime-100 dark:bg-lime-950/20 flex items-center justify-center border border-lime-200 dark:border-lime-900/40">
                          <Award className="w-5 h-5 text-lime-600 dark:text-lime-400" />
                        </div>
                        <div>
                          <p className="text-xs font-mono uppercase tracking-wider text-stone-500">Passage Accuracy</p>
                          <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
                            {rcScoreInfo.correct} / {rcScoreInfo.total} Correct ({rcScoreInfo.percentage}% Accuracy)
                          </p>
                        </div>
                      </div>
                      
                      <button
                        onClick={handleResetRc}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-widest text-stone-900 dark:text-stone-100 border border-stone-300 dark:border-white/15 rounded-md hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        Retry
                      </button>
                    </div>
                  )}

                  {/* Question cards */}
                  <div className="space-y-4">
                    {activePassage.questions.map((q, idx) => {
                      const ansKey = `${activePassage.id}-${q.id}`;
                      const selectedIndex = rcAnswers[ansKey];
                      const isCorrect = selectedIndex === q.correctOptionIndex;
                      const hasSubmitted = rcSubmitted[activePassage.id];

                      return (
                        <div
                          key={q.id}
                          className={`bg-white dark:bg-stone-900 border rounded-md p-5 transition-colors duration-200 ${
                            hasSubmitted
                              ? isCorrect
                                ? "border-lime-500/50 bg-lime-50/10 dark:bg-lime-950/10"
                                : "border-red-500/50 bg-red-50/10 dark:bg-red-950/10"
                              : "border-stone-200 dark:border-white/10"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <span className="shrink-0 w-8 h-8 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center text-xs font-mono font-bold text-stone-900 dark:text-stone-100">
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                            <div className="space-y-4 flex-1">
                              <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 leading-normal pt-1">
                                {q.questionText}
                              </h4>

                              <div className="space-y-2">
                                {q.options.map((opt, optIdx) => {
                                  const isSelected = selectedIndex === optIdx;
                                  const isCorrectOption = q.correctOptionIndex === optIdx;
                                  const isWrongSelected = isSelected && !isCorrect;

                                  let optionStyle = "border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30";
                                  if (isSelected && !hasSubmitted) {
                                    optionStyle = "border-lime-500 bg-lime-50/50 dark:bg-lime-950/10 text-stone-900 dark:text-stone-50 ring-1 ring-lime-500";
                                  } else if (hasSubmitted) {
                                    if (isCorrectOption) {
                                      optionStyle = "border-lime-500 bg-lime-50/50 dark:bg-lime-950/20 text-lime-700 dark:text-lime-400";
                                    } else if (isWrongSelected) {
                                      optionStyle = "border-red-500 bg-red-50/50 dark:bg-red-950/20 text-red-700 dark:text-red-400";
                                    } else {
                                      optionStyle = "opacity-50 border-stone-200 dark:border-white/10";
                                    }
                                  }

                                  return (
                                    <label
                                      key={optIdx}
                                      className={`flex items-center gap-3 p-3 rounded-md border text-xs transition-all duration-150 ${
                                        hasSubmitted ? "cursor-default" : "cursor-pointer"
                                      } ${optionStyle}`}
                                    >
                                      <input
                                        type="radio"
                                        name={`rc-q-${q.id}`}
                                        disabled={hasSubmitted}
                                        checked={isSelected}
                                        onChange={() => {
                                          setRcAnswers(prev => ({
                                            ...prev,
                                            [ansKey]: optIdx
                                          }));
                                        }}
                                        className="accent-lime-500 shrink-0"
                                      />
                                      <span className="font-mono text-stone-400 w-4">{String.fromCharCode(65 + optIdx)}</span>
                                      <span className="flex-1 text-stone-700 dark:text-stone-300">{opt}</span>
                                      {hasSubmitted && isCorrectOption && <CheckCircle2 className="w-4 h-4 text-lime-500 shrink-0" />}
                                      {hasSubmitted && isWrongSelected && <XCircle className="w-4 h-4 text-red-500 shrink-0" />}
                                    </label>
                                  );
                                })}
                              </div>

                              {/* Explanation */}
                              {hasSubmitted && q.explanation && (
                                <div className="mt-4 p-4 bg-stone-50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 rounded-md text-xs space-y-1">
                                  <div className="flex items-center gap-1.5 text-lime-600 dark:text-lime-400 font-bold uppercase tracking-wider font-mono">
                                    <Check className="w-3.5 h-3.5" /> Explanation
                                  </div>
                                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                                    {q.explanation}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Submission triggers */}
                  {!rcSubmitted[activePassage.id] && (
                    <Button
                      onClick={handleSubmitRc}
                      disabled={activePassage.questions.some(q => rcAnswers[`${activePassage.id}-${q.id}`] === undefined)}
                      className="w-full py-3 bg-stone-900 text-stone-50 hover:bg-lime-500 hover:text-stone-900 border-none rounded-md flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider disabled:opacity-40 disabled:hover:bg-stone-900 disabled:hover:text-stone-50 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Submit Passage Answers
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            // NON-RC SUBTOPIC INTERACTIVE PRACTICE UI
            <motion.div
              key="non-rc-practice"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="space-y-6 max-w-4xl mx-auto"
            >
              {/* Result state header on non-RC submit */}
              {nonRcSubmitted[activeSubtopic] && (
                <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-lime-100 dark:bg-lime-950/20 flex items-center justify-center border border-lime-200 dark:border-lime-900/40">
                      <Award className="w-5 h-5 text-lime-600 dark:text-lime-400" />
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-stone-500">Topic Accuracy</p>
                      <p className="text-sm font-bold text-stone-900 dark:text-stone-100">
                        {nonRcScoreInfo.correct} / {nonRcScoreInfo.total} Correct ({nonRcScoreInfo.percentage}% Accuracy)
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleResetNonRc}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-widest text-stone-900 dark:text-stone-100 border border-stone-300 dark:border-white/15 rounded-md hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Retry
                  </button>
                </div>
              )}

              {/* Stacked practice cards */}
              <div className="space-y-4">
                {currentNonRcQuestions.map((q, idx) => {
                  const ansKey = `${activeSubtopic}-${q.id}`;
                  const selectedIndex = nonRcAnswers[ansKey];
                  const isCorrect = selectedIndex === q.correctOptionIndex;
                  const hasSubmitted = nonRcSubmitted[activeSubtopic];

                  return (
                    <div
                      key={q.id}
                      className={`bg-white dark:bg-stone-900 border rounded-md p-5 transition-colors duration-200 ${
                        hasSubmitted
                          ? isCorrect
                            ? "border-lime-500/50 bg-lime-50/10 dark:bg-lime-950/10"
                            : "border-red-500/50 bg-red-50/10 dark:bg-red-950/10"
                          : "border-stone-200 dark:border-white/10"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <span className="shrink-0 w-8 h-8 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center text-xs font-mono font-bold text-stone-900 dark:text-stone-100">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        
                        <div className="flex-1 space-y-4">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 leading-relaxed whitespace-pre-line pt-1">
                              {q.questionText}
                            </h4>
                            
                            <div className="flex items-center gap-1.5">
                              {q.companies.map(c => (
                                <span key={c} className="text-xs font-mono px-1.5 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-500">
                                  {c}
                                </span>
                              ))}
                              <span className="text-xs font-mono text-lime-600 dark:text-lime-400 border border-lime-300 dark:border-lime-900/40 bg-lime-50/20 px-1.5 py-0.5 rounded-md">
                                {q.difficulty}
                              </span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = selectedIndex === optIdx;
                              const isCorrectOption = q.correctOptionIndex === optIdx;
                              const isWrongSelected = isSelected && !isCorrect;

                              let optionStyle = "border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30";
                              if (isSelected && !hasSubmitted) {
                                optionStyle = "border-lime-500 bg-lime-50/50 dark:bg-lime-950/10 text-stone-900 dark:text-stone-50 ring-1 ring-lime-500";
                              } else if (hasSubmitted) {
                                if (isCorrectOption) {
                                  optionStyle = "border-lime-500 bg-lime-50/50 dark:bg-lime-950/20 text-lime-700 dark:text-lime-400";
                                } else if (isWrongSelected) {
                                  optionStyle = "border-red-500 bg-red-50/50 dark:bg-red-950/20 text-red-700 dark:text-red-400";
                                } else {
                                  optionStyle = "opacity-50 border-stone-200 dark:border-white/10";
                                }
                              }

                              return (
                                <label
                                  key={optIdx}
                                  className={`flex items-center gap-3 p-3 rounded-md border text-xs transition-all duration-150 ${
                                    hasSubmitted ? "cursor-default" : "cursor-pointer"
                                  } ${optionStyle}`}
                                >
                                  <input
                                    type="radio"
                                    name={`nonrc-q-${q.id}`}
                                    disabled={hasSubmitted}
                                    checked={isSelected}
                                    onChange={() => {
                                      setNonRcAnswers(prev => ({
                                        ...prev,
                                        [ansKey]: optIdx
                                      }));
                                    }}
                                    className="accent-lime-500 shrink-0"
                                  />
                                  <span className="font-mono text-stone-400 w-4">{String.fromCharCode(65 + optIdx)}</span>
                                  <span className="flex-1 text-stone-700 dark:text-stone-300">{opt}</span>
                                  {hasSubmitted && isCorrectOption && <CheckCircle2 className="w-4 h-4 text-lime-500 shrink-0" />}
                                  {hasSubmitted && isWrongSelected && <XCircle className="w-4 h-4 text-red-500 shrink-0" />}
                                </label>
                              );
                            })}
                          </div>

                          {/* Explanation */}
                          {hasSubmitted && q.explanation && (
                            <div className="mt-4 p-4 bg-stone-50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 rounded-md text-xs space-y-1">
                              <div className="flex items-center gap-1.5 text-lime-600 dark:text-lime-400 font-bold uppercase tracking-wider font-mono">
                                <Check className="w-3.5 h-3.5" /> Explanation
                              </div>
                              <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                                {q.explanation}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Submit Buttons */}
              {!nonRcSubmitted[activeSubtopic] && (
                <Button
                  onClick={handleSubmitNonRc}
                  disabled={currentNonRcQuestions.some(q => nonRcAnswers[`${activeSubtopic}-${q.id}`] === undefined)}
                  className="w-full py-3 bg-stone-900 text-stone-50 hover:bg-lime-500 hover:text-stone-900 border-none rounded-md flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider disabled:opacity-40 disabled:hover:bg-stone-900 disabled:hover:text-stone-50 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  Submit All Answers
                </Button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
