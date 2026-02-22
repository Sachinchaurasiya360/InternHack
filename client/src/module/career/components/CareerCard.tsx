import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Layers,
  TrendingUp,
  IndianRupee,
  Users,
  ArrowRight,
  Code,
  Palette,
  Database,
  ShoppingBag,
  Megaphone,
  Server,
  ShieldCheck,
  Briefcase,
} from "lucide-react";
import type { Career } from "../../../lib/types";

const CATEGORY_CONFIG: Record<
  string,
  { pill: string; iconBg: string; iconColor: string; icon: React.ReactNode; border: string }
> = {
  ENGINEERING: {
    pill: "bg-blue-50 text-blue-600",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    border: "group-hover:border-blue-200",
    icon: <Code className="w-5 h-5" />,
  },
  DESIGN: {
    pill: "bg-pink-50 text-pink-600",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
    border: "group-hover:border-pink-200",
    icon: <Palette className="w-5 h-5" />,
  },
  DATA: {
    pill: "bg-violet-50 text-violet-600",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    border: "group-hover:border-violet-200",
    icon: <Database className="w-5 h-5" />,
  },
  PRODUCT: {
    pill: "bg-orange-50 text-orange-600",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    border: "group-hover:border-orange-200",
    icon: <ShoppingBag className="w-5 h-5" />,
  },
  MARKETING: {
    pill: "bg-emerald-50 text-emerald-600",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    border: "group-hover:border-emerald-200",
    icon: <Megaphone className="w-5 h-5" />,
  },
  DEVOPS: {
    pill: "bg-cyan-50 text-cyan-600",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    border: "group-hover:border-cyan-200",
    icon: <Server className="w-5 h-5" />,
  },
  SECURITY: {
    pill: "bg-red-50 text-red-600",
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
    border: "group-hover:border-red-200",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  OTHER: {
    pill: "bg-gray-50 text-gray-600",
    iconBg: "bg-gray-50",
    iconColor: "text-gray-600",
    border: "group-hover:border-gray-300",
    icon: <Briefcase className="w-5 h-5" />,
  },
};

const DIFFICULTY_CONFIG: Record<
  string,
  { dot: string; bg: string; text: string; label: string }
> = {
  BEGINNER: { dot: "bg-emerald-500", bg: "bg-emerald-50", text: "text-emerald-700", label: "Beginner" },
  INTERMEDIATE: { dot: "bg-amber-500", bg: "bg-amber-50", text: "text-amber-700", label: "Intermediate" },
  ADVANCED: { dot: "bg-red-500", bg: "bg-red-50", text: "text-red-700", label: "Advanced" },
};

interface CareerCardProps {
  career: Career;
  index?: number;
}

export default function CareerCard({ career, index = 0 }: CareerCardProps) {
  const cat = CATEGORY_CONFIG[career.category] ?? CATEGORY_CONFIG["OTHER"];
  const diff = DIFFICULTY_CONFIG[career.difficulty] ?? {
    dot: "bg-gray-400",
    bg: "bg-gray-50",
    text: "text-gray-500",
    label: career.difficulty,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Link
        to={`/careers/${career.slug}`}
        className={`group relative flex flex-col h-full bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300 no-underline ${cat.border}`}
      >
        <div className="flex flex-col flex-1 p-6">
          {/* Icon + category row */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className={`w-11 h-11 rounded-xl ${cat.iconBg} ${cat.iconColor} flex items-center justify-center`}>
                {cat.icon}
              </div>
              <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${cat.pill}`}>
                {career.category}
              </span>
            </div>
            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${diff.bg}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${diff.dot}`} />
              <span className={`text-xs font-medium ${diff.text}`}>{diff.label}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-gray-700 transition-colors">
            {career.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-6 flex-1">
            {career.description}
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-5">
            {career._count && (
              <div className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-gray-400" />
                <span className="font-medium text-gray-700">{career._count.phases}</span>
                <span className="text-gray-400">phases</span>
              </div>
            )}
            {career.demandLevel && (
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-gray-400" />
                <span className="font-medium text-gray-700">{career.demandLevel}</span>
              </div>
            )}
          </div>

          {/* Bottom row */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3 text-xs text-gray-400">
              {career.avgSalary && (
                <span className="flex items-center gap-1">
                  <IndianRupee className="w-3.5 h-3.5" />
                  {career.avgSalary}
                </span>
              )}
              {career._count && career._count.enrollments > 0 && (
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  {career._count.enrollments} enrolled
                </span>
              )}
            </div>
            <span className="flex items-center gap-1 text-sm font-medium text-gray-400 group-hover:text-gray-900 transition-colors">
              Explore
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
