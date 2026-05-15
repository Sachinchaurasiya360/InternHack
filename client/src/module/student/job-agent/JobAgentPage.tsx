import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  RotateCcw,
  BotMessageSquare,
  Briefcase,
  MapPin,
  Code2,
  Zap,
  Crown,
  ArrowUpIcon,
} from "lucide-react";
import { Link } from "react-router";
import { cn } from "@/lib/utils";
import { useAuthStore } from "../../../lib/auth.store";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { JobAgentMessage, JobAgentResponse, JobFeedMatch } from "../../../lib/types";
import { SEO } from "../../../components/SEO";
import { AgentMessage } from "./AgentMessage";
import { ThinkingIndicator } from "./ThinkingIndicator";

interface DisplayMessage {
  id?: string;
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

function useAutoResizeTextarea({ minHeight, maxHeight }: { minHeight: number; maxHeight?: number }) {
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
      const newHeight = Math.max(minHeight, Math.min(textarea.scrollHeight, maxHeight ?? Number.POSITIVE_INFINITY));
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
    (user?.subscriptionPlan === "MONTHLY" || user?.subscriptionPlan === "YEARLY") &&
    user?.subscriptionStatus === "ACTIVE";

  const qc = useQueryClient();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<DisplayMessage[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [hitFreeLimit, setHitFreeLimit] = useState(false);
  const hasChattedRef = useRef(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 44, maxHeight: 200 });

  const userMsgCount = messages.filter((m) => m.role === "user").length;

  const { data: conversation } = useQuery({
    queryKey: queryKeys.jobAgent.conversation(),
    queryFn: async () => {
      const res = await api.get("/job-agent/conversation");
      return res.data as { messages: JobAgentMessage[] } | null;
    },
    enabled: !hasChattedRef.current,
    retry: false,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (conversation?.messages?.length && !hasChattedRef.current) {
      setMessages(
        conversation.messages.map((m: any) => ({
          id: crypto.randomUUID(),
          role: m.role,
          content: m.content,
          jobs: m.jobs?.length ? m.jobs : undefined,
        })),
      );
      if (!isPremium) {
        const userMsgs = conversation.messages.filter((m) => m.role === "user").length;
        if (userMsgs >= FREE_LIMIT) setHitFreeLimit(true);
      }
    }
  }, [conversation, isPremium]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  // Fallback non-streaming mutation (used if SSE fails)
  const chatMut = useMutation({
    mutationFn: async (message: string) => {
      const res = await api.post("/job-agent/chat", { message });
      return res.data as JobAgentResponse;
    },
    onSuccess: (data, _message, assistantId) => {
      hasChattedRef.current = true;
      setMessages((prev) =>
        prev.map((m) =>
          m.id === (assistantId as unknown as string)
            ? { ...m, content: data.reply, jobs: data.jobs.length > 0 ? data.jobs : undefined }
            : m,
        ),
      );
    },
    onError: (err: unknown, _message, assistantId) => {
      const resp = (err as { response?: { status?: number; data?: { freeLimit?: boolean } } })?.response;
      if (resp?.status === 403 && resp?.data?.freeLimit) {
        setHitFreeLimit(true);
        setMessages((prev) =>
          prev.map((m) =>
            m.id === (assistantId as unknown as string)
              ? { ...m, content: "You've used your 2 free messages. Upgrade to Premium for unlimited AI-powered job search." }
              : m,
          ),
        );
      } else {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === (assistantId as unknown as string)
              ? { ...m, content: "We're experiencing high demand right now and couldn't process your request. Please try again in a moment." }
              : m,
          ),
        );
      }
    },
  });

