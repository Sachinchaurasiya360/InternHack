import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../../lib/axios";
import { queryKeys } from "../../../lib/query-keys";
import type { JobPreferences } from "../../../lib/types";

interface Props {
  open: boolean;
  onClose: () => void;
  current: JobPreferences | null;
}

const WORK_MODES = ["REMOTE", "HYBRID", "ONSITE"];
const EXP_LEVELS = ["INTERN", "ENTRY", "MID", "SENIOR"];
const DOMAINS = ["frontend", "backend", "fullstack", "devops", "data", "ml", "mobile"];

export function JobPreferencesModal({ open, onClose, current }: Props) {
  const qc = useQueryClient();
  const [roles, setRoles] = useState("");
  const [skills, setSkills] = useState("");
  const [locations, setLocations] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [workMode, setWorkMode] = useState<string[]>([]);
  const [experienceLevel, setExperienceLevel] = useState<string[]>([]);
  const [domains, setDomains] = useState<string[]>([]);

  useEffect(() => {
    if (current) {
      setRoles(current.desiredRoles?.join(", ") || "");
      setSkills(current.desiredSkills?.join(", ") || "");
      setLocations(current.desiredLocations?.join(", ") || "");
      setMinSalary(current.minSalary ? String(current.minSalary / 100000) : "");
      setWorkMode(current.workMode || []);
      setExperienceLevel(current.experienceLevel || []);
      setDomains(current.domains || []);
    }
  }, [current]);

  const mutation = useMutation({
    mutationFn: async (data: Partial<JobPreferences>) => {
      const res = await api.put("/job-feed/preferences", data);
      return res.data;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["job-feed"] });
      onClose();
    },
  });

  const handleSave = () => {
    const split = (s: string) =>
      s.split(",").map((v) => v.trim()).filter(Boolean);

    mutation.mutate({
      desiredRoles: split(roles),
      desiredSkills: split(skills),
      desiredLocations: split(locations),
      minSalary: minSalary ? Number(minSalary) * 100000 : null,
      workMode,
      experienceLevel,
      domains,
    });
  };

  const toggleItem = (arr: string[], set: (v: string[]) => void, val: string) => {
    set(arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val]);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
                <h2 className="text-lg font-bold text-gray-950 dark:text-white">Job Preferences</h2>
                <button onClick={onClose} className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-5">
                {/* Text inputs */}
                {([
                  { label: "Desired Roles", value: roles, set: setRoles, placeholder: "e.g. Frontend Developer, React Engineer" },
                  { label: "Skills", value: skills, set: setSkills, placeholder: "e.g. React, TypeScript, Node.js" },
                  { label: "Preferred Locations", value: locations, set: setLocations, placeholder: "e.g. Bangalore, Remote, Mumbai" },
                ] as const).map(({ label, value, set, placeholder }) => (
                  <div key={label}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">{label}</label>
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => set(e.target.value)}
                      placeholder={placeholder}
                      className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:text-white dark:placeholder-gray-500"
                    />
                    <p className="text-xs text-gray-400 mt-1">Separate with commas</p>
                  </div>
                ))}

                {/* Salary */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Min Salary (LPA)</label>
                  <input
                    type="number"
                    value={minSalary}
                    onChange={(e) => setMinSalary(e.target.value)}
                    placeholder="e.g. 6"
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:text-white dark:placeholder-gray-500"
                  />
                </div>

                {/* Checkbox groups */}
                {([
                  { label: "Work Mode", items: WORK_MODES, selected: workMode, set: setWorkMode },
                  { label: "Experience Level", items: EXP_LEVELS, selected: experienceLevel, set: setExperienceLevel },
                  { label: "Domain", items: DOMAINS, selected: domains, set: setDomains },
                ] as const).map(({ label, items, selected, set }) => (
                  <div key={label}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{label}</label>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <button
                          key={item}
                          onClick={() => toggleItem([...selected], set, item)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                            selected.includes(item)
                              ? "bg-gray-950 dark:bg-white text-white dark:text-gray-950"
                              : "bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-gray-300"
                          }`}
                        >
                          {item.charAt(0) + item.slice(1).toLowerCase()}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-gray-100 dark:border-gray-800 flex justify-end gap-3">
                <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors">
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={mutation.isPending}
                  className="px-5 py-2 text-sm font-semibold bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50"
                >
                  {mutation.isPending ? "Saving..." : "Save Preferences"}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
