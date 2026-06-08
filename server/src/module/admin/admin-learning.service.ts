import { prisma } from "../../database/db.js";
import { slugify } from "../../utils/slug.utils.js";
import type { Prisma } from "@prisma/client";

// Safe inline type casting to avoid unresolved module imports
type AptitudeDifficulty = "EASY" | "MEDIUM" | "HARD";

export class AdminLearningService {
  // ==================== DSA MANAGEMENT ====================

  async listDsaTopics(query: { page: number; limit: number; search?: string | undefined }) {
    const where: Prisma.dsaTopicWhereInput = {};
    if (query.search) {
      where.OR = [
        { name: { contains: query.search, mode: "insensitive" } },
        { description: { contains: query.search, mode: "insensitive" } },
      ];
    }
    const skip = (query.page - 1) * query.limit;
    const [topics, total] = await Promise.all([
      prisma.dsaTopic.findMany({ where, skip, take: query.limit, orderBy: { orderIndex: "asc" } }),
      prisma.dsaTopic.count({ where }),
    ]);
    return {
      topics,
      pagination: { page: query.page, limit: query.limit, total, totalPages: Math.ceil(total / query.limit) },
    };
  }

  async getDsaTopic(topicId: number) {
    const topic = await prisma.dsaTopic.findUnique({ where: { id: topicId } });
    if (!topic) throw new Error("DSA topic not found");
    return topic;
  }

  async createDsaTopic(input: { name: string; description?: string | undefined; orderIndex: number }) {
    const slug = slugify(input.name);
    return prisma.dsaTopic.create({
      data: { name: input.name, slug, description: input.description ?? null, orderIndex: input.orderIndex },
    });
  }

  async updateDsaTopic(topicId: number, input: { name?: string; description?: string; orderIndex?: number }) {
    const topic = await prisma.dsaTopic.findUnique({ where: { id: topicId } });
    if (!topic) throw new Error("DSA topic not found");
    const data: Prisma.dsaTopicUpdateInput = {};
    if (input.name !== undefined) { data.name = input.name; data.slug = slugify(input.name); }
    if (input.description !== undefined) data.description = input.description ?? null;
    if (input.orderIndex !== undefined) data.orderIndex = input.orderIndex;
    return prisma.dsaTopic.update({ where: { id: topicId }, data });
  }

  async deleteDsaTopic(topicId: number) {
    const topic = await prisma.dsaTopic.findUnique({ where: { id: topicId } });
    if (!topic) throw new Error("DSA topic not found");
    return prisma.dsaTopic.delete({ where: { id: topicId } });
  }

  async createDsaProblem(input: {
    title: string; slug: string; difficulty?: string; leetcodeUrl?: string; gfgUrl?: string;
    tags?: string[]; companies?: string[]; hints?: string[]; description?: string;
  }) {
    return prisma.dsaProblem.create({
      data: {
        title: input.title,
        slug: input.slug,
        difficulty: input.difficulty ?? "Easy",
        leetcodeUrl: input.leetcodeUrl || null,
        gfgUrl: input.gfgUrl || null,
        tags: input.tags ?? [],
        companies: input.companies ?? [],
        hints: input.hints ?? [],
        description: input.description || null,
      },
    });
  }

  async updateDsaProblem(problemId: number, input: Record<string, unknown>) {
    const problem = await prisma.dsaProblem.findUnique({ where: { id: problemId } });
    if (!problem) throw new Error("DSA problem not found");
    const data: Prisma.dsaProblemUpdateInput = {};
    if (input["title"] !== undefined) data.title = input["title"] as string;
    if (input["slug"] !== undefined) data.slug = input["slug"] as string;
    if (input["difficulty"] !== undefined) data.difficulty = input["difficulty"] as string;
    if (input["leetcodeUrl"] !== undefined) data.leetcodeUrl = (input["leetcodeUrl"] as string) || null;
    if (input["gfgUrl"] !== undefined) data.gfgUrl = (input["gfgUrl"] as string) || null;
    if (input["articleUrl"] !== undefined) data.articleUrl = (input["articleUrl"] as string) || null;
    if (input["videoUrl"] !== undefined) data.videoUrl = (input["videoUrl"] as string) || null;
    if (input["tags"] !== undefined) data.tags = input["tags"] as string[];
    if (input["companies"] !== undefined) data.companies = input["companies"] as string[];
    if (input["hints"] !== undefined) data.hints = input["hints"] as string[];
    if (input["description"] !== undefined) data.description = (input["description"] as string) || null;
    return prisma.dsaProblem.update({ where: { id: problemId }, data });
  }

