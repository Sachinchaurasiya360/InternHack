import type { ComponentType, LazyExoticComponent } from "react";
import { lazy } from "react";

export interface LessonEntry {
  slug: string;
  title: string;
  summary: string;
  /** Lazy-loaded lesson component. */
  load: LazyExoticComponent<ComponentType<{ onQuizComplete?: (score: number) => void }>>;
}

export interface LevelEntry {
  id: string;
  number: number;
  title: string;
  summary: string;
  /** Topics covered in this level, shown as mono labels on the level card. */
  topics: string[];
  lessons: LessonEntry[];
}

/**
 * The curriculum is intentionally append-only: add new levels as you author lessons.
 * Each lesson uses a lazy import so the bundle stays small.
 */
export const LEVELS: LevelEntry[] = [
  {
    id: "level-0",
    number: 0,
    title: "Programming Prerequisites",
    summary:
      "Start here if you've never thought formally about algorithms. Pseudocode notation, the call stack, and how to read a problem before you code.",
    topics: ["algorithm", "pseudocode", "variables", "loops", "functions", "edge-cases"],
    lessons: [
      {
        slug: "what-is-an-algorithm",
        title: "What Is an Algorithm?",
        summary: "A finite, deterministic sequence of steps that takes input and produces output, illustrated with everyday recipes.",
        load: lazy(() => import("./lessons/L0_WhatIsAnAlgorithm")),
      },
      {
        slug: "reading-pseudocode",
        title: "Reading Pseudocode",
        summary: "Notation cheatsheet (←, for, while, if/else) and the line-by-line trace technique you'll use in every later lesson.",
        load: lazy(() => import("./lessons/L0_ReadingPseudocode")),
      },
      {
        slug: "variables-memory",
        title: "Variables, Memory & References",
        summary: "Primitives copy on assignment, references share, the gotcha behind half of all subtle bugs.",
        load: lazy(() => import("./lessons/L0_VariablesMemory")),
      },
      {
        slug: "loops-control-flow",
        title: "Loops & Control Flow",
        summary: "for, while, break, continue, nested loops, off-by-one bugs, and loop invariants.",
        load: lazy(() => import("./lessons/L0_LoopsControlFlow")),
      },
      {
        slug: "functions-call-stack",
        title: "Functions & the Call Stack",
        summary: "Functions as named recipes, parameters and return values, and the stack frames that make recursion tractable.",
        load: lazy(() => import("./lessons/L0_FunctionsCallStack")),
      },
      {
        slug: "inputs-constraints",
        title: "Inputs, Constraints & Edge Cases",
        summary: "Read the problem first. Identify inputs, outputs, bounds, and the edge cases that break naive code.",
        load: lazy(() => import("./lessons/L0_InputsConstraints")),
      },
    ],
  },
  {
    id: "level-1",
    number: 1,
    title: "Foundations",
    summary:
      "How algorithms grow, how to trace them, and the array-and-string toolkit every interview leans on.",
    topics: ["complexity", "tracing", "arrays", "strings", "two-pointer"],
    lessons: [
      {
        slug: "big-o",
        title: "Time Complexity & Big-O",
        summary: "Plot growth curves, classify loops by Big-O, and learn the rules that make complexity analysis fast.",
        load: lazy(() => import("./lessons/L1_BigO")),
      },
      {
        slug: "algorithm-tracer",
        title: "Algorithm Tracer",
        summary: "Step through pseudocode line by line, watch state evolve, and build intuition for tracing.",
        load: lazy(() => import("./lessons/L1_AlgorithmTracer")),
      },
      {
        slug: "space-complexity",
        title: "Space Complexity",
        summary: "Auxiliary memory vs total memory, the call stack, and how recursion hides O(n) costs.",
        load: lazy(() => import("./lessons/L1_SpaceComplexity")),
      },
      {
        slug: "arrays",
        title: "Arrays",
        summary: "Index math, in-place updates, and the array operations every interview problem assumes you know.",
        load: lazy(() => import("./lessons/L1_Arrays")),
      },
      {
        slug: "strings",
        title: "Strings",
        summary: "Character-level patterns, immutability traps, and the toolkit for parsing and comparing strings.",
        load: lazy(() => import("./lessons/L1_Strings")),
      },
      {
        slug: "two-pointer-window",
        title: "Two-Pointer & Sliding Window",
        summary: "Two pointers walking from ends, fixed and dynamic windows, and when to reach for each pattern.",
        load: lazy(() => import("./lessons/L1_TwoPointerWindow")),
      },
    ],
  },
  {
    id: "level-2",
    number: 2,
    title: "Linear Structures",
    summary:
      "Stacks, queues, linked lists, and hashing, the core data structures behind half of all interview questions.",
    topics: ["stacks", "queues", "linked-list", "deque", "hashing"],
    lessons: [
      {
        slug: "stacks",
        title: "Stacks",
        summary: "LIFO operations, balanced brackets, and the stack's role in expression evaluation and recursion.",
        load: lazy(() => import("./lessons/L2_Stacks")),
      },
      {
        slug: "queues",
        title: "Queues",
        summary: "FIFO operations, circular buffers, and the queue's role in BFS and scheduling.",
        load: lazy(() => import("./lessons/L2_Queues")),
      },
      {
        slug: "singly-linked-list",
        title: "Singly Linked Lists",
        summary: "Pointer mechanics, cycle detection, reversal in place, and the trade-off vs arrays.",
        load: lazy(() => import("./lessons/L2_SinglyLinkedList")),
      },
      {
        slug: "doubly-circular-list",
        title: "Doubly & Circular Linked Lists",
        summary: "Backwards traversal, circular sentinels, and when the extra pointer earns its weight.",
        load: lazy(() => import("./lessons/L2_DoublyCircularList")),
      },
      {
        slug: "deque",
        title: "Deques & Special Queues",
        summary: "Double-ended queues, monotonic queues, and priority queues as preview.",
        load: lazy(() => import("./lessons/L2_DequeSpecial")),
      },
      {
        slug: "hashing",
        title: "Hashing",
        summary: "Hash functions, collision resolution, load factor, and the O(1)-on-average promise.",
        load: lazy(() => import("./lessons/L2_Hashing")),
      },
    ],
  },
  {
    id: "level-3",
    number: 3,
    title: "Trees",
    summary:
      "From traversals to balanced trees and tries, the tree toolkit that powers indexes, autocomplete, and range queries.",
    topics: ["binary-tree", "bst", "avl", "red-black", "heap", "trie", "segment-tree", "b+tree"],
    lessons: [
      {
        slug: "binary-tree-traversals",
        title: "Binary Tree Traversals",
        summary: "In-order, pre-order, post-order, and level-order, recursive and iterative.",
        load: lazy(() => import("./lessons/L3_BinaryTreeTraversals")),
      },
      {
        slug: "bst",
        title: "Binary Search Trees",
        summary: "Insert, search, delete, and the invariants that keep lookups O(log n) on average.",
        load: lazy(() => import("./lessons/L3_BST")),
      },
      {
        slug: "avl",
        title: "AVL Trees",
        summary: "Height-balanced BST with LL, LR, RL, RR rotations to maintain the balance factor.",
        load: lazy(() => import("./lessons/L3_AVL")),
      },
      {
        slug: "red-black",
        title: "Red-Black Trees",
        summary: "Five invariants, color flips, and rotations that bound height to 2·log(n+1).",
        load: lazy(() => import("./lessons/L3_RedBlack")),
      },
      {
        slug: "heaps",
        title: "Heaps & Priority Queues",
        summary: "Array-backed binary heap, sift-up and sift-down, and the priority queue API.",
        load: lazy(() => import("./lessons/L3_Heaps")),
      },
      {
        slug: "tries",
        title: "Tries",
        summary: "Prefix trees for autocomplete and string matching with O(k) lookups.",
        load: lazy(() => import("./lessons/L3_Tries")),
      },
      {
        slug: "segment-fenwick",
        title: "Segment & Fenwick Trees",
        summary: "Range-sum and range-min queries with point updates in O(log n).",
        load: lazy(() => import("./lessons/L3_SegmentFenwick")),
      },
      {
        slug: "b-plus-tree",
        title: "B+ Trees",
        summary: "High-fanout disk-friendly trees that power database indexes and filesystems.",
        load: lazy(() => import("./lessons/L3_BPlusTree")),
      },
    ],
  },
  {
    id: "level-4",
    number: 4,
    title: "Graphs",
    summary:
      "Representations, traversals, shortest paths, and minimum spanning trees, graphs unlock the hardest interview problems.",
    topics: ["graph", "bfs", "dfs", "topo-sort", "dijkstra", "bellman-ford", "mst"],
    lessons: [
      {
        slug: "graph-representation",
        title: "Graph Representation",
        summary: "Adjacency list vs matrix, directed vs undirected, weighted vs unweighted.",
        load: lazy(() => import("./lessons/L4_GraphRepresentation")),
      },
      {
        slug: "bfs",
        title: "Breadth-First Search",
        summary: "Layer-by-layer traversal, shortest path in unweighted graphs, and the queue's role.",
        load: lazy(() => import("./lessons/L4_BFS")),
      },
      {
        slug: "dfs",
        title: "Depth-First Search",
        summary: "Recursion or stack, discovery and finish times, and DFS as a building block.",
        load: lazy(() => import("./lessons/L4_DFS")),
      },
      {
        slug: "topological-sort",
        title: "Topological Sort",
        summary: "Linear ordering of a DAG via Kahn's algorithm or DFS finish-times.",
        load: lazy(() => import("./lessons/L4_TopologicalSort")),
      },
      {
        slug: "dijkstra",
        title: "Dijkstra's Shortest Path",
        summary: "Greedy shortest paths with a min-heap, and why negative weights break it.",
        load: lazy(() => import("./lessons/L4_Dijkstra")),
      },
      {
        slug: "bellman-ford",
        title: "Bellman-Ford",
        summary: "Edge-relaxation shortest paths that handle negative weights and detect cycles.",
        load: lazy(() => import("./lessons/L4_BellmanFord")),
      },
      {
        slug: "mst",
        title: "Minimum Spanning Trees",
        summary: "Kruskal and Prim, building the cheapest tree that connects every node.",
        load: lazy(() => import("./lessons/L4_MST")),
      },
    ],
  },
  {
    id: "level-5",
    number: 5,
    title: "Sorting & Searching",
    summary:
      "Every classic sort, the O(n log n) lower bound, and binary search, the searches that beat linear scans.",
    topics: ["sorting", "binary-search", "merge-sort", "quick-sort", "counting-sort"],
    lessons: [
      {
        slug: "bubble-selection",
        title: "Bubble & Selection Sort",
        summary: "Two O(n²) sorts that teach the mechanics of comparison and swap.",
        load: lazy(() => import("./lessons/L5_BubbleSelection")),
      },
      {
        slug: "insertion",
        title: "Insertion Sort",
        summary: "Adaptive O(n²) sort that hits O(n) on nearly-sorted input, the workhorse of small-n hybrids.",
        load: lazy(() => import("./lessons/L5_Insertion")),
      },
      {
        slug: "merge",
        title: "Merge Sort",
        summary: "Stable O(n log n) divide-and-conquer with O(n) auxiliary space.",
        load: lazy(() => import("./lessons/L5_Merge")),
      },
      {
        slug: "quick",
        title: "Quick Sort",
        summary: "In-place average O(n log n) with pivot strategy, partition mechanics, and worst-case traps.",
        load: lazy(() => import("./lessons/L5_Quick")),
      },
      {
        slug: "non-comparison",
        title: "Non-Comparison Sorts",
        summary: "Counting, radix, and bucket sort, beating the O(n log n) bound when input is bounded.",
        load: lazy(() => import("./lessons/L5_NonComparison")),
      },
      {
        slug: "binary-search",
        title: "Binary Search & Variants",
        summary: "The O(log n) workhorse, lower/upper bound, and avoiding off-by-one bugs.",
        load: lazy(() => import("./lessons/L5_BinarySearch")),
      },
    ],
  },
  {
    id: "level-6",
    number: 6,
    title: "Recursion & DP",
    summary:
      "Recursion, divide & conquer, backtracking, and the dynamic programming patterns that crack the hardest problems.",
    topics: ["recursion", "divide-conquer", "backtracking", "dp", "greedy"],
    lessons: [
      {
        slug: "recursion",
        title: "Recursion",
        summary: "Base cases, recursive cases, and the call stack, recursion as a problem-solving lens.",
        load: lazy(() => import("./lessons/L6_Recursion")),
      },
      {
        slug: "divide-conquer",
        title: "Divide & Conquer",
        summary: "Split, conquer, combine, and the Master Theorem for solving the recurrences.",
        load: lazy(() => import("./lessons/L6_DivideConquer")),
      },
      {
        slug: "backtracking",
        title: "Backtracking",
        summary: "DFS-with-undo for combinatorial search, with N-Queens, subsets, and permutations.",
        load: lazy(() => import("./lessons/L6_Backtracking")),
      },
      {
        slug: "dp-1d",
        title: "Dynamic Programming (1D)",
        summary: "Memoization, tabulation, and the canonical 1D problems: Fibonacci, climbing stairs, house robber.",
        load: lazy(() => import("./lessons/L6_DP1D")),
      },
      {
        slug: "dp-2d",
        title: "Dynamic Programming (2D)",
        summary: "Grids and string-pair DP, LCS, edit distance, knapsack, and unique paths.",
        load: lazy(() => import("./lessons/L6_DP2D")),
      },
      {
        slug: "greedy",
        title: "Greedy Algorithms",
        summary: "Local choices that work, interval scheduling, Huffman coding, and the exchange argument.",
        load: lazy(() => import("./lessons/L6_Greedy")),
      },
    ],
  },
  {
    id: "level-7",
    number: 7,
    title: "Advanced",
    summary:
      "Bit tricks, union-find, exotic data structures, string-matching algorithms, and advanced graph theory.",
    topics: ["bit-manipulation", "dsu", "string-matching", "advanced-graphs", "max-flow"],
    lessons: [
      {
        slug: "bit-manipulation",
        title: "Bit Manipulation",
        summary: "AND, OR, XOR, shifts, and the bit tricks that turn O(n) into O(1).",
        load: lazy(() => import("./lessons/L7_BitManipulation")),
      },
      {
        slug: "dsu",
        title: "Disjoint Set Union (Union-Find)",
        summary: "Path compression and union by rank for nearly-O(1) connectivity queries.",
        load: lazy(() => import("./lessons/L7_DSU")),
      },
      {
        slug: "advanced-ds",
        title: "Advanced Data Structures",
        summary: "B-Trees, Red-Black, Skip Lists, and Bloom Filters, when the basics aren't enough.",
        load: lazy(() => import("./lessons/L7_AdvancedDS")),
      },
      {
        slug: "rabin-karp",
        title: "Rabin-Karp String Matching",
        summary: "Rolling hash for fast substring search with average O(n + m).",
        load: lazy(() => import("./lessons/L7_RabinKarp")),
      },
      {
        slug: "kmp",
        title: "KMP String Matching",
        summary: "The longest-proper-prefix-suffix table that makes pattern matching O(n + m).",
        load: lazy(() => import("./lessons/L7_KMP")),
      },
      {
        slug: "z-manacher",
        title: "Z-Function & Manacher",
        summary: "Z-array for prefix matching and Manacher for all palindromes in O(n).",
        load: lazy(() => import("./lessons/L7_ZManacher")),
      },
      {
        slug: "lca",
        title: "Lowest Common Ancestor",
        summary: "Binary lifting and Euler-tour + RMQ for O(log n) and O(1) LCA queries.",
        load: lazy(() => import("./lessons/L7_LCA")),
      },
      {
        slug: "advanced-graphs",
        title: "Advanced Graph Algorithms",
        summary: "Bridges, articulation points, 2-SAT, and Eulerian circuits.",
        load: lazy(() => import("./lessons/L7_AdvancedGraphs")),
      },
      {
        slug: "tarjan-lowlink",
        title: "Tarjan's Low-Link (SCC, Bridges)",
        summary: "Discovery and low-link values for strongly-connected components and bridge detection.",
        load: lazy(() => import("./lessons/L7_TarjanLowLink")),
      },
      {
        slug: "max-flow",
        title: "Maximum Flow",
        summary: "Ford-Fulkerson, Edmonds-Karp, and the min-cut max-flow duality.",
        load: lazy(() => import("./lessons/L7_MaxFlow")),
      },
    ],
  },
  {
    id: "level-8",
    number: 8,
    title: "Patterns",
    summary:
      "The meta-skill: recognising which technique a problem wants. Monotonic stacks, BS-on-answer, sliding window, grid-as-graph, DP states.",
    topics: ["monotonic-stack", "binary-search-answer", "sliding-window", "grid-graph", "dp-states", "patterns"],
    lessons: [
      {
        slug: "monotonic-stack",
        title: "Monotonic Stack",
        summary: "Maintain a sorted stack to answer next-greater-element problems in linear time.",
        load: lazy(() => import("./lessons/L8_MonotonicStack")),
      },
      {
        slug: "binary-search-answer",
        title: "Binary Search on Answer",
        summary: "When the answer space is sortable, binary-search the answer, Aggressive Cows, Capacity to Ship.",
        load: lazy(() => import("./lessons/L8_BinarySearchAnswer")),
      },
      {
        slug: "sliding-window-advanced",
        title: "Sliding Window (Advanced)",
        summary: "Variable windows, character-frequency tracking, and minimum-window-substring patterns.",
        load: lazy(() => import("./lessons/L8_SlidingWindowAdvanced")),
      },
      {
        slug: "grid-to-graph",
        title: "Grid → Graph Mapping",
        summary: "Treat 2D grids as implicit graphs, flood fill, shortest path on a grid, islands counting.",
        load: lazy(() => import("./lessons/L8_GridToGraph")),
      },
      {
        slug: "dp-state-design",
        title: "DP State Design",
        summary: "Picking the right state, what to memoize and what to drop, for harder DP problems.",
        load: lazy(() => import("./lessons/L8_DPStateDesign")),
      },
      {
        slug: "pattern-recognition",
        title: "Pattern Recognition",
        summary: "Map a new problem to a known technique fast, the meta-skill that separates fast solvers.",
        load: lazy(() => import("./lessons/L8_PatternRecognition")),
      },
    ],
  },
];

