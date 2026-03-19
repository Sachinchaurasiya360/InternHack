import { useNavigate, useLocation } from "react-router";
import { motion } from "framer-motion";
import { BotMessageSquare } from "lucide-react";

export function JobAgentChatBubble() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/student/ai-agent") return null;

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate("/student/ai-agent")}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/25 hover:shadow-xl hover:shadow-indigo-600/30 transition-all flex items-center justify-center"
      title="InternHack AI"
    >
      <BotMessageSquare className="w-6 h-6" />
    </motion.button>
  );
}
