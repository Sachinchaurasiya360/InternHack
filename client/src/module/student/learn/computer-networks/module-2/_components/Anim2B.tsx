
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, XCircle, Trophy, RotateCcw } from "lucide-react"

const LAYERS = [
  { n: 7, name: "Application",  color: "#7C3AED" },
  { n: 6, name: "Presentation", color: "#8B5CF6" },
  { n: 5, name: "Session",      color: "#A78BFA" },
  { n: 4, name: "Transport",    color: "#F59E0B" },
  { n: 3, name: "Network",      color: "#2563EB" },
  { n: 2, name: "Data Link",    color: "#10B981" },
  { n: 1, name: "Physical",     color: "#64748B" },
]

const ITEMS = [
  { id: "http",    label: "HTTP",           layer: 7, hint: "Defines how web browsers and servers exchange data" },
  { id: "dns",     label: "DNS",            layer: 7, hint: "Resolves domain names to IP addresses" },
  { id: "tls",     label: "TLS / SSL",      layer: 6, hint: "Encrypts and decrypts application data" },
  { id: "tcp",     label: "TCP",            layer: 4, hint: "Provides reliable, ordered, error-checked delivery" },
  { id: "udp",     label: "UDP",            layer: 4, hint: "Connectionless, low-overhead transport protocol" },
  { id: "ip",      label: "IP Address",     layer: 3, hint: "Logical addressing used to route packets across networks" },
  { id: "router",  label: "Router",         layer: 3, hint: "Forwards packets between networks using IP routing tables" },
  { id: "mac",     label: "MAC Address",    layer: 2, hint: "Hardware identifier used for communication within a LAN" },
  { id: "switch",  label: "Switch",         layer: 2, hint: "Forwards Ethernet frames using a MAC address table" },
  { id: "cable",   label: "Ethernet Cable", layer: 1, hint: "Transmits electrical signals between network devices" },
]

type Feedback = { itemId: string; correct: boolean } | null

