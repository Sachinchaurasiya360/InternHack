import { useEffect, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Globe, Pause, Play, RotateCcw, Search } from "lucide-react";
import EngineeringLessonShell from "@/components/engineering/EngineeringLessonShell";
import type { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";

const SD = "#84cc16";
const NEUTRAL = "#64748b";
const WARN = "#f59e0b";
const PURPLE = "#8b5cf6";
const MONO = '"JetBrains Mono", Menlo, Consolas, monospace';

const sectionTitle: CSSProperties = {
  fontFamily: "var(--eng-font)", fontWeight: 700, fontSize: "1.15rem",
  color: "var(--eng-text)", margin: "0 0 12px",
};
const sectionDesc: CSSProperties = {
  fontFamily: "var(--eng-font)", fontSize: "0.92rem",
  color: "var(--eng-text-muted)", margin: "0 0 20px", lineHeight: 1.65,
};

/* ================================================================== */
/*  TAB 1 - Definition                                                 */
/* ================================================================== */

function Definition() {
  return (
    <div>
      <h3 style={sectionTitle}>An index turns O(n) into O(log n)</h3>
      <p style={sectionDesc}>
        An index is a separate data structure that maps key → row pointer. The DB consults the
        index first, walks down its tree, and jumps straight to the matching rows — instead of
        scanning the entire table. The cost: writes are slower (every insert / update / delete
        also updates the index), and indexes consume disk.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6"
      >
        {[
          { k: "B-Tree (default)", v: "Balanced tree, O(log n) lookup, range-friendly. The default in Postgres, MySQL InnoDB, MongoDB.", color: SD },
          { k: "Hash index", v: "Hash → bucket. O(1) for exact match, useless for range. Good for cache-style key-value lookups.", color: PURPLE },
          { k: "GIN / GiST / Inverted", v: "For non-scalar data: arrays, JSON paths, full-text. Maps each token to the rows containing it.", color: WARN },
        ].map((c) => (
          <motion.div
            key={c.k}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
            style={{ padding: "16px 18px", border: `1.5px solid ${c.color}55`, borderRadius: 10, background: `${c.color}08` }}
          >
            <div style={{ fontFamily: MONO, fontSize: "0.7rem", fontWeight: 800, color: c.color, letterSpacing: "0.1em", marginBottom: 8 }}>
              {c.k.toUpperCase()}
            </div>
            <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.55 }}>{c.v}</div>
          </motion.div>
        ))}
      </motion.div>

      <div style={{ padding: "16px 18px", borderRadius: 10, border: `1.5px solid ${SD}55`, background: `${SD}10`, marginBottom: 16 }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 8 }}>
          THE TRADE
        </div>
        <div style={{ fontSize: "0.92rem", color: "var(--eng-text)", lineHeight: 1.65 }}>
          Reads: <b>way faster</b> on indexed columns. Writes: <b>slower</b>, because every
          insert/update/delete also has to update each index. Disk: <b>more</b>, because the
          index is its own copy of the column. Pick indexes that actually get queried, not every
          column &ldquo;just in case.&rdquo;
        </div>
      </div>

      <div style={{ padding: "14px 16px", borderRadius: 8, border: "1px solid var(--eng-border)" }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          REAL EXAMPLES
        </div>
        <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
          A 50M-row <b>orders</b> table. <code style={{ fontFamily: MONO }}>SELECT * FROM orders WHERE user_id = 42</code>{" "}
          without an index: full scan of 50M rows. With a B-tree on <code style={{ fontFamily: MONO }}>user_id</code>:
          ~26 comparisons (log₂ 50M). The query goes from seconds to microseconds. <b>Postgres
          EXPLAIN ANALYZE</b> shows you which indexes the planner picked — debugging index
          questions is mostly reading EXPLAIN output.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - B-tree drilldown + scan-vs-seek race                       */
/* ================================================================== */

interface TreeNode {
  keys: number[];
  children?: TreeNode[];
}

const TREE: TreeNode = {
  keys: [25, 50, 75],
  children: [
    { keys: [5, 12, 20] },
    { keys: [30, 38, 45] },
    { keys: [55, 62, 70] },
    { keys: [80, 88, 95] },
  ],
};

function BTreeDrilldown() {
  const [target, setTarget] = useState(38);
  const [scanT, setScanT] = useState(-1);
  const [seekStep, setSeekStep] = useState(-1);
  const [racing, setRacing] = useState(false);

  // Compute the seek path for the current target
  const seekPath: { level: 0 | 1; idx: number; cmp: number[] }[] = [];
  // Root level
  let rootIdx = TREE.keys.findIndex((k) => target <= k);
  if (rootIdx === -1) rootIdx = TREE.keys.length;
  seekPath.push({ level: 0, idx: rootIdx, cmp: TREE.keys });
  // Leaf level
  const leaf = TREE.children![rootIdx];
  const leafIdx = leaf.keys.indexOf(target);
  seekPath.push({ level: 1, idx: leafIdx, cmp: leaf.keys });

  const TOTAL_ROWS = 12; // visible "rows" for the scan animation (representing N rows)

  useEffect(() => {
    if (!racing) return;
    let cancelled = false;
    setScanT(-1);
    setSeekStep(-1);

    // Scan: 100ms per row
    let s = 0;
    const scanHandle = setInterval(() => {
      if (cancelled) return clearInterval(scanHandle);
      s++;
      setScanT(s);
      if (s >= TOTAL_ROWS) {
        clearInterval(scanHandle);
      }
    }, 200);

    // Seek: 700ms per level (slow enough to read)
    let k = 0;
    const seekHandle = setInterval(() => {
      if (cancelled) return clearInterval(seekHandle);
      k++;
      setSeekStep(k);
      if (k >= seekPath.length) {
        clearInterval(seekHandle);
      }
    }, 700);

    const stopHandle = setTimeout(() => {
      setRacing(false);
    }, 3500);

    return () => {
      cancelled = true;
      clearInterval(scanHandle);
      clearInterval(seekHandle);
      clearTimeout(stopHandle);
    };
  }, [racing, target]);

  const startRace = () => {
    setRacing(true);
  };

  const reset = () => {
    setRacing(false);
    setScanT(-1);
    setSeekStep(-1);
  };

  return (
    <div>
      <h3 style={sectionTitle}>Race the index against the full scan</h3>
      <p style={sectionDesc}>
        Target row: <b>{target}</b>. The full scan checks every row in order. The B-tree seek
        walks 2 levels: pick the right child at the root, then find the key in the leaf. Press
        race and watch them go.
      </p>

      <div className="flex items-center gap-2 mb-5 flex-wrap">
        <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>target key:</span>
        {[5, 38, 62, 88].map((k) => {
          const active = target === k;
          return (
            <button
              key={k}
              type="button"
              onClick={() => { setTarget(k); reset(); }}
              disabled={racing}
              style={{
                padding: "6px 12px",
                borderRadius: 6,
                cursor: racing ? "not-allowed" : "pointer",
                border: `1.5px solid ${active ? SD : "var(--eng-border)"}`,
                background: active ? `${SD}18` : "transparent",
                color: active ? SD : "var(--eng-text-muted)",
                fontFamily: MONO,
                fontSize: "0.74rem",
                fontWeight: 700,
                opacity: racing ? 0.5 : 1,
              }}
            >
              {k}
            </button>
          );
        })}
      </div>

      <div style={{ background: "#0b1220", borderRadius: 12, border: "1px solid rgba(148,163,184,0.15)", padding: 22 }}>
        {/* Two lanes side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full scan */}
          <div style={{ padding: "14px 16px", borderRadius: 8, border: `1.5px solid ${WARN}33`, background: `${WARN}08` }}>
            <div style={{ fontFamily: MONO, fontSize: "0.74rem", fontWeight: 700, color: WARN, marginBottom: 10 }}>
              FULL TABLE SCAN · O(n)
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 4 }}>
              {[5, 12, 20, 30, 38, 45, 55, 62, 70, 80, 88, 95].map((k, i) => {
                const visited = scanT >= 0 && i < scanT;
                const current = scanT === i;
                const found = visited && k === target;
                const c = found ? SD : current ? WARN : visited ? NEUTRAL : NEUTRAL;
                return (
                  <motion.div
                    key={k}
                    animate={{
                      backgroundColor: found ? `${SD}33` : current ? `${WARN}33` : visited ? "rgba(148,163,184,0.08)" : "rgba(148,163,184,0.04)",
                      borderColor: found ? SD : current ? WARN : `${NEUTRAL}33`,
                    }}
                    transition={{ duration: 0.15 }}
                    style={{
                      padding: "8px 4px",
                      borderRadius: 4,
                      border: "1.5px solid",
                      textAlign: "center",
                      fontFamily: MONO,
                      fontSize: "0.74rem",
                      fontWeight: 700,
                      color: c,
                    }}
                  >
                    {k}
                  </motion.div>
                );
              })}
            </div>
            <div style={{ marginTop: 10, fontFamily: MONO, fontSize: "0.7rem", color: WARN }}>
              checked: <span style={{ fontWeight: 700 }}>{Math.max(0, scanT)}</span> / 12 rows
            </div>
          </div>

          {/* B-tree seek */}
          <div style={{ padding: "14px 16px", borderRadius: 8, border: `1.5px solid ${SD}33`, background: `${SD}08` }}>
            <div style={{ fontFamily: MONO, fontSize: "0.74rem", fontWeight: 700, color: SD, marginBottom: 10 }}>
              B-TREE SEEK · O(log n)
            </div>
            <svg viewBox="0 0 320 220" width="100%" style={{ display: "block" }}>
              {/* edges from root to leaves */}
              {TREE.children!.map((_, i) => {
                const onPath = seekStep >= 1 && i === seekPath[0].idx;
                return (
                  <line
                    key={i}
                    x1={160}
                    y1={50}
                    x2={40 + i * 80}
                    y2={140}
                    stroke={onPath ? SD : NEUTRAL}
                    strokeWidth={onPath ? 2 : 1}
                    strokeOpacity={onPath ? 1 : 0.4}
                  />
                );
              })}

              {/* root */}
              <motion.rect
                x={80}
                y={20}
                width={160}
                height={36}
                rx={6}
                animate={{
                  fill: seekStep >= 0 ? `${SD}33` : `${NEUTRAL}22`,
                  stroke: seekStep >= 0 ? SD : NEUTRAL,
                }}
                transition={{ duration: 0.3 }}
                strokeWidth={1.5}
              />
              {TREE.keys.map((k, i) => {
                const isPicked = seekStep >= 0 && i === seekPath[0].idx;
                return (
                  <text
                    key={k}
                    x={120 + i * 40}
                    y={42}
                    textAnchor="middle"
                    fill={isPicked ? "#0b1220" : "#e5e7eb"}
                    fontSize={11}
                    fontWeight={isPicked ? 800 : 600}
                    fontFamily={MONO}
                  >
                    {k}
                  </text>
                );
              })}

              {/* leaves */}
              {TREE.children!.map((child, i) => {
                const onPath = seekStep >= 1 && i === seekPath[0].idx;
                const x = 6 + i * 80;
                return (
                  <g key={i}>
                    <motion.rect
                      x={x}
                      y={140}
                      width={68}
                      height={36}
                      rx={6}
                      animate={{
                        fill: onPath ? `${SD}33` : `${NEUTRAL}22`,
                        stroke: onPath ? SD : NEUTRAL,
                      }}
                      transition={{ duration: 0.3 }}
                      strokeWidth={1.5}
                    />
                    {child.keys.map((k, j) => {
                      const isFound = onPath && k === target;
                      return (
                        <text
                          key={k}
                          x={x + 12 + j * 22}
                          y={163}
                          textAnchor="middle"
                          fill={isFound ? "#0b1220" : "#e5e7eb"}
                          fontSize={10}
                          fontWeight={isFound ? 800 : 600}
                          fontFamily={MONO}
                        >
                          {k}
                        </text>
                      );
                    })}
                  </g>
                );
              })}

              {/* Row found marker */}
              {seekStep >= 2 && (
                <motion.text
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  x={6 + seekPath[0].idx * 80 + 34}
                  y={200}
                  textAnchor="middle"
                  fill={SD}
                  fontSize={11}
                  fontWeight={800}
                  fontFamily={MONO}
                >
                  ✓ row found
                </motion.text>
              )}
            </svg>
            <div style={{ marginTop: 10, fontFamily: MONO, fontSize: "0.7rem", color: SD }}>
              levels walked: <span style={{ fontWeight: 700 }}>{Math.max(0, Math.min(seekStep, 2))}</span> / 2
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-5 flex-wrap">
          <motion.button whileTap={{ scale: 0.95 }} onClick={startRace} disabled={racing} style={btn(SD, racing)}>
            {racing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            race
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={reset} style={btn(NEUTRAL, false)}>
            <RotateCcw className="w-3.5 h-3.5" />
            reset
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          {scanT >= TOTAL_ROWS && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              style={{ marginTop: 14, padding: "12px 14px", background: "rgba(15,23,42,0.6)", borderRadius: 6, fontSize: "0.86rem", color: "#e5e7eb", lineHeight: 1.55 }}
            >
              <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginRight: 8 }}>
                RESULT
              </span>
              Full scan checked all 12 rows. B-tree seek used 2 comparisons. On a 50M-row
              table that&rsquo;s 50,000,000 vs ~26 comparisons. The whole point of indexes.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function btn(color: string, disabled: boolean): CSSProperties {
  return {
    display: "inline-flex", alignItems: "center", gap: 6,
    padding: "8px 14px", borderRadius: 6,
    cursor: disabled ? "not-allowed" : "pointer",
    border: `1.5px solid ${disabled ? "rgba(148,163,184,0.25)" : color}`,
    background: disabled ? "transparent" : `${color}18`,
    color: disabled ? NEUTRAL : color,
    fontFamily: MONO, fontSize: "0.72rem", fontWeight: 700,
    letterSpacing: "0.08em", textTransform: "uppercase",
    opacity: disabled ? 0.5 : 1,
  };
}

/* ================================================================== */
/*  TAB 3 - When indexes help vs hurt                                  */
/* ================================================================== */

const SCENARIOS = [
  { q: "WHERE user_id = 42", verdict: "INDEX HELPS", c: SD, why: "Equality on indexed column. Direct B-tree seek." },
  { q: "WHERE created_at BETWEEN '2026-01-01' AND '2026-02-01'", verdict: "INDEX HELPS", c: SD, why: "Range scan on indexed column. B-tree walks one path, then iterates leaves." },
  { q: "WHERE LOWER(email) = 'asha@example.com'", verdict: "INDEX MISSED", c: WARN, why: "Function on column → planner can't use a simple index. Need a functional index on LOWER(email)." },
  { q: "WHERE name LIKE '%rao%'", verdict: "INDEX MISSED", c: WARN, why: "Leading wildcard. B-tree can't seek to it. Use a trigram or full-text index instead." },
  { q: "WHERE status = 'active' (90% of rows are active)", verdict: "INDEX HURTS", c: WARN, why: "Low selectivity. Index lookup + table fetch is slower than just scanning." },
  { q: "Insert-heavy table with 8 indexes", verdict: "INDEX HURTS", c: WARN, why: "Every insert maintains 8 indexes. Write throughput collapses. Drop unused indexes first." },
];

function Scenarios() {
  return (
    <div>
      <h3 style={sectionTitle}>When the index helps, when it doesn&rsquo;t</h3>
      <p style={sectionDesc}>
        Six common patterns and what the query planner actually does. Reading EXPLAIN ANALYZE
        teaches you these in one afternoon.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        className="grid grid-cols-1 gap-3"
      >
        {SCENARIOS.map((s) => (
          <motion.div
            key={s.q}
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } } }}
            whileHover={{ y: -1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10, display: "grid", gridTemplateColumns: "1fr 130px 2fr", gap: 16, alignItems: "center" }}
          >
            <code style={{ fontFamily: MONO, fontSize: "0.78rem", color: "var(--eng-text)" }}>{s.q}</code>
            <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: s.c, letterSpacing: "0.08em", padding: "4px 8px", borderRadius: 4, border: `1px solid ${s.c}55`, background: `${s.c}14`, textAlign: "center" }}>
              {s.verdict}
            </span>
            <span style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.5 }}>{s.why}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L3_IndexesActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definition", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "race", label: "Race the Scan", icon: <Search className="w-4 h-4" />, content: <BTreeDrilldown /> },
    { id: "scen", label: "Helps vs Hurts", icon: <Globe className="w-4 h-4" />, content: <Scenarios /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "A 50M row table has a B-tree index on user_id. Roughly how many comparisons does the seek take?",
      options: ["1", "About 26 (log₂ 50M)", "50 million", "2,500"],
      correctIndex: 1,
      explanation: "B-tree height grows logarithmically. log₂(50,000,000) ≈ 25.6, so about 26 comparisons. That's the difference between microseconds and minutes.",
    },
    {
      question: "Why does adding 8 indexes to a write-heavy table hurt performance?",
      options: [
        "Indexes make memory hotter.",
        "Every insert/update has to maintain all 8 indexes, so write throughput drops dramatically.",
        "Disk gets full.",
        "Replication breaks.",
      ],
      correctIndex: 1,
      explanation: "Indexes aren't free. Each insert touches every relevant index. Drop indexes that aren't used by your queries — pg_stat_user_indexes shows you which ones haven't been read.",
    },
    {
      question: "WHERE LOWER(email) = 'asha@example.com' on a column with a regular index on email. What happens?",
      options: [
        "Index is used.",
        "Full scan — the function on the column means the planner can't use a regular index. Need a functional index: CREATE INDEX ... ON users(LOWER(email)).",
        "Query errors.",
        "Index on email is invalidated.",
      ],
      correctIndex: 1,
      explanation: "Indexes match the EXACT expression they were created on. LOWER(email) is a different expression from email, so a regular email index can't help. Functional indexes (or rewriting the query to avoid LOWER) fix this.",
    },
    {
      question: "Hash indexes have O(1) lookup. Why aren't they the default in Postgres?",
      options: [
        "They're slow.",
        "They only support equality (no range queries, no ORDER BY, no LIKE), and B-tree's O(log n) is fast enough that hash's slight edge isn't worth losing the flexibility.",
        "They use more memory.",
        "They don't exist.",
      ],
      correctIndex: 1,
      explanation: "B-trees support equality, range, ORDER BY, prefix LIKE, and joins. Hash indexes only support equality. The constant-time win isn't worth giving up everything else for the typical query mix.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Indexes"
      level={3}
      lessonNumber={4}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The first 'why is this query slow' answer in any DB interview"
      onQuizComplete={onQuizComplete}
    />
  );
}
