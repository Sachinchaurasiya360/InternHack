import { Router } from "express";
import { Prisma } from "@prisma/client";
import { prisma } from "../../database/db.js";

export const universityRouter = Router();

interface CollegeSearchRow {
  name: string;
  state: string;
  district: string | null;
}

// Public: college/university autocomplete for the student profile page,
// backed by the AISHE (All India Survey on Higher Education) directory.
universityRouter.get("/search", async (req, res, next) => {
  try {
    const name = typeof req.query["name"] === "string" ? req.query["name"].trim() : "";
    if (name.length < 2) {
      res.json([]);
      return;
    }

    const results = await prisma.$queryRaw<CollegeSearchRow[]>(Prisma.sql`
      SELECT name, state, district
      FROM "college"
      WHERE name ILIKE ${`%${name}%`}
      ORDER BY similarity(name, ${name}) DESC, length(name) ASC
      LIMIT 15
    `);

    res.json(
      results.map((r) => ({
        name: r.name,
        country: "India",
        "state-province": r.district ? `${r.district}, ${r.state}` : r.state,
      })),
    );
  } catch (err) {
    next(err);
  }
});
