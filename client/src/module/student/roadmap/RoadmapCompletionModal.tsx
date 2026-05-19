import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Share2, Trophy, Sparkles } from "lucide-react";

// ── Twitter/X SVG icon ──────────────────────────────────────────────────────
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// ── LinkedIn SVG icon ───────────────────────────────────────────────────────
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// ── Confetti particle ───────────────────────────────────────────────────────
function Particle({
  delay,
  color,
  x,
  y,
}: {
  delay: number;
  color: string;
  x: number;
  y: number;
}) {
  return (
    <motion.div
      className={`absolute w-2 h-2 rounded-sm ${color}`}
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0],
        y: [0, -60, -80, -40],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 2.2,
        delay,
        ease: "easeOut",
      }}
    />
  );
}

// ── Main modal component ────────────────────────────────────────────────────
interface RoadmapCompletionModalProps {
  roadmapName: string;
  onClose: () => void;
}

const CONFETTI_COLORS = [
  "bg-lime-400",
  "bg-amber-400",
  "bg-sky-400",
  "bg-rose-400",
  "bg-violet-400",
  "bg-lime-300",
];

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  delay: (i % 6) * 0.12,
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  x: 10 + (i * 83) % 80,
  y: 10 + (i * 67) % 60,
}));

export function RoadmapCompletionModal({
  roadmapName,
  onClose,
}: RoadmapCompletionModalProps) {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  // ── Share text builders ──────────────────────────────────────────────────
  const tag = roadmapName.replace(/\s+/g, "");
  const twitterText = encodeURIComponent(
    `🎉 Just completed the ${roadmapName} roadmap on InternHack! #InternHack #CareerGrowth #${tag}`
  );
  const linkedInText = encodeURIComponent(
    `I just completed the ${roadmapName} roadmap on InternHack! Check it out at https://www.internhack.xyz #InternHack #CareerGrowth`
  );
  const linkedInUrl = encodeURIComponent("https://www.internhack.xyz");

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${twitterText}`;
  const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${linkedInUrl}&summary=${linkedInText}&title=${encodeURIComponent(`I completed the ${roadmapName} roadmap!`)}`;

  const openShare = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer,width=600,height=500");
  };

  // ── Web Share API (mobile fallback) ──────────────────────────────────────
  const canNativeShare = typeof navigator !== "undefined" && !!navigator.share;

  const handleNativeShare = async () => {
    try {
      await navigator.share({
        title: `Completed: ${roadmapName} Roadmap`,
        text: `🎉 Just completed the ${roadmapName} roadmap on InternHack! #InternHack #CareerGrowth`,
        url: "https://www.internhack.xyz",
      });
    } catch {
      // User cancelled or API failed — silently ignore
    }
  };

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="completion-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 z-[60] bg-stone-950/70 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Modal */}
      <motion.div
        key="completion-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="completion-title"
        initial={{ opacity: 0, scale: 0.88, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 16 }}
        transition={{ type: "spring", damping: 24, stiffness: 300 }}
        className="fixed inset-0 z-[70] flex items-center justify-center px-4 pointer-events-none"
      >
        <div className="relative w-full max-w-md pointer-events-auto bg-stone-900/95 border border-white/10 rounded-2xl shadow-2xl shadow-lime-500/10 overflow-hidden">

          {/* Confetti burst */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {PARTICLES.map((p) => (
              <Particle
                key={p.id}
                delay={p.delay}
                color={p.color}
                x={p.x}
                y={p.y}
              />
            ))}
          </div>

          {/* Top gradient accent */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-lime-400/60 to-transparent" />

          {/* Close button */}
          <button
            id="completion-modal-close"
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3 right-3 z-10 p-1.5 rounded-lg text-stone-500 hover:text-stone-300 hover:bg-white/5 transition-colors cursor-pointer border-0 bg-transparent"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Content */}
          <div className="px-8 pt-10 pb-8 text-center">
            {/* Trophy icon with glow */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 380, damping: 18, delay: 0.15 }}
              className="relative inline-flex items-center justify-center mb-5"
            >
              <div className="absolute inset-0 rounded-full bg-lime-400/20 blur-xl scale-150" />
              <div className="relative h-20 w-20 rounded-2xl bg-lime-400 flex items-center justify-center shadow-lg shadow-lime-500/40">
                <Trophy className="w-9 h-9 text-stone-950" strokeWidth={2.5} />
              </div>
              {/* Sparkles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full border border-dashed border-lime-400/30"
              />
              <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-amber-400" />
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
            >
              <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-lime-400 mb-2">
                roadmap complete
              </p>
              <h2
                id="completion-title"
                className="text-2xl font-bold text-stone-50 leading-tight mb-1"
              >
                You did it! 🎉
              </h2>
              <p className="text-stone-400 text-sm leading-relaxed mt-2">
                You've completed the{" "}
                <span className="text-stone-200 font-semibold">{roadmapName}</span>{" "}
                roadmap. Share your achievement with the world!
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />

            {/* Share buttons */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.35 }}
              className="space-y-3"
            >
              <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-stone-500 mb-4">
                share your achievement
              </p>

              {/* Twitter/X */}
              <button
                id="share-twitter-btn"
                type="button"
                onClick={() => openShare(twitterShareUrl)}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 border border-white/8 hover:border-white/15 text-stone-50 font-semibold text-sm transition-all duration-200 group cursor-pointer"
              >
                <XIcon className="w-4 h-4 text-stone-300 group-hover:text-stone-50 transition-colors shrink-0" />
                <span>Share on X (Twitter)</span>
              </button>

              {/* LinkedIn */}
              <button
                id="share-linkedin-btn"
                type="button"
                onClick={() => openShare(linkedInShareUrl)}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-[#0A66C2]/20 hover:bg-[#0A66C2]/35 border border-[#0A66C2]/30 hover:border-[#0A66C2]/60 text-[#70B5F9] font-semibold text-sm transition-all duration-200 group cursor-pointer"
              >
                <LinkedInIcon className="w-4 h-4 shrink-0" />
                <span>Share on LinkedIn</span>
              </button>

              {/* Web Share API (mobile) */}
              {canNativeShare && (
                <button
                  id="share-native-btn"
                  type="button"
                  onClick={handleNativeShare}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-transparent hover:bg-white/5 border border-white/8 hover:border-white/15 text-stone-400 hover:text-stone-300 font-medium text-sm transition-all duration-200 cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5 shrink-0" />
                  <span>More options</span>
                </button>
              )}
            </motion.div>

            {/* Dismiss */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-5"
            >
              <button
                id="completion-modal-dismiss"
                type="button"
                onClick={onClose}
                className="text-stone-500 hover:text-stone-400 text-xs font-mono transition-colors cursor-pointer border-0 bg-transparent"
              >
                dismiss
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