  const startStream = useCallback(
    async (message: string) => {
      // Cancel any in-flight stream
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      const assistantId = crypto.randomUUID();
      hasChattedRef.current = true;

      // Optimistically add empty assistant bubble
      setMessages((prev) => [
        ...prev,
        { id: assistantId, role: "assistant" as const, content: "", jobs: undefined },
      ]);

      let usedFallback = false;

      try {
        const token = useAuthStore.getState().token;
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/job-agent/chat/stream`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ message }),
            signal: abortControllerRef.current.signal,
          },
        );

        // Handle HTTP errors before streaming starts
        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          if (res.status === 403 && errData?.freeLimit) {
            setHitFreeLimit(true);
            setMessages((prev) =>
              prev.map((m) =>
                m.id === assistantId
                  ? { ...m, content: "You've used your 2 free messages. Upgrade to Premium for unlimited AI-powered job search." }
                  : m,
              ),
            );
            return;
          }
          // Non-free-limit error → fallback
          usedFallback = true;
          throw new Error(errData?.message || "Stream request failed");
        }

        // Parse SSE stream
        const reader = res.body!.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          // Split on double newline (SSE event boundary)
          const parts = buffer.split("\n\n");
          buffer = parts.pop() ?? "";

          for (const part of parts) {
            if (!part.trim()) continue;
            const eventMatch = part.match(/^event: (\w+)/m);
            const dataMatch = part.match(/^data: (.+)$/m);
            if (!eventMatch || !dataMatch) continue;

            const event = eventMatch[1];
            let data: any;
            try { data = JSON.parse(dataMatch[1]); } catch { continue; }

            if (event === "token") {
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId ? { ...m, content: m.content + data.text } : m,
                ),
              );
            } else if (event === "jobs") {
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId
                    ? { ...m, jobs: data.jobs?.length > 0 ? data.jobs : undefined }
                    : m,
                ),
              );
            } else if (event === "error") {
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId
                    ? { ...m, content: "Something went wrong. Please try again." }
                    : m,
                ),
              );
            }
            // "done" event — nothing to do, stream ends naturally
          }
        }
      } catch (err: any) {
        if (err?.name === "AbortError") return;

        if (usedFallback) {
          // Fallback to non-streaming endpoint
          try {
            const token = useAuthStore.getState().token;
            const res = await api.post("/job-agent/chat", { message });
            const data = res.data as JobAgentResponse;
            setMessages((prev) =>
              prev.map((m) =>
                m.id === assistantId
                  ? { ...m, content: data.reply, jobs: data.jobs?.length > 0 ? data.jobs : undefined }
                  : m,
              ),
            );
          } catch (fallbackErr: any) {
            const resp = (fallbackErr as any)?.response;
            if (resp?.status === 403 && resp?.data?.freeLimit) {
              setHitFreeLimit(true);
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId
                    ? { ...m, content: "You've used your 2 free messages. Upgrade to Premium for unlimited AI-powered job search." }
                    : m,
                ),
              );
            } else {
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId
                    ? { ...m, content: "We're experiencing high demand right now. Please try again in a moment." }
                    : m,
                ),
              );
            }
          }
        } else {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId
                ? { ...m, content: "We're experiencing high demand right now. Please try again in a moment." }
                : m,
            ),
          );
        }
      }
    },
    [],
  );

  const resetMut = useMutation({
    mutationFn: () => api.delete("/job-agent/conversation"),
    onSuccess: () => {
      abortControllerRef.current?.abort();
      hasChattedRef.current = false;
      setHitFreeLimit(false);
      setIsStreaming(false);
      setMessages([]);
      qc.invalidateQueries({ queryKey: queryKeys.jobAgent.conversation() });
    },
  });

  const handleSend = useCallback(
    async (text?: string) => {
      const msg = (text ?? input).trim();
      if (!msg || isStreaming) return;
      setInput("");
      adjustHeight(true);
      setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "user" as const, content: msg }]);
      setIsStreaming(true);
      await startStream(msg);
      setIsStreaming(false);
    },
    [input, isStreaming, startStream, adjustHeight],
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // ThinkingIndicator shows only before first token arrives
  const lastMsg = messages[messages.length - 1];
  const showThinking = isStreaming && (!lastMsg || lastMsg.role !== "assistant" || lastMsg.content === "");

  const isEmpty = messages.length === 0;
  const inputDisabled = isStreaming || hitFreeLimit;

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-stone-50 dark:bg-stone-950">
      <SEO title="InternHack AI" noIndex />

      {/* Editorial header */}
      <div className="shrink-0 px-4 sm:px-8 pt-6 pb-4 bg-stone-50 dark:bg-stone-950">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-1 w-1 bg-lime-400"></div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
              ai / job agent
            </span>
          </div>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
              Talk to your job agent.
            </h1>
            <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest">
              {!isPremium ? (
                <span className="text-stone-500 dark:text-stone-400">
                  <span className="text-stone-900 dark:text-stone-50">{Math.min(userMsgCount, FREE_LIMIT)}</span>
                  <span className="text-stone-400 dark:text-stone-600"> / {FREE_LIMIT} free</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-lime-600 dark:text-lime-400">
                  <div className="h-1 w-1 bg-lime-400"></div>
                  premium, unlimited
                </span>
              )}
              {messages.length > 0 && (
                <button
                  type="button"
                  onClick={() => resetMut.mutate()}
                  disabled={resetMut.isPending}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[10px] font-mono uppercase tracking-widest text-stone-700 dark:text-stone-300 bg-transparent border border-stone-300 dark:border-white/15 hover:bg-stone-100 dark:hover:bg-white/5 transition-colors cursor-pointer disabled:opacity-50"
                >
                  <RotateCcw className="w-3 h-3" />
                  new chat
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Messages area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 sm:px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {isEmpty ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center py-12"
              >
                {/* Hero icon box */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-md bg-stone-900 dark:bg-stone-50 flex items-center justify-center">
                    <BotMessageSquare className="w-8 h-8 text-stone-50 dark:text-stone-900" />
                  </div>
                  <div className="absolute -top-1 -right-1 h-2 w-2 bg-lime-400"></div>
                </div>

                <h2 className="text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-1.5">
                  Hey{user?.name ? `, ${user.name.split(" ")[0]}` : ""}.
                </h2>
                <p className="text-sm text-stone-600 dark:text-stone-400 mb-6 text-center max-w-md">
                  Tell me what you're looking for and I'll surface the best matches from the live job feed.
                </p>

                {/* Quick prompt numbered grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 w-full max-w-2xl border-t border-l border-stone-200 dark:border-white/10">
                  {QUICK_PROMPTS.map((q, i) => (
                    <button
                      key={q.text}
                      type="button"
                      onClick={() => handleSend(q.text)}
                      className="group relative flex items-start gap-3 p-4 text-left transition-colors border-r border-b border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 hover:bg-stone-900 dark:hover:bg-stone-50 cursor-pointer"
                    >
                      <div className="flex flex-col gap-2 flex-1 min-w-0">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 group-hover:text-lime-400">
                          / {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="flex items-start gap-2">
                          <q.icon className="w-4 h-4 shrink-0 mt-0.5 text-stone-700 dark:text-stone-300 group-hover:text-lime-400" />
                          <span className="text-sm font-medium text-stone-900 dark:text-stone-50 group-hover:text-stone-50 dark:group-hover:text-stone-900">
                            {q.text}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {!isPremium && (
                  <p className="text-[11px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500 mt-6">
                    {FREE_LIMIT} free messages.{" "}
                    <Link
                      to="/student/checkout"
                      className="text-lime-600 dark:text-lime-400 hover:text-lime-500 dark:hover:text-lime-300 no-underline"
                    >
                      <span className="underline decoration-lime-400 decoration-2 underline-offset-4">
                        upgrade for unlimited
                      </span>
                    </Link>
                  </p>
                )}
              </motion.div>
            ) : (
              <motion.div key="messages" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
                {messages.map((msg, i) => (
                  <AgentMessage key={msg.id ?? i} role={msg.role} content={msg.content} jobs={msg.jobs} />
                ))}
                {showThinking && <ThinkingIndicator />}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Upgrade banner */}
      {hitFreeLimit && !isPremium && (
        <div className="shrink-0 px-4 sm:px-8 py-3 border-t border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Crown className="w-4 h-4 text-lime-600 dark:text-lime-400" />
              <span className="text-xs text-stone-700 dark:text-stone-300">
                Unlock unlimited AI chat with Premium.
              </span>
            </div>
            <Link
              to="/student/checkout"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold text-stone-950 bg-lime-400 hover:bg-lime-300 transition-colors no-underline"
            >
              Upgrade
            </Link>
          </div>
        </div>
      )}

      {/* Input bar */}
      <div className="shrink-0 px-4 sm:px-8 py-4 border-t border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white dark:bg-stone-900 rounded-md border border-stone-200 dark:border-white/10 focus-within:border-stone-400 dark:focus-within:border-white/25 transition-colors">
            <div className="overflow-y-auto">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  adjustHeight();
                }}
                onKeyDown={handleKeyDown}
                placeholder={
                  hitFreeLimit
                    ? "Upgrade to continue chatting..."
                    : isStreaming
                      ? "Thinking..."
                      : "Ask me about jobs..."
                }
                disabled={inputDisabled}
                className={cn(
                  "w-full px-4 py-3",
                  "resize-none",
                  "bg-transparent",
                  "border-none",
                  "text-stone-900 dark:text-stone-50 text-sm",
                  "focus:outline-none",
                  "focus-visible:ring-0 focus-visible:ring-offset-0",
                  "placeholder:text-stone-400 dark:placeholder:text-stone-500 placeholder:text-sm",
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                )}
                style={{ overflow: "hidden", minHeight: "44px" }}
              />
            </div>

            <div className="flex items-center justify-between px-3 pb-2.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">
                {hitFreeLimit ? "limit reached" : "enter to send, shift + enter for newline"}
              </span>
              <button
                type="button"
                onClick={() => handleSend()}
                disabled={!input.trim() || inputDisabled}
                className={cn(
                  "inline-flex items-center justify-center w-8 h-8 rounded-md transition-colors cursor-pointer disabled:cursor-not-allowed",
                  input.trim() && !inputDisabled
                    ? "bg-lime-400 hover:bg-lime-300 text-stone-950"
                    : "bg-stone-200 dark:bg-white/10 text-stone-400 dark:text-stone-600",
                )}
                aria-label="Send"
              >
                <ArrowUpIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
          <p className="text-center text-[10px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-600 mt-2">
            powered by Neural Network , always verify job details
          </p>
        </div>
      </div>
    </div>
  );
}