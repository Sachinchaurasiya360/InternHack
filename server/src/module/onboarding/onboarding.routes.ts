import { Router } from "express";
import { OnboardingController } from "./onboarding.controller.js";
import { OnboardingService } from "./onboarding.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { requirePermission } from "../../middleware/permission.middleware.js";

const onboardingService = new OnboardingService();
const onboardingController = new OnboardingController(onboardingService);

export const onboardingRouter = Router();

onboardingRouter.use(authMiddleware);

onboardingRouter.post("/", requirePermission("HR_WRITE", "HR_ADMIN"), (req, res) => onboardingController.create(req, res));
onboardingRouter.get("/", requirePermission("HR_READ", "HR_WRITE"), (req, res) => onboardingController.getAll(req, res));
onboardingRouter.get("/:employeeId", requirePermission("HR_READ", "EMPLOYEE_READ"), (req, res) => onboardingController.getByEmployeeId(req, res));
onboardingRouter.patch("/:employeeId/item", requirePermission("HR_READ", "HR_WRITE"), (req, res) => onboardingController.updateItem(req, res));
onboardingRouter.delete("/:employeeId", requirePermission("HR_ADMIN"), (req, res) => onboardingController.delete(req, res));
