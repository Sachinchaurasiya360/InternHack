import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Model   = "cs" | "p2p"
type CsPhase = "idle" | "request" | "respond"

// ── Layout ────────────────────────────────────────────────────────────────────
const W = 400, H = 340
const SRV = { x: W / 2, y: H / 2 - 10 }
const ORBIT = 118

const CLIENTS = [
  { id: 0, label: "Client A", x: SRV.x,          y: SRV.y - ORBIT },
  { id: 1, label: "Client B", x: SRV.x + ORBIT,  y: SRV.y         },
  { id: 2, label: "Client C", x: SRV.x,          y: SRV.y + ORBIT },
  { id: 3, label: "Client D", x: SRV.x - ORBIT,  y: SRV.y         },
]

const PEERS = [
  { id: 0, label: "Peer A", x: 200, y: 52  },
  { id: 1, label: "Peer B", x: 333, y: 148 },
  { id: 2, label: "Peer C", x: 282, y: 302 },
  { id: 3, label: "Peer D", x: 118, y: 302 },
  { id: 4, label: "Peer E", x: 67,  y: 148 },
]

const P2P_EDGES: [number, number][] = [
  [0,1],[0,2],[0,3],[0,4],
  [1,2],[1,3],[1,4],
  [2,3],[2,4],
  [3,4],
]

const ACTIVE_SETS: [number, number][][] = [
  [[0,1],[2,4]],
  [[1,3],[0,2]],
  [[0,4],[1,2]],
  [[2,3],[0,1]],
  [[3,4],[0,3]],
]

