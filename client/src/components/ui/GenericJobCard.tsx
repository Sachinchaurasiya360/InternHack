import React from "react";
import { Link } from "react-router";
import { MapPin, IndianRupee, Wallet, ArrowUpRight, Bookmark } from "lucide-react";
import { CompanyMark } from "./CompanyMark";
import { MetaChip } from "./MetaChip";
import { TagList } from "./TagList";

const SALARY_HAS_CURRENCY = /[₹$€£¥]|\b(USD|EUR|GBP|INR|JPY|CAD|AUD)\b/i;

const cardBase =
  "group relative flex flex-col bg-white dark:bg-stone-900 p-5 rounded-md border border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 transition-colors h-full no-underline";

export interface GenericJobCardProps {
  title: string;
  company: string;
  location?: string;
  salary?: string;
  tags: string[];
  href: string;
  isExternal?: boolean;
  badge?: string;
  badgeClassName?: string;
  description?: string | null;
  isSaved?: boolean;
  onSaveToggle?: () => void;
  /** Custom right meta info (e.g. "12 applied") */
  rightMeta?: React.ReactNode;
  /** Custom footer text (defaults to "view role") */
  footerMeta?: React.ReactNode;
  /** Custom CTA icon or element */
  cta?: React.ReactNode;
  /** Custom meta chips (overrides default location/salary chips) */
  metaChips?: React.ReactNode;
}

export const GenericJobCard = React.memo(function GenericJobCard({
  title,
  company,
  location,
  salary,
  tags,
  href,
  isExternal = false,
  badge,
  badgeClassName,
  description,
  isSaved,
  onSaveToggle,
  rightMeta,
  footerMeta,
  cta,
  metaChips,
}: GenericJobCardProps) {
  const salaryHasCurrency = salary ? SALARY_HAS_CURRENCY.test(salary) : false;
  const SalaryIcon = salaryHasCurrency ? Wallet : IndianRupee;

  const inner = (
    <>
      {/* Badge (top-right) */}
      {badge && (
        <span
          className={`absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-stone-500 inline-flex items-center gap-1.5 ${
            badgeClassName || ""
          }`}
        >
          {!badgeClassName && <span className="h-1 w-1 bg-lime-400" />}
          {badge}
        </span>
      )}

      {/* Header row */}
      <div className={`flex items-start gap-3 mb-3 ${badge ? "pr-20" : ""}`}>
        <CompanyMark name={company || "?"} />
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50 line-clamp-1 leading-tight">
            {title || "Open Role"}
          </h3>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 mt-0.5 block truncate">
            {company || "company"}
          </span>
        </div>
        {rightMeta && (
          <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500 shrink-0">
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

      {/* Meta chips (location, salary, or custom) */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {metaChips ? (
          metaChips
        ) : (
          <>
            {location && <MetaChip icon={<MapPin className="w-3 h-3" />}>{location}</MetaChip>}
            {salary && <MetaChip icon={<SalaryIcon className="w-3 h-3" />}>{salary}</MetaChip>}
          </>
        )}
      </div>

      {/* Tags */}
      <TagList tags={tags} max={3} />

      {/* Save Button (Optional) */}
      {onSaveToggle !== undefined && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onSaveToggle();
          }}
          className={`absolute top-2 right-2 p-1.5 rounded-md transition-colors border-0 bg-transparent cursor-pointer z-10 ${
            isSaved
              ? "text-lime-600 dark:text-lime-400 hover:bg-lime-50 dark:hover:bg-lime-900/20"
              : "text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 hover:bg-stone-100 dark:hover:bg-white/5"
          }`}
          title={isSaved ? "Remove from saved" : "Save job"}
        >
          <Bookmark className={`w-4 h-4 ${isSaved ? "fill-lime-600 dark:fill-lime-400" : ""}`} />
        </button>
      )}

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between pt-3 border-t border-stone-100 dark:border-white/5">
        <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">
          {footerMeta ?? "view role"}
        </span>
        {cta ?? (
          <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-lime-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
        )}
      </div>
    </>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cardBase}>
        {inner}
      </a>
    );
  }

  return (
    <Link to={href} className={cardBase}>
      {inner}
    </Link>
  );
});
