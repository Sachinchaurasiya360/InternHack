import { z } from "zod";

export const listCollegesSchema = z.object({
  search: z.string().optional(),
  state: z.string().optional(),
  city: z.string().optional(),
  type: z.enum(["GOVERNMENT", "PRIVATE", "DEEMED", "AUTONOMOUS", "CENTRAL", "STATE"]).optional(),
  naacGrade: z.enum(["A_PLUS_PLUS", "A_PLUS", "A", "B_PLUS_PLUS", "B_PLUS", "B", "C", "UNGRADED"]).optional(),
  stream: z.string().optional(),
  exam: z.string().optional(),
  degreeLevel: z.enum(["DIPLOMA", "BACHELOR", "MASTER", "DOCTORAL", "CERTIFICATE"]).optional(),
  minFees: z.string().optional(),
  maxFees: z.string().optional(),
  minNirfRank: z.string().optional(),
  maxNirfRank: z.string().optional(),
  sortBy: z.enum(["nirfRanking", "avgRating", "name", "establishedYear", "reviewCount"]).optional(),
  sortOrder: z.enum(["asc", "desc"]).optional(),
  page: z.string().optional(),
  limit: z.string().optional(),
});

export const submitCollegeReviewSchema = z.object({
  overallRating: z.number().int().min(1).max(5),
  placementsRating: z.number().int().min(1).max(5).optional(),
  infrastructureRating: z.number().int().min(1).max(5).optional(),
  facultyRating: z.number().int().min(1).max(5).optional(),
  campusLifeRating: z.number().int().min(1).max(5).optional(),
  valueForMoneyRating: z.number().int().min(1).max(5).optional(),
  title: z.string().min(3).max(200),
  content: z.string().min(10).max(5000),
  pros: z.string().max(2000).optional(),
  cons: z.string().max(2000).optional(),
  courseStudied: z.string().max(200).optional(),
  graduationYear: z.number().int().min(1950).max(2030).optional(),
});

export const compareCollegesSchema = z.object({
  ids: z.string().min(1), // comma-separated IDs like "1,2,3"
});

export const getCutoffsSchema = z.object({
  examId: z.string().optional(),
  year: z.string().optional(),
  category: z.string().optional(),
  courseId: z.string().optional(),
});
