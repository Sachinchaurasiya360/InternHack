import { prisma } from "../../database/db.js";
import { slugify } from "../../utils/slug.utils.js";

interface CreateDepartmentData {
  name: string;
  description?: string | undefined;
  parentId?: number | null | undefined;
  headId?: number | null | undefined;
}

interface UpdateDepartmentData {
  name?: string | undefined;
  description?: string | undefined;
  parentId?: number | null | undefined;
  headId?: number | null | undefined;
  isActive?: boolean | undefined;
}

export class DepartmentService {
  async create(data: CreateDepartmentData) {
    const slug = slugify(data.name);
    return prisma.department.create({
      data: {
        name: data.name,
        description: data.description ?? null,
        parentId: data.parentId ?? null,
        headId: data.headId ?? null,
        slug,
      },
      include: { parent: { select: { id: true, name: true } } },
    });
  }

  async getAll(includeInactive = false) {
    const where = includeInactive ? {} : { isActive: true };
    return prisma.department.findMany({
      where,
      include: {
        parent: { select: { id: true, name: true } },
        _count: { select: { employees: true, children: true } },
      },
      orderBy: { name: "asc" },
    });
  }

  async getById(id: number) {
    const dept = await prisma.department.findUnique({
      where: { id },
      include: {
        parent: { select: { id: true, name: true } },
        children: { select: { id: true, name: true, slug: true, isActive: true } },
        employees: {
          select: {
            id: true, firstName: true, lastName: true, designation: true,
            employeeCode: true, status: true, profilePic: true,
          },
          where: { status: { not: "EXITED" } },
          orderBy: { firstName: "asc" },
        },
        _count: { select: { employees: true, children: true } },
      },
    });
    if (!dept) throw new Error("Department not found");
    return dept;
  }

  async update(id: number, data: UpdateDepartmentData) {
    const dept = await prisma.department.findUnique({ where: { id } });
    if (!dept) throw new Error("Department not found");

    const updateData: Record<string, unknown> = { ...data };
    if (data.name) updateData["slug"] = slugify(data.name);

    return prisma.department.update({
      where: { id },
      data: updateData,
      include: { parent: { select: { id: true, name: true } } },
    });
  }

  async delete(id: number) {
    const dept = await prisma.department.findUnique({
      where: { id },
      include: { _count: { select: { employees: true, children: true } } },
    });
    if (!dept) throw new Error("Department not found");
    if (dept._count.employees > 0) throw new Error("Cannot delete department with employees");
    if (dept._count.children > 0) throw new Error("Cannot delete department with sub-departments");

    await prisma.department.delete({ where: { id } });
  }

  async getOrgChart() {
    const departments = await prisma.department.findMany({
      where: { isActive: true },
      include: {
        employees: {
          select: {
            id: true, firstName: true, lastName: true, designation: true,
            profilePic: true, reportingManagerId: true,
          },
          where: { status: { not: "EXITED" } },
        },
      },
      orderBy: { name: "asc" },
    });
    return departments;
  }
}
