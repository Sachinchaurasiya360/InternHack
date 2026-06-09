import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  RotateCcw,
  Briefcase,
  MapPin,
  Code2,
  Zap,
  ArrowUpIcon,
  Mic,
  MicOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { cn } from "@/lib/utils";
import { useAuthStore } from "../../../lib/auth.store";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type {
  JobAgentMessage,
  JobAgentResponse,
  JobFeedMatch,
} from "../../../lib/types";
import { SEO } from "../../../components/SEO";
import { ConfirmDialog } from "../../../components/ui/ConfirmDialog";
import { AgentMessage } from "./AgentMessage";
import { ThinkingIndicator } from "./ThinkingIndicator";
import { useSpeechRecognition } from "./useSpeechRecognition";

interface DisplayMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  jobs?: JobFeedMatch["job"][];
}

const FREE_LIMIT = 2;

const QUICK_PROMPTS = [
  { icon: Code2, text: "Remote React jobs" },
  { icon: MapPin, text: "Backend roles in Bangalore" },
  { icon: Briefcase, text: "Internships above 5 LPA" },
  { icon: Zap, text: "Show me DevOps opportunities" },
];

function useAutoResizeTextarea({
  minHeight,
  maxHeight,
}: {
  minHeight: number;
  maxHeight?: number;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback(
    (reset?: boolean) => {
      const textarea = textareaRef.current;
      if (!textarea) return;
      if (reset) {
        textarea.style.height = `${minHeight}px`;
        return;
      }
      textarea.style.height = `${minHeight}px`;
      const newHeight = Math.max(
        minHeight,
        Math.min(textarea.scrollHeight, maxHeight ?? Number.POSITIVE_INFINITY),
      );
      textarea.style.height = `${newHeight}px`;
    },
    [minHeight, maxHeight],
  );

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) textarea.style.height = `${minHeight}px`;
  }, [minHeight]);

  useEffect(() => {
    const handleResize = () => adjustHeight();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [adjustHeight]);

  return { textareaRef, adjustHeight };
}

