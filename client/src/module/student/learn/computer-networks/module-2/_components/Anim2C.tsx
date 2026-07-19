
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Monitor, Server, Play, RotateCcw, Lock } from "lucide-react"

// ── Each arrow represents one phase of the HTTP request lifecycle ─────────────
const STEPS: {
  dir:   "right" | "left"
  label: string
  layer: string
  color: string
  info:  string
}[] = [
  { dir:"right", label:"DNS Query",          layer:"L7 App / UDP",  color:"#A78BFA", info:"Resolves pandalearn.in → 203.0.113.42 via recursive DNS lookup" },
  { dir:"left",  label:"DNS Response",       layer:"L7 App / UDP",  color:"#A78BFA", info:"Authoritative NS replies: A record 203.0.113.42, TTL 300 s" },
  { dir:"right", label:"TCP SYN",            layer:"L4 Transport",  color:"#F59E0B", info:"Client initiates connection: seq=1000, flags=SYN" },
  { dir:"left",  label:"TCP SYN-ACK",        layer:"L4 Transport",  color:"#F59E0B", info:"Server responds: seq=5000, ack=1001, flags=SYN-ACK" },
  { dir:"right", label:"TCP ACK",            layer:"L4 Transport",  color:"#F59E0B", info:"Client confirms: ack=5001. 3-way handshake complete ✓" },
  { dir:"right", label:"TLS ClientHello",    layer:"L6 Presentation",color:"#8B5CF6", info:"TLS 1.3 handshake begins  cipher suites & key share offered" },
  { dir:"left",  label:"TLS ServerHello",    layer:"L6 Presentation",color:"#8B5CF6", info:"Server selects cipher, sends certificate. 1-RTT handshake." },
  { dir:"right", label:"GET /api/modules",   layer:"L7 HTTP",       color:"#7C3AED", info:"HTTP/1.1 GET  headers: Host, Accept, Authorization: Bearer …" },
  { dir:"left",  label:"HTTP 200 OK",        layer:"L7 HTTP",       color:"#10B981", info:"Response: Content-Type: application/json, 348 bytes, keep-alive" },
]

export default function Anim2C() {
  const [phase,   setPhase]   = useState(0)     // 0 = idle, 1..N = steps revealed
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return
    if (phase >= STEPS.length) { setRunning(false); return }
    const t = setTimeout(() => setPhase(p => p + 1), 1100)
    return () => clearTimeout(t)
  }, [running, phase])

  function start() { setPhase(1); setRunning(true) }
  function reset() { setPhase(0); setRunning(false) }

  const serverLit = phase >= 7

  return (
    <div className="bg-[#0F172A] p-5 min-h-[400px] flex flex-col gap-5">

      {/* ── URL bar + controls ── */}
      <div className="flex items-center gap-2">
        <div className="flex-1 flex items-center gap-2 bg-[#1E293B] rounded-lg px-3 py-2 border border-[#334155]">
          <Lock size={11} className="text-emerald-400 shrink-0" />
          <span className="text-stone-300 text-xs font-mono">https://pandalearn.in/api/modules</span>
        </div>

        {phase === 0 ? (
          <button
            onClick={start}
            className="flex items-center gap-1.5 px-3 py-2 bg-lime-600 hover:bg-lime-500 text-stone-900 rounded-lg text-xs font-semibold transition-colors shrink-0"
          >
            <Play size={11} /> Trace Request
          </button>
        ) : (
          <button
            onClick={reset}
            className="flex items-center gap-1.5 px-3 py-2 bg-[#1E293B] hover:bg-[#334155] text-stone-400 rounded-lg text-xs transition-colors border border-[#334155] shrink-0"
          >
            <RotateCcw size={11} /> Reset
          </button>
        )}
      </div>

      {/* ── main trace area ── */}
      <div className="flex gap-3 flex-1">

        {/* Browser */}
        <div className="flex flex-col items-center gap-1.5 w-16 shrink-0 pt-1">
          <motion.div
            animate={{
              borderColor: running ? "#7C3AED" : "#334155",
              backgroundColor: running ? "#3B0764" : "#1E293B",
            }}
            transition={{ duration: 0.3 }}
            className="w-14 h-14 rounded-xl border-2 flex items-center justify-center"
          >
            <Monitor size={22} className={running ? "text-lime-300" : "text-stone-500"} />
          </motion.div>
          <span className="text-[9px] text-stone-500 font-medium">Browser</span>
          <span className="text-[9px] text-stone-600 font-mono">192.168.1.10</span>
        </div>

        {/* Arrow timeline */}
        <div className="flex-1 flex flex-col gap-2.5 justify-start pt-1 min-w-0">
          {phase === 0 && (
            <p className="text-xs text-stone-500 text-center mt-6">
              Click "Trace Request" to see a full HTTP request step-by-step
            </p>
          )}

          <AnimatePresence initial={false}>
            {STEPS.slice(0, phase).map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col gap-0.5"
              >
                {/* arrow row */}
                <div className="flex items-center gap-1.5">
                  {s.dir === "left" && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.4 }}
                      style={{ originX: "right" as const, backgroundColor: s.color }}
                      className="flex-1 h-px"
                    />
                  )}
                  <span
                    className="text-[9px] font-bold px-2 py-0.5 rounded text-white whitespace-nowrap shrink-0"
                    style={{ backgroundColor: s.color }}
                  >
                    {s.dir === "left" && "← "}{s.label}{s.dir === "right" && " →"}
                  </span>
                  {s.dir === "right" && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.4 }}
                      style={{ originX: "left" as const, backgroundColor: s.color }}
                      className="flex-1 h-px"
                    />
                  )}
                </div>

                {/* layer + description */}
                <div className="flex items-center gap-1.5 px-0.5">
                  <span
                    className="text-[8px] font-mono font-bold px-1.5 py-px rounded border shrink-0"
                    style={{ color: s.color, borderColor: s.color + "55", backgroundColor: s.color + "15" }}
                  >
                    {s.layer}
                  </span>
                  <span className="text-[9px] text-stone-500 truncate">{s.info}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* "processing" indicator */}
          {running && phase >= 8 && phase < STEPS.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-[9px] text-stone-500"
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-amber-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
              Server processing request…
            </motion.div>
          )}

          {/* complete banner */}
          {phase >= STEPS.length && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 bg-emerald-900/30 border border-emerald-700/40 rounded-lg px-3 py-2"
            >
              <span className="text-emerald-400 text-xs">✓</span>
              <span className="text-xs text-emerald-300 font-semibold">
                Request complete  {STEPS.length} steps, ~120 ms total
              </span>
            </motion.div>
          )}
        </div>

        {/* Server */}
        <div className="flex flex-col items-center gap-1.5 w-16 shrink-0 pt-1">
          <motion.div
            animate={{
              borderColor: serverLit ? "#10B981" : "#334155",
              backgroundColor: serverLit ? "#064E3B" : "#1E293B",
            }}
            transition={{ duration: 0.3 }}
            className="w-14 h-14 rounded-xl border-2 flex items-center justify-center"
          >
            <Server size={22} className={serverLit ? "text-emerald-300" : "text-stone-500"} />
          </motion.div>
          <span className="text-[9px] text-stone-500 font-medium">Server</span>
          <span className="text-[9px] text-stone-600 font-mono">203.0.113.42</span>
        </div>
      </div>
    </div>
  )
}
