// /**
//  * Server Actions for Job Management
//  * All business logic for recruiter job operations
//  * Uses Server Actions pattern (Next.js 14+)
//  */

// "use server";

// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
// import {
//   CreateJobDto,
//   UpdateJobDto,
//   JobResponse,
//   JobListFilters,
//   JobApplicationResponse,
//   RecruiterStats,
// } from "../../types";

// /**
//  * Server action result type
//  */
// type ActionResult<T = unknown> =
//   | { success: true; data: T }
//   | { success: false; error: string };

// /**
//  * Create a new job posting
//  */
// export async function createJobAction(
//   data: CreateJobDto
// ): Promise<ActionResult<JobResponse>> {
//   try {
//     // Require recruiter authentication
//     const user = await requireRecruiter();

//     // Validate required fields
//     if (!data.title || data.title.trim().length < 5) {
//       return { success: false, error: "Title must be at least 5 characters" };
//     }

//     if (!data.description || data.description.trim().length < 20) {
//       return {
//         success: false,
//         error: "Description must be at least 20 characters",
//       };
//     }

//     if (!data.company || !data.location || !data.duration) {
//       return {
//         success: false,
//         error: "Company, location, and duration are required",
//       };
//     }

//     // Create job in database
//     const job = await db.internshipOrJob.create({
//       data: {
//         title: data.title.trim(),
//         description: data.description.trim(),
//         company: data.company.trim(),
//         location: data.location.trim(),
//         type: data.type,
//         salary: data.salary?.trim(),
//         duration: data.duration.trim(),
//         contactDetails: data.contactDetails?.trim(),
//         applyLink: data.applyLink?.trim(),
//         requirements: data.requirements?.trim(),
//         responsibilities: data.responsibilities?.trim(),
//         benefits: data.benefits?.trim(),
//         recruiterId: user.id,
//         isActive: true,
//       },
//       include: {
//         _count: {
//           select: { applications: true },
//         },
//       },
//     });

//     // Revalidate relevant pages
//     revalidatePath("/recruiter");
//     revalidatePath("/recruiter/jobs");

//     return {
//       success: true,
//       data: job as JobResponse,
//     };
//   } catch (error) {
//     console.error("Error creating job:", error);
//     return {
//       success: false,
//       error: "Failed to create job. Please try again.",
//     };
//   }
// }

// /**
//  * Get all jobs for the current recruiter
//  */
// export async function getRecruiterJobsAction(
//   filters?: JobListFilters
// ): Promise<ActionResult<JobResponse[]>> {
//   try {
//     const user = await requireRecruiter();

//     // Build where clause
//     const where: Record<string, unknown> = {
//       recruiterId: user.id,
//     };

//     if (filters?.type) {
//       where.type = filters.type;
//     }

//     if (filters?.isActive !== undefined) {
//       where.isActive = filters.isActive;
//     }

//     if (filters?.search) {
//       where.OR = [
//         { title: { contains: filters.search, mode: "insensitive" } },
//         { company: { contains: filters.search, mode: "insensitive" } },
//         { location: { contains: filters.search, mode: "insensitive" } },
//       ];
//     }

//     // Fetch jobs with application count
//     const jobs = await db.internshipOrJob.findMany({
//       where,
//       include: {
//         _count: {
//           select: { applications: true },
//         },
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//     });

//     return {
//       success: true,
//       data: jobs as JobResponse[],
//     };
//   } catch (error) {
//     console.error("Error fetching jobs:", error);
//     return {
//       success: false,
//       error: "Failed to fetch jobs",
//     };
//   }
// }

// /**
//  * Get a single job by ID
//  */
// export async function getJobByIdAction(
//   jobId: string
// ): Promise<ActionResult<JobResponse>> {
//   try {
//     await requireRecruiter();

//     // Check authorization
//     const hasAccess = await canAccessJob(jobId);
//     if (!hasAccess) {
//       return {
//         success: false,
//         error: "You do not have permission to view this job",
//       };
//     }

//     const job = await db.internshipOrJob.findUnique({
//       where: { id: jobId },
//       include: {
//         _count: {
//           select: { applications: true },
//         },
//       },
//     });

