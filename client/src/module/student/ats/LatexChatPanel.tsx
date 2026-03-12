import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Loader2,
  Lock,
  FileText,
  Check,
  BriefcaseBusiness,
  MessageSquare,
  Bot,
} from "lucide-react";
import api from "../../../lib/axios";
import { useAuthStore } from "../../../lib/auth.store";
import type { LatexChatMessage, LatexChatResponse } from "../../../lib/types";

interface LatexChatPanelProps {
  code: string;
  onApplyCode: (newCode: string) => void;
  onClose: () => void;
}

/** Render basic markdown: **bold** and bullet lines (- item) */
function renderMarkdown(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let bulletBuffer: string[] = [];

  const flushBullets = () => {
    if (bulletBuffer.length === 0) return;
    elements.push(
      <ul key={`ul-${elements.length}`} className="list-disc list-inside space-y-0.5 my-1">
        {bulletBuffer.map((b, i) => (
          <li key={i}>{formatInline(b)}</li>
        ))}
      </ul>,
    );
    bulletBuffer = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const bulletMatch = line.match(/^[-*]\s+(.*)/);
    if (bulletMatch) {
      bulletBuffer.push(bulletMatch[1]);
    } else {
      flushBullets();
      if (line.trim() === "") {
        elements.push(<br key={`br-${i}`} />);
      } else {
        elements.push(
          <span key={`p-${i}`}>
            {formatInline(line)}
            {i < lines.length - 1 && !lines[i + 1]?.match(/^[-*]\s+/) ? "\n" : ""}
          </span>,
        );
      }
    }
  }
  flushBullets();
  return elements;
}

function formatInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*/g;
  let lastIdx = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIdx) parts.push(text.slice(lastIdx, match.index));
    parts.push(
      <strong key={match.index} className="font-semibold">
        {match[1]}
      </strong>,
    );
    lastIdx = match.index + match[0].length;
  }
  if (lastIdx < text.length) parts.push(text.slice(lastIdx));
  return parts;
}

