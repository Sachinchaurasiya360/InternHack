import type { Request, Response, NextFunction } from "express";
import type { Prisma } from "@prisma/client";
import { prisma } from "../../database/db.js";
import {
  aiGenerateSchema,
  enrollSchema,
  enrollmentIdParam,
  enrollmentTopicParams,
  listQuerySchema,
  recomputePaceSchema,
  roadmapSlugParam,
  topicSlugParam,
  updateProgressSchema,
} from "./roadmap.validation.js";
import {
  buildWeeklyPlan,
  enrollUser,
  getEnrollmentForUser,
  getRoadmapBySlug,
  getTopicBySlug,
  listEnrollmentsForUser,
  listPublishedRoadmaps,
  recomputePace,
  summarizeProgress,
  updateTopicProgress,
} from "./roadmap.service.js";
import {
  buildRoadmapSlug,
  generateAiRoadmap,
  slugifyRoadmap,
} from "./roadmap.ai.service.js";
import { generateRoadmapPdf } from "./roadmap.pdf.js";
import { sendEmail } from "../../utils/email.utils.js";
import { roadmapWelcomeEmailHtml } from "../../utils/email-templates.js";

const validationError = (res: Response, errors: unknown) =>
  res.status(400).json({ message: "Validation failed", errors });

// ─── Public ────────────────────────────────────────────────────────────────
export async function getRoadmaps(req: Request, res: Response, next: NextFunction) {
  try {
    const parsed = listQuerySchema.safeParse(req.query);
    if (!parsed.success) {
      validationError(res, parsed.error.flatten().fieldErrors);
      return;
    }
    const data = await listPublishedRoadmaps(parsed.data);
    res.json(data);
  } catch (err) {
    next(err);
  }
}

export async function getRoadmap(req: Request, res: Response, next: NextFunction) {
  try {
    const parsed = roadmapSlugParam.safeParse(req.params);
    if (!parsed.success) {
      validationError(res, parsed.error.flatten().fieldErrors);
      return;
    }
    const roadmap = await getRoadmapBySlug(parsed.data.slug);
    if (!roadmap) {
      res.status(404).json({ message: "Roadmap not found" });
      return;
    }
    res.json({ roadmap });
  } catch (err) {
    next(err);
  }
}

export async function getTopic(req: Request, res: Response, next: NextFunction) {
  try {
    const parsed = topicSlugParam.safeParse(req.params);
    if (!parsed.success) {
      validationError(res, parsed.error.flatten().fieldErrors);
      return;
    }
    const topic = await getTopicBySlug(parsed.data.slug, parsed.data.topicSlug);
    if (!topic) {
      res.status(404).json({ message: "Topic not found" });
      return;
    }
    res.json({ topic });
  } catch (err) {
    next(err);
  }
}

