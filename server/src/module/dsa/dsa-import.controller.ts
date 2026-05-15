import type { Request, Response, NextFunction } from "express";
import { DsaImportService } from "./dsa-import.service.js";
import { leetcodeImportSchema, csvImportSchema, confirmImportSchema } from "./dsa-import.validation.js";

// Feature flag — defaults ON; set LEETCODE_IMPORT_ENABLED=false to disable
function isEnabled(): boolean {
  return process.env["LEETCODE_IMPORT_ENABLED"] !== "false";
}

function featureDisabled(res: Response) {
  res.status(503).json({ message: "LeetCode import is currently unavailable." });
}

function mapError(code: string): { status: number; message: string } {
  switch (code) {
    case "USER_NOT_FOUND":
      return { status: 404, message: "We couldn't find a LeetCode profile with that username. Check the spelling." };
    case "PRIVATE_PROFILE":
      return {
        status: 422,
        message:
          "This LeetCode profile is private. Set your profile to public, then try again — or use the CSV import instead.",
      };
    case "RATE_LIMIT":
      return { status: 429, message: "You've reached the daily import limit (3 per day). Try again tomorrow." };
    case "TOKEN_EXPIRED":
      return { status: 410, message: "Import session expired. Please start the import again." };
    case "LEETCODE_DOWN":
      return { status: 503, message: "LeetCode import is temporarily unavailable. We're working on it — try again in a few minutes." };
    case "INVALID_CSV":
      return { status: 400, message: "CSV format not recognised. Make sure it includes a 'Slug' or 'Title' column." };
    default:
      return { status: 500, message: "Something went wrong. Please try again." };
  }
}

export class DsaImportController {
  constructor(private importService: DsaImportService) {}

  // POST /api/dsa/import/leetcode
  async previewLeetcode(req: Request, res: Response, next: NextFunction) {
    if (!isEnabled()) { featureDisabled(res); return; }
    try {
      const userId = req.user?.id;
      if (!userId) { res.status(401).json({ message: "Authentication required" }); return; }

      const parsed = leetcodeImportSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: parsed.error.issues[0]?.message ?? "Invalid input" });
        return;
      }

      const preview = await this.importService.previewLeetcodeImport(userId, parsed.data.username);
      res.json(preview);
    } catch (err: unknown) {
      const code = (err as { code?: string }).code;
      if (code) {
        const { status, message } = mapError(code);
        res.status(status).json({ message });
      } else {
        console.error("[DSA Import] previewLeetcode error:", err);
        next(err);
      }
    }
  }

  // POST /api/dsa/import/csv
  async previewCsv(req: Request, res: Response, next: NextFunction) {
    if (!isEnabled()) { featureDisabled(res); return; }
    try {
      const userId = req.user?.id;
      if (!userId) { res.status(401).json({ message: "Authentication required" }); return; }

      const parsed = csvImportSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: parsed.error.issues[0]?.message ?? "Invalid input" });
        return;
      }

      const preview = await this.importService.previewCsvImport(userId, parsed.data.csvContent);
      res.json(preview);
    } catch (err: unknown) {
      const code = (err as { code?: string }).code;
      if (code) {
        const { status, message } = mapError(code);
        res.status(status).json({ message });
      } else {
        console.error("[DSA Import] previewCsv error:", err);
        next(err);
      }
    }
  }

  // POST /api/dsa/import/confirm
  async confirm(req: Request, res: Response, next: NextFunction) {
    if (!isEnabled()) { featureDisabled(res); return; }
    try {
      const userId = req.user?.id;
      if (!userId) { res.status(401).json({ message: "Authentication required" }); return; }

      const parsed = confirmImportSchema.safeParse(req.body);
      if (!parsed.success) {
        res.status(400).json({ message: parsed.error.issues[0]?.message ?? "Invalid token" });
        return;
      }

      const result = await this.importService.confirmImport(userId, parsed.data.token);
      res.json(result);
    } catch (err: unknown) {
      const code = (err as { code?: string }).code;
      if (code) {
        const { status, message } = mapError(code);
        res.status(status).json({ message });
      } else {
        next(err);
      }
    }
  }

  // GET /api/dsa/import/status
  async status(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (!userId) { res.status(401).json({ message: "Authentication required" }); return; }
      const result = await this.importService.getImportStatus(userId);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}
