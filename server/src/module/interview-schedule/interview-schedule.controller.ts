import { Request, Response, NextFunction } from "express";
import * as service from "./interview-schedule.service";

export async function scheduleInterview(req: Request, res: Response, next: NextFunction) {
  try {
    const data = {
      recruiterId: req.user!.id,
      studentId: req.body.studentId,
      scheduledAt: new Date(req.body.scheduledAt),
      durationMinutes: req.body.durationMinutes,
      meetingLink: req.body.meetingLink,
      notes: req.body.notes,
    };

    const result = await service.scheduleInterview(data);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

export async function getInterviews(req: Request, res: Response, next: NextFunction) {
  try {
    const filters = {
      userId: req.user!.id,
      role: req.user!.role === "RECRUITER" ? "RECRUITER" as const : "STUDENT" as const,
      status: req.query.status as any,
      upcoming: req.query.upcoming === "true",
      page: req.query.page ? parseInt(req.query.page as string, 10) : 1,
      limit: req.query.limit ? parseInt(req.query.limit as string, 10) : 10,
    };

    const result = await service.getInterviews(filters);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function getInterviewById(req: Request, res: Response, next: NextFunction) {
  try {
    const id = parseInt(req.params.id, 10);
    const userId = req.user!.id;
    const role = req.user!.role;

    const filters = {
      userId,
      role: role === "RECRUITER" ? "RECRUITER" as const : "STUDENT" as const,
    };
    
    // We can reuse getInterviews or write a specific find method. Since it's a simple lookup:
    const { prisma } = require("../../database/db");
    const interview = await prisma.interviewSchedule.findUnique({
      where: { id },
      include: {
        student: { select: { id: true, name: true, email: true } },
        recruiter: { select: { id: true, name: true, email: true } },
      },
    });

    if (!interview || (role === "RECRUITER" && interview.recruiterId !== userId) || (role !== "RECRUITER" && interview.studentId !== userId)) {
      return res.status(404).json({ message: "Interview not found" });
    }

    res.json(interview);
  } catch (error) {
    next(error);
  }
}

export async function updateInterview(req: Request, res: Response, next: NextFunction) {
  try {
    const id = parseInt(req.params.id, 10);
    const userId = req.user!.id;
    
    const result = await service.updateInterview(id, userId, req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function cancelInterview(req: Request, res: Response, next: NextFunction) {
  try {
    const id = parseInt(req.params.id, 10);
    const userId = req.user!.id;
    
    const result = await service.cancelInterview(id, userId);
    res.json(result);
  } catch (error) {
    next(error);
  }
}
