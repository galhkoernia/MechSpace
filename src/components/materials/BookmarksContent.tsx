"use client";

import Link from "next/link";
import { Bookmark } from "lucide-react";
import { useBookmarks } from "./useBookmarks";
import { MaterialGrid } from "./MaterialGrid";
import { EmptyState } from "@/components/ui/EmptyState";
import { materials } from "@/data/mock/materials";

export function BookmarksContent() {
  const { ids, ready } = useBookmarks();
  if (!ready) return null;

  const bookmarked = materials.filter((material) => ids.includes(material.id));

  if (bookmarked.length === 0) {
    return (
      <EmptyState
        icon={Bookmark}
        title="No bookmarks yet."
        description="Save materials you want to read later."
        action={<Link href="/materials" className="btn-primary">Explore Materials</Link>}
      />
    );
  }

  return <MaterialGrid materials={bookmarked} />;
}
