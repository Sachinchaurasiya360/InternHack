import jwt from "jsonwebtoken";
import type { UserRole } from "@prisma/client";

const getJwtSecret = (): string => {
  const secret = process.env["JWT_SECRET"];
  if (!secret) {
    throw new Error("JWT_SECRET environment variable is required");
  }
  return secret;
};

const JWT_EXPIRES_IN = "7d";

export interface JwtPayload {
  id: number;
  email: string;
  role: UserRole;
  tokenVersion: number;
}

export function generateToken(payload: JwtPayload): string {
  return jwt.sign(
    { id: payload.id, email: payload.email, role: payload.role, tokenVersion: payload.tokenVersion } as object,
    getJwtSecret(),
    { expiresIn: JWT_EXPIRES_IN, algorithm: "HS256" },
  );
}

export function verifyToken(token: string): JwtPayload {
  const decoded = jwt.verify(token, getJwtSecret(), { algorithms: ["HS256"] });
  return decoded as unknown as JwtPayload;
}
