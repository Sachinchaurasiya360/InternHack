import { Router } from "express";
import * as controller from "./interview-schedule.controller";
import { validate } from "../../middleware/validation";
import { protect, authorizeRoles } from "../../middleware/auth";
import * as schema from "./interview-schedule.validation";

const router = Router();

router.use(protect);

router.post(
  "/",
  authorizeRoles("RECRUITER"),
  validate(schema.scheduleInterviewSchema),
  controller.scheduleInterview
);

router.get(
  "/",
  validate(schema.getInterviewsSchema),
  controller.getInterviews
);

router.get(
  "/:id",
  controller.getInterviewById
);

router.patch(
  "/:id",
  authorizeRoles("RECRUITER"),
  validate(schema.updateInterviewSchema),
  controller.updateInterview
);

router.delete(
  "/:id",
  authorizeRoles("RECRUITER"),
  controller.cancelInterview
);

export default router;
