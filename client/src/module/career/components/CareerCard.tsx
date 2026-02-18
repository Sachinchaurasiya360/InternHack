import { Link } from "react-router";
import { motion } from "framer-motion";
import { Layers, TrendingUp, DollarSign, Users, ArrowRight } from "lucide-react";
import type { Career } from "../../../lib/types";

const CATEGORY_CONFIG: Record<string, { pill: string; accent: string; dot: string }> = {
  ENGINEERING: { pill: "bg-blue-50 text-blue-700", accent: "border-l-blue-400", dot: "bg-blue-400" },
  DESIGN:      { pill: "bg-pink-50 text-pink-700",  accent: "border-l-pink-400",  dot: "bg-pink-400"  },
  DATA:        { pill: "bg-purple-50 text-purple-700", accent: "border-l-purple-400", dot: "bg-purple-400" },
  PRODUCT:     { pill: "bg-orange-50 text-orange-700", accent: "border-l-orange-400", dot: "bg-orange-400" },
  MARKETING:   { pill: "bg-green-50 text-green-700",  accent: "border-l-green-400",  dot: "bg-green-400"  },
  DEVOPS:      { pill: "bg-cyan-50 text-cyan-700",   accent: "border-l-cyan-400",   dot: "bg-cyan-400"   },
  SECURITY:    { pill: "bg-red-50 text-red-700",     accent: "border-l-red-400",    dot: "bg-red-400"    },
  OTHER:       { pill: "bg-gray-50 text-gray-600",   accent: "border-l-gray-300",   dot: "bg-gray-400"   },
};

const DIFFICULTY_CONFIG: Record<string, { text: string; label: string }> = {
  BEGINNER:     { text: "text-green-600", label: "Beginner" },
  INTERMEDIATE: { text: "text-amber-600", label: "Intermediate" },
  ADVANCED:     { text: "text-red-600",   label: "Advanced" },
};

interface CareerCardProps {
  career: Career;
  index?: number;
}

export default function CareerCard({ career, index = 0 }: CareerCardProps) {
  const cat = CATEGORY_CONFIG[career.category] ?? CATEGORY_CONFIG["OTHER"];
  const diff = DIFFICULTY_CONFIG[career.difficulty] ?? { text: "text-gray-500", label: career.difficulty };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Link
        to={`/careers/${career.slug}`}
        className={`group block bg-white rounded-xl border border-gray-100 border-l-4 ${cat.accent} shadow-sm hover:shadow-md transition-all no-underline`}
      >
        <div className="p-6">
          {/* Top row */}
          <div className="flex items-start justify-between mb-3">
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${cat.pill}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${cat.dot}`} />
              {career.category}
            </span>
            <span className={`text-xs font-semibold ${diff.text}`}>{diff.label}</span>
          </div>

          {/* Title & description */}
          <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
            {career.title}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">
            {career.description}
          </p>

          {/* Meta row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-gray-400">
              {career._count && (
                <span className="flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5" />
                  {career._count.phases} phases
                </span>
              )}
              {career.demandLevel && (
                <span className="flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {career.demandLevel}
                </span>
              )}
              {career.avgSalary && (
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5" />
                  {career.avgSalary}
                </span>
              )}
              {career._count && career._count.enrollments > 0 && (
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  {career._count.enrollments}
                </span>
              )}
            </div>

            <span className="flex items-center gap-1 text-xs font-medium text-gray-400 group-hover:text-gray-700 transition-colors">
              View path <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
