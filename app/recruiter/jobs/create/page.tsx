/**
 * Create Job Page
 * Route: /recruiter/jobs/create
 */

import { redirect } from "next/navigation";
import { requireRecruiter } from "@/packages/auth";
import { JobForm } from "../_components/JobForm";

export default async function CreateJobPage() {
  try {
    await requireRecruiter();
  } catch (error) {
    redirect("/login");
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Create New Job Posting</h1>
      <JobForm mode="create" />
    </div>
  );
}
