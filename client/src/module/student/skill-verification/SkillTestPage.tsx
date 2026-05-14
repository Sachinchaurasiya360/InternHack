import { useEffect, useState, useCallback, useRef } from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Loader2,
  AlertTriangle,
  ShieldCheck,
  Eye,
  EyeOff,
  Maximize,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Camera,
  Ban,
  Shield,
  FileText,
  Trophy,
} from "lucide-react";
import api from "../../../lib/axios";
import toast from "@/components/ui/toast";
import type {
  SkillTestWithQuestions,
  SkillTestSubmitResult,
} from "../../../lib/types";
import { useProctoring } from "../../../hooks/useProctoring";
import ProctoringCamera from "../../../components/ProctoringCamera";
import ProctorWarningOverlay from "./ProctorWarningOverlay";
import { Button } from "../../../components/ui/button";

const OPTION_LABELS = ["A", "B", "C", "D"] as const;

/* ------------------------------------------------------------------ */
/*  Timer hook                                                         */
/* ------------------------------------------------------------------ */
function useCountdown(totalSeconds: number | null, onExpire: () => void) {
  const [remaining, setRemaining] = useState(totalSeconds ?? 0);
  const onExpireRef = useRef(onExpire);
  onExpireRef.current = onExpire;

  useEffect(() => {
    if (!totalSeconds || totalSeconds <= 0) return;
    setRemaining(totalSeconds);

    const interval = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onExpireRef.current();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [totalSeconds]);

  const mins = Math.floor(remaining / 60);
  const secs = remaining % 60;
  const formatted = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  const isUrgent = totalSeconds !== null && remaining <= 60;

  return { remaining, formatted, isUrgent };
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function SkillTestPage() {
  const { testId } = useParams();

  const [test, setTest] = useState<SkillTestWithQuestions | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [currentQ, setCurrentQ] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<SkillTestSubmitResult | null>(null);
  const [started, setStarted] = useState(false);
  const [cameraReady, setCameraReady] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [retryAfter, setRetryAfter] = useState<Date | null>(null); 
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const submittingRef = useRef(false);
  const [remainingSecs, setRemainingSecs] = useState<number | null>(null);

  /* ---- Prevent closing tab during active test ---------------------- */
  useEffect(() => {
    if (!started || result) return;
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [started, result]);

  /* ---- Page title during test -------------------------------------- */
  useEffect(() => {
    const original = document.title;
    if (started && !result) {
      document.title = "Proctored Test In Progress";
    }
    return () => {
      document.title = original;
    };
  }, [started, result]);

  /* ---- Proctoring hook ------------------------------------------- */
  const handleTerminate = useCallback(() => {
    terminateRef.current?.();
  }, []);

  const proctor = useProctoring({
    enabled: started && !result,
    onTerminate: handleTerminate,
  });

  /* Fetch test detail ----------------------------------------------- */
  useEffect(() => {
    if (!testId) return;
    setLoading(true);
    api
      .get(`/skill-tests/${testId}`)
      .then((res) => setTest(res.data))
      .catch((err) => {
        setError(err?.response?.data?.error ?? "Test not found.");
      })
      .finally(() => setLoading(false));
  }, [testId]);

  /* Start test ------------------------------------------------------ */
  const handleStart = useCallback(async () => {
    if (!testId) return;
    try {
      const res = await api.post(`/skill-tests/${testId}/start`);
      // Use server-derived remaining time instead of full timeLimitSecs
      setRemainingSecs(res.data.remainingSecs); 
      setTest((prev) =>
        prev ? { ...prev, questions: res.data.questions } : prev,
      );
      setStarted(true);
      await proctor.requestFullscreen();
    } catch (err: any) {
      if (err?.response?.status === 429) {
        setRetryAfter(new Date(err.response.data.retryAfter));
        toast.error("Cooldown active! Please wait before retaking.");
      } else {
        toast.error(err?.response?.data?.error ?? "Failed to start test");
      }
    }
  }, [testId, proctor]);

  /* Submit ---------------------------------------------------------- */
  const handleSubmit = useCallback(
    async (_auto = false) => {
      if (!test || submittingRef.current) return;
      submittingRef.current = true;
      setSubmitting(true);

      try {
        const answersPayload = Object.entries(answers).map(([qId, idx]) => ({
          questionId: Number(qId),
          selectedIndex: idx,
        }));

        const res = await api.post(`/skill-tests/${test.id}/submit`, {
          answers: answersPayload,
          proctorLog: proctor.getProctorLog(),
        });
        setResult(res.data);

        if (res.data.passed) {
          toast.success(
            "Congratulations! You passed and your skill is now verified!",
          );
        } else {
          toast.error(
            `Score: ${res.data.score}% - you need ${test.passThreshold}% to pass.`,
          );
        }

        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        }
      } catch (err: any) {
        toast.error(err?.response?.data?.error ?? "Failed to submit test");
      } finally {
        submittingRef.current = false;
        setSubmitting(false);
      }
    },
    [test, answers, proctor],
  );

  // Wire terminate callback
  const terminateRef = useRef<() => void>(undefined);
  terminateRef.current = () => handleSubmit(true);

  /* Timer ----------------------------------------------------------- */
  
  // Initialize countdown from server remainingSecs to survive page refresh
  const { formatted: timerDisplay, isUrgent } = useCountdown(
    started && !result ? remainingSecs : null,
    () => handleSubmit(true),
  );

  /* Helpers --------------------------------------------------------- */
  const questions = test?.questions ?? [];
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === totalQuestions && totalQuestions > 0;
  const currentQuestion = questions[currentQ];

  const selectAnswer = (questionId: number, optIdx: number) => {
    if (result) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optIdx }));
  };

  /* Loading --------------------------------------------------------- */
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
        <div className="max-w-4xl w-full px-6 animate-pulse space-y-4">
          <div className="h-8 bg-gray-100 dark:bg-gray-800 rounded-xl w-1/3" />
          <div className="h-48 bg-gray-100 dark:bg-gray-800 rounded-2xl" />
        </div>
      </div>
    );
  }

  const closeTab = () => window.close();

  if (error || !test) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-6">
        <div className="max-w-3xl mx-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={closeTab}
            className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white mb-5"
          >
            <ArrowLeft className="w-4 h-4" /> Close
          </Button>
          <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm p-10 text-center space-y-3">
            <AlertTriangle className="w-10 h-10 text-amber-400 mx-auto" />
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
              Test Not Available
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  /* Camera gate - verify camera access before showing test info ------- */
  if (!started && !cameraReady) {
    const requestCamera = async () => {
      setCameraError(null);
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setCameraReady(true);
        // Stop the preview stream - proctoring camera component will start its own
        stream.getTracks().forEach((t) => t.stop());
        streamRef.current = null;
      } catch {
        setCameraError(
          "Camera access denied. Please allow camera permissions and try again.",
        );
      }
    };

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm p-8 space-y-6"
        >
          <div className="text-center space-y-2">
            <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center mx-auto">
              <Camera className="w-7 h-7 text-amber-600 dark:text-amber-400" />
            </div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
              Camera Required
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is a proctored test. Please enable your camera to continue.
            </p>
          </div>

          <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden flex items-center justify-center">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover hidden"
            />
            <Camera className="w-10 h-10 text-gray-300 dark:text-gray-600" />
          </div>

          {cameraError && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-3 text-center">
              <p className="text-sm text-red-600 dark:text-red-400">
                {cameraError}
              </p>
            </div>
          )}

          <Button
            size="lg"
            onClick={requestCamera}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-xl"
          >
            <Camera className="w-4 h-4" />
            Enable Camera & Continue
          </Button>
        </motion.div>
      </div>
    );
  }

  /* Pre-start screen ------------------------------------------------ */
  if (!started) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-6">
        <div className="max-w-3xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm p-8 space-y-6"
          >
            <div className="text-center space-y-2">
              <div className="w-14 h-14 bg-violet-100 dark:bg-violet-900/30 rounded-2xl flex items-center justify-center mx-auto">
                <ShieldCheck className="w-7 h-7 text-violet-600 dark:text-violet-400" />
              </div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {test.title}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                {test.skillName.replace(/-/g, " ")}
              </p>
            </div>
                    
            {test.description && (
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {test.description}
              </p>
            )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
  {[
    {
      label: "Time Limit",
      value: `${Math.ceil(test.timeLimitSecs / 60)} min`,
      icon: Clock,
    },
    {
      label: "Pass Score",
      value: `${test.passThreshold}%`,
      icon: CheckCircle2,
    },
    {
      label: "Questions",
      value: test.questionsPerSession ?? "—",
      icon: FileText,
    },
    {
      label: "Best Attempt",
      value:
  test.bestAttempt?.score !== undefined
    ? `${test.bestAttempt.score}%`
    : "—",
      icon: Trophy,
    },
  ].map((item) => (
    <div
      key={item.label}
      className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3 text-center"
    >
      <item.icon className="w-4 h-4 text-gray-400 mx-auto mb-1" />

      <p className="text-sm font-bold text-gray-900 dark:text-gray-100">
        {item.value}
      </p>

      <p className="text-[11px] text-gray-500 dark:text-gray-400">
        {item.label}
      </p>
    </div>
  ))}
</div>  
             

            {test.existingVerification && (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-3 text-center">
                <p className="text-sm text-green-700 dark:text-green-400 font-medium">
                  Already verified with {test.existingVerification.score}%
                  score. You can retake to improve.
                </p>
              </div>
            )}

            <div className="bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl p-4 space-y-2">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-gray-500 dark:text-gray-400" />{" "}
                Proctored Test Rules
              </h3>
              <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1.5 list-disc list-inside">
                <li>The test will enter fullscreen mode</li>
                <li>Your camera will be active for face detection</li>
                <li>
                  DevTools, right-click, copy/paste, and screenshots are
                  disabled
                </li>
                <li>3 tab switches will auto-submit your test</li>
                <li>Leaving fullscreen for 10+ seconds will auto-submit</li>
                <li>Printing and text dragging are blocked</li>
                <li>Closing the tab during the test is blocked</li>
                <li>
                  Your proctor log and integrity score are visible to recruiters
                </li>
              </ul>
            </div>

            {retryAfter && new Date() < retryAfter ? (
  <div className="w-full text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-xl text-sm text-gray-600 dark:text-gray-400">
    ⏳ Cooldown active! Retry available at {retryAfter.toLocaleTimeString()}
  </div>
) : (
  <Button
    size="lg"
    onClick={handleStart}
    className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-xl"
  >
    <Maximize className="w-4 h-4" />
    Start Proctored Test
  </Button>
)}
          </motion.div>
        </div>
      </div>
    );
  }

  /* Result screen --------------------------------------------------- */
  if (result) {
    const log = proctor.getProctorLog();
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-6">
        <div className="max-w-3xl mx-auto space-y-5">
          {/* Score card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`rounded-2xl p-8 text-center border ${
              result.passed
                ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
            }`}
          >
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold ${
                result.passed
                  ? "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400"
                  : "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400"
              }`}
            >
              {result.score}%
            </div>
            <h2
              className={`text-lg font-bold ${result.passed ? "text-green-800 dark:text-green-300" : "text-red-800 dark:text-red-300"}`}
            >
              {result.passed ? "Skill Verified!" : "Not Passed"}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {result.correctCount}/{result.totalQuestions} correct
              {!result.passed && ` - Need ${test.passThreshold}% to pass`}
            </p>

            {/* Proctor summary */}
            <div className="flex flex-wrap justify-center gap-3 mt-4 text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md">
                <EyeOff className="w-3 h-3" /> Tab: {log.tabSwitches}
              </span>
              <span className="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md">
                <Eye className="w-3 h-3" /> Focus: {log.focusLosses}
              </span>
              {log.devtoolsAttempts > 0 && (
                <span className="flex items-center gap-1 px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-md">
                  <Ban className="w-3 h-3" /> DevTools: {log.devtoolsAttempts}
                </span>
              )}
              {log.faceViolations.length > 0 && (
                <span className="flex items-center gap-1 px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-md">
                  <Camera className="w-3 h-3" /> Face:{" "}
                  {log.faceViolations.length}
                </span>
              )}
              <span className="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md">
                <Camera className="w-3 h-3" /> Cam:{" "}
                {log.cameraEnabled ? "On" : "Off"}
              </span>
              {log.terminated && (
                <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-md font-semibold">
                  Auto-terminated
                </span>
              )}
            </div>
          </motion.div>

          {/* Question review */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
              Question Review
            </h3>
            {questions.map((q, qIdx) => {
              const graded = result.gradedAnswers.find(
                (g) => g.questionId === q.id,
              );
              return (
                <div
                  key={q.id}
                  className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4 space-y-2"
                >
                  <p className="text-sm text-gray-900 dark:text-gray-100">
                    <span className="text-gray-400 mr-1">{qIdx + 1}.</span>
                    {q.question}
                  </p>
                  <div className="space-y-1.5">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = graded?.selectedIndex === optIdx;
                      const isCorrect = graded?.correct && isSelected;
                      const isWrong = !graded?.correct && isSelected;
                      return (
                        <div
                          key={optIdx}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs border ${
                            isCorrect
                              ? "border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300"
                              : isWrong
                                ? "border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300"
                                : "border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-400"
                          }`}
                        >
                          <span className="font-bold w-5">
                            {OPTION_LABELS[optIdx]}
                          </span>
                          <span>{opt}</span>
                        </div>
                      );
                    })}
                  </div>
                  {graded?.explanation && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 rounded-lg p-2 mt-1">
                      {graded.explanation}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        {/* Actions */}
        {/* Actions */}
        <div className="flex gap-3 pt-2 pb-8">
          <Button
            size="lg"
            variant="secondary"
            onClick={closeTab}
            className="flex-1 rounded-xl"
          >
            Close Tab
          </Button>

          {!result.passed && (
            retryAfter && new Date() < retryAfter ? (
              <div className="flex-1 text-center p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-sm text-gray-600 dark:text-gray-400">
                ⏳ Retry available at {retryAfter.toLocaleTimeString()}
              </div>
            ) : (
              <Button
                size="lg"
                onClick={() => {
                  setResult(null);
                  setAnswers({});
                  setCurrentQ(0);
                  setStarted(false);
                  setRetryAfter(null);
                }}
                className="flex-1 bg-violet-600 hover:bg-violet-700 text-white rounded-xl"
              >
                Try Again
              </Button>
            )
          )}
        </div>
        </div>
      </div>
    );
  }

  /* Test in progress ------------------------------------------------ */
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-4 pt-8">
      <div className="max-w-4xl mx-auto">
        {/* Fullscreen warning overlay */}
        {proctor.state.showFullscreenWarning && (
          <ProctorWarningOverlay
            secondsLeft={proctor.state.fullscreenGraceRemaining}
            onReturnFullscreen={proctor.requestFullscreen}
          />
        )}

        {/* Camera PiP */}
        <ProctoringCamera
          onViolation={proctor.registerFaceViolation}
          onSnapshot={proctor.addSnapshot}
          onError={(err) => {
            toast.error(`Camera: ${err}`);
            proctor.setCameraEnabled(false);
          }}
          onReady={() => proctor.setCameraEnabled(true)}
        />

        {/* Sticky header */}
        <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 -mx-4 px-4 py-3 mb-5">
          <div className="flex items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 min-w-0">
              <ShieldCheck className="w-5 h-5 text-violet-500 shrink-0" />
              <h1 className="text-sm font-bold text-gray-900 dark:text-gray-100 truncate">
                {test.title}
              </h1>
            </div>

            <div className="flex items-center gap-2">
              {/* Tab switch indicator */}
              {proctor.state.tabSwitches > 0 && (
                <span className="px-2 py-1 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-[10px] font-semibold rounded-md flex items-center gap-1">
                  <EyeOff className="w-3 h-3" /> {proctor.state.tabSwitches}/3
                </span>
              )}

              {/* DevTools indicator */}
              {proctor.state.devtoolsAttempts > 0 && (
                <span className="px-2 py-1 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-[10px] font-semibold rounded-md flex items-center gap-1">
                  <Ban className="w-3 h-3" /> {proctor.state.devtoolsAttempts}
                </span>
              )}

              {/* Face violation indicator */}
              {proctor.state.faceViolations.length > 0 && (
                <span className="px-2 py-1 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-[10px] font-semibold rounded-md flex items-center gap-1 animate-pulse">
                  <Camera className="w-3 h-3" />{" "}
                  {proctor.state.faceViolations.length}
                </span>
              )}

              {/* Progress */}
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] font-semibold rounded-md tabular-nums">
                {answeredCount}/{totalQuestions}
              </span>

              {/* Timer */}
              <div
                className={`px-3 py-1.5 rounded-lg text-sm font-mono font-bold tabular-nums ${
                  isUrgent
                    ? "bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 animate-pulse"
                    : "bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                }`}
              >
                {timerDisplay}
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal question navigator - at top */}
        <div className="flex flex-wrap gap-1.5 mb-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-3">
          {questions.map((q, i) => (
            <Button
              key={q.id}
              size="sm"
              variant="ghost"
              onClick={() => setCurrentQ(i)}
              className={`w-9 h-9 ${
                i === currentQ
                  ? "bg-violet-600 text-white shadow-sm hover:bg-violet-700"
                  : answers[q.id] !== undefined
                    ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {i + 1}
            </Button>
          ))}
        </div>

        {/* Current question */}
        <div>
          {currentQuestion && (
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm p-6"
            >
              <p className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-4">
                <span className="text-gray-400 dark:text-gray-500 mr-1.5">
                  {currentQ + 1}.
                </span>
                {currentQuestion.question}
              </p>

              <div className="space-y-2.5">
                {currentQuestion.options.map((opt, optIdx) => {
                  const isSelected = answers[currentQuestion.id] === optIdx;
                  return (
                    <Button
                      key={optIdx}
                      variant="outline"
                      onClick={() => selectAnswer(currentQuestion.id, optIdx)}
                      autoHeight
                      className={`w-full justify-start gap-3 py-3.5 rounded-xl text-left ${
                        isSelected
                          ? "border-violet-400 dark:border-violet-500 bg-violet-50 dark:bg-violet-900/20 text-violet-900 dark:text-violet-200 ring-1 ring-violet-200 dark:ring-violet-700"
                          : ""
                      }`}
                    >
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 border ${
                          isSelected
                            ? "border-violet-400 dark:border-violet-500 bg-violet-500 text-white"
                            : "border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400"
                        }`}
                      >
                        {OPTION_LABELS[optIdx]}
                      </span>
                      <span className="flex-1">{opt}</span>
                    </Button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-5 pb-8">
            <Button
              variant="secondary"
              onClick={() => setCurrentQ((p) => Math.max(0, p - 1))}
              disabled={currentQ === 0}
              className="rounded-xl"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </Button>

            {currentQ === totalQuestions - 1 ? (
              <Button
                onClick={() => handleSubmit(false)}
                disabled={!allAnswered || submitting}
                className="bg-green-600 hover:bg-green-700 text-white rounded-xl"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    Submit Test
                    {!allAnswered &&
                      ` (${totalQuestions - answeredCount} unanswered)`}
                  </>
                )}
              </Button>
            ) : (
              <Button
                onClick={() =>
                  setCurrentQ((p) => Math.min(totalQuestions - 1, p + 1))
                }
                className="bg-violet-600 hover:bg-violet-700 text-white rounded-xl"
              >
                Next <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
