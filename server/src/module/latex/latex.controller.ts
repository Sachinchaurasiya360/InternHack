import type { Request, Response, NextFunction } from "express";
import type { LatexService } from "./latex.service.js";
import { compileLatexSchema } from "./latex.validation.js";

export class LatexController {
  constructor(private latexService: LatexService) {}

  async compile(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const validation = compileLatexSchema.safeParse(req.body);
      if (!validation.success) {
        res.status(400).json({
          message: "Validation failed",
          errors: validation.error.flatten(),
        });
        return;
      }

      const pdfBuffer = await this.latexService.compile(validation.data.source);

      res.set({
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="resume.pdf"',
        "Content-Length": pdfBuffer.length.toString(),
      });
      res.send(pdfBuffer);
    } catch (err) {
      if (err instanceof Error) {
        if (err.message.includes("pdflatex not found")) {
          res.status(503).json({ message: err.message });
          return;
        }
        if (err.message.includes("timed out")) {
          res.status(408).json({ message: err.message });
          return;
        }
        if (err.message.includes("compilation failed")) {
          res.status(422).json({ message: err.message });
          return;
        }
      }
      next(err);
    }
  }
}
