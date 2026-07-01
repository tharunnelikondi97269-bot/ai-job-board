"use client";

import Link from "next/link";

import { EmptyState } from "@/components/jobs/empty-state";
import { JobCard } from "@/components/jobs/job-card";
import { JobListSkeleton } from "@/components/jobs/job-skeleton";
import { useBookmarks } from "@/hooks/use-bookmarks";
import { getJobsByIds } from "@/lib/jobs";

export function BookmarksList() {
  const { bookmarkedIds, isLoaded } = useBookmarks();
  const jobs = getJobsByIds(bookmarkedIds);

  if (!isLoaded) {
    return <JobListSkeleton count={3} />;
  }

  if (jobs.length === 0) {
    return (
      <EmptyState
        title="No saved jobs yet"
        description="Bookmark jobs you're interested in and they'll appear here."
      />
    );
  }

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        {jobs.length} saved {jobs.length === 1 ? "job" : "jobs"}
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground">
        <Link href="/" className="text-primary hover:underline">
          Browse more jobs
        </Link>
      </p>
    </div>
  );
}
