import { motion } from "framer-motion";

/**
 * A small library of reusable animated SVG diagrams. Each is a self-contained
 * visual that illustrates a common programming concept. They use framer-motion
 * for entrance and looping animations.
 */

export function FlowPipeline({
  steps,
  title,
}: {
  steps: string[];
  title?: string;
}) {
  const width = 720;
  const height = 120;
  const pad = 30;
  const step = (width - pad * 2) / Math.max(steps.length - 1, 1);

  return (
    <figure className="my-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 overflow-x-auto">
      {title && <h4 className="text-sm font-bold text-gray-950 dark:text-white mb-3">{title}</h4>}
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto min-w-150">
        <defs>
          <marker id="fp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#6366f1" />
          </marker>
        </defs>
        {steps.slice(0, -1).map((_, i) => (
          <motion.line
            key={`l-${i}`}
            x1={pad + step * i + 40}
            y1={60}
            x2={pad + step * (i + 1) - 40}
            y2={60}
            stroke="#6366f1"
            strokeWidth={2.5}
            strokeDasharray="4 4"
            markerEnd="url(#fp-arrow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.25 + i * 0.15, duration: 0.5 }}
          />
        ))}
        {steps.map((label, i) => (
          <motion.g
            key={`s-${i}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.15, type: "spring", stiffness: 200, damping: 15 }}
          >
            <circle
              cx={pad + step * i}
              cy={60}
              r={28}
              fill="white"
              stroke="#6366f1"
              strokeWidth={2.5}
              className="dark:fill-gray-800"
            />
            <text
              x={pad + step * i}
              y={64}
              textAnchor="middle"
              fontSize={11}
              fontWeight={600}
              fill="#6366f1"
            >
              {i + 1}
            </text>
            <text
              x={pad + step * i}
              y={108}
              textAnchor="middle"
              fontSize={11}
              fill="currentColor"
              className="text-gray-700 dark:text-gray-300"
            >
              {label}
            </text>
          </motion.g>
        ))}
      </svg>
    </figure>
  );
}

export function RequestResponseDiagram() {
  return (
    <figure className="my-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5">
      <h4 className="text-sm font-bold text-gray-950 dark:text-white mb-3">Client ↔ Server</h4>
      <svg viewBox="0 0 600 220" className="w-full h-auto">
        <motion.rect
          x={40} y={70} width={140} height={90} rx={16}
          fill="#6366f1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        />
        <text x={110} y={120} textAnchor="middle" fill="white" fontSize={14} fontWeight={700}>Client</text>
        <text x={110} y={140} textAnchor="middle" fill="white" fontSize={10} opacity={0.9}>Browser / App</text>

        <motion.rect
          x={420} y={70} width={140} height={90} rx={16}
          fill="#10b981"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        />
        <text x={490} y={120} textAnchor="middle" fill="white" fontSize={14} fontWeight={700}>Server</text>
        <text x={490} y={140} textAnchor="middle" fill="white" fontSize={10} opacity={0.9}>API / Database</text>

        <motion.path
          d="M 180 95 Q 300 60 420 95"
          fill="none"
          stroke="#6366f1"
          strokeWidth={2.5}
          strokeDasharray="5 5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.4, duration: 0.8, repeat: Infinity, repeatType: "loop", repeatDelay: 1.5 }}
        />
        <text x={300} y={60} textAnchor="middle" fontSize={11} fill="#6366f1" fontWeight={600}>Request →</text>

        <motion.path
          d="M 420 135 Q 300 170 180 135"
          fill="none"
          stroke="#10b981"
          strokeWidth={2.5}
          strokeDasharray="5 5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.9, duration: 0.8, repeat: Infinity, repeatType: "loop", repeatDelay: 1.5 }}
        />
        <text x={300} y={190} textAnchor="middle" fontSize={11} fill="#10b981" fontWeight={600}>← Response</text>
      </svg>
    </figure>
  );
}

export function StackBoxes({
  items,
  title,
}: {
  items: { label: string; color?: string }[];
  title?: string;
}) {
  return (
    <figure className="my-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5">
      {title && <h4 className="text-sm font-bold text-gray-950 dark:text-white mb-3">{title}</h4>}
      <div className="space-y-2 max-w-md mx-auto">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 150 }}
            className="rounded-xl px-5 py-3 text-sm font-medium text-white shadow-sm"
            style={{ background: it.color || "#6366f1" }}
          >
            {it.label}
          </motion.div>
        ))}
      </div>
    </figure>
  );
}
