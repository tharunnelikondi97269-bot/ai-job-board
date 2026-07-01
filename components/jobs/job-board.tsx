"use client";

import { Suspense } from "react";

import { EmptyState } from "@/components/jobs/empty-state";
import { JobCard } from "@/components/jobs/job-card";
import { JobFiltersBar } from "@/components/jobs/job-filters";
import { JobListSkeleton } from "@/components/jobs/job-skeleton";
import { Pagination } from "@/components/jobs/pagination";
import {
  filterJobs,
  getTotalPages,
  paginateJobs,
} from "@/lib/jobs";
import type { JobFilters } from "@/types/job";

interface JobBoardProps {
  filters: JobFilters;
  locations: string[];
}

function JobResults({ filters, locations }: JobBoardProps) {
  const filtered = filterJobs(filters);
  const totalPages = getTotalPages(filtered.length);
  const page = Math.min(Math.max(1, filters.page), totalPages);
  const paginated = paginateJobs(filtered, page);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <JobFiltersBar locations={locations} />

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "job" : "jobs"} found
        </p>
      </div>

      {paginated.length === 0 ? (
        <div className="mt-8">
          <EmptyState />
        </div>
      ) : (
        <>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {paginated.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          <Pagination currentPage={page} totalPages={totalPages} />
        </>
      )}
    </section>
  );
}

export function JobBoard(props: JobBoardProps) {
  return (
    <Suspense fallback={<JobBoardSkeleton />}>
      <JobResults {...props} />
    </Suspense>
  );
}

function JobBoardSkeleton() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-4">
        <div className="h-9 w-full animate-pulse rounded-md bg-muted" />
        <div className="flex gap-3">
          <div className="h-9 w-52 animate-pulse rounded-md bg-muted" />
          <div className="h-9 w-44 animate-pulse rounded-md bg-muted" />
        </div>
      </div>
      <div className="mt-8">
        <JobListSkeleton />
      </div>
    </section>
  );
}
