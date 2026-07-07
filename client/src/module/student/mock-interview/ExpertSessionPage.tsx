import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { DodoPayments } from "dodopayments-checkout";
import {
  ArrowLeft,
  ArrowRight,
  Loader2,
  CheckCircle,
  Calendar,
  Clock,
  Sparkle,
  IndianRupee,
  Check,
} from "lucide-react";
import { SEO } from "../../../components/SEO";
import api from "../../../lib/axios";
import { Button } from "../../../components/ui/button";
import { Textarea } from "../../../components/ui/textarea";
import { queryKeys } from "../../../lib/query-keys";

type Step = "prep" | "slot" | "review" | "confirmed";

const FOCUS_AREA_OPTIONS = [
  "DSA",
  "System Design",
  "Frontend",
  "Backend",
  "Behavioral",
  "Resume Review",
];

const EXPERIENCE_LEVELS = [
  { value: "STUDENT", label: "Student, no experience" },
  { value: "FRESHER", label: "Fresher (0-1 yr)" },
  { value: "0_2_YEARS", label: "0-2 years" },
  { value: "2_PLUS_YEARS", label: "2+ years" },
] as const;

const STEPS: { id: Step; label: string }[] = [
  { id: "prep", label: "Prepare" },
  { id: "slot", label: "Pick a slot" },
  { id: "review", label: "Pay & confirm" },
];

interface ExpertSession {
  id: number;
  status: "PENDING_PAYMENT" | "SCHEDULED" | "COMPLETED" | "CANCELLED";
  scheduledAt: string;
  targetRole: string | null;
  experienceLevel: string | null;
  focusAreas: string[];
}

function formatSlotDay(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

function formatSlotTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "numeric",
    minute: "2-digit",
  });
}

function dayKey(iso: string): string {
  return new Date(iso).toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
}

