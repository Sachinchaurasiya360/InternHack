import { CheckCircle2 } from "lucide-react";
import type { TableOfContentsItem } from "../../hooks/useTableOfContents";

interface LessonTableOfContentsProps {
    items: TableOfContentsItem[];
    activeId: string | null;
    checkedIds: string[];
    allComplete: boolean;
    onToggleSection: (id: string) => void;
    onNavigate: (id: string) => void;
}

export function LessonTableOfContents({
    items,
    activeId,
    checkedIds,
    allComplete,
    onToggleSection,
    onNavigate,
}: LessonTableOfContentsProps) {
    return (
        <aside className="sticky top-20 self-start">
            <div className="rounded-3xl border border-stone-200/80 bg-white/95 dark:border-white/10 dark:bg-stone-950/95 shadow-sm overflow-hidden">
                <div className="px-5 py-5 border-b border-stone-200/80 dark:border-white/10">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-stone-500 dark:text-stone-400">
                        On this page
                    </p>
                    <p className="mt-3 text-sm leading-6 text-stone-700 dark:text-stone-300">
                        {allComplete ? "Quiz unlocked — great work." : "Mark each section complete to unlock the quiz."}
                    </p>
                </div>

                <div className="px-5 py-4 border-b border-stone-200/80 dark:border-white/10">
                    <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold text-stone-900 dark:text-white">Section progress</p>
                        <span className="text-xs uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400">
                            {items.length > 0 ? `${checkedIds.length}/${items.length}` : "0/0"}
                        </span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-stone-100 dark:bg-white/10 overflow-hidden">
                        <div
                            className="h-full rounded-full bg-indigo-600 dark:bg-indigo-400 transition-all"
                            style={{ width: `${items.length ? (checkedIds.length / items.length) * 100 : 0}%` }}
                        />
                    </div>
                </div>

                <div className="px-2 py-3 space-y-2">
                    {items.map((item) => {
                        const isActive = item.id === activeId;
                        const isChecked = checkedIds.includes(item.id);
                        return (
                            <div
                                key={item.id}
                                className={`group flex items-center justify-between gap-3 rounded-2xl px-3 py-3 transition ${isActive
                                        ? "bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-400/20"
                                        : "border border-transparent hover:border-stone-200 dark:hover:border-white/10"
                                    }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => onNavigate(item.id)}
                                    className="text-left text-sm font-medium leading-5 text-stone-900 dark:text-white w-full"
                                >
                                    {item.label}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => onToggleSection(item.id)}
                                    aria-label={`Toggle ${item.label} complete`}
                                    className={`flex h-9 w-9 items-center justify-center rounded-full border transition ${isChecked
                                            ? "border-lime-400 bg-lime-400 text-white"
                                            : "border-stone-200 bg-white text-stone-500 dark:border-white/10 dark:bg-stone-950 dark:text-stone-400"
                                        }`}
                                >
                                    {isChecked ? <CheckCircle2 className="w-4 h-4" /> : <span className="text-xs">✓</span>}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
}
