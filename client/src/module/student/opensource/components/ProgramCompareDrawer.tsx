import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, DollarSign } from "lucide-react";
import { Button } from "../../../components/ui/button";

interface Program {
  id: number;
  name: string;
  short: string;
  description: string;
  fullDescription: string;
  eligibility: string;
  eligibilityType: "Students" | "Open to All" | "Diversity-focused";
  stipend: string;
  stipendPaid: boolean;
  stipendRange: "High" | "Medium" | "Low/None";
  window: string;
  status: "Annual" | "Ongoing" | "Batch";
  region: string;
  website: string;
  applyUrl: string;
  color: string;
  bgColor: string;
  tags: string[];
  requirements: string[];
  timeline: { phase: string; dates: string }[];
  howToApply: string[];
}

interface ProgramCompareDrawerProps {
  programs: Program[];
  onRemove: (id: string) => void;
  onClose: () => void;
  isOpen: boolean;
}

/**
 * Drawer component for comparing selected programs
 * - Renders from bottom on mobile, from right on desktop
 * - Shows comparison table with key program attributes
 * - Supports dark mode
 * - Responsive with vertical card layout on mobile
 */
export function ProgramCompareDrawer({
  programs,
  onRemove,
  onClose,
  isOpen,
}: ProgramCompareDrawerProps) {
  const [mobileExpanded, setMobileExpanded] = useState(false);

  // Desktop drawer slides in from right
  const desktopVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.2 } },
  };

  // Mobile drawer slides up from bottom
  const mobileVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { y: "100%", opacity: 0, transition: { duration: 0.2 } },
  };

  if (!isOpen || programs.length === 0) return null;

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 hidden md:block"
          />
        )}
      </AnimatePresence>

      {/* Desktop Drawer (from right) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={desktopVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="hidden md:flex fixed right-0 top-0 h-screen w-full max-w-2xl bg-white dark:bg-gray-900 shadow-2xl z-50 flex-col border-l border-gray-200 dark:border-gray-800"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800 shrink-0">
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  Compare Programs
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  {programs.length} of 4 programs selected
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    programs.forEach((p) => onRemove(String(p.id)));
                  }}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  Clear All
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Comparison Table - Desktop */}
            <div className="flex-1 overflow-auto">
              <table className="w-full text-sm">
                <tbody>
                  {/* Program Names Row */}
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <td className="p-4 font-semibold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-950 w-32 sticky left-0 z-10">
                      Program
                    </td>
                    {programs.map((program) => (
                      <td
                        key={program.id}
                        className="p-4 bg-gray-50 dark:bg-gray-950 min-w-[200px] border-l border-gray-200 dark:border-gray-800"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-bold text-gray-900 dark:text-white">
                              {program.name}
                            </h3>
                            <p className="text-xs text-gray-500 mt-1">{program.short}</p>
                          </div>
                          <button
                            onClick={() => onRemove(String(program.id))}
                            className="text-gray-400 hover:text-red-500 dark:text-gray-600 dark:hover:text-red-400 transition-colors"
                            title="Remove from comparison"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Application Deadline */}
                  <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="p-4 font-semibold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-950 sticky left-0 z-10">
                      Application Window
                    </td>
                    {programs.map((program) => (
                      <td
                        key={program.id}
                        className="p-4 text-gray-700 dark:text-gray-300 border-l border-gray-200 dark:border-gray-800"
                      >
                        {program.window}
                      </td>
                    ))}
                  </tr>

                  {/* Status */}
                  <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="p-4 font-semibold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-950 sticky left-0 z-10">
                      Status
                    </td>
                    {programs.map((program) => (
                      <td
                        key={program.id}
                        className="p-4 border-l border-gray-200 dark:border-gray-800"
                      >
                        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                          {program.status}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Stipend */}
                  <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="p-4 font-semibold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-950 sticky left-0 z-10">
                      Stipend
                    </td>
                    {programs.map((program) => (
                      <td
                        key={program.id}
                        className="p-4 border-l border-gray-200 dark:border-gray-800"
                      >
                        {program.stipendPaid ? (
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                            <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                              {program.stipend}
                            </span>
                          </div>
                        ) : (
                          <span className="text-gray-500 dark:text-gray-400">No stipend</span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Eligibility Type */}
                  <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="p-4 font-semibold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-950 sticky left-0 z-10">
                      Eligibility
                    </td>
                    {programs.map((program) => (
                      <td
                        key={program.id}
                        className="p-4 text-gray-700 dark:text-gray-300 border-l border-gray-200 dark:border-gray-800"
                      >
                        <span className="px-2 py-1 text-xs font-medium rounded-full inline-block bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">
                          {program.eligibilityType}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Eligibility Details */}
                  <tr className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="p-4 font-semibold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-950 sticky left-0 z-10">
                      Requirements
                    </td>
                    {programs.map((program) => (
                      <td
                        key={program.id}
                        className="p-4 border-l border-gray-200 dark:border-gray-800"
                      >
                        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                          {program.eligibility}
                        </p>
                      </td>
                    ))}
                  </tr>

                  {/* Region */}
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="p-4 font-semibold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-950 sticky left-0 z-10">
                      Region
                    </td>
                    {programs.map((program) => (
                      <td
                        key={program.id}
                        className="p-4 text-gray-700 dark:text-gray-300 border-l border-gray-200 dark:border-gray-800"
                      >
                        {program.region}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer (from bottom) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 z-50 rounded-t-2xl shadow-2xl border-t border-gray-200 dark:border-gray-800 max-h-[90vh] flex flex-col"
          >
            {/* Mobile Header with Drag Handle */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-800 shrink-0">
              <div className="flex items-center justify-between mb-3">
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                    Compare Programs
                  </h2>
                  <p className="text-xs text-gray-500 mt-1">
                    {programs.length} of 4 programs selected
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="text-gray-600 dark:text-gray-400"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    programs.forEach((p) => onRemove(String(p.id)));
                  }}
                  className="w-full text-sm"
                >
                  Clear All
                </Button>
              </div>
            </div>

            {/* Mobile Comparison Cards */}
            <div className="flex-1 overflow-auto p-4 space-y-4">
              {programs.map((program) => (
                <div
                  key={program.id}
                  className="border border-gray-200 dark:border-gray-800 rounded-xl p-4 bg-gray-50 dark:bg-gray-950"
                >
                  {/* Program Header with Remove Button */}
                  <div className="flex items-start justify-between mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        {program.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">{program.short}</p>
                    </div>
                    <button
                      onClick={() => onRemove(String(program.id))}
                      className="text-gray-400 hover:text-red-500 dark:text-gray-600 dark:hover:text-red-400 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Program Details Grid */}
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium text-gray-600 dark:text-gray-400 text-xs mb-1">
                        Status
                      </p>
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                        {program.status}
                      </span>
                    </div>

                    <div>
                      <p className="font-medium text-gray-600 dark:text-gray-400 text-xs mb-1">
                        Application Window
                      </p>
                      <p className="text-gray-900 dark:text-white">{program.window}</p>
                    </div>

                    <div>
                      <p className="font-medium text-gray-600 dark:text-gray-400 text-xs mb-1">
                        Stipend
                      </p>
                      {program.stipendPaid ? (
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                            {program.stipend}
                          </span>
                        </div>
                      ) : (
                        <span className="text-gray-500 dark:text-gray-400">No stipend</span>
                      )}
                    </div>

                    <div>
                      <p className="font-medium text-gray-600 dark:text-gray-400 text-xs mb-1">
                        Eligibility
                      </p>
                      <span className="px-2 py-1 text-xs font-medium rounded-full inline-block bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">
                        {program.eligibilityType}
                      </span>
                    </div>

                    <div>
                      <p className="font-medium text-gray-600 dark:text-gray-400 text-xs mb-1">
                        Requirements
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-2">
                        {program.eligibility}
                      </p>
                    </div>

                    <div>
                      <p className="font-medium text-gray-600 dark:text-gray-400 text-xs mb-1">
                        Region
                      </p>
                      <p className="text-gray-900 dark:text-white">{program.region}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
