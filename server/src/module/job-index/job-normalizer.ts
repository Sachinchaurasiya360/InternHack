// ── Normalized job shape that all sources map to before entering jobIndex ──

export interface NormalizedJobInput {
  title: string;
  company: string;
  location: string;
  salary: string | null;
  description: string;
  tags: string[];
  applicationUrl: string | null;
  deadline?: Date | null;
}

export interface NormalizedJobOutput extends NormalizedJobInput {
  salaryMin: number | null;
  salaryMax: number | null;
  workMode: string | null;
}

const LOCATION_MAP: Record<string, string> = {
  bengaluru: "Bangalore",
  wfh: "Remote",
  "work from home": "Remote",
  noida: "Noida",
  gurgaon: "Gurugram",
  gurugram: "Gurugram",
};

export function normalizeLocation(raw: string): string {
  const lower = raw.toLowerCase().trim();
  for (const [key, val] of Object.entries(LOCATION_MAP)) {
    if (lower.includes(key)) return val;
  }
  return raw.trim().replace(/\b\w/g, (c) => c.toUpperCase());
}

export function detectWorkMode(location: string, description: string): string | null {
  const text = `${location} ${description}`.toLowerCase();
  if (text.includes("remote") || text.includes("wfh") || text.includes("work from home")) return "REMOTE";
  if (text.includes("hybrid")) return "HYBRID";
  if (text.includes("on-site") || text.includes("onsite") || text.includes("in-office")) return "ONSITE";
  return null;
}

export function parseSalary(raw: string | null): { min: number | null; max: number | null } {
  if (!raw) return { min: null, max: null };
  const text = raw.toLowerCase().replace(/,/g, "").replace(/₹/g, "").trim();

  // "X-Y LPA" or "X - Y lpa"
  const lpaRange = text.match(/(\d+(?:\.\d+)?)\s*[-–to]+\s*(\d+(?:\.\d+)?)\s*l(?:pa|akh)/i);
  if (lpaRange) {
    return {
      min: Math.round(parseFloat(lpaRange[1]) * 100000),
      max: Math.round(parseFloat(lpaRange[2]) * 100000),
    };
  }

  // Single "X LPA"
  const lpaSingle = text.match(/(\d+(?:\.\d+)?)\s*l(?:pa|akh)/i);
  if (lpaSingle) {
    const val = Math.round(parseFloat(lpaSingle[1]) * 100000);
    return { min: val, max: val };
  }

  // "X-Y K/month"
  const monthly = text.match(/(\d+)\s*[-–to]+\s*(\d+)\s*k?\s*(?:\/\s*month|per\s*month|pm)/i);
  if (monthly) {
    return {
      min: parseInt(monthly[1]) * 1000 * 12,
      max: parseInt(monthly[2]) * 1000 * 12,
    };
  }

  // "$Xk-$Yk" USD
  const usd = text.match(/\$\s*(\d+)\s*k?\s*[-–to]+\s*\$?\s*(\d+)\s*k/i);
  if (usd) {
    const rate = 83;
    return {
      min: parseInt(usd[1]) * 1000 * rate,
      max: parseInt(usd[2]) * 1000 * rate,
    };
  }

  return { min: null, max: null };
}

export function normalizeJob(input: NormalizedJobInput): NormalizedJobOutput {
  const { min, max } = parseSalary(input.salary);
  return {
    ...input,
    location: normalizeLocation(input.location),
    description: input.description.slice(0, 5000),
    salaryMin: min,
    salaryMax: max,
    workMode: detectWorkMode(input.location, input.description),
  };
}
