/**
 * Jobs Filter Component (Client Component)
 * Handles filtering UI for job listings
 */

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface JobsFilterClientProps {
  initialFilters: {
    type?: string;
    isActive?: boolean;
    search?: string;
  };
}

export function JobsFilterClient({ initialFilters }: JobsFilterClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(initialFilters.search || "");

  const handleFilterChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`/recruiter/jobs?${params.toString()}`);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleFilterChange("search", search);
  };

  const clearFilters = () => {
    setSearch("");
    router.push("/recruiter/jobs");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Search */}
        <form onSubmit={handleSearchSubmit} className="md:col-span-2">
          <label htmlFor="search" className="block text-sm font-medium mb-1">
            Search
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, company, location..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Search
            </button>
          </div>
        </form>

        {/* Job Type Filter */}
        <div>
          <label htmlFor="type" className="block text-sm font-medium mb-1">
            Job Type
          </label>
          <select
            id="type"
            value={initialFilters.type || ""}
            onChange={(e) => handleFilterChange("type", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Types</option>
            <option value="FULL_TIME">Full Time</option>
            <option value="PART_TIME">Part Time</option>
            <option value="INTERNSHIP">Internship</option>
          </select>
        </div>

        {/* Status Filter */}
        <div>
          <label htmlFor="status" className="block text-sm font-medium mb-1">
            Status
          </label>
          <select
            id="status"
            value={
              initialFilters.isActive === undefined
                ? ""
                : initialFilters.isActive.toString()
            }
            onChange={(e) => handleFilterChange("isActive", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Status</option>
            <option value="true">Active</option>
            <option value="false">Closed</option>
          </select>
        </div>
      </div>

      {/* Clear Filters */}
      {(initialFilters.search ||
        initialFilters.type ||
        initialFilters.isActive !== undefined) && (
        <div className="mt-3 flex justify-end">
          <button
            onClick={clearFilters}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
