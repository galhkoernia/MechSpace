"use client";

import { Bookmark } from "lucide-react";
import { useBookmarks } from "./useBookmarks";

export function BookmarkButton({ materialId }: { materialId: string }) {
  const { ids, toggle } = useBookmarks();
  const isBookmarked = ids.includes(materialId);

  return (
    <button
      type="button"
      aria-pressed={isBookmarked}
      onClick={() => toggle(materialId)}
      className="btn-secondary"
    >
      <Bookmark className="h-4 w-4" aria-hidden />
      {isBookmarked ? "Bookmarked" : "Bookmark"}
    </button>
  );
}
