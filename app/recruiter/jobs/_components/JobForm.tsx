/**
 * Job Form Component
 * Reusable form for creating and editing jobs
 */

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CreateJobDto, JobResponse } from "@/types";
import { createJobAction, updateJobAction } from "@/packages/recruiter";

interface JobFormProps {
  mode: "create" | "edit";
  jobId?: string;
  initialData?: JobResponse;
}

export function JobForm({ mode, jobId, initialData }: JobFormProps) {
  const router = useRouter();

  const [formData, setFormData] = useState<CreateJobDto>({
    title: initialData?.title || "",
    description: initialData?.description || "",
    company: initialData?.company || "",
    location: initialData?.location || "",
    type: initialData?.type || "FULL_TIME",
    duration: initialData?.duration || "",
    salary: initialData?.salary || "",
    contactDetails: initialData?.contactDetails || "",
    applyLink: initialData?.applyLink || "",
    requirements: initialData?.requirements || "",
    responsibilities: initialData?.responsibilities || "",
    benefits: initialData?.benefits || "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      let result;

      if (mode === "create") {
        result = await createJobAction(formData);
      } else if (mode === "edit" && jobId) {
        result = await updateJobAction(jobId, formData);
      } else {
        throw new Error("Invalid form configuration");
      }

      if (!result.success) {
        setError(result.error);
        setIsSubmitting(false);
        return;
      }

      // Redirect on success
      if (mode === "create") {
        router.push(`/recruiter/jobs/${result.data.id}`);
      } else {
        router.push(`/recruiter/jobs/${jobId}`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white rounded-lg shadow-md p-6"
    >
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">{error}</div>
      )}

      {/* Basic Information */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Basic Information</h2>

        {/* Job Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Job Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., Senior Software Engineer"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Company *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Company name"
          />
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium mb-2">
            Location *
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., New York, NY or Remote"
          />
        </div>

        {/* Job Type and Duration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="type" className="block text-sm font-medium mb-2">
              Job Type *
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="FULL_TIME">Full Time</option>
              <option value="PART_TIME">Part Time</option>
              <option value="INTERNSHIP">Internship</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="duration"
              className="block text-sm font-medium mb-2"
            >
              Duration *
            </label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., 3 months, Permanent, 1 year contract"
            />
          </div>
        </div>

        {/* Salary */}
        <div>
          <label htmlFor="salary" className="block text-sm font-medium mb-2">
            Salary (Optional)
          </label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., $80,000 - $100,000/year"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-2">
          Job Description *
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Detailed job description..."
        />
      </div>

      {/* Requirements */}
      <div>
        <label
          htmlFor="requirements"
          className="block text-sm font-medium mb-2"
        >
          Requirements (Optional)
        </label>
        <textarea
          id="requirements"
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="List required qualifications and skills..."
        />
      </div>

      {/* Responsibilities */}
      <div>
        <label
          htmlFor="responsibilities"
          className="block text-sm font-medium mb-2"
        >
          Responsibilities (Optional)
        </label>
        <textarea
          id="responsibilities"
          name="responsibilities"
          value={formData.responsibilities}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="List key responsibilities..."
        />
      </div>

      {/* Benefits */}
      <div>
        <label htmlFor="benefits" className="block text-sm font-medium mb-2">
          Benefits (Optional)
        </label>
        <textarea
          id="benefits"
          name="benefits"
          value={formData.benefits}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="List benefits and perks..."
        />
      </div>

      {/* Contact Information */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Contact Information</h2>

        <div>
          <label
            htmlFor="contactDetails"
            className="block text-sm font-medium mb-2"
          >
            Contact Details (Optional)
          </label>
          <input
            type="text"
            id="contactDetails"
            name="contactDetails"
            value={formData.contactDetails}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Email or phone number"
          />
        </div>

        <div>
          <label htmlFor="applyLink" className="block text-sm font-medium mb-2">
            Application Link (Optional)
          </label>
          <input
            type="url"
            id="applyLink"
            name="applyLink"
            value={formData.applyLink}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="https://example.com/apply"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex gap-4 pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting
            ? mode === "create"
              ? "Creating..."
              : "Updating..."
            : mode === "create"
            ? "Create Job Posting"
            : "Update Job Posting"}
        </button>

        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
