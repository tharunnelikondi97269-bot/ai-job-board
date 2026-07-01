"use client";

import {
  ArrowLeft,
  Bookmark,
  Briefcase,
  Calendar,
  DollarSign,
  ExternalLink,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useBookmarks } from "@/hooks/use-bookmarks";
import { cn, formatPostedDate, formatSalary } from "@/lib/utils";
import type { Job } from "@/types/job";

interface JobDetailProps {
  job: Job;
}

export function JobDetail({ job }: JobDetailProps) {
  const { isBookmarked, toggleBookmark, isLoaded } = useBookmarks();
  const bookmarked = isLoaded && isBookmarked(job.id);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Button variant="ghost" size="sm" asChild className="mb-6 -ml-2">
        <Link href="/">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to jobs
        </Link>
      </Button>

      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border bg-muted">
            <Image
              src={job.companyLogo}
              alt={`${job.company} logo`}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {job.title}
            </h1>
            <p className="mt-1 text-lg text-muted-foreground">{job.company}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge variant="secondary" className="gap-1">
                <Briefcase className="h-3 w-3" />
                {job.type}
              </Badge>
              <Badge variant="outline" className="gap-1">
                <MapPin className="h-3 w-3" />
                {job.location}
              </Badge>
              <Badge variant="outline" className="gap-1">
                <DollarSign className="h-3 w-3" />
                {formatSalary(job.salaryMin, job.salaryMax, job.currency)}
              </Badge>
              <Badge variant="outline" className="gap-1">
                <Calendar className="h-3 w-3" />
                {formatPostedDate(job.postedDate)}
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 gap-2">
          <Button
            variant="outline"
            size="icon"
            aria-label={bookmarked ? "Remove bookmark" : "Bookmark job"}
            onClick={() => toggleBookmark(job.id)}
          >
            <Bookmark
              className={cn(
                "h-4 w-4",
                bookmarked && "fill-primary text-primary"
              )}
            />
          </Button>
          <Button asChild>
            <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">
              Apply Now
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <section>
            <h2 className="text-lg font-semibold">About the role</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {job.description}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Requirements</h2>
            <ul className="mt-3 list-inside list-disc space-y-2 text-muted-foreground">
              {job.requirements.map((req) => (
                <li key={req}>{req}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {job.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