export default function Anim2B() {
  const [selected, setSelected] = useState<string | null>(null)
  const [placed,   setPlaced]   = useState<Record<string, number>>({})
  const [feedback, setFeedback] = useState<Feedback>(null)

  const totalCorrect = ITEMS.filter(i => placed[i.id] === i.layer).length
  const allPlaced    = Object.keys(placed).length === ITEMS.length

  function pickItem(id: string) {
    if (placed[id] !== undefined) return
    setSelected(prev => prev === id ? null : id)
    setFeedback(null)
  }

  function dropOnLayer(layerN: number) {
    if (!selected) return
    const item = ITEMS.find(i => i.id === selected)!
    const ok   = item.layer === layerN

    if (ok) {
      setPlaced(prev => ({ ...prev, [selected]: layerN }))
    }
    setFeedback({ itemId: selected, correct: ok })
    setSelected(null)

    // auto-clear feedback
    setTimeout(() => setFeedback(null), ok ? 1800 : 2200)
  }

  function reset() {
    setSelected(null)
    setPlaced({})
    setFeedback(null)
  }

  const selectedItem = ITEMS.find(i => i.id === selected)

  return (
    <div className="relative grid md:grid-cols-[190px_1fr] min-h-95 bg-[#0F172A]">

      {/* ── items panel ── */}
      <div className="border-r border-[#1E293B] p-4 flex flex-col gap-2">
        <p className="text-[9px] text-stone-500 font-bold uppercase tracking-widest mb-1">
          Items  click to select
        </p>

        <div className="flex flex-col gap-1.5">
          {ITEMS.map(item => {
            const isPlaced   = placed[item.id] !== undefined
            const isSelected = selected === item.id

            return (
              <motion.button
                key={item.id}
                onClick={() => pickItem(item.id)}
                animate={
                  feedback?.itemId === item.id && !feedback.correct
                    ? { x: [-5, 5, -5, 5, 0] }
                    : {}
                }
                transition={{ duration: 0.3 }}
                disabled={isPlaced}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-left transition-all border ${
                  isPlaced
                    ? "opacity-35 border-[#1E293B] text-stone-500 cursor-default"
                    : isSelected
                    ? "border-lime-500 bg-lime-900/30 text-lime-200 shadow-[0_0_0_2px_#7C3AED33]"
                    : "border-[#1E293B] text-stone-300 hover:border-[#334155] hover:bg-[#1E293B] cursor-pointer"
                }`}
              >
                <span>{item.label}</span>
                {isPlaced && (
                  <CheckCircle size={11} className="text-emerald-400 shrink-0" />
                )}
              </motion.button>
            )
          })}
        </div>

        {allPlaced && (
          <button
            onClick={reset}
            className="mt-auto flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs text-stone-400 border border-[#334155] hover:bg-[#1E293B] transition-colors"
          >
            <RotateCcw size={10} /> Reset
          </button>
        )}
      </div>

      {/* ── layer buckets ── */}
      <div className="p-4 flex flex-col gap-1.5">
        <p className="text-[9px] text-stone-500 font-bold uppercase tracking-widest mb-1">
          {selectedItem
            ? `→ Drop "${selectedItem.label}" into the correct layer`
            : "Select an item on the left, then click the correct layer"}
        </p>

        {LAYERS.map(layer => {
          const itemsHere = ITEMS.filter(i => placed[i.id] === layer.n)
          const canDrop   = selected !== null

          return (
            <motion.button
              key={layer.n}
              onClick={() => canDrop && dropOnLayer(layer.n)}
              whileHover={canDrop ? { scale: 1.01 } : {}}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border text-left transition-all ${
                canDrop
                  ? "border-dashed border-[#334155] hover:border-lime-500 hover:bg-lime-900/15 cursor-pointer"
                  : "border-[#1E293B] cursor-default"
              }`}
            >
              {/* layer badge */}
              <div
                className="w-8 h-8 rounded-lg flex flex-col items-center justify-center shrink-0"
                style={{ backgroundColor: layer.color + "20" }}
              >
                <span className="text-[8px] font-bold" style={{ color: layer.color }}>L{layer.n}</span>
              </div>

              <span className="text-xs font-semibold w-24 shrink-0" style={{ color: layer.color }}>
                {layer.name}
              </span>

              {/* placed item badges */}
              <div className="flex gap-1 flex-wrap">
                {itemsHere.map(item => (
                  <span
                    key={item.id}
                    className="text-[9px] bg-emerald-900/40 text-emerald-300 border border-emerald-800/50 px-1.5 py-0.5 rounded-full"
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </motion.button>
          )
        })}
      </div>

      {/* ── feedback toast ── */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className={`absolute bottom-5 left-1/2 -translate-x-1/2 px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 shadow-xl max-w-xs ${
              feedback.correct
                ? "bg-emerald-600 text-white"
                : "bg-rose-600 text-white"
            }`}
          >
            {feedback.correct ? (
              <>
                <CheckCircle size={13} className="shrink-0" />
                {ITEMS.find(i => i.id === feedback.itemId)?.hint}
              </>
            ) : (
              <>
                <XCircle size={13} className="shrink-0" />
                Not quite  try a different layer
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── completion overlay ── */}
      <AnimatePresence>
        {allPlaced && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#0F172A]/85 flex items-center justify-center rounded-b-2xl"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1,    opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white rounded-2xl p-8 text-center shadow-2xl mx-4"
            >
              <Trophy size={40} className="text-amber-500 mx-auto mb-3" />
              <h3 className="font-display text-xl font-bold text-stone-900 mb-1">All classified!</h3>
              <p className="text-stone-500 text-sm mb-1">
                <span className="text-emerald-600 font-bold text-lg">{totalCorrect}</span>
                <span className="text-stone-400"> / {ITEMS.length}</span> correct
              </p>
              <p className="text-xs text-stone-400 mb-6">
                {totalCorrect === ITEMS.length ? "Perfect score!" : "Review the incorrect ones and try again."}
              </p>
              <button
                onClick={reset}
                className="px-6 py-2.5 bg-lime-500 text-stone-900 rounded-xl font-semibold text-sm hover:bg-lime-500 transition-colors"
              >
                Play Again
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