//     if (!job) {
//       return {
//         success: false,
//         error: "Job not found",
//       };
//     }

//     return {
//       success: true,
//       data: job as JobResponse,
//     };
//   } catch (error) {
//     console.error("Error fetching job:", error);
//     return {
//       success: false,
//       error: "Failed to fetch job details",
//     };
//   }
// }

// /**
//  * Update a job posting
//  */
// export async function updateJobAction(
//   jobId: string,
//   data: UpdateJobDto
// ): Promise<ActionResult<JobResponse>> {
//   try {
//     await requireRecruiter();

//     // Check authorization
//     const hasAccess = await canAccessJob(jobId);
//     if (!hasAccess) {
//       return {
//         success: false,
//         error: "You do not have permission to update this job",
//       };
//     }

//     // Validate if title or description is being updated
//     if (data.title && data.title.trim().length < 5) {
//       return { success: false, error: "Title must be at least 5 characters" };
//     }

//     if (data.description && data.description.trim().length < 20) {
//       return {
//         success: false,
//         error: "Description must be at least 20 characters",
//       };
//     }

//     // Update job
//     const job = await db.internshipOrJob.update({
//       where: { id: jobId },
//       data: {
//         ...(data.title && { title: data.title.trim() }),
//         ...(data.description && { description: data.description.trim() }),
//         ...(data.company && { company: data.company.trim() }),
//         ...(data.location && { location: data.location.trim() }),
//         ...(data.type && { type: data.type }),
//         ...(data.salary !== undefined && { salary: data.salary?.trim() }),
//         ...(data.duration && { duration: data.duration.trim() }),
//         ...(data.contactDetails !== undefined && {
//           contactDetails: data.contactDetails?.trim(),
//         }),
//         ...(data.applyLink !== undefined && {
//           applyLink: data.applyLink?.trim(),
//         }),
//         ...(data.requirements !== undefined && {
//           requirements: data.requirements?.trim(),
//         }),
//         ...(data.responsibilities !== undefined && {
//           responsibilities: data.responsibilities?.trim(),
//         }),
//         ...(data.benefits !== undefined && { benefits: data.benefits?.trim() }),
//         ...(data.isActive !== undefined && { isActive: data.isActive }),
//       },
//       include: {
//         _count: {
//           select: { applications: true },
//         },
//       },
//     });

//     // Revalidate pages
//     revalidatePath("/recruiter/jobs");
//     revalidatePath(`/recruiter/jobs/${jobId}`);

//     return {
//       success: true,
//       data: job as JobResponse,
//     };
//   } catch (error) {
//     console.error("Error updating job:", error);
//     return {
//       success: false,
//       error: "Failed to update job",
//     };
//   }
// }

// /**
//  * Toggle job active status
//  */
// export async function toggleJobStatusAction(
//   jobId: string
// ): Promise<ActionResult<JobResponse>> {
//   try {
//     await requireRecruiter();

//     // Check authorization
//     const hasAccess = await canAccessJob(jobId);
//     if (!hasAccess) {
//       return {
//         success: false,
//         error: "You do not have permission to modify this job",
//       };
//     }

//     // Get current status
//     const currentJob = await db.internshipOrJob.findUnique({
//       where: { id: jobId },
//       select: { isActive: true },
//     });

//     if (!currentJob) {
//       return { success: false, error: "Job not found" };
//     }

//     // Toggle status
//     const job = await db.internshipOrJob.update({
//       where: { id: jobId },
//       data: { isActive: !currentJob.isActive },
//       include: {
//         _count: {
//           select: { applications: true },
//         },
//       },
//     });

//     revalidatePath("/recruiter/jobs");
//     revalidatePath(`/recruiter/jobs/${jobId}`);

//     return {
//       success: true,
//       data: job as JobResponse,
//     };
//   } catch (error) {
//     console.error("Error toggling job status:", error);
//     return {
//       success: false,
//       error: "Failed to update job status",
//     };
//   }
// }

// /**
//  * Delete a job posting
//  */
// export async function deleteJobAction(
//   jobId: string
// ): Promise<ActionResult<void>> {
//   try {
//     await requireRecruiter();