  async deleteDsaProblem(problemId: number) {
    const problem = await prisma.dsaProblem.findUnique({ where: { id: problemId } });
    if (!problem) throw new Error("DSA problem not found");
    return prisma.dsaProblem.delete({ where: { id: problemId } });
  }

  // ==================== APTITUDE MANAGEMENT ====================

  async listAptitudeCategories(query: { page: number; limit: number; search?: string | undefined }) {
    const where: Prisma.aptitudeCategoryWhereInput = {};
    if (query.search) {
      where.OR = [
        { name: { contains: query.search, mode: "insensitive" } },
        { description: { contains: query.search, mode: "insensitive" } },
      ];
    }
    const skip = (query.page - 1) * query.limit;
    const [categories, total] = await Promise.all([
      prisma.aptitudeCategory.findMany({
        where,
        skip,
        take: query.limit,
        orderBy: { orderIndex: "asc" },
        include: {
          topics: {
            orderBy: { orderIndex: "asc" },
            include: { _count: { select: { questions: true } } },
          },
        },
      }),
      prisma.aptitudeCategory.count({ where }),
    ]);
    return {
      categories,
      pagination: { page: query.page, limit: query.limit, total, totalPages: Math.ceil(total / query.limit) },
    };
  }

  async getAptitudeCategory(categoryId: number) {
    const category = await prisma.aptitudeCategory.findUnique({
      where: { id: categoryId },
      include: {
        topics: {
          orderBy: { orderIndex: "asc" },
          include: {
            questions: { orderBy: { id: "asc" } },
            _count: { select: { questions: true } },
          },
        },
      },
    });
    if (!category) throw new Error("Aptitude category not found");
    return category;
  }

  async createAptitudeCategory(input: { name: string; description?: string | undefined; orderIndex?: number | undefined }) {
    const slug = slugify(input.name);
    return prisma.aptitudeCategory.create({
      data: {
        name: input.name,
        slug,
        description: input.description ?? null,
        orderIndex: input.orderIndex ?? 0,
      },
    });
  }

  async updateAptitudeCategory(categoryId: number, input: { name?: string | undefined; description?: string | undefined; orderIndex?: number | undefined }) {
    const category = await prisma.aptitudeCategory.findUnique({ where: { id: categoryId } });
    if (!category) throw new Error("Aptitude category not found");
    const data: Prisma.aptitudeCategoryUpdateInput = {};
    if (input.name !== undefined) { data.name = input.name; data.slug = slugify(input.name); }
    if (input.description !== undefined) data.description = input.description ?? null;
    if (input.orderIndex !== undefined) data.orderIndex = input.orderIndex;
    return prisma.aptitudeCategory.update({ where: { id: categoryId }, data });
  }

  async deleteAptitudeCategory(categoryId: number) {
    const category = await prisma.aptitudeCategory.findUnique({ where: { id: categoryId } });
    if (!category) throw new Error("Aptitude category not found");
    return prisma.aptitudeCategory.delete({ where: { id: categoryId } });
  }

  async createAptitudeTopic(input: { name: string; description?: string | undefined; orderIndex?: number | undefined; sourceUrl?: string | undefined; categoryId: number }) {
    const slug = slugify(input.name);
    return prisma.aptitudeTopic.create({
      data: {
        name: input.name,
        slug,
        description: input.description ?? null,
        orderIndex: input.orderIndex ?? 0,
        sourceUrl: input.sourceUrl || null,
        categoryId: input.categoryId,
      },
    });
  }

  async updateAptitudeTopic(topicId: number, input: { name?: string | undefined; description?: string | undefined; orderIndex?: number | undefined; sourceUrl?: string | undefined; categoryId?: number | undefined }) {
    const topic = await prisma.aptitudeTopic.findUnique({ where: { id: topicId } });
    if (!topic) throw new Error("Aptitude topic not found");
    const data: Prisma.aptitudeTopicUpdateInput = {};
    if (input.name !== undefined) { data.name = input.name; data.slug = slugify(input.name); }
    if (input.description !== undefined) data.description = input.description ?? null;
    if (input.orderIndex !== undefined) data.orderIndex = input.orderIndex;
    if (input.sourceUrl !== undefined) data.sourceUrl = input.sourceUrl || null;
    if (input.categoryId !== undefined) data.category = { connect: { id: input.categoryId } };
    return prisma.aptitudeTopic.update({ where: { id: topicId }, data });
  }

  async deleteAptitudeTopic(topicId: number) {
    const topic = await prisma.aptitudeTopic.findUnique({ where: { id: topicId } });
    if (!topic) throw new Error("Aptitude topic not found");
    return prisma.aptitudeTopic.delete({ where: { id: topicId } });
  }

