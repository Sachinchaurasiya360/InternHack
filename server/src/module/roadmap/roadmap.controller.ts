import type { Request, Response, NextFunction } from "express";
import type { Prisma } from "@prisma/client";
import { prisma } from "../../database/db.js";
import {
  aiGenerateSchema,
  enrollSchema,
  enrollmentIdParam,
  enrollmentTopicParams,
  listQuerySchema,
  pdfThemeQuery,
  recomputePaceSchema,
  regenerateSectionBody,
  regenerateSectionParams,
  roadmapSlugParam,
  topicSlugParam,
  updateProgressSchema,
  updateRoadmapSchema,
  shareTokenSchema
} from "./roadmap.validation.js";
import {
  buildWeeklyPlan,
  getEnrollmentAnalyticsForUser,
    enrollUser,
  getEnrollmentAnalyticsBatchForUser,
  findDuplicateRoadmap,
  getEnrollmentByRoadmapSlugForUser,
  getEnrollmentForUser,
  getRoadmapBySlug,
  getTopicBySlug,
  listEnrollmentsForUser,
  listPublishedRoadmaps,
  recomputePace,
  summarizeProgress,
  updateTopicProgress,
  deleteEnrollment,
  listCommunityRoadmaps,
} from "./roadmap.service.js";
import {
  buildRoadmapSlug,
  generateAiRoadmap,
  regenerateSection,
  slugifyRoadmap,
} from "./roadmap.ai.service.js";

import { generateRoadmapPdf, generateCertificatePdf } from "./roadmap.pdf.js";
import { sendEmail } from "../../utils/email.utils.js";
import { roadmapWelcomeEmailHtml } from "../../utils/email-templates.js";
// FIX: import clearCache so we can bust the cache for the new roadmap slug
import { clearCache } from "../../middleware/cache.middleware.js";
import { getPlanTier, MONTHLY_LIMITS } from "../../config/usage-limits.js";

const validationError = (res: Response, errors: unknown) =>
  res.status(400).json({ message: "Validation failed", errors });

// ─── Public ────────────────────────────────────────────────────────────────
export async function getCommunityRoadmaps(_req: Request, res: Response, next: NextFunction) {
  try {
    const roadmaps = await listCommunityRoadmaps();
    res.json({ roadmaps });
  } catch (err) {
    next(err);
  }
}

export async function getRoadmaps(req: Request, res: Response, next: NextFunction) {
  try {
    const parsed = listQuerySchema.safeParse(req.query);
    if (!parsed.success) {
      validationError(res, parsed.error.flatten().fieldErrors);
      return;
    }
    const data = await listPublishedRoadmaps({ ...parsed.data, userId: req.user?.id });
    res.json(data);
  } catch (err) {
    next(err);
  }
}

