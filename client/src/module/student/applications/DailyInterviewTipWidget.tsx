import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight, Lightbulb } from "lucide-react";

interface Question {
  category: string;
  difficulty: "Easy" | "Medium" | "Hard";
  question: string;
  answer: string;
  tips: string[];
}

const QUESTIONS: Question[] = [
  // ── DSA ──────────────────────────────────────────────────────────────────
  {
    category: "DSA",
    difficulty: "Medium",
    question: "How does a hash map work internally? What happens when two keys produce the same hash?",
    answer: "A hash map stores key-value pairs in an array of buckets. A hash function maps each key to a bucket index. When two keys hash to the same index (collision), the map uses chaining (linked list/array at that bucket) or open addressing (probe to the next empty slot).",
    tips: [
      "Average O(1) get/set — worst case O(n) with many collisions.",
      "Java's HashMap uses chaining with red-black trees when a bucket's chain exceeds 8 nodes.",
      "Load factor (default 0.75) triggers resizing to keep collisions low.",
    ],
  },
  {
    category: "DSA",
    difficulty: "Easy",
    question: "What is the difference between BFS and DFS? When would you prefer one over the other?",
    answer: "BFS explores level by level using a queue; DFS explores as deep as possible using a stack or recursion. BFS is ideal for shortest-path problems in unweighted graphs. DFS is useful for cycle detection, topological sort, and exploring all paths.",
    tips: [
      "BFS guarantees the shortest path in an unweighted graph.",
      "DFS has O(h) space where h is tree height; BFS needs O(w) where w is max width.",
      "Iterative DFS avoids stack-overflow risk for very deep trees.",
    ],
  },
  {
    category: "DSA",
    difficulty: "Medium",
    question: "Explain dynamic programming. What is the difference between memoization and tabulation?",
    answer: "DP solves problems by breaking them into overlapping subproblems and storing results to avoid redundant computation. Memoization (top-down) is recursive with a cache; tabulation (bottom-up) fills a table iteratively from base cases.",
    tips: [
      "Identify the state: what parameters uniquely define a subproblem.",
      "Memoization is easier to reason about; tabulation is often faster (no call overhead).",
      "Classic examples: Fibonacci, 0/1 Knapsack, Longest Common Subsequence.",
    ],
  },
  {
    category: "DSA",
    difficulty: "Medium",
    question: "What is the time complexity of quicksort in average and worst case? When does worst case occur?",
    answer: "Average O(n log n), worst case O(n²). Worst case occurs when the pivot is consistently the smallest or largest element — e.g., sorted input with a naive first-element pivot.",
    tips: [
      "Random pivot or median-of-three selection avoids worst case in practice.",
      "Quicksort is cache-friendly (in-place); merge sort is stable but needs O(n) extra space.",
      "Introsort (used in std::sort) switches to heapsort when recursion depth exceeds 2 log n.",
    ],
  },
  {
    category: "DSA",
    difficulty: "Hard",
    question: "Explain how a segment tree works. What problems is it best suited for?",
    answer: "A segment tree is a binary tree where each node stores an aggregate (sum, min, max) over a subarray range. It supports range queries and point or range updates in O(log n).",
    tips: [
      "Build time O(n), query and point-update O(log n).",
      "Lazy propagation enables efficient range updates without updating every leaf.",
      "Common in competitive programming for range sum/min/max with updates.",
    ],
  },
  {
    category: "DSA",
    difficulty: "Medium",
    question: "What is the difference between a stack and a queue? Give a real use case for each.",
    answer: "A stack is LIFO — the last element pushed is the first popped. A queue is FIFO — the first element enqueued is the first dequeued. Stack use case: function call stack, undo history. Queue use case: BFS traversal, task scheduling, print spooler.",
    tips: [
      "Monotonic stack solves 'next greater element' problems in O(n).",
      "A deque (double-ended queue) can act as both — used in sliding window maximum.",
      "Priority queue (heap) is a queue where dequeue returns the highest-priority element.",
    ],
  },
  {
    category: "DSA",
    difficulty: "Easy",
    question: "What is a binary search tree (BST)? What are its time complexity guarantees?",
    answer: "A BST is a binary tree where every node's left subtree contains only smaller values and the right subtree contains only larger values. Search, insert, and delete are O(h) where h is tree height — O(log n) for balanced trees, O(n) for degenerate (skewed) trees.",
    tips: [
      "AVL trees and Red-Black trees self-balance to guarantee O(log n) operations.",
      "In-order traversal of a BST yields elements in sorted order.",
      "Deletion requires finding the in-order successor or predecessor to maintain BST property.",
    ],
  },
  // ── Behavioral ───────────────────────────────────────────────────────────
  {
    category: "Behavioral",
    difficulty: "Easy",
    question: "Tell me about a time you disagreed with a team member. How did you handle it?",
    answer: "Use the STAR method: describe the Situation, your Task, the Action you took (listened first, presented data, found middle ground), and the Result (better outcome, preserved relationship).",
    tips: [
      "Focus on the resolution process, not who was right.",
      "Show you can disagree respectfully and still move forward.",
      "Avoid saying you always agree — interviewers want intellectual honesty.",
    ],
  },
  {
    category: "Behavioral",
    difficulty: "Easy",
    question: "Describe a project where you had to learn a new technology quickly. What was your approach?",
    answer: "Pick a real example. Explain how you broke down the learning (docs, tutorials, small experiments), applied it under a deadline, and what you delivered. Highlight adaptability.",
    tips: [
      "Quantify the timeline: 'learned X in 2 days to ship Y feature.'",
      "Mention a specific resource or strategy that helped most.",
      "Show the outcome benefited the team or project.",
    ],
  },
  {
    category: "Behavioral",
    difficulty: "Easy",
    question: "Tell me about a time you failed. What did you learn from it?",
    answer: "Be honest and specific — vague failures read as dishonest. Describe the failure, your role in it, what you learned, and how you changed your behavior afterward.",
    tips: [
      "Interviewers want self-awareness, not perfection.",
      "Choose a professional failure with real stakes, not a trivial one.",
      "End on the lesson learned and what you changed — not the failure itself.",
    ],
  },
  {
    category: "Behavioral",
    difficulty: "Easy",
    question: "Describe a situation where you worked under a tight deadline. How did you manage it?",
    answer: "Explain what was at stake, how you prioritized tasks, what you cut or delegated, and how you communicated progress. Emphasize the outcome and any process improvements afterward.",
    tips: [
      "Show you can triage: what's critical vs nice-to-have.",
      "Mention communicating timeline risks early — proactiveness matters.",
      "Avoid making it sound like you just 'worked harder.' Show strategic prioritization.",
    ],
  },
  {
    category: "Behavioral",
    difficulty: "Easy",
    question: "What is your approach when you are stuck on a problem for a long time?",
    answer: "Describe a systematic approach: re-read requirements, rubber-duck debug, isolate the smallest reproducing case, search docs, then ask a colleague with a clear description of what you have already tried.",
    tips: [
      "Shows independence and knowing when to ask for help — a key balance.",
      "Mention time-boxing: 'after 30 min with no progress I seek input.'",
      "Write down your attempts so others can help faster.",
    ],
  },
  // ── System Design ────────────────────────────────────────────────────────
  {
    category: "System Design",
    difficulty: "Medium",
    question: "How would you design a URL shortener like bit.ly?",
    answer: "Core components: API server, a key generation service (base62 encoding of an auto-increment ID), a KV store (Redis for cache, DB for persistence), and a redirect service. Handle 301 vs 302 redirects and analytics tracking.",
    tips: [
      "Reads far exceed writes for a shortener — optimize the read path first.",
      "Base62 (a-z, A-Z, 0-9) gives 62^7 ≈ 3.5 trillion unique 7-char codes.",
      "Use a CDN or edge cache for popular URLs to reduce latency globally.",
    ],
  },
  {
    category: "System Design",
    difficulty: "Hard",
    question: "Explain the CAP theorem. Give an example of a CP system and an AP system.",
    answer: "CAP: a distributed system can guarantee only 2 of 3 — Consistency, Availability, Partition tolerance. Since network partitions always happen, you choose CP or AP. HBase/Zookeeper are CP (consistent, may become unavailable). Cassandra/DynamoDB are AP (available, may return stale data).",
    tips: [
      "In practice you tune consistency level per-operation (Cassandra quorum writes).",
      "PACELC extends CAP: even without partitions, systems trade latency vs consistency.",
      "Most real systems are tunable — ask what the product's consistency requirement is.",
    ],
  },
  {
    category: "System Design",
    difficulty: "Hard",
    question: "How would you design a push notification system that serves 10 million users?",
    answer: "Producers publish events to a message queue (Kafka). Consumer workers fan out to device-specific delivery services (FCM for Android, APNs for iOS). Store undelivered notifications in a DB. Use exponential backoff for retries and track delivery receipts.",
    tips: [
      "Fan-out can be expensive for high-follower users — consider pre-computing recipient lists.",
      "Segment delivery by platform with separate queues to isolate failures.",
      "Rate-limit per user to prevent notification spam.",
    ],
  },
  {
    category: "System Design",
    difficulty: "Medium",
    question: "What is load balancing? Name three common strategies.",
    answer: "Load balancing distributes incoming traffic across multiple servers. Strategies: Round Robin (sequential), Least Connections (route to least-busy server), IP Hash (same client always hits same server — sticky sessions).",
    tips: [
      "Layer 4 LB routes by TCP/IP; Layer 7 LB can route by URL path, headers, or cookies.",
      "Least connections outperforms round robin when request processing time varies widely.",
      "Consistent hashing reduces cache invalidation when servers are added or removed.",
    ],
  },
  {
    category: "System Design",
    difficulty: "Easy",
    question: "When would you use a NoSQL database over a relational one?",
    answer: "Use NoSQL when: schema is flexible or evolves rapidly, you need horizontal scaling, data is document/graph/time-series shaped, or you need very low-latency reads at high write volume.",
    tips: [
      "NoSQL does not mean no schema — you still design access patterns, just in the app layer.",
      "Document DBs (MongoDB) suit JSON-like data; column-family DBs (Cassandra) suit write-heavy time series.",
      "Relational DBs offer ACID and complex joins that most NoSQL solutions make difficult.",
    ],
  },
  // ── HR / Culture ─────────────────────────────────────────────────────────
  {
    category: "HR",
    difficulty: "Easy",
    question: "Where do you see yourself in 5 years?",
    answer: "Be honest and link it to the role. Describe growing into a senior technical role, taking on more ownership, or specializing in a domain relevant to the company. Show ambition without implying you will leave soon.",
    tips: [
      "Tie your answer to the company's growth — shows you researched them.",
      "Avoid: 'in your position' (threatening) or 'I don't know' (unprepared).",
      "Mention learning goals like system design mastery or technical leadership.",
    ],
  },
  {
    category: "HR",
    difficulty: "Easy",
    question: "Why do you want to work at this company specifically?",
    answer: "Research the company's product, tech stack, culture, and recent news. Pick 2-3 genuine reasons: the technical problem they are solving, a specific product you use, or a value in their engineering culture.",
    tips: [
      "Generic answers ('fast-growing startup') are red flags — be specific.",
      "Mention a real product feature or engineering blog post if possible.",
      "Connect their mission directly to your own career goals.",
    ],
  },
  {
    category: "HR",
    difficulty: "Easy",
    question: "What are your biggest strengths and weaknesses?",
    answer: "For strengths: pick ones relevant to the role and back them with a brief example. For weaknesses: choose a real one, describe what you are doing to improve, and show self-awareness without picking something critical to the job.",
    tips: [
      "Avoid 'I work too hard' — it is transparent and off-putting.",
      "Good weakness: 'I used to struggle with public speaking. I joined a group and now present in team meetings regularly.'",
      "Keep it brief — strengths/weaknesses are not the focus of the interview.",
    ],
  },
  {
    category: "HR",
    difficulty: "Easy",
    question: "How do you prioritize when you have multiple tasks with competing deadlines?",
    answer: "Describe your system: assess urgency and impact, communicate to stakeholders, break work into milestones, and re-evaluate daily. Tools like Jira or a simple task list help.",
    tips: [
      "Show you involve your manager when priorities conflict — not solo decisions.",
      "Mention you over-communicate when timelines are at risk.",
      "Give a real example of juggling multiple competing tasks if you can.",
    ],
  },
  {
    category: "HR",
    difficulty: "Easy",
    question: "Why should we hire you over other candidates?",
    answer: "Be direct: summarize your most relevant skills, your experience with similar problems, and one unique differentiator. End by expressing genuine enthusiasm for the specific role.",
    tips: [
      "Frame it around their needs: 'You need X, and I bring Y because...'",
      "Do not trash other candidates — focus on your own value.",
      "Prepare this answer in advance — stumbling here hurts your impression.",
    ],
  },
  // ── Frontend ─────────────────────────────────────────────────────────────
  {
    category: "Frontend",
    difficulty: "Medium",
    question: "What is the virtual DOM in React and why does it improve performance?",
    answer: "The virtual DOM is an in-memory lightweight copy of the real DOM. React diffs the new virtual DOM against the previous one (reconciliation) and batches minimal real DOM mutations, avoiding costly direct DOM manipulation on every state change.",
    tips: [
      "React Fiber (React 16+) made reconciliation interruptible for smoother rendering.",
      "The key prop helps React match list elements across renders — always use stable keys.",
      "Virtual DOM has overhead for simple apps but is a big win for complex UIs.",
    ],
  },
  {
    category: "Frontend",
    difficulty: "Easy",
    question: "Explain the difference between `null`, `undefined`, and `NaN` in JavaScript.",
    answer: "`undefined` means a variable was declared but not assigned. `null` is an intentional absence of value (you set it explicitly). `NaN` results from invalid numeric operations like `Number('abc')`. Note: `typeof null === 'object'` is a historical language bug.",
    tips: [
      "`null == undefined` is true (loose equality), `null === undefined` is false (strict).",
      "Use `Number.isNaN()` not `isNaN()` — `isNaN('abc')` returns true due to coercion.",
      "Optional chaining `?.` and nullish coalescing `??` handle null/undefined cleanly.",
    ],
  },
  {
    category: "Frontend",
    difficulty: "Medium",
    question: "What is event delegation in JavaScript and why is it useful?",
    answer: "Event delegation adds one listener to a parent element instead of many listeners on each child. It works because DOM events bubble up through ancestors. Useful for dynamic lists where children are added or removed at runtime.",
    tips: [
      "Use `event.target` to identify which child triggered the event.",
      "Reduces memory usage significantly — one listener vs potentially hundreds.",
      "Classic pattern for dynamic UIs like todo lists or infinite scroll tables.",
    ],
  },
  {
    category: "Frontend",
    difficulty: "Medium",
    question: "Explain closures in JavaScript with a practical example.",
    answer: "A closure is a function that retains access to its outer scope's variables even after the outer function has returned. Example: a counter factory returns a function that increments a private `count` variable. Each factory call creates an independent counter with its own enclosed state.",
    tips: [
      "Closures power the module pattern, currying, and memoization.",
      "Classic bug: loop with `var` + closure captures the last value. Fix: use `let` or an IIFE.",
      "Every function in JavaScript is a closure — they all capture their enclosing scope.",
    ],
  },
  {
    category: "Frontend",
    difficulty: "Easy",
    question: "What is CSS specificity and how is it calculated?",
    answer: "Specificity determines which CSS rule wins when multiple rules target the same element. Score: inline styles > IDs > classes/attributes/pseudo-classes > elements/pseudo-elements. Higher score wins; equal scores mean the later rule wins.",
    tips: [
      "Inline styles beat everything except `!important`.",
      "`!important` overrides specificity entirely — avoid it as it breaks the cascade.",
      "BEM methodology reduces specificity conflicts by keeping all selectors as single classes.",
    ],
  },
  // ── Backend ──────────────────────────────────────────────────────────────
  {
    category: "Backend",
    difficulty: "Medium",
    question: "What is the difference between REST and GraphQL? When would you choose GraphQL?",
    answer: "REST uses fixed endpoints (one per resource). GraphQL uses a single endpoint where the client specifies exactly what data it needs. Choose GraphQL when clients need flexible data shapes, you have multiple client types (web/mobile) with different needs, or over-fetching/under-fetching is a pain point.",
    tips: [
      "GraphQL eliminates over-fetching but adds complexity: schema, resolvers, and tooling.",
      "REST is simpler to cache (HTTP caching headers); GraphQL caching is non-trivial.",
      "GraphQL subscriptions handle real-time data well; REST needs WebSocket separately.",
    ],
  },
  {
    category: "Backend",
    difficulty: "Medium",
    question: "What is database indexing? What are the tradeoffs?",
    answer: "An index is a data structure (usually B-tree or hash) that speeds up row lookup without scanning the full table. Tradeoffs: faster reads but slower writes (the index must be updated on INSERT/UPDATE/DELETE) and additional disk/memory usage.",
    tips: [
      "For composite indexes, put equality-filter columns before range-filter columns.",
      "Too many indexes slow writes; too few slow reads. Profile queries before adding indexes.",
      "Use EXPLAIN ANALYZE to see which index (if any) the query planner uses.",
    ],
  },
  {
    category: "Backend",
    difficulty: "Easy",
    question: "What is the difference between authentication and authorization?",
    answer: "Authentication answers 'Who are you?' — verifying identity via password, token, or biometric. Authorization answers 'What are you allowed to do?' — checking permissions after identity is confirmed. Authentication always comes before authorization.",
    tips: [
      "JWT carries identity (sub claim) and permission claims (roles) in the payload.",
      "OAuth 2.0 is an authorization framework; OpenID Connect adds authentication on top.",
      "Always enforce authorization server-side — client-side checks are cosmetic only.",
    ],
  },
  {
    category: "Backend",
    difficulty: "Medium",
    question: "Explain the ACID properties in database transactions.",
    answer: "Atomicity: all operations in a transaction succeed or all are rolled back. Consistency: the DB moves from one valid state to another. Isolation: concurrent transactions do not see each other's intermediate state. Durability: committed transactions survive crashes.",
    tips: [
      "Isolation levels (Read Uncommitted → Serializable) trade consistency for performance.",
      "Phantom reads, non-repeatable reads, and dirty reads are the three classic isolation anomalies.",
      "Many NoSQL DBs sacrifice full ACID for scale — know what guarantees your database provides.",
    ],
  },
  {
    category: "Backend",
    difficulty: "Easy",
    question: "What is middleware in Express.js? Give a real-world example.",
    answer: "Middleware is a function with access to `req`, `res`, and `next`. It runs in the request-response pipeline and can modify the request, end the response, or pass control to the next middleware. Examples: logging (Morgan), JWT authentication check, request body parsing (express.json).",
    tips: [
      "Order matters — authentication middleware must come before protected route handlers.",
      "Error-handling middleware takes 4 args `(err, req, res, next)` and must be registered last.",
      "Middleware is composable — apply it globally with `app.use` or per-route as an argument.",
    ],
  },
];

