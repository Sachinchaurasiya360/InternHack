import { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin, Twitter, MessageCircle, Download, Award } from "lucide-react";
import gsap from "gsap";

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

interface ConfettiParticle {
  element: HTMLDivElement;
  x: number;
  y: number;
}

function createConfetti(container: HTMLDivElement) {
  const colors = ["#a3e635", "#facc15", "#f97316", "#ef4444", "#a78bfa", "#22d3ee", "#f472b6"];
  const particles: ConfettiParticle[] = [];

  for (let i = 0; i < 80; i++) {
    const el = document.createElement("div");
    el.style.cssText = `
      position: absolute;
      width: ${randomBetween(6, 12)}px;
      height: ${randomBetween(6, 12)}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: ${Math.random() > 0.5 ? "50%" : "2px"};
      pointer-events: none;
    `;
    container.appendChild(el);
    particles.push({ element: el, x: randomBetween(0, container.offsetWidth), y: -20 });
  }

  particles.forEach((p) => {
    gsap.set(p.element, { x: p.x, y: p.y, opacity: 1, scale: randomBetween(0.5, 1.5) });
    gsap.to(p.element, {
      y: container.offsetHeight + 20,
      x: p.x + randomBetween(-150, 150),
      rotation: randomBetween(-720, 720),
      opacity: 0,
      duration: randomBetween(2, 4),
      ease: "power2.out",
      delay: randomBetween(0, 1),
    });
  });

  return () => {
    particles.forEach((p) => p.element.remove());
  };
}

interface CompletionCelebrationProps {
  open: boolean;
  onClose: () => void;
  trackName: string;
  lessonCount: number;
  estimatedHours: number;
  badgeLabel: string;
  userName: string;
}

const SHARE_TEXT = (trackName: string, badgeLabel: string) =>
  `I just completed the ${trackName} track on InternHack and earned the ${badgeLabel} badge! 🎉 Check it out: https://internhack.in`;

export function CompletionCelebration({
  open,
  onClose,
  trackName,
  lessonCount,
  estimatedHours,
  badgeLabel,
  userName,
}: CompletionCelebrationProps) {
  const confettiRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (open && confettiRef.current) {
      cleanupRef.current = createConfetti(confettiRef.current);
    }
    if (!open && cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = null;
    }
  }, [open]);

  const handleShare = useCallback((platform: "linkedin" | "twitter" | "whatsapp") => {
    const text = encodeURIComponent(SHARE_TEXT(trackName, badgeLabel));
    const url = encodeURIComponent("https://internhack.in");
    const urls: Record<string, string> = {
      linkedin: `https://linkedin.com/sharing/share-offsite/?url=${url}&text=${text}`,
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      whatsapp: `https://wa.me/?text=${text}%20${url}`,
    };
    window.open(urls[platform], "_blank", "noopener,noreferrer");
  }, [trackName, badgeLabel]);

  const completedDate = new Date().toLocaleDateString("en-IN", {
    year: "numeric", month: "long", day: "numeric",
  });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="relative bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-white/10 shadow-2xl w-full max-w-md mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div ref={confettiRef} className="absolute inset-0 pointer-events-none overflow-hidden" />

            <div className="relative p-6 text-center">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1.5 rounded-md text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 border-0 bg-transparent cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-4">
                <Award className="w-16 h-16 mx-auto text-amber-400" />
              </div>

              <h2 className="text-xl font-bold text-stone-900 dark:text-white mb-1">
                Congratulations, {userName}!
              </h2>
              <p className="text-sm text-stone-500 dark:text-stone-400 mb-5">
                You completed the <strong className="text-stone-700 dark:text-stone-200">{trackName}</strong> track.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-stone-50 dark:bg-stone-800 rounded-lg p-3">
                  <p className="text-xs text-stone-500 dark:text-stone-400">Lessons</p>
                  <p className="text-lg font-bold text-stone-900 dark:text-white">{lessonCount}</p>
                </div>
                <div className="bg-stone-50 dark:bg-stone-800 rounded-lg p-3">
                  <p className="text-xs text-stone-500 dark:text-stone-400">Hours</p>
                  <p className="text-lg font-bold text-stone-900 dark:text-white">{estimatedHours}h</p>
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3 mb-5">
                <p className="text-xs text-amber-700 dark:text-amber-400 font-mono uppercase tracking-wider">Badge Earned</p>
                <p className="text-sm font-bold text-amber-800 dark:text-amber-300">{badgeLabel}</p>
              </div>

              <p className="text-xs text-stone-400 mb-5">
                Completed on {completedDate}
              </p>

              <div className="flex items-center justify-center gap-2 mb-4">
                <button
                  onClick={() => handleShare("linkedin")}
                  className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors border-0 cursor-pointer"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                </button>
                <button
                  onClick={() => handleShare("twitter")}
                  className="flex items-center gap-1.5 px-3 py-2 bg-neutral-800 text-white text-xs font-semibold rounded-lg hover:bg-neutral-900 transition-colors border-0 cursor-pointer"
                >
                  <Twitter className="w-3.5 h-3.5" />
                  X
                </button>
                <button
                  onClick={() => handleShare("whatsapp")}
                  className="flex items-center gap-1.5 px-3 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-700 transition-colors border-0 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </button>
              </div>

              <button
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 dark:bg-white text-white dark:text-stone-900 text-sm font-semibold rounded-lg hover:bg-stone-800 dark:hover:bg-stone-100 transition-colors border-0 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download Certificate
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
