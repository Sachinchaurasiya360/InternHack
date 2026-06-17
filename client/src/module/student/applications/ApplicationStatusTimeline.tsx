import React from "react";
import { Check, X, Circle, MinusCircle } from "lucide-react";
import { motion } from "framer-motion";
import type { ApplicationStatus } from "../../../lib/types";

interface ApplicationStatusTimelineProps {
  status: ApplicationStatus;
}

const STEPS = [
  { id: "APPLIED", label: "Applied" },
  { id: "IN_PROGRESS", label: "In Progress" },
  { id: "SHORTLISTED", label: "Shortlisted" },
  { id: "HIRED", label: "Hired" },
];

export function ApplicationStatusTimeline({ status }: ApplicationStatusTimelineProps) {
  const currentIndex = STEPS.findIndex((s) => s.id === status);
  const isFailed = status === "REJECTED" || status === "WITHDRAWN";

  return (
    <div className="py-6 px-2 overflow-x-auto">
      <div className="flex items-center justify-between relative min-w-[500px]">
        {/* Connecting lines */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 dark:bg-gray-800 rounded-full z-0"></div>
        
        {/* Progress line */}
        {!isFailed && currentIndex > 0 && (
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${(currentIndex / (STEPS.length - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-indigo-600 dark:bg-indigo-500 z-0 rounded-full"
          />
        )}
        
        {/* Failed line */}
        {isFailed && (
           <motion.div 
           initial={{ width: 0 }}
           animate={{ width: `100%` }}
           transition={{ duration: 0.5, ease: "easeInOut" }}
           className={`absolute left-0 top-1/2 -translate-y-1/2 h-1 z-0 rounded-full ${status === "REJECTED" ? "bg-red-500" : "bg-gray-400"}`}
         />
        )}

        {STEPS.map((step, idx) => {
          const isCompleted = !isFailed && idx <= currentIndex;
          const isActive = !isFailed && idx === currentIndex;

          let icon = <Circle className="w-5 h-5 text-gray-400" />;
          let circleClass = "bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 text-gray-400";
          
          if (isCompleted) {
            icon = <Check className="w-5 h-5 text-white" />;
            circleClass = "bg-indigo-600 border-2 border-indigo-600 text-white";
          }
          if (isActive) {
            icon = <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full animate-pulse" />;
            circleClass = "bg-white dark:bg-gray-900 border-2 border-indigo-600 ring-4 ring-indigo-100 dark:ring-indigo-900/50";
          }
          
          if (isFailed) {
            if (idx === STEPS.length - 1) {
              icon = status === "REJECTED" ? <X className="w-5 h-5 text-white" /> : <MinusCircle className="w-5 h-5 text-white" />;
              circleClass = status === "REJECTED" ? "bg-red-600 border-2 border-red-600 text-white" : "bg-gray-500 border-2 border-gray-500 text-white";
            } else {
               icon = <Check className="w-5 h-5 text-white" />;
               circleClass = status === "REJECTED" ? "bg-red-400 border-2 border-red-400 text-white" : "bg-gray-400 border-2 border-gray-400 text-white";
            }
          }

          return (
            <div key={step.id} className="relative z-10 flex flex-col items-center gap-2 bg-white dark:bg-[#09090b] px-2">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${circleClass} shadow-sm transition-all duration-300`}
              >
                {icon}
              </motion.div>
              <span className={`text-xs font-medium whitespace-nowrap ${isActive ? "text-indigo-600 dark:text-indigo-400" : isCompleted ? "text-gray-900 dark:text-gray-100" : isFailed ? (status === "REJECTED" ? "text-red-600" : "text-gray-500") : "text-gray-400"}`}>
                {isFailed && idx === STEPS.length - 1 ? (status === "REJECTED" ? "Rejected" : "Withdrawn") : step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
