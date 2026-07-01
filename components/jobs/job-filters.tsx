"use client";

import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { JOB_TYPES } from "@/types/job";

interface JobFiltersBarProps {
  locations: string[];
}

export function JobFiltersBar({ locations }: JobFiltersBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const [search, setSearch] = useState(searchParams.get("search") ?? "");
  const location = searchParams.get("location") ?? "";
  const type = searchParams.get("type") ?? "";

  const updateParams = useCallback(
    (updates: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value) {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });

      params.delete("page");

      startTransition(() => {
        const query = params.toString();
        router.push(query ? `/?${query}` : "/");
      });
    },
    [router, searchParams]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      const current = searchParams.get("search") ?? "";
      if (search !== current) {
        updateParams({ search });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [search, searchParams, updateParams]);

  const hasFilters = search || location || type;

  const clearFilters = () => {
    setSearch("");
    startTransition(() => router.push("/"));
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search jobs, companies, or skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Select
          value={location || "all"}
          onValueChange={(value) =>
            updateParams({ location: value === "all" ? "" : value })
          }
        >
          <SelectTrigger className="sm:w-[220px]">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All locations</SelectItem>
            {locations.map((loc) => (
              <SelectItem key={loc} value={loc}>
                {loc}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={type || "all"}
          onValueChange={(value) =>
            updateParams({ type: value === "all" ? "" : value })
          }
        >
          <SelectTrigger className="sm:w-[180px]">
            <SelectValue placeholder="Job type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All types</SelectItem>
            {JOB_TYPES.map((jobType) => (
              <SelectItem key={jobType} value={jobType}>
                {jobType}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {hasFilters && (
          <Button variant="ghost" onClick={clearFilters} className="gap-1">
            <X className="h-4 w-4" />
            Clear
          </Button>
        )}
      </div>
    </div>
  );
}
