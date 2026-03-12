import { prisma } from "../../database/db.js";

interface CreateDriveData {
  title: string;
  description: string;
  company: string;
  targetColleges: string[];
  eligibleBranches: string[];
  minCGPA?: number | undefined;
  eligibleGraduationYears: number[];
  registrationDeadline: Date;
  driveDate?: Date | undefined;
  jobIds: number[];
}

interface UpdateDriveData {
  title?: string | undefined;
  description?: string | undefined;
  company?: string | undefined;
  targetColleges?: string[] | undefined;
  eligibleBranches?: string[] | undefined;
  minCGPA?: number | null | undefined;
  eligibleGraduationYears?: number[] | undefined;
  registrationDeadline?: Date | undefined;
  driveDate?: Date | null | undefined;
  jobIds?: number[] | undefined;
}

export class CampusDriveService {
  // ==================== RECRUITER METHODS ====================

  async createDrive(recruiterId: number, data: CreateDriveData) {
    return prisma.campusDrive.create({
      data: {
        recruiterId,
        title: data.title,
        description: data.description,
        company: data.company,
        targetColleges: data.targetColleges,
        eligibleBranches: data.eligibleBranches,
        minCGPA: data.minCGPA ?? null,
        eligibleGraduationYears: data.eligibleGraduationYears,
        registrationDeadline: data.registrationDeadline,
        driveDate: data.driveDate ?? null,
        jobIds: data.jobIds,
      },
      include: {
        _count: { select: { registrations: true } },
      },
    });
  }

