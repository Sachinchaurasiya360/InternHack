import type { ReactNode } from "react";
import { Info, AlertTriangle, Lightbulb, Star, CheckCircle2, Zap } from "lucide-react";

export type CalloutVariant = "info" | "warning" | "tip" | "success" | "interview" | "important";

const VARIANT_STYLES: Record<CalloutVariant, { bg: string; border: string; icon: string; title: string }> = {
  info: {
    bg: "bg-blue-50 dark:bg-blue-950/20",
    border: "border-l-blue-500",
    icon: "text-blue-500",
    title: "text-blue-900 dark:text-blue-200",
  },
  warning: {
    bg: "bg-amber-50 dark:bg-amber-950/20",
    border: "border-l-amber-500",
    icon: "text-amber-500",
    title: "text-amber-900 dark:text-amber-200",
  },
  tip: {
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
    border: "border-l-emerald-500",
    icon: "text-emerald-500",
    title: "text-emerald-900 dark:text-emerald-200",
  },
  success: {
    bg: "bg-green-50 dark:bg-green-950/20",
    border: "border-l-green-500",
    icon: "text-green-500",
    title: "text-green-900 dark:text-green-200",
  },
  interview: {
    bg: "bg-violet-50 dark:bg-violet-950/20",
    border: "border-l-violet-500",
    icon: "text-violet-500",
    title: "text-violet-900 dark:text-violet-200",
  },
  important: {
    bg: "bg-rose-50 dark:bg-rose-950/20",
    border: "border-l-rose-500",
    icon: "text-rose-500",
    title: "text-rose-900 dark:text-rose-200",
  },
};

const VARIANT_ICONS: Record<CalloutVariant, typeof Info> = {
  info: Info,
  warning: AlertTriangle,
  tip: Lightbulb,
  success: CheckCircle2,
  interview: Star,
  important: Zap,
};

type Props = {
  variant?: CalloutVariant;
  title?: string;
  children?: ReactNode;
  items?: string[];
};

export function Callout({ variant = "info", title, children, items }: Props) {
  const s = VARIANT_STYLES[variant];
  const Icon = VARIANT_ICONS[variant];
  return (
    <div className={`${s.bg} border-l-4 ${s.border} rounded-r-xl px-5 py-4 my-4`}>
      {title && (
        <div className="flex items-center gap-2 mb-2">
          <Icon className={`w-4 h-4 ${s.icon}`} />
          <h4 className={`text-sm font-bold ${s.title}`}>{title}</h4>
        </div>
      )}
      {items && items.length > 0 && (
        <ul className="space-y-1.5">
          {items.map((it, i) => (
            <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
              <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${s.icon.replace("text-", "bg-")}`} />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      )}
      {children && <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{children}</div>}
    </div>
  );
}
