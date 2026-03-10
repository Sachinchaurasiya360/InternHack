import type { UserRole } from "@prisma/client";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        email: string;
        role: UserRole;
      };
      usageInfo?: {
        used: number;
        limit: number;
        action: string;
        tier: string;
      };
    }
  }
}

export {};