const INFO = {
  cs: {
    name: "Client – Server",
    desc: "Clients initiate requests; a central server responds. Easy to manage and scale with load balancing.",
    pros: ["Centralised control", "Easy to upgrade server", "Load balancing possible"],
    cons: ["Server is a single point of failure", "Bottleneck under heavy load"],
    examples: "HTTP, DNS, SMTP",
  },
  p2p: {
    name: "Peer-to-Peer",
    desc: "Every node acts as both client and server simultaneously. No central authority.",
    pros: ["No single point of failure", "Scales organically", "Resilient by design"],
    cons: ["Harder to manage & secure", "Inconsistent performance"],
    examples: "BitTorrent, WebRTC, Blockchain",
  },
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function Anim1D() {
  const [model,        setModel]        = useState<Model>("cs")
  const [activeClient, setActiveClient] = useState(0)
  const [csPhase,      setCsPhase]      = useState<CsPhase>("idle")
  const [p2pSet,       setP2pSet]       = useState(0)
  const [reqCount,     setReqCount]     = useState(0)

  // reset on model switch
  useEffect(() => {
    setCsPhase("idle")
    setActiveClient(0)
  }, [model])

  // CS state machine: idle → request → respond → (next client) → idle …
  useEffect(() => {
    if (model !== "cs") return
    const delays: Record<CsPhase, number> = { idle: 550, request: 950, respond: 950 }
    const next: Record<CsPhase, () => void> = {
      idle:    () => setCsPhase("request"),
      request: () => setCsPhase("respond"),
      respond: () => {
        setReqCount(n => n + 1)
        setActiveClient(c => (c + 1) % CLIENTS.length)
        setCsPhase("idle")
      },
    }
    const t = setTimeout(next[csPhase], delays[csPhase])
    return () => clearTimeout(t)
  }, [model, csPhase])

  // P2P: rotate active communication pairs
  useEffect(() => {
    if (model !== "p2p") return
    const t = setInterval(() => setP2pSet(s => (s + 1) % ACTIVE_SETS.length), 1400)
    return () => clearInterval(t)
  }, [model])

  const info      = INFO[model]
  const client    = CLIENTS[activeClient]
  const activeSet = ACTIVE_SETS[p2pSet]

  return (
    <div className="grid md:grid-cols-[1fr_220px] min-h-95">

      {/* ── SVG canvas ── */}
      <div className="relative bg-[#0F172A] flex items-center justify-center min-h-80">
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="grid-d" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#475569" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-d)" />
        </svg>

        <AnimatePresence mode="wait">

          {/* ── Client-Server view ── */}
          {model === "cs" && (
            <motion.svg
              key="cs"
              viewBox={`0 0 ${W} ${H}`}
              className="relative z-10 w-full max-w-[340px]"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* spoke lines */}
              {CLIENTS.map(c => (
                <line key={c.id}
                  x1={SRV.x} y1={SRV.y} x2={c.x} y2={c.y}
                  stroke="#1E293B" strokeWidth={2}
                />
              ))}

              {/* traveling packet */}
              <AnimatePresence>
                {csPhase === "request" && (
                  <motion.circle
                    key={`req-${activeClient}-${reqCount}`}
                    r={7} fill="#84CC16"
                    initial={{ cx: client.x, cy: client.y }}
                    animate={{ cx: SRV.x, cy: SRV.y }}
                    transition={{ duration: 0.85, ease: "easeInOut" }}
                  />
                )}
                {csPhase === "respond" && (
                  <motion.circle
                    key={`res-${activeClient}-${reqCount}`}
                    r={7} fill="#10B981"
                    initial={{ cx: SRV.x, cy: SRV.y }}
                    animate={{ cx: client.x, cy: client.y }}
                    transition={{ duration: 0.85, ease: "easeInOut" }}
                  />
                )}
              </AnimatePresence>

              {/* server */}
              <motion.circle
                cx={SRV.x} cy={SRV.y} r={30}
                fill="#1E293B"
                stroke={csPhase === "respond" ? "#84CC16" : "#334155"}
                strokeWidth={csPhase === "respond" ? 3 : 2}
                animate={{ stroke: csPhase === "respond" ? "#84CC16" : "#334155" }}
                transition={{ duration: 0.2 }}
              />
              {csPhase === "respond" && (
                <motion.circle cx={SRV.x} cy={SRV.y} r={30}
                  fill="none" stroke="#84CC16" strokeWidth={2}
                  animate={{ r: [30, 48, 30], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 0.7 }}
                />
              )}
              <text x={SRV.x} y={SRV.y} textAnchor="middle" fill="#E2E8F0"
                fontSize={9} fontWeight="bold" dominantBaseline="middle">
                SERVER
              </text>

              {/* client nodes */}
              {CLIENTS.map(c => {
                const isActive    = c.id === activeClient
                const isReceiving = isActive && csPhase === "respond"
                return (
                  <g key={c.id}>
                    <motion.circle
                      cx={c.x} cy={c.y} r={20}
                      fill={isActive ? "#1E3A5F" : "#1E293B"}
                      stroke={isActive ? "#3B82F6" : "#334155"}
                      strokeWidth={isActive ? 2.5 : 1.5}
                      animate={{ stroke: isActive ? "#3B82F6" : "#334155" }}
                      transition={{ duration: 0.3 }}
                    />
                    {isReceiving && (
                      <motion.circle cx={c.x} cy={c.y} r={20}
                        fill="none" stroke="#10B981" strokeWidth={2}
                        animate={{ r: [20, 32, 20], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 0.5 }}
                      />
                    )}
                    <text x={c.x} y={c.y} textAnchor="middle" fill="#94A3B8"
                      fontSize={8} dominantBaseline="middle">
                      {c.label}
                    </text>
                  </g>
                )
              })}
            </motion.svg>
          )}

          {/* ── P2P view ── */}
          {model === "p2p" && (
            <motion.svg
              key="p2p"
              viewBox="0 0 400 360"
              className="relative z-10 w-full max-w-[340px]"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* all mesh edges */}
              {P2P_EDGES.map(([a, b]) => {
                const na = PEERS[a], nb = PEERS[b]
                const active = activeSet.some(([x, y]) => (x===a&&y===b)||(x===b&&y===a))
                return (
                  <motion.line key={`${a}-${b}`}
                    x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                    animate={{ stroke: active ? "#84CC16" : "#1E293B", opacity: active ? 0.9 : 0.35 }}
                    transition={{ duration: 0.35 }}
                  />
                )
              })}

              {/* animated packets on active pairs */}
              {activeSet.map(([a, b], idx) => {
                const na = PEERS[a], nb = PEERS[b]
                return (
                  <g key={`pair-${p2pSet}-${idx}`}>
                    <motion.circle r={5} fill="#84CC16"
                      initial={{ cx: na.x, cy: na.y }}
                      animate={{ cx: nb.x, cy: nb.y }}
                      transition={{ duration: 1.1, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
                    />
                    <motion.circle r={5} fill="#10B981"
                      initial={{ cx: nb.x, cy: nb.y }}
                      animate={{ cx: na.x, cy: na.y }}
                      transition={{ duration: 1.1, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
                    />
                  </g>
                )
              })}

              {/* peer nodes */}
              {PEERS.map(p => {
                const active = activeSet.some(([a, b]) => a === p.id || b === p.id)
                return (
                  <g key={p.id}>
                    <motion.circle
                      cx={p.x} cy={p.y} r={22}
                      fill={active ? "#1E3A5F" : "#1E293B"}
                      animate={{ stroke: active ? "#84CC16" : "#334155" }}
                      strokeWidth={active ? 2.5 : 1.5}
                      transition={{ duration: 0.35 }}
                    />
                    <text x={p.x} y={p.y} textAnchor="middle" fill="#94A3B8"
                      fontSize={8} dominantBaseline="middle">
                      {p.label}
                    </text>
                  </g>
                )
              })}
            </motion.svg>
          )}

        </AnimatePresence>
      </div>

      {/* ── info panel ── */}
      <div className="bg-white border-l border-stone-200 p-5 flex flex-col gap-4">

        {/* model toggle */}
        <div className="flex rounded-lg bg-stone-100 p-0.5 gap-0.5">
          {(["cs", "p2p"] as Model[]).map(m => (
            <button key={m} onClick={() => setModel(m)}
              className={`flex-1 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                model === m ? "bg-white text-lime-700 shadow-sm" : "text-stone-500 hover:text-stone-700"
              }`}
            >
              {m === "cs" ? "Client–Server" : "P2P"}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={model}
            initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3 flex-1"
          >
            <div>
              <h3 className="font-display font-bold text-stone-900 text-sm">{info.name}</h3>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">{info.desc}</p>
            </div>

            <div>
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-1.5">Pros</p>
              <ul className="space-y-1">
                {info.pros.map(p => (
                  <li key={p} className="text-xs text-stone-600 flex items-start gap-1.5">
                    <span className="text-emerald-500 shrink-0 mt-px">+</span>{p}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[10px] font-bold text-rose-500 uppercase tracking-wider mb-1.5">Cons</p>
              <ul className="space-y-1">
                {info.cons.map(c => (
                  <li key={c} className="text-xs text-stone-600 flex items-start gap-1.5">
                    <span className="text-rose-400 shrink-0 mt-px">−</span>{c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-stone-100 pt-3">
              <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Examples</p>
              <p className="text-xs text-lime-600 font-mono">{info.examples}</p>
            </div>

            {model === "cs" && (
              <div className="bg-lime-50 rounded-xl px-4 py-3 mt-auto">
                <p className="text-[10px] font-bold text-lime-400 uppercase tracking-wider">Requests served</p>
                <motion.p
                  key={reqCount}
                  initial={{ scale: 1.3, color: "#7C3AED" }}
                  animate={{ scale: 1,   color: "#5B21B6" }}
                  className="text-2xl font-bold font-display"
                >
                  {reqCount}
                </motion.p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
