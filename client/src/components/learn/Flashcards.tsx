import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, RotateCcw, Layers } from "lucide-react";

export type FlashcardItem = { front: string; back: string };

export function Flashcards({ cards, title = "Concept Flashcards" }: { cards: FlashcardItem[]; title?: string }) {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  if (!cards.length) return null;
  const card = cards[idx];

  function next() {
    setFlipped(false);
    setTimeout(() => setIdx((idx + 1) % cards.length), 150);
  }
  function prev() {
    setFlipped(false);
    setTimeout(() => setIdx((idx - 1 + cards.length) % cards.length), 150);
  }

  return (
    <section className="my-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Layers className="w-4.5 h-4.5 text-indigo-500" />
          <h3 className="text-sm font-bold text-gray-950 dark:text-white">{title}</h3>
        </div>
        <span className="text-xs text-gray-500 tabular-nums">
          {idx + 1} / {cards.length}
        </span>
      </div>
      <div className="relative h-56 perspective-1000">
        <AnimatePresence mode="wait">
          <motion.button
            key={idx}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
            onClick={() => setFlipped((f) => !f)}
            className="relative w-full h-full rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm text-left"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="absolute inset-0 rounded-2xl bg-indigo-500 p-6 flex items-center justify-center text-center"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-white/70 mb-2">Concept</p>
                  <p className="text-lg font-bold text-white leading-snug">{card.front}</p>
                  <p className="mt-4 text-[10px] text-white/60">Click to flip</p>
                </div>
              </div>
              <div
                className="absolute inset-0 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 flex items-center justify-center text-center overflow-auto"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-2">Definition</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{card.back}</p>
                </div>
              </div>
            </motion.div>
          </motion.button>
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-center gap-2 mt-4">
        <button onClick={prev} className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
        </button>
        <button
          onClick={() => setFlipped((f) => !f)}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Flip
        </button>
        <button onClick={next} className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
        </button>
      </div>
    </section>
  );
}
