import { Fragment, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator, Gauge, Timer, HardDrive, Users, TrendingUp,
  Zap, Server, Network, Globe,
} from "lucide-react";
import EngineeringLessonShell from "@/components/engineering/EngineeringLessonShell";
import type { EngTabDef, EngQuizQuestion } from "@/components/engineering/EngineeringLessonShell";
import {
  SD,
  SD_SOFT,
  MONO,
  sectionTitle,
  sectionDesc,
  staggerContainer,
  cardEntrance,
  cardHover,
} from "./_shared/styles";

/* ================================================================== */
/*  Format helpers                                                      */
/* ================================================================== */

function formatNum(n: number): string {
  if (n >= 1e12) return (n / 1e12).toFixed(1) + " T";
  if (n >= 1e9) return (n / 1e9).toFixed(1) + " B";
  if (n >= 1e6) return (n / 1e6).toFixed(1) + " M";
  if (n >= 1e3) return (n / 1e3).toFixed(1) + " K";
  return n.toFixed(0);
}
function formatBytes(b: number): string {
  if (b >= 1e15) return (b / 1e15).toFixed(1) + " PB";
  if (b >= 1e12) return (b / 1e12).toFixed(1) + " TB";
  if (b >= 1e9) return (b / 1e9).toFixed(1) + " GB";
  if (b >= 1e6) return (b / 1e6).toFixed(1) + " MB";
  if (b >= 1e3) return (b / 1e3).toFixed(1) + " KB";
  return b.toFixed(0) + " B";
}

/* ================================================================== */
/*  TAB 1 - Interactive calculator                                      */
/* ================================================================== */

