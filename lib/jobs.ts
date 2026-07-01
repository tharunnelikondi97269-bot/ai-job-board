import jobsData from "@/data/jobs.json";
import type { Job, JobFilters } from "@/types/job";
import { JOBS_PER_PAGE } from "@/types/job";

const jobs = jobsData as Job[];

export function getAllJobs(): Job[] {
  return jobs;
}

export function getJobById(id: string): Job | undefined {
  return jobs.find((job) => job.id === id);
}

export function getUniqueLocations(): string[] {
  const locations = new Set(jobs.map((job) => job.location));
  return Array.from(locations).sort();
}

export function filterJobs(filters: JobFilters): Job[] {
  const search = filters.search.toLowerCase().trim();
  const location = filters.location;
  const type = filters.type;

  return jobs.filter((job) => {
    const matchesSearch =
      !search ||
      job.title.toLowerCase().includes(search) ||
      job.company.toLowerCase().includes(search) ||
      job.skills.some((skill) => skill.toLowerCase().includes(search));

    const matchesLocation = !location || job.location === location;
    const matchesType = !type || job.type === type;

    return matchesSearch && matchesLocation && matchesType;
  });
}

export function paginateJobs(jobsList: Job[], page: number): Job[] {
  const start = (page - 1) * JOBS_PER_PAGE;
  return jobsList.slice(start, start + JOBS_PER_PAGE);
}

export function getTotalPages(totalJobs: number): number {
  return Math.max(1, Math.ceil(totalJobs / JOBS_PER_PAGE));
}

export function getJobsByIds(ids: string[]): Job[] {
  const idSet = new Set(ids);
  return jobs.filter((job) => idSet.has(job.id));
}
