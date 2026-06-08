import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export interface TableOfContentsItem {
    id: string;
    label: string;
    depth: number;
}

const sectionLabels: Record<string, string> = {
    explanation: "Explanation",
    codeExamples: "Code examples",
    notes: "Notes",
    commonPitfalls: "Common pitfalls",
    interviewTips: "Interview tips",
    practice: "Practice",
};

const sectionOrder = [
    "explanation",
    "codeExamples",
    "notes",
    "commonPitfalls",
    "interviewTips",
    "practice",
] as const;

type SectionKey = (typeof sectionOrder)[number];

function hasSection(content: Record<string, unknown>, key: SectionKey): boolean {
    if (key === "practice") {
        return false;
    }

    const value = content[key];
    if (value == null) {
        return false;
    }

    if (Array.isArray(value)) {
        return value.length > 0;
    }

    if (typeof value === "string") {
        return value.trim().length > 0;
    }

    return true;
}

function buildItems(content: Record<string, unknown>, hasPractice: boolean): TableOfContentsItem[] {
    return sectionOrder.reduce<TableOfContentsItem[]>((items, key) => {
        if (key === "practice") {
            if (!hasPractice) {
                return items;
            }
        } else if (!hasSection(content, key)) {
            return items;
        }

        items.push({
            id: key,
            label: sectionLabels[key] ?? key,
            depth: 1,
        });
        return items;
    }, []);
}

const STORAGE_PREFIX = "lesson-toc-progress";

export function useTableOfContents(
    lessonId: string,
    content: Record<string, unknown>,
    hasPractice: boolean,
) {
    const items = useMemo(() => buildItems(content, hasPractice), [content, hasPractice]);
    const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);
    const [checkedIds, setCheckedIds] = useState<string[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const storageKey = `${STORAGE_PREFIX}:${lessonId}`;

    useEffect(() => {
        setActiveId(items[0]?.id ?? null);
    }, [items]);

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        try {
            const stored = JSON.parse(window.localStorage.getItem(storageKey) ?? "[]");
            if (Array.isArray(stored)) {
                const valid = stored.filter((item) => typeof item === "string" && items.some((toc) => toc.id === item));
                setCheckedIds(valid);
            }
        } catch {
            setCheckedIds([]);
        }
    }, [storageKey, items]);

    useEffect(() => {
        if (items.length === 0) {
            setActiveId(null);
            return;
        }

        const root = containerRef.current ?? document.body;
        const sectionElements = items
            .map((item) => (root.querySelector(`[data-toc-id="${item.id}"]`) as HTMLElement | null))
            .filter((el): el is HTMLElement => el !== null);

        if (sectionElements.length === 0) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

                if (visible.length > 0) {
                    const newActiveId = visible[0].target.getAttribute("data-toc-id");
                    if (newActiveId) {
                        setActiveId(newActiveId);
                    }
                }
            },
            {
                root: null,
                rootMargin: "0px 0px -70% 0px",
                threshold: [0.1, 0.4, 0.8],
            },
        );

        sectionElements.forEach((element) => observer.observe(element));

        return () => {
            sectionElements.forEach((element) => observer.unobserve(element));
            observer.disconnect();
        };
    }, [items]);

    const toggleSection = useCallback(
        (id: string) => {
            setCheckedIds((current) => {
                const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
                if (typeof window !== "undefined") {
                    window.localStorage.setItem(storageKey, JSON.stringify(next));
                }
                return next;
            });
        },
        [storageKey],
    );

    const allComplete = items.length > 0 && items.every((item) => checkedIds.includes(item.id));

    return {
        items,
        activeId,
        checkedIds,
        allComplete,
        toggleSection,
        containerRef,
    };
}
