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
          className={`px-4 py-2.5 rounded-md text-sm leading-relaxed ${
            isUser
              ? "bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900"
              : "bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 text-stone-800 dark:text-stone-200"
          }`}
        >
          {isUser ? content : formatContent(content)}
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
