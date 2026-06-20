import { cn } from "@/lib/utils";
import React from "react";

interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  variant?: "lime" | "indigo" | "emerald" | "white" | "primary";
}

export const LoadingSpinner = React.memo(function LoadingSpinner({
  size = "md",
  variant = "lime",
  className,
  ...props
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-6 h-6 border-2",
    lg: "w-8 h-8 border-2",
  };

  const variantClasses = {
    lime: "border-stone-300 dark:border-stone-700 border-t-lime-400",
    indigo: "border-stone-300 dark:border-stone-700 border-t-indigo-500",
    emerald: "border-stone-300 dark:border-stone-700 border-t-emerald-500",
    white: "border-white/30 dark:border-stone-950/30 border-t-white dark:border-t-stone-950",
    primary: "border-stone-300 dark:border-stone-700 border-t-primary",
  };

  return (
    <div
      className={cn(
        "rounded-full animate-spin",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
});
