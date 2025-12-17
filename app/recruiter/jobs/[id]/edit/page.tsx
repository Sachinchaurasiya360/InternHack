/**
 * Edit Job Page
 * Route: /recruiter/jobs/[id]/edit
 */

import { redirect } from "next/navigation";
import { requireRecruiter } from "@/packages/auth";
import { getJobByIdAction } from "@/packages/recruiter";
import { JobForm } from "../../_components/JobForm";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditJobPage({ params }: PageProps) {
  try {
    await requireRecruiter();
  } catch (error) {
    redirect("/login");
  }

  const { id } = await params;

  // Fetch job details
  const jobResult = await getJobByIdAction(id);

  if (!jobResult.success) {
    redirect("/recruiter/jobs");
  }

  const job = jobResult.data;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link
        href={`/recruiter/jobs/${id}`}
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        ← Back to Job Details
      </Link>

      <h1 className="text-3xl font-bold mb-8">Edit Job Posting</h1>
      <JobForm mode="edit" jobId={id} initialData={job} />
    </div>
  );
}