  async getRecruiterDrives(recruiterId: number, page: number, limit: number) {
    const skip = (page - 1) * limit;

    const [drives, total] = await Promise.all([
      prisma.campusDrive.findMany({
        where: { recruiterId },
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: {
          _count: { select: { registrations: true } },
        },
      }),
      prisma.campusDrive.count({ where: { recruiterId } }),
    ]);

    return {
      drives,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getDriveById(id: number, recruiterId?: number) {
    const drive = await prisma.campusDrive.findUnique({
      where: { id },
      include: {
        recruiter: { select: { id: true, name: true, company: true, designation: true } },
        _count: { select: { registrations: true } },
      },
    });

    if (!drive) throw new Error("Drive not found");

    if (recruiterId !== undefined && drive.recruiterId !== recruiterId) {
      throw new Error("Not authorized");
    }

    return drive;
  }

  async updateDrive(id: number, recruiterId: number, data: UpdateDriveData) {
    const drive = await prisma.campusDrive.findUnique({ where: { id } });
    if (!drive) throw new Error("Drive not found");
    if (drive.recruiterId !== recruiterId) throw new Error("Not authorized");

    return prisma.campusDrive.update({
      where: { id },
      data: {
        ...(data.title !== undefined && { title: data.title }),
        ...(data.description !== undefined && { description: data.description }),
        ...(data.company !== undefined && { company: data.company }),
        ...(data.targetColleges !== undefined && { targetColleges: data.targetColleges }),
        ...(data.eligibleBranches !== undefined && { eligibleBranches: data.eligibleBranches }),
        ...(data.minCGPA !== undefined && { minCGPA: data.minCGPA }),
        ...(data.eligibleGraduationYears !== undefined && { eligibleGraduationYears: data.eligibleGraduationYears }),
        ...(data.registrationDeadline !== undefined && { registrationDeadline: data.registrationDeadline }),
        ...(data.driveDate !== undefined && { driveDate: data.driveDate }),
        ...(data.jobIds !== undefined && { jobIds: data.jobIds }),
      },
      include: {
        _count: { select: { registrations: true } },
      },
    });
  }

  async deleteDrive(id: number, recruiterId: number) {
    const drive = await prisma.campusDrive.findUnique({ where: { id } });
    if (!drive) throw new Error("Drive not found");
    if (drive.recruiterId !== recruiterId) throw new Error("Not authorized");
    if (drive.status !== "DRAFT") throw new Error("Only DRAFT drives can be deleted");

    return prisma.campusDrive.delete({ where: { id } });
  }

  async updateDriveStatus(id: number, recruiterId: number, status: "DRAFT" | "OPEN" | "CLOSED" | "COMPLETED") {
    const drive = await prisma.campusDrive.findUnique({ where: { id } });
    if (!drive) throw new Error("Drive not found");
    if (drive.recruiterId !== recruiterId) throw new Error("Not authorized");

    return prisma.campusDrive.update({
      where: { id },
      data: { status },
    });
  }

  async getDriveRegistrations(driveId: number, recruiterId: number, page: number, limit: number) {
    const drive = await prisma.campusDrive.findUnique({ where: { id: driveId } });
    if (!drive) throw new Error("Drive not found");
    if (drive.recruiterId !== recruiterId) throw new Error("Not authorized");

    const skip = (page - 1) * limit;

    const [registrations, total] = await Promise.all([
      prisma.campusDriveRegistration.findMany({
        where: { driveId },
        skip,
        take: limit,
        orderBy: { registeredAt: "desc" },
        include: {
          student: {
            select: {
              id: true,
              name: true,
              email: true,
              college: true,
              graduationYear: true,
              skills: true,
              profilePic: true,
              resumes: true,
            },
          },
        },
      }),
      prisma.campusDriveRegistration.count({ where: { driveId } }),
    ]);

    return {
      registrations,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async updateRegistrationStatus(
    driveId: number,
    registrationId: number,
    recruiterId: number,
    status: "REGISTERED" | "SHORTLISTED" | "REJECTED",
  ) {
    const drive = await prisma.campusDrive.findUnique({ where: { id: driveId } });
    if (!drive) throw new Error("Drive not found");
    if (drive.recruiterId !== recruiterId) throw new Error("Not authorized");

    const registration = await prisma.campusDriveRegistration.findUnique({ where: { id: registrationId } });
    if (!registration || registration.driveId !== driveId) throw new Error("Registration not found");

    return prisma.campusDriveRegistration.update({
      where: { id: registrationId },
      data: { status },
      include: {
        student: {
          select: { id: true, name: true, email: true, college: true, graduationYear: true },
        },
      },
    });
  }

  // ==================== STUDENT METHODS ====================

  async getEligibleDrives(studentId: number, page: number, limit: number) {
    const student = await prisma.user.findUnique({
      where: { id: studentId },
      select: { college: true, graduationYear: true },
    });

    if (!student) throw new Error("Student not found");

    // Fetch all OPEN drives with valid deadline
    const now = new Date();
    const allDrives = await prisma.campusDrive.findMany({
      where: {
        status: "OPEN",
        registrationDeadline: { gt: now },
      },
      include: {
        recruiter: { select: { id: true, name: true, company: true } },
        _count: { select: { registrations: true } },
      },
      orderBy: { registrationDeadline: "asc" },
    });

    // Filter in JS for case-insensitive college matching
    const eligible = allDrives.filter((drive) => {
      // Check targetColleges: empty means open to all
      if (drive.targetColleges.length > 0) {
        if (!student.college) return false;
        const studentCollegeLower = student.college.toLowerCase();
        const collegeMatch = drive.targetColleges.some(
          (tc) => studentCollegeLower.includes(tc.toLowerCase()) || tc.toLowerCase().includes(studentCollegeLower),
        );
        if (!collegeMatch) return false;
      }

      // Check eligibleGraduationYears: empty means open to all
      if (drive.eligibleGraduationYears.length > 0) {
        if (!student.graduationYear) return false;
        if (!drive.eligibleGraduationYears.includes(student.graduationYear)) return false;
      }

      return true;
    });

    // Paginate the filtered results
    const total = eligible.length;
    const skip = (page - 1) * limit;
    const paginated = eligible.slice(skip, skip + limit);

    return {
      drives: paginated,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getDriveDetail(driveId: number) {
    const drive = await prisma.campusDrive.findUnique({
      where: { id: driveId },
      include: {
        recruiter: { select: { id: true, name: true, company: true, designation: true } },
        _count: { select: { registrations: true } },
      },
    });

    if (!drive) throw new Error("Drive not found");
    return drive;
  }

  async registerForDrive(driveId: number, studentId: number) {
    const drive = await prisma.campusDrive.findUnique({ where: { id: driveId } });
    if (!drive) throw new Error("Drive not found");
    if (drive.status !== "OPEN") throw new Error("Drive is not open for registration");
    if (new Date() > drive.registrationDeadline) throw new Error("Registration deadline has passed");

    // Check if already registered
    const existing = await prisma.campusDriveRegistration.findUnique({
      where: { driveId_studentId: { driveId, studentId } },
    });
    if (existing) throw new Error("Already registered for this drive");

    return prisma.campusDriveRegistration.create({
      data: { driveId, studentId },
      include: {
        drive: { select: { id: true, title: true, company: true } },
      },
    });
  }

  async getMyRegistrations(studentId: number) {
    return prisma.campusDriveRegistration.findMany({
      where: { studentId },
      orderBy: { registeredAt: "desc" },
      include: {
        drive: {
          select: {
            id: true,
            title: true,
            description: true,
            company: true,
            driveDate: true,
            status: true,
            registrationDeadline: true,
          },
        },
      },
    });
  }
}
