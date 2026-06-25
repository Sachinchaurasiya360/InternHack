import bcrypt from "bcryptjs";

/**
 * OWASP recommends at least 12 rounds for bcrypt as of 2023+.
 * Each additional round doubles the computation time, making brute-force attacks exponentially harder.
 *
 * Security considerations:
 * - 10 rounds: ~10ms per hash (vulnerable to modern GPU attacks)
 * - 12 rounds: ~40ms per hash (recommended minimum for 2026)
 * - 14 rounds: ~160ms per hash (high security, may impact UX)
 *
 * @see https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html
 */
const SALT_ROUNDS = 12;

export async function hashPassword(plain: string): Promise<string> {
  return bcrypt.hash(plain, SALT_ROUNDS);
}

export async function comparePassword(plain: string, hash: string): Promise<boolean> {
  return bcrypt.compare(plain, hash);
}
