
import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, RotateCcw, Clock, Zap } from "lucide-react"

interface Node {
  id: string
  label: string
  sublabel: string
  x: number
  y: number
  color: string
}

const NODES: Node[] = [
  { id: "browser",  label: "Browser",            sublabel: "you",              x: 0.08,  y: 0.50, color: "#2563EB" },
  { id: "resolver", label: "Recursive Resolver",  sublabel: "8.8.8.8",          x: 0.32,  y: 0.50, color: "#7C3AED" },
  { id: "root",     label: "Root Nameserver",     sublabel: ". (dot)",          x: 0.56,  y: 0.15, color: "#F59E0B" },
  { id: "tld",      label: "TLD Nameserver",      sublabel: ".in",              x: 0.76,  y: 0.45, color: "#F97316" },
  { id: "auth",     label: "Authoritative NS",    sublabel: "internhack.xyz",    x: 0.56,  y: 0.80, color: "#10B981" },
]

interface Arrow { from: string; to: string; label: string; color: string; dir: "fwd" | "back" }

const STEPS_FIRST: Arrow[] = [
  { from: "browser",  to: "resolver", label: "internhack.xyz?",     color: "#2563EB", dir: "fwd" },
  { from: "resolver", to: "root",     label: "internhack.xyz?",     color: "#7C3AED", dir: "fwd" },
  { from: "root",     to: "resolver", label: "ask .in NS",         color: "#F59E0B", dir: "back" },
  { from: "resolver", to: "tld",      label: "internhack.xyz?",     color: "#7C3AED", dir: "fwd" },
  { from: "tld",      to: "resolver", label: "ask auth NS",        color: "#F97316", dir: "back" },
  { from: "resolver", to: "auth",     label: "internhack.xyz?",     color: "#7C3AED", dir: "fwd" },
  { from: "auth",     to: "resolver", label: "A=203.0.113.42",     color: "#10B981", dir: "back" },
  { from: "resolver", to: "browser",  label: "203.0.113.42 (TTL=300s)", color: "#10B981", dir: "back" },
]

const STEPS_CACHED: Arrow[] = [
  { from: "browser",  to: "resolver", label: "internhack.xyz?",     color: "#2563EB", dir: "fwd" },
  { from: "resolver", to: "browser",  label: "203.0.113.42 (cached!)", color: "#10B981", dir: "back" },
]