const DIFFICULTY_STYLE: Record<string, string> = {
  Easy: "text-lime-700 dark:text-lime-400 border-lime-300 dark:border-lime-700",
  Medium: "text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-700",
  Hard: "text-red-600 dark:text-red-400 border-red-300 dark:border-red-700",
};

const CATEGORY_STYLE: Record<string, string> = {
  DSA: "bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-400",
  Behavioral: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400",
  "System Design": "bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400",
  HR: "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400",
  Frontend: "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-400",
  Backend: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400",
};

function getDailyIndex(): number {
  return Math.floor(Date.now() / 86_400_000) % QUESTIONS.length;
}

export default function DailyInterviewTipWidget() {
  const [offset, setOffset] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const index = (getDailyIndex() + offset + QUESTIONS.length) % QUESTIONS.length;
  const q = QUESTIONS[index]!;

  const handleNav = (dir: -1 | 1) => {
    setOffset((o) => o + dir);
    setExpanded(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-5 rounded-md border border-stone-200 dark:border-white/10 bg-white dark:bg-stone-900 overflow-hidden"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-stone-100 dark:border-white/8 bg-stone-50 dark:bg-stone-950/40">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-3.5 h-3.5 text-lime-500" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            Daily Interview Tip
          </span>
        </div>
        <div className="flex items-center gap-0.5">
          <button
            type="button"
            onClick={() => handleNav(-1)}
            title="Previous question"
            className="p-1 rounded-sm text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer border-0 bg-transparent"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <span className="text-[10px] font-mono text-stone-400 tabular-nums w-10 text-center select-none">
            {index + 1} / {QUESTIONS.length}
          </span>
          <button
            type="button"
            onClick={() => handleNav(1)}
            title="Next question"
            className="p-1 rounded-sm text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer border-0 bg-transparent"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 py-4">
        {/* Category + difficulty */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-sm ${CATEGORY_STYLE[q.category] ?? CATEGORY_STYLE["HR"]}`}>
            {q.category}
          </span>
          <span className={`text-[10px] font-mono border px-2 py-0.5 rounded-sm ${DIFFICULTY_STYLE[q.difficulty]}`}>
            {q.difficulty}
          </span>
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, x: 6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -6 }}
            transition={{ duration: 0.18 }}
            className="text-sm font-semibold text-stone-900 dark:text-stone-50 leading-relaxed mb-3"
          >
            {q.question}
          </motion.p>
        </AnimatePresence>

        {/* Toggle */}
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1.5 text-[11px] font-mono text-lime-600 dark:text-lime-400 hover:text-lime-700 dark:hover:text-lime-300 transition-colors cursor-pointer border-0 bg-transparent p-0"
        >
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expanded ? "rotate-180" : ""}`} />
          {expanded ? "Hide answer" : "Show answer & tips"}
        </button>

        {/* Answer + tips */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="mt-3 space-y-2.5">
                <div className="p-3 rounded-sm bg-stone-50 dark:bg-stone-800/60 border border-stone-100 dark:border-white/8">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-1.5">Answer</p>
                  <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">{q.answer}</p>
                </div>
                <div className="p-3 rounded-sm bg-lime-50 dark:bg-lime-900/15 border border-lime-100 dark:border-lime-800/40">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-lime-600 dark:text-lime-500 mb-2">Key Points</p>
                  <ul className="space-y-1.5">
                    {q.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-stone-600 dark:text-stone-400">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-lime-400 shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
