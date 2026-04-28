import { useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Clock, GitMerge, RotateCcw, User } from "lucide-react";
import EngineeringLessonShell from "@/components/engineering/EngineeringLessonShell";
import type { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";

const SD = "#84cc16";
const NEUTRAL = "#64748b";
const WARN = "#f59e0b";
const PURPLE = "#8b5cf6";
const MONO = '"JetBrains Mono", Menlo, Consolas, monospace';

const sectionTitle: CSSProperties = {
  fontFamily: "var(--eng-font)",
  fontWeight: 700,
  fontSize: "1.15rem",
  color: "var(--eng-text)",
  margin: "0 0 12px",
};
const sectionDesc: CSSProperties = {
  fontFamily: "var(--eng-font)",
  fontSize: "0.92rem",
  color: "var(--eng-text-muted)",
  margin: "0 0 20px",
  lineHeight: 1.65,
};

/* ================================================================== */
/*  TAB 1 - Definition                                                 */
/* ================================================================== */

function Definition() {
  return (
    <div>
      <h3 style={sectionTitle}>Wall-clock time lies. Vector clocks don&rsquo;t.</h3>
      <p style={sectionDesc}>
        In a distributed system, you can&rsquo;t trust each server&rsquo;s clock — they drift, leap, and
        hop time zones. <b>Vector clocks</b> instead track per-node logical counters. Two clocks
        let you decide if event A <i>happened-before</i> B, B happened-before A, or whether they
        are concurrent.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {[
          {
            k: "happens-before (A → B)",
            v: "Every entry of A is ≤ B and at least one is strictly less. A definitely came first.",
            color: SD,
          },
          {
            k: "happens-after (B → A)",
            v: "Mirror image. B definitely came first.",
            color: SD,
          },
          {
            k: "concurrent (A ∥ B)",
            v: "Neither dominates. The two events were independent. This is the conflict signal.",
            color: WARN,
          },
        ].map((c, i) => (
          <motion.div
            key={c.k}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10 }}
          >
            <div style={{ fontFamily: MONO, fontSize: "0.7rem", fontWeight: 800, color: c.color, letterSpacing: "0.08em", marginBottom: 6 }}>
              {c.k}
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{c.v}</div>
          </motion.div>
        ))}
      </div>

      <div style={{ padding: "16px 18px", borderRadius: 10, border: `1.5px solid ${SD}55`, background: `${SD}10`, marginBottom: 16 }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 10 }}>
          THE RULES
        </div>
        <div style={{ fontFamily: MONO, fontSize: "0.85rem", color: "var(--eng-text)", lineHeight: 1.8 }}>
          <span style={{ color: NEUTRAL }}>// each node keeps a vector V indexed by node id</span>
          <br />
          <span style={{ color: SD, fontWeight: 700 }}>1.</span>{" "}
          On a local event, increment your own slot: <code>V[me] += 1</code>
          <br />
          <span style={{ color: SD, fontWeight: 700 }}>2.</span>{" "}
          On send, attach <code>V</code> to the message
          <br />
          <span style={{ color: SD, fontWeight: 700 }}>3.</span>{" "}
          On receive, merge: <code>V[i] = max(V[i], msg.V[i])</code> for every i, then bump your own slot
        </div>
      </div>

      <div style={{ padding: "14px 16px", borderRadius: 8, border: "1px solid var(--eng-border)" }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          REAL EXAMPLES
        </div>
        <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
          <b>Riak</b> ships vector clocks in its API, exposing siblings (concurrent versions) to
          the application for resolution. <b>Cassandra</b> uses simpler last-write-wins by
          timestamp. <b>DynamoDB</b> historically used vector clocks; modern multi-region writes
          use them under the hood. Conflict detection in <b>Google Docs</b>, <b>Figma</b>, and
          <b> CRDTs</b> is built on the same idea.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Concurrent edit timeline                                   */
/* ================================================================== */

interface Event {
  who: "A" | "B";
  v: { A: number; B: number };
  cmd: string;
  syncedFrom?: { A: number; B: number };
}

type Scenario = "concurrent" | "sequential";

function ConcurrentEdit() {
  const [scenario, setScenario] = useState<Scenario>("concurrent");
  const [step, setStep] = useState(0);

  const events: Event[] = scenario === "concurrent"
    ? [
        { who: "A", v: { A: 1, B: 0 }, cmd: 'set color = "red"' },
        { who: "B", v: { A: 0, B: 1 }, cmd: 'set color = "blue"' },
        { who: "A", v: { A: 2, B: 1 }, cmd: "sync · sees concurrent write", syncedFrom: { A: 0, B: 1 } },
      ]
    : [
        { who: "A", v: { A: 1, B: 0 }, cmd: 'set color = "red"' },
        { who: "B", v: { A: 1, B: 1 }, cmd: 'set color = "blue" (after sync from A)' },
        { who: "A", v: { A: 2, B: 1 }, cmd: 'sync · sees B happened-after' },
      ];

  const current = events[step] ?? null;
  const last = step === events.length - 1 ? current : null;

  const isConcurrent = scenario === "concurrent" && step >= events.length - 1;

  const reset = () => setStep(0);

  return (
    <div>
      <h3 style={sectionTitle}>Two clients editing the same key</h3>
      <p style={sectionDesc}>
        Client A and client B both write a setting on different replicas. The vector clocks tick
        as each event happens. Step through and watch the clocks evolve. The third event is the
        sync — the system must decide if there&rsquo;s a conflict.
      </p>

      <div className="flex items-center gap-2 mb-5 flex-wrap">
        {(["concurrent", "sequential"] as Scenario[]).map((s) => {
          const active = scenario === s;
          return (
            <button
              key={s}
              type="button"
              onClick={() => { setScenario(s); setStep(0); }}
              style={{
                padding: "8px 14px",
                borderRadius: 6,
                cursor: "pointer",
                border: `1.5px solid ${active ? SD : "var(--eng-border)"}`,
                background: active ? `${SD}18` : "transparent",
                color: active ? SD : "var(--eng-text-muted)",
                fontFamily: MONO,
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "all 0.18s",
              }}
            >
              {s === "concurrent" ? "Concurrent edits" : "Sequential edits"}
            </button>
          );
        })}
      </div>

      <div
        style={{
          background: "#0b1220",
          borderRadius: 12,
          border: "1px solid rgba(148,163,184,0.15)",
          padding: 22,
        }}
      >
        {/* Two timelines */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {(["A", "B"] as const).map((who) => {
            const color = who === "A" ? SD : PURPLE;
            const myEvents = events.slice(0, step + 1).filter((e) => e.who === who);
            return (
              <div key={who}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 999, background: `${color}22`, border: `1.5px solid ${color}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <User className="w-4 h-4" style={{ color }} />
                  </div>
                  <span style={{ fontFamily: MONO, fontSize: "0.78rem", fontWeight: 700, color: "#e5e7eb" }}>
                    Client {who}
                  </span>
                </div>
                <div style={{ position: "relative", paddingLeft: 16 }}>
                  <div style={{ position: "absolute", top: 0, bottom: 0, left: 4, width: 2, background: `${color}33` }} />
                  <AnimatePresence>
                    {myEvents.map((e, i) => (
                      <motion.div
                        key={i}
                        layout
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        style={{ position: "relative", marginBottom: 12 }}
                      >
                        <div style={{ position: "absolute", left: -16, top: 8, width: 10, height: 10, borderRadius: 999, background: color, border: "2px solid #0b1220" }} />
                        <div style={{ padding: "8px 12px", borderRadius: 6, background: "rgba(15,23,42,0.6)", border: `1px solid ${color}33` }}>
                          <div style={{ fontFamily: MONO, fontSize: "0.74rem", color: "#e5e7eb", marginBottom: 4 }}>{e.cmd}</div>
                          <VectorClockBadge v={e.v} />
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          {events.map((_, i) => {
            const active = i === step;
            const done = i < step;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setStep(i)}
                style={{
                  padding: "5px 10px",
                  borderRadius: 4,
                  cursor: "pointer",
                  border: `1px solid ${active ? SD : done ? `${SD}55` : "rgba(148,163,184,0.3)"}`,
                  background: active ? `${SD}22` : done ? `${SD}10` : "transparent",
                  color: active ? SD : done ? SD : "#94a3b8",
                  fontFamily: MONO,
                  fontSize: "0.66rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                step {String(i + 1).padStart(2, "0")}
              </button>
            );
          })}
          <div style={{ flex: 1 }} />
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setStep((s) => Math.min(events.length - 1, s + 1))}
            disabled={step >= events.length - 1}
            style={{
              padding: "6px 12px",
              borderRadius: 6,
              cursor: step >= events.length - 1 ? "not-allowed" : "pointer",
              border: `1.5px solid ${step >= events.length - 1 ? "rgba(148,163,184,0.25)" : SD}`,
              background: step >= events.length - 1 ? "transparent" : `${SD}18`,
              color: step >= events.length - 1 ? NEUTRAL : SD,
              fontFamily: MONO,
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            next →
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={reset}
            style={{
              padding: "6px 10px",
              borderRadius: 6,
              cursor: "pointer",
              border: "1.5px solid rgba(148,163,184,0.25)",
              background: "transparent",
              color: "#e5e7eb",
              fontFamily: MONO,
              fontSize: "0.7rem",
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <RotateCcw className="w-3 h-3" />
            reset
          </motion.button>
        </div>

        {/* Verdict */}
        <AnimatePresence mode="wait">
          {last && (
            <motion.div
              key={`${scenario}-${step}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              style={{
                padding: "12px 14px",
                background: isConcurrent ? `${WARN}14` : `${SD}14`,
                borderRadius: 8,
                border: `1.5px solid ${isConcurrent ? WARN : SD}55`,
                fontSize: "0.86rem",
                color: "#e5e7eb",
                lineHeight: 1.55,
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
              }}
            >
              <GitMerge className="w-5 h-5" style={{ color: isConcurrent ? WARN : SD, flexShrink: 0, marginTop: 2 }} />
              <div>
                <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: isConcurrent ? WARN : SD, letterSpacing: "0.12em" }}>
                  {isConcurrent ? "CONFLICT · CONCURRENT" : "CLEAN · HAPPENS-BEFORE"}
                </span>
                <div style={{ marginTop: 4 }}>
                  {isConcurrent
                    ? "Compare A's clock {A:1, B:0} with B's {A:0, B:1}. Neither dominates — both have a slot the other doesn't. The system must surface both versions for resolution."
                    : "B's clock {A:1, B:1} dominates A's earlier {A:1, B:0}. B saw A's write before making its own. Standard sequential resolution: take B's value."}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function VectorClockBadge({ v }: { v: { A: number; B: number } }) {
  return (
    <div style={{ display: "inline-flex", gap: 4, fontFamily: MONO, fontSize: "0.7rem", padding: "3px 8px", borderRadius: 4, background: "rgba(148,163,184,0.12)", border: "1px solid rgba(148,163,184,0.25)" }}>
      <span style={{ color: SD }}>A:{v.A}</span>
      <span style={{ color: NEUTRAL }}>·</span>
      <span style={{ color: PURPLE }}>B:{v.B}</span>
    </div>
  );
}

/* ================================================================== */
/*  TAB 3 - Resolution strategies                                      */
/* ================================================================== */

const STRATEGIES = [
  {
    name: "Last Write Wins (LWW)",
    how: "Pick the write with the larger timestamp. Drop the other.",
    pro: "Simple. Zero developer effort. Idempotent.",
    con: "Silently loses data. Clock skew makes 'last' unreliable.",
    ex: "Cassandra default. Good for cache invalidation, last-seen-online.",
  },
  {
    name: "Application merge",
    how: "Surface both versions to the app. Let it merge field-by-field.",
    pro: "Preserves all changes. Captures business rules.",
    con: "Forces every read path to handle siblings.",
    ex: "Riak siblings. Shopping cart merging items from two devices.",
  },
  {
    name: "CRDTs",
    how: "Use data structures (G-Counter, OR-Set, RGA) where merges are mathematically commutative.",
    pro: "Provably converges. No app-level merge code needed.",
    con: "Limited to types you can model as CRDTs.",
    ex: "Redis CRDT, Yjs/Automerge for collaborative editing.",
  },
  {
    name: "Strong consistency (avoid)",
    how: "Use Raft/Paxos so writes serialize through one leader. Conflicts can't happen.",
    pro: "Conceptually simplest.",
    con: "Loses availability under partition. Higher latency.",
    ex: "Spanner, etcd, MongoDB primary writes.",
  },
];

function Strategies() {
  return (
    <div>
      <h3 style={sectionTitle}>What to do when the clocks say &ldquo;concurrent&rdquo;</h3>
      <p style={sectionDesc}>
        Once you&rsquo;ve detected a conflict, you have to pick how to resolve it. Each strategy is
        a real trade.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {STRATEGIES.map((s) => (
          <motion.div
            key={s.name}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
            }}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{
              padding: "16px 18px",
              border: "1px solid var(--eng-border)",
              borderRadius: 10,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.95rem" }}>{s.name}</div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{s.how}</div>
            <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
              <div style={{ flex: 1, padding: "8px 10px", borderRadius: 6, background: `${SD}10`, border: `1px solid ${SD}33` }}>
                <div style={{ fontFamily: MONO, fontSize: "0.62rem", fontWeight: 800, color: SD, letterSpacing: "0.1em", marginBottom: 4 }}>
                  PRO
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--eng-text)", lineHeight: 1.5 }}>{s.pro}</div>
              </div>
              <div style={{ flex: 1, padding: "8px 10px", borderRadius: 6, background: `${WARN}10`, border: `1px solid ${WARN}33` }}>
                <div style={{ fontFamily: MONO, fontSize: "0.62rem", fontWeight: 800, color: WARN, letterSpacing: "0.1em", marginBottom: 4 }}>
                  CON
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--eng-text)", lineHeight: 1.5 }}>{s.con}</div>
              </div>
            </div>
            <div style={{ paddingTop: 8, borderTop: "1px dashed var(--eng-border)", fontFamily: MONO, fontSize: "0.74rem", color: SD }}>
              <span style={{ fontWeight: 800, letterSpacing: "0.08em", marginRight: 4 }}>EX ·</span>
              <span style={{ color: "var(--eng-text)" }}>{s.ex}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L4_VectorClocksActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definition", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "concurrent", label: "Concurrent Edit", icon: <Clock className="w-4 h-4" />, content: <ConcurrentEdit /> },
    { id: "resolve", label: "Resolution", icon: <GitMerge className="w-4 h-4" />, content: <Strategies /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Two writes have vector clocks A={x:2, y:1} and B={x:1, y:2}. What's the relationship?",
      options: ["A happens-before B", "B happens-before A", "Concurrent (conflict)", "Identical"],
      correctIndex: 2,
      explanation: "A has a higher x but lower y; B has higher y but lower x. Neither dominates — they're concurrent. The system must surface both versions or pick a resolution policy.",
    },
    {
      question: "Why are vector clocks preferred over wall-clock timestamps for conflict detection?",
      options: [
        "They're smaller.",
        "They don't depend on synchronized physical clocks, which drift and can run backwards.",
        "They support more nodes.",
        "They're an SQL standard.",
      ],
      correctIndex: 1,
      explanation: "Wall clocks across servers can disagree by milliseconds or jump backward (NTP sync, leap seconds). Vector clocks are purely logical and only advance on observed events.",
    },
    {
      question: "Which resolution strategy silently loses data when used naively?",
      options: ["CRDTs", "Last-Write-Wins", "Application merge", "Strong consistency"],
      correctIndex: 1,
      explanation: "LWW just picks the 'larger' timestamp and discards the other write. If both writes meant something different (Alice added a coupon, Bob added a different coupon), one is lost. This is why shopping carts use sibling merge instead.",
    },
    {
      question: "Real-time collaborative tools like Figma and Google Docs avoid surfacing conflicts to the user. How?",
      options: [
        "They use a single global database.",
        "They use CRDTs (or operation-transform algorithms) so concurrent edits merge automatically.",
        "They lock the document.",
        "They reject the second writer.",
      ],
      correctIndex: 1,
      explanation: "CRDTs and OT both let independent edits compose deterministically without coordination. The user never sees a conflict prompt; the data structure does the merge for them.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Vector Clocks & Conflicts"
      level={4}
      lessonNumber={4}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The conflict-detection primitive behind Riak, Dynamo, and CRDTs"
      onQuizComplete={onQuizComplete}
    />
  );
}
