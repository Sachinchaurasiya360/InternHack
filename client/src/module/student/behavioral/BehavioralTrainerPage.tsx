import { useState, useCallback, memo } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Loader2,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock,
  Lightbulb,
  Trophy,
  RefreshCw,
  Lock,
  Shuffle,
  ChevronRight,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";
import { evaluateStarResponse, type StarEvaluationResult, type SectionEvaluation } from "./api/behavioral.api";
import { useAuthStore } from "../../../lib/auth.store";

const SESSIONS_KEY = "behavioral_sessions_used";
const MAX_FREE_SESSIONS = 5;

function getUsedSessions(): number {
  try {
    return Number(localStorage.getItem(SESSIONS_KEY)) || 0;
  } catch {
    return 0;
  }
}

function incrementSessions(): void {
  try {
    localStorage.setItem(SESSIONS_KEY, String(getUsedSessions() + 1));
  } catch {
    /* localStorage unavailable */
  }
}

const BEHAVIORAL_QUESTIONS = [
  "Tell me about a time you faced a significant challenge or failure. How did you handle it?",
  "Describe a situation where you had a conflict with a teammate or colleague. How did you resolve it?",
  "Tell me about a time you demonstrated leadership, even without a formal title.",
  "Describe a time you worked effectively as part of a team to achieve a goal.",
  "Tell me about a time you had to manage multiple competing priorities or a tight deadline.",
  "Describe a situation where you had to adapt to a significant change at work or school.",
  "Tell me about a time you took initiative to solve a problem or improve a process.",
  "Describe a difficult decision you had to make and how you arrived at your conclusion.",
  "Tell me about a time you received constructive criticism. How did you respond?",
  "Describe a situation where you went above and beyond what was expected of you.",
  "Tell me about a time you had to persuade someone to see your point of view.",
  "Describe a project or accomplishment you are most proud of.",
];

type Stage = "form" | "loading" | "results";

