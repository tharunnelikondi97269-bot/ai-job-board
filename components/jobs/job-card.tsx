"use client";

import { Bookmark, Calendar, DollarSign, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useBookmarks } from "@/hooks/use-bookmarks";
import { cn, formatPostedDate, formatSalary } from "@/lib/utils";
import type { Job } from "@/types/job";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  const { isBookmarked, toggleBookmark, isLoaded } = useBookmarks();
  const bookmarked = isLoaded && isBookmarked(job.id);

  return (
    <Card className="group flex h-full flex-col transition-shadow hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border bg-muted">
            <Image
              src={job.companyLogo}
              alt={`${job.company} logo`}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div className="min-w-0 flex-1">
            <Link href={`/jobs/${job.id}`}>
              <h3 className="truncate font-semibold leading-tight transition-colors group-hover:text-primary">
                {job.title}
              </h3>
            </Link>
            <p className="mt-0.5 truncate text-sm text-muted-foreground">
              {job.company}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-3 pb-3">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            {job.location}
          </span>
          <span className="inline-flex items-center gap-1">
            <DollarSign className="h-3.5 w-3.5 shrink-0" />
            {formatSalary(job.salaryMin, job.salaryMax, job.currency)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5 shrink-0" />
            {formatPostedDate(job.postedDate)}
          </span>
        </div>

        <Badge variant="secondary" className="w-fit">
          {job.type}
        </Badge>

        <div className="flex flex-wrap gap-1.5">
          {job.skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="muted" className="font-normal">
              {skill}
            </Badge>
          ))}
          {job.skills.length > 3 && (
            <Badge variant="muted" className="font-normal">
              +{job.skills.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="gap-2 pt-0">
        <Button asChild className="flex-1">
          <Link href={`/jobs/${job.id}`}>View Details</Link>
        </Button>
        <Button
          variant="outline"
          size="icon"
          aria-label={bookmarked ? "Remove bookmark" : "Bookmark job"}
          onClick={() => toggleBookmark(job.id)}
        >
          <Bookmark
            className={cn("h-4 w-4", bookmarked && "fill-primary text-primary")}
          />
        </Button>
      </CardFooter>
    </Card>
  );
}
