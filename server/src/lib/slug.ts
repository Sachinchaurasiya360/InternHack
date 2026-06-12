import { PrismaClient, Prisma } from "@prisma/client";

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
  
  try {
    await prisma.user.update({
      where: { id },
      data: { profileSlug: base },
    });
    return base;
  } catch (err: unknown) {
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002") {
      const fallback = `${base}-${id}`;
      await prisma.user.update({
        where: { id },
        data: { profileSlug: fallback },
      });
      return fallback;
    }
    throw err;
  }
}
