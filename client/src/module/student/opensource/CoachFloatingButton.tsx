import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useCoachStore } from "./stores/coach.store";

/**
 * Floating button visible on all open-source section pages.
 * Clicking it toggles the coach panel open/closed.
 */
export default function CoachFloatingButton() {
  const { toggle, isOpen } = useCoachStore();

  if (isOpen) return null;

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 20 }}
      onClick={toggle}
      title="Open Contribution Coach"
      className="fixed bottom-6 right-6 z-30 w-12 h-12 rounded-xl bg-lime-400 text-stone-950 shadow-lg shadow-lime-500/25 hover:bg-lime-300 hover:shadow-xl hover:shadow-lime-500/30 transition-all flex items-center justify-center border-0 cursor-pointer group"
    >
      <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform" />
    </motion.button>
  );
}
