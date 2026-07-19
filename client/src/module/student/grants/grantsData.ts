import { grantsWeb3 } from "./grants-web3";
import { grantsEducation } from "./grants-education";
import { grantsGaming } from "./grants-gaming";
import { grantsGovernment } from "./grants-government";
import { grantsResearch } from "./grants-research";
import { grantsGlobalYouth } from "./grants-global-youth";
import { grantsUniversity } from "./grants-university";
import { grantsAccelerator } from "./grants-accelerator";
import { grantsClimate } from "./grants-climate";
import { grantsAiDeepTech } from "./grants-ai-deeptech";

export interface Grant {
  id: number;
  name: string;
  deadline: string;
  organization: string;
  logo: string;
  description: string;
  fundingAmount: string;
  category: GrantCategory;
  tags: string[];
  website: string;
  eligibility: string[];
  status: "Active" | "Paused" | "Invite Only";
  ecosystem: string;
  highlights: string[];
}

export type GrantCategory =
  | "Web3"
  | "Gaming"
  | "Education"
  | "Government"
  | "Research"
  | "Global Youth"
  | "University"
  | "Accelerator"
  | "Climate"
  | "AI & Deep Tech";

// Startup-relevant categories first (non-dilutive/founder funding), academic and
// student-only categories last.
export const GRANT_CATEGORIES: GrantCategory[] = [
  "Government",
  "Accelerator",
  "AI & Deep Tech",
  "Web3",
  "Climate",
  "Research",
  "University",
  "Global Youth",
  "Education",
  "Gaming",
];

export const grants: Grant[] = [
  ...grantsWeb3,
  ...grantsEducation,
  ...grantsGaming,
  ...grantsGovernment,
  ...grantsResearch,
  ...grantsGlobalYouth,
  ...grantsUniversity,
  ...grantsAccelerator,
  ...grantsClimate,
  ...grantsAiDeepTech,
];
