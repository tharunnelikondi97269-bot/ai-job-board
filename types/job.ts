export type JobType =
  | "Full-time"
  | "Part-time"
  | "Contract"
  | "Remote"
  | "Internship"
  | "Freelance";

export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  type: JobType;
  salaryMin: number;
  salaryMax: number;
  currency: string;
  postedDate: string;
  skills: string[];
  description: string;
  requirements: string[];
  benefits: string[];
  applyUrl: string;
}

export interface JobFilters {
  search: string;
  location: string;
  type: string;
  page: number;
}

export const JOB_TYPES: JobType[] = [
  "Full-time",
  "Part-time",
  "Contract",
  "Remote",
  "Internship",
  "Freelance",
];

export const JOBS_PER_PAGE = 9;