export async function getRoadmap(req: Request, res: Response, next: NextFunction) {
  try {
    const slug = req.params.slug;

const parsed = roadmapSlugParam.safeParse({ slug });
    if (!parsed.success) {
      validationError(res, parsed.error.flatten().fieldErrors);
      return;
    }
    const roadmap = await getRoadmapBySlug(parsed.data.slug);
    if (!roadmap) {
      res.status(404).json({ message: "Roadmap not found" });
      return;
    }

    if (!roadmap.isPublished) {
      const user = req.user;
      if (!user || (user.role !== "ADMIN" && user.id !== roadmap.ownerUserId)) {
        res.status(404).json({ message: "Roadmap not found" });
        return;
      }
      res.locals["skipCache"] = true;
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

    if (!topic.section.roadmap.isPublished) {
      const user = req.user;
      if (!user || (user.role !== "ADMIN" && user.id !== topic.section.roadmap.ownerUserId)) {
        res.status(404).json({ message: "Topic not found" });
        return;
      }
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
        const u = await prisma.user.findUnique({
          where: { id: req.user!.id },
          select: { name: true },
        });
        const pdfBuffer = await generateRoadmapPdf({
          user: { name: u?.name ?? req.user!.email },
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
          weeklyPlan: (weeklyPlan || []).map((w) => ({
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
          const weekOne = weeklyPlan?.[0]?.topicSlugs ?? [];
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
      console.error("[Roadmap] Welcome email/PDF failed:", {
        enrollmentId: enrollment.id,
        userId: req.user!.id,
        err,
      });
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

export async function getMyEnrollmentByRoadmapSlug(req: Request, res: Response, next: NextFunction) {
  try {
    const params = roadmapSlugParam.safeParse(req.params);
    if (!params.success) {
      validationError(res, params.error.flatten().fieldErrors);
      return;
    }

    const enrollment = await getEnrollmentByRoadmapSlugForUser({
      userId: req.user!.id,
      slug: params.data.slug,
    });

    res.json({
      enrolled: Boolean(enrollment),
      enrollment,
    });
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

export async function getMyEnrollmentAnalytics(req: Request, res: Response, next: NextFunction) {
  try {
    const params = enrollmentIdParam.safeParse(req.params);
    if (!params.success) {
      validationError(res, params.error.flatten().fieldErrors);
      return;
    }

    const analytics = await getEnrollmentAnalyticsForUser({
      userId: req.user!.id,
      enrollmentId: params.data.id,
    });
    if (!analytics) {
      res.status(404).json({ message: "Enrollment not found" });
      return;
    }

    res.json({ analytics });
  } catch (err) {
    next(err);
  }
}

export async function getMyEnrollmentsAnalyticsBatch(req: Request, res: Response, next: NextFunction) {
  try {
    const analytics =
  await getEnrollmentAnalyticsBatchForUser({
    userId: req.user!.id,
  });
    res.json({ analytics });
  } catch (err) {
    next(err);
  }
}

export async function deleteMyEnrollment(req: Request, res: Response, next: NextFunction) {
  try {
    const params = enrollmentIdParam.safeParse(req.params);
    if (!params.success) {
      validationError(res, params.error.flatten().fieldErrors);
      return;
    }

    await deleteEnrollment({
      userId: req.user!.id,
      enrollmentId: params.data.id,
    });

    res.status(204).send();
  } catch (err: any) {
    if (err?.status === 404) {
      res.status(404).json({ message: err.message });
      return;
    }
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


    const { progress, roadmapCompleted } = await updateTopicProgress({
      userId: req.user!.id,
      enrollmentId: params.data.id,
      topicId: params.data.topicId,
      status: body.data.status,
      bookmarked: body.data.bookmarked,
      notes: body.data.notes,
    });
    res.json({ progress, roadmapCompleted });

  } catch (err) {
    if (typeof err === "object" && err && "status" in err) {
      const e = err as { status: number; message: string };
      res.status(e.status).json({ message: e.message });
      return;
    }
    next(err);
  }
}
export async function updateRoadmap(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const slug = Array.isArray(req.params.slug)
      ? req.params.slug[0]
      : req.params.slug;

    if (!slug) {
      return res.status(400).json({
        message: "Slug is required",
      });
    }

    const result =
      updateRoadmapSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        errors: result.error.flatten(),
      });
    }

    const roadmap =
      await prisma.roadmap.findUnique({
        where: { slug },
      });

    if (!roadmap) {
      return res.status(404).json({
        message: "Roadmap not found",
      });
    }

    const user = req.user;
    if (!user || roadmap.ownerUserId !== user.id) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }

    const updatedRoadmap =
      await prisma.roadmap.update({
        where: { slug },
        data: result.data,
      });

    clearCache(`roadmap:structure:${slug}`);
    clearCache(`roadmap:/api/roadmaps/${slug}`);

    return res.json({
      roadmap: updatedRoadmap,
    });
  } catch (error) {
    next(error);
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

    const themeQuery = pdfThemeQuery.safeParse(req.query);
    const theme = themeQuery.success ? themeQuery.data.theme : "light";

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
      theme,
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

    const suffix = theme === "dark" ? "-dark" : "";
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${enrollment.roadmap.slug}-roadmap${suffix}.pdf"`,
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

    // 1. Enforce max capacity threshold guard
    const MAX_AI_ROADMAPS = 5;
    const existingCount = await prisma.roadmapEnrollment.count({
      where: {
        userId,
        roadmap: { ownerUserId: userId },
      },
    });

    if (existingCount >= MAX_AI_ROADMAPS) {
      res.status(409).json({
        message: "You have reached the limit of 5 active AI roadmaps. Please complete or delete existing ones before generating new ones.",
      });
      return;
    }

    // 2. Evaluate similarity duplicate check block
    const duplicate = await findDuplicateRoadmap(
      input.goalDescription,
      userId
    );

    if (duplicate && !input.forceCreate) {
      res.status(409).json({
        message: "Similar roadmap already exists",
        roadmap: duplicate,
      });
      return;
    }

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
          // FIX: was `false` — AI-generated roadmaps must be published so the
          // canvas page can load them via GET /roadmaps/:slug without hitting
          // the unpublished ownership gate and returning a 404.
          isPublished: true,
          isAiGenerated: true,
          ownerUserId: userId,
          topicCount,
          enrolledCount: 1,
        },
      });

      for (const [sIdx, section] of sections.entries()) {
        // Create section + topics first (no resources) to avoid a three-level
        // nested-create FK violation where resources reference a topicId that
        // hasn't been committed yet within the same transaction batch.
        const createdSection = await tx.roadmapSection.create({
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
              })),
            },
          },
          include: { topics: { orderBy: { orderIndex: "asc" } } },
        });

        // Second pass: create resources now that topicIds are known
        for (const [tIdx, topic] of section.topics.entries()) {
          if (!topic.resources?.length) continue;
          const createdTopic = createdSection.topics[tIdx];
          if (!createdTopic) continue;
          await tx.roadmapResource.createMany({
            data: topic.resources.map((r, rIdx) => ({
              topicId: createdTopic.id,
              kind: r.kind,
              title: r.title,
              url: r.url,
              source: r.source ?? null,
              isFree: true,
              orderIndex: rIdx,
            })),
          });
        }
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
    }, { timeout: 30000 });

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
      console.error("[Roadmap AI] Welcome email/PDF failed:", {
        enrollmentId: enrollment.id,
        userId,
        err,
      });
    }

    // FIX: Bust the cache for this slug so the first GET after generation
    // always hits the DB and returns the freshly created roadmap, not a
    // stale cache entry from a previous 404 or an earlier roadmap at the
    // same URL pattern.
    clearCache(`roadmap:structure:${slug}`);
    clearCache(`roadmap:/api/roadmaps/${slug}`);

    res.status(201).json({
      message: "Roadmap generated",
      slug: enrollment.roadmap.slug,
      enrollmentId: enrollment.id,
      title: generated.title,
      sections: sections.map((s) => ({
        title: s.title,
        estimatedHours: s.topics.reduce((sum, t) => sum + t.estimatedHours, 0),
      })),
      totalHours: generated.estimatedHours,
    });
  } catch (err) {
    next(err);
  }
}

