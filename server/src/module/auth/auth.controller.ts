import type { Request, Response } from "express";
import { registerSchema, loginSchema } from "./auth.validation.js";
import { AuthService } from "./auth.service.js";

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  async register(req: Request, res: Response) {
    try {
      const result = registerSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
      }

      const data = await this.authService.register(result.data);
      return res.status(201).json({ message: "Registration successful", ...data });
    } catch (error) {
      if (error instanceof Error && error.message === "Email already registered") {
        return res.status(409).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const result = loginSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Validation failed", errors: result.error.flatten() });
      }

      const data = await this.authService.login(result.data);
      return res.status(200).json({ message: "Login successful", ...data });
    } catch (error) {
      if (error instanceof Error && error.message === "Invalid email or password") {
        return res.status(401).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async googleAuth(req: Request, res: Response) {
    try {
      const { credential, role } = req.body as { credential?: string; role?: string };
      if (!credential) {
        return res.status(400).json({ message: "Google credential is required" });
      }

      const validRole = role === "RECRUITER" ? "RECRUITER" as const : "STUDENT" as const;
      const data = await this.authService.googleAuth({ credential, role: validRole });
      return res.status(200).json({ message: "Google authentication successful", ...data });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Invalid Google token") {
          return res.status(401).json({ message: error.message });
        }
        if (error.message === "Account is deactivated") {
          return res.status(403).json({ message: error.message });
        }
      }
      console.error(error);
      return res.status(500).json({ message: "Google authentication failed" });
    }
  }

  async getProfile(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Authentication required" });
      }

      const user = await this.authService.getProfile(req.user.id);
      return res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
