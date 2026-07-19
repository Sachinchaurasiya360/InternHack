import type { FieldKind, FieldMapping } from "../lib/types";

const FIELD_PATTERNS: Array<{ kind: FieldKind; patterns: RegExp[] }> = [
  { kind: "firstName", patterns: [/first\s*name/i, /given\s*name/i] },
  { kind: "lastName", patterns: [/last\s*name/i, /family\s*name/i, /surname/i] },
  { kind: "fullName", patterns: [/full\s*name/i, /^name$/i, /legal\s*name/i] },
  { kind: "email", patterns: [/e-?mail/i, /email\s*address/i] },
  { kind: "phone", patterns: [/phone/i, /mobile/i, /contact\s*number/i] },
  { kind: "location", patterns: [/location/i, /city/i, /current\s*address/i] },
  { kind: "linkedinUrl", patterns: [/linkedin/i] },
  { kind: "githubUrl", patterns: [/github/i] },
  { kind: "portfolioUrl", patterns: [/portfolio/i, /website/i, /personal\s*site/i] },
  { kind: "leetcodeUrl", patterns: [/leetcode/i] },
  { kind: "school", patterns: [/school/i, /university/i, /college/i, /institution/i] },
  { kind: "graduationYear", patterns: [/graduation\s*year/i, /grad\s*year/i, /expected\s*graduation/i] },
  { kind: "skills", patterns: [/skills/i, /technologies/i, /tech\s*stack/i] },
  { kind: "resumeUrl", patterns: [/resume/i, /cv/i] },
  { kind: "bio", patterns: [/summary/i, /about/i, /cover\s*letter/i] },
];

function textOf(node: Element | null): string {
  return node?.textContent?.replace(/\s+/g, " ").trim() || "";
}

function labelFor(element: HTMLElement): string {
  const aria = element.getAttribute("aria-label") || element.getAttribute("placeholder") || "";
  const name = element.getAttribute("name") || element.getAttribute("id") || "";
  const id = element.getAttribute("id");
  const label = id ? document.querySelector(`label[for="${CSS.escape(id)}"]`) : null;
  const closestLabel = element.closest("label");
  const wrapper = element.closest("div,fieldset,section");
  return [aria, textOf(label), textOf(closestLabel), name, textOf(wrapper)]
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function inferKind(label: string, element: HTMLElement): { kind: FieldKind; confidence: number } {
  const type = element.getAttribute("type") || "";
  const autocomplete = element.getAttribute("autocomplete") || "";
  const haystack = `${label} ${type} ${autocomplete}`;
  if (type === "email" || autocomplete === "email") return { kind: "email", confidence: 0.95 };
  if (type === "tel" || autocomplete.includes("tel")) return { kind: "phone", confidence: 0.9 };
  if (type === "file" && /resume|cv/i.test(label)) return { kind: "resumeUrl", confidence: 0.85 };
  for (const field of FIELD_PATTERNS) {
    if (field.patterns.some((pattern) => pattern.test(haystack))) {
      return { kind: field.kind, confidence: 0.78 };
    }
  }
  if (element.tagName === "TEXTAREA") return { kind: "customQuestion", confidence: 0.42 };
  return { kind: "unknown", confidence: 0 };
}

function isSafeField(element: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) {
  const type = element.getAttribute("type")?.toLowerCase();
  if (["password", "hidden", "submit", "button", "reset", "checkbox", "radio"].includes(type || "")) {
    return false;
  }
  if (element.disabled) return false;
  if ((element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) && element.readOnly) {
    return false;
  }
  const label = labelFor(element);
  return !/password|credit card|card number|captcha|security code|ssn|social security/i.test(label);
}

export function findGenericFields(root: ParentNode = document): FieldMapping[] {
  const fields = Array.from(
    root.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>("input, textarea, select"),
  );
  return fields
    .filter(isSafeField)
    .map((element) => {
      const label = labelFor(element);
      const inferred = inferKind(label, element);
      return { element, label, ...inferred };
    })
    .filter((mapping) => mapping.kind !== "unknown");
}