export async function downloadCertificate(req: Request, res: Response, next: NextFunction) {
  try {
    const params = enrollmentIdParam.safeParse(req.params);
    if (!params.success) {
      validationError(res, params.error.flatten().fieldErrors);
      return;
    }

    const themeQuery = pdfThemeQuery.safeParse(req.query);
    const theme = themeQuery.success ? themeQuery.data.theme : "light";

    const enrollment = await getEnrollmentForUser({
      userId: req.user!.id,
      enrollmentId: params.data.id,
    });
    if (!enrollment) {
      res.status(404).json({ message: "Enrollment not found" });
      return;
    }

    // Guard: only allow download if 100% complete
    const summary = summarizeProgress(enrollment);
    if (summary.percentComplete < 100) {
      res.status(403).json({
        message: "Complete all topics to download your certificate.",
        percentComplete: summary.percentComplete,
      });
      return;
    }

    const userRecord = await prisma.user.findUnique({
      where: { id: req.user!.id },
      select: { name: true },
    });

    const completedTopics = enrollment.topicProgress
      .filter((p) => p.status === "COMPLETED" && p.completedAt)
      .sort((a, b) => b.completedAt!.getTime() - a.completedAt!.getTime());
    const actualCompletedAt = completedTopics[0]?.completedAt ?? new Date();

    const pdfBuffer = await generateCertificatePdf({
      theme,
      userName: userRecord?.name ?? "Learner",
      roadmapTitle: enrollment.roadmap.title,
      completedAt: actualCompletedAt,
    });

    const suffix = theme === "dark" ? "-dark" : "";
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${enrollment.roadmap.slug}-certificate${suffix}.pdf"`,
    );
    res.send(pdfBuffer);
  } catch (err) {
    next(err);
  }
}

