
import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, RotateCcw, ChevronDown, ChevronRight, Lock, Globe, Server, Wifi } from "lucide-react"

interface Phase {
  id: string
  label: string
  detail: string
  color: string
  duration: number // ms (simulated)
  icon: React.ReactNode
}

const PHASES: Phase[] = [
  { id: "dns",  label: "DNS Lookup",        detail: "Browser queries DNS resolver → root → TLD → authoritative. Returns 203.0.113.42 for internhack.xyz. Cached for next 300 s (TTL).", color: "#F59E0B", duration: 42,  icon: <Globe size={10} /> },
  { id: "tcp",  label: "TCP Handshake",     detail: "SYN → SYN-ACK → ACK. Three packets establish the reliable channel before any data moves. Adds one RTT of latency.", color: "#7C3AED", duration: 28,  icon: <Wifi size={10} /> },
  { id: "tls",  label: "TLS 1.3 Handshake",detail: "ClientHello → ServerHello + Certificate → Key exchange. Both sides derive session keys. Only 1 RTT in TLS 1.3 (vs 2 RTT in 1.2). Padlock locked.", color: "#10B981", duration: 35,  icon: <Lock size={10} /> },
  { id: "req",  label: "HTTP GET Request",  detail: "GET /api/modules HTTP/1.1  |  Host: internhack.xyz  |  Accept: application/json  |  Authorization: Bearer …  Encrypted in TLS record.", color: "#2563EB", duration: 8,   icon: <Server size={10} /> },
  { id: "proc", label: "Server Processing", detail: "Server reads DB, builds JSON response. Network I/O + compute. Typical: 5–50 ms for a cached API response.", color: "#8B5CF6", duration: 18,  icon: <Server size={10} /> },
  { id: "res",  label: "HTTP 200 Response", detail: "HTTP/1.1 200 OK  |  Content-Type: application/json  |  Content-Length: 348  |  Body: {\"modules\":[…]}  Decrypted by TLS layer.", color: "#10B981", duration: 12,  icon: <Server size={10} /> },
  { id: "keep", label: "Keep-Alive / Close",detail: "Connection: keep-alive header lets the TCP connection persist for the next request. Avoids paying TCP + TLS handshake cost again (~105 ms saved).", color: "#64748B", duration: 4,   icon: <Wifi size={10} /> },
]

const TOTAL_VISIBLE_MS = PHASES.reduce((s, p) => s + p.duration, 0) // 147

interface Packet { id: number; phase: string; y: number }

