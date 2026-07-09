import jwt from "jsonwebtoken";
import type { UserRole } from "@prisma/client";

const JWT_SECRET: string = process.env["JWT_SECRET"] ?? (() => { throw new Error("JWT_SECRET environment variable is required"); })();
const VERIFICATION_SECRET: string = process.env["VERIFICATION_SECRET"] ?? (() => { throw new Error("VERIFICATION_SECRET environment variable is required"); })();

const JWT_EXPIRES_IN = "7d";
const VERIFICATION_EXPIRES_IN = "365d";

export interface JwtPayload {
  id: number;
  email: string;
  role: UserRole;
  tokenVersion: number;
}

export interface VerifiedSkillTokenPayload {
  vid: number;
  studentId: number;
  skillName: string;
}

export function generateToken(payload: JwtPayload): string {
  return jwt.sign(
    { id: payload.id, email: payload.email, role: payload.role, tokenVersion: payload.tokenVersion } as object,
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN, algorithm: "HS256" },
  );
}

export function verifyToken(token: string): JwtPayload {
  const decoded = jwt.verify(token, JWT_SECRET, { algorithms: ["HS256"] });
  return decoded as unknown as JwtPayload;
}

export function generateVerifiedSkillToken(payload: VerifiedSkillTokenPayload): string {
  return jwt.sign(payload as object, VERIFICATION_SECRET, {
    expiresIn: VERIFICATION_EXPIRES_IN,
    algorithm: "HS256",
  });
}

export function verifyVerifiedSkillToken(token: string): VerifiedSkillTokenPayload {
  const decoded = jwt.verify(token, VERIFICATION_SECRET, { algorithms: ["HS256"] });
  return decoded as unknown as VerifiedSkillTokenPayload;
}