export async function getPublicCertificateMeta(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const slug = req.params.slug;

    const shareToken = typeof req.params.shareToken === "string" ? req.params.shareToken : undefined;

    const parsed = roadmapSlugParam.safeParse({
      slug,
    });

    const shareTokenParsed = shareTokenSchema.safeParse(shareToken);

    if (!parsed.success || !shareTokenParsed.success) {     
       validationError(
        res,
        parsed.success
          ? { shareToken: ["Invalid share token"] }
          : parsed.error.flatten().fieldErrors,
      );
      return;
    }

    const enrollment = await prisma.roadmapEnrollment.findFirst({
      where: {
        shareToken: shareTokenParsed.data,
        roadmap: {
          slug: parsed.data.slug,
        },
      },
      include: {
        roadmap: true,
        user: {
          select: {
            name: true,
          },
        },
        topicProgress: {
          where: {
            status: "COMPLETED",
          },
          orderBy: {
            completedAt: "desc",
          },
        },
      },
    });

    if (!enrollment) {
      res.status(404).json({
        message: "Certificate not found",
      });
      return;
    }

    const completedTopics = enrollment.topicProgress.filter(
      (p) => p.status === "COMPLETED" && p.completedAt,
    );

    const percentComplete =
      enrollment.roadmap.topicCount === 0
        ? 0
        : Math.round(
            (completedTopics.length /
              enrollment.roadmap.topicCount) *
              100,
          );

    if (percentComplete < 100) {
      res.status(403).json({
        message: "Certificate unavailable",
      });
      return;
    }

    const latestCompletion =
      completedTopics[0]?.completedAt ?? new Date();

    res.json({
      userName: enrollment.user.name ?? "Learner",
      roadmapTitle: enrollment.roadmap.title,
      roadmapSlug: enrollment.roadmap.slug,
      completedAt: latestCompletion,
      certificateUrl: `/api/roadmaps/certificates/${enrollment.roadmap.slug}/${enrollment.shareToken}`,
      shareUrl: `/learn/roadmaps/certificates/${enrollment.roadmap.slug}/${enrollment.shareToken}`,
    });
  } catch (err) {
    next(err);
  }
}

