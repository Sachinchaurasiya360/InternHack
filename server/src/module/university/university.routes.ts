import { Router } from "express";
import { searchUniversities } from "./university.service.js";

export const universityRouter = Router();

// GET /api/universities/search?name=...
universityRouter.get("/search", async (req, res) => {
  const name = String(req.query["name"] || "").trim();
  if (name.length < 2) {
    res.json([]);
    return;
  }

  try {
    const results = await searchUniversities(name);
    res.json(results);
  } catch {
    res.status(502).json({ message: "University search unavailable" });
  }
});
