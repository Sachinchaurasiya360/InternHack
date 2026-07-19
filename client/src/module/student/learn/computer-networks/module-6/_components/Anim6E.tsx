
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, RotateCcw } from "lucide-react"

const SIM_SECONDS = 30
const POLL_INTERVAL = 1 // seconds between polls

interface Message {
  id: number
  type: "poll-req" | "poll-empty" | "poll-data" | "ws-data" | "ws-handshake"
  time: number
  bytes: number
}

export default function Anim6E() {
  const [messages,  setMessages]  = useState<Message[]>([])
  const [elapsed,   setElapsed]   = useState(0)
  const [running,   setRunning]   = useState(false)
  const [done,      setDone]      = useState(false)
  const [counter,   setCounter]   = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const msgId = useRef(0)

  function clearT() { if (timerRef.current) clearInterval(timerRef.current) }
  useEffect(() => () => clearT(), [])

  function start() {
    clearT()
    setMessages([])
    setElapsed(0)
    setDone(false)
    setCounter(0)
    setRunning(true)
    msgId.current = 0

    // Add WS handshake
    setMessages([{
      id: msgId.current++, type: "ws-handshake", time: 0, bytes: 120
    }])

    let t = 0
    let liveVal = 0

    timerRef.current = setInterval(() => {
      t++
      liveVal = Math.floor(Math.random() * 50) + (t * 2)
      setCounter(liveVal)
      setElapsed(t)

      // HTTP polling: every second sends a request; ~70% come back empty
      const isEmpty = Math.random() < 0.7
      setMessages(prev => [
        ...prev,
        { id: msgId.current++, type: "poll-req",   time: t, bytes: 380 },
        { id: msgId.current++, type: isEmpty ? "poll-empty" : "poll-data", time: t, bytes: isEmpty ? 42 : 410 },
        { id: msgId.current++, type: "ws-data",    time: t, bytes: 28 },
      ])

      if (t >= SIM_SECONDS) {
        clearT()
        setRunning(false)
        setDone(true)
      }
    }, 160) // compressed: 160ms = 1 simulated second
  }

  function reset() {
    clearT()
    setMessages([])
    setElapsed(0)
    setRunning(false)
    setDone(false)
    setCounter(0)
  }

  const pollMessages = messages.filter(m => m.type === "poll-req" || m.type === "poll-empty" || m.type === "poll-data")
  const wsMessages   = messages.filter(m => m.type === "ws-data" || m.type === "ws-handshake")

  const pollBytes = pollMessages.reduce((s, m) => s + m.bytes, 0)
  const wsBytes   = wsMessages.reduce((s, m) => s + m.bytes, 0)

  const pollVisible = pollMessages.slice(-8)
  const wsVisible   = wsMessages.slice(-8)

  return (
    <div className="bg-[#0F172A] p-5 flex flex-col gap-4 min-h-[440px]">

      {/* controls */}
      <div className="flex items-center gap-2 flex-wrap">
        <button disabled={running} onClick={start}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-lime-600 hover:bg-lime-500 disabled:opacity-40 text-white rounded-lg text-xs font-semibold transition-colors"
        >
          <Play size={10} /> Simulate 30 s
        </button>
        <button onClick={reset} className="flex items-center gap-1 px-3 py-1.5 bg-[#1E293B] hover:bg-[#334155] text-stone-400 rounded-lg text-xs border border-[#334155] transition-colors">
          <RotateCcw size={10} /> Reset
        </button>
        <span className="text-[10px] text-stone-500 ml-2">
          {running ? `t = ${elapsed} s / ${SIM_SECONDS} s` : done ? "Simulation complete" : "Ready"}
        </span>
        {(running || done) && (
          <div className="ml-auto flex items-center gap-2 px-3 py-1 bg-[#1E293B] rounded-lg">
            <span className="text-[9px] text-stone-400">Live counter:</span>
            <motion.span
              key={counter}
              initial={{ opacity: 0, y: -3 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-bold font-mono text-emerald-300"
            >
              {counter}
            </motion.span>
          </div>
        )}
      </div>

      {/* side-by-side lanes */}
      <div className="grid grid-cols-2 gap-4 flex-1">

        {/* HTTP Polling */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-blue-300 font-display">HTTP Polling</span>
            <span className="text-[9px] text-stone-500">every {POLL_INTERVAL}s</span>
          </div>
          <div className="flex-1 bg-[#0A0F1A] rounded-xl border border-[#1E293B] p-2 flex flex-col gap-0.5 overflow-hidden min-h-[160px]">
            <AnimatePresence initial={false}>
              {pollVisible.map(m => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-1.5 py-0.5 px-1.5 rounded"
                  style={{
                    backgroundColor:
                      m.type === "poll-req"   ? "#1E3A5F22" :
                      m.type === "poll-empty" ? "#1E293B"    :
                      "#1C3A2522",
                  }}
                >
                  <span className="text-[7px] font-mono"
                    style={{
                      color: m.type === "poll-req" ? "#60A5FA" : m.type === "poll-empty" ? "#475569" : "#34D399"
                    }}>
                    {m.type === "poll-req"   ? "→ GET /updates" :
                     m.type === "poll-empty" ? "← 204 (nothing new)" :
                     "← 200 update!"}
                  </span>
                  <span className="ml-auto text-[7px] font-mono text-stone-600">{m.bytes}B</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="flex items-center justify-between px-2 py-1.5 bg-blue-900/20 border border-blue-700/30 rounded-xl">
            <span className="text-[9px] text-blue-400">Bytes sent</span>
            <span className="text-[10px] font-bold font-mono text-blue-300">{pollBytes.toLocaleString()} B</span>
          </div>
        </div>

        {/* WebSocket */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-lime-300 font-display">WebSocket</span>
            <span className="text-[9px] text-stone-500">push only</span>
          </div>
          <div className="flex-1 bg-[#0A0F1A] rounded-xl border border-[#1E293B] p-2 flex flex-col gap-0.5 overflow-hidden min-h-[160px]">
            <AnimatePresence initial={false}>
              {wsVisible.map(m => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-1.5 py-0.5 px-1.5 rounded"
                  style={{
                    backgroundColor: m.type === "ws-handshake" ? "#2D1B6922" : "#1C3A2522",
                  }}
                >
                  <span className="text-[7px] font-mono"
                    style={{ color: m.type === "ws-handshake" ? "#A78BFA" : "#34D399" }}>
                    {m.type === "ws-handshake" ? "↕ WS upgrade (101)" : "← frame: update"}
                  </span>
                  <span className="ml-auto text-[7px] font-mono text-stone-600">{m.bytes}B</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="flex items-center justify-between px-2 py-1.5 bg-lime-900/20 border border-lime-700/30 rounded-xl">
            <span className="text-[9px] text-lime-400">Bytes sent</span>
            <span className="text-[10px] font-bold font-mono text-lime-300">{wsBytes.toLocaleString()} B</span>
          </div>
        </div>
      </div>

      {/* savings bar */}
      {done && pollBytes > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-2 pt-3 border-t border-[#334155]"
        >
          <div className="flex justify-between text-[9px] text-stone-400">
            <span>WebSocket used <span className="text-emerald-300 font-bold font-mono">{Math.round((1 - wsBytes / pollBytes) * 100)}% less data</span> than HTTP polling</span>
            <span className="font-mono text-stone-500">{wsBytes.toLocaleString()} B vs {pollBytes.toLocaleString()} B</span>
          </div>
          <div className="flex h-3 rounded-full overflow-hidden gap-0.5">
            <div className="bg-lime-600 rounded-l" style={{ width: `${(wsBytes / pollBytes) * 100}%` }} />
            <div className="bg-emerald-700 flex-1 rounded-r" />
          </div>
          <div className="flex justify-between text-[8px] font-mono text-stone-600">
            <span className="text-lime-400">WS: {wsBytes.toLocaleString()} B</span>
            <span className="text-emerald-600">Saved: {(pollBytes - wsBytes).toLocaleString()} B</span>
            <span className="text-blue-400">Poll: {pollBytes.toLocaleString()} B</span>
          </div>
        </motion.div>
      )}
    </div>
  )
}