export default function Anim6B() {
  const [arrows,    setArrows]   = useState<Arrow[]>([])
  const [, setCurrent]  = useState(-1)
  const [running,   setRunning]  = useState(false)
  const [mode,      setMode]     = useState<"first" | "cached">("first")
  const [ttl,       setTtl]      = useState(300)
  const [resolved,  setResolved] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function clearT() { if (timerRef.current) clearTimeout(timerRef.current) }

  function run(steps: Arrow[]) {
    clearT()
    setArrows([])
    setCurrent(-1)
    setResolved(false)
    setRunning(true)

    let i = 0
    function next() {
      if (i >= steps.length) { setRunning(false); setResolved(true); return }
      setCurrent(i)
      setArrows(prev => [...prev, steps[i]])
      i++
      timerRef.current = setTimeout(next, 700)
    }
    timerRef.current = setTimeout(next, 300)
  }

  function reset() {
    clearT()
    setArrows([])
    setCurrent(-1)
    setRunning(false)
    setResolved(false)
  }

  function switchMode(m: "first" | "cached") {
    reset()
    setMode(m)
  }

  // SVG layout
  const W = 500, H = 220

  function nodePos(id: string) {
    const n = NODES.find(x => x.id === id)!
    return { x: n.x * W, y: n.y * H }
  }

  return (
    <div className="bg-[#0F172A] p-5 flex flex-col gap-4 min-h-[420px]">

      {/* controls */}
      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex rounded-lg overflow-hidden border border-[#334155]">
          {(["first", "cached"] as const).map(m => (
            <button key={m} onClick={() => switchMode(m)}
              className="px-3 py-1.5 text-xs font-semibold transition-colors"
              style={{ backgroundColor: mode === m ? "#7C3AED" : "transparent", color: mode === m ? "#fff" : "#64748B" }}
            >
              {m === "first" ? "First Lookup" : "Cache Hit"}
            </button>
          ))}
        </div>
        <button disabled={running} onClick={() => run(mode === "first" ? STEPS_FIRST : STEPS_CACHED)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-lime-600 hover:bg-lime-500 disabled:opacity-40 text-white rounded-lg text-xs font-semibold transition-colors"
        >
          <Play size={10} /> Resolve
        </button>
        <button onClick={reset} className="flex items-center gap-1 px-3 py-1.5 bg-[#1E293B] hover:bg-[#334155] text-stone-400 rounded-lg text-xs border border-[#334155] transition-colors">
          <RotateCcw size={10} />
        </button>
        <div className="ml-auto flex items-center gap-2">
          <Clock size={10} className="text-amber-400" />
          <span className="text-[9px] text-stone-400">TTL:</span>
          <input type="range" min={10} max={3600} value={ttl} onChange={e => setTtl(+e.target.value)}
            className="w-20 accent-amber-500" />
          <span className="text-[9px] text-amber-300 font-mono w-14">{ttl}s</span>
        </div>
      </div>

      {ttl < 60 && (
        <div className="text-[9px] text-amber-300 bg-amber-900/20 border border-amber-700/30 rounded-lg px-3 py-1.5">
          Short TTL = every client re-queries authoritative NS frequently. Good for failover, bad for latency.
        </div>
      )}
      {ttl > 1800 && (
        <div className="text-[9px] text-blue-300 bg-blue-900/20 border border-blue-700/30 rounded-lg px-3 py-1.5">
          Long TTL = resolvers cache for hours. Low query load, but DNS changes propagate slowly.
        </div>
      )}

      {/* diagram */}
      <div className="flex-1">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ minHeight: 180 }}>

          {/* draw edges (arrows) */}
          {arrows.map((a, i) => {
            const from = nodePos(a.from)
            const to   = nodePos(a.to)
            const mx   = (from.x + to.x) / 2
            const my   = (from.y + to.y) / 2
            const isLast = i === arrows.length - 1
            return (
              <g key={i}>
                <motion.line
                  x1={from.x} y1={from.y} x2={to.x} y2={to.y}
                  stroke={a.color}
                  strokeWidth={isLast ? "2" : "1"}
                  strokeOpacity={isLast ? 1 : 0.35}
                  strokeDasharray={a.dir === "back" ? "5 3" : "none"}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <text x={mx} y={my - 5} textAnchor="middle" fill={a.color} fontSize="7" opacity={isLast ? 1 : 0.4}>
                  {a.label}
                </text>
                {/* hop number */}
                <text x={mx - 12} y={my + 10} textAnchor="middle" fill="#475569" fontSize="7">
                  {i + 1}
                </text>
              </g>
            )
          })}

          {/* nodes */}
          {NODES.map(n => {
            const cx = n.x * W
            const cy = n.y * H
            const isActive = arrows.some(a => a.from === n.id || a.to === n.id)
            return (
              <g key={n.id}>
                <motion.circle
                  cx={cx} cy={cy} r={18}
                  fill={isActive ? n.color + "22" : "#1E293B"}
                  stroke={n.color}
                  strokeWidth={isActive ? "2" : "1"}
                  strokeOpacity={isActive ? 1 : 0.4}
                  animate={{ r: isActive ? 20 : 18 }}
                  transition={{ duration: 0.2 }}
                />
                <text x={cx} y={cy + 3} textAnchor="middle" fill={isActive ? n.color : "#475569"} fontSize="8" fontWeight="bold">
                  {n.id === "resolver" ? "Resolver" : n.id === "browser" ? "You" : n.id.toUpperCase()}
                </text>
                <text x={cx} y={cy + 28} textAnchor="middle" fill="#475569" fontSize="7">{n.label}</text>
                <text x={cx} y={cy + 37} textAnchor="middle" fill={n.color + "88"} fontSize="6">{n.sublabel}</text>
              </g>
            )
          })}
        </svg>
      </div>

      {/* result */}
      <AnimatePresence>
        {resolved && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-between px-3 py-2 bg-emerald-900/30 border border-emerald-700/40 rounded-xl"
          >
            <span className="text-[10px] text-emerald-300 flex items-center gap-1">
              {mode === "first"
                ? `✓ Resolved in ${STEPS_FIRST.length} hops  ~50–200 ms uncached. Cached for ${ttl}s.`
                : <><Zap size={10} />Cache hit! Resolved in 2 hops  &lt;5 ms. TTL remaining: {ttl}s.</>}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
