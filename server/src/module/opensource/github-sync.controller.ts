import crypto from "crypto";
import type { Request, Response } from "express";
import { GithubSyncService } from "./github-sync.service.js";
import { githubCallbackSchema } from "./github-sync.validation.js";

const service = new GithubSyncService();

export class GithubSyncController {
  /**
   * Generates a random state, saves it in a cookie, and returns the GitHub OAuth URL.
   */
  async getAuthUrl(req: Request, res: Response): Promise<void> {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const state = crypto.randomBytes(16).toString("hex");

      // Save state in a secure cookie to prevent CSRF
      res.cookie("github_oauth_state", state, {
        httpOnly: true,
        secure: process.env["NODE_ENV"] === "production",
        sameSite: "lax",
        maxAge: 10 * 60 * 1000, // 10 minutes
        path: "/",
      });

      const url = service.getGithubAuthUrl(state);
      res.json({ url });
    } catch (err: any) {
      console.error("Failed to generate GitHub OAuth URL:", err);
      res.status(500).json({ message: err.message || "Failed to generate authorization URL" });
    }
  }

  /**
   * Receives authorization code from GitHub, performs state validation, exchanges code,
   * links user account, and redirects back to the frontend with sync result.
   */
  async callback(req: Request, res: Response): Promise<void> {
    const allowedOrigins = process.env["ALLOWED_ORIGINS"] ?? "http://localhost:5173";
    const frontendBase = allowedOrigins.split(",")[0]?.trim() ?? "http://localhost:5173";
    const redirectError = (msg: string) => {
      res.redirect(`${frontendBase}/student/opensource/analytics?sync=error&message=${encodeURIComponent(msg)}`);
    };

    try {
      // 1. Verify user authentication
      if (!req.user) {
        redirectError("Authentication required. Please log in again.");
        return;
      }

      // 2. Validate query schema
      const parsed = githubCallbackSchema.safeParse(req.query);
      if (!parsed.success) {
        redirectError("Invalid callback parameters from GitHub.");
        return;
      }

      const { code, state } = parsed.data;

      // 3. Verify state against CSRF cookie
      const cookieState = req.cookies?.["github_oauth_state"] as string | undefined;
      res.clearCookie("github_oauth_state", {
        httpOnly: true,
        secure: process.env["NODE_ENV"] === "production",
        sameSite: "lax",
        path: "/",
      });

      if (!cookieState || !state || cookieState !== state) {
        redirectError("Security check failed: CSRF state parameter mismatch.");
        return;
      }

      // 4. Handle token exchange and initial sync
      await service.handleGithubCallback(req.user.id, code);

      // 5. Redirect back to frontend on success
      res.redirect(`${frontendBase}/student/opensource/analytics?sync=success`);
    } catch (err: any) {
      console.error("GitHub callback exchange failed:", err);
      redirectError(err.message || "Failed to establish GitHub connection");
    }
  }

  /**
   * Gets the connection status and contribution statistics for the current user.
   */
  async getStatus(req: Request, res: Response): Promise<void> {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      const status = await service.getStatus(req.user.id);
      res.json(status);
    } catch (err: any) {
      console.error("Failed to get GitHub connection status:", err);
      res.status(500).json({ message: "Failed to get GitHub connection status" });
    }
  }

  /**
   * Manually triggers a sync of GitHub contribution stats.
   */
  async sync(req: Request, res: Response): Promise<void> {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      await service.syncUserGithubContributions(req.user.id);
      res.json({ message: "GitHub contributions synced successfully" });
    } catch (err: any) {
      console.error("Failed to sync GitHub contributions:", err);
      res.status(500).json({ message: err.message || "Failed to sync contributions" });
    }
  }

  /**
   * Removes the connection between the user and GitHub.
   */
  async disconnect(req: Request, res: Response): Promise<void> {
    try {
      if (!req.user) {
        res.status(401).json({ message: "Authentication required" });
        return;
      }

      await service.disconnectGithub(req.user.id);
      res.json({ message: "GitHub disconnected successfully" });
    } catch (err: any) {
      console.error("Failed to disconnect GitHub account:", err);
      res.status(500).json({ message: "Failed to disconnect GitHub account" });
    }
  }
}
