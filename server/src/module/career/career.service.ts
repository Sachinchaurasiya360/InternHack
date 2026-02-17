import { prisma } from "../../database/db.js";

export class CareerService {
  async listCareers() {
    return prisma.career.findMany({
      orderBy: { title: "asc" },
      include: {
        _count: { select: { phases: true, enrollments: true } },
      },
    });
  }

  async getCareerBySlug(slug: string) {
    const career = await prisma.career.findUnique({
      where: { slug },
      include: {
        phases: {
          orderBy: { orderIndex: "asc" },
          include: {
            skills: true,
            resources: true,
            tools: true,
          },
        },
      },
    });
    if (!career) throw new Error("Career not found");
    return career;
  }

  async enrollStudent(studentId: number, careerId: number) {
    const career = await prisma.career.findUnique({ where: { id: careerId } });
    if (!career) throw new Error("Career not found");

    const existing = await prisma.studentCareer.findUnique({
      where: { studentId_careerId: { studentId, careerId } },
    });
    if (existing) throw new Error("Already enrolled in this career path");

    return prisma.studentCareer.create({
      data: { studentId, careerId },
      include: { career: true },
    });
  }

  async unenrollStudent(studentId: number, careerId: number) {
    const enrollment = await prisma.studentCareer.findUnique({
      where: { studentId_careerId: { studentId, careerId } },
    });
    if (!enrollment) throw new Error("Not enrolled in this career path");

    // Delete skill progress for skills in this career
    const skillIds = await prisma.careerSkill.findMany({
      where: { phase: { careerId } },
      select: { id: true },
    });
    const ids = skillIds.map((s) => s.id);

    if (ids.length > 0) {
      await prisma.studentSkillProgress.deleteMany({
        where: { studentId, skillId: { in: ids } },
      });
    }

    await prisma.studentCareer.delete({
      where: { studentId_careerId: { studentId, careerId } },
    });

    return { message: "Unenrolled successfully" };
  }

  async getMyPaths(studentId: number) {
    const enrollments = await prisma.studentCareer.findMany({
      where: { studentId },
      include: {
        career: {
          include: {
            _count: { select: { phases: true, enrollments: true } },
            phases: {
              include: { skills: { select: { id: true } } },
            },
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    const allSkillIds = enrollments.flatMap((e) =>
      e.career.phases.flatMap((p) => p.skills.map((s) => s.id))
    );

    const completedSkills = allSkillIds.length > 0
      ? await prisma.studentSkillProgress.findMany({
          where: { studentId, skillId: { in: allSkillIds }, completed: true },
          select: { skillId: true },
        })
      : [];

    const completedSet = new Set(completedSkills.map((s) => s.skillId));

    return enrollments.map((e) => {
      const totalSkills = e.career.phases.reduce((sum, p) => sum + p.skills.length, 0);
      const completed = e.career.phases.reduce(
        (sum, p) => sum + p.skills.filter((s) => completedSet.has(s.id)).length,
        0,
      );
      return {
        id: e.id,
        careerId: e.careerId,
        status: e.status,
        career: {
          id: e.career.id,
          title: e.career.title,
          slug: e.career.slug,
          description: e.career.description,
          category: e.career.category,
          difficulty: e.career.difficulty,
          iconUrl: e.career.iconUrl,
          avgSalary: e.career.avgSalary,
          demandLevel: e.career.demandLevel,
          _count: e.career._count,
        },
        progress: totalSkills > 0 ? Math.round((completed / totalSkills) * 100) : 0,
        completedSkills: completed,
        totalSkills,
      };
    });
  }

  async getMyPathDetail(studentId: number, slug: string) {
    const career = await this.getCareerBySlug(slug);

    const enrollment = await prisma.studentCareer.findFirst({
      where: { studentId, careerId: career.id },
    });
    if (!enrollment) throw new Error("Not enrolled in this career path");

    const allSkillIds = career.phases.flatMap((p) => p.skills.map((s) => s.id));

    const completedSkills = allSkillIds.length > 0
      ? await prisma.studentSkillProgress.findMany({
          where: { studentId, skillId: { in: allSkillIds }, completed: true },
          select: { skillId: true },
        })
      : [];

    const completedSet = new Set(completedSkills.map((s) => s.skillId));

    const phases = career.phases.map((phase) => ({
      ...phase,
      skills: phase.skills.map((skill) => ({
        ...skill,
        completed: completedSet.has(skill.id),
      })),
    }));

    const totalSkills = allSkillIds.length;
    const completed = completedSkills.length;

    return {
      ...career,
      phases,
      enrollment: {
        id: enrollment.id,
        status: enrollment.status,
      },
      progress: totalSkills > 0 ? Math.round((completed / totalSkills) * 100) : 0,
      completedSkills: completed,
      totalSkills,
    };
  }

  async toggleSkill(studentId: number, skillId: number) {
    // Verify skill exists and student is enrolled in its career
    const skill = await prisma.careerSkill.findUnique({
      where: { id: skillId },
      include: { phase: { select: { careerId: true } } },
    });
    if (!skill) throw new Error("Skill not found");

    const enrollment = await prisma.studentCareer.findUnique({
      where: { studentId_careerId: { studentId, careerId: skill.phase.careerId } },
    });
    if (!enrollment) throw new Error("Not enrolled in this career path");

    const existing = await prisma.studentSkillProgress.findUnique({
      where: { studentId_skillId: { studentId, skillId } },
    });

    if (existing) {
      const updated = await prisma.studentSkillProgress.update({
        where: { id: existing.id },
        data: { completed: !existing.completed },
      });
      return { skillId, completed: updated.completed };
    }

    const created = await prisma.studentSkillProgress.create({
      data: { studentId, skillId, completed: true },
    });
    return { skillId, completed: created.completed };
  }

  async isEnrolled(studentId: number, careerId: number): Promise<boolean> {
    const enrollment = await prisma.studentCareer.findUnique({
      where: { studentId_careerId: { studentId, careerId } },
    });
    return enrollment !== null;
  }
}
