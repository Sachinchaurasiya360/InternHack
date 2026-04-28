import { useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Globe, Megaphone, RotateCcw, Send } from "lucide-react";
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

const STRATEGIES = [
  {
    name: "Fan-out on Write (Push)",
    color: SD,
    tagline: "compute the timeline at write time",
    how: "When a user posts, copy the post into every follower's pre-built timeline. Reads = simple key lookup.",
    pro: "O(1) read latency. Pre-computed feeds load instantly.",
    con: "A 100M-follower celebrity post triggers 100M writes. Storage bloat.",
    ex: "Twitter for normal users (push), Instagram feed.",
  },
  {
    name: "Fan-out on Read (Pull)",
    color: PURPLE,
    tagline: "compute the timeline at read time",
    how: "Don't copy on write. When a user opens their feed, fetch posts from each followee, merge, sort.",
    pro: "Cheap writes. No storage explosion. Celebrity posts are free.",
    con: "Slow reads (every feed open does 1000+ queries). Painful at scale.",
    ex: "Mastodon, smaller social apps, RSS readers.",
  },
  {
    name: "Hybrid",
    color: WARN,
    tagline: "push for normal users, pull for celebrities",
    how: "Default to push. For users with > 1M followers, switch to pull — only their followers' read paths reach for them.",
    pro: "Fast for the common case. Bounded write amplification.",
    con: "More complex. Two code paths to maintain. Threshold tuning required.",
    ex: "Twitter at scale, Facebook News Feed, Instagram.",
  },
];

function Definition() {
  return (
    <div>
      <h3 style={sectionTitle}>One post. A million inboxes.</h3>
      <p style={sectionDesc}>
        Notifications, social feeds, and chat broadcasts all face the same problem: turning one
        publish into many deliveries. The naive answer (copy to every recipient) breaks when one
        recipient has tens of millions of followers. Three strategies dominate.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6"
      >
        {STRATEGIES.map((s) => (
          <motion.div
            key={s.name}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
            style={{ padding: "16px 18px", border: `1.5px solid ${s.color}55`, borderRadius: 10, background: `${s.color}08`, display: "flex", flexDirection: "column", gap: 10 }}
          >
            <div>
              <div style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.95rem", marginBottom: 4 }}>{s.name}</div>
              <div style={{ fontFamily: MONO, fontSize: "0.7rem", color: s.color, fontWeight: 700 }}>
                {s.tagline}
              </div>
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{s.how}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ fontSize: "0.78rem", color: "var(--eng-text)" }}>
                <span style={{ fontFamily: MONO, fontSize: "0.6rem", fontWeight: 800, color: SD, letterSpacing: "0.1em", marginRight: 6 }}>PRO</span>
                {s.pro}
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--eng-text)" }}>
                <span style={{ fontFamily: MONO, fontSize: "0.6rem", fontWeight: 800, color: WARN, letterSpacing: "0.1em", marginRight: 6 }}>CON</span>
                {s.con}
              </div>
            </div>
            <div style={{ fontFamily: MONO, fontSize: "0.72rem", color: s.color, paddingTop: 6, borderTop: `1px dashed ${s.color}33` }}>
              <span style={{ fontWeight: 800, letterSpacing: "0.08em", marginRight: 4 }}>EX ·</span>
              <span style={{ color: "var(--eng-text)" }}>{s.ex}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div style={{ padding: "14px 16px", borderRadius: 8, border: "1px solid var(--eng-border)" }}>
        <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginBottom: 6 }}>
          REAL EXAMPLES
        </div>
        <div style={{ fontSize: "0.86rem", color: "var(--eng-text)", lineHeight: 1.7 }}>
          <b>Twitter</b> originally pure-push, hit the celebrity problem (Lady Gaga / Justin
          Bieber posts overwhelmed the fan-out service), switched to hybrid. <b>Facebook News
          Feed</b> uses a similar hybrid + ML ranking. <b>WhatsApp group messages</b> push to
          every device. <b>FCM / APNs / SNS</b> are the underlying delivery layers; the strategy
          is what your service does on top.
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Animated celebrity-fanout problem                          */
/* ================================================================== */

type Mode = "push" | "pull" | "hybrid";

