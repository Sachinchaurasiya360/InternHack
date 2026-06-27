import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  prisma: {
    interviewSchedule: {
      findFirst: vi.fn(),
      create: vi.fn(),
      findMany: vi.fn(),
      count: vi.fn(),
      findUnique: vi.fn(),
      update: vi.fn(),
    },
  },
  emailUtils: {
    sendEmail: vi.fn().mockResolvedValue(true),
  },
  icsUtils: {
    generateIcs: vi.fn().mockReturnValue("mock-ics-content"),
  },
}));

vi.mock("../database/db.js", () => ({
  prisma: mocks.prisma,
}));

vi.mock("../utils/email.utils.js", () => ({
  sendEmail: mocks.emailUtils.sendEmail,
}));

vi.mock("../utils/ics.utils.js", () => ({
  generateIcs: mocks.icsUtils.generateIcs,
}));

const service = await import("../module/interview-schedule/interview-schedule.service.js");

describe("Interview Schedule Service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("scheduleInterview", () => {
    it("should throw error if there is a scheduling conflict", async () => {
      mocks.prisma.interviewSchedule.findFirst.mockResolvedValue({ id: 1 }); // Conflict exists

      await expect(
        service.scheduleInterview({
          recruiterId: 1,
          studentId: 2,
          scheduledAt: new Date(),
          durationMinutes: 60,
        })
      ).rejects.toThrow("Recruiter has an overlapping interview.");
    });

    it("should schedule an interview and send emails", async () => {
      mocks.prisma.interviewSchedule.findFirst.mockResolvedValue(null);
      const mockInterview = {
        id: 1,
        recruiterId: 1,
        studentId: 2,
        scheduledAt: new Date(),
        durationMinutes: 60,
        status: "SCHEDULED",
        recruiter: { name: "Recruiter 1", email: "recruiter@example.com" },
        student: { name: "Student 1", email: "student@example.com" },
      };
      mocks.prisma.interviewSchedule.create.mockResolvedValue(mockInterview);

      const result = await service.scheduleInterview({
        recruiterId: 1,
        studentId: 2,
        scheduledAt: new Date(),
        durationMinutes: 60,
      });

      expect(result).toEqual(mockInterview);
      expect(mocks.emailUtils.sendEmail).toHaveBeenCalledTimes(2); // one for student, one for recruiter
      expect(mocks.icsUtils.generateIcs).toHaveBeenCalled();
    });
  });

  describe("updateInterview", () => {
    it("should throw if not found or unauthorized", async () => {
      mocks.prisma.interviewSchedule.findUnique.mockResolvedValue(null);

      await expect(
        service.updateInterview(1, 999, { durationMinutes: 45 })
      ).rejects.toThrow("Interview not found or unauthorized.");
    });

    it("should update and send email if details changed", async () => {
      mocks.prisma.interviewSchedule.findUnique.mockResolvedValue({
        id: 1,
        recruiterId: 1,
        scheduledAt: new Date(),
        durationMinutes: 60,
        recruiter: { name: "Recruiter 1", email: "recruiter@example.com" },
        student: { name: "Student 1", email: "student@example.com" },
      });
      mocks.prisma.interviewSchedule.update.mockResolvedValue({ id: 1 });

      await service.updateInterview(1, 1, { durationMinutes: 45 });

      expect(mocks.prisma.interviewSchedule.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: { durationMinutes: 45 },
      });
      expect(mocks.emailUtils.sendEmail).toHaveBeenCalledTimes(1);
    });
  });

  describe("cancelInterview", () => {
    it("should cancel interview and notify student", async () => {
      mocks.prisma.interviewSchedule.findUnique.mockResolvedValue({
        id: 1,
        recruiterId: 1,
        recruiter: { name: "Recruiter 1", email: "recruiter@example.com" },
        student: { name: "Student 1", email: "student@example.com" },
      });
      mocks.prisma.interviewSchedule.update.mockResolvedValue({ id: 1, status: "CANCELLED" });

      await service.cancelInterview(1, 1);

      expect(mocks.prisma.interviewSchedule.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: { status: "CANCELLED" },
      });
      expect(mocks.emailUtils.sendEmail).toHaveBeenCalledTimes(1);
    });
  });
});
