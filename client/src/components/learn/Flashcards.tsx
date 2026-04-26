import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, RotateCcw, Layers } from "lucide-react";
import { Button } from "../ui/button";

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
        <Button variant="secondary" mode="icon" size="sm" onClick={prev} className="rounded-xl">
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button variant="secondary" size="sm" onClick={() => setFlipped((f) => !f)} className="rounded-xl">
          <RotateCcw className="w-3.5 h-3.5" />
          Flip
        </Button>
        <Button variant="secondary" mode="icon" size="sm" onClick={next} className="rounded-xl">
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
}
