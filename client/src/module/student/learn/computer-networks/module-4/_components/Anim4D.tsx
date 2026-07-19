
import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RotateCcw } from "lucide-react"

const PRIVATE_HOSTS = [
  { id: "A", ip: "192.168.1.10", label: "Host A", color: "#7C3AED" },
  { id: "B", ip: "192.168.1.20", label: "Host B", color: "#2563EB" },
  { id: "C", ip: "192.168.1.30", label: "Host C", color: "#10B981" },
]
const PUBLIC_IP  = "203.0.113.1"
const SERVER_IP  = "93.184.216.34"
const NAT_PORTS: Record<string, number> = { A: 50000, B: 50001, C: 50002 }

interface NatEntry {
  host: string
  privateIP: string
  privatePort: number
  publicPort: number
  destIP: string
}

interface Packet {
  id: string
  hostId: string
  direction: "out" | "in"
  label: string
  color: string
}

export default function Anim4D() {
  const [natTable, setNatTable] = useState<NatEntry[]>([])
  const [packets,  setPackets]  = useState<Packet[]>([])
  const [selected, setSelected] = useState<string | null>(null)
  const [done,     setDone]     = useState<string[]>([])
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function clearT() { if (timerRef.current) clearTimeout(timerRef.current) }

  function sendRequest(hostId: string) {
    clearT()
    const host = PRIVATE_HOSTS.find(h => h.id === hostId)!
    const port = NAT_PORTS[hostId]
    const pid  = `${hostId}-${Date.now()}`

    // add outbound packet
    setPackets(prev => [...prev, {
      id: pid, hostId, direction: "out",
      label: `${host.ip}:${port} → ${SERVER_IP}:80`,
      color: host.color,
    }])

    timerRef.current = setTimeout(() => {
      // add NAT entry
      setNatTable(prev => {
        if (prev.some(e => e.host === hostId)) return prev
        return [...prev, {
          host: hostId,
          privateIP: host.ip,
          privatePort: port,
          publicPort: port,
          destIP: SERVER_IP,
        }]
      })
      setSelected(hostId)

      timerRef.current = setTimeout(() => {
        // return packet
        setPackets(prev => [...prev, {
          id: `${pid}-ret`, hostId, direction: "in",
          label: `${SERVER_IP}:80 → ${PUBLIC_IP}:${port}`,
          color: host.color,
        }])
        timerRef.current = setTimeout(() => {
          setDone(prev => prev.includes(hostId) ? prev : [...prev, hostId])
        }, 900)
      }, 900)
    }, 900)
  }

  function reset() {
    clearT()
    setNatTable([])
    setPackets([])
    setSelected(null)
    setDone([])
  }

  const selectedEntry = natTable.find(e => e.host === selected)

  return (
    <div className="bg-[#0F172A] p-5 flex flex-col gap-4 min-h-[420px]">

      {/* controls */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-[10px] text-stone-400">Send HTTP request from:</span>
        {PRIVATE_HOSTS.map(h => (
          <button
            key={h.id}
            disabled={done.includes(h.id)}
            onClick={() => sendRequest(h.id)}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-colors disabled:opacity-40"
            style={{ backgroundColor: h.color }}
          >
            {h.label}
          </button>
        ))}
        <button
          onClick={reset}
          className="flex items-center gap-1 ml-auto px-3 py-1.5 bg-[#1E293B] hover:bg-[#334155] text-stone-400 rounded-lg text-xs border border-[#334155] transition-colors"
        >
          <RotateCcw size={10} /> Reset
        </button>
      </div>

      {/* topology */}
      <div className="flex items-stretch gap-3 flex-1">

        {/* private side */}
        <div className="flex flex-col justify-around gap-2 w-32 shrink-0">
          <p className="text-[8px] text-stone-500 font-bold uppercase tracking-wider text-center">Private LAN</p>
          {PRIVATE_HOSTS.map(h => (
            <div
              key={h.id}
              className="rounded-xl px-2.5 py-2 border text-center transition-all"
              style={{
                backgroundColor: done.includes(h.id) ? h.color + "22" : "#1E293B",
                borderColor: done.includes(h.id) ? h.color : "#334155",
              }}
            >
              <p className="text-[9px] font-bold text-white">{h.label}</p>
              <p className="text-[8px] font-mono text-stone-400">{h.ip}</p>
              {done.includes(h.id) && (
                <p className="text-[7px] text-emerald-400 mt-0.5">✓ connected</p>
              )}
            </div>
          ))}
        </div>

        {/* router / NAT box */}
        <div className="flex flex-col items-center justify-center gap-1.5 w-28 shrink-0">
          <div className="w-full rounded-xl bg-[#1E293B] border-2 border-[#334155] p-2 text-center">
            <p className="text-[9px] font-bold text-stone-300">Router / NAT</p>
            <p className="text-[8px] font-mono text-lime-300">{PUBLIC_IP}</p>
          </div>

          {/* packet stream */}
          <div className="relative w-full h-20 flex items-center justify-center overflow-hidden">
            <AnimatePresence>
              {packets.slice(-6).map(p => (
                <motion.div
                  key={p.id}
                  className="absolute text-[7px] font-mono font-bold px-1.5 py-0.5 rounded whitespace-nowrap"
                  style={{ color: p.color, backgroundColor: p.color + "22", border: `1px solid ${p.color}44` }}
                  initial={{ x: p.direction === "out" ? -60 : 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: p.direction === "out" ? 60 : -60, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {p.direction === "out" ? "→" : "←"} {p.hostId}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* internet side */}
        <div className="flex flex-col justify-center gap-2 flex-1">
          <p className="text-[8px] text-stone-500 font-bold uppercase tracking-wider text-center">Internet</p>
          <div className="rounded-xl bg-[#1E293B] border border-[#334155] p-3 text-center">
            <p className="text-[9px] font-bold text-stone-300">Remote Server</p>
            <p className="text-[8px] font-mono text-amber-300">{SERVER_IP}</p>
            <p className="text-[7px] text-stone-500 mt-0.5">port 80</p>
          </div>
          {selectedEntry && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl bg-[#1E293B] border border-lime-500/30 p-2.5 text-[8px]"
            >
              <p className="font-bold text-lime-400 mb-1.5">Header rewrite (before/after)</p>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <span className="text-[7px] text-stone-500 w-12 shrink-0">Src IP</span>
                  <span className="font-mono text-rose-300 line-through">{selectedEntry.privateIP}</span>
                  <span className="font-mono text-emerald-300 ml-1">{PUBLIC_IP}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[7px] text-stone-500 w-12 shrink-0">Src Port</span>
                  <span className="font-mono text-rose-300 line-through">{selectedEntry.privatePort}</span>
                  <span className="font-mono text-emerald-300 ml-1">{selectedEntry.publicPort}</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* NAT table */}
      <div className="bg-[#1E293B] rounded-xl border border-[#334155] overflow-hidden">
        <div className="px-3 py-2 border-b border-[#334155] bg-[#0F172A]">
          <p className="text-[9px] font-bold text-stone-400 uppercase tracking-wider">NAT Translation Table</p>
        </div>
        {natTable.length === 0 ? (
          <p className="text-[9px] text-stone-600 italic px-3 py-2">empty  send a request to populate</p>
        ) : (
          <div className="overflow-auto">
            <div className="grid grid-cols-4 text-[7px] text-stone-500 font-bold px-3 py-1.5 border-b border-[#0F172A]">
              <span>Private IP:Port</span><span>Public IP:Port</span><span>Destination</span><span>State</span>
            </div>
            <AnimatePresence>
              {natTable.map(e => {
                const host = PRIVATE_HOSTS.find(h => h.id === e.host)!
                return (
                  <motion.button
                    key={e.host}
                    onClick={() => setSelected(e.host === selected ? null : e.host)}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="grid grid-cols-4 text-[8px] px-3 py-1.5 border-b border-[#0F172A] w-full text-left transition-colors"
                    style={{ backgroundColor: e.host === selected ? host.color + "22" : "transparent" }}
                  >
                    <span className="font-mono text-rose-300">{e.privateIP}:{e.privatePort}</span>
                    <span className="font-mono text-emerald-300">{PUBLIC_IP}:{e.publicPort}</span>
                    <span className="font-mono text-stone-400">{e.destIP}:80</span>
                    <span style={{ color: host.color }} className="font-semibold">
                      {done.includes(e.host) ? "ESTABLISHED" : "SYN_SENT"}
                    </span>
                  </motion.button>
                )
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  )
}
