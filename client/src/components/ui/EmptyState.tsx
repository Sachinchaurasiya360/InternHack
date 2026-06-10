import React from "react";
import { Link } from "react-router";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: 
    | { label: string; onClick?: () => void; to?: string }
    | React.ReactNode;
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  const renderAction = () => {
    if (!action) return null;

    if (React.isValidElement(action)) {
      return action;
    }

    const actObj = action as { label: string; onClick?: () => void; to?: string };

    if (actObj.to) {
      return (
        <Link
          to={actObj.to}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-xs font-bold bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors no-underline mt-2"
        >
          {actObj.label}
        </Link>
      );
    }

    return (
      <button
        type="button"
        onClick={actObj.onClick}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-xs font-bold bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors border-0 cursor-pointer"
      >
        {actObj.label}
      </button>
    );
  };

  return (
    <div className="py-20 text-center border border-dashed border-stone-300 dark:border-white/10 rounded-md flex flex-col items-center gap-4">
      {icon && (
        <div className="w-14 h-14 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-white/10 rounded-md flex items-center justify-center">
          {icon}
        </div>
      )}
      <div>
        <h3 className="text-base font-bold text-stone-900 dark:text-stone-50">{title}</h3>
        {description && (
          <p className="mt-2 text-xs font-mono uppercase tracking-widest text-stone-500 max-w-sm mx-auto">
            {description}
          </p>
        )}
      </div>
      {renderAction()}
    </div>
  );
}
