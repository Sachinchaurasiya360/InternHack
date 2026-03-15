export const hrKeys = {
  analytics: {
    dashboard: () => ["hr", "analytics", "dashboard"] as const,
    headcountDept: () => ["hr", "analytics", "headcount", "department"] as const,
    headcountType: () => ["hr", "analytics", "headcount", "type"] as const,
    attrition: (months?: number) => ["hr", "analytics", "attrition", months] as const,
    leave: (year?: number) => ["hr", "analytics", "leave", year] as const,
    attendance: (month?: number, year?: number) => ["hr", "analytics", "attendance", month, year] as const,
    payroll: (month?: number, year?: number) => ["hr", "analytics", "payroll", month, year] as const,
  },
  employees: {
    list: (params?: Record<string, unknown>) => ["hr", "employees", params] as const,
    detail: (id: number) => ["hr", "employees", id] as const,
    timeline: (id: number) => ["hr", "employees", id, "timeline"] as const,
  },
  departments: {
    list: () => ["hr", "departments"] as const,
    orgChart: () => ["hr", "departments", "org-chart"] as const,
    detail: (id: number) => ["hr", "departments", id] as const,
  },
  leave: {
    all: (params?: Record<string, unknown>) => ["hr", "leave", "all", params] as const,
    team: () => ["hr", "leave", "team"] as const,
    balance: (empId?: number) => ["hr", "leave", "balance", empId] as const,
    calendar: () => ["hr", "leave", "calendar"] as const,
    policies: () => ["hr", "leave", "policies"] as const,
    holidays: (year?: number) => ["hr", "leave", "holidays", year] as const,
  },
  attendance: {
    team: (date?: string) => ["hr", "attendance", "team", date] as const,
    report: (params?: Record<string, unknown>) => ["hr", "attendance", "report", params] as const,
    today: (empId?: number) => ["hr", "attendance", "today", empId] as const,
    my: (empId?: number, params?: Record<string, unknown>) => ["hr", "attendance", "my", empId, params] as const,
  },
  interviews: {
    list: (params?: Record<string, unknown>) => ["hr", "interviews", params] as const,
    calendar: (start?: string, end?: string) => ["hr", "interviews", "calendar", start, end] as const,
    detail: (id: number) => ["hr", "interviews", id] as const,
  },
  tasks: {
    my: (params?: Record<string, unknown>) => ["hr", "tasks", "my", params] as const,
    team: (params?: Record<string, unknown>) => ["hr", "tasks", "team", params] as const,
    detail: (id: number) => ["hr", "tasks", id] as const,
  },
  performance: {
    team: (params?: Record<string, unknown>) => ["hr", "performance", "team", params] as const,
    my: (params?: Record<string, unknown>) => ["hr", "performance", "my", params] as const,
    detail: (id: number) => ["hr", "performance", id] as const,
  },
  payroll: {
    records: (params?: Record<string, unknown>) => ["hr", "payroll", "records", params] as const,
    detail: (id: number) => ["hr", "payroll", id] as const,
    my: (empId?: number) => ["hr", "payroll", "my", empId] as const,
    contractors: (params?: Record<string, unknown>) => ["hr", "payroll", "contractors", params] as const,
  },
  reimbursements: {
    list: (params?: Record<string, unknown>) => ["hr", "reimbursements", params] as const,
    my: (empId?: number) => ["hr", "reimbursements", "my", empId] as const,
    detail: (id: number) => ["hr", "reimbursements", id] as const,
  },
  onboarding: {
    list: (params?: Record<string, unknown>) => ["hr", "onboarding", params] as const,
    detail: (empId: number) => ["hr", "onboarding", empId] as const,
  },
  compliance: {
    list: (params?: Record<string, unknown>) => ["hr", "compliance", params] as const,
    expiring: (days?: number) => ["hr", "compliance", "expiring", days] as const,
    categories: () => ["hr", "compliance", "categories"] as const,
    detail: (id: number) => ["hr", "compliance", id] as const,
  },
  workflows: {
    definitions: () => ["hr", "workflows", "definitions"] as const,
    definitionDetail: (id: number) => ["hr", "workflows", "definitions", id] as const,
    instances: (params?: Record<string, unknown>) => ["hr", "workflows", "instances", params] as const,
    instanceDetail: (id: number) => ["hr", "workflows", "instances", id] as const,
  },
  roles: {
    list: () => ["hr", "roles"] as const,
    detail: (id: number) => ["hr", "roles", id] as const,
    permissions: () => ["hr", "permissions"] as const,
    assignments: (userId?: number) => ["hr", "roles", "assignments", userId] as const,
  },
};
