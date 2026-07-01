"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "job-board-bookmarks";

export function useBookmarks() {
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setBookmarkedIds(JSON.parse(stored) as string[]);
      }
    } catch {
      setBookmarkedIds([]);
    }
    setIsLoaded(true);
  }, []);

  const persist = useCallback((ids: string[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    setBookmarkedIds(ids);
  }, []);

  const toggleBookmark = useCallback(
    (jobId: string) => {
      setBookmarkedIds((prev) => {
        const next = prev.includes(jobId)
          ? prev.filter((id) => id !== jobId)
          : [...prev, jobId];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        return next;
      });
    },
    []
  );

  const isBookmarked = useCallback(
    (jobId: string) => bookmarkedIds.includes(jobId),
    [bookmarkedIds]
  );

  const clearBookmarks = useCallback(() => {
    persist([]);
  }, [persist]);

  return {
    bookmarkedIds,
    isLoaded,
    toggleBookmark,
    isBookmarked,
    clearBookmarks,
  };
}
