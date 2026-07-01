import { JobListSkeleton } from "@/components/jobs/job-skeleton";

export default function Loading() {
  return (
    <>
      <div className="border-b bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="mx-auto h-8 w-48 animate-pulse rounded-full bg-muted" />
            <div className="mx-auto h-12 w-full max-w-lg animate-pulse rounded-lg bg-muted" />
            <div className="mx-auto h-6 w-full max-w-md animate-pulse rounded-lg bg-muted" />
          </div>
        </div>
      </div>
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
    </>
  );
}
