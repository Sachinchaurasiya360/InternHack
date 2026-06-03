import { PrismaClient } from "@prisma/client";

export function generateProfileSlug(name: string, id: number): string {
  const base = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 50);
  return base || `user-${id}`;
}

export async function createUniqueProfileSlug(
  name: string,
  id: number,
  prisma: PrismaClient
): Promise<string> {
  const base = generateProfileSlug(name, id);
  const existing = await prisma.user.findUnique({
    where: { profileSlug: base }
  });
  if (!existing) return base;
  // fallback: name-id
  return `${base}-${id}`;
}