// ─── Auth ──────────────────────────────────────────────────────────────────
export async function enroll(req: Request, res: Response, next: NextFunction) {
  try {
    const params = roadmapSlugParam.safeParse(req.params);
    if (!params.success) {
      validationError(res, params.error.flatten().fieldErrors);
      return;
    }
    const body = enrollSchema.safeParse(req.body);
    if (!body.success) {
      validationError(res, body.error.flatten().fieldErrors);
      return;
    }

    const { enrollment, weeklyPlan } = await enrollUser({
      userId: req.user!.id,
      roadmapSlug: params.data.slug,
      input: body.data,
    });

    // Schedule day-10 follow-up email
    const sendAt = new Date(enrollment.startDate.getTime() + 10 * 24 * 60 * 60 * 1000);
    await prisma.scheduledEmail.create({
      data: {
        userId: req.user!.id,
        kind: "ROADMAP_DAY_10",
        sendAt,
        payload: {
          enrollmentId: enrollment.id,
          roadmapSlug: enrollment.roadmap.slug,
          roadmapTitle: enrollment.roadmap.title,
        },
      },
    });

    // Generate PDF and email it (non-blocking on email failure)
    try {
      const full = await getEnrollmentForUser({
        userId: req.user!.id,
        enrollmentId: enrollment.id,
      });
      if (full) {
        const pdfBuffer = await generateRoadmapPdf({
          user: { name: req.user!.email },
          roadmap: {
            title: full.roadmap.title,
            shortDescription: full.roadmap.shortDescription,
            estimatedHours: full.roadmap.estimatedHours,
            outcomes: full.roadmap.outcomes,
            prerequisites: full.roadmap.prerequisites,
          },
          enrollment: {
            hoursPerWeek: full.hoursPerWeek,
            preferredDays: full.preferredDays,
            startDate: full.startDate,
            targetEndDate: full.targetEndDate,
            experienceLevel: full.experienceLevel,
            goal: full.goal,
          },
          weeklyPlan: weeklyPlan.map((w) => ({
            week: w.week,
            topicSlugs: w.topicSlugs,
            totalHours: w.totalHours,
          })),
          sections: full.roadmap.sections.map((s) => ({
            title: s.title,
            summary: s.summary,
            orderIndex: s.orderIndex,
            topics: s.topics.map((t) => ({
              slug: t.slug,
              title: t.title,
              summary: t.summary,
              contentMd: t.contentMd,
              estimatedHours: t.estimatedHours,
              difficulty: t.difficulty,
              miniProject: t.miniProject,
              selfCheck: t.selfCheck,
              resources: t.resources.map((r) => ({
                kind: r.kind,
                title: r.title,
                url: r.url,
                source: r.source,
              })),
            })),
          })),
        });

        const userRecord = await prisma.user.findUnique({
          where: { id: req.user!.id },
          select: { name: true, email: true },
        });

        if (userRecord) {
          const weekOne = weeklyPlan[0]?.topicSlugs ?? [];
          await sendEmail({
            to: userRecord.email,
            subject: `Your ${full.roadmap.title} is ready`,
            html: roadmapWelcomeEmailHtml({
              name: userRecord.name,
              roadmapTitle: full.roadmap.title,
              roadmapSlug: full.roadmap.slug,
              hoursPerWeek: full.hoursPerWeek,
              targetEndDate: full.targetEndDate,
              weekOneTopics: weekOne,
            }),
            attachments: [
              {
                filename: `${full.roadmap.slug}-roadmap.pdf`,
                content: pdfBuffer,
                contentType: "application/pdf",
              },
            ],
          });
        }
      }
    } catch (err) {
      console.error("[Roadmap] Welcome email/PDF failed:", err);
    }

    res.status(201).json({
      message: "Enrolled successfully",
      enrollment,
      weeklyPlan,
    });
  } catch (err) {
    if (typeof err === "object" && err && "status" in err) {
      const e = err as { status: number; message: string };
      res.status(e.status).json({ message: e.message });
      return;
    }
    next(err);
  }
}

export async function getMyEnrollments(req: Request, res: Response, next: NextFunction) {
  try {
    const enrollments = await listEnrollmentsForUser(req.user!.id);
    res.json({ enrollments });
  } catch (err) {
    next(err);
  }
}

export async function getMyEnrollment(req: Request, res: Response, next: NextFunction) {
  try {
    const params = enrollmentIdParam.safeParse(req.params);
    if (!params.success) {
      validationError(res, params.error.flatten().fieldErrors);
      return;
    }
    const enrollment = await getEnrollmentForUser({
      userId: req.user!.id,
      enrollmentId: params.data.id,
    });
    if (!enrollment) {
      res.status(404).json({ message: "Enrollment not found" });
      return;
    }
    res.json({
      enrollment,
      summary: summarizeProgress(enrollment),
    });
  } catch (err) {
    next(err);
  }
}

export async function patchTopicProgress(req: Request, res: Response, next: NextFunction) {
  try {
    const params = enrollmentTopicParams.safeParse(req.params);
    if (!params.success) {
      validationError(res, params.error.flatten().fieldErrors);
      return;
    }
    const body = updateProgressSchema.safeParse(req.body);
    if (!body.success) {
      validationError(res, body.error.flatten().fieldErrors);
      return;
    }

    const progress = await updateTopicProgress({
      userId: req.user!.id,
      enrollmentId: params.data.id,
      topicId: params.data.topicId,
      status: body.data.status,
      bookmarked: body.data.bookmarked,
      notes: body.data.notes,
    });
    res.json({ progress });
  } catch (err) {
    if (typeof err === "object" && err && "status" in err) {
      const e = err as { status: number; message: string };
      res.status(e.status).json({ message: e.message });
      return;
    }
    next(err);
  }
}

export async function postRecomputePace(req: Request, res: Response, next: NextFunction) {
  try {
    const params = enrollmentIdParam.safeParse(req.params);
    if (!params.success) {
      validationError(res, params.error.flatten().fieldErrors);
      return;
    }
    const body = recomputePaceSchema.safeParse(req.body);
    if (!body.success) {
      validationError(res, body.error.flatten().fieldErrors);
      return;
    }
    const enrollment = await recomputePace({
      userId: req.user!.id,
      enrollmentId: params.data.id,
      hoursPerWeek: body.data.hoursPerWeek,
    });
    res.json({ enrollment });
  } catch (err) {
    if (typeof err === "object" && err && "status" in err) {
      const e = err as { status: number; message: string };
      res.status(e.status).json({ message: e.message });
      return;
    }
    next(err);
  }
}

