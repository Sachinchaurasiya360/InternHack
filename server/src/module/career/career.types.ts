export interface CareerListItem {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  difficulty: string;
  iconUrl: string | null;
  avgSalary: string | null;
  demandLevel: string | null;
  _count: { phases: number; enrollments: number };
}

export interface CareerDetail {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  difficulty: string;
  iconUrl: string | null;
  avgSalary: string | null;
  demandLevel: string | null;
  phases: PhaseDetail[];
}

export interface PhaseDetail {
  id: number;
  title: string;
  description: string | null;
  orderIndex: number;
  durationWeeks: number | null;
  skills: SkillItem[];
  resources: ResourceItem[];
  tools: ToolItem[];
}

export interface SkillItem {
  id: number;
  name: string;
  level: string;
  completed?: boolean;
}

export interface ResourceItem {
  id: number;
  title: string;
  url: string;
  type: string;
  free: boolean;
}

export interface ToolItem {
  id: number;
  name: string;
  url: string | null;
  category: string | null;
}

export interface MyPathItem {
  id: number;
  careerId: number;
  status: string;
  career: CareerListItem;
  progress: number;
  completedSkills: number;
  totalSkills: number;
}
