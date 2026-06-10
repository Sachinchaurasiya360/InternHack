import { prisma } from "../../database/db.ts";

export class TeammateService {
  async createProfile(userId: number, data: any) {
    return prisma.teammateProfile.upsert({
      where: { userId },
      update: data,
      create: { userId, ...data },
    });
  }

  async getProfileByUserId(userId: number) {
    return prisma.teammateProfile.findUnique({
      where: { userId },
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

  async getProfiles(filters?: {
    skills?: string[];
    techStack?: string[];
    preferredRole?: string;
    experienceLevel?: string;
    availability?: string;
  }) {
    return prisma.teammateProfile.findMany({
      where: {
        ...(filters?.preferredRole && {
          preferredRole: filters.preferredRole,
        }),
        ...(filters?.experienceLevel && {
          experienceLevel: filters.experienceLevel,
        }),
        ...(filters?.availability && {
          availability: filters.availability,
        }),
        ...(filters?.skills?.length && {
          skills: { hasSome: filters.skills },
        }),
        ...(filters?.techStack?.length && {
          techStack: { hasSome: filters.techStack },
        }),
      },
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
      orderBy: { createdAt: "desc" },
    });
  }

  async sendInvitation(senderId: number, hackathonId: number, receiverId: number) {
    return prisma.hackathonTeamInvitation.create({
      data: { senderId, receiverId, hackathonId },
    });
  }

  async getMyInvitations(userId: number) {
    return prisma.hackathonTeamInvitation.findMany({
      where: { receiverId: userId },
      include: {
        sender: {
          select: { id: true, name: true, profilePic: true },
        },
        hackathon: {
          select: { id: true, name: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async getSentInvitations(userId: number) {
    return prisma.hackathonTeamInvitation.findMany({
      where: { senderId: userId },
      include: {
        receiver: {
          select: { id: true, name: true, profilePic: true },
        },
        hackathon: {
          select: { id: true, name: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async acceptInvitation(id: number) {
    return prisma.hackathonTeamInvitation.update({
      where: { id },
      data: { status: "ACCEPTED" },
    });
  }

  async rejectInvitation(id: number) {
    return prisma.hackathonTeamInvitation.update({
      where: { id },
      data: { status: "REJECTED" },
    });
  }
}