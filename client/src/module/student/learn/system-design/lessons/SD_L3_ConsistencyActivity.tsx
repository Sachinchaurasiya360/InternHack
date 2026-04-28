import { useEffect, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Globe, Pause, Play, RotateCcw, Sliders } from "lucide-react";
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

const LEVELS = [
  {
    k: "Eventual",
    short: "stale possible",
    long: "Replicas converge given enough time. A read right after a write may return the old value. The cheapest, most available model.",
    ex: "DNS, CDN cache, social media counters, DynamoDB default reads.",
  },
  {
    k: "Read-your-writes",
    short: "your writes visible to you",
    long: "After you write something, your subsequent reads see at least that write. Other users may still see the old value temporarily.",
    ex: "Twitter post → refresh shows your tweet. Sticky-routing the writer to the primary briefly is the standard fix.",
  },
  {
    k: "Monotonic Reads",
    short: "no time-travel",
    long: "Once a user sees value v=5, no later read by them returns v<5 — even when reads are routed to different replicas at different lag.",
    ex: "Newsfeed pagination. You shouldn't see post-23 then later not see it.",
  },
  {
    k: "Linearizable",
    short: "as if one machine",
    long: "Every operation appears to happen at a single point in time, in a single global order. The strictest model.",
    ex: "Spanner, etcd, ZooKeeper. Banking ledgers, leader election, distributed locks.",
  },
];

