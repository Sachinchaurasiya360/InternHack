import { useEffect, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, CreditCard, Globe, Key, RotateCcw, Send, ShieldCheck } from "lucide-react";
import EngineeringLessonShell from "@/components/engineering/EngineeringLessonShell";
import type { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";

const SD = "#84cc16";
const NEUTRAL = "#64748b";
const WARN = "#f59e0b";
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
      <h3 style={sectionTitle}>Idempotent: safe to call again. And again. And again.</h3>
      <p style={sectionDesc}>
        An operation is <b>idempotent</b> if calling it multiple times has the same effect as
        calling it once. Network retries, mobile apps with flaky connections, message-queue
        redelivery — all of them will, eventually, deliver the same request twice. Idempotency is
        what protects you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        {[
          {
            kind: "Naturally idempotent",
            color: SD,
            ex: 'PUT /users/42 { "name": "Asha" }',
            note: "Setting the same fields to the same values twice is the same as once.",
          },
          {
            kind: "Idempotent by key",
            color: SD,
            ex: 'POST /charges { "idempotency_key": "ord_123", "amt": 999 }',
            note: "Server stores the key + result. Replay returns the cached response, doesn't re-execute.",
          },
          {
            kind: "Not idempotent",
            color: WARN,
            ex: "POST /transfers { from: A, to: B, amt: 100 }",
            note: "Two calls = two transfers = ₹200 moved instead of ₹100. Bad.",
          },
          {
            kind: "Conditional",
            color: SD,
            ex: "PUT /users/42 If-Match: etag-abc123",
            note: "Server rejects if the version doesn't match. Retries past the first one fail safely.",
          },
        ].map((c, i) => (
          <motion.div
            key={c.kind}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: "14px 16px",
              border: `1px solid ${c.color}55`,
              borderRadius: 10,
              background: `${c.color}08`,
            }}
          >
            <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: c.color, letterSpacing: "0.1em", marginBottom: 8 }}>
              {c.kind.toUpperCase()}
            </div>
            <div style={{ fontFamily: MONO, fontSize: "0.78rem", padding: "6px 10px", background: "var(--eng-surface)", border: "1px solid var(--eng-border)", borderRadius: 6, color: "var(--eng-text)", marginBottom: 8 }}>
              {c.ex}
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{c.note}</div>
          </motion.div>
        ))}
      </div>

      <div
        style={{
          padding: "14px 16px",
          borderRadius: 8,
          border: "1px solid var(--eng-border)",
        }}
      >
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          REAL EXAMPLES
        </div>
        <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
          <b>Stripe</b> requires an <code style={{ fontFamily: MONO }}>Idempotency-Key</code>{" "}
          header on every charge. <b>AWS API Gateway</b> exposes idempotency tokens for
          API calls. <b>Razorpay</b> uses order IDs as natural idempotency keys. <b>Kafka</b>{" "}
          producer-side idempotency uses a producer ID + sequence number per partition. Any
          payment system that didn&rsquo;t bake this in has been bitten in production.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Retry storm with key toggle                                */
/* ================================================================== */

interface ChargeAttempt {
  id: number;
  status: "pending" | "applied" | "deduped";
}

