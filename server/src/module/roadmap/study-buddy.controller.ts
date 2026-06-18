import type { Request, Response, NextFunction } from "express";
import { StudyBuddyService } from "./study-buddy.service.js";
import { studyBuddyParams, studyBuddyOptInSchema } from "./study-buddy.validation.js";

const service = new StudyBuddyService();

const validationError = (res: Response, errors: unknown) =>
  res.status(400).json({ message: "Validation failed", errors });

/**
 * GET /roadmaps/:roadmapId/study-buddy
 * Retrieve current user's study buddy preferences and matched buddy details (if any).
 */
export async function getStudyBuddy(req: Request, res: Response, next: NextFunction) {
  try {
    const params = studyBuddyParams.safeParse(req.params);
    if (!params.success) {
      validationError(res, params.error.flatten().fieldErrors);
      return;
    }

    const userId = req.user!.id;
    const roadmapId = params.data.roadmapId;

    const preference = await service.getPreference(userId, roadmapId);
    if (!preference || !preference.enabled) {
      res.json({
        enabled: false,
        preferSameCollege: preference?.preferSameCollege ?? false,
        status: "NOT_OPTED_IN",
        buddy: null,
      });
      return;
    }

    const buddy = await service.getActiveBuddyDetails(userId, roadmapId);
    res.json({
      enabled: true,
      preferSameCollege: preference.preferSameCollege,
      status: buddy ? "MATCHED" : "SEARCHING",
      buddy,
    });
  } catch (err) {
    next(err);
  }
}

/**
 * POST /roadmaps/:roadmapId/study-buddy/opt-in
 * Opt in to study buddy matching.
 */
export async function postOptIn(req: Request, res: Response, next: NextFunction) {
  try {
    const params = studyBuddyParams.safeParse(req.params);
    if (!params.success) {
      validationError(res, params.error.flatten().fieldErrors);
      return;
    }

    const body = studyBuddyOptInSchema.safeParse(req.body);
    if (!body.success) {
      validationError(res, body.error.flatten().fieldErrors);
      return;
    }

    const userId = req.user!.id;
    const roadmapId = params.data.roadmapId;
    const { preferSameCollege } = body.data;

    const pair = await service.optIn(userId, roadmapId, preferSameCollege);
    const buddy = await service.getActiveBuddyDetails(userId, roadmapId);

    res.status(200).json({
      message: "Opted in successfully",
      status: pair ? "MATCHED" : "SEARCHING",
      pair: pair ? { id: pair.id, matchedAt: pair.matchedAt } : null,
      buddy,
    });
  } catch (err) {
    if (err && typeof err === "object" && "status" in err) {
      const e = err as { status: number; message: string };
      res.status(e.status).json({ message: e.message });
      return;
    }
    next(err);
  }
}

/**
 * DELETE /roadmaps/:roadmapId/study-buddy/opt-in
 * Opt out / leave matching pool.
 */
export async function deleteOptIn(req: Request, res: Response, next: NextFunction) {
  try {
    const params = studyBuddyParams.safeParse(req.params);
    if (!params.success) {
      validationError(res, params.error.flatten().fieldErrors);
      return;
    }

    const userId = req.user!.id;
    const roadmapId = params.data.roadmapId;

    await service.optOut(userId, roadmapId);

    res.status(200).json({
      message: "Left matching pool successfully",
    });
  } catch (err) {
    next(err);
  }
}

/**
 * POST /roadmaps/:roadmapId/study-buddy/rematch
 * Trigger rematching.
 */
export async function postRematch(req: Request, res: Response, next: NextFunction) {
  try {
    const params = studyBuddyParams.safeParse(req.params);
    if (!params.success) {
      validationError(res, params.error.flatten().fieldErrors);
      return;
    }

    const userId = req.user!.id;
    const roadmapId = params.data.roadmapId;

    const pair = await service.rematch(userId, roadmapId);
    const buddy = await service.getActiveBuddyDetails(userId, roadmapId);

    res.status(200).json({
      message: "Rematched process finished",
      status: pair ? "MATCHED" : "SEARCHING",
      pair: pair ? { id: pair.id, matchedAt: pair.matchedAt } : null,
      buddy,
    });
  } catch (err) {
    if (err && typeof err === "object" && "status" in err) {
      const e = err as { status: number; message: string };
      res.status(e.status).json({ message: e.message });
      return;
    }
    next(err);
  }
}
