/**
 * @feature Featured Projects Section
 * @description Drag-and-drop sortable projects section with built-at date.
 * Added as a contribution for GSSoC '26.
 */
import { useState } from "react";
import {
  ExternalLink,
  Github,
  Pencil,
  Plus,
  Trash2,
  X,
  GripVertical,
  Calendar,
} from "lucide-react";
import { Button } from "../../../../components/ui/button";
import type { ProjectItem } from "../../../../lib/types";
import { inputClass, labelClass } from "./styles";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function SortableProjectItem({
  project,
  isEditing,
  onEdit,
  onRemove,
}: {
  project: ProjectItem;
  isEditing: boolean;
  onEdit: () => void;
  onRemove: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: project.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-start gap-3 px-4 py-3 border rounded-md bg-white dark:bg-transparent ${
        isEditing
          ? "border-lime-400 dark:border-lime-700/50 shadow-sm"
          : "border-stone-200 dark:border-white/10"
      }`}
    >
      <div
        {...attributes}
        {...listeners}
        className="mt-1 shrink-0 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 cursor-grab active:cursor-grabbing"
      >
        <GripVertical className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate">
            {project.title}
          </h4>
          {project.builtAt && (
            <span className="text-xs text-stone-500 font-mono flex items-center gap-1 shrink-0">
              <Calendar className="w-3 h-3" /> {project.builtAt}
            </span>
          )}
        </div>
        <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
        {project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {project.techStack.map((t, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-xs font-mono uppercase tracking-wider bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded-md border border-stone-200 dark:border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        {(project.liveUrl || project.repoUrl) && (
          <div className="flex gap-3 mt-2.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 flex items-center gap-1 no-underline"
              >
                <ExternalLink className="w-3 h-3" /> live
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 flex items-center gap-1 no-underline"
              >
                <Github className="w-3 h-3" /> code
              </a>
            )}
          </div>
        )}
      </div>
      <div className="flex gap-1 shrink-0">
        <Button
          type="button"
          onClick={onEdit}
          aria-label="Edit project"
          variant="ghost"
          mode="icon"
          size="sm"
          className="text-stone-400 hover:text-stone-900 dark:hover:text-stone-50"
        >
          <Pencil className="w-3.5 h-3.5" />
        </Button>
        <Button
          type="button"
          onClick={onRemove}
          aria-label="Delete project"
          variant="destructive"
          appearance="ghost"
          mode="icon"
          size="sm"
          className="text-stone-400 hover:text-red-500"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </Button>
      </div>
    </div>
  );
}

function ProjectSummaryItem({ project }: { project: ProjectItem }) {
  return (
    <div className="flex items-start gap-3 px-4 py-3 border border-stone-200 dark:border-white/10 rounded-md bg-white dark:bg-transparent">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-bold text-stone-900 dark:text-stone-50 truncate">
            {project.title}
          </h4>
          {project.builtAt && (
            <span className="text-xs text-stone-500 font-mono flex items-center gap-1 shrink-0">
              <Calendar className="w-3 h-3" /> {project.builtAt}
            </span>
          )}
        </div>
        <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
          {project.description || "No description added."}
        </p>
        {project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {project.techStack.map((t, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-xs font-mono uppercase tracking-wider bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded-md border border-stone-200 dark:border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        {(project.liveUrl || project.repoUrl) && (
          <div className="flex gap-3 mt-2.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 flex items-center gap-1 no-underline"
              >
                <ExternalLink className="w-3 h-3" /> live
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 flex items-center gap-1 no-underline"
              >
                <Github className="w-3 h-3" /> code
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function ProjectsSection({
  projects,
  isEditing,
  onChange,
  errors,
}: {
  projects: ProjectItem[];
  isEditing: boolean;
  onChange: (p: ProjectItem[]) => void;
  errors?: string[];
}) {
  const [editing, setEditing] = useState<string | null>(null);
  const [draft, setDraft] = useState<ProjectItem>({
    id: "",
    title: "",
    description: "",
    techStack: [],
    liveUrl: "",
    repoUrl: "",
    builtAt: "",
  });
  const [techInput, setTechInput] = useState("");
  const [draftErrors, setDraftErrors] = useState<{
    liveUrl?: string;
    repoUrl?: string;
    builtAt?: string;
  }>({});

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = projects.findIndex((p) => p.id === active.id);
      const newIndex = projects.findIndex((p) => p.id === over.id);
      if (oldIndex >= 0 && newIndex >= 0) {
        onChange(arrayMove(projects, oldIndex, newIndex));
      }
    }
  };

  const startAdd = () => {
    if (projects.length >= 4) return;
    setDraftErrors({});
    const id = crypto.randomUUID();
    setDraft({
      id,
      title: "",
      description: "",
      techStack: [],
      liveUrl: "",
      repoUrl: "",
      builtAt: "",
    });
    setEditing(id);
  };

  const startEdit = (p: ProjectItem) => {
    setDraftErrors({});
    setDraft({ ...p, builtAt: p.builtAt || "" });
    setEditing(p.id);
    setTechInput("");
  };

  const save = () => {
    if (!draft.title.trim()) return;

    const errs: { liveUrl?: string; repoUrl?: string; builtAt?: string } = {};

    const urlRegex = /^https?:\/\/.+\..+/;
    const githubRegex = /^https?:\/\/(www\.)?github\.com\/.+/;

    if (draft.liveUrl && !urlRegex.test(draft.liveUrl.trim())) {
      errs.liveUrl = "Must be a valid URL (e.g. https://myproject.com)";
    }
    if (draft.repoUrl && !githubRegex.test(draft.repoUrl.trim())) {
      errs.repoUrl =
        "Must be a valid GitHub URL (e.g. https://github.com/user/repo)";
    }
    if (draft.builtAt && draft.builtAt.trim()) {
      const parsed = new Date(draft.builtAt.trim());
      const isValid = !isNaN(parsed.getTime());
      const isReasonable =
        parsed.getFullYear() >= 1900 &&
        parsed.getFullYear() <= new Date().getFullYear() + 1;
      if (!isValid || !isReasonable) {
        errs.builtAt = "Enter a valid date (e.g. 2024-06-01 or June 2024)";
      }
    }

    if (Object.keys(errs).length > 0) {
      setDraftErrors(errs);
      return;
    }

    setDraftErrors({});
    const exists = projects.find((p) => p.id === draft.id);
    if (exists) {
      onChange(projects.map((p) => (p.id === draft.id ? draft : p)));
    } else {
      onChange([...projects, draft]);
    }
    setEditing(null);
  };

  const remove = (id: string) => {
    onChange(projects.filter((p) => p.id !== id));
    if (editing === id) setEditing(null);
  };

  const addTech = () => {
    const t = techInput.trim();
    if (!t || draft.techStack.length >= 10) return;
    if (!draft.techStack.includes(t))
      setDraft((d) => ({ ...d, techStack: [...d.techStack, t] }));
    setTechInput("");
  };

  return (
    <div className="px-5 py-5 space-y-3">
      {errors && errors.length > 0 && (
        <p className="text-xs text-red-500 dark:text-red-400 px-1 font-mono">
          Project URLs must be valid (e.g. https://...)
        </p>
      )}

      {projects.length === 0 && !isEditing && (
        <p className="text-sm text-stone-400 dark:text-stone-600">No featured projects added yet.</p>
      )}

      {isEditing ? (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={projects.map((p) => p.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="space-y-3">
              {projects.map((p) => (
                <SortableProjectItem
                  key={p.id}
                  project={p}
                  isEditing={editing === p.id}
                  onEdit={() => startEdit(p)}
                  onRemove={() => remove(p.id)}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      ) : (
        <div className="space-y-3">
          {projects.map((p) => (
            <ProjectSummaryItem key={p.id} project={p} />
          ))}
        </div>
      )}

      {isEditing && editing && (
        <div className="px-4 py-4 border border-lime-300 dark:border-lime-700/40 bg-lime-50/40 dark:bg-lime-900/5 rounded-md space-y-3 mt-3 shadow-sm transition-all">
          <div>
            <label className={labelClass}>Title</label>
            <input
              type="text"
              value={draft.title}
              onChange={(e) =>
                setDraft((d) => ({ ...d, title: e.target.value }))
              }
              className={inputClass}
              placeholder="Project title"
              maxLength={100}
            />
          </div>
          <div>
            <label className={labelClass}>Description</label>
            <textarea
              value={draft.description}
              onChange={(e) =>
                setDraft((d) => ({ ...d, description: e.target.value }))
              }
              className={`${inputClass} resize-none`}
              rows={2}
              placeholder="Brief description..."
              maxLength={200}
            />
          </div>
          <div>
            <label className={labelClass}>Tech stack</label>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {draft.techStack.map((t, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 rounded-full border border-stone-200 dark:border-white/10"
                >
                  {t}
                  <Button
                    type="button"
                    onClick={() =>
                      setDraft((d) => ({
                        ...d,
                        techStack: d.techStack.filter((_, j) => j !== i),
                      }))
                    }
                    aria-label={`Remove ${t}`}
                    variant="ghost"
                    mode="icon"
                    size="sm"
                    className="opacity-60 hover:opacity-100 h-auto p-0 w-auto"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addTech();
                  }
                }}
                className={`${inputClass} flex-1`}
                placeholder="Add technology"
              />
              <Button
                type="button"
                onClick={addTech}
                aria-label="Add technology"
                variant="secondary"
                mode="icon"
                size="sm"
                className="shrink-0 w-10 h-10 border border-stone-300 dark:border-white/10 bg-transparent text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:border-stone-900 dark:hover:border-stone-50"
              >
                <Plus className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className={labelClass}>
                <ExternalLink className="w-3 h-3" /> Live URL
              </label>
              <input
                type="url"
                value={draft.liveUrl ?? ""}
                onChange={(e) => {
                  setDraft((d) => ({ ...d, liveUrl: e.target.value }));
                  setDraftErrors((e) => ({ ...e, liveUrl: undefined }));
                }}
                className={
                  draftErrors.liveUrl
                    ? `${inputClass} border-red-400`
                    : inputClass
                }
                placeholder="https://..."
              />
              {draftErrors.liveUrl && (
                <p className="text-xs text-red-500 mt-1 font-mono">
                  {draftErrors.liveUrl}
                </p>
              )}
            </div>
            <div>
              <label className={labelClass}>
                <Github className="w-3 h-3" /> Repo URL
              </label>
              <input
                type="url"
                value={draft.repoUrl ?? ""}
                onChange={(e) => {
                  setDraft((d) => ({ ...d, repoUrl: e.target.value }));
                  setDraftErrors((e) => ({ ...e, repoUrl: undefined }));
                }}
                className={
                  draftErrors.repoUrl
                    ? `${inputClass} border-red-400`
                    : inputClass
                }
                placeholder="https://github.com/..."
              />
              {draftErrors.repoUrl && (
                <p className="text-xs text-red-500 mt-1 font-mono">
                  {draftErrors.repoUrl}
                </p>
              )}
            </div>
            <div>
              <label className={labelClass}>
                <Calendar className="w-3 h-3" /> Built At
              </label>
              <input
                type="text"
                value={draft.builtAt ?? ""}
                onChange={(e) => {
                  setDraft((d) => ({ ...d, builtAt: e.target.value }));
                  setDraftErrors((e) => ({ ...e, builtAt: undefined }));
                }}
                className={
                  draftErrors.builtAt
                    ? `${inputClass} border-red-400`
                    : inputClass
                }
                placeholder="e.g. June 2024 or 2024-06-01"
                maxLength={30}
              />
              {draftErrors.builtAt && (
                <p className="text-xs text-red-500 mt-1 font-mono">
                  {draftErrors.builtAt}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-2 pt-1">
            <Button
              type="button"
              onClick={save}
              disabled={!draft.title.trim()}
              variant="primary"
              className="bg-lime-400 text-stone-950 hover:bg-lime-300 text-xs font-bold"
            >
              Save
            </Button>
            <Button
              type="button"
              onClick={() => { setDraftErrors({}); setEditing(null); }}
              variant="outline"
              className="text-xs font-bold text-stone-700 dark:text-stone-300 hover:border-stone-500 dark:hover:border-white/30"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {isEditing && projects.length < 4 && !editing && (
        <Button
          type="button"
          onClick={startAdd}
          variant="dashed"
          className="w-full h-auto py-3 text-sm text-stone-600 dark:text-stone-400 hover:border-stone-400 dark:hover:border-white/30 hover:text-stone-900 dark:hover:text-stone-50 mt-3"
        >
          <Plus className="w-4 h-4" /> Add project
        </Button>
      )}
    </div>
  );
}
