import React from "react";
import { BotMessageSquare, Check, Copy, User } from "lucide-react";
import { motion } from "framer-motion";
import { AgentJobCard } from "./AgentJobCard";
import type { JobFeedMatch } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";
import { Button } from "../../../components/ui/button";

interface Props {
  role: "user" | "assistant";
  content: string;
  jobs?: JobFeedMatch["job"][];
  isStreaming?: boolean;
}

function formatContent(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part.split("\n").map((line, j, arr) => (
      <span key={`${i}-${j}`}>
        {line}
        {j < arr.length - 1 && <br />}
      </span>
    ));
  });
}

function messageToPlainText(content: string, jobs?: JobFeedMatch["job"][]) {
  if (!jobs?.length) return content;

  const jobLines = jobs.map((job, i) => {
    const details = [job.title, job.company, job.location, job.applicationUrl]
      .map((value) => value?.trim())
      .filter(Boolean);

    return `${i + 1}. ${details.join(" - ")}`;
  });

  return `${content ? `${content}\n\n` : ""}Jobs:\n${jobLines.join("\n")}`;
}

function CopyMessageButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false);
  const resetTimerRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    return () => {
      if (resetTimerRef.current !== null) window.clearTimeout(resetTimerRef.current);
    };
  }, []);

  const handleCopy = async () => {
    try {
      if (!navigator.clipboard?.writeText) return;

      await navigator.clipboard.writeText(text);
      setCopied(true);

      if (resetTimerRef.current !== null) window.clearTimeout(resetTimerRef.current);
      resetTimerRef.current = window.setTimeout(() => {
        setCopied(false);
        resetTimerRef.current = null;
      }, 1500);
    } catch {
      // Clipboard access can be blocked in insecure contexts.
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      mode="icon"
      size="sm"
      onClick={handleCopy}
      aria-label={copied ? "Copied" : "Copy message"}
      title={copied ? "Copied" : "Copy message"}
      className="job-agent-copy-button absolute bottom-2 right-2 border-stone-200 bg-white text-stone-500 shadow-sm transition-opacity hover:border-stone-300 hover:bg-white hover:text-stone-900 focus-visible:ring-stone-900 dark:border-white/10 dark:bg-stone-800 dark:text-stone-400 dark:hover:border-white/20 dark:hover:bg-stone-800 dark:hover:text-stone-50 dark:focus-visible:ring-stone-50 dark:focus-visible:ring-offset-stone-900"
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
    </Button>
  );
}

export const AgentMessage = React.memo(function AgentMessage({ role, content, jobs, isStreaming }: Props) {
  const { user } = useAuthStore();
  const isUser = role === "user";
  const copyText = messageToPlainText(content, jobs);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`flex gap-3 ${isUser ? "flex-row-reverse" : "job-agent-copy-group"}`}
    >
      {/* Avatar */}
      <div
        className={`w-8 h-8 rounded-md overflow-hidden flex items-center justify-center shrink-0 text-xs font-bold ${
          isUser
            ? "bg-stone-200 dark:bg-white/10 text-stone-700 dark:text-stone-200"
            : "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900"
        }`}
      >
        {isUser ? (
          user?.profilePic ? (
            <img
              src={user.profilePic}
              alt={user.name ?? "You"}
              className="w-full h-full object-cover"
            />
          ) : (
            user?.name?.charAt(0)?.toUpperCase() || <User className="w-4 h-4" />
          )
        ) : (
          <BotMessageSquare className="w-4 h-4" />
        )}
      </div>

      {/* Content */}
      <div className={`max-w-[85%] sm:max-w-[80%] ${isUser ? "items-end" : "items-start"} flex flex-col`}>
        {/* Role kicker */}
        <div className={`flex items-center gap-1.5 mb-1 ${isUser ? "flex-row-reverse" : ""}`}>
          <div className="h-1 w-1 bg-lime-400"></div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            {isUser ? "you" : "agent"}
          </span>
        </div>

        <div
          className={`relative px-4 py-2.5 rounded-md text-sm leading-relaxed ${
            isUser
              ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900"
              : "bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 text-stone-800 dark:text-stone-200 pr-11"
          }`}
        >
          {isUser ? content : formatContent(content)}
          {!isUser && !isStreaming && <CopyMessageButton text={copyText} />}
        </div>

        {/* Inline job cards */}
        {!isUser && jobs && jobs.length > 0 && (
          <div className="mt-3 w-full">
            <div className="flex items-center gap-1.5 mb-2 ml-0.5">
              <div className="h-1 w-1 bg-lime-400"></div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
                {jobs.length} match{jobs.length > 1 ? "es" : ""}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {jobs.map((job) => (
                <AgentJobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
});
