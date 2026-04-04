import React from "react";
import { BotMessageSquare, User } from "lucide-react";
import { motion } from "framer-motion";
import { AgentJobCard } from "./AgentJobCard";
import type { JobFeedMatch } from "../../../lib/types";
import { useAuthStore } from "../../../lib/auth.store";

interface Props {
  role: "user" | "assistant";
  content: string;
  jobs?: JobFeedMatch["job"][];
}

/** Render basic markdown-like formatting: **bold**, line breaks */
function formatContent(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    // Split on newlines for line breaks
    return part.split("\n").map((line, j, arr) => (
      <span key={`${i}-${j}`}>
        {line}
        {j < arr.length - 1 && <br />}
      </span>
    ));
  });
}

export const AgentMessage = React.memo(function AgentMessage({ role, content, jobs }: Props) {
  const { user } = useAuthStore();
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}
    >
      {/* Avatar */}
      <div
        className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
          isUser
            ? "bg-gray-950 dark:bg-white text-white dark:text-gray-950"
            : "bg-gray-950 dark:bg-white text-white dark:text-gray-950"
        }`}
      >
        {isUser ? (
          user?.name?.charAt(0)?.toUpperCase() || <User className="w-4 h-4" />
        ) : (
          <BotMessageSquare className="w-4 h-4" />
        )}
      </div>

      {/* Content */}
      <div className={`max-w-[85%] sm:max-w-[80%] ${isUser ? "items-end" : "items-start"} flex flex-col`}>
        <div
          className={`px-4 py-2.5 text-sm leading-relaxed ${
            isUser
              ? "bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-2xl rounded-tr-sm"
              : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 rounded-2xl rounded-tl-sm"
          }`}
        >
          {isUser ? content : formatContent(content)}
        </div>

        {/* Inline job cards */}
        {!isUser && jobs && jobs.length > 0 && (
          <div className="mt-3 w-full">
            <p className="text-[11px] font-medium text-gray-400 dark:text-gray-500 mb-2 ml-1">
              Found {jobs.length} job{jobs.length > 1 ? "s" : ""} for you
            </p>
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