function FanoutDemo() {
  const [mode, setMode] = useState<Mode>("push");
  const [followers, setFollowers] = useState(100);
  const [postSent, setPostSent] = useState(false);

  // Stats per mode
  const writes = mode === "push" ? followers : mode === "hybrid" && followers > 100_000 ? 0 : followers;
  const readsExtra = mode === "pull" ? 1 : mode === "hybrid" && followers > 100_000 ? 1 : 0;
  const writeAmp = writes;
  const readAmp = readsExtra;

  // Visual representation: show only up to ~50 follower nodes
  const SHOWN = Math.min(followers, 50);
  const showCelebrity = followers > 100_000;

  const sendPost = () => {
    setPostSent(true);
    setTimeout(() => setPostSent(false), 2200);
  };

  return (
    <div>
      <h3 style={sectionTitle}>Slide the follower count. Watch the writes explode.</h3>
      <p style={sectionDesc}>
        You post once. The system has to deliver to N followers. Try a normal user
        (100 followers), an influencer (50k), and a celebrity (5M). Different strategies handle
        them very differently.
      </p>

      <div className="flex items-center gap-2 mb-5 flex-wrap">
        <span style={{ fontFamily: MONO, fontSize: "0.7rem", color: NEUTRAL }}>strategy:</span>
        {(["push", "pull", "hybrid"] as Mode[]).map((m) => {
          const active = mode === m;
          const c = m === "push" ? SD : m === "pull" ? PURPLE : WARN;
          return (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              style={{
                padding: "6px 12px",
                borderRadius: 6,
                cursor: "pointer",
                border: `1.5px solid ${active ? c : "var(--eng-border)"}`,
                background: active ? `${c}18` : "transparent",
                color: active ? c : "var(--eng-text-muted)",
                fontFamily: MONO,
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {m}
            </button>
          );
        })}
        <div style={{ flex: 1 }} />
      </div>

      <div className="mb-5">
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontFamily: MONO, fontSize: "0.72rem", fontWeight: 700, color: "var(--eng-text)" }}>follower count</span>
          <span style={{ fontFamily: MONO, fontSize: "0.78rem", fontWeight: 800, color: showCelebrity ? WARN : SD }}>
            = {followers.toLocaleString()} {showCelebrity ? "🌟 celebrity" : ""}
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={6}
          step={1}
          value={[100, 1000, 10000, 100000, 1000000, 5000000, 50000000].indexOf(followers)}
          onChange={(e) => setFollowers([100, 1000, 10000, 100000, 1000000, 5000000, 50000000][Number(e.target.value)])}
          style={{ width: "100%", accentColor: showCelebrity ? WARN : SD }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: MONO, fontSize: "0.62rem", color: NEUTRAL, marginTop: 4 }}>
          <span>100</span>
          <span>1k</span>
          <span>10k</span>
          <span>100k</span>
          <span>1M</span>
          <span>5M</span>
          <span>50M</span>
        </div>
      </div>

      <div style={{ background: "#0b1220", borderRadius: 12, border: "1px solid rgba(148,163,184,0.15)", padding: 22 }}>
        <svg viewBox="0 0 720 320" width="100%" style={{ maxWidth: 760, display: "block", margin: "0 auto" }}>
          {/* Author */}
          <g transform="translate(40, 130)">
            <motion.circle r={32} fill={`${SD}22`} stroke={SD} strokeWidth={2} animate={{ scale: postSent ? [1, 1.15, 1] : 1 }} transition={{ duration: 0.6 }} />
            <text x={0} y={-5} textAnchor="middle" fill={SD} fontSize={11} fontWeight={800} fontFamily={MONO}>YOU</text>
            <text x={0} y={10} textAnchor="middle" fill={NEUTRAL} fontSize={9} fontFamily={MONO}>{followers >= 100000 ? "celebrity" : "user"}</text>
          </g>

          {/* Followers in a ring */}
          {Array.from({ length: SHOWN }).map((_, i) => {
            const angle = (i / SHOWN) * 2 * Math.PI - Math.PI / 2;
            const cx = 460 + Math.cos(angle) * 140;
            const cy = 160 + Math.sin(angle) * 110;
            return (
              <g key={i}>
                {/* Push: lines from author to follower with packets */}
                {(mode === "push" || (mode === "hybrid" && followers <= 100000)) && postSent && (
                  <>
                    <motion.line
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.4 }}
                      x1={72}
                      y1={130}
                      x2={cx}
                      y2={cy}
                      stroke={SD}
                      strokeWidth={1}
                    />
                    <motion.circle
                      r={3}
                      fill={SD}
                      initial={{ cx: 72, cy: 130, opacity: 1 }}
                      animate={{ cx, cy, opacity: 1 }}
                      transition={{ duration: 1, delay: i * 0.012, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </>
                )}
                <circle cx={cx} cy={cy} r={5} fill={NEUTRAL} stroke="#0b1220" strokeWidth={1} />
              </g>
            );
          })}

          {/* If followers > 50, show "+N more" indicator */}
          {followers > SHOWN && (
            <text x={460} y={300} textAnchor="middle" fill={NEUTRAL} fontSize={11} fontFamily={MONO}>
              + {(followers - SHOWN).toLocaleString()} more followers
            </text>
          )}

          {/* Pull strategy: timeline-build arrow goes back from one user */}
          {mode === "pull" && postSent && (
            <>
              <motion.line
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                x1={460}
                y1={50}
                x2={72}
                y2={130}
                stroke={PURPLE}
                strokeWidth={1.5}
                strokeDasharray="3 4"
              />
              <motion.circle
                r={4}
                fill={PURPLE}
                initial={{ cx: 460, cy: 50, opacity: 1 }}
                animate={{ cx: 72, cy: 130, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
              <text x={260} y={60} fill={PURPLE} fontSize={10} fontFamily={MONO} fontWeight={700}>
                read pulls posts from author
              </text>
            </>
          )}
        </svg>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <Stat label="writes per post" value={writeAmp.toLocaleString()} color={writeAmp > 1_000_000 ? WARN : SD} />
          <Stat label="extra reads / feed" value={String(readAmp)} color={readAmp > 0 ? WARN : SD} />
          <Stat label="storage growth" value={mode === "push" ? "high" : mode === "pull" ? "none" : "moderate"} color={mode === "push" ? WARN : mode === "pull" ? SD : WARN} />
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <motion.button whileTap={{ scale: 0.95 }} onClick={sendPost} disabled={postSent} style={btn(SD, postSent)}>
            <Send className="w-3.5 h-3.5" />
            {postSent ? "delivering…" : "post"}
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={() => setPostSent(false)} style={btn(NEUTRAL, false)}>
            <RotateCcw className="w-3.5 h-3.5" />
            reset
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${mode}-${showCelebrity}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            style={{ marginTop: 14, padding: "12px 14px", background: "rgba(15,23,42,0.6)", borderRadius: 6, fontSize: "0.86rem", color: "#e5e7eb", lineHeight: 1.55 }}
          >
            <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.12em", marginRight: 8 }}>
              ANALYSIS
            </span>
            {mode === "push" && !showCelebrity && `Push works fine here — ${followers.toLocaleString()} writes is cheap. Reads are O(1).`}
            {mode === "push" && showCelebrity && `Push falls apart. ${followers.toLocaleString()} writes for ONE post will saturate the fan-out service for minutes. This is the celebrity problem.`}
            {mode === "pull" && `Pull does ZERO writes. Reads are slow because every feed open queries every followee — fine for ${followers.toLocaleString()} followees if the user has few; brutal at scale.`}
            {mode === "hybrid" && !showCelebrity && `Below the threshold, hybrid acts like push. ${followers.toLocaleString()} writes — fast reads, manageable storage.`}
            {mode === "hybrid" && showCelebrity && `Above the threshold, hybrid acts like pull. Zero fan-out writes for the celebrity post. Followers' reads merge celebrity posts at read time.`}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div style={{ padding: "10px 12px", borderRadius: 8, border: `1.5px solid ${color}55`, background: `${color}10`, textAlign: "center" }}>
      <div style={{ fontFamily: MONO, fontSize: "0.66rem", color, letterSpacing: "0.1em", marginBottom: 4, textTransform: "uppercase" }}>
        {label}
      </div>
      <div style={{ fontFamily: MONO, fontSize: "1rem", fontWeight: 800, color: "var(--eng-text)" }}>
        {value}
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
/*  TAB 3 - Real-world platforms                                       */
/* ================================================================== */

const PLATFORMS = [
  { name: "Twitter", strategy: "Hybrid", note: "Push for users with < 1M followers; pull at the read-merge step for celebrities. Documented in their classic engineering blog." },
  { name: "Facebook News Feed", strategy: "Hybrid + ML", note: "Pull candidate posts at read time, run ML ranking. Highly personalized, complex. Rich-content feeds." },
  { name: "Instagram", strategy: "Push (mostly)", note: "Push the full timeline; for very-viral content, supplement at read time." },
  { name: "WhatsApp groups", strategy: "Push to devices", note: "Each member's device is a recipient. Group size cap (~1000) keeps fan-out bounded." },
  { name: "Slack", strategy: "Push via WebSocket", note: "Channel members pushed in real time via persistent WS. Channel size practically capped by latency requirements." },
  { name: "Email newsletters", strategy: "Push (queue)", note: "1M-recipient blast goes through a queue. Workers chew through it over minutes/hours, not real-time." },
];

function Platforms() {
  return (
    <div>
      <h3 style={sectionTitle}>What real platforms do</h3>
      <p style={sectionDesc}>
        The strategy depends on real-time-ness, follower distribution, and personalization
        complexity. Six platforms with their actual approach.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {PLATFORMS.map((p) => (
          <motion.div
            key={p.name}
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } } }}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10 }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 8 }}>
              <span style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.9rem" }}>{p.name}</span>
              <span style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: SD, letterSpacing: "0.06em", padding: "3px 8px", borderRadius: 4, border: `1px solid ${SD}55`, background: `${SD}14`, whiteSpace: "nowrap" }}>
                {p.strategy}
              </span>
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{p.note}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  Activity                                                           */
/* ================================================================== */

