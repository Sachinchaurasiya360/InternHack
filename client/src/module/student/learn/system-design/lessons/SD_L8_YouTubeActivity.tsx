import { useEffect, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Globe, Pause, Play, RotateCcw, Video } from "lucide-react";
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
/*  TAB 1 - Framework                                                  */
/* ================================================================== */

const STEPS = [
  {
    k: "1. Requirements",
    color: SD,
    items: [
      "Functional: upload video, transcode to multiple bitrates, stream playback worldwide.",
      "Non-functional: playback start time < 2s p95, smooth at any bandwidth, durable storage.",
      "Out of scope: search, recommendations, comments, monetization (each is its own design).",
    ],
  },
  {
    k: "2. Estimation",
    color: WARN,
    items: [
      "500 hours uploaded / minute → ~70 GB raw / minute → ~100 PB / year before transcode.",
      "Transcoded to 6 quality tiers (240p, 360p, 480p, 720p, 1080p, 4K) ≈ 2.5x storage = 250 PB / year.",
      "1B daily watch hours × 5 Mbps avg ≈ 5 Tbps egress sustained, peaks 20 Tbps.",
      "CDN-served: ~99% of bytes are served from edge nodes, not origin.",
    ],
  },
  {
    k: "3. API + Data Model",
    color: PURPLE,
    items: [
      "POST /upload (multipart, chunked) → upload_id",
      "videos(id, owner, title, duration, status, manifest_url, …) — Postgres",
      "playback manifest (HLS / DASH .m3u8) → list of bitrate variants and chunk URLs on the CDN",
      "per-chunk objects on S3-class storage; CDN caches the hot ones",
    ],
  },
  {
    k: "4. High-level Diagram",
    color: SD,
    items: [
      "Upload: client → API → object storage → transcode queue → worker fleet → object storage (per-bitrate) → publish manifest.",
      "Playback: client → CDN edge → if miss, origin → object storage. Adaptive bitrate switches mid-stream as bandwidth changes.",
      "Metadata service serves video objects, view counts, etc., independent of the byte path.",
    ],
  },
];