export default function ExpertSessionPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const onBack = () => navigate("/student/mock-interview");

  const [step, setStep] = useState<Step>("prep");
  const [targetRole, setTargetRole] = useState("");
  const [experienceLevel, setExperienceLevel] = useState<string>("");
  const [focusAreas, setFocusAreas] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [paying, setPaying] = useState(false);
  const [failedNotice, setFailedNotice] = useState(false);
  const dodoInitialized = useRef(false);
  const bookingIdRef = useRef<number | null>(null);

  const { data: slots, isLoading: loadingSlots } = useQuery({
    queryKey: queryKeys.expertSession.availableSlots(),
    queryFn: async () => {
      const res = await api.get<{ slots: string[] }>("/student/expert-session/available-slots");
      return res.data.slots;
    },
    enabled: step === "slot",
  });

  const { data: mySessions } = useQuery({
    queryKey: queryKeys.expertSession.mySessions(),
    queryFn: async () => {
      const res = await api.get<ExpertSession[]>("/student/expert-session/my-sessions");
      return res.data;
    },
  });

  const days = useMemo(() => {
    if (!slots) return [];
    const seen = new Map<string, string>();
    for (const slot of slots) {
      const key = dayKey(slot);
      if (!seen.has(key)) seen.set(key, slot);
    }
    return Array.from(seen.entries());
  }, [slots]);

  const slotsForSelectedDay = useMemo(() => {
    if (!slots || !selectedDay) return [];
    return slots.filter((s) => dayKey(s) === selectedDay);
  }, [slots, selectedDay]);

  const pollStatus = useCallback(
    async (id: number) => {
      for (let i = 0; i < 12; i++) {
        await new Promise((r) => setTimeout(r, 2500));
        try {
          const { data } = await api.get<ExpertSession>(`/student/expert-session/status/${id}`);
          if (data.status === "SCHEDULED") {
            setPaying(false);
            setStep("confirmed");
            queryClient.invalidateQueries({ queryKey: queryKeys.expertSession.mySessions() });
            return;
          }
          if (data.status === "CANCELLED") {
            setPaying(false);
            setFailedNotice(true);
            return;
          }
        } catch {
          // ignore transient polling errors
        }
      }
      setPaying(false);
    },
    [queryClient],
  );

  useEffect(() => {
    if (dodoInitialized.current) return;
    dodoInitialized.current = true;

    const mode = import.meta.env.VITE_DODO_MODE === "live" ? "live" : "test";
    DodoPayments.Initialize({
      mode,
      displayType: "overlay",
      onEvent: (event) => {
        if (event.event_type === "checkout.status") {
          const status = (event.data?.message as { status?: string })?.status;
          if (status === "succeeded" && bookingIdRef.current) {
            void pollStatus(bookingIdRef.current);
          } else if (status === "failed") {
            setPaying(false);
            setFailedNotice(true);
          }
        }
        if (event.event_type === "checkout.closed") {
          DodoPayments.Checkout.close();
          setPaying(false);
        }
      },
    });
  }, [pollStatus]);

  useEffect(() => {
    return () => {
      DodoPayments.Checkout.close();
    };
  }, []);

  const checkoutMutation = useMutation({
    mutationFn: async () => {
      const res = await api.post("/student/expert-session/checkout", {
        scheduledAt: selectedSlot,
        targetRole: targetRole.trim() || undefined,
        experienceLevel: experienceLevel || undefined,
        focusAreas,
        notes: notes.trim() || undefined,
      });
      return res.data as { checkoutUrl: string; expertSessionId: number };
    },
    onSuccess: (data) => {
      bookingIdRef.current = data.expertSessionId;
      setFailedNotice(false);
      setPaying(true);
      DodoPayments.Checkout.open({ checkoutUrl: data.checkoutUrl });
    },
    onError: () => {
      toast.error("That slot may have just been taken. Pick another time.");
      setStep("slot");
    },
  });

  const canProceedFromPrep = experienceLevel !== "" && focusAreas.length > 0;

  const toggleFocusArea = (area: string) => {
    setFocusAreas((prev) => (prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]));
  };

  const stepIndex = STEPS.findIndex((s) => s.id === step);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-stone-50 dark:bg-stone-950">
      <SEO title="Book an Expert Session" noIndex />
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          {/* Header */}
          <div className="mb-8 flex items-start justify-between gap-4 border-b border-stone-200 dark:border-white/10 pb-7">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
                <span className="h-1.5 w-1.5 bg-lime-400" />
                interview / expert
              </div>
              <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                Book an expert session.
              </h1>
              <p className="mt-2 text-sm text-stone-500 max-w-xl">
                A 30-minute live mock interview with an industry expert, for ₹49.
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

          {/* Step progress */}
          {step !== "confirmed" && (
            <div className="mb-6 flex items-center gap-2">
              {STEPS.map((s, i) => (
                <div key={s.id} className="flex items-center gap-2 flex-1">
                  <div
                    className={`h-1.5 flex-1 rounded-sm transition-colors ${
                      i <= stepIndex ? "bg-lime-400" : "bg-stone-200 dark:bg-stone-800"
                    }`}
                  />
                </div>
              ))}
            </div>
          )}

          <AnimatePresence mode="wait">
            {step === "prep" && (
              <motion.div
                key="prep"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6 space-y-6"
              >
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-3">
                    Help the expert prepare for you
                  </span>

                  <label className="block text-sm font-bold text-stone-900 dark:text-stone-50 mb-2">
                    Target role (optional)
                  </label>
                  <input
                    type="text"
                    value={targetRole}
                    onChange={(e) => setTargetRole(e.target.value)}
                    placeholder="e.g. SDE Intern, Frontend Developer"
                    className="w-full rounded-md border border-stone-200 dark:border-white/10 bg-transparent px-3 py-2 text-sm text-stone-900 dark:text-stone-50 placeholder:text-stone-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-stone-900 dark:text-stone-50 mb-2">
                    Experience level <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {EXPERIENCE_LEVELS.map((lvl) => (
                      <button
                        key={lvl.value}
                        type="button"
                        onClick={() => setExperienceLevel(lvl.value)}
                        className={`px-3 py-2 text-left text-xs font-semibold rounded-md border transition-colors cursor-pointer ${
                          experienceLevel === lvl.value
                            ? "border-lime-400 bg-lime-50 dark:bg-lime-400/10 text-stone-900 dark:text-stone-50"
                            : "border-stone-200 dark:border-white/10 bg-transparent text-stone-500 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-white/5"
                        }`}
                      >
                        {lvl.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-stone-900 dark:text-stone-50 mb-2">
                    Focus areas <span className="text-red-500">*</span> (pick at least one)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {FOCUS_AREA_OPTIONS.map((area) => {
                      const selected = focusAreas.includes(area);
                      return (
                        <button
                          key={area}
                          type="button"
                          onClick={() => toggleFocusArea(area)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold border transition-colors cursor-pointer ${
                            selected
                              ? "border-lime-400 bg-lime-400 text-stone-950"
                              : "border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-white/5"
                          }`}
                        >
                          {selected && <Check className="w-3 h-3" />}
                          {area}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-stone-900 dark:text-stone-50 mb-2">
                    Anything else the expert should know? (optional)
                  </label>
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                    placeholder="e.g. specific companies you're targeting, a resume gap you want to discuss..."
                    className="bg-transparent border border-stone-200 dark:border-white/10 text-stone-900 dark:text-stone-50 text-sm"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <Button
                    variant="primary"
                    disabled={!canProceedFromPrep}
                    onClick={() => setStep("slot")}
                    className="bg-lime-400 text-stone-950 hover:bg-lime-300 disabled:opacity-40"
                  >
                    Continue to scheduling
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === "slot" && (
              <motion.div
                key="slot"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-6 space-y-5"
              >
                <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block">
                  Pick a day and time (IST)
                </span>

                {loadingSlots ? (
                  <div className="flex justify-center py-10">
                    <Loader2 className="w-6 h-6 animate-spin text-stone-400" />
                  </div>
                ) : days.length === 0 ? (
                  <div className="text-sm text-stone-500 py-6 text-center">
                    No slots available right now. Please check back soon.
                  </div>
                ) : (
                  <>
                    <div className="flex flex-wrap gap-2">
                      {days.map(([key, sampleSlot]) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => {
                            setSelectedDay(key);
                            setSelectedSlot(null);
                          }}
                          className={`px-3 py-2 rounded-md text-xs font-semibold border transition-colors cursor-pointer flex items-center gap-1.5 ${
                            selectedDay === key
                              ? "border-lime-400 bg-lime-50 dark:bg-lime-400/10 text-stone-900 dark:text-stone-50"
                              : "border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-white/5"
                          }`}
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          {formatSlotDay(sampleSlot)}
                        </button>
                      ))}
                    </div>

                    {selectedDay && (
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 pt-2 border-t border-stone-100 dark:border-white/5">
                        {slotsForSelectedDay.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedSlot(slot)}
                            className={`px-2 py-2 rounded-md text-xs font-semibold border transition-colors cursor-pointer flex items-center justify-center gap-1 ${
                              selectedSlot === slot
                                ? "border-lime-400 bg-lime-400 text-stone-950"
                                : "border-stone-200 dark:border-white/10 text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-white/5"
                            }`}
                          >
                            <Clock className="w-3 h-3" />
                            {formatSlotTime(slot)}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                )}

                <div className="flex justify-between pt-2">
                  <Button
                    variant="ghost"
                    onClick={() => setStep("prep")}
                    className="text-stone-600 dark:text-stone-400"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    disabled={!selectedSlot}
                    onClick={() => setStep("review")}
                    className="bg-lime-400 text-stone-950 hover:bg-lime-300 disabled:opacity-40"
                  >
                    Review & pay
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === "review" && selectedSlot && (
              <motion.div
                key="review"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md overflow-hidden"
              >
                <div className="p-6 space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block">
                    Review your booking
                  </span>

                  <div className="rounded-md border border-stone-200 dark:border-white/10 p-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm font-bold text-stone-900 dark:text-stone-50">
                      <Calendar className="w-4 h-4 text-lime-500" />
                      {formatSlotDay(selectedSlot)} &middot; {formatSlotTime(selectedSlot)} IST
                    </div>
                    {targetRole && (
                      <p className="text-xs text-stone-500">
                        Target role: <span className="text-stone-700 dark:text-stone-300 font-medium">{targetRole}</span>
                      </p>
                    )}
                    <p className="text-xs text-stone-500">
                      Experience:{" "}
                      <span className="text-stone-700 dark:text-stone-300 font-medium">
                        {EXPERIENCE_LEVELS.find((l) => l.value === experienceLevel)?.label}
                      </span>
                    </p>
                    <p className="text-xs text-stone-500">
                      Focus: <span className="text-stone-700 dark:text-stone-300 font-medium">{focusAreas.join(", ")}</span>
                    </p>
                  </div>

                  {failedNotice && (
                    <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-700 dark:border-red-400/30 dark:bg-red-400/10 dark:text-red-300">
                      Payment did not complete. You can try again below.
                    </div>
                  )}

                  <div className="flex items-center justify-between rounded-md bg-stone-50 dark:bg-white/5 border border-stone-200 dark:border-white/10 px-4 py-3">
                    <span className="text-sm font-bold text-stone-900 dark:text-stone-50">Total</span>
                    <span className="flex items-center text-xl font-bold text-stone-900 dark:text-stone-50">
                      <IndianRupee className="w-4 h-4" />49
                    </span>
                  </div>

                  <div className="flex justify-between pt-2">
                    <Button
                      variant="ghost"
                      onClick={() => setStep("slot")}
                      disabled={paying}
                      className="text-stone-600 dark:text-stone-400"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </Button>
                    <Button
                      variant="primary"
                      disabled={paying || checkoutMutation.isPending}
                      onClick={() => checkoutMutation.mutate()}
                      className="bg-lime-400 text-stone-950 hover:bg-lime-300 disabled:opacity-60"
                    >
                      {paying || checkoutMutation.isPending ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <>
                          <IndianRupee className="w-3.5 h-3.5" />
                          Pay ₹49 & book
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            {step === "confirmed" && (
              <motion.div
                key="confirmed"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md p-8 text-center space-y-4"
              >
                <div className="w-14 h-14 bg-lime-400/10 text-lime-500 flex items-center justify-center rounded-md mx-auto">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-stone-900 dark:text-stone-50">Session booked!</h2>
                  <p className="text-sm text-stone-500 mt-1 max-w-sm mx-auto">
                    You're confirmed for {formatSlotDay(selectedSlot ?? "")} at {formatSlotTime(selectedSlot ?? "")} IST.
                    We've emailed you a confirmation, the meeting link will follow shortly before your session.
                  </p>
                </div>
                <Button
                  variant="secondary"
                  onClick={onBack}
                  className="bg-stone-100 text-stone-900 hover:bg-stone-200 dark:bg-white/5 dark:text-stone-100 dark:hover:bg-white/10"
                >
                  Back to mock interviews
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* My sessions */}
          {mySessions && mySessions.length > 0 && step !== "confirmed" && (
            <div className="mt-8">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400 flex items-center gap-1.5 mb-3">
                <Sparkle className="w-3 h-3" />
                Your sessions
              </span>
              <div className="space-y-2">
                {mySessions.map((s) => (
                  <div
                    key={s.id}
                    className="flex items-center justify-between rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 px-4 py-3"
                  >
                    <div className="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300">
                      <Calendar className="w-3.5 h-3.5 text-stone-400" />
                      {formatSlotDay(s.scheduledAt)} &middot; {formatSlotTime(s.scheduledAt)} IST
                    </div>
                    <span
                      className={`text-xs font-mono uppercase tracking-widest px-2 py-0.5 rounded ${
                        s.status === "SCHEDULED"
                          ? "bg-lime-400/10 text-lime-600 dark:text-lime-400"
                          : s.status === "COMPLETED"
                            ? "bg-stone-100 dark:bg-white/5 text-stone-500"
                            : "bg-red-400/10 text-red-600 dark:text-red-400"
                      }`}
                    >
                      {s.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
