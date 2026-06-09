import { prisma } from "../../database/db.js";

export class TeammateService {
  async createProfile(userId: number, data: any) {
    return prisma.teammateProfile.upsert({
      where: {
        userId,
      },
      update: data,
      create: {
        userId,
        ...data,
      },
    });
  }

  async getProfiles() {
    return prisma.teammateProfile.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            profilePic: true,
            college: true,
          },
        },
      },
    });
  }

  async sendInvitation(
    senderId: number,
    hackathonId: number,
    receiverId: number,
  ) {
    return prisma.hackathonTeamInvitation.create({
      data: {
        senderId,
        receiverId,
        hackathonId,
      },
    });
  }

  async acceptInvitation(id: number) {
    return prisma.hackathonTeamInvitation.update({
      where: { id },
      data: {
        status: "ACCEPTED",
      },
    });
  }

  async rejectInvitation(id: number) {
    return prisma.hackathonTeamInvitation.update({
      where: { id },
      data: {
        status: "REJECTED",
      },
    });
  }
}