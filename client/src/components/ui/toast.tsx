import { motion } from "framer-motion";
import {
  Toaster as SonnerToaster,
  toast as sonnerToast,
} from "sonner";
import {
  CheckCircle,
  AlertCircle,
  Info,
  AlertTriangle,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "default" | "success" | "error" | "warning";

/* ---------- Style maps ---------- */

const variantStyles: Record<Variant, string> = {
  default: "bg-card border-border text-foreground",
  success: "bg-card border-green-600/50",
  error: "bg-card border-destructive/50",
  warning: "bg-card border-amber-600/50",
};

const iconColor: Record<Variant, string> = {
  default: "text-muted-foreground",
  success: "text-green-600 dark:text-green-400",
  error: "text-destructive",
  warning: "text-amber-600 dark:text-amber-400",
};

const variantIcons: Record<Variant, React.ComponentType<{ className?: string }>> = {
  default: Info,
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
};

const toastAnimation = {
  initial: { opacity: 0, y: 50, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 50, scale: 0.95 },
};

/* ---------- Internal toast renderer ---------- */

function ToastContent({
  toastId,
  variant,
  message,
}: {
  toastId: string | number;
  variant: Variant;
  message: string;
}) {
  const Icon = variantIcons[variant];

  return (
    <motion.div
      variants={toastAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "flex items-center justify-between w-full max-w-xs p-3 rounded-xl border shadow-md",
        variantStyles[variant],
      )}
    >
      <div className="flex items-start gap-2">
        <Icon className={cn("h-4 w-4 mt-0.5 shrink-0", iconColor[variant])} />
        <p className="text-xs text-muted-foreground">{message}</p>
      </div>

      <button
        onClick={() => sonnerToast.dismiss(toastId)}
        className="rounded-full p-1 hover:bg-muted/50 dark:hover:bg-muted/30 transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
        aria-label="Dismiss notification"
      >
        <X className="h-3 w-3 text-muted-foreground" />
      </button>
    </motion.div>
  );
}

/* ---------- Simple API (drop-in for react-hot-toast) ---------- */

interface ToastOptions {
  duration?: number;
  id?: string;
}

function show(variant: Variant, message: string, opts?: ToastOptions) {
  sonnerToast.custom(
    (toastId) => (
      <ToastContent toastId={toastId} variant={variant} message={message} />
    ),
    { duration: opts?.duration ?? 4000, id: opts?.id },
  );
}

const toast = {
  success: (msg: string, opts?: ToastOptions) => show("success", msg, opts),
  error: (msg: string, opts?: ToastOptions) => show("error", msg, opts),
  info: (msg: string, opts?: ToastOptions) => show("default", msg, opts),
  warning: (msg: string, opts?: ToastOptions) => show("warning", msg, opts),
};

export default toast;

/* ---------- Provider (renders in App.tsx) ---------- */

export function Toaster() {
  return (
    <SonnerToaster
      position="top-right"
      toastOptions={{ unstyled: true, className: "flex justify-end" }}
    />
  );
}
