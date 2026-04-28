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
  "dsa-foundations": "DSA Foundations",
  "level-0": "Level 0",
  "level-1": "Level 1",
  "level-2": "Level 2",
  "level-3": "Level 3",
  "level-4": "Level 4",
  "level-5": "Level 5",
  "level-6": "Level 6",
  "level-7": "Level 7",
  "level-8": "Level 8",
  "what-is-an-algorithm": "What Is an Algorithm?",
  "reading-pseudocode": "Reading Pseudocode",
  "variables-memory": "Variables & Memory",
  "loops-control-flow": "Loops & Control Flow",
  "functions-call-stack": "Functions & Call Stack",
  "inputs-constraints": "Inputs & Constraints",
  "big-o": "Big-O",
  "algorithm-tracer": "Algorithm Tracer",
  "space-complexity": "Space Complexity",
  "two-pointer-window": "Two-Pointer & Window",
  "singly-linked-list": "Singly Linked List",
  "doubly-circular-list": "Doubly & Circular List",
  "deque": "Deques",
  "hashing": "Hashing",
  "binary-tree-traversals": "Binary Tree Traversals",
  "bst": "BST",
  "avl": "AVL Trees",
  "red-black": "Red-Black Trees",
  "heaps": "Heaps",
  "tries": "Tries",
  "segment-fenwick": "Segment & Fenwick",
  "b-plus-tree": "B+ Trees",
  "graph-representation": "Graph Representation",
  "bfs": "BFS",
  "dfs": "DFS",
  "topological-sort": "Topological Sort",
  "dijkstra": "Dijkstra",
  "bellman-ford": "Bellman-Ford",
  "mst": "MST",
  "bubble-selection": "Bubble & Selection",
  "insertion": "Insertion Sort",
  "merge": "Merge Sort",
  "quick": "Quick Sort",
  "non-comparison": "Non-Comparison Sorts",
  "binary-search": "Binary Search",
  "recursion": "Recursion",
  "divide-conquer": "Divide & Conquer",
  "backtracking": "Backtracking",
  "dp-1d": "DP (1D)",
  "dp-2d": "DP (2D)",
  "greedy": "Greedy",
  "bit-manipulation": "Bit Manipulation",
  "dsu": "DSU",
  "advanced-ds": "Advanced DS",
  "rabin-karp": "Rabin-Karp",
  "kmp": "KMP",
  "z-manacher": "Z & Manacher",
  "lca": "LCA",
  "advanced-graphs": "Advanced Graphs",
  "tarjan-lowlink": "Tarjan's Low-Link",
  "max-flow": "Max Flow",
  "monotonic-stack": "Monotonic Stack",
  "binary-search-answer": "Binary Search on Answer",
  "sliding-window-advanced": "Sliding Window (Advanced)",
  "grid-to-graph": "Grid → Graph",
  "dp-state-design": "DP State Design",
  "pattern-recognition": "Pattern Recognition",
  aptitude: "Aptitude",
  interview: "Interview Prep",
  blockchain: "Blockchain",
  "data-analytics": "Data Analytics",
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
