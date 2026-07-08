import type { Request, Response } from "express";
import {
  type registerSchema,
  type loginSchema,
  type updateProfileSchema,
  type importGitHubSchema,
  type forgotPasswordSchema,
  type resetPasswordSchema,
  type verifyEmailSchema,
  type resendOtpSchema,
  type googleAuthSchema,
} from "./auth.validation.js";
import type { z } from "zod";
import { AuthService } from "./auth.service.js";
import { setTokenCookie, clearTokenCookie } from "../../utils/cookie.utils.js";

/**
 * Returns the authenticated user, or sends a 401 and returns null. The routes
 * already gate on authMiddleware; this narrows the type and guards defensively.
 */
function ensureAuthenticated(req: Request, res: Response): NonNullable<Request["user"]> | null {
  if (!req.user) {
    res.status(401).json({ message: "Authentication required" });
    return null;
  }
  return req.user;
}

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  async register(req: Request, res: Response) {
    try {
      // Body is already validated & typed by route-level validateBody(registerSchema)
      const input = req.body as z.infer<typeof registerSchema>;

      const data = await this.authService.register(input);
      return res.status(201).json({ message: "Registration successful. Please verify your email to continue." });
    } catch (error) {
      if (error instanceof Error && error.message === "Email already registered") {
        return res.status(201).json({ message: "Registration successful. Please verify your email to continue." });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async login(req: Request, res: Response) {
    try {
      // Body is already validated & typed by route-level validateBody(loginSchema)
      const input = req.body as z.infer<typeof loginSchema>;

      const data = await this.authService.login(input);
      setTokenCookie(res, data.token);
      return res.status(200).json({ message: "Login successful", ...data });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "Invalid email or password") {
          return res.status(401).json({ message: error.message });
        }
        if (error.message === "EMAIL_NOT_VERIFIED") {
          return res.status(403).json({
            message: "Please verify your email before signing in. A new verification code has been sent.",
            requiresVerification: true,
            email: (req.body as { email?: string }).email,
          });
        }
        if (error.message === "Account is deactivated") {
          return res.status(403).json({ message: error.message });
        }
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async googleAuth(req: Request, res: Response) {
    try {
      // Body is already validated & typed by route-level validateBody(googleAuthSchema)
      const { credential, accessToken } = req.body as z.infer<typeof googleAuthSchema>;

      const input: { credential?: string; accessToken?: string } = {};
      if (credential) input.credential = credential;
      if (accessToken) input.accessToken = accessToken;
      const data = await this.authService.googleAuth(input);
      setTokenCookie(res, data.token);
      return res.status(200).json({ message: "Google authentication successful", ...data });
    } catch (error) {
      if (error instanceof Error) {
        const statusCode = (error as Error & { statusCode?: number }).statusCode;
        if (statusCode) {
          return res.status(statusCode).json({ message: error.message });
        }
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

  async logout(_req: Request, res: Response) {
    clearTokenCookie(res);
    return res.status(200).json({ message: "Logged out successfully" });
  }

  async getProfile(req: Request, res: Response) {
    try {
      const authUser = ensureAuthenticated(req, res);
      if (!authUser) return;

      const user = await this.authService.getProfile(authUser.id);
      return res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateProfile(req: Request, res: Response) {
    try {
      const authUser = ensureAuthenticated(req, res);
      if (!authUser) return;

      // Body is already validated & typed by route-level validateBody(updateProfileSchema)
      const input = req.body as z.infer<typeof updateProfileSchema>;

      const user = await this.authService.updateProfile(authUser.id, input);

      return res.status(200).json({ message: "Profile updated successfully", user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getPublicProfile(req: Request, res: Response) {
    try {
      const identifier = (req.params["identifier"] || req.params["id"]) as string;
      if (!identifier) {
        return res.status(400).json({ message: "Invalid user identifier" });
      }

      // Pass visitor context (req.user) to the service so it can decide what to return
      const visitor = req.user ? { id: req.user.id, role: req.user.role } : undefined;
      const { profile, cacheHit } = await this.authService.getPublicProfile(identifier, visitor);

      // Stale-while-revalidate: serve cached data instantly; background refresh after 60 s.
      // Public profiles are safe to cache for guests; authorized views are omitted from CDN.
      res.set("X-Cache", cacheHit ? "HIT" : "MISS");
      if (!visitor) {
        res.set("Cache-Control", "public, max-age=60, stale-while-revalidate=300");
      } else {
        res.set("Cache-Control", "private, no-store");
      }

      return res.status(200).json({ profile });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "User not found") {
          return res.status(404).json({ message: error.message });
        }
        if (error.message === "Profile is private") {
          return res.status(403).json({ message: "This profile is private." });
        }
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }


  async verifyEmail(req: Request, res: Response) {
    // Body is already validated & typed by route-level validateBody(verifyEmailSchema)
    const { email, otp } = req.body as z.infer<typeof verifyEmailSchema>;
    try {
      const data = await this.authService.verifyEmail(email, otp);
      setTokenCookie(res, data.token);
      return res.json({ message: "Email verified successfully", user: data.user, token: data.token });
    } catch (err: unknown) {
      return res.status(400).json({ message: err instanceof Error ? err.message : "Verification failed" });
    }
  }

  async resendOtp(req: Request, res: Response) {
    // Body is already validated & typed by route-level validateBody(resendOtpSchema)
    const { email } = req.body as z.infer<typeof resendOtpSchema>;
    try {
      await this.authService.resendOtp(email);
      return res.json({ message: "OTP sent successfully" });
    } catch (err: unknown) {
      return res.status(400).json({ message: err instanceof Error ? err.message : "Failed to send OTP" });
    }
  }

  async forgotPassword(req: Request, res: Response) {
    // Body is already validated & typed by route-level validateBody(forgotPasswordSchema)
    const { email } = req.body as z.infer<typeof forgotPasswordSchema>;
    try {
      await this.authService.forgotPassword(email);
      return res.json({ message: "If an account exists with this email, a reset code has been sent" });
    } catch (_err: unknown) {
      // Always return success to prevent email enumeration
      return res.json({ message: "If an account exists with this email, a reset code has been sent" });
    }
  }

  async importGitHub(req: Request, res: Response) {
    try {
      const authUser = ensureAuthenticated(req, res);
      if (!authUser) return;
      if (authUser.role !== "STUDENT") {
        return res.status(403).json({ message: "Only students can import GitHub profiles" });
      }

      // Body is already validated & typed by route-level validateBody(importGitHubSchema)
      const { username } = req.body as z.infer<typeof importGitHubSchema>;

      const data = await this.authService.importGitHub(username);
      return res.status(200).json(data);
    } catch (error) {
      if (error instanceof Error && error.message === "GitHub user not found") {
        return res.status(404).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Failed to import GitHub profile" });
    }
  }

  async resetPassword(req: Request, res: Response) {
    // Body is already validated & typed by route-level validateBody(resetPasswordSchema)
    const { email, otp, newPassword } = req.body as z.infer<typeof resetPasswordSchema>;
    try {
      await this.authService.resetPassword(email, otp, newPassword);
      return res.json({ message: "Password reset successfully" });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Password reset failed";
      // Return 429 for lockout/rate-limit errors, 400 for other validation errors
      const statusCode = errorMessage.includes("Too many failed attempts") || errorMessage.includes("locked for")
        ? 429
        : 400;
      return res.status(statusCode).json({ message: errorMessage });
    }
  }

  async deleteAccount(req: Request, res: Response) {
    try {
      const authUser = ensureAuthenticated(req, res);
      if (!authUser) return;

      const { password } = req.body as { password: string };
      await this.authService.deleteAccount(authUser.id, password);
      clearTokenCookie(res);
      return res.status(200).json({ message: "Account deleted successfully" });
    } catch (error) {
      if (error instanceof Error && error.message === "Incorrect password") {
        return res.status(401).json({ message: error.message });
      }
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
