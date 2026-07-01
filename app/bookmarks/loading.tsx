import { JobListSkeleton } from "@/components/jobs/job-skeleton";

export default function BookmarksLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 space-y-2">
        <div className="h-9 w-48 animate-pulse rounded-lg bg-muted" />
        <div className="h-5 w-72 animate-pulse rounded-lg bg-muted" />
      </div>
      <JobListSkeleton count={3} />
    </div>
  );
}