function FrameworkApplied() {
  return (
    <div>
      <h3 style={sectionTitle}>The 4-step framework, applied to YouTube</h3>
      <p style={sectionDesc}>
        Two distinct paths: the upload + transcode pipeline (write-heavy, batch-friendly) and the
        playback path (read-heavy, latency-critical, almost all from CDN).
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {STEPS.map((s) => (
          <motion.div
            key={s.k}
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
            style={{ padding: "16px 18px", border: `1.5px solid ${s.color}55`, borderRadius: 10, background: `${s.color}08`, display: "flex", flexDirection: "column", gap: 10 }}
          >
            <div style={{ fontFamily: MONO, fontSize: "0.78rem", fontWeight: 800, color: s.color, letterSpacing: "0.04em" }}>
              {s.k.toUpperCase()}
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
              {s.items.map((it, i) => (
                <li key={i} style={{ display: "flex", gap: 8, fontSize: "0.84rem", color: "var(--eng-text)", lineHeight: 1.5 }}>
                  <span style={{ color: s.color, fontWeight: 800 }}>·</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  TAB 2 - Adaptive bitrate playback                                  */
/* ================================================================== */

interface QualityTier { name: string; bitrate: number; needs: number; color: string; }

const TIERS: QualityTier[] = [
  { name: "240p", bitrate: 0.4, needs: 0.6, color: NEUTRAL },
  { name: "360p", bitrate: 0.8, needs: 1.2, color: NEUTRAL },
  { name: "480p", bitrate: 1.5, needs: 2.0, color: SD },
  { name: "720p", bitrate: 3.0, needs: 4.0, color: SD },
  { name: "1080p", bitrate: 5.0, needs: 6.5, color: WARN },
  { name: "4K", bitrate: 16.0, needs: 20.0, color: PURPLE },
];

interface PlayerEvent { t: number; quality: string; reason: string; color: string; }

function ABRPlayer() {
  const [bandwidth, setBandwidth] = useState(8); // Mbps
  const [playing, setPlaying] = useState(false);
  const [currentTier, setCurrentTier] = useState(2); // start at 480p
  const [events, setEvents] = useState<PlayerEvent[]>([]);
  const [t, setT] = useState(0);

  useEffect(() => {
    if (!playing) return;
    const handle = setInterval(() => {
      setT((cur) => {
        const next = cur + 1;
        return next > 60 ? 0 : next;
      });
    }, 250);
    return () => clearInterval(handle);
  }, [playing]);

  // ABR algorithm: pick the highest tier that fits comfortably below current bandwidth
  useEffect(() => {
    const ideal = TIERS.map((tier, i) => ({ i, tier })).filter(({ tier }) => tier.needs <= bandwidth).slice(-1)[0];
    if (!ideal) return;
    if (ideal.i !== currentTier) {
      const up = ideal.i > currentTier;
      setEvents((es) => [...es, {
        t,
        quality: ideal.tier.name,
        reason: up ? `bandwidth ${bandwidth.toFixed(1)} Mbps — upshifting` : `bandwidth ${bandwidth.toFixed(1)} Mbps — downshifting`,
        color: up ? SD : WARN,
      }].slice(-5));
      setCurrentTier(ideal.i);
    }
  }, [bandwidth, t]);

  const reset = () => { setEvents([]); setCurrentTier(2); setT(0); setPlaying(false); };

  const currentT = TIERS[currentTier];

  return (
    <div>
      <h3 style={sectionTitle}>Drag bandwidth. Watch the player downshift / upshift.</h3>
      <p style={sectionDesc}>
        Adaptive Bitrate Streaming (ABR) splits the video into ~4-second chunks. Before each
        chunk, the player measures bandwidth and picks the highest quality that fits. Drop
        bandwidth mid-playback and the next chunk arrives at lower quality — invisibly to
        the user, no buffering.
      </p>

      <div className="mb-5">
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontFamily: MONO, fontSize: "0.72rem", fontWeight: 700, color: "var(--eng-text)" }}>your bandwidth (Mbps)</span>
          <span style={{ fontFamily: MONO, fontSize: "0.78rem", fontWeight: 800, color: bandwidth < 2 ? WARN : SD }}>= {bandwidth.toFixed(1)}</span>
        </div>
        <input
          type="range"
          min={0.3}
          max={25}
          step={0.1}
          value={bandwidth}
          onChange={(e) => setBandwidth(Number(e.target.value))}
          style={{ width: "100%", accentColor: bandwidth < 2 ? WARN : SD }}
        />
      </div>

      <div style={{ background: "#0b1220", borderRadius: 12, border: "1px solid rgba(148,163,184,0.15)", padding: 18 }}>
        {/* video player simulator */}
        <div style={{ position: "relative", aspectRatio: "16 / 9", background: "#000", borderRadius: 8, overflow: "hidden" }}>
          {/* "video" gradient */}
          <motion.div
            animate={{ background: `linear-gradient(135deg, ${currentT.color}33, #0b1220 70%)` }}
            transition={{ duration: 0.4 }}
            style={{ position: "absolute", inset: 0 }}
          />
          {/* quality badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentT.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              style={{
                position: "absolute", top: 12, right: 12,
                fontFamily: MONO, fontSize: "0.86rem", fontWeight: 800,
                padding: "4px 10px", borderRadius: 6,
                background: `${currentT.color}33`, border: `1.5px solid ${currentT.color}`,
                color: currentT.color, letterSpacing: "0.04em",
              }}
            >
              {currentT.name} · {currentT.bitrate} Mbps
            </motion.div>
          </AnimatePresence>
          {/* progress bar */}
          <div style={{ position: "absolute", bottom: 12, left: 12, right: 12 }}>
            <div style={{ height: 4, background: "rgba(255,255,255,0.2)", borderRadius: 2, overflow: "hidden" }}>
              <motion.div animate={{ width: `${(t / 60) * 100}%` }} transition={{ duration: 0.1, ease: "linear" }} style={{ height: "100%", background: SD }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: MONO, fontSize: "0.66rem", color: "rgba(255,255,255,0.6)", marginTop: 4 }}>
              <span>{Math.floor(t / 60).toString().padStart(2, "0")}:{(t % 60).toString().padStart(2, "0")}</span>
              <span>01:00</span>
            </div>
          </div>
        </div>

        {/* tier ladder */}
        <div className="grid grid-cols-6 gap-2 mt-4">
          {TIERS.map((tier, i) => {
            const isActive = i === currentTier;
            const isAvailable = tier.needs <= bandwidth;
            return (
              <motion.div
                key={tier.name}
                animate={{
                  borderColor: isActive ? tier.color : `${tier.color}33`,
                  backgroundColor: isActive ? `${tier.color}22` : "rgba(148,163,184,0.06)",
                  opacity: isAvailable ? 1 : 0.4,
                }}
                style={{ padding: "8px 6px", borderRadius: 6, border: "1.5px solid", textAlign: "center" }}
              >
                <div style={{ fontFamily: MONO, fontSize: "0.78rem", fontWeight: 800, color: isActive ? tier.color : NEUTRAL }}>
                  {tier.name}
                </div>
                <div style={{ fontFamily: MONO, fontSize: "0.6rem", color: NEUTRAL, marginTop: 2 }}>
                  ≥ {tier.needs} Mbps
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex items-center gap-2 mt-5 flex-wrap">
          <motion.button whileTap={{ scale: 0.95 }} onClick={() => setPlaying((p) => !p)} style={btn(SD)}>
            {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {playing ? "pause" : "play"}
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={reset} style={btn(NEUTRAL)}>
            <RotateCcw className="w-3.5 h-3.5" />
            reset
          </motion.button>
        </div>

        {/* event log */}
        <div style={{ marginTop: 12, padding: "10px 14px", background: "rgba(15,23,42,0.6)", borderRadius: 6, fontSize: "0.74rem", color: "#e5e7eb", lineHeight: 1.55 }}>
          <div style={{ fontFamily: MONO, fontSize: "0.66rem", fontWeight: 800, color: NEUTRAL, letterSpacing: "0.12em", marginBottom: 6 }}>
            ABR EVENTS
          </div>
          {events.length === 0 ? (
            <div style={{ fontFamily: MONO, color: NEUTRAL, fontStyle: "italic" }}>
              drag the bandwidth slider to trigger quality changes
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <AnimatePresence>
                {events.map((e, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    style={{ fontFamily: MONO, color: e.color }}
                  >
                    <span style={{ fontWeight: 800 }}>→ {e.quality}</span>
                    <span style={{ color: NEUTRAL, marginLeft: 8 }}>{e.reason}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function btn(color: string): CSSProperties {
  return {
    display: "inline-flex", alignItems: "center", gap: 6,
    padding: "8px 14px", borderRadius: 6, cursor: "pointer",
    border: `1.5px solid ${color}`, background: `${color}18`, color,
    fontFamily: MONO, fontSize: "0.72rem", fontWeight: 700,
    letterSpacing: "0.08em", textTransform: "uppercase",
  };
}

/* ================================================================== */
/*  TAB 3 - Upload pipeline                                            */
/* ================================================================== */

const PIPELINE = [
  { k: "Upload (chunked)", v: "Client splits the file into 5-10 MB parts and uploads in parallel. Resumable on flaky connections (S3 multipart, GCS resumable)." },
  { k: "Validate + accept", v: "Origin storage holds the raw file. Database row created with status=processing. User sees their video in their library immediately." },
  { k: "Queue transcode jobs", v: "Worker fleet pulls from a queue. Each job transcodes to one bitrate using ffmpeg / GPU pipelines. Parallelism ≈ N bitrates × M shards." },
  { k: "Generate manifest", v: "Once all qualities are written to storage, build the .m3u8 / .mpd playlist linking to each chunk per quality." },
  { k: "Distribute to CDN edges", v: "Push to a few popular edge regions immediately. Pull-on-demand for less-popular regions; CDN populates on first cache miss." },
  { k: "Playback ready", v: "Set status=published. The video appears as available; clients can stream from any edge." },
];

function Pipeline() {
  return (
    <div>
      <h3 style={sectionTitle}>From upload to playable in 6 stages</h3>
      <p style={sectionDesc}>
        The upload-to-publish path is mostly batch and asynchronous. The user-facing latency is
        just the upload itself; everything else happens in the background.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        className="grid grid-cols-1 gap-3"
      >
        {PIPELINE.map((p, i) => (
          <motion.div
            key={p.k}
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } } }}
            style={{ padding: "14px 16px", border: "1px solid var(--eng-border)", borderRadius: 10, display: "grid", gridTemplateColumns: "44px 1fr", gap: 14, alignItems: "flex-start" }}
          >
            <div style={{ width: 36, height: 36, borderRadius: 8, background: `${SD}18`, border: `1.5px solid ${SD}55`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: MONO, fontSize: "1rem", fontWeight: 800, color: SD }}>
              {i + 1}
            </div>
            <div>
              <div style={{ fontWeight: 700, color: "var(--eng-text)", fontSize: "0.92rem", marginBottom: 4 }}>{p.k}</div>
              <div style={{ fontSize: "0.84rem", color: "var(--eng-text-muted)", lineHeight: 1.55 }}>{p.v}</div>
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

export default function SD_L8_YouTubeActivity({ onQuizComplete }: { onQuizComplete?: (score: number) => void }) {
  const tabs: EngTabDef[] = [
    { id: "framework", label: "Framework", icon: <BookOpen className="w-4 h-4" />, content: <FrameworkApplied /> },
    { id: "abr", label: "Adaptive Bitrate", icon: <Video className="w-4 h-4" />, content: <ABRPlayer /> },
    { id: "pipeline", label: "Upload Pipeline", icon: <Globe className="w-4 h-4" />, content: <Pipeline /> },
  ];

  const quiz: EngQuizQuestion[] = [
    {
      question: "Why split a video into many short chunks (HLS/DASH) instead of streaming the whole file?",
      options: [
        "Smaller files compress better.",
        "Lets the player switch quality mid-playback by requesting the next chunk at a different bitrate. Also CDN-friendly.",
        "Required by HTTP.",
        "It's faster.",
      ],
      correctIndex: 1,
      explanation: "Chunks decouple the file from the streaming pipe. Each chunk is independently fetched at whatever quality fits current bandwidth. CDN caches them well because they're individual immutable URLs.",
    },
    {
      question: "Why does YouTube precompute 6+ bitrate variants instead of transcoding on demand?",
      options: [
        "Decoration.",
        "Transcoding is CPU-expensive and slow. Doing it once at upload makes playback a dumb byte-fetch from the CDN — millions of viewers, zero re-encoding cost.",
        "Required by HLS.",
        "Saves disk.",
      ],
      correctIndex: 1,
      explanation: "Pre-transcoding is the fundamental scale move: one expensive job per video, then cheap byte-serve to every viewer forever. On-demand transcoding doesn't scale to billions of views.",
    },
    {
      question: "Why is 99% of the byte traffic served from the CDN, not the origin?",
      options: [
        "Random.",
        "CDN edges are physically close to viewers, dramatically lower latency. Origin would saturate at a tiny fraction of YouTube's traffic.",
        "Origin storage is broken.",
        "CDN is free.",
      ],
      correctIndex: 1,
      explanation: "5+ Tbps egress is impossible for any single origin. CDNs distribute the load across hundreds of edge POPs near users. Origin only serves cold-tail content that hasn't reached the edge yet.",
    },
    {
      question: "Why does YouTube's video object store separate from the metadata DB?",
      options: [
        "It doesn't.",
        "Metadata (title, owner, view count) is small + queried often → relational DB. Video bytes are huge + write-once-read-many → object storage / CDN. Different access patterns, different stores.",
        "Required by S3.",
        "Cheaper.",
      ],
      correctIndex: 1,
      explanation: "Putting binary blobs in a relational DB is an anti-pattern at this scale. Metadata stays in a normal indexed DB; video chunks live as flat objects in S3-like storage that's optimized for sequential reads and CDN integration.",
    },
  ];

  return (
    <EngineeringLessonShell
      title="Design YouTube"
      level={8}
      lessonNumber={5}
      tabs={tabs}
      quiz={quiz}
      placementRelevance="The 'design a video streaming service' interview classic"
      onQuizComplete={onQuizComplete}
    />
  );
}
