import { useMemo, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  CircleDot,
  Flame,
  Hash,
  Plus,
  RotateCcw,
} from "lucide-react";
import EngineeringLessonShell from "@/components/engineering/EngineeringLessonShell";
import type { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";

const SD = "#84cc16";
const NEUTRAL = "#64748b";
const MUTED = "#475569";
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
/*  TAB 1 - Hash ring with consistent hashing                          */
/* ================================================================== */

// 24 logical keys spread evenly around the ring
const KEYS = Array.from({ length: 24 }, (_, i) => ({
  id: `k${i + 1}`,
  // angle in degrees, evenly spaced with a small jitter so it looks organic
  angle: (i * 360) / 24 + ((i * 7) % 11) - 5,
}));

const SHARD_PALETTE = [SD, "#f59e0b", "#10b981", "#06b6d4", "#8b5cf6", "#ec4899"];

interface Shard {
  id: string;
  /** angle in degrees on the hash ring (0-360) */
  angle: number;
}

const INITIAL_SHARDS: Shard[] = [
  { id: "shard-A", angle: 30 },
  { id: "shard-B", angle: 150 },
  { id: "shard-C", angle: 270 },
];

function HashRing() {
  const [shards, setShards] = useState<Shard[]>(INITIAL_SHARDS);
  const [highlightShardId, setHighlightShardId] = useState<string | null>(null);

  const addShard = () => {
    if (shards.length >= 6) return;
    const taken = new Set(shards.map((s) => s.id));
    const newId = ["shard-A", "shard-B", "shard-C", "shard-D", "shard-E", "shard-F"].find((x) => !taken.has(x))!;
    // Drop the new shard at the largest gap so the rebalance is visually meaningful
    const sorted = [...shards].sort((a, b) => a.angle - b.angle);
    let bestGap = 0;
    let bestAngle = 0;
    for (let i = 0; i < sorted.length; i++) {
      const a = sorted[i].angle;
      const b = i === sorted.length - 1 ? sorted[0].angle + 360 : sorted[i + 1].angle;
      const gap = b - a;
      if (gap > bestGap) {
        bestGap = gap;
        bestAngle = (a + gap / 2) % 360;
      }
    }
    setShards([...shards, { id: newId, angle: bestAngle }]);
  };

  const reset = () => {
    setShards(INITIAL_SHARDS);
    setHighlightShardId(null);
  };

  // Map each key to the next shard clockwise (consistent hashing)
  const keyAssignments = useMemo(() => {
    const sorted = [...shards].sort((a, b) => a.angle - b.angle);
    return KEYS.map((k) => {
      const next =
        sorted.find((s) => s.angle >= k.angle) ?? sorted[0];
      return { keyId: k.id, shardId: next.id };
    });
  }, [shards]);

  const counts = useMemo(() => {
    const out: Record<string, number> = {};
    for (const a of keyAssignments) {
      out[a.shardId] = (out[a.shardId] ?? 0) + 1;
    }
    return out;
  }, [keyAssignments]);

  const colorFor = (id: string) => {
    const idx = ["shard-A", "shard-B", "shard-C", "shard-D", "shard-E", "shard-F"].indexOf(id);
    return SHARD_PALETTE[idx % SHARD_PALETTE.length];
  };

  return (
    <div>
      <h3 style={sectionTitle}>Consistent hashing on a ring</h3>
      <p style={sectionDesc}>
        Hash every key to a point on a circle. Hash every shard to a point too. A key belongs to the
        next shard clockwise. Add a shard, watch only the keys in <i>that arc</i> move. That&rsquo;s
        why this scheme is called &ldquo;consistent.&rdquo;
      </p>

      <div
        style={{
          background: "#0b1220",
          borderRadius: 12,
          border: "1px solid rgba(148,163,184,0.15)",
          padding: 22,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-6">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Ring
              shards={shards}
              keyAssignments={keyAssignments}
              colorFor={colorFor}
              highlightShardId={highlightShardId}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: "#94a3b8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
              shards
            </div>
            <AnimatePresence initial={false}>
              {shards.map((s) => {
                const c = colorFor(s.id);
                return (
                  <motion.button
                    type="button"
                    key={s.id}
                    layout
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={() => setHighlightShardId(s.id)}
                    onMouseLeave={() => setHighlightShardId(null)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 10px",
                      borderRadius: 6,
                      border: `1px solid ${c}55`,
                      background: highlightShardId === s.id ? `${c}22` : "transparent",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "background 0.18s",
                    }}
                  >
                    <CircleDot className="w-3.5 h-3.5" style={{ color: c }} />
                    <span style={{ fontFamily: MONO, fontSize: "0.78rem", fontWeight: 700, color: "#e5e7eb", flex: 1 }}>
                      {s.id}
                    </span>
                    <span style={{ fontFamily: MONO, fontSize: "0.72rem", color: c, fontWeight: 700 }}>
                      {counts[s.id] ?? 0} keys
                    </span>
                  </motion.button>
                );
              })}
            </AnimatePresence>

            <div className="flex items-center gap-2 mt-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={addShard}
                disabled={shards.length >= 6}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 12px",
                  borderRadius: 6,
                  cursor: shards.length >= 6 ? "not-allowed" : "pointer",
                  border: `1.5px solid ${shards.length >= 6 ? "rgba(148,163,184,0.25)" : SD}`,
                  background: shards.length >= 6 ? "transparent" : `${SD}18`,
                  color: shards.length >= 6 ? NEUTRAL : SD,
                  fontFamily: MONO,
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                <Plus className="w-3.5 h-3.5" />
                add shard
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={reset}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 12px",
                  borderRadius: 6,
                  cursor: "pointer",
                  border: "1.5px solid rgba(148,163,184,0.25)",
                  background: "transparent",
                  color: "#e5e7eb",
                  fontFamily: MONO,
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                reset
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        style={{
          marginTop: 16,
          padding: "14px 16px",
          borderRadius: 8,
          border: "1px solid var(--eng-border)",
        }}
      >
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          WHY THIS MATTERS
        </div>
        <div style={{ fontSize: "0.88rem", color: "var(--eng-text)", lineHeight: 1.55 }}>
          Naive sharding hashes a key with <code style={{ fontFamily: MONO }}>key % n</code>. Adding
          one shard changes <code style={{ fontFamily: MONO }}>n</code>, which moves <i>almost
          every</i> key. Consistent hashing only moves the keys in the new shard&rsquo;s arc, so
          rebalancing is cheap and online.
        </div>
      </motion.div>
    </div>
  );
}

function Ring({
  shards,
  keyAssignments,
  colorFor,
  highlightShardId,
}: {
  shards: Shard[];
  keyAssignments: { keyId: string; shardId: string }[];
  colorFor: (id: string) => string;
  highlightShardId: string | null;
}) {
  const cx = 200;
  const cy = 200;
  const r = 140;
  const polar = (angle: number, radius: number) => {
    const rad = ((angle - 90) * Math.PI) / 180;
    return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
  };

  // Sort shards clockwise so we can draw arcs
  const sorted = [...shards].sort((a, b) => a.angle - b.angle);
  const arcs = sorted.map((s, i) => {
    const next = sorted[(i + 1) % sorted.length];
    const start = s.angle;
    const end = next.angle <= s.angle ? next.angle + 360 : next.angle;
    return { id: s.id, start, end };
  });

  return (
    <svg viewBox="0 0 400 400" width="100%" style={{ maxWidth: 380 }}>
      {/* arc segments per shard, colored faintly */}
      {arcs.map((a) => {
        const c = colorFor(a.id);
        const opacity = highlightShardId === null || highlightShardId === a.id ? 0.18 : 0.04;
        return (
          <motion.path
            key={a.id}
            d={describeArc(cx, cy, r, a.start, a.end)}
            stroke={c}
            strokeWidth={28}
            fill="none"
            initial={false}
            animate={{ opacity }}
            transition={{ duration: 0.3 }}
          />
        );
      })}

      {/* base ring */}
      <circle cx={cx} cy={cy} r={r} stroke={MUTED} strokeWidth={1.5} fill="none" strokeDasharray="3 4" />

      {/* keys */}
      {KEYS.map((k) => {
        const assignment = keyAssignments.find((a) => a.keyId === k.id);
        const c = assignment ? colorFor(assignment.shardId) : NEUTRAL;
        const dim = highlightShardId !== null && assignment?.shardId !== highlightShardId;
        const p = polar(k.angle, r);
        return (
          <motion.circle
            key={k.id}
            r={5}
            fill={c}
            stroke="#0b1220"
            strokeWidth={1.5}
            initial={false}
            animate={{ cx: p.x, cy: p.y, opacity: dim ? 0.25 : 1 }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
          />
        );
      })}

      {/* shards */}
      <AnimatePresence>
        {shards.map((s) => {
          const p = polar(s.angle, r);
          const c = colorFor(s.id);
          return (
            <motion.g
              key={s.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
            >
              <circle cx={p.x} cy={p.y} r={11} fill={c} stroke="#0b1220" strokeWidth={2} />
              <text
                x={p.x}
                y={p.y - 18}
                textAnchor="middle"
                fill={c}
                fontSize={11}
                fontWeight={700}
                fontFamily={MONO}
              >
                {s.id.replace("shard-", "")}
              </text>
            </motion.g>
          );
        })}
      </AnimatePresence>
    </svg>
  );
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number): string {
  const polar = (angle: number) => {
    const rad = ((angle - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };
  const start = polar(startAngle);
  const end = polar(endAngle);
  const sweep = endAngle - startAngle;
  const largeArc = sweep > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

/* ================================================================== */
/*  TAB 2 - Routing a key                                              */
/* ================================================================== */

const SAMPLE_KEYS = ["user:42", "user:99", "user:1024", "user:7", "user:512"];

function RoutingDemo() {
  const [picked, setPicked] = useState(0);

  const key = SAMPLE_KEYS[picked];
  const hash = useMemo(() => stableHash(key), [key]);
  const shardIdx = hash % 4;

  return (
    <div>
      <h3 style={sectionTitle}>How a key reaches its shard</h3>
      <p style={sectionDesc}>
        The router is a small, dumb function. <code style={{ fontFamily: MONO }}>shard = hash(key) mod N</code>.
        It runs on every read and write. Pick a key and watch the path light up.
      </p>

      <div className="flex items-center gap-2 mb-5 flex-wrap">
        {SAMPLE_KEYS.map((k, i) => {
          const active = i === picked;
          return (
            <button
              key={k}
              type="button"
              onClick={() => setPicked(i)}
              style={{
                fontFamily: MONO,
                fontSize: "0.7rem",
                fontWeight: 700,
                padding: "6px 12px",
                borderRadius: 6,
                cursor: "pointer",
                border: `1.5px solid ${active ? SD : "var(--eng-border)"}`,
                background: active ? `${SD}18` : "transparent",
                color: active ? SD : "var(--eng-text-muted)",
                transition: "all 0.18s",
              }}
            >
              {k}
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
        <svg viewBox="0 0 720 220" width="100%" style={{ maxWidth: 760, display: "block", margin: "0 auto" }}>
          {/* base path */}
          <line x1={50} y1={110} x2={250} y2={110} stroke={MUTED} strokeWidth={1.5} />
          <line x1={350} y1={110} x2={500} y2={110} stroke={MUTED} strokeWidth={1.5} />
          {[0, 1, 2, 3].map((i) => (
            <line
              key={i}
              x1={550}
              y1={110}
              x2={650}
              y2={30 + i * 50}
              stroke={i === shardIdx ? SD : MUTED}
              strokeWidth={i === shardIdx ? 2 : 1}
              strokeDasharray={i === shardIdx ? "0" : "4 4"}
            />
          ))}

          {/* animated packet */}
          <motion.circle
            key={`pkt-${picked}`}
            r={6}
            fill={SD}
            initial={{ cx: 50, cy: 110 }}
            animate={{ cx: [50, 250, 250, 500, 500, 650], cy: [110, 110, 110, 110, 110, 30 + shardIdx * 50] }}
            transition={{ duration: 1.6, ease: "easeInOut", times: [0, 0.25, 0.45, 0.7, 0.78, 1] }}
          />

          {/* nodes */}
          <RouteNode x={20} y={85} w={60} label="key" sub={key} color={SD} />
          <RouteNode x={250} y={85} w={100} label="hash()" sub={hash.toString(16).slice(0, 8)} color="#fbbf24" />
          <RouteNode x={500} y={85} w={50} label="mod 4" sub={String(shardIdx)} color="#10b981" />

          {[0, 1, 2, 3].map((i) => (
            <RouteNode
              key={i}
              x={650}
              y={5 + i * 50}
              w={60}
              label={`s${i}`}
              sub=""
              color={i === shardIdx ? SD : NEUTRAL}
              compact
            />
          ))}
        </svg>

        <motion.div
          key={picked}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            marginTop: 12,
            padding: "10px 14px",
            background: "rgba(15,23,42,0.6)",
            borderTop: "1px solid rgba(148,163,184,0.12)",
            fontFamily: MONO,
            fontSize: "0.78rem",
            color: "#e5e7eb",
            borderRadius: 6,
          }}
        >
          <span style={{ color: NEUTRAL }}>// route</span>
          <br />
          shard = hash(<span style={{ color: SD }}>{key}</span>) % 4 = <span style={{ color: "#10b981" }}>{shardIdx}</span> &nbsp;→&nbsp; s{shardIdx}
        </motion.div>
      </div>
    </div>
  );
}

function RouteNode({ x, y, w, label, sub, color, compact }: { x: number; y: number; w: number; label: string; sub: string; color: string; compact?: boolean }) {
  const h = compact ? 40 : 50;
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect width={w} height={h} rx={6} fill={`${color}22`} stroke={color} strokeWidth={1.5} />
      <text x={w / 2} y={compact ? 24 : 22} textAnchor="middle" fill="#e5e7eb" fontSize={compact ? 12 : 11} fontWeight={700} fontFamily={MONO}>
        {label}
      </text>
      {!compact && sub && (
        <text x={w / 2} y={38} textAnchor="middle" fill={color} fontSize={9} fontFamily={MONO}>
          {sub}
        </text>
      )}
    </g>
  );
}

// tiny stable hash, not crypto
function stableHash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = (h * 16777619) >>> 0;
  }
  return h;
}

/* ================================================================== */
/*  TAB 3 - Hot shards                                                 */
/* ================================================================== */

interface ShardLoad {
  id: string;
  rps: number;
  hot: boolean;
}

function HotShards() {
  const [scenario, setScenario] = useState<"even" | "celebrity" | "fixed">("even");

  const shards: ShardLoad[] = useMemo(() => {
    if (scenario === "even") {
      return [
        { id: "s0", rps: 1200, hot: false },
        { id: "s1", rps: 1180, hot: false },
        { id: "s2", rps: 1240, hot: false },
        { id: "s3", rps: 1190, hot: false },
      ];
    }
    if (scenario === "celebrity") {
      return [
        { id: "s0", rps: 850, hot: false },
        { id: "s1", rps: 12000, hot: true },
        { id: "s2", rps: 870, hot: false },
        { id: "s3", rps: 820, hot: false },
      ];
    }
    return [
      { id: "s0", rps: 2400, hot: false },
      { id: "s1", rps: 4800, hot: false },
      { id: "s2", rps: 2300, hot: false },
      { id: "s3", rps: 2500, hot: false },
    ];
  }, [scenario]);

  const max = Math.max(...shards.map((s) => s.rps));

  return (
    <div>
      <h3 style={sectionTitle}>Sharding doesn&rsquo;t save you from skew</h3>
      <p style={sectionDesc}>
        Even with consistent hashing, real workloads aren&rsquo;t uniform. One celebrity user, one
        viral product, one Black Friday SKU and a single shard absorbs all the traffic. Watch what
        happens.
      </p>

      <div className="flex items-center gap-2 mb-5 flex-wrap">
        {[
          { id: "even", label: "Even traffic" },
          { id: "celebrity", label: "Celebrity user" },
          { id: "fixed", label: "After fix (split key)" },
        ].map((s) => {
          const active = scenario === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setScenario(s.id as typeof scenario)}
              style={{
                fontFamily: MONO,
                fontSize: "0.7rem",
                fontWeight: 700,
                padding: "8px 14px",
                borderRadius: 6,
                cursor: "pointer",
                border: `1.5px solid ${active ? SD : "var(--eng-border)"}`,
                background: active ? `${SD}18` : "transparent",
                color: active ? SD : "var(--eng-text-muted)",
                transition: "all 0.18s",
              }}
            >
              {s.label}
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
        <div style={{ display: "grid", gap: 14 }}>
          {shards.map((s, i) => {
            const pct = Math.min(100, (s.rps / max) * 100);
            const c = s.hot ? SD : "#10b981";
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "grid", gridTemplateColumns: "60px 1fr 110px", alignItems: "center", gap: 12 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: MONO, fontWeight: 700, color: "#e5e7eb" }}>
                  {s.hot && <Flame className="w-3.5 h-3.5" style={{ color: SD }} />}
                  {s.id}
                </div>
                <div style={{ height: 28, background: "rgba(148,163,184,0.12)", borderRadius: 6, overflow: "hidden", position: "relative" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ height: "100%", background: c, opacity: 0.85 }}
                  />
                  {s.hot && (
                    <motion.div
                      initial={{ opacity: 0.4 }}
                      animate={{ opacity: 0.9 }}
                      transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                      style={{ position: "absolute", inset: 0, background: `linear-gradient(90deg, transparent 0%, ${SD}33 50%, transparent 100%)` }}
                    />
                  )}
                </div>
                <div style={{ fontFamily: MONO, fontSize: "0.85rem", color: c, fontWeight: 700, textAlign: "right" }}>
                  {s.rps.toLocaleString()} rps
                </div>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={scenario}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            style={{
              marginTop: 18,
              padding: "12px 14px",
              background: "rgba(15,23,42,0.6)",
              borderRadius: 6,
              fontSize: "0.86rem",
              color: "#e5e7eb",
              lineHeight: 1.55,
            }}
          >
            <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginRight: 8 }}>
              SCENARIO
            </span>
            {scenario === "even" &&
              "Each shard takes roughly the same load. This is the fiction every textbook starts with."}
            {scenario === "celebrity" &&
              "One key (a celebrity, a viral SKU, a popular hashtag) lives on shard s1. That shard is at 10x the load of every other. CPU pegs, latency spikes, the rest of the cluster is bored."}
            {scenario === "fixed" &&
              "Fix: split the hot key across multiple shards (composite key, virtual buckets, write fan-out). Load is more even but you've added a layer of indirection on every read."}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L3_ShardingActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "ring", label: "Hash Ring", icon: <CircleDot className="w-4 h-4" />, content: <HashRing /> },
    { id: "routing", label: "Routing", icon: <Hash className="w-4 h-4" />, content: <RoutingDemo /> },
    { id: "hot", label: "Hot Shards", icon: <Activity className="w-4 h-4" />, content: <HotShards /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Why is consistent hashing preferred over `hash(key) % n` for sharding?",
      options: [
        "It produces more uniform load.",
        "Adding or removing a shard moves only a small fraction of keys.",
        "It supports more keys per shard.",
        "It's faster to compute.",
      ],
      correctIndex: 1,
      explanation: "With `% n`, changing n changes almost every key's home. Consistent hashing only moves keys in the new node's arc. The whole point is cheap online rebalancing.",
    },
    {
      question: "Your cluster shards by user_id. A celebrity gets 50% of all reads. Which fix preserves sharding scale-out?",
      options: [
        "Move that user to a dedicated shard with extra capacity (or virtual buckets).",
        "Stop sharding.",
        "Increase the number of shards.",
        "Switch to a single primary database.",
      ],
      correctIndex: 0,
      explanation: "Hot keys are an inherent risk of sharding by entity. The fix is per-key: peel the celebrity off onto more capacity, or fan-out reads across virtual sub-shards. Just adding shards doesn't help if the same user still maps to one of them.",
    },
    {
      question: "Sharding multiplies write throughput by N (the shard count) primarily because…",
      options: [
        "Writes are smaller.",
        "Each write only touches one shard, and shards run independently in parallel.",
        "Writes are batched.",
        "Sharding compresses data.",
      ],
      correctIndex: 1,
      explanation: "Each shard is a fully independent database. Writes for different keys land on different shards and execute in parallel, so total cluster write throughput scales close to linearly with N (until you hit cross-shard transactions or hot keys).",
    },
    {
      question: "Which of these is hardest in a sharded system?",
      options: [
        "Reading a single user's profile.",
        "A transaction that updates two users on different shards atomically.",
        "Adding a new shard.",
        "Caching reads.",
      ],
      correctIndex: 1,
      explanation: "Cross-shard transactions need a coordinator and either two-phase commit or sagas, both of which are slow and complicated. Most sharded systems try to design the data model so transactions stay on one shard.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Sharding & Partitioning"
      level={3}
      lessonNumber={3}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The standard 'how do you scale writes past one DB' answer"
      onQuizComplete={onQuizComplete}
    />
  );
}