export async function getPublicCertificate(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const slug = req.params.slug;

    const shareToken = typeof req.params.shareToken === "string" ? req.params.shareToken : undefined;

    const parsed = roadmapSlugParam.safeParse({
      slug: slug,
    });

    const shareTokenParsed = shareTokenSchema.safeParse(shareToken);

    if (!parsed.success || !shareTokenParsed.success) {     
       validationError(
        res,
        parsed.success
          ? { shareToken: ["Invalid share token"] }
          : parsed.error.flatten().fieldErrors,
      );
      return;
    }

    const enrollment = await prisma.roadmapEnrollment.findFirst({
      where: {
        shareToken: shareTokenParsed.data,
        roadmap: {
          slug: parsed.data.slug,
        },
      },
      include: {
        roadmap: {
          include: {
            sections: {
              include: {
                topics: true,
              },
            },
          },
        },
        topicProgress: true,
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!enrollment) {
      res.status(404).json({
        message: "Certificate not found",
      });
      return;
    }

    // Only allow completed roadmaps
    const summary = summarizeProgress(enrollment);

    if (summary.percentComplete < 100) {
      res.status(403).json({
        message: "Certificate unavailable until roadmap completion",
      });
      return;
    }

    const completedTopics = enrollment.topicProgress
      .filter((p) => p.status === "COMPLETED" && p.completedAt)
      .sort(
        (a, b) =>
          b.completedAt!.getTime() - a.completedAt!.getTime()
      );

    const actualCompletedAt =
      completedTopics[0]?.completedAt ?? new Date();

    const pdfBuffer = await generateCertificatePdf({
      theme: "light",
      userName: enrollment.user.name ?? "Learner",
      roadmapTitle: enrollment.roadmap.title,
      completedAt: actualCompletedAt,
    });

    res.setHeader("Content-Type", "application/pdf");

    res.setHeader(
      "Content-Disposition",
      `inline; filename="${enrollment.roadmap.slug}-certificate.pdf"`,
    );

    res.send(pdfBuffer);
  } catch (err) {
    next(err);
  }
}

export async function getMyCertificates(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const enrollments = await prisma.roadmapEnrollment.findMany({
      where: {
        userId: req.user!.id,
      },
      include: {
        roadmap: true,
        topicProgress: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    const certificates = enrollments
      .map((enrollment) => {
        const completedTopics = enrollment.topicProgress.filter(
          (p) => p.status === "COMPLETED" && p.completedAt
        );

        const percentComplete =
          enrollment.roadmap.topicCount === 0
            ? 0
            : Math.round(
                (completedTopics.length /
                  enrollment.roadmap.topicCount) *
                  100,
              );

        if (percentComplete < 100) {
          return null;
        }

        const latestCompletion =
          completedTopics.sort((a, b) => b.completedAt!.getTime() - a.completedAt!.getTime())[0]
            ?.completedAt ?? new Date();

        return {
          shareToken: enrollment.shareToken,
          roadmapTitle: enrollment.roadmap.title,
          roadmapSlug: enrollment.roadmap.slug,
          completedAt: latestCompletion,
          certificateUrl:
            `/api/roadmaps/me/enrollments/${enrollment.id}/certificate`,
          shareUrl:
            `/learn/roadmaps/certificates/${enrollment.roadmap.slug}/${enrollment.shareToken}`,
        };
      })
      .filter(Boolean);

    res.json({
      certificates,
    });
  } catch (err) {
    next(err);
  }
}


// ─── Section Regeneration ─────────────────────────────────────────────────
export async function postRegenerateSection(req: Request, res: Response, next: NextFunction) {
  try {
    const params = regenerateSectionParams.safeParse(req.params);
    if (!params.success) {
      validationError(res, params.error.flatten().fieldErrors);
      return;
    }

    const body = regenerateSectionBody.safeParse(req.body);
    if (!body.success) {
      validationError(res, body.error.flatten().fieldErrors);
      return;
    }

    const userId = req.user!.id;
    const { slug, sectionId } = params.data;

    const roadmap = await prisma.roadmap.findUnique({
      where: { slug },
      include: {
        sections: {
          orderBy: { orderIndex: "asc" },
          include: { topics: { orderBy: { orderIndex: "asc" } } },
        },
      },
    });

    if (!roadmap) {
      res.status(404).json({ message: "Roadmap not found" });
      return;
    }

    if (roadmap.ownerUserId !== userId) {
      res.status(403).json({ message: "You can only regenerate sections of your own roadmaps" });
      return;
    }

    if (!roadmap.isAiGenerated) {
      res.status(403).json({ message: "Section regeneration is only available for AI-generated roadmaps" });
      return;
    }

    const targetSection = roadmap.sections.find((s) => s.id === sectionId);
    if (!targetSection) {
      res.status(404).json({ message: "Section not found in this roadmap" });
      return;
    }

    const neighbourSections = roadmap.sections
      .filter((s) => s.id !== sectionId)
      .map((s) => ({ title: s.title, orderIndex: s.orderIndex }));

    let generated;
    try {
      generated = await regenerateSection(
        {
          roadmapTitle: roadmap.title,
          roadmapDescription: roadmap.description,
          targetSection: {
            title: targetSection.title,
            summary: targetSection.summary,
            orderIndex: targetSection.orderIndex,
            topics: targetSection.topics.map((t) => ({
              title: t.title,
              estimatedHours: t.estimatedHours,
            })),
          },
          neighbourSections,
          instructions: body.data.instructions,
        },
        userId,
      );
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Could not regenerate section";
      res.status(502).json({ message: msg });
      return;
    }

    const usedSlugs = new Set<string>();
    const slugify = (s: string, idx: number) => {
      const base = s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) || `topic-${idx + 1}`;
      let slug = base;
      let n = 1;
      while (usedSlugs.has(slug)) slug = `${base}-${++n}`;
      usedSlugs.add(slug);
      return slug;
    };

    const updatedSection = await prisma.$transaction(async (tx) => {

      await tx.roadmapTopic.deleteMany({ where: { sectionId } });

      await tx.roadmapSection.update({
        where: { id: sectionId },
        data: {
          title: generated.title,
          summary: generated.summary,
          aiRegeneratedAt: new Date(),
        },
      });

      for (const [tIdx, topic] of generated.topics.entries()) {
        const topicSlug = slugify(topic.title, tIdx);
        const created = await tx.roadmapTopic.create({
          data: {
            sectionId,
            slug: topicSlug,
            title: topic.title,
            summary: topic.summary,
            contentMd: topic.contentMd,
            estimatedHours: topic.estimatedHours,
            difficulty: topic.difficulty,
            orderIndex: tIdx,
            prerequisiteSlugs: topic.prerequisiteSlugs ?? [],
            miniProject: topic.miniProject ?? null,
            selfCheck: topic.selfCheck ?? null,
          },
        });

        if (topic.resources?.length) {
          await tx.roadmapResource.createMany({
            data: topic.resources.map((r, rIdx) => ({
              topicId: created.id,
              kind: r.kind,
              title: r.title,
              url: r.url,
              source: r.source ?? null,
              isFree: true,
              orderIndex: rIdx,
            })),
          });
        }
      }

      const newTopicCount = roadmap.sections.reduce((sum, s) => {
        if (s.id === sectionId) return sum + generated.topics.length;
        return sum + s.topics.length;
      }, 0);

      await tx.roadmap.update({
        where: { id: roadmap.id },
        data: { topicCount: newTopicCount, updatedAt: new Date() },
      });

      return tx.roadmapSection.findUnique({
        where: { id: sectionId },
        include: {
          topics: {
            orderBy: { orderIndex: "asc" },
            include: { resources: { orderBy: { orderIndex: "asc" } } },
          },
        },
      });
    }, { timeout: 30000 });

    // FIX: Bust the cache for this roadmap so section changes are visible immediately
    clearCache(`roadmap:structure:${slug}`);
    clearCache(`roadmap:/api/roadmaps/${slug}`);

    res.json({
      message: "Section regenerated successfully",
      section: updatedSection,
    });
  } catch (err) {
    next(err);
  }
}
// ─── Share ────────────────────────────────────────────────────────────────────
export async function toggleShare(req: Request, res: Response, next: NextFunction) {
  try {
    const parsed = roadmapSlugParam.safeParse(req.params);
    if (!parsed.success) {
      validationError(res, parsed.error.flatten().fieldErrors);
      return;
    }

    const slug = parsed.data.slug;
    const userId = req.user!.id;

    const roadmap = await prisma.roadmap.findFirst({
      where: { slug, ownerUserId: userId },
    });

    if (!roadmap) {
      res.status(403).json({ message: "Not authorized or roadmap not found" });
      return;
    }

    if (!roadmap.isAiGenerated) {
      res.status(400).json({ message: "Only AI-generated roadmaps can be shared" });
      return;
    }

    const updated = await prisma.roadmap.update({
      where: { slug },
      data: { isPubliclyShared: !roadmap.isPubliclyShared },
    });

    // Bust cache so share state is immediately reflected
    clearCache(`roadmap:structure:${slug}`);
    clearCache(`roadmap:/api/roadmaps/${slug}`);

    res.json({
      success: true,
      isPubliclyShared: updated.isPubliclyShared,
      shareUrl: `https://internhack.xyz/roadmaps/${slug}`,
    });
  } catch (err) {
    next(err);
  }
}

// ─── AI Usage Stats ────────────────────────────────────────────────────────
export async function getAiUsage(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user!.id;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { subscriptionPlan: true, subscriptionStatus: true, subscriptionEndDate: true },
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const tier = getPlanTier(user.subscriptionPlan, user.subscriptionStatus, user.subscriptionEndDate);
    const limit = MONTHLY_LIMITS["ROADMAP_GENERATION"]?.[tier] ?? 5;

    const startOfWindow = new Date();
    startOfWindow.setUTCDate(1);
    startOfWindow.setUTCHours(0, 0, 0, 0);

    const used = await prisma.usageLog.count({
      where: {
        userId,
        action: "ROADMAP_GENERATION",
        createdAt: { gte: startOfWindow },
      },
    });

    res.json({
      used,
      limit,
      isPro: tier === "PREMIUM",
    });
  } catch (err) {
    next(err);
  }
}

