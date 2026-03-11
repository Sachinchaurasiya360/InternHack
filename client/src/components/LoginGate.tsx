import { motion, AnimatePresence } from "framer-motion";
import { Lock, X } from "lucide-react";
import { Link } from "react-router";

interface LoginGateProps {
  open: boolean;
  onClose: () => void;
}

export function LoginGate({ open, onClose }: LoginGateProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-2xl p-8 max-w-sm w-full mx-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-5">
              <Lock className="w-7 h-7 text-gray-500 dark:text-gray-400" />
            </div>

            <h3 className="font-display text-xl font-bold text-gray-950 dark:text-white mb-2">
              Sign in to continue
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              The first 5 items are free. Sign in to unlock all content.
            </p>

            <div className="flex flex-col gap-3">
              <Link
                to="/login"
                className="block w-full px-5 py-2.5 bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-sm font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all no-underline text-center"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="block w-full px-5 py-2.5 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all no-underline text-center"
              >
                Create Account
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
