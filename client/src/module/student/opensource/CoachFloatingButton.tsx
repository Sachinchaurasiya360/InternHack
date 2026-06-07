import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";
import { useCoachStore } from "./stores/coach.store";

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
      className="fixed bottom-6 right-6 z-30 flex items-center gap-2 h-10 px-3.5 rounded-md bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 shadow-lg hover:bg-stone-700 dark:hover:bg-stone-200 transition-all border-0 cursor-pointer text-sm font-bold"
    >
      <BrainCircuit className="w-4 h-4 shrink-0" />
      <span>Coach</span>
    </motion.button>
  );
}