export async function downloadPdf(req: Request, res: Response, next: NextFunction) {
  try {
    const params = enrollmentIdParam.safeParse(req.params);
    if (!params.success) {
      validationError(res, params.error.flatten().fieldErrors);
      return;
    }
    const enrollment = await getEnrollmentForUser({
      userId: req.user!.id,
      enrollmentId: params.data.id,
    });
    if (!enrollment) {
      res.status(404).json({ message: "Enrollment not found" });
      return;
    }

    const userRecord = await prisma.user.findUnique({
      where: { id: req.user!.id },
      select: { name: true },
    });

    const weeklyPlan = (enrollment.weeklyPlan as unknown as {
      week: number;
      topicSlugs: string[];
      totalHours: number;
    }[]) ?? [];

    const pdfBuffer = await generateRoadmapPdf({
      user: { name: userRecord?.name ?? "Learner" },
      roadmap: {
        title: enrollment.roadmap.title,
        shortDescription: enrollment.roadmap.shortDescription,
        estimatedHours: enrollment.roadmap.estimatedHours,
        outcomes: enrollment.roadmap.outcomes,
        prerequisites: enrollment.roadmap.prerequisites,
      },
      enrollment: {
        hoursPerWeek: enrollment.hoursPerWeek,
        preferredDays: enrollment.preferredDays,
        startDate: enrollment.startDate,
        targetEndDate: enrollment.targetEndDate,
        experienceLevel: enrollment.experienceLevel,
        goal: enrollment.goal,
      },
      weeklyPlan,
      sections: enrollment.roadmap.sections.map((s) => ({
        title: s.title,
        summary: s.summary,
        orderIndex: s.orderIndex,
        topics: s.topics.map((t) => ({
          slug: t.slug,
          title: t.title,
          summary: t.summary,
          contentMd: t.contentMd,
          estimatedHours: t.estimatedHours,
          difficulty: t.difficulty,
          miniProject: t.miniProject,
          selfCheck: t.selfCheck,
          resources: t.resources.map((r) => ({
            kind: r.kind,
            title: r.title,
            url: r.url,
            source: r.source,
          })),
        })),
      })),
    });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${enrollment.roadmap.slug}-roadmap.pdf"`,
    );
    res.send(pdfBuffer);
  } catch (err) {
    next(err);
  }
}

