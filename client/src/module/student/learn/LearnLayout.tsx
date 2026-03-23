import { Fragment } from "react";
import { Outlet, useLocation, Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { useAuthStore } from "../../../lib/auth.store";
import { useStudentSidebar } from "../../../components/StudentSidebar";
import { Navbar } from "../../../components/Navbar";

const SEGMENT_NAMES: Record<string, string> = {
  javascript: "JavaScript",
  html: "HTML",
  css: "CSS",
  typescript: "TypeScript",
  react: "React",
  python: "Python",
  nodejs: "Node.js",
  django: "Django",
  flask: "Flask",
  fastapi: "FastAPI",
  sql: "SQL",
  dsa: "DSA",
  aptitude: "Aptitude",
  interview: "Interview Prep",
  blockchain: "Blockchain",
  companies: "Companies",
  patterns: "Patterns",
  bookmarks: "Bookmarks",
  playground: "Playground",
  practice: "Practice",
  problem: "Problem",
};

const LOWERCASE_WORDS = new Set(["and", "or", "the", "in", "on", "at", "to", "for", "of", "with", "a", "an"]);

function formatSegment(segment: string): string {
  if (SEGMENT_NAMES[segment]) return SEGMENT_NAMES[segment];
  return segment
    .split("-")
    .map((w, i) => (i > 0 && LOWERCASE_WORDS.has(w)) ? w : w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function LearnBreadcrumb() {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length <= 1) return null;

  const items = segments.map((seg, i) => ({
    path: "/" + segments.slice(0, i + 1).join("/"),
    name: seg === "learn" ? "Learn" : formatSegment(seg),
    isLast: i === segments.length - 1,
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

export default function LearnLayout() {
  const { user, isAuthenticated } = useAuthStore();
  const isStudent = isAuthenticated && user?.role === "STUDENT";

  if (isStudent) {
    return <StudentLearnLayout />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 pt-28 pb-12">
        <LearnBreadcrumb />
        <Outlet />
      </main>
    </div>
  );
}

function StudentLearnLayout() {
  const { collapsed, sidebarWidth, sidebar } = useStudentSidebar();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="hidden lg:block">
        <Navbar sidebarOffset={sidebarWidth} />
      </div>
      {sidebar}
      <main
        className={`pt-16 lg:pt-24 px-4 pb-8 sm:px-6 lg:px-8 transition-all duration-300 overflow-auto ${
          collapsed ? "lg:ml-18" : "lg:ml-64"
        }`}
      >
        <LearnBreadcrumb />
        <Outlet />
      </main>
    </div>
  );
}