  async listAptitudeQuestions(query: { page: number; limit: number; topicId?: number | undefined; difficulty?: string | undefined; search?: string | undefined }) {
    const where: Prisma.aptitudeQuestionWhereInput = {};
    if (query.topicId) where.topicId = query.topicId;
    if (query.difficulty) {
      where.difficulty = query.difficulty.toUpperCase() as AptitudeDifficulty;
    }
    if (query.search) {
      where.question = { contains: query.search, mode: "insensitive" };
    }
    const skip = (query.page - 1) * query.limit;
    const [questions, total] = await Promise.all([
      prisma.aptitudeQuestion.findMany({
        where,
        skip,
        take: query.limit,
        orderBy: { id: "asc" },
        include: { topic: { select: { name: true, slug: true } } },
      }),
      prisma.aptitudeQuestion.count({ where }),
    ]);
    return {
      questions,
      pagination: { page: query.page, limit: query.limit, total, totalPages: Math.ceil(total / query.limit) },
    };
  }

  async createAptitudeQuestion(input: {
    question: string; optionA: string; optionB: string; optionC: string; optionD: string;
    optionE?: string | undefined; correctAnswer: string; explanation?: string | undefined; difficulty?: string | undefined;
    companies?: string[]; sourceUrl?: string | undefined; topicId: number;
  }) {
    return prisma.aptitudeQuestion.create({
      data: {
        question: input.question,
        optionA: input.optionA,
        optionB: input.optionB,
        optionC: input.optionC,
        optionD: input.optionD,
        optionE: input.optionE ?? null,
        correctAnswer: input.correctAnswer,
        explanation: input.explanation ?? null,
        difficulty: (input.difficulty?.toUpperCase() ?? "MEDIUM") as AptitudeDifficulty,
        companies: input.companies ?? [],
        sourceUrl: input.sourceUrl || null,
        topicId: input.topicId,
      },
    });
  }

  async updateAptitudeQuestion(questionId: number, input: Record<string, unknown>) {
    const question = await prisma.aptitudeQuestion.findUnique({ where: { id: questionId } });
    // FIXED: Changed 'problem' to 'question' to fix the compilation crash
    if (!question) throw new Error("Aptitude question not found");
    const data: Prisma.aptitudeQuestionUpdateInput = {};
    if (input["question"] !== undefined) data.question = input["question"] as string;
    if (input["optionA"] !== undefined) data.optionA = input["optionA"] as string;
    if (input["optionB"] !== undefined) data.optionB = input["optionB"] as string;
    if (input["optionC"] !== undefined) data.optionC = input["optionC"] as string;
    if (input["optionD"] !== undefined) data.optionD = input["optionD"] as string;
    if (input["optionE"] !== undefined) data.optionE = (input["optionE"] as string) || null;
    if (input["correctAnswer"] !== undefined) data.correctAnswer = input["correctAnswer"] as string;
    if (input["explanation"] !== undefined) data.explanation = (input["explanation"] as string) || null;
    if (input["difficulty"] !== undefined) {
      data.difficulty = (input["difficulty"] as string).toUpperCase() as AptitudeDifficulty;
    }
    if (input["companies"] !== undefined) data.companies = input["companies"] as string[];
    if (input["sourceUrl"] !== undefined) data.sourceUrl = (input["sourceUrl"] as string) || null;
    if (input["topicId"] !== undefined) data.topic = { connect: { id: input["topicId"] as number } };
    return prisma.aptitudeQuestion.update({ where: { id: questionId }, data });
  }

  async deleteAptitudeQuestion(questionId: number) {
    const question = await prisma.aptitudeQuestion.findUnique({ where: { id: questionId } });
    if (!question) throw new Error("Aptitude question not found");
    return prisma.aptitudeQuestion.delete({ where: { id: questionId } });
  }

  // ==================== SKILL TEST MANAGEMENT ====================

  async listAdminSkillTests(query: { page: number; limit: number; search?: string | undefined; difficulty?: string | undefined; isActive?: string | undefined }) {
    const where: Prisma.skillTestWhereInput = {};
    if (query.search) {
      where.OR = [
        { skillName: { contains: query.search, mode: "insensitive" } },
        { title: { contains: query.search, mode: "insensitive" } },
      ];
    }
    if (query.difficulty) where.difficulty = query.difficulty as "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
    if (query.isActive !== undefined) where.isActive = query.isActive === "true";
    const skip = (query.page - 1) * query.limit;
    const [tests, total] = await Promise.all([
      prisma.skillTest.findMany({
        where,
        skip,
        take: query.limit,
        orderBy: { createdAt: "desc" },
        include: { _count: { select: { questions: true, attempts: true } } },
      }),
      prisma.skillTest.count({ where }),
    ]);
    return {
      tests,
      pagination: { page: query.page, limit: query.limit, total, totalPages: Math.ceil(total / query.limit) },
    };
  }