// ─── AI Generation ────────────────────────────────────────────────────────
export async function postAiGenerate(req: Request, res: Response, next: NextFunction) {
  try {
    const parsed = aiGenerateSchema.safeParse(req.body);
    if (!parsed.success) {
      validationError(res, parsed.error.flatten().fieldErrors);
      return;
    }
    const userId = req.user!.id;
    const input = parsed.data;

    // 1. Generate via Gemini, validate shape
    let generated;
    try {
      generated = await generateAiRoadmap(input, userId);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Could not generate roadmap";
      res.status(502).json({ message: msg });
      return;
    }

    // 2. Slugify section + topic titles
    const { sections } = slugifyRoadmap(generated);
    const topicCount = sections.reduce((sum, s) => sum + s.topics.length, 0);
    const slug = buildRoadmapSlug(userId, generated.title);

    // 3. Persist roadmap + sections + topics + resources, then create enrollment
    const startDate = new Date();
    const flatTopics = sections.flatMap((section, sIdx) =>
      section.topics.map((t, tIdx) => ({
        slug: t.slug,
        estimatedHours: t.estimatedHours,
        sectionOrder: sIdx,
        topicOrder: tIdx,
      })),
    );
    const { plan, targetEndDate } = buildWeeklyPlan(flatTopics, input.hoursPerWeek, startDate);

    const enrollment = await prisma.$transaction(async (tx) => {
      const roadmap = await tx.roadmap.create({
        data: {
          slug,
          title: generated.title,
          shortDescription: generated.shortDescription,
          description: generated.description,
          level: generated.level,
          estimatedHours: generated.estimatedHours,
          outcomes: generated.outcomes,
          prerequisites: generated.prerequisites,
          tags: generated.tags,
          faqs: generated.faqs as unknown as Prisma.InputJsonValue,
          isPublished: false,
          isAiGenerated: true,
          ownerUserId: userId,
          topicCount,
          enrolledCount: 1,
        },
      });

      for (const [sIdx, section] of sections.entries()) {
        await tx.roadmapSection.create({
          data: {
            roadmapId: roadmap.id,
            slug: section.slug,
            title: section.title,
            summary: section.summary,
            orderIndex: sIdx,
            topics: {
              create: section.topics.map((topic, tIdx) => ({
                slug: topic.slug,
                title: topic.title,
                summary: topic.summary,
                contentMd: topic.contentMd,
                estimatedHours: topic.estimatedHours,
                difficulty: topic.difficulty,
                orderIndex: tIdx,
                prerequisiteSlugs: topic.prerequisiteSlugs ?? [],
                miniProject: topic.miniProject ?? null,
                selfCheck: topic.selfCheck ?? null,
                resources: {
                  create: topic.resources.map((r, rIdx) => ({
                    kind: r.kind,
                    title: r.title,
                    url: r.url,
                    source: r.source ?? null,
                    isFree: true,
                    orderIndex: rIdx,
                  })),
                },
              })),
            },
          },
        });
      }

      const created = await tx.roadmapEnrollment.create({
        data: {
          userId,
          roadmapId: roadmap.id,
          hoursPerWeek: input.hoursPerWeek,
          preferredDays: input.preferredDays,
          experienceLevel: input.experienceLevel,
          goal: input.goal,
          startDate,
          targetEndDate,
          weeklyPlan: plan as unknown as Prisma.InputJsonValue,
        },
        include: { roadmap: true, topicProgress: true },
      });

      return created;
    });

    // 4. Schedule day-10 follow-up
    const sendAt = new Date(enrollment.startDate.getTime() + 10 * 24 * 60 * 60 * 1000);
    await prisma.scheduledEmail.create({
      data: {
        userId,
        kind: "ROADMAP_DAY_10",
        sendAt,
        payload: {
          enrollmentId: enrollment.id,
          roadmapSlug: enrollment.roadmap.slug,
          roadmapTitle: enrollment.roadmap.title,
        },
      },
    });

    // 5. Generate PDF + welcome email (non-blocking on failure)
    try {
      const full = await getEnrollmentForUser({ userId, enrollmentId: enrollment.id });
      const userRecord = await prisma.user.findUnique({
        where: { id: userId },
        select: { name: true, email: true },
      });
      if (full && userRecord) {
        const pdfBuffer = await generateRoadmapPdf({
          user: { name: userRecord.name },
          roadmap: {
            title: full.roadmap.title,
            shortDescription: full.roadmap.shortDescription,
            estimatedHours: full.roadmap.estimatedHours,
            outcomes: full.roadmap.outcomes,
            prerequisites: full.roadmap.prerequisites,
          },
          enrollment: {
            hoursPerWeek: full.hoursPerWeek,
            preferredDays: full.preferredDays,
            startDate: full.startDate,
            targetEndDate: full.targetEndDate,
            experienceLevel: full.experienceLevel,
            goal: full.goal,
          },
          weeklyPlan: plan.map((w) => ({
            week: w.week,
            topicSlugs: w.topicSlugs,
            totalHours: w.totalHours,
          })),
          sections: full.roadmap.sections.map((s) => ({
            title: s.title,
            summary: s.summary,
            orderIndex: s.orderIndex,
            topics: s.topics.map((t) => ({
              slug: t.slug,
              title: t.title,
              summary: t.summary,
              contentMd: t.contentMd,
              estimatedHours: t.estimatedHours,
              difficulty: t.difficulty,
              miniProject: t.miniProject,
              selfCheck: t.selfCheck,
              resources: t.resources.map((r) => ({
                kind: r.kind,
                title: r.title,
                url: r.url,
                source: r.source,
              })),
            })),
          })),
        });

        await sendEmail({
          to: userRecord.email,
          subject: `Your AI roadmap for ${full.roadmap.title} is ready`,
          html: roadmapWelcomeEmailHtml({
            name: userRecord.name,
            roadmapTitle: full.roadmap.title,
            roadmapSlug: full.roadmap.slug,
            hoursPerWeek: full.hoursPerWeek,
            targetEndDate: full.targetEndDate,
            weekOneTopics: plan[0]?.topicSlugs ?? [],
          }),
          attachments: [
            {
              filename: `${full.roadmap.slug}.pdf`,
              content: pdfBuffer,
              contentType: "application/pdf",
            },
          ],
        });
      }
    } catch (err) {
      console.error("[Roadmap AI] Welcome email/PDF failed:", err);
    }

    res.status(201).json({
      message: "Roadmap generated",
      slug: enrollment.roadmap.slug,
      enrollmentId: enrollment.id,
    });
  } catch (err) {
    next(err);
  }
}
