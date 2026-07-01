import type { Metadata } from "next";

import { BookmarksList } from "@/components/jobs/bookmarks-list";

export const metadata: Metadata = {
  title: "Saved Jobs",
  description: "View your bookmarked job listings.",
};

export default function BookmarksPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Saved Jobs</h1>
        <p className="mt-2 text-muted-foreground">
          Jobs you&apos;ve bookmarked for later review.
        </p>
      </div>
      <BookmarksList />
    </div>
  );
}