export default function JobAgentPage() {
  const { user } = useAuthStore();
  const isPremium =
    (user?.subscriptionPlan === "MONTHLY" ||
      user?.subscriptionPlan === "YEARLY") &&
    user?.subscriptionStatus === "ACTIVE";

  const qc = useQueryClient();
  const [input, setInput] = useState("");
  const [interimText, setInterimText] = useState("");
  const [localMessages, setLocalMessages] = useState<DisplayMessage[]>([]);
  const [manualHitFreeLimit, setManualHitFreeLimit] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [hasChatted, setHasChatted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 24,
    maxHeight: 200,
  });

  // Voice input
  const {
    supported: voiceSupported,
    isListening,
    error: voiceError,
    start: startListening,
    stop: stopListening,
  } = useSpeechRecognition({
    onInterim: (text) => setInterimText(text),
    onFinal: (text) => {
      setInput((prev) => (prev ? `${prev} ${text}` : text));
      setInterimText("");
      setTimeout(() => adjustHeight(), 0);
    },
  });

  const displayValue = input + (interimText ? " " + interimText : "");

  const [voiceHint, setVoiceHint] = useState<string | null>(null);

  useEffect(() => {
    if (voiceError === "not-allowed") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVoiceHint("Microphone access blocked - check browser settings");
    }
  }, [voiceError]);

  useEffect(() => {
    if (!voiceHint) return;
    const timer = setTimeout(() => setVoiceHint(null), 5000);
    return () => clearTimeout(timer);
  }, [voiceHint]);

  const { data: conversation } = useQuery({
    queryKey: queryKeys.jobAgent.conversation(),
    queryFn: async () => {
      const res = await api.get("/job-agent/conversation");
      return res.data as { messages: JobAgentMessage[] } | null;
    },
    enabled: !hasChatted,
    retry: false,
    staleTime: Infinity,
  });

  const conversationMessages = useMemo<DisplayMessage[]>(
    () =>
      conversation?.messages?.map((m, index) => ({
        id: m.id ?? `${m.role}-${m.timestamp}-${index}`,
        role: m.role,
        content: m.content,
        jobs: m.jobs?.length ? m.jobs : undefined,
      })) ?? [],
    [conversation],
  );

  const messages =
    hasChatted || localMessages.length > 0
      ? localMessages
      : conversationMessages;
  const userMsgCount = messages.filter((m) => m.role === "user").length;
  const hitFreeLimit =
    manualHitFreeLimit || (!isPremium && userMsgCount >= FREE_LIMIT);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scroll = () => el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    requestAnimationFrame(scroll);
    const t = setTimeout(scroll, 300);
    return () => clearTimeout(t);
  }, [messages]);

  const chatMut = useMutation({
    mutationFn: async (message: string) => {
      const res = await api.post("/job-agent/chat", { message });
      return res.data as JobAgentResponse;
    },
    onSuccess: (data) => {
      setHasChatted(true);
      setLocalMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: data.reply,
          jobs: data.jobs.length > 0 ? data.jobs : undefined,
        },
      ]);
    },
    onError: (err: unknown) => {
      const resp = (
        err as {
          response?: {
            status?: number;
            data?: {
              usage?: { action?: string; tier?: string };
            };
          };
        }
      )?.response;
      const isFreeLimitError =
        resp?.status === 429 &&
        resp.data?.usage?.action === "AI_JOB_CHAT" &&
        resp.data?.usage?.tier === "FREE";

      if (isFreeLimitError) {
        setManualHitFreeLimit(true);
        setLocalMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content:
              "You've used your 2 free messages. Upgrade to Premium for unlimited AI-powered job search.",
          },
        ]);
      } else {
        setLocalMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content:
              "We're experiencing high demand right now and couldn't process your request. Please try again in a moment.",
          },
        ]);
      }
    },
  });

  const resetMut = useMutation({
    mutationFn: () => api.delete("/job-agent/conversation"),
    onSuccess: () => {
      setHasChatted(false);
      setManualHitFreeLimit(false);
      setLocalMessages([]);
      qc.invalidateQueries({ queryKey: queryKeys.jobAgent.conversation() });
    },
  });

  const handleSend = (text?: string) => {
    const committedInput = interimText
      ? input
        ? `${input} ${interimText}`
        : interimText
      : input;
    const msg = (text ?? committedInput).trim();
    if (!msg || chatMut.isPending) return;
    setInput("");
    setInterimText("");
    adjustHeight(true);
    setHasChatted(true);
    setLocalMessages([
      ...messages,
      { id: crypto.randomUUID(), role: "user", content: msg },
    ]);
    chatMut.mutate(msg);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    if (!isListening) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        stopListening();
        setInterimText("");
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isListening, stopListening]);

  useEffect(() => {
    if (!isListening) {
      const raf = requestAnimationFrame(() => {
        textareaRef.current?.focus();
        const len = input.length;
        textareaRef.current?.setSelectionRange(len, len);
      });
      return () => cancelAnimationFrame(raf);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isListening]);

  const isEmpty = messages.length === 0;
  const inputDisabled = chatMut.isPending || hitFreeLimit;

  return (
    <div className="relative flex flex-col flex-1 min-h-0 overflow-hidden overscroll-none bg-stone-50 dark:bg-stone-950">
      <SEO title="InternHack AI" noIndex />

      {/* Editorial header */}
      <div className="shrink-0 px-4 sm:px-8 pt-4 pb-2 bg-stone-50 dark:bg-stone-950">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-1">
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"
            />
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">
              system online
            </span>
            <span className="text-[10px] text-stone-300 dark:text-stone-700 font-mono">
              |
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
              ai / job agent
            </span>
          </div>

          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Talk to your job agent.
            </h1>

            <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest">
              {!isPremium ? (
                <span className="text-stone-500 dark:text-stone-400">
                  <span className="text-stone-900 dark:text-stone-50">
                    {Math.min(userMsgCount, FREE_LIMIT)}
                  </span>

                  <span className="text-stone-400 dark:text-stone-600">
                    {" "}
                    / {FREE_LIMIT} free
                  </span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-lime-600 dark:text-lime-400">
                  <div className="h-1 w-1 bg-lime-400 rounded-full"></div>
                  premium, unlimited
                </span>
              )}

              {messages.length > 0 && (
                <Button
                  type="button"
                  onClick={() => {
                    if (messages.length === 0) return;
                    setShowResetConfirm(true);
                  }}
                  disabled={resetMut.isPending}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[10px] font-mono uppercase tracking-widest text-stone-700 dark:text-stone-300 bg-transparent border border-stone-300 dark:border-white/15 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer disabled:opacity-50"
                >
                  <RotateCcw className="w-3 h-3" />
                  new chat
                </Button>
              )}
            </div>

            <ConfirmDialog
              open={showResetConfirm}
              title="Start a new chat?"
              description="This will permanently delete your current conversation. This action cannot be undone."
              confirmLabel="Delete and start new"
              cancelLabel="Cancel"
              onConfirm={() => {
                resetMut.mutate();
                setShowResetConfirm(false);
              }}
              onCancel={() => setShowResetConfirm(false)}
            />
          </div>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 min-h-0 flex flex-col overflow-hidden px-4 sm:px-8">
        <AnimatePresence mode="wait">
          {isEmpty ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex-1 min-h-0 flex flex-col items-center justify-center gap-4 w-full max-w-xl mx-auto pt-2 pb-1 overflow-y-auto"
            >
                {/* Hero icon box */}
                <motion.div
                  className="relative mb-2 mt-0.5"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.5,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute inset-0 bg-lime-400/15 dark:bg-lime-400/10 blur-3xl rounded-full" />

                  <div className="relative w-11 h-11 rounded-2xl bg-white dark:bg-stone-900 flex items-center justify-center border border-stone-200 dark:border-stone-700 shadow-lg">
                    <img src="/logo.png" alt="InternHack" className="w-7 h-7 object-contain" />
                  </div>

                  <div className="absolute -top-1 -right-1 h-2 w-2 bg-lime-400 rounded-full border-2 border-white dark:border-stone-950 shadow-[0_0_8px_rgba(163,230,53,0.8)]" />
                </motion.div>

                <h2 className="text-lg font-extrabold tracking-tight mb-1 text-stone-900 dark:text-stone-50">
                  Hey{user?.name ? `, ${user.name.split(" ")[0]}` : ""}.
                </h2>

                <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 max-w-sm mb-3 text-center leading-relaxed">
                  Tell me what you're looking for and I'll surface the best
                  matches from the live job feed.
                </p>

                {/* Quick prompt numbered grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-xl">
                  {QUICK_PROMPTS.map((q, i) => (
                    <button
                      key={q.text}
                      type="button"
                      onClick={() => handleSend(q.text)}
                      className="group relative flex flex-col justify-between p-3.5 text-left rounded-2xl border border-stone-200 dark:border-stone-800 bg-white/50 dark:bg-stone-900/50 hover:bg-white dark:hover:bg-stone-900 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:border-stone-300 dark:hover:border-stone-700"
                    >
                      <div className="flex flex-col gap-2 w-full">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">
                          / {String(i + 1).padStart(2, "0")}
                        </span>

                        <div className="flex items-center gap-2">
                          <q.icon className="w-4 h-4 text-stone-500 dark:text-stone-400 group-hover:text-lime-500 transition-colors shrink-0" />

                          <span className="text-xs sm:text-sm font-semibold text-stone-800 dark:text-stone-200 group-hover:text-stone-950 dark:group-hover:text-white transition-colors truncate">
                            {q.text}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {!isPremium && (
                  <p className="mt-4 text-center text-xs text-stone-500 dark:text-stone-400">
                    Free plan: {FREE_LIMIT} messages per day{" "}
                    <span className="text-stone-400">-</span>{" "}
                    <Link
                      to="/student/checkout"
                      className="font-medium text-lime-600 dark:text-lime-400 hover:text-lime-500 dark:hover:text-lime-300 hover:underline no-underline"
                    >
                      Upgrade for unlimited
                    </Link>
                  </p>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="messages"
                ref={scrollRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex-1 min-h-0 overflow-y-auto pt-2 pb-2 mask-[linear-gradient(to_bottom,transparent,black_3%,black_97%,transparent)]"
              >
                <div className="mx-auto w-full max-w-4xl space-y-5">
                  {messages.map((msg) => (
                    <AgentMessage
                      key={msg.id}
                      role={msg.role}
                      content={msg.content}
                      jobs={msg.jobs}
                    />
                  ))}

                  {chatMut.isPending && <ThinkingIndicator />}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
      </div>

      {/* Input bar */}
      <div className="shrink-0 px-4 sm:px-8 pb-4 pt-2 border-t border-stone-200 dark:border-white/10 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-md w-full">
        <div className="max-w-4xl mx-auto space-y-2">
          <div className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 focus-within:border-stone-400 dark:focus-within:border-stone-600 transition-colors shadow-sm">
            {/* Textarea */}
            <div className="px-4 pt-3 pb-0">
              <textarea
                ref={textareaRef}
                value={displayValue}
                onChange={(e) => {
                  setInterimText("");
                  setInput(e.target.value);
                  adjustHeight();
                }}
                onKeyDown={handleKeyDown}
                placeholder={
                  hitFreeLimit
                    ? "Upgrade to continue chatting..."
                    : chatMut.isPending
                      ? "Thinking..."
                      : "Ask me about jobs..."
                }
                disabled={inputDisabled}
                className={cn(
                  "w-full resize-none bg-transparent border-none",
                  "text-stone-900 dark:text-stone-50 text-sm leading-relaxed",
                  "focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
                  "placeholder:text-stone-400 dark:placeholder:text-stone-500 placeholder:text-sm",
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                  "scrollbar-thin overflow-y-auto",
                )}
                style={{ minHeight: "24px" }}
              />
            </div>

            {/* Bottom action row */}
            <div className="flex items-center justify-between px-3 py-2.5">
              <div className="flex items-center gap-1">
                {voiceSupported && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      if (isListening) {
                        setInterimText("");
                        stopListening();
                      } else {
                        startListening();
                      }
                    }}
                    aria-label={
                      isListening ? "Stop recording" : "Start voice input"
                    }
                    aria-pressed={isListening}
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer",
                      isListening
                        ? "bg-red-50 dark:bg-red-950/30 text-red-500 dark:text-red-400 border border-red-200/50 dark:border-red-500/20"
                        : "text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800",
                    )}
                  >
                    {isListening ? (
                      <motion.span
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.2,
                          ease: "easeInOut",
                        }}
                        className="flex items-center justify-center"
                      >
                        <MicOff className="w-4 h-4" />
                      </motion.span>
                    ) : (
                      <Mic className="w-4 h-4" />
                    )}
                  </Button>
                )}
              </div>

              <Button
                type="button"
                size="icon"
                onClick={() => handleSend()}
                disabled={
                  !(input.trim() || interimText.trim()) || inputDisabled
                }
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer disabled:cursor-not-allowed",
                  (input.trim() || interimText.trim()) && !inputDisabled
                    ? "bg-lime-400 hover:bg-lime-300 text-stone-950 shadow-sm"
                    : "bg-stone-100 dark:bg-white/10 text-stone-400 dark:text-stone-600",
                )}
                aria-label="Send"
              >
                <ArrowUpIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1 px-1 text-center text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500 select-none">
            <div className="flex items-center justify-center gap-1.5 flex-wrap">
              <span>
                {hitFreeLimit
                  ? "limit reached"
                  : "enter to send, shift + enter for newline"}
              </span>
              {voiceHint && (
                <span className="text-red-500 dark:text-red-400 font-bold animate-pulse">
                  ({voiceHint})
                </span>
              )}
            </div>
            <p className="text-stone-500 dark:text-stone-500">
              Powered by InternHack AI · Always verify job details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
