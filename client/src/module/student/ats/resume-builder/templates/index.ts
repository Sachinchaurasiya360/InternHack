import type { TemplateConfig, TemplateId } from "../types";
import ClassicTemplate from "./ClassicTemplate";
import ModernTemplate from "./ModernTemplate";
import MinimalTemplate from "./MinimalTemplate";
import ProfessionalTemplate from "./ProfessionalTemplate";
import CreativeTemplate from "./CreativeTemplate";
import CompactTemplate from "./CompactTemplate";

export const TEMPLATES: TemplateConfig[] = [
  {
    id: "classic",
    name: "Classic",
    description: "Traditional ATS-friendly layout",
    accent: "border-gray-800",
    component: ClassicTemplate,
  },
  {
    id: "modern",
    name: "Modern",
    description: "Sidebar layout with accent colors",
    accent: "border-indigo-600",
    component: ModernTemplate,
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Clean, whitespace-focused design",
    accent: "border-gray-400",
    component: MinimalTemplate,
  },
  {
    id: "professional",
    name: "Professional",
    description: "Bold header with structured layout",
    accent: "border-gray-900",
    component: ProfessionalTemplate,
  },
  {
    id: "creative",
    name: "Creative",
    description: "Gradient sidebar with timeline dots",
    accent: "border-violet-600",
    component: CreativeTemplate,
  },
  {
    id: "compact",
    name: "Compact",
    description: "Dense layout for maximum content",
    accent: "border-emerald-600",
    component: CompactTemplate,
  },
];

export function getTemplate(id: TemplateId): TemplateConfig {
  return TEMPLATES.find((t) => t.id === id) ?? TEMPLATES[0];
}
