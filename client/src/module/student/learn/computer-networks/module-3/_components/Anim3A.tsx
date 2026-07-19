
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RotateCcw, Play } from "lucide-react"

const HOSTS = [
  { id: "A", label: "Host A", ip: "192.168.1.1", mac: "AA:BB:CC:11:22:33", x: 60,  y: 80 },
  { id: "B", label: "Host B", ip: "192.168.1.5", mac: "AA:BB:CC:DD:EE:FF", x: 280, y: 30 },
  { id: "C", label: "Host C", ip: "192.168.1.8", mac: "11:22:33:44:55:66", x: 280, y: 130 },
  { id: "D", label: "Host D", ip: "192.168.1.9", mac: "AB:CD:EF:01:23:45", x: 280, y: 230 },
]
const SWITCH = { x: 170, y: 140 }

// Phase states
type Phase = "idle" | "request" | "notme" | "reply" | "cache" | "done" | "cachehit"

export default function Anim3A() {
  const [phase, setPhase]   = useState<Phase>("idle")
  const [arpCache, setArpCache] = useState<{ ip: string; mac: string } | null>(null)
  const [replayCount, setReplayCount] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function clearT() { if (timerRef.current) clearTimeout(timerRef.current) }

  function run(cacheHit: boolean) {
    clearT()
    if (cacheHit && arpCache) {
      setPhase("cachehit")
      timerRef.current = setTimeout(() => setPhase("done"), 1800)
      return
    }
    setPhase("request")
    timerRef.current = setTimeout(() => {
      setPhase("notme")
      timerRef.current = setTimeout(() => {
        setPhase("reply")
        timerRef.current = setTimeout(() => {
          setPhase("cache")
          setArpCache({ ip: "192.168.1.5", mac: "AA:BB:CC:DD:EE:FF" })
          timerRef.current = setTimeout(() => setPhase("done"), 1200)
        }, 1600)
      }, 1200)
    }, 1800)
  }

  function reset() {
    clearT()
    setPhase("idle")
    setArpCache(null)
    setReplayCount(0)
  }

  useEffect(() => () => clearT(), [])

  const showBroadcast = phase === "request" || phase === "notme"
  const showReply     = phase === "reply"
  const showCacheHit  = phase === "cachehit"
  const isDone        = phase === "done"

  return (
    <div className="bg-[#0F172A] min-h-[400px] p-5 flex flex-col gap-4">

      {/* controls */}
      <div className="flex items-center gap-2 flex-wrap">
        <button
          disabled={phase !== "idle" && phase !== "done"}
          onClick={() => { setReplayCount(0); run(false) }}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-lime-600 hover:bg-lime-500 disabled:opacity-40 text-white rounded-lg text-xs font-semibold transition-colors"
        >
          <Play size={10} /> Send ARP Request
        </button>
        {isDone && arpCache && (
          <button
            onClick={() => { setReplayCount(c => c + 1); run(true) }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-xs font-semibold transition-colors"
          >
            <RotateCcw size={10} /> Replay (cache hit)
          </button>
        )}
        <button
          onClick={reset}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1E293B] hover:bg-[#334155] text-stone-400 rounded-lg text-xs transition-colors border border-[#334155]"
        >
          <RotateCcw size={10} /> Reset
        </button>

        <span className="ml-auto text-[10px] text-stone-500">
          {phase === "request" && "Broadcasting ARP request…"}
          {phase === "notme"   && "Hosts B, C, D receive  only B has that IP"}
          {phase === "reply"   && "Host B replies unicast to Host A"}
          {phase === "cache"   && "Host A caches the MAC address"}
          {phase === "cachehit"&& "Cache hit  no broadcast needed!"}
          {phase === "done"    && "ARP complete"}
        </span>
      </div>

      {/* diagram + info */}
      <div className="flex gap-4 flex-1 min-h-0">

        {/* SVG canvas */}
        <div className="flex-1 relative">
          <svg viewBox="0 0 360 280" className="w-full h-full" style={{ minHeight: 240 }}>

            {/* links host→switch */}
            {HOSTS.map(h => (
              <line
                key={h.id}
                x1={h.x + 20} y1={h.y + 16}
                x2={SWITCH.x} y2={SWITCH.y}
                stroke="#334155" strokeWidth="1.5"
              />
            ))}

            {/* switch */}
            <rect x={SWITCH.x - 22} y={SWITCH.y - 12} width={44} height={24} rx={4} fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
            <text x={SWITCH.x} y={SWITCH.y + 5} textAnchor="middle" fill="#94A3B8" fontSize="8" fontWeight="bold">SW</text>

            {/* broadcast rays from switch to non-A hosts */}
            {showBroadcast && ["B","C","D"].map(id => {
              const h = HOSTS.find(x => x.id === id)!
              return (
                <motion.line
                  key={id}
                  x1={SWITCH.x} y1={SWITCH.y}
                  x2={h.x + 20} y2={h.y + 16}
                  stroke="#F59E0B"
                  strokeWidth="2"
                  strokeDasharray="5 3"
                  initial={{ pathLength: 0, opacity: 1 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              )
            })}

            {/* broadcast from A to switch */}
            {showBroadcast && (
              <motion.line
                x1={HOSTS[0].x + 20} y1={HOSTS[0].y + 16}
                x2={SWITCH.x} y2={SWITCH.y}
                stroke="#F59E0B" strokeWidth="2" strokeDasharray="5 3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            )}

            {/* broadcast label */}
            {showBroadcast && (
              <motion.text
                x={120} y={170} textAnchor="middle" fill="#F59E0B" fontSize="8" fontWeight="bold"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              >
                Who has 192.168.1.5?
              </motion.text>
            )}

            {/* "not me" badges on C and D */}
            {phase === "notme" && ["C","D"].map(id => {
              const h = HOSTS.find(x => x.id === id)!
              return (
                <motion.text
                  key={id}
                  x={h.x + 20} y={h.y - 6}
                  textAnchor="middle" fill="#64748B" fontSize="7"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                >
                  not me
                </motion.text>
              )
            })}

            {/* unicast reply B→A */}
            {showReply && (
              <>
                <motion.line
                  x1={HOSTS[1].x + 20} y1={HOSTS[1].y + 16}
                  x2={SWITCH.x} y2={SWITCH.y}
                  stroke="#7C3AED" strokeWidth="2"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.line
                  x1={SWITCH.x} y1={SWITCH.y}
                  x2={HOSTS[0].x + 20} y2={HOSTS[0].y + 16}
                  stroke="#7C3AED" strokeWidth="2"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                />
                <motion.text
                  x={120} y={170} textAnchor="middle" fill="#7C3AED" fontSize="8" fontWeight="bold"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                >
                  192.168.1.5 is at AA:BB:CC:DD:EE:FF
                </motion.text>
              </>
            )}

            {/* cache hit path A directly (no broadcast) */}
            {showCacheHit && (
              <motion.text
                x={120} y={170} textAnchor="middle" fill="#10B981" fontSize="8" fontWeight="bold"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              >
                Cache hit! No broadcast sent.
              </motion.text>
            )}

            {/* hosts */}
            {HOSTS.map(h => {
              const isActive = phase === "reply" && h.id === "B"
              const isNotMe  = phase === "notme" && (h.id === "C" || h.id === "D")
              const isSender = h.id === "A"
              return (
                <g key={h.id}>
                  <rect
                    x={h.x} y={h.y} width={40} height={32} rx={6}
                    fill={isActive ? "#1E1B4B" : isSender ? "#3B0764" : "#1E293B"}
                    stroke={isActive ? "#7C3AED" : isSender && showBroadcast ? "#F59E0B" : "#334155"}
                    strokeWidth="1.5"
                  />
                  <text x={h.x + 20} y={h.y + 13} textAnchor="middle" fill={isNotMe ? "#475569" : "#E2E8F0"} fontSize="8" fontWeight="bold">{h.label}</text>
                  <text x={h.x + 20} y={h.y + 24} textAnchor="middle" fill="#64748B" fontSize="6.5">{h.ip}</text>
                </g>
              )
            })}
          </svg>
        </div>

        {/* info / arp cache panel */}
        <div className="w-48 shrink-0 flex flex-col gap-3">
          <div className="bg-[#1E293B] rounded-xl p-3 border border-[#334155]">
            <p className="text-[9px] font-bold text-stone-400 uppercase tracking-wider mb-2">ARP Cache  Host A</p>
            <AnimatePresence>
              {arpCache ? (
                <motion.div
                  key="entry"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col gap-0.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] text-stone-400">IP</span>
                    <span className="text-[9px] font-mono text-lime-300">{arpCache.ip}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] text-stone-400">MAC</span>
                    <span className="text-[9px] font-mono text-emerald-300">{arpCache.mac}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] text-stone-400">TTL</span>
                    <span className="text-[9px] font-mono text-amber-300">300s</span>
                  </div>
                </motion.div>
              ) : (
                <p className="text-[9px] text-stone-600 italic">empty</p>
              )}
            </AnimatePresence>
          </div>

          <div className="bg-[#1E293B] rounded-xl p-3 border border-[#334155] flex-1">
            <p className="text-[9px] font-bold text-stone-400 uppercase tracking-wider mb-2">Legend</p>
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-0.5 bg-amber-400" style={{ borderTop: "2px dashed #F59E0B" }} />
                <span className="text-[9px] text-stone-400">Broadcast frame</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-0.5 bg-lime-500" />
                <span className="text-[9px] text-stone-400">Unicast reply</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-0.5 bg-emerald-500" />
                <span className="text-[9px] text-stone-400">Cache hit</span>
              </div>
            </div>
            {replayCount > 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[9px] text-emerald-400 mt-3 leading-relaxed"
              >
                Second lookup skips the broadcast  the MAC is already cached.
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
