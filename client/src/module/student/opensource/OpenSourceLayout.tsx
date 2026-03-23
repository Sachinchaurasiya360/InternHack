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

  // Find the "opensource" segment index and build items from there
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
    <nav className="flex items-center gap-1.5 text-sm mb-6 flex-wrap">
      {items.map((item, i) => (
        <Fragment key={item.path}>
          {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 shrink-0" />}
          {item.isLast ? (
            <span className="text-gray-700 dark:text-gray-300 font-medium">{item.name}</span>
          ) : (
            <Link
              to={item.path}
              className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors no-underline"
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
    <>
      <OpenSourceBreadcrumb />
      <Outlet />
    </>
  );
}
