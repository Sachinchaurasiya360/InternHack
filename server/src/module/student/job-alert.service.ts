import { prisma } from "../../database/db.js";

export class JobAlertService {
  async createAlert(
    userId: number,
    data: {
      tags?: string[];
      location?: string;
      jobType?: string;
    }
  ) {
    return prisma.jobAlert.create({
      data: {
        userId,
        tags: data.tags || [],
        location: data.location,
        jobType: data.jobType,
      },
    });
  }

  async getAlerts(userId: number) {
    return prisma.jobAlert.findMany({
      where: { userId },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async updateAlert(
    id: string,
    userId: number,
    data: {
      tags?: string[];
      location?: string;
      jobType?: string;
      isActive?: boolean;
    }
  ) {
    return prisma.jobAlert.updateMany({
      where: {
        id,
        userId,
      },
      data,
    });
  }

  async deleteAlert(id: string, userId: number) {
    return prisma.jobAlert.deleteMany({
      where: {
        id,
        userId,
      },
    });
  }
}