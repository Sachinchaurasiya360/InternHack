import type { FieldType } from "@prisma/client";

export interface CustomFieldDefinition {
  id: string;
  label: string;
  fieldType: FieldType;
  required: boolean;
  placeholder?: string;
  options?: string[];
  validation?: {
    min?: number;
    max?: number;
    maxLength?: number;
    maxFileSize?: number;
    allowedTypes?: string[];
  };
}

export interface EvaluationCriterion {
  id: string;
  criterion: string;
  maxScore: number;
  weight?: number;
}

export type CustomFieldAnswers = Record<string, string | number | boolean | string[]>;

export type EvaluationScores = Record<string, { score: number; comment?: string }>;