function Definition() {
  return (
    <div>
      <h3 style={sectionTitle}>The consistency spectrum, weakest to strongest</h3>
      <p style={sectionDesc}>
        Distributed systems trade <b>consistency</b> against <b>availability</b> and <b>latency</b>.
        The four most-cited points on the spectrum, from cheapest to most expensive:
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6"
      >
        {LEVELS.map((c, i) => {
          // Gradient: lime → amber → purple → SD as it gets stricter
          const colors = [NEUTRAL, WARN, PURPLE, SD];
          const color = colors[i];
          return (
            <motion.div
              key={c.k}
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } } }}
              style={{ padding: "16px 18px", border: `1.5px solid ${color}55`, borderRadius: 10, background: `${color}08`, display: "flex", flexDirection: "column", gap: 8 }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.95rem" }}>{c.k}</div>
                <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color, letterSpacing: "0.08em", padding: "3px 8px", borderRadius: 4, background: `${color}14`, border: `1px solid ${color}55` }}>
                  L{i + 1}
                </div>
              </div>
              <div style={{ fontFamily: MONO, fontSize: "0.7rem", color, fontStyle: "italic" }}>{c.short}</div>
              <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{c.long}</div>
              <div style={{ paddingTop: 8, borderTop: `1px dashed ${color}33`, fontFamily: MONO, fontSize: "0.74rem", color }}>
                <span style={{ fontWeight: 800, letterSpacing: "0.08em", marginRight: 4 }}>EX ·</span>
                <span style={{ color: "var(--eng-text)" }}>{c.ex}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div style={{ padding: "14px 16px", borderRadius: 8, border: "1px solid var(--eng-border)" }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          THE COST OF GOING STRICTER
        </div>
        <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
          Each step toward linearizable adds <b>coordination</b> (replicas must agree before
          replying). That coordination costs <b>latency</b> (extra round trips) and
          <b> availability</b> (during a partition, some replicas can&rsquo;t coordinate, so they reject
          requests). The CAP theorem is just a special case of this trade.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Slider over 3-replica cluster                              */
/* ================================================================== */

type Strength = "eventual" | "ryow" | "monotonic" | "linearizable";

interface ReadEvent {
  t: number;
  who: "user-A" | "user-B";
  replica: 0 | 1 | 2;
  value: number; // version visible to reader
}

const SIM_MS = 12000;
const TICK_MS = 100;

function ConsistencySlider() {
  const [strength, setStrength] = useState<Strength>("eventual");
  const [tNow, setTNow] = useState(0);
  const [running, setRunning] = useState(false);

  // Replica versions over time (pre-computed)
  // Primary writes happen at t=2s, t=5s, t=9s
  // Replica lag: r0 = 0ms (primary), r1 = 800ms, r2 = 2200ms
  const writes = [
    { t: 2000, v: 1 },
    { t: 5000, v: 2 },
    { t: 9000, v: 3 },
  ];
  const lag: [number, number, number] = [0, 800, 2200];

  function versionAt(replica: 0 | 1 | 2, t: number): number {
    let v = 0;
    for (const w of writes) {
      if (t >= w.t + lag[replica]) v = w.v;
    }
    return v;
  }

  // Pre-built read events: alternating user-A and user-B reads every 500ms
  const reads: ReadEvent[] = [];
  let userAState = 0;
  let userALastReplica: 0 | 1 | 2 = 0;
  for (let t = 700; t < SIM_MS; t += 700) {
    const who: "user-A" | "user-B" = (t / 700) % 2 === 0 ? "user-A" : "user-B";
    // round-robin replica
    let replica = ((Math.floor(t / 700)) % 3) as 0 | 1 | 2;

    // Apply strength rules
    let v = versionAt(replica, t);

    if (strength === "ryow" && who === "user-A") {
      // After user-A writes (we'll say user-A is the writer), pin to primary
      replica = 0;
      v = versionAt(0, t);
    }
    if (strength === "monotonic" && who === "user-A") {
      // Stick to a replica with at least the version they last saw
      if (v < userAState) {
        // bump to a replica that has at least userAState (use primary)
        replica = 0;
        v = versionAt(0, t);
      }
    }
    if (strength === "linearizable") {
      // every read goes to primary (or quorum, equivalent here)
      replica = 0;
      v = versionAt(0, t);
    }

    if (who === "user-A") {
      userAState = Math.max(userAState, v);
      userALastReplica = replica;
    }

    reads.push({ t, who, replica, value: v });
  }

  // remove unused reference warning
  void userALastReplica;

  useEffect(() => {
    if (!running) return;
    const handle = setInterval(() => {
      setTNow((t) => {
        const next = t + TICK_MS;
        if (next >= SIM_MS) {
          setRunning(false);
          return SIM_MS;
        }
        return next;
      });
    }, TICK_MS);
    return () => clearInterval(handle);
  }, [running]);

  const reset = () => {
    setTNow(0);
    setRunning(false);
  };

  const visibleReads = reads.filter((r) => r.t <= tNow);
  const userAReads = visibleReads.filter((r) => r.who === "user-A");
  // Detect anomalies for user A: regression
  const userAValues = userAReads.map((r) => r.value);
  let regression = false;
  for (let i = 1; i < userAValues.length; i++) {
    if (userAValues[i] < userAValues[i - 1]) {
      regression = true;
      break;
    }
  }

  const replicaNow: [number, number, number] = [versionAt(0, tNow), versionAt(1, tNow), versionAt(2, tNow)];

  return (
    <div>
      <h3 style={sectionTitle}>Slide. Watch which versions reads return.</h3>
      <p style={sectionDesc}>
        Three replicas. Primary at the top, two lagged by 0.8s and 2.2s. Three writes happen
        during the simulation (v1, v2, v3). Pick a consistency level — you&rsquo;ll see what each
        user actually sees over time.
      </p>

      {/* Slider */}
      <div style={{ background: "var(--eng-bg-subtle)", border: "1px solid var(--eng-border)", borderRadius: 12, padding: "16px 18px", marginBottom: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontFamily: MONO, fontSize: "0.7rem", fontWeight: 800, color: NEUTRAL, letterSpacing: "0.1em" }}>WEAKER</span>
          <span style={{ fontFamily: MONO, fontSize: "0.7rem", fontWeight: 800, color: NEUTRAL, letterSpacing: "0.1em" }}>STRONGER</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 4 }}>
          {(["eventual", "ryow", "monotonic", "linearizable"] as Strength[]).map((s, i) => {
            const active = strength === s;
            const labels = { eventual: "Eventual", ryow: "Read-Your-Writes", monotonic: "Monotonic", linearizable: "Linearizable" };
            return (
              <motion.button
                key={s}
                whileTap={{ scale: 0.96 }}
                onClick={() => { setStrength(s); reset(); }}
                style={{
                  padding: "12px 6px",
                  borderRadius: 6,
                  cursor: "pointer",
                  border: `1.5px solid ${active ? SD : "rgba(148,163,184,0.3)"}`,
                  background: active ? `${SD}22` : "transparent",
                  color: active ? SD : "var(--eng-text-muted)",
                  fontFamily: MONO,
                  fontSize: "0.72rem",
                  fontWeight: 700,
                }}
              >
                <div style={{ fontFamily: MONO, fontSize: "0.6rem", color: NEUTRAL, marginBottom: 2 }}>L{i + 1}</div>
                {labels[s]}
              </motion.button>
            );
          })}
        </div>
      </div>

      <div style={{ background: "#0b1220", borderRadius: 12, border: "1px solid rgba(148,163,184,0.15)", padding: 22 }}>
        {/* Replicas state */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[0, 1, 2].map((i) => {
            const v = replicaNow[i];
            return (
              <motion.div
                key={i}
                animate={{ borderColor: `${SD}55` }}
                style={{ padding: "10px 12px", borderRadius: 8, border: `1.5px solid`, background: `${SD}10`, textAlign: "center" }}
              >
                <div style={{ fontFamily: MONO, fontSize: "0.66rem", color: NEUTRAL, letterSpacing: "0.1em", marginBottom: 4 }}>
                  REPLICA {i} {i === 0 ? "(PRIMARY)" : `(+${lag[i]}ms)`}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={v}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    style={{ fontFamily: MONO, fontSize: "1.3rem", fontWeight: 800, color: "var(--eng-text)" }}
                  >
                    v{v}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Read log */}
        <div style={{ padding: "12px 14px", background: "rgba(15,23,42,0.6)", borderRadius: 8, border: "1px solid rgba(148,163,184,0.15)", minHeight: 220 }}>
          <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: NEUTRAL, letterSpacing: "0.12em", marginBottom: 8 }}>
            READS · time-ordered
          </div>
          {visibleReads.length === 0 ? (
            <div style={{ fontFamily: MONO, fontSize: "0.72rem", color: NEUTRAL, fontStyle: "italic" }}>
              press play to start the simulation
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <AnimatePresence>
                {visibleReads.slice(-12).map((r) => {
                  const userColor = r.who === "user-A" ? SD : PURPLE;
                  return (
                    <motion.div
                      key={r.t}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ display: "grid", gridTemplateColumns: "60px 80px 80px 1fr", gap: 8, padding: "5px 8px", borderRadius: 4, background: `${userColor}10`, border: `1px solid ${userColor}22`, fontFamily: MONO, fontSize: "0.7rem" }}
                    >
                      <span style={{ color: NEUTRAL }}>{(r.t / 1000).toFixed(1)}s</span>
                      <span style={{ color: userColor, fontWeight: 700 }}>{r.who}</span>
                      <span style={{ color: NEUTRAL }}>r{r.replica}</span>
                      <span style={{ color: "#e5e7eb" }}>read → <span style={{ color: userColor, fontWeight: 700 }}>v{r.value}</span></span>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 mt-5 flex-wrap">
          <motion.button whileTap={{ scale: 0.95 }} onClick={() => setRunning((r) => !r)} style={btn(SD, false)}>
            {running ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {running ? "pause" : tNow >= SIM_MS ? "replay" : tNow > 0 ? "resume" : "play"}
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={reset} style={btn(NEUTRAL, false)}>
            <RotateCcw className="w-3.5 h-3.5" />
            reset
          </motion.button>
          <div style={{ flex: 1 }} />
          <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>
            t = <span style={{ color: SD, fontWeight: 700 }}>{(tNow / 1000).toFixed(1)}s</span> / 12.0s
          </span>
        </div>

        <AnimatePresence mode="wait">
          {tNow > 0 && (
            <motion.div
              key={`${strength}-${regression}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              style={{
                marginTop: 14,
                padding: "12px 14px",
                background: regression ? `${WARN}14` : `${SD}14`,
                border: `1.5px solid ${(regression ? WARN : SD)}55`,
                borderRadius: 8,
                fontSize: "0.86rem",
                color: "#e5e7eb",
                lineHeight: 1.55,
              }}
            >
              <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: regression ? WARN : SD, letterSpacing: "0.12em", marginRight: 8 }}>
                {regression ? "ANOMALY" : "OK"}
              </span>
              {strength === "eventual" && regression && "User A read v3, then later read v0 — went BACKWARDS in time. This is the eventual-consistency cost: replicas at different lag, no enforcement."}
              {strength === "eventual" && !regression && "Replicas converge but reads can be stale. So far no regression for User A in this sample, but it's possible."}
              {strength === "ryow" && "User A's reads are pinned to the primary for at least their own writes. They never see their own changes vanish."}
              {strength === "monotonic" && "User A never sees a version older than what they previously saw. Reads can still be stale relative to other users, but never time-travel."}
              {strength === "linearizable" && "Every read goes to the primary (or quorum). Every read sees the latest write from anyone. Strongest, most expensive."}
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
    border: `1.5px solid ${color}`, background: `${color}18`, color,
    fontFamily: MONO, fontSize: "0.72rem", fontWeight: 700,
    letterSpacing: "0.08em", textTransform: "uppercase",
    opacity: disabled ? 0.5 : 1,
  };
}

/* ================================================================== */
/*  TAB 3 - Picking the right level                                    */
/* ================================================================== */

const PICKS = [
  { workload: "Bank balance display", lvl: "Linearizable", reason: "Money. Users tolerate latency more than they tolerate seeing the wrong number." },
  { workload: "Twitter feed pagination", lvl: "Monotonic Reads", reason: "Don't show post-23, then later not show it. Users don't notice 1s of staleness, but DO notice posts vanishing." },
  { workload: "User profile edit", lvl: "Read-Your-Writes", reason: "After saving, the next reload should show the new bio. Other users seeing it 2s later is fine." },
  { workload: "Like / view counts", lvl: "Eventual", reason: "Off by 5 likes for 3 seconds is invisible. Going strict here just slows the page load for nobody's benefit." },
  { workload: "Distributed lock / leader election", lvl: "Linearizable", reason: "Two leaders is a correctness nightmare. Spanner / etcd / ZooKeeper exist exactly for this." },
];

function Picks() {
  return (
    <div>
      <h3 style={sectionTitle}>Picking the right level for the job</h3>
      <p style={sectionDesc}>
        The rule: as weak as you can tolerate, as strong as your correctness requires. Five real
        workloads with the level you&rsquo;d actually pick.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {PICKS.map((p) => (
          <motion.div
            key={p.workload}
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } } }}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10 }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <span style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.9rem" }}>{p.workload}</span>
              <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.06em", padding: "3px 8px", borderRadius: 4, border: `1px solid ${SD}55`, background: `${SD}14` }}>
                {p.lvl}
              </span>
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{p.reason}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L3_ConsistencyActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definition", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "demo", label: "Slide the Knob", icon: <Sliders className="w-4 h-4" />, content: <ConsistencySlider /> },
    { id: "real", label: "Real Picks", icon: <Globe className="w-4 h-4" />, content: <Picks /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "A user posts a tweet, then refreshes their profile and doesn't see it. The replica they hit lags by 2s. Which guarantee would have fixed this without forcing all reads to the primary?",
      options: ["Eventual", "Read-Your-Writes (route the writer's reads to the primary briefly)", "Linearizable", "Monotonic Reads"],
      correctIndex: 1,
      explanation: "RYOW pins only the writer's reads to fresh state for a short window. Other users still get the cheap, lagged replicas. Linearizable would also work but globally; RYOW is the cheaper local fix.",
    },
    {
      question: "Why is linearizable consistency more expensive than eventual?",
      options: [
        "It uses more disk.",
        "Every read needs the latest committed value, which forces coordination (primary, quorum, or consensus). That coordination = extra round trips and a hard dependency on a majority being reachable.",
        "It logs more.",
        "It encrypts data.",
      ],
      correctIndex: 1,
      explanation: "Strong consistency requires nodes to agree before responding. Coordination is a latency tax (extra hops) and an availability tax (during a partition, the minority side can't coordinate, so it errors out).",
    },
    {
      question: "Which scenario is most appropriate for EVENTUAL consistency?",
      options: [
        "Bank balance display",
        "Distributed lock acquisition",
        "Like-count counter on a viral post",
        "Inventory decrement on the last unit",
      ],
      correctIndex: 2,
      explanation: "Like-counts being off by a few for a few seconds is invisible to users and the cheapest model lets the counter scale. The other three are correctness-critical and need stricter guarantees.",
    },
    {
      question: "Monotonic Reads guarantees what, exactly?",
      options: [
        "All replicas have the same data.",
        "Once you've seen version v, no later read by you returns a version older than v — even when reads are routed to different replicas.",
        "Reads are atomic.",
        "Reads are linearizable.",
      ],
      correctIndex: 1,
      explanation: "Monotonic Reads is per-user time-direction. Sticky-route the same user to the same replica (or always at-or-above their last-seen version) and the user never sees their feed time-travel backward.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="The Consistency Spectrum"
      level={3}
      lessonNumber={6}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The 'how strong does this need to be' question for any replicated read"
      onQuizComplete={onQuizComplete}
    />
  );
}