export default function SD_L7_FanoutActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "def", label: "Definition", icon: <BookOpen className="w-4 h-4" />, content: <Definition /> },
    { id: "demo", label: "Celebrity Problem", icon: <Megaphone className="w-4 h-4" />, content: <FanoutDemo /> },
    { id: "real", label: "Real Platforms", icon: <Globe className="w-4 h-4" />, content: <Platforms /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Why does pure fan-out-on-write break for celebrity users?",
      options: [
        "It uses too much bandwidth.",
        "One celebrity post = millions of timeline writes. The fan-out service backs up; their followers don't see the post for minutes.",
        "Writes are slower.",
        "Reads fail.",
      ],
      correctIndex: 1,
      explanation: "100M follower × 1 post = 100M writes. The push pipeline becomes the bottleneck. Hybrid avoids this by NOT pre-fanning-out for celebrities — their posts are merged at read time instead.",
    },
    {
      question: "Pull strategy has a fatal weakness for active users with 5,000 followees. What is it?",
      options: [
        "Storage.",
        "Every feed-open queries 5,000 sources and merges. Slow, expensive, and gets worse over time.",
        "It uses too much disk.",
        "Random failures.",
      ],
      correctIndex: 1,
      explanation: "Pull pushes the cost to read time, which is the user-facing path. With many followees, the merge becomes prohibitive. Push is much better here — pre-built timelines are O(1) to read.",
    },
    {
      question: "A 'hybrid' strategy commonly switches to pull above what threshold?",
      options: [
        "1,000 followers.",
        "Often around 1M followers — anything above is treated as a celebrity, pull-merged at read time.",
        "Always pull.",
        "Never pull.",
      ],
      correctIndex: 1,
      explanation: "Twitter's documented threshold has historically been around 1M. The exact number is tunable; the pattern is 'most users push, top few percent pull'.",
    },
    {
      question: "WhatsApp group messages: 1000 members. Best fit for delivery?",
      options: [
        "Pull — each member fetches when they open the chat.",
        "Push — fan out to every member's device queue and notify via APNs/FCM. Group-size cap (~1000) bounds the fan-out.",
        "Hybrid.",
        "Doesn't matter.",
      ],
      correctIndex: 1,
      explanation: "Real-time chat needs push notifications. Group-size limit caps the fan-out at a manageable number. Even an active 1000-member group sends maybe 100-1000 messages/day, so 100k-1M push deliveries — handled comfortably by the device-queue fleet.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Notification Fan-out"
      level={7}
      lessonNumber={6}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The 'design Twitter feed' / 'design notifications' interview answer"
      onQuizComplete={onQuizComplete}
    />
  );
}