export default function LatexChatPanel({ code, onApplyCode, onClose }: LatexChatPanelProps) {
  const user = useAuthStore((s) => s.user);
  const isPremium =
    (user?.subscriptionPlan === "MONTHLY" || user?.subscriptionPlan === "YEARLY") &&
    user?.subscriptionStatus === "ACTIVE";

  const [messages, setMessages] = useState<LatexChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [jdMode, setJdMode] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const [appliedIdx, setAppliedIdx] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    const msg = input.trim();
    if (!msg || loading) return;

    const userMsg: LatexChatMessage = { role: "user", content: msg };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const history = messages.slice(-10).map((m) => ({ role: m.role, content: m.content }));
      const { data } = await api.post<LatexChatResponse>("/ats/latex-chat", {
        latexCode: code,
        message: msg,
        history,
      });
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply, updatedLatex: data.updatedLatex },
      ]);
    } catch (err: unknown) {
      const message =
        err && typeof err === "object" && "response" in err
          ? ((err as { response?: { data?: { message?: string } } }).response?.data?.message ??
            "Something went wrong")
          : "Something went wrong";
      setMessages((prev) => [...prev, { role: "assistant", content: message }]);
    } finally {
      setLoading(false);
    }
  };

  const handleOptimizeJD = async () => {
    if (jobDescription.trim().length < 50 || loading) return;

    const jd = jobDescription.trim();
    const userMsg: LatexChatMessage = {
      role: "user",
      content: `Optimize my resume for this job:\n\n${jd.slice(0, 200)}...`,
    };
    setMessages((prev) => [...prev, userMsg]);
    setJdMode(false);
    setJobDescription("");
    setLoading(true);

    try {
      const { data } = await api.post<LatexChatResponse>("/ats/latex-optimize-jd", {
        latexCode: code,
        jobDescription: jd,
      });
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply, updatedLatex: data.updatedLatex },
      ]);
    } catch (err: unknown) {
      const message =
        err && typeof err === "object" && "response" in err
          ? ((err as { response?: { data?: { message?: string } } }).response?.data?.message ??
            "Something went wrong")
          : "Something went wrong";
      setMessages((prev) => [...prev, { role: "assistant", content: message }]);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = (idx: number, latex: string) => {
    onApplyCode(latex);
    setAppliedIdx(idx);
    setTimeout(() => setAppliedIdx(null), 2000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Panel classes — mobile: full screen, desktop: floating card
  const panelClass =
    "fixed inset-0 z-50 lg:inset-auto lg:right-6 lg:bottom-6 lg:w-96 lg:h-[540px] lg:rounded-2xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-2xl flex flex-col overflow-hidden";

  // Premium gate
  if (!isPremium) {
    return (
      <div className={panelClass}>
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800">
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            AI Resume Assistant
          </span>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center p-6">
          <div className="text-center max-w-xs">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Premium Feature
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
              Get AI suggestions, resume editing, and ATS optimization with a Premium subscription.
            </p>
            <Link
              to="/student/checkout"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Upgrade to Premium
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={panelClass}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center">
            <Bot className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            AI Assistant
          </span>
        </div>
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {messages.length === 0 && (
          <div className="text-center py-10">
            <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-3">
              <MessageSquare className="w-4.5 h-4.5 text-gray-400" />
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
              How can I help?
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 max-w-52 mx-auto leading-relaxed">
              Edit your resume, add sections, reword experience, or optimize for a job description.
            </p>
          </div>
        )}

        <AnimatePresence initial={false}>
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                  msg.role === "user"
                    ? "bg-indigo-600 text-white rounded-br-md"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-md"
                }`}
              >
                <div className="whitespace-pre-wrap">{renderMarkdown(msg.content)}</div>
                {msg.role === "assistant" && msg.updatedLatex && (
                  <button
                    onClick={() => handleApply(idx, msg.updatedLatex!)}
                    disabled={appliedIdx === idx}
                    className={`mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                      appliedIdx === idx
                        ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                        : "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-900/50"
                    }`}
                  >
                    {appliedIdx === idx ? (
                      <>
                        <Check className="w-3 h-3" />
                        Applied
                      </>
                    ) : (
                      <>
                        <FileText className="w-3 h-3" />
                        Apply to Editor
                      </>
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-bl-md px-3.5 py-2.5 flex items-center gap-2">
              <Loader2 className="w-3.5 h-3.5 text-indigo-500 animate-spin" />
              <span className="text-xs text-gray-500 dark:text-gray-400">Thinking...</span>
            </div>
          </motion.div>
        )}
      </div>

      {/* JD Optimization */}
      <AnimatePresence>
        {jdMode && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-2">
              <label className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                Paste the job description
              </label>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the full job description here (min 50 characters)..."
                rows={4}
                className="w-full text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2.5 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 placeholder:text-gray-400 dark:placeholder:text-gray-600 text-gray-800 dark:text-gray-200"
              />
              <div className="flex items-center gap-2">
                <button
                  onClick={handleOptimizeJD}
                  disabled={jobDescription.trim().length < 50 || loading}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : null}
                  Optimize Resume
                </button>
                <button
                  onClick={() => {
                    setJdMode(false);
                    setJobDescription("");
                  }}
                  className="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input Area */}
      <div className="border-t border-gray-100 dark:border-gray-800 px-3 py-2.5 shrink-0 space-y-2">
        {!jdMode && (
          <button
            onClick={() => setJdMode(true)}
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800/50 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors disabled:opacity-50"
          >
            <BriefcaseBusiness className="w-3.5 h-3.5" />
            Tailor for Job Description
          </button>
        )}
        <div className="flex items-end gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask AI to edit your resume..."
            rows={1}
            className="flex-1 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 placeholder:text-gray-400 dark:placeholder:text-gray-600 text-gray-800 dark:text-gray-200 max-h-24"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className="w-8 h-8 shrink-0 flex items-center justify-center bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Send className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