export function findLevel(levelId: string): LevelEntry | undefined {
  return LEVELS.find((l) => l.id === levelId);
}

export function findLesson(levelId: string, lessonSlug: string): {
  level: LevelEntry;
  lesson: LessonEntry;
  lessonIndex: number;
} | undefined {
  const level = findLevel(levelId);
  if (!level) return undefined;
  const lessonIndex = level.lessons.findIndex((l) => l.slug === lessonSlug);
  if (lessonIndex === -1) return undefined;
  return { level, lesson: level.lessons[lessonIndex], lessonIndex };
}

export function getNeighbours(levelId: string, lessonSlug: string): {
  prev?: { levelId: string; slug: string; title: string };
  next?: { levelId: string; slug: string; title: string };
} {
  const found = findLesson(levelId, lessonSlug);
  if (!found) return {};
  const { level, lessonIndex } = found;
  const levelIdx = LEVELS.findIndex((l) => l.id === level.id);

  let prev: { levelId: string; slug: string; title: string } | undefined;
  if (lessonIndex > 0) {
    const p = level.lessons[lessonIndex - 1];
    prev = { levelId: level.id, slug: p.slug, title: p.title };
  } else if (levelIdx > 0) {
    const prevLevel = LEVELS[levelIdx - 1];
    const p = prevLevel.lessons[prevLevel.lessons.length - 1];
    if (p) prev = { levelId: prevLevel.id, slug: p.slug, title: p.title };
  }

  let next: { levelId: string; slug: string; title: string } | undefined;
  if (lessonIndex < level.lessons.length - 1) {
    const n = level.lessons[lessonIndex + 1];
    next = { levelId: level.id, slug: n.slug, title: n.title };
  } else if (levelIdx < LEVELS.length - 1) {
    const nextLevel = LEVELS[levelIdx + 1];
    const n = nextLevel.lessons[0];
    if (n) next = { levelId: nextLevel.id, slug: n.slug, title: n.title };
  }

  return { prev, next };
}
