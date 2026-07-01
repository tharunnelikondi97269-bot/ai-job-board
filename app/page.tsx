import { Hero } from "@/components/jobs/hero";
import { JobBoard } from "@/components/jobs/job-board";
import { getUniqueLocations } from "@/lib/jobs";
import type { JobFilters } from "@/types/job";

interface HomePageProps {
  searchParams: Promise<{
    search?: string;
    location?: string;
    type?: string;
    page?: string;
  }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const filters: JobFilters = {
    search: params.search ?? "",
    location: params.location ?? "",
    type: params.type ?? "",
    page: Math.max(1, parseInt(params.page ?? "1", 10) || 1),
  };

  const locations = getUniqueLocations();

  return (
    <>
      <Hero />
      <JobBoard filters={filters} locations={locations} />
    </>
  );
}
