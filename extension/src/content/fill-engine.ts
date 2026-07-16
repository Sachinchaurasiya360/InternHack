import type { FieldMapping, NormalizedProfile } from "../lib/types";

type FillableProfileKey = Exclude<FieldMapping["kind"], "customQuestion" | "unknown">;

function isFillableProfileKey(kind: FieldMapping["kind"]): kind is FillableProfileKey {
  return kind !== "customQuestion" && kind !== "unknown";
}

function valueFor(profile: NormalizedProfile, mapping: FieldMapping): string {
  if (!isFillableProfileKey(mapping.kind)) return "";
  return profile[mapping.kind] || profile.customFields[mapping.label] || "";
}

function setNativeValue(element: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, value: string) {
  const prototype = Object.getPrototypeOf(element);
  const descriptor = Object.getOwnPropertyDescriptor(prototype, "value");
  descriptor?.set?.call(element, value);
  element.dispatchEvent(new Event("input", { bubbles: true }));
  element.dispatchEvent(new Event("change", { bubbles: true }));
}

function highlight(element: HTMLElement) {
  const previous = element.style.boxShadow;
  element.style.boxShadow = "0 0 0 2px #a3e635";
  window.setTimeout(() => {
    element.style.boxShadow = previous;
  }, 1400);
}

export function fillFields(profile: NormalizedProfile, fields: FieldMapping[]) {
  let filledCount = 0;
  const failed: FieldMapping[] = [];

  for (const field of fields) {
    const value = valueFor(profile, field);
    if (!value || field.confidence < 0.55) continue;
    if (field.element.value.trim()) continue;

    try {
      if (field.element instanceof HTMLSelectElement) {
        const option = Array.from(field.element.options).find((candidate) =>
          candidate.text.toLowerCase().includes(value.toLowerCase()) ||
          candidate.value.toLowerCase().includes(value.toLowerCase()),
        );
        if (!option) continue;
        setNativeValue(field.element, option.value);
      } else if (field.element.type === "file") {
        failed.push(field);
        continue;
      } else {
        setNativeValue(field.element, value);
      }
      highlight(field.element);
      filledCount += 1;
    } catch {
      failed.push(field);
    }
  }

  return { fieldCount: fields.length, filledCount, failedCount: failed.length, failed };
}