export default function Anim6A() {
  const [activePhases, setActivePhases] = useState<number>(-1) // how many phases revealed
  const [running,      setRunning]      = useState(false)
  const [expanded,     setExpanded]     = useState<string | null>(null)
  const [packets,      setPackets]      = useState<Packet[]>([])
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function clearT() { if (timerRef.current) clearTimeout(timerRef.current) }

  function start() {
    clearT()
    setActivePhases(-1)
    setPackets([])
    setExpanded(null)
    setRunning(true)

    let idx = 0
    function next() {
      if (idx >= PHASES.length) { setRunning(false); return }
      setActivePhases(idx)
      const phase = PHASES[idx]
      // animate a packet for req/res phases
      if (phase.id === "req" || phase.id === "res") {
        const pid = Date.now()
        setPackets(prev => [...prev, { id: pid, phase: phase.id, y: phase.id === "req" ? 0 : 1 }])
      }
      idx++
      timerRef.current = setTimeout(next, phase.duration * 18)
    }
    timerRef.current = setTimeout(next, 300)
  }

  function reset() {
    clearT()
    setActivePhases(-1)
    setPackets([])
    setRunning(false)
    setExpanded(null)
  }

  // timeline bar widths
  const barTotal = TOTAL_VISIBLE_MS

  return (
    <div className="bg-[#0F172A] p-5 flex flex-col gap-5 min-h-[460px]">

      {/* controls */}
      <div className="flex items-center gap-2 flex-wrap">
        <button
          disabled={running}
          onClick={start}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-lime-600 hover:bg-lime-500 disabled:opacity-40 text-white rounded-lg text-xs font-semibold transition-colors"
        >
          <Play size={10} /> Trace Request
        </button>
        <button onClick={reset} className="flex items-center gap-1 px-3 py-1.5 bg-[#1E293B] hover:bg-[#334155] text-stone-400 rounded-lg text-xs border border-[#334155] transition-colors">
          <RotateCcw size={10} /> Reset
        </button>
        <span className="text-[10px] text-stone-500 ml-2">Click any phase to expand details</span>
      </div>

      {/* browser + server */}
      <div className="flex justify-between items-start px-4">
        <div className="flex flex-col items-center gap-1">
          <div className="w-14 h-10 rounded-lg bg-[#1E293B] border border-[#334155] flex items-center justify-center">
            <Globe size={16} className="text-blue-400" />
          </div>
          <span className="text-[9px] text-stone-500 font-bold uppercase tracking-wide">Browser</span>
          <span className="text-[8px] text-stone-600 font-mono">internhack.xyz</span>
        </div>

        {/* packet travel lane */}
        <div className="flex-1 mx-4 relative flex items-center h-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-[#1E293B] border-t border-dashed border-[#334155]" />
          </div>
          <AnimatePresence>
            {packets.map(pk => (
              <motion.div
                key={pk.id}
                className="absolute w-4 h-4 rounded-sm text-white flex items-center justify-center text-[7px] font-bold z-10"
                style={{ backgroundColor: pk.phase === "req" ? "#2563EB" : "#10B981", top: "50%", marginTop: -8 }}
                initial={{ left: pk.phase === "req" ? "0%" : "100%" }}
                animate={{ left: pk.phase === "req" ? "100%" : "0%" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {pk.phase === "req" ? "→" : "←"}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="w-14 h-10 rounded-lg bg-[#1E293B] border border-[#334155] flex items-center justify-center">
            <Server size={16} className="text-lime-400" />
          </div>
          <span className="text-[9px] text-stone-500 font-bold uppercase tracking-wide">Server</span>
          <span className="text-[8px] text-stone-600 font-mono">203.0.113.42</span>
        </div>
      </div>

      {/* phase list */}
      <div className="flex flex-col gap-1.5">
        {PHASES.map((ph, i) => {
          const revealed = i <= activePhases
          const isExpanded = expanded === ph.id
          return (
            <motion.div
              key={ph.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: revealed ? 1 : 0.25, x: 0 }}
              transition={{ duration: 0.25 }}
            >
              <button
                onClick={() => revealed && setExpanded(isExpanded ? null : ph.id)}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg border transition-all text-left"
                style={{
                  backgroundColor: revealed ? ph.color + "11" : "transparent",
                  borderColor: revealed ? ph.color + "44" : "#1E293B",
                }}
              >
                <span style={{ color: ph.color }}>{ph.icon}</span>
                <span className="text-[10px] font-semibold flex-1" style={{ color: revealed ? ph.color : "#475569" }}>
                  {ph.label}
                </span>
                <span className="text-[9px] font-mono" style={{ color: revealed ? ph.color + "aa" : "#1E293B" }}>
                  ~{ph.duration} ms
                </span>
                {revealed && (
                  isExpanded ? <ChevronDown size={10} style={{ color: ph.color }} /> : <ChevronRight size={10} style={{ color: ph.color + "88" }} />
                )}
              </button>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="mx-3 mb-1 px-3 py-2 rounded-b-lg border-x border-b text-[10px] text-stone-300 leading-relaxed"
                      style={{ borderColor: ph.color + "33", backgroundColor: ph.color + "08" }}
                    >
                      {ph.detail}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {/* timeline bar */}
      {activePhases >= 0 && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-1.5 pt-3 border-t border-[#334155]"
        >
          <span className="text-[9px] text-stone-500 uppercase tracking-wider font-bold">DevTools Waterfall</span>
          <div className="flex h-5 rounded overflow-hidden">
            {PHASES.slice(0, activePhases + 1).map(ph => (
              <motion.div
                key={ph.id}
                initial={{ width: 0 }}
                animate={{ width: `${(ph.duration / barTotal) * 100}%` }}
                transition={{ duration: 0.3 }}
                className="h-full flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: ph.color }}
                title={`${ph.label}: ~${ph.duration} ms`}
              >
                <span className="text-[7px] text-white/80 font-bold truncate px-0.5">{ph.duration}ms</span>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between text-[8px] text-stone-600 font-mono">
            <span>0 ms</span>
            <span>~{PHASES.slice(0, activePhases + 1).reduce((s, p) => s + p.duration, 0)} ms total</span>
          </div>
        </motion.div>
      )}
    </div>
  )
}