//     // Check authorization
//     const hasAccess = await canAccessJob(jobId);
//     if (!hasAccess) {
//       return {
//         success: false,
//         error: "You do not have permission to delete this job",
//       };
//     }

//     // Delete job (cascade will delete applications)
//     await db.internshipOrJob.delete({
//       where: { id: jobId },
//     });

//     revalidatePath("/recruiter/jobs");

//     return { success: true, data: undefined };
//   } catch (error) {
//     console.error("Error deleting job:", error);
//     return {
//       success: false,
//       error: "Failed to delete job",
//     };
//   }
// }

// /**
//  * Get applications for a specific job
//  */
// export async function getJobApplicationsAction(
//   jobId: string
// ): Promise<ActionResult<JobApplicationResponse[]>> {
//   try {
//     await requireRecruiter();

//     // Check authorization
//     const hasAccess = await canAccessJob(jobId);
//     if (!hasAccess) {
//       return {
//         success: false,
//         error: "You do not have permission to view these applications",
//       };
//     }

//     const applications = await db.jobApplication.findMany({
//       where: { jobId },
//       include: {
//         applicant: {
//           select: {
//             id: true,
//             name: true,
//             email: true,
//             resumeUrl: true,
//             skills: true,
//             collegeName: true,
//             graduationYear: true,
//           },
//         },
//         job: {
//           select: {
//             id: true,
//             title: true,
//             company: true,
//           },
//         },
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//     });

//     return {
//       success: true,
//       data: applications as JobApplicationResponse[],
//     };
//   } catch (error) {
//     console.error("Error fetching applications:", error);
//     return {
//       success: false,
//       error: "Failed to fetch applications",
//     };
//   }
// }

// /**
//  * Update application status
//  */
// export async function updateApplicationStatusAction(
//   applicationId: string,
//   status: string
// ): Promise<ActionResult<void>> {
//   try {
//     await requireRecruiter();

//     // Get application to check job ownership
//     const application = await db.jobApplication.findUnique({
//       where: { id: applicationId },
//       select: { jobId: true },
//     });

//     if (!application) {
//       return { success: false, error: "Application not found" };
//     }

//     // Check authorization
//     const hasAccess = await canAccessJob(application.jobId);
//     if (!hasAccess) {
//       return {
//         success: false,
//         error: "You do not have permission to update this application",
//       };
//     }

//     // Update status
//     await db.jobApplication.update({
//       where: { id: applicationId },
//       data: {
//         status: status as
//           | "PENDING"
//           | "REVIEWING"
//           | "SHORTLISTED"
//           | "INTERVIEWED"
//           | "OFFERED"
//           | "REJECTED"
//           | "ACCEPTED"
//           | "WITHDRAWN",
//       },
//     });

//     revalidatePath(`/recruiter/jobs/${application.jobId}/applications`);

//     return { success: true, data: undefined };
//   } catch (error) {
//     console.error("Error updating application status:", error);
//     return {
//       success: false,
//       error: "Failed to update application status",
//     };
//   }
// }

// /**
//  * Get recruiter dashboard statistics
//  */
// export async function getRecruiterStatsAction(): Promise<
//   ActionResult<RecruiterStats>
// > {
//   try {
//     const user = await requireRecruiter();

//     // Get job counts
//     const [totalJobs, activeJobs, applications] = await Promise.all([
//       db.internshipOrJob.count({
//         where: { recruiterId: user.id },
//       }),
//       db.internshipOrJob.count({
//         where: {
//           recruiterId: user.id,
//           isActive: true,
//         },
//       }),
//       db.jobApplication.findMany({
//         where: {
//           job: { recruiterId: user.id },
//         },
//         select: { status: true },
//       }),
//     ]);

//     const stats: RecruiterStats = {
//       totalJobs,
//       activeJobs,
//       totalApplications: applications.length,
//       pendingApplications: applications.filter(
//         (a: { status: string }) => a.status === "PENDING"
//       ).length,
//       shortlistedApplications: applications.filter(
//         (a: { status: string }) => a.status === "SHORTLISTED"
//       ).length,
//     };

//     return { success: true, data: stats };
//   } catch (error) {
//     console.error("Error fetching stats:", error);
//     return {
//       success: false,
//       error: "Failed to fetch statistics",
//     };
//   }
// }
