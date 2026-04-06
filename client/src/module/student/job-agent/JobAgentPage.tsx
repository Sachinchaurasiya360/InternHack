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
  role: "user" | "assistant";
  content: string;
  jobs?: JobFeedMatch["job"][];
}

const FREE_LIMIT = 2;

const QUICK_PROMPTS = [
  { icon: Code2, text: "Remote React jobs", color: "text-blue-500" },
  { icon: MapPin, text: "Backend roles in Bangalore", color: "text-emerald-500" },
  { icon: Briefcase, text: "Internships above 5 LPA", color: "text-amber-500" },
  { icon: Zap, text: "Show me DevOps opportunities", color: "text-purple-500" },
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
  const [hitFreeLimit, setHitFreeLimit] = useState(false);
  const hasChattedRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({ minHeight: 44, maxHeight: 200 });

  const userMsgCount = messages.filter((m) => m.role === "user").length;

  // Load existing conversation
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

  // Auto-scroll
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const chatMut = useMutation({
    mutationFn: async (message: string) => {
      const res = await api.post("/job-agent/chat", { message });
      return res.data as JobAgentResponse;
    },
    onSuccess: (data) => {
      hasChattedRef.current = true;
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
          jobs: data.jobs.length > 0 ? data.jobs : undefined,
        },
      ]);
    },
    onError: (err: unknown) => {
      const resp = (err as { response?: { status?: number; data?: { freeLimit?: boolean } } })?.response;
      if (resp?.status === 403 && resp?.data?.freeLimit) {
        setHitFreeLimit(true);
        setMessages((prev) => [...prev, {
          role: "assistant",
          content: "You've used your 2 free messages! Upgrade to Premium for unlimited AI-powered job search.",
        }]);
      } else {
        setMessages((prev) => [...prev, {
          role: "assistant",
          content: "We're experiencing high demand right now and couldn't process your request. Please try again in a moment!",
        }]);
      }
    },
  });

  const resetMut = useMutation({
    mutationFn: () => api.delete("/job-agent/conversation"),
    onSuccess: () => {
      hasChattedRef.current = false;
      setHitFreeLimit(false);
      setMessages([]);
      qc.invalidateQueries({ queryKey: queryKeys.jobAgent.conversation() });
    },
  });

  const handleSend = (text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg || chatMut.isPending) return;
    setInput("");
    adjustHeight(true);
    setMessages((prev) => [...prev, { role: "user", content: msg }]);
    chatMut.mutate(msg);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const isEmpty = messages.length === 0;
  const inputDisabled = chatMut.isPending || hitFreeLimit;

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] max-w-4xl mx-auto">
      <SEO title="InternHack AI" noIndex />
      {/* Messages area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 sm:px-6 py-6">
        <AnimatePresence mode="wait">
          {isEmpty ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center h-full min-h-100"
            >
              {/* Hero icon */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-3xl bg-gray-950 dark:bg-white flex items-center justify-center shadow-lg shadow-gray-950/20 dark:shadow-white/10">
                  <BotMessageSquare className="w-10 h-10 text-white dark:text-gray-950" />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-white dark:border-gray-950 flex items-center justify-center"
                >
                  <Zap className="w-2.5 h-2.5 text-white" />
                </motion.div>
              </div>

              <h2 className="text-2xl font-bold text-gray-950 dark:text-white mb-1.5">
                Hey{user?.name ? `, ${user.name.split(" ")[0]}` : ""}!
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 text-center max-w-sm">
                I'm your AI job hunting buddy. Tell me what you're looking for and I'll find the best matches for you.
              </p>
              {!isPremium && (
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-6">
                  {FREE_LIMIT} free messages —{" "}
                  <Link to="/student/checkout" className="text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 no-underline font-medium">
                    upgrade for unlimited
                  </Link>
                </p>
              )}

              {/* Quick prompt grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-md">
                {QUICK_PROMPTS.map((q) => (
                  <button
                    key={q.text}
                    onClick={() => handleSend(q.text)}
                    className="group flex items-center gap-3 px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-left hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-sm transition-all"
                  >
                    <q.icon className={`w-4 h-4 ${q.color} shrink-0`} />
                    <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-950 dark:group-hover:text-white transition-colors">
                      {q.text}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="messages" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
              {messages.map((msg, i) => (
                <AgentMessage key={i} role={msg.role} content={msg.content} jobs={msg.jobs} />
              ))}
              {chatMut.isPending && <ThinkingIndicator />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Upgrade banner */}
      {hitFreeLimit && !isPremium && (
        <div className="px-4 sm:px-6 py-3 bg-violet-50 dark:bg-violet-950/30 border-t border-violet-100 dark:border-violet-900/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Crown className="w-4 h-4 text-violet-500" />
              <span className="text-sm text-violet-700 dark:text-violet-300">Unlock unlimited AI chat with Premium</span>
            </div>
            <Link
              to="/student/checkout"
              className="px-4 py-1.5 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-xs font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors no-underline"
            >
              Upgrade
            </Link>
          </div>
        </div>
      )}

      {/* V0-style input bar */}
      <div className="px-4 sm:px-6 py-3 bg-gray-50 dark:bg-gray-950">
        <div className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 focus-within:border-gray-400 dark:focus-within:border-gray-600 focus-within:ring-2 focus-within:ring-gray-950/10 dark:focus-within:ring-white/10 transition-all shadow-sm">
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
                  : chatMut.isPending
                    ? "Thinking..."
                    : "Ask me about jobs..."
              }
              disabled={inputDisabled}
              className={cn(
                "w-full px-4 py-3",
                "resize-none",
                "bg-transparent",
                "border-none",
                "text-gray-950 dark:text-white text-sm",
                "focus:outline-none",
                "focus-visible:ring-0 focus-visible:ring-offset-0",
                "placeholder:text-gray-400 dark:placeholder:text-gray-500 placeholder:text-sm",
                "disabled:opacity-50 disabled:cursor-not-allowed",
              )}
              style={{ overflow: "hidden", minHeight: "44px" }}
            />
          </div>

          <div className="flex items-center justify-between px-3 pb-3">
            <div className="flex items-center gap-2">
              {!isPremium && (
                <span className="text-[11px] text-gray-400 dark:text-gray-500 px-1">
                  {Math.min(userMsgCount, FREE_LIMIT)}/{FREE_LIMIT} free
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              {messages.length > 0 && (
                <button
                  type="button"
                  onClick={() => resetMut.mutate()}
                  disabled={resetMut.isPending}
                  className="px-2.5 py-1.5 rounded-lg text-xs text-gray-400 dark:text-gray-500 transition-colors border border-dashed border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  New chat
                </button>
              )}
              <button
                type="button"
                onClick={() => handleSend()}
                disabled={!input.trim() || inputDisabled}
                className={cn(
                  "p-2 rounded-xl text-sm transition-all",
                  input.trim() && !inputDisabled
                    ? "bg-gray-950 dark:bg-white text-white dark:text-gray-950 shadow-sm"
                    : "text-gray-300 dark:text-gray-600",
                )}
              >
                <ArrowUpIcon className="w-4 h-4" />
                <span className="sr-only">Send</span>
              </button>
            </div>
          </div>
        </div>
        <p className="text-center text-[10px] text-gray-400 dark:text-gray-600 mt-2">
          Powered by AI — results may vary. Always verify job details.
        </p>
      </div>
    </div>
  );
}