function RetryStorm() {
  const [keyOn, setKeyOn] = useState(false);
  const [attempts, setAttempts] = useState<ChargeAttempt[]>([]);
  const [running, setRunning] = useState(false);
  const [committed, setCommitted] = useState(0);
  const [seenKeys, setSeenKeys] = useState<Set<string>>(new Set());

  const totalAmt = committed * 999;

  const start = () => {
    setAttempts([]);
    setCommitted(0);
    setSeenKeys(new Set());
    setRunning(true);
  };

  // Simulate 5 retries with random network drops
  useEffect(() => {
    if (!running) return;
    const totalRetries = 5;
    let idx = 0;
    const tick = () => {
      if (idx >= totalRetries) {
        setRunning(false);
        return;
      }
      const id = idx;
      const key = "ord_42";
      setAttempts((arr) => [...arr, { id, status: "pending" }]);

      setTimeout(() => {
        setAttempts((arr) =>
          arr.map((a) => {
            if (a.id !== id) return a;
            if (keyOn && seenKeys.has(key)) {
              return { ...a, status: "deduped" };
            }
            return { ...a, status: "applied" };
          }),
        );
        if (keyOn) {
          setSeenKeys((s) => {
            if (!s.has(key)) {
              setCommitted((c) => c + 1);
              const next = new Set(s);
              next.add(key);
              return next;
            }
            return s;
          });
        } else {
          setCommitted((c) => c + 1);
        }
      }, 600);

      idx += 1;
      setTimeout(tick, 900);
    };
    tick();
  }, [running, keyOn, seenKeys]);

  const reset = () => {
    setAttempts([]);
    setCommitted(0);
    setSeenKeys(new Set());
    setRunning(false);
  };

  return (
    <div>
      <h3 style={sectionTitle}>Charge ₹999. Now retry it 5 times.</h3>
      <p style={sectionDesc}>
        A flaky connection retries the same charge 5 times. Toggle the idempotency key off and on
        and watch what the server records. Without the key: 5 charges. With the key: 1 charge,
        4 deduped responses returning the original receipt.
      </p>

      <div className="flex items-center gap-3 mb-5 flex-wrap">
        <button
          type="button"
          onClick={() => setKeyOn((k) => !k)}
          disabled={running}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 14px",
            borderRadius: 6,
            cursor: running ? "not-allowed" : "pointer",
            border: `1.5px solid ${keyOn ? SD : "var(--eng-border)"}`,
            background: keyOn ? `${SD}18` : "transparent",
            color: keyOn ? SD : "var(--eng-text-muted)",
            fontFamily: MONO,
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            transition: "all 0.18s",
          }}
        >
          <Key className="w-3.5 h-3.5" />
          idempotency key {keyOn ? "ON" : "OFF"}
        </button>
        <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>
          header: <span style={{ color: keyOn ? SD : NEUTRAL }}>Idempotency-Key: ord_42</span>
        </span>
      </div>

      <div
        style={{
          background: "#0b1220",
          borderRadius: 12,
          border: "1px solid rgba(148,163,184,0.15)",
          padding: 22,
        }}
      >
        <svg viewBox="0 0 720 220" width="100%" style={{ maxWidth: 760, display: "block", margin: "0 auto" }}>
          {/* client */}
          <NodeRect x={20} y={80} w={120} h={60} label="Mobile App" sub="retrying…" color={running ? SD : NEUTRAL} pulse={running} />
          {/* server */}
          <NodeRect x={580} y={40} w={120} h={60} label="Charge API" sub={keyOn ? "checks key" : "no dedup"} color={SD} />
          {/* ledger */}
          <NodeRect x={580} y={140} w={120} h={60} label="Ledger" sub={`₹ ${totalAmt.toLocaleString()}`} color={committed > 1 && !keyOn ? WARN : SD} />

          {/* edges */}
          <line x1={140} y1={110} x2={580} y2={70} stroke="#475569" strokeWidth={1.5} strokeDasharray="3 4" />
          <line x1={640} y1={100} x2={640} y2={140} stroke="#475569" strokeWidth={1.5} strokeDasharray="3 4" />

          {/* retry packets */}
          <AnimatePresence>
            {attempts.filter((a) => a.status === "pending").map((a) => (
              <motion.circle
                key={`pkt-${a.id}`}
                r={5}
                fill={SD}
                initial={{ cx: 140, cy: 110 }}
                animate={{ cx: 580, cy: 70 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            ))}
          </AnimatePresence>
        </svg>

        {/* Attempt log */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 16 }}>
          <AnimatePresence>
            {attempts.map((a) => {
              const isApplied = a.status === "applied";
              const isDeduped = a.status === "deduped";
              const c = isApplied ? SD : isDeduped ? NEUTRAL : WARN;
              return (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "60px 1fr 110px",
                    alignItems: "center",
                    padding: "8px 12px",
                    background: `${c}10`,
                    border: `1px solid ${c}33`,
                    borderRadius: 6,
                    fontFamily: MONO,
                    fontSize: "0.74rem",
                  }}
                >
                  <span style={{ color: c, fontWeight: 800, letterSpacing: "0.08em" }}>RETRY {a.id + 1}</span>
                  <span style={{ color: "#e5e7eb" }}>POST /charges &nbsp;·&nbsp; ₹999</span>
                  <span style={{ color: c, fontWeight: 700, textAlign: "right" }}>
                    {a.status === "pending" ? "in flight…" : isApplied ? "✓ charged" : "↩ deduped"}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-2 mt-5 flex-wrap">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={start}
            disabled={running}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 14px",
              borderRadius: 6,
              cursor: running ? "not-allowed" : "pointer",
              border: `1.5px solid ${running ? "rgba(148,163,184,0.25)" : SD}`,
              background: running ? "transparent" : `${SD}18`,
              color: running ? NEUTRAL : SD,
              fontFamily: MONO,
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <Send className="w-3.5 h-3.5" />
            send 5 retries
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={reset}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 14px",
              borderRadius: 6,
              cursor: "pointer",
              border: "1.5px solid rgba(148,163,184,0.25)",
              background: "transparent",
              color: "#e5e7eb",
              fontFamily: MONO,
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            reset
          </motion.button>
          <div style={{ flex: 1 }} />
          <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>
            ledger: <span style={{ color: keyOn ? SD : committed > 1 ? WARN : SD, fontWeight: 700 }}>₹ {totalAmt.toLocaleString()}</span>
          </span>
        </div>

        <AnimatePresence mode="wait">
          {!running && committed > 0 && (
            <motion.div
              key={`${keyOn}-${committed}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              style={{
                marginTop: 14,
                padding: "12px 14px",
                background: keyOn ? `${SD}14` : `${WARN}14`,
                border: `1.5px solid ${(keyOn ? SD : WARN)}55`,
                borderRadius: 8,
                fontSize: "0.86rem",
                color: "#e5e7eb",
                lineHeight: 1.55,
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
              }}
            >
              <ShieldCheck className="w-5 h-5" style={{ color: keyOn ? SD : WARN, flexShrink: 0, marginTop: 2 }} />
              <div>
                <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: keyOn ? SD : WARN, letterSpacing: "0.12em" }}>
                  {keyOn ? "EXACTLY-ONCE" : "AT-LEAST-ONCE"}
                </span>
                <div style={{ marginTop: 4 }}>
                  {keyOn
                    ? `One charge of ₹999 in the ledger. The other 4 retries returned the original receipt without re-charging. The user is happy.`
                    : `Five charges of ₹999 = ₹${totalAmt.toLocaleString()} in the ledger. The user calls support, you eat the cost, postmortem time.`}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function NodeRect({ x, y, w, h, label, sub, color, pulse }: { x: number; y: number; w: number; h: number; label: string; sub: string; color: string; pulse?: boolean }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {pulse && (
        <motion.rect
          width={w}
          height={h}
          rx={8}
          fill={color}
          initial={{ opacity: 0.25, scale: 1 }}
          animate={{ opacity: 0, scale: 1.15 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <rect width={w} height={h} rx={8} fill={`${color}22`} stroke={color} strokeWidth={1.5} />
      <text x={w / 2} y={26} textAnchor="middle" fill="#e5e7eb" fontSize={12} fontWeight={700} fontFamily={MONO}>
        {label}
      </text>
      <text x={w / 2} y={44} textAnchor="middle" fill={color} fontSize={10} fontFamily={MONO}>
        {sub}
      </text>
    </g>
  );
}

/* ================================================================== */
/*  TAB 3 - Real-world idempotency design                              */
/* ================================================================== */

function HowToDesign() {
  return (
    <div>
      <h3 style={sectionTitle}>How a real idempotency key endpoint is built</h3>
      <p style={sectionDesc}>
        The pattern is small. The discipline is what matters: every write endpoint exposed
        to retry-prone clients should follow this shape.
      </p>

      <div
        style={{
          background: "#0b1220",
          borderRadius: 12,
          border: "1px solid rgba(148,163,184,0.15)",
          padding: 22,
        }}
      >
        <pre
          style={{
            margin: 0,
            fontFamily: MONO,
            fontSize: "0.82rem",
            color: "#e5e7eb",
            lineHeight: 1.75,
            overflowX: "auto",
          }}
        >
          <span style={{ color: NEUTRAL }}>{`// POST /charges`}</span>
          {"\n"}
          <span style={{ color: NEUTRAL }}>{`// header: Idempotency-Key: <client-generated-uuid>`}</span>
          {"\n\n"}
          async function charge(req) {"{"}
          {"\n  "}<span style={{ color: SD }}>const</span> key = req.header(<span style={{ color: WARN }}>"Idempotency-Key"</span>);
          {"\n  "}<span style={{ color: SD }}>if</span> (!key) <span style={{ color: SD }}>throw</span> <span style={{ color: WARN }}>"missing key"</span>;
          {"\n\n  "}
          <span style={{ color: NEUTRAL }}>{`// 1. has the server seen this key before?`}</span>
          {"\n  "}<span style={{ color: SD }}>const</span> cached = <span style={{ color: SD }}>await</span> store.get(key);
          {"\n  "}<span style={{ color: SD }}>if</span> (cached) <span style={{ color: SD }}>return</span> cached.response;
          {"\n\n  "}
          <span style={{ color: NEUTRAL }}>{`// 2. acquire a per-key lock so two retries don't race`}</span>
          {"\n  "}<span style={{ color: SD }}>const</span> lock = <span style={{ color: SD }}>await</span> store.acquireLock(key);
          {"\n\n  "}
          <span style={{ color: NEUTRAL }}>{`// 3. perform the side-effect inside a transaction`}</span>
          {"\n  "}<span style={{ color: SD }}>const</span> result = <span style={{ color: SD }}>await</span> db.tx(<span style={{ color: SD }}>async</span> (t) =&gt; {"{"}
          {"\n    "}<span style={{ color: SD }}>await</span> ledger.insert(t, {"{"} key, amt: req.amt {"}"});
          {"\n    "}<span style={{ color: SD }}>return</span> {"{"} id: key, status: <span style={{ color: WARN }}>"charged"</span> {"}"};
          {"\n  "}{"}"});
          {"\n\n  "}
          <span style={{ color: NEUTRAL }}>{`// 4. cache the response, release the lock`}</span>
          {"\n  "}<span style={{ color: SD }}>await</span> store.set(key, result, ttl: <span style={{ color: WARN }}>"24h"</span>);
          {"\n  "}<span style={{ color: SD }}>await</span> lock.release();
          {"\n\n  "}<span style={{ color: SD }}>return</span> result;
          {"\n"}{"}"}
        </pre>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5"
      >
        {[
          { k: "Where keys live", v: "Redis with a TTL (24h is typical) or a dedicated Postgres table with a unique index on the key." },
          { k: "Who picks the key", v: "The client. UUID v4 is fine. Server-generated keys defeat the point of retry-safety." },
          { k: "What gets cached", v: "The full response, including status code and body. A retry returns byte-for-byte the same answer." },
        ].map((c) => (
          <motion.div
            key={c.k}
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
            }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10 }}
          >
            <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.1em", marginBottom: 6 }}>
              {c.k.toUpperCase()}
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{c.v}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L4_IdempotencyActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definition", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "retry", label: "Retry Storm", icon: <CreditCard className="w-4 h-4" />, content: <RetryStorm /> },
    { id: "build", label: "How to Build It", icon: <Globe className="w-4 h-4" />, content: <HowToDesign /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Which HTTP method is naturally idempotent without any extra work?",
      options: ["POST", "PUT", "PATCH (always)", "Any of these"],
      correctIndex: 1,
      explanation: "PUT replaces a resource with the given representation — calling it twice with the same body has the same effect as calling it once. POST creates a new resource each call by default and needs an idempotency key to be retry-safe.",
    },
    {
      question: "A user double-clicks 'Pay'. The mobile app sends the request twice. What's the cleanest server-side defense?",
      options: [
        "Disable double-click in the UI.",
        "Require the client to attach an Idempotency-Key per logical operation; server caches first result and returns it for any retry with the same key.",
        "Add a 5-second cooldown to the button.",
        "Reject all duplicate requests.",
      ],
      correctIndex: 1,
      explanation: "UI fixes are not enough — flaky networks, app crashes, and proxies all retry. The server must be the source of truth for 'have I seen this key before' so duplicates are returned the original answer instead of re-executing.",
    },
    {
      question: "How long should an idempotency key be cached on the server?",
      options: [
        "Forever.",
        "Long enough to cover client retry windows (24h is a common Stripe/AWS convention) but not so long the cache becomes unbounded.",
        "1 second.",
        "Until manual cleanup.",
      ],
      correctIndex: 1,
      explanation: "24 hours is the de-facto standard. Long enough that all reasonable retries hit the cache; short enough that the key store doesn't grow forever. Stripe documents this explicitly.",
    },
    {
      question: "Why does Kafka's exactly-once guarantee require BOTH idempotent producers AND transactional writes?",
      options: [
        "It doesn't.",
        "Idempotent producer dedupes retries to the same partition. Transactions ensure writes across partitions are all-or-nothing on the consumer side.",
        "Transactions are optional.",
        "Idempotency works only in dev.",
      ],
      correctIndex: 1,
      explanation: "Idempotent producer (PID + sequence number per partition) handles retries from the producer side. Transactions wrap multi-partition writes so the consumer sees them atomically. Together they give the practical 'exactly-once' guarantee Kafka markets.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Idempotency & Exactly-Once"
      level={4}
      lessonNumber={6}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Required reading for any payments, ordering, or message-bus design"
      onQuizComplete={onQuizComplete}
    />
  );
}
