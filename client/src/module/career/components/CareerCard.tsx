import { Link } from "react-router";
import { motion } from "framer-motion";
import { Layers, TrendingUp, DollarSign, Users } from "lucide-react";
import type { Career } from "../../../lib/types";

const CATEGORY_COLORS: Record<string, string> = {
  ENGINEERING: "bg-blue-50 text-blue-700",
  DESIGN: "bg-pink-50 text-pink-700",
  DATA: "bg-purple-50 text-purple-700",
  PRODUCT: "bg-orange-50 text-orange-700",
  MARKETING: "bg-green-50 text-green-700",
  DEVOPS: "bg-cyan-50 text-cyan-700",
  SECURITY: "bg-red-50 text-red-700",
  OTHER: "bg-gray-50 text-gray-700",
};

const DIFFICULTY_COLORS: Record<string, string> = {
  BEGINNER: "text-green-600",
  INTERMEDIATE: "text-yellow-600",
  ADVANCED: "text-red-600",
};

interface CareerCardProps {
  career: Career;
  index?: number;
}

export default function CareerCard({ career, index = 0 }: CareerCardProps) {
  const categoryColor = CATEGORY_COLORS[career.category] ?? CATEGORY_COLORS["OTHER"];
  const difficultyColor = DIFFICULTY_COLORS[career.difficulty] ?? "text-gray-600";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Link
        to={`/careers/${career.slug}`}
        className="block bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow no-underline"
      >
        <div className="flex items-start justify-between mb-3">
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${categoryColor}`}>
            {career.category}
          </span>
          <span className={`text-xs font-medium ${difficultyColor}`}>
            {career.difficulty}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2">{career.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4">{career.description}</p>

        <div className="flex items-center gap-4 text-xs text-gray-400">
          {career._count && (
            <span className="flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" />
              {career._count.phases} phases
            </span>
          )}
          {career.demandLevel && (
            <span className="flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              {career.demandLevel} demand
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
      </Link>
    </motion.div>
  );
}
