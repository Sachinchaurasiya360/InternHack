import React from "react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

const cardBase =
  "group relative flex flex-col bg-white dark:bg-stone-900 p-5 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 transition-colors h-full no-underline";

function CompanyMark({ label }: { label: string }) {
  return (
    <div className="w-10 h-10 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-white/10 flex items-center justify-center shrink-0 text-stone-900 dark:text-stone-50 text-sm font-bold">
      {label?.charAt(0)?.toUpperCase() || "?"}
    </div>
  );
}

export interface JobCardProps {
  /** Internal route (use `to`) or external URL (use `href`) */
  to?: string;
  href?: string;
  company: string;
  title: string;
  badge?: React.ReactNode;       // e.g. "external" / source label
  description?: string | null;
  metaChips?: React.ReactNode;   // location, salary, deadline chips
  tags?: string[];
  rightMeta?: React.ReactNode;   // e.g. "12 applied" count
  footerMeta?: React.ReactNode;  // e.g. deadline pill (left side of footer)
  cta?: React.ReactNode;         // overrides default "view role" text
}

const JobCard = React.memo(function JobCard({
  to,
  href,
  company,
  title,
  badge,
  description,
  metaChips,
  tags,
  rightMeta,
  footerMeta,
  cta,
}: JobCardProps) {
  const inner = (
    <>
      {/* Badge (top-right) */}
      {badge && (
        <span className="absolute top-4 right-4 text-xs font-mono uppercase tracking-widest text-stone-500 inline-flex items-center gap-1.5">
          <span className="h-1 w-1 bg-lime-400" />
          {badge}
        </span>
      )}

      {/* Header row */}
      <div className={`flex items-start gap-3 mb-3 ${badge ? "pr-16" : ""}`}>
        <CompanyMark label={company} />
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 line-clamp-1 leading-tight">
            {title}
          </h3>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 mt-0.5 block truncate">
            {company}
          </span>
        </div>
        {rightMeta && (
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 shrink-0">
            {rightMeta}
          </span>
        )}
      </div>

      {/* Description */}
      {description && (
        <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 mb-4 leading-relaxed">
          {description}
        </p>
      )}

      {/* Meta chips (location, salary, deadline) */}
      {metaChips && <div className="flex flex-wrap gap-1.5 mb-4">{metaChips}</div>}

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded-lg text-xs font-mono uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between pt-3 border-t border-stone-100 dark:border-white/5">
        <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
          {footerMeta ?? "view role"}
        </span>
        {cta ?? (
          <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cardBase}>
        {inner}
      </a>
    );
  }

  return (
    <Link to={to ?? "#"} className={cardBase}>
      {inner}
    </Link>
  );
});

export default JobCard;