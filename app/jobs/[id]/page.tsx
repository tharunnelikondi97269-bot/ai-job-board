import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JobDetail } from "@/components/jobs/job-detail";
import { getAllJobs, getJobById } from "@/lib/jobs";

interface JobPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getAllJobs().map((job) => ({ id: job.id }));
}

export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const { id } = await params;
  const job = getJobById(id);

  if (!job) {
    return { title: "Job Not Found" };
  }

  return {
    title: `${job.title} at ${job.company}`,
    description: job.description,
  };
}

export default async function JobPage({ params }: JobPageProps) {
  const { id } = await params;
  const job = getJobById(id);

  if (!job) {
    notFound();
  }

  return <JobDetail job={job} />;
}
