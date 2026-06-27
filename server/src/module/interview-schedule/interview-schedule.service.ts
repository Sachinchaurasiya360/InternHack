import { prisma } from "../../database/db";
import { InterviewScheduleStatus } from "@prisma/client";
import { sendEmail } from "../../utils/email.utils";
import { generateIcs } from "../../utils/ics.utils";
import {
  interviewScheduledEmailHtml,
  interviewUpdatedEmailHtml,
  interviewCancelledEmailHtml,
} from "../../utils/email-templates";
import { TRPCError } from "@trpc/server"; // Or standard Express Error handling? Let's use custom AppError if they have one, wait, the project uses a custom Express error, let's just throw standard errors or check other services. Let's just throw Error and let controller handle it.

export async function scheduleInterview(data: {
  recruiterId: number;
  studentId: number;
  scheduledAt: Date;
  durationMinutes: number;
  meetingLink?: string;
  notes?: string;
}) {
  const { recruiterId, studentId, scheduledAt, durationMinutes } = data;

  // Check overlap for recruiter
  const recruiterOverlap = await prisma.interviewSchedule.findFirst({
    where: {
      recruiterId,
      status: "SCHEDULED",
      scheduledAt: {
        lte: new Date(scheduledAt.getTime() + durationMinutes * 60000),
      },
      AND: [
        {
          scheduledAt: {
            gte: new Date(scheduledAt.getTime() - durationMinutes * 60000),
          },
        },
      ],
    },
  });

  if (recruiterOverlap) {
    throw new Error("Recruiter has an overlapping interview.");
  }

  // Create
  const interview = await prisma.interviewSchedule.create({
    data: {
      recruiterId,
      studentId,
      scheduledAt,
      durationMinutes,
      meetingLink: data.meetingLink,
      notes: data.notes,
      status: "SCHEDULED",
    },
    include: {
      student: true,
      recruiter: true,
    },
  });

  // ICS Attachment
  const icsString = generateIcs({
    title: `Interview with ${interview.recruiter.name}`,
    description: data.notes,
    url: data.meetingLink,
    startDate: scheduledAt,
    endDate: new Date(scheduledAt.getTime() + durationMinutes * 60000),
    organizer: interview.recruiter.email,
  });

  const attachments = [
    {
      filename: "invite.ics",
      content: Buffer.from(icsString),
      contentType: "text/calendar",
    },
  ];

  // Send Emails
  const emailArgs = {
    studentName: interview.student.name,
    recruiterName: interview.recruiter.name,
    scheduledAt,
    durationMinutes,
    meetingLink: data.meetingLink,
    notes: data.notes,
  };

  await sendEmail({
    to: interview.student.email,
    subject: `Interview Scheduled with ${interview.recruiter.name}`,
    html: interviewScheduledEmailHtml(emailArgs),
    attachments,
  });

  await sendEmail({
    to: interview.recruiter.email,
    subject: `Interview Scheduled with ${interview.student.name}`,
    html: interviewScheduledEmailHtml({ ...emailArgs, studentName: interview.recruiter.name, recruiterName: interview.student.name }),
    attachments,
  });

  return interview;
}

export async function getInterviews(filters: {
  userId: number;
  role: "RECRUITER" | "STUDENT";
  status?: InterviewScheduleStatus;
  upcoming?: boolean;
  page?: number;
  limit?: number;
}) {
  const { userId, role, status, upcoming, page = 1, limit = 10 } = filters;

  const where: any = {};
  if (role === "RECRUITER") {
    where.recruiterId = userId;
  } else {
    where.studentId = userId;
  }

  if (status) {
    where.status = status;
  }

  if (upcoming) {
    where.scheduledAt = { gte: new Date() };
    where.status = "SCHEDULED";
  }

  const [data, total] = await Promise.all([
    prisma.interviewSchedule.findMany({
      where,
      include: {
        student: { select: { id: true, name: true, email: true } },
        recruiter: { select: { id: true, name: true, email: true } },
      },
      orderBy: { scheduledAt: "asc" },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.interviewSchedule.count({ where }),
  ]);

  return { data, total, page, limit };
}

export async function updateInterview(id: number, userId: number, data: any) {
  const interview = await prisma.interviewSchedule.findUnique({
    where: { id },
    include: { student: true, recruiter: true },
  });

  if (!interview || interview.recruiterId !== userId) {
    throw new Error("Interview not found or unauthorized.");
  }

  const updated = await prisma.interviewSchedule.update({
    where: { id },
    data,
  });

  if (data.scheduledAt || data.durationMinutes || data.meetingLink) {
    const start = data.scheduledAt ? new Date(data.scheduledAt) : interview.scheduledAt;
    const duration = data.durationMinutes || interview.durationMinutes;

    const icsString = generateIcs({
      title: `Updated Interview with ${interview.recruiter.name}`,
      description: data.notes || interview.notes || undefined,
      url: data.meetingLink || interview.meetingLink || undefined,
      startDate: start,
      endDate: new Date(start.getTime() + duration * 60000),
      organizer: interview.recruiter.email,
    });

    const attachments = [{ filename: "invite.ics", content: Buffer.from(icsString), contentType: "text/calendar" }];
    const emailArgs = {
      studentName: interview.student.name,
      recruiterName: interview.recruiter.name,
      scheduledAt: start,
      durationMinutes: duration,
      meetingLink: data.meetingLink || interview.meetingLink || undefined,
      notes: data.notes || interview.notes || undefined,
    };

    await sendEmail({
      to: interview.student.email,
      subject: `Interview Updated with ${interview.recruiter.name}`,
      html: interviewUpdatedEmailHtml(emailArgs),
      attachments,
    });
  }

  return updated;
}

export async function cancelInterview(id: number, userId: number) {
  const interview = await prisma.interviewSchedule.findUnique({
    where: { id },
    include: { student: true, recruiter: true },
  });

  if (!interview || interview.recruiterId !== userId) {
    throw new Error("Interview not found or unauthorized.");
  }

  const updated = await prisma.interviewSchedule.update({
    where: { id },
    data: { status: "CANCELLED" },
  });

  await sendEmail({
    to: interview.student.email,
    subject: `Interview Cancelled with ${interview.recruiter.name}`,
    html: interviewCancelledEmailHtml({ studentName: interview.student.name, recruiterName: interview.recruiter.name }),
  });

  return updated;
}