export default function BehavioralTrainerPage() {
  const { user } = useAuthStore();
  const [usedSessions, setUsedSessions] = useState(getUsedSessions);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [situation, setSituation] = useState("");
  const [task, setTask] = useState("");
  const [action, setAction] = useState("");
  const [result, setResult] = useState("");
  const [stage, setStage] = useState<Stage>("form");
  const [evaluation, setEvaluation] = useState<StarEvaluationResult | null>(null);
  const [isPremium, setIsPremium] = useState(() => {
    return !!(
      user?.subscriptionStatus === "ACTIVE" &&
      user?.subscriptionPlan !== "FREE" &&
      user?.subscriptionEndDate &&
      new Date(user.subscriptionEndDate) > new Date()
    );
  });
  const [error, setError] = useState<string | null>(null);

  const isSessionsExhausted = !isPremium && usedSessions >= MAX_FREE_SESSIONS;

  const currentQuestion = BEHAVIORAL_QUESTIONS[questionIndex % BEHAVIORAL_QUESTIONS.length];

  const canSubmit =
    situation.trim().length >= 10 &&
    task.trim().length >= 5 &&
    action.trim().length >= 10 &&
    result.trim().length >= 5;

  const handleShuffle = useCallback(() => {
    setQuestionIndex((i) => (i + 1) % BEHAVIORAL_QUESTIONS.length);
    setSituation("");
    setTask("");
    setAction("");
    setResult("");
    setEvaluation(null);
    setStage("form");
    setError(null);
  }, []);

  async function handleSubmit() {
    if (!canSubmit) return;
    setStage("loading");
    setError(null);

    try {
      const resp = await evaluateStarResponse({
        question: currentQuestion,
        situation: situation.trim(),
        task: task.trim(),
        action: action.trim(),
        result: result.trim(),
      });
      setEvaluation(resp.evaluation);
      setIsPremium(resp.isPremium);
      setStage("results");
      incrementSessions();
      setUsedSessions(getUsedSessions());
    } catch (err: unknown) {
      const e = err as { response?: { status?: number; data?: { message?: string } } };
      setError(e?.response?.data?.message ?? "Evaluation failed. Please try again.");
      setStage("form");
    }
  }

  function handleReset() {
    setSituation("");
    setTask("");
    setAction("");
    setResult("");
    setEvaluation(null);
    setStage("form");
    setError(null);
  }

  return (
    <>
      <SEO title="Behavioral Interview STAR Trainer" noIndex />
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400 mb-2">
            <span>Learn</span>
            <ChevronRight className="w-3 h-3" />
            <span>Interview</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-stone-700 dark:text-stone-300">Behavioral Trainer</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-950 dark:text-white">
            Behavioral Interview Trainer
          </h1>
          <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
            Structure your answers using the STAR method and get AI-powered feedback
          </p>
        </div>

        {/* Session counter */}
        {!isPremium && (
          <div className="flex items-center gap-2 mb-6 px-4 py-2.5 rounded-md bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700">
            <Clock className="w-4 h-4 text-stone-400" />
            <span className="text-xs text-stone-600 dark:text-stone-400">
              {isSessionsExhausted
                ? "Free sessions used: upgrade for unlimited practice"
                : `${usedSessions} of ${MAX_FREE_SESSIONS} free sessions used`}
            </span>
          </div>
        )}

        {/* Premium gate */}
        {isSessionsExhausted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 flex flex-col items-center text-center gap-4 rounded-md border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900"
          >
            <div className="w-14 h-14 rounded-md bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
              <Lock className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <p className="text-base font-bold text-stone-950 dark:text-white mb-1">Free limit reached</p>
              <p className="text-sm text-stone-500 dark:text-stone-400 max-w-xs">
                You have used all {MAX_FREE_SESSIONS} free practice sessions. Upgrade to Premium for unlimited
                sessions and custom company questions.
              </p>
            </div>
            <Button variant="primary" size="sm" asChild>
              <a href="/student/checkout">Upgrade to Premium</a>
            </Button>
          </motion.div>
        )}

        {/* Main content */}
        {!isSessionsExhausted && (
          <div className="space-y-6">
            {/* Question card */}
            <div className="rounded-md border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-2">
                    Behavioral Question
                  </p>
                  <p className="text-base font-semibold text-stone-950 dark:text-white leading-relaxed">
                    {currentQuestion}
                  </p>
                </div>
                <Button variant="ghost" mode="icon" size="sm" onClick={handleShuffle} title="Next question">
                  <Shuffle className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* STAR form */}
            {stage === "form" && (
              <div className="space-y-4">
                <StarField
                  id="situation"
                  label="Situation"
                  hint="What was the context? When and where did this happen?"
                  target="2-3 sentences"
                  value={situation}
                  onChange={setSituation}
                  minChars={10}
                />
                <StarField
                  id="task"
                  label="Task"
                  hint="What were you responsible for? What goal were you working toward?"
                  target="1-2 sentences"
                  value={task}
                  onChange={setTask}
                  minChars={5}
                />
                <StarField
                  id="action"
                  label="Action"
                  hint="What specific steps did YOU take? Use 'I' statements."
                  target="3-4 sentences"
                  value={action}
                  onChange={setAction}
                  minChars={10}
                />
                <StarField
                  id="result"
                  label="Result"
                  hint="What was the outcome? Quantify with metrics if possible."
                  target="1-2 sentences"
                  value={result}
                  onChange={setResult}
                  minChars={5}
                />

                {error && (
                  <div className="flex items-center gap-2 p-3 rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
                    <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
                  </div>
                )}

                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                  className="w-full"
                >
                  <Bot className="w-4 h-4" />
                  Get AI Feedback
                </Button>
              </div>
            )}

            {/* Loading */}
            {stage === "loading" && (
              <div className="rounded-md border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Loader2 className="w-5 h-5 text-lime-500 animate-spin" />
                  <div>
                    <p className="text-sm font-semibold text-stone-900 dark:text-white">
                      Evaluating your STAR response…
                    </p>
                    <p className="text-xs text-stone-400 dark:text-stone-500">
                      Gemini is analyzing each section
                    </p>
                  </div>
                </div>
                <div className="space-y-3 animate-pulse">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="rounded-md border border-stone-200 dark:border-stone-700 p-3 space-y-2">
                      <div className="w-20 h-3 rounded bg-stone-200 dark:bg-stone-700" />
                      <div className="w-full h-2 rounded bg-stone-200 dark:bg-stone-700" />
                      <div className="w-3/4 h-2 rounded bg-stone-200 dark:bg-stone-700" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            {stage === "results" && evaluation && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-5"
              >
                {/* Overall score */}
                <div className="rounded-md border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm font-bold text-stone-950 dark:text-white">Overall Score</p>
                      <p className="text-xs text-stone-400 dark:text-stone-500">Based on 4 STAR dimensions</p>
                    </div>
                    <span
                      className={`text-2xl font-bold ${
                        evaluation.overallScore >= 7
                          ? "text-lime-600 dark:text-lime-400"
                          : evaluation.overallScore >= 4
                            ? "text-amber-600 dark:text-amber-400"
                            : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {evaluation.overallScore}/10
                    </span>
                  </div>

                  {/* Section evaluations */}
                  <div className="space-y-2.5">
                    {(["situation", "task", "action", "result"] as const).map((name) => (
                      <SectionEvalCard key={name} name={name} section={evaluation[name]} />
                    ))}
                  </div>
                </div>

                {/* Speaking time + overall feedback */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-md border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-stone-400" />
                      <p className="text-xs font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider">
                        Speaking Time
                      </p>
                    </div>
                    <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                      {evaluation.estimatedSpeakingTime}
                    </p>
                  </div>
                  <div className="rounded-md border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="w-4 h-4 text-amber-500" />
                      <p className="text-xs font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider">
                        Overall Feedback
                      </p>
                    </div>
                    <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                      {evaluation.overallFeedback}
                    </p>
                  </div>
                </div>

                {/* Model answer */}
                <div className="rounded-md border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    <p className="text-xs font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider">
                      Model STAR Answer
                    </p>
                  </div>
                   <p className="text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-wrap font-mono text-xs">
                    {evaluation.modelAnswer}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button variant="primary" size="md" onClick={handleReset} className="flex-1">
                    <RefreshCw className="w-4 h-4" />
                    Try Another Question
                  </Button>
                  <Button variant="ghost" size="md" onClick={handleShuffle}>
                    <Shuffle className="w-4 h-4" />
                    New Question
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

function StarField({
  id,
  label,
  hint,
  target,
  value,
  onChange,
  minChars,
}: {
  id: string;
  label: string;
  hint: string;
  target: string;
  value: string;
  onChange: (v: string) => void;
  minChars: number;
}) {
  const isValid = value.trim().length >= minChars;

  return (
    <div className="rounded-md border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 dark:bg-stone-800/60 border-b border-stone-200 dark:border-stone-700">
        <div>
          <label htmlFor={`star-${id}`} className="text-xs font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider">
            {label}
          </label>
          <p className="text-xs text-stone-400 dark:text-stone-500 mt-0.5">{hint}</p>
        </div>
        <span className="text-xs font-mono text-stone-400 dark:text-stone-500 whitespace-nowrap">
          Target: {target}
        </span>
      </div>
      <textarea
        id={`star-${id}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        maxLength={2000}
        className="w-full text-sm px-4 py-3 bg-transparent text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none resize-none leading-relaxed"
        placeholder={`Describe the ${label.toLowerCase()}...`}
      />
      <div className="flex items-center justify-between px-4 py-1.5 border-t border-stone-100 dark:border-stone-700">
        <span className={`text-xs ${isValid ? "text-lime-500" : "text-stone-400 dark:text-stone-500"}`}>
          {isValid ? "✓ Adequate length" : `Min ${minChars} characters`}
        </span>
        <span className="text-xs font-mono text-stone-400 dark:text-stone-500">
          {value.length}
        </span>
      </div>
    </div>
  );
}

const SectionEvalCard = memo(function SectionEvalCard({
  name,
  section,
}: {
  name: string;
  section: SectionEvaluation;
}) {
  return (
    <div
      className={`flex items-start gap-3 px-3.5 py-2.5 rounded-md border ${
        section.addressed
          ? "bg-lime-50 dark:bg-lime-900/20 border-lime-200 dark:border-lime-800"
          : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
      }`}
    >
      {section.addressed ? (
        <CheckCircle2 className="w-4 h-4 text-lime-500 shrink-0 mt-0.5" />
      ) : (
        <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
      )}
      <div className="flex-1 min-w-0">
        <p className="text-xs font-bold text-stone-700 dark:text-stone-300 capitalize mb-0.5">{name}</p>
        <p className="text-xs text-stone-500 dark:text-stone-400">{section.specificity}</p>
        <p className="text-xs text-stone-600 dark:text-stone-300 mt-0.5">{section.feedback}</p>
      </div>
    </div>
  );
});
