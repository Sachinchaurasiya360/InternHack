import { Fragment } from "react";
import { Outlet, useLocation, Link } from "react-router";
import { ChevronRight } from "lucide-react";

const SEGMENT_NAMES: Record<string, string> = {
  opensource: "Open Source",
  "first-pr": "First PR",
  "gsoc-proposal": "GSoC Proposal",
  gsoc: "GSoC Repos",
  "read-codebase": "Read Codebase",
  "git-guide": "Git Guide",
  communication: "Communication",
  cicd: "CI/CD",
  programs: "Programs",
  analytics: "Analytics",
};

const LOWERCASE_WORDS = new Set(["and", "or", "the", "in", "on", "at", "to", "for", "of", "with", "a", "an"]);

function formatSegment(segment: string): string {
  if (SEGMENT_NAMES[segment]) return SEGMENT_NAMES[segment];
  return segment
    .split("-")
    .map((w, i) => (i > 0 && LOWERCASE_WORDS.has(w)) ? w : w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function OpenSourceBreadcrumb() {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  const osIdx = segments.indexOf("opensource");
  if (osIdx < 0) return null;

  const relevantSegments = segments.slice(osIdx);
  if (relevantSegments.length <= 1) return null;

  const items = relevantSegments.map((seg, i) => ({
    path: "/" + segments.slice(0, osIdx + i + 1).join("/"),
    name: formatSegment(seg),
    isLast: i === relevantSegments.length - 1,
  }));

  return (
    <nav className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest mb-6 flex-wrap px-4 sm:px-8 pt-6">
      <div className="h-1 w-1 bg-lime-400"></div>
      {items.map((item, i) => (
        <Fragment key={item.path}>
          {i > 0 && <ChevronRight className="w-3 h-3 text-stone-300 dark:text-stone-600 shrink-0" />}
          {item.isLast ? (
            <span className="text-stone-900 dark:text-stone-50">{item.name}</span>
          ) : (
            <Link
              to={item.path}
              className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors no-underline"
            >
              {item.name}
            </Link>
          )}
        </Fragment>
      ))}
    </nav>
  );
}

export default function OpenSourceLayout() {
  return (
    <div className="bg-stone-50 dark:bg-stone-950 min-h-[calc(100vh-4rem)]">
      <OpenSourceBreadcrumb />
      <Outlet />
    </div>
  );
}