  async getAdminSkillTest(testId: number) {
    const test = await prisma.skillTest.findUnique({
      where: { id: testId },
      include: {
        questions: { orderBy: { orderIndex: "asc" } },
        _count: { select: { attempts: true } },
      },
    });
    if (!test) throw new Error("Skill test not found");
    return test;
  }

  async createAdminSkillTest(input: {
    skillName: string; title: string; description?: string | undefined;
    difficulty?: string | undefined; timeLimitSecs?: number | undefined; passThreshold?: number | undefined; isActive?: boolean | undefined;
    questions?: Array<{ question: string; options: string[]; correctIndex: number; explanation?: string | undefined; orderIndex: number }> | undefined;
  }, adminId: number) {
    return prisma.skillTest.create({
      data: {
        skillName: input.skillName,
        title: input.title,
        description: input.description ?? null,
        difficulty: (input.difficulty ?? "INTERMEDIATE") as "BEGINNER" | "INTERMEDIATE" | "ADVANCED",
        timeLimitSecs: input.timeLimitSecs ?? 1800,
        passThreshold: input.passThreshold ?? 70,
        isActive: input.isActive ?? true,
        createdById: adminId,
        questions: {
          create: (input.questions ?? []).map((q) => ({
            question: q.question,
            options: q.options,
            correctIndex: q.correctIndex,
            explanation: q.explanation ?? null,
            orderIndex: q.orderIndex,
          })),
        },
      },
      include: { questions: true },
    });
  }

  async updateAdminSkillTest(testId: number, input: {
    skillName?: string | undefined; title?: string | undefined; description?: string | undefined;
    difficulty?: string | undefined; timeLimitSecs?: number | undefined; passThreshold?: number | undefined; isActive?: boolean | undefined;
    questions?: Array<{ question: string; options: string[]; correctIndex: number; explanation?: string | undefined; orderIndex: number }> | undefined;
  }) {
    const test = await prisma.skillTest.findUnique({ where: { id: testId } });
    if (!test) throw new Error("Skill test not found");

    if (input.questions !== undefined) {
      return prisma.$transaction(async (tx) => {
        await tx.skillTestQuestion.deleteMany({ where: { testId } });
        return tx.skillTest.update({
          where: { id: testId },
          data: {
            skillName: input.skillName ?? test.skillName,
            title: input.title ?? test.title,
            description: input.description !== undefined ? (input.description ?? null) : test.description,
            difficulty: input.difficulty ? (input.difficulty as "BEGINNER" | "INTERMEDIATE" | "ADVANCED") : test.difficulty,
            timeLimitSecs: input.timeLimitSecs ?? test.timeLimitSecs,
            passThreshold: input.passThreshold ?? test.passThreshold,
            isActive: input.isActive ?? test.isActive,
            questions: {
              create: input.questions!.map((q) => ({
                question: q.question,
                options: q.options,
                correctIndex: q.correctIndex,
                explanation: q.explanation ?? null,
                orderIndex: q.orderIndex,
              })),
            },
          },
          include: { questions: true },
        });
      });
    }

    const data: Prisma.skillTestUpdateInput = {};
    if (input.skillName !== undefined) data.skillName = input.skillName;
    if (input.title !== undefined) data.title = input.title;
    if (input.description !== undefined) data.description = input.description ?? null;
    if (input.difficulty !== undefined) data.difficulty = input.difficulty as "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
    if (input.timeLimitSecs !== undefined) data.timeLimitSecs = input.timeLimitSecs;
    if (input.passThreshold !== undefined) data.passThreshold = input.passThreshold;
    if (input.isActive !== undefined) data.isActive = input.isActive;
    return prisma.skillTest.update({ where: { id: testId }, data, include: { questions: true } });
  }

  async deleteAdminSkillTest(testId: number) {
    const test = await prisma.skillTest.findUnique({ where: { id: testId } });
    if (!test) throw new Error("Skill test not found");
    return prisma.skillTest.delete({ where: { id: testId } });
  }

  async toggleSkillTestActive(testId: number, isActive: boolean) {
    const test = await prisma.skillTest.findUnique({ where: { id: testId } });
    if (!test) throw new Error("Skill test not found");
    return prisma.skillTest.update({ where: { id: testId }, data: { isActive } });
  }
}