function Calculator1() {
  const [dau, setDau] = useState(200_000_000);
  const [perUser, setPerUser] = useState(2);
  const [readMult, setReadMult] = useState(100);
  const [bytesPerItem, setBytesPerItem] = useState(280);
  const [peakMult, setPeakMult] = useState(3);

  const derived = useMemo(() => {
    const writesDay = dau * perUser;
    const writesSec = writesDay / 86400;
    const readsSec = writesSec * readMult;
    const peakReadsSec = readsSec * peakMult;
    const storageDay = writesDay * bytesPerItem;
    const storageYr = storageDay * 365;
    return { writesDay, writesSec, readsSec, peakReadsSec, storageDay, storageYr };
  }, [dau, perUser, readMult, bytesPerItem, peakMult]);

  const Slider = ({
    label, value, onChange, min, max, step, format, unit,
  }: {
    label: string; value: number; onChange: (n: number) => void;
    min: number; max: number; step: number;
    format?: (n: number) => string; unit?: string;
  }) => (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
        <span style={{ fontSize: "0.82rem", color: "var(--eng-text)", fontWeight: 600 }}>{label}</span>
        <span style={{ fontFamily: MONO, fontSize: "0.88rem", color: SD, fontWeight: 700 }}>
          {format ? format(value) : value}{unit ? ` ${unit}` : ""}
        </span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: "100%", accentColor: SD }}
      />
    </div>
  );

  return (
    <div>
      <h3 style={sectionTitle}>Turn &ldquo;a lot of users&rdquo; into numbers you can defend</h3>
      <p style={sectionDesc}>
        Every HLD starts with these five numbers. Move the sliders below - watch how storage and
        QPS shift. In a real interview you&rsquo;d write this math on the whiteboard in under 5
        minutes.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {/* INPUTS */}
        <div
          style={{
            border: "1.5px solid var(--eng-border)", borderRadius: 12,
            padding: "18px 20px", background: "var(--eng-bg-subtle)",
          }}
        >
          <div style={{ fontFamily: MONO, fontSize: "0.7rem", fontWeight: 800, color: SD, letterSpacing: "0.08em", marginBottom: 14 }}>
            INPUTS · THINGS YOU CLARIFY WITH THE PM
          </div>
          <Slider
            label="Daily Active Users"
            value={dau} onChange={setDau}
            min={10000} max={1_000_000_000} step={10000}
            format={formatNum} unit="DAU"
          />
          <Slider
            label="Writes per user per day"
            value={perUser} onChange={setPerUser}
            min={1} max={50} step={1} unit="× / day"
          />
          <Slider
            label="Read / Write ratio"
            value={readMult} onChange={setReadMult}
            min={1} max={500} step={1} unit="× reads per write"
          />
          <Slider
            label="Bytes per item (tweet, post, event)"
            value={bytesPerItem} onChange={setBytesPerItem}
            min={100} max={10000} step={50}
            format={formatBytes}
          />
          <Slider
            label="Peak / Average multiplier"
            value={peakMult} onChange={setPeakMult}
            min={1} max={10} step={0.5} unit="×"
          />
        </div>

        {/* OUTPUTS */}
        <div
          style={{
            border: `1.5px solid ${SD}`, borderRadius: 12,
            padding: "18px 20px", background: SD_SOFT,
          }}
        >
          <div style={{ fontFamily: MONO, fontSize: "0.7rem", fontWeight: 800, color: SD, letterSpacing: "0.08em", marginBottom: 14 }}>
            OUTPUTS · WHAT YOU WRITE ON THE BOARD
          </div>
          {[
            { icon: <TrendingUp className="w-4 h-4" />, label: "Writes / day", val: formatNum(derived.writesDay) },
            { icon: <Gauge className="w-4 h-4" />, label: "Writes / sec (avg)", val: formatNum(derived.writesSec) + " QPS" },
            { icon: <Gauge className="w-4 h-4" />, label: "Reads / sec (avg)", val: formatNum(derived.readsSec) + " QPS" },
            { icon: <Zap className="w-4 h-4" />, label: "Peak reads / sec", val: formatNum(derived.peakReadsSec) + " QPS" },
            { icon: <HardDrive className="w-4 h-4" />, label: "Storage / day", val: formatBytes(derived.storageDay) },
            { icon: <HardDrive className="w-4 h-4" />, label: "Storage / year", val: formatBytes(derived.storageYr) },
          ].map((r) => (
            <div
              key={r.label}
              style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "10px 0",
                borderBottom: "1px dashed var(--eng-border)",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.85rem", color: "var(--eng-text)" }}>
                <span style={{ color: SD }}>{r.icon}</span>
                {r.label}
              </span>
              <span style={{ fontFamily: MONO, fontSize: "0.95rem", fontWeight: 700, color: "var(--eng-text)" }}>
                {r.val}
              </span>
            </div>
          ))}

          <div
            style={{
              marginTop: 14, padding: "10px 12px", borderRadius: 8,
              background: "var(--eng-bg)", border: `1px solid ${SD}40`,
              fontSize: "0.8rem", color: "var(--eng-text-muted)", lineHeight: 1.5,
            }}
          >
            <span style={{ color: SD, fontWeight: 700 }}>rule of thumb: </span>
            1 day ≈ 86,400 seconds ≈ 10<sup>5</sup>. Memorize it - you&rsquo;ll divide by it constantly.
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Latency numbers every engineer must know                    */
/* ================================================================== */

interface LatencyRow {
  op: string;
  ns: number;
  icon: React.ReactNode;
  note: string;
}

const LATENCIES: LatencyRow[] = [
  { op: "L1 cache reference", ns: 0.5, icon: <Zap className="w-4 h-4" />, note: "CPU-internal, essentially free" },
  { op: "Branch mispredict", ns: 5, icon: <Zap className="w-4 h-4" />, note: "10× L1" },
  { op: "L2 cache reference", ns: 7, icon: <Zap className="w-4 h-4" />, note: "~14× L1" },
  { op: "Mutex lock / unlock", ns: 25, icon: <Server className="w-4 h-4" />, note: "" },
  { op: "Main memory reference", ns: 100, icon: <Server className="w-4 h-4" />, note: "200× L1" },
  { op: "Compress 1KB with Snappy", ns: 2_000, icon: <Server className="w-4 h-4" />, note: "~2μs" },
  { op: "Read 1MB sequentially from memory", ns: 10_000, icon: <Server className="w-4 h-4" />, note: "~10μs" },
  { op: "SSD random read", ns: 100_000, icon: <HardDrive className="w-4 h-4" />, note: "~0.1ms - 1000× RAM" },
  { op: "Read 1MB sequentially from SSD", ns: 1_000_000, icon: <HardDrive className="w-4 h-4" />, note: "~1ms" },
  { op: "Round trip within same datacenter", ns: 500_000, icon: <Network className="w-4 h-4" />, note: "~0.5ms" },
  { op: "Disk seek (spinning rust)", ns: 10_000_000, icon: <HardDrive className="w-4 h-4" />, note: "~10ms - avoid" },
  { op: "Read 1MB sequentially from disk", ns: 20_000_000, icon: <HardDrive className="w-4 h-4" />, note: "~20ms" },
  { op: "Packet round trip CA → Europe", ns: 150_000_000, icon: <Globe className="w-4 h-4" />, note: "~150ms - speed of light in fiber" },
];

function formatLatency(ns: number): string {
  if (ns < 1_000) return `${ns} ns`;
  if (ns < 1_000_000) return `${(ns / 1000).toFixed(1)} μs`;
  if (ns < 1_000_000_000) return `${(ns / 1_000_000).toFixed(1)} ms`;
  return `${(ns / 1_000_000_000).toFixed(2)} s`;
}

function LatencyNumbers() {
  const maxNs = Math.max(...LATENCIES.map((l) => l.ns));

  return (
    <div>
      <h3 style={sectionTitle}>Latency numbers every engineer should know</h3>
      <p style={sectionDesc}>
        Originally by Jeff Dean. These constants decide every architecture choice you&rsquo;ll ever
        make. Notice how each jump is <em>roughly</em> an order of magnitude - that&rsquo;s the
        intuition you need.
      </p>

      <div
        style={{
          border: "1.5px solid var(--eng-border)", borderRadius: 12, overflow: "hidden",
          background: "var(--eng-bg-subtle)",
        }}
      >
        {LATENCIES.map((row, i) => {
          const pct = Math.log10(row.ns + 1) / Math.log10(maxNs + 1);
          return (
            <div
              key={row.op}
              style={{
                display: "grid", gridTemplateColumns: "24px 1fr 100px 1fr",
                gap: 12, padding: "10px 14px", alignItems: "center",
                borderBottom: i < LATENCIES.length - 1 ? "1px solid var(--eng-border)" : "none",
                background: i % 2 === 0 ? "transparent" : "var(--eng-bg)",
              }}
            >
              <span style={{ color: SD, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {row.icon}
              </span>
              <span style={{ fontSize: "0.85rem", color: "var(--eng-text)" }}>{row.op}</span>
              <span style={{ fontFamily: MONO, fontSize: "0.82rem", fontWeight: 700, color: SD, textAlign: "right" }}>
                {formatLatency(row.ns)}
              </span>
              <div style={{ height: 6, background: "var(--eng-bg)", borderRadius: 3, overflow: "hidden", border: "1px solid var(--eng-border)" }}>
                <div style={{ width: `${pct * 100}%`, height: "100%", background: SD }} />
              </div>
            </div>
          );
        })}
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{
          marginTop: 16, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10,
        }}
      >
        {[
          { rule: "RAM is ~1000× faster than SSD", impl: "Cache hot data in Redis, not \"just hit the DB\"." },
          { rule: "Same-DC round trip ≈ SSD read", impl: "A network call within a DC costs about the same as a disk read." },
          { rule: "Cross-continent ≈ 150ms", impl: "Any design touching multi-region pays this on every user-visible read." },
        ].map((c) => (
          <motion.div
            key={c.rule}
            variants={cardEntrance}
            whileHover={cardHover}
            style={{
              padding: "12px 14px", borderRadius: 10,
              border: `1.5px solid ${SD}`, background: SD_SOFT,
            }}
          >
            <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--eng-text)", marginBottom: 4 }}>
              {c.rule}
            </div>
            <div style={{ fontSize: "0.78rem", color: "var(--eng-text-muted)", lineHeight: 1.5 }}>
              {c.impl}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 3 - Cheat card (powers of 2 + shortcuts)                        */
/* ================================================================== */

function CheatCard() {
  const powers = [
    { exp: "2^10", val: "≈ 10³", name: "Kilo", bytes: "1 KB" },
    { exp: "2^20", val: "≈ 10⁶", name: "Mega", bytes: "1 MB" },
    { exp: "2^30", val: "≈ 10⁹", name: "Giga", bytes: "1 GB" },
    { exp: "2^32", val: "≈ 4 × 10⁹", name: "IPv4 space", bytes: "4 GB" },
    { exp: "2^40", val: "≈ 10¹²", name: "Tera", bytes: "1 TB" },
    { exp: "2^50", val: "≈ 10¹⁵", name: "Peta", bytes: "1 PB" },
    { exp: "2^63", val: "≈ 9 × 10¹⁸", name: "max int64", bytes: "-" },
  ];

  const qps = [
    { scenario: "Personal blog", dau: "1K", qps: "~0 QPS", fit: "Single server, SQLite" },
    { scenario: "Mid startup", dau: "1M", qps: "~100 QPS", fit: "One beefy DB, app tier of 3–5" },
    { scenario: "Big consumer app", dau: "100M", qps: "~10K QPS reads", fit: "Cache tier, DB replicas, CDN" },
    { scenario: "Twitter / Instagram", dau: "500M+", qps: "~500K+ QPS", fit: "Sharded DBs, async fan-out, multi-region" },
  ];

  return (
    <div>
      <h3 style={sectionTitle}>The cheat card you print and tape to your monitor</h3>
      <p style={sectionDesc}>
        Two tables. Memorize both. One converts powers of 2 to decimal sizes you can reason about.
        The other tells you what architecture class your system falls into based on DAU.
      </p>

      {/* Powers of 2 */}
      <div
        style={{
          border: "1.5px solid var(--eng-border)", borderRadius: 12, overflow: "hidden",
          marginBottom: 18,
        }}
      >
        <div
          style={{
            padding: "10px 14px", background: SD_SOFT, borderBottom: `1.5px solid ${SD}`,
            fontFamily: MONO, fontSize: "0.7rem", letterSpacing: "0.1em", color: SD, fontWeight: 800,
          }}
        >
          POWERS OF 2 · CONVERT BITS/BYTES TO DECIMAL IN YOUR HEAD
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 2fr 1fr" }}>
          {["Power", "Decimal", "Common name", "Bytes"].map((h) => (
            <div
              key={h}
              style={{
                padding: "8px 14px", fontFamily: MONO, fontSize: "0.68rem",
                letterSpacing: "0.08em", color: "var(--eng-text-muted)", fontWeight: 700,
                borderBottom: "1px solid var(--eng-border)", background: "var(--eng-bg-subtle)",
              }}
            >
              {h.toUpperCase()}
            </div>
          ))}
          {powers.map((p, i) => (
            <Fragment key={p.exp}>
              <div style={{ padding: "10px 14px", fontFamily: MONO, fontSize: "0.85rem", fontWeight: 700, color: SD, borderBottom: i < powers.length - 1 ? "1px solid var(--eng-border)" : "none" }}>{p.exp}</div>
              <div style={{ padding: "10px 14px", fontFamily: MONO, fontSize: "0.85rem", color: "var(--eng-text)", borderBottom: i < powers.length - 1 ? "1px solid var(--eng-border)" : "none" }}>{p.val}</div>
              <div style={{ padding: "10px 14px", fontSize: "0.85rem", color: "var(--eng-text)", borderBottom: i < powers.length - 1 ? "1px solid var(--eng-border)" : "none" }}>{p.name}</div>
              <div style={{ padding: "10px 14px", fontFamily: MONO, fontSize: "0.85rem", color: "var(--eng-text-muted)", borderBottom: i < powers.length - 1 ? "1px solid var(--eng-border)" : "none" }}>{p.bytes}</div>
            </Fragment>
          ))}
        </div>
      </div>

      {/* Scale tier */}
      <div
        style={{
          border: "1.5px solid var(--eng-border)", borderRadius: 12, overflow: "hidden",
          marginBottom: 16,
        }}
      >
        <div
          style={{
            padding: "10px 14px", background: SD_SOFT, borderBottom: `1.5px solid ${SD}`,
            fontFamily: MONO, fontSize: "0.7rem", letterSpacing: "0.1em", color: SD, fontWeight: 800,
          }}
        >
          SCALE TIERS · MATCH DAU → ARCHITECTURE CLASS
        </div>
        {qps.map((q, i) => (
          <div
            key={q.scenario}
            style={{
              display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 2fr", gap: 12,
              padding: "12px 14px", alignItems: "center",
              borderBottom: i < qps.length - 1 ? "1px solid var(--eng-border)" : "none",
              background: i % 2 === 0 ? "var(--eng-bg)" : "var(--eng-bg-subtle)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Users className="w-4 h-4" style={{ color: SD }} />
              <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--eng-text)" }}>{q.scenario}</span>
            </div>
            <span style={{ fontFamily: MONO, fontSize: "0.85rem", color: "var(--eng-text-muted)" }}>{q.dau} DAU</span>
            <span style={{ fontFamily: MONO, fontSize: "0.85rem", fontWeight: 700, color: SD }}>{q.qps}</span>
            <span style={{ fontSize: "0.82rem", color: "var(--eng-text)" }}>{q.fit}</span>
          </div>
        ))}
      </div>

      <div
        style={{
          padding: "12px 16px", borderRadius: 10,
          border: `1.5px solid ${SD}`, background: SD_SOFT,
        }}
      >
        <div style={{ fontFamily: MONO, fontSize: "0.68rem", fontWeight: 800, color: SD, letterSpacing: "0.08em", marginBottom: 4 }}>
          THE MENTAL SHORTCUT
        </div>
        <div style={{ fontSize: "0.88rem", color: "var(--eng-text)", lineHeight: 1.55 }}>
          <b>1 day = 86,400 s ≈ 10⁵ s.</b> So: DAU ÷ 100,000 ≈ average QPS if each user does one
          action per day. From there, multiply by actions/day, then by a peak factor of 3×.
          That&rsquo;s the whole calculation. Say it out loud in your next mock interview.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  MAIN                                                                */
/* ================================================================== */

export default function SD_L1_BackOfEnvelopeActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "calc", label: "Estimator", icon: <Calculator className="w-4 h-4" />, content: <Calculator1 /> },
    { id: "lat", label: "Latency Numbers", icon: <Timer className="w-4 h-4" />, content: <LatencyNumbers /> },
    { id: "cheat", label: "Cheat Card", icon: <Gauge className="w-4 h-4" />, content: <CheatCard /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Roughly how many seconds are in a day?",
      options: ["3,600", "86,400", "604,800", "1,000,000"],
      correctIndex: 1,
      explanation: "60 × 60 × 24 = 86,400 ≈ 10⁵. This is the single most-used shortcut in capacity estimation.",
    },
    {
      question: "A service has 100M DAU. Each user does 1 write per day. Using the 10⁵ shortcut (1 day ≈ 10⁵ seconds), what&rsquo;s the average write QPS?",
      options: ["~10 QPS", "~100 QPS", "~1,000 QPS (100M ÷ 10⁵)", "~100,000 QPS"],
      correctIndex: 2,
      explanation: "100M ÷ 10⁵ = 1,000 QPS. The exact number is 1,157 (÷ 86,400), but you always use the shortcut on a whiteboard. Then add a ~3× peak multiplier for safety.",
    },
    {
      question: "Approximately how much slower is an SSD random read vs a main memory reference?",
      options: ["2× slower", "10× slower", "100× slower", "About 1,000× slower"],
      correctIndex: 3,
      explanation: "Main memory ≈ 100ns, SSD random read ≈ 100,000ns = 100μs. That&rsquo;s 1000×. It&rsquo;s why in-memory caches (Redis) exist.",
    },
    {
      question: "Your read:write ratio is 100:1 and writes are 5K QPS. Average reads per second?",
      options: ["~50 QPS", "~500 QPS", "~500K QPS", "~5M QPS"],
      correctIndex: 2,
      explanation: "5,000 × 100 = 500,000 QPS. This is why Twitter caches timelines - you never hit the DB for reads at that scale.",
    },
    {
      question: "A user in California makes an API call. The server is in Frankfurt. Minimum RTT?",
      options: ["~1 ms", "~10 ms", "~150 ms (speed of light in fiber)", "~1 second"],
      correctIndex: 2,
      explanation: "Cross-continental RTT is bounded by physics - about 150ms. This is why CDNs and regional replicas exist.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Back-of-Envelope Estimation"
      level={1}
      lessonNumber={6}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="Step 2 of every HLD round - the numbers that justify everything"
      onQuizComplete={onQuizComplete}
    />
  );
}
