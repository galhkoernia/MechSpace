"use client";

import { useMemo, useState } from "react";
import { SearchX } from "lucide-react";
import { EmptyState } from "@/components/ui/EmptyState";
import { SearchBar } from "@/components/ui/SearchBar";
import type { Material } from "@/types";
import { CategoryFilter } from "./CategoryFilter";
import { MaterialGrid } from "./MaterialGrid";

const ALL = "All";

type MaterialsBrowserProps = { materials: Material[]; categoryNames: string[]; initialCategory?: string; initialQuery?: string };

/** UI-only filtering of mock data; real querying moves to the backend later. */
export function MaterialsBrowser({ materials, categoryNames, initialCategory = ALL, initialQuery = "" }: MaterialsBrowserProps) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);

  const visible = useMemo(() => {
    const term = query.trim().toLowerCase();
    return materials.filter(
      (m) => (category === ALL || m.category === category)
        && (!term || `${m.title} ${m.description} ${m.category}`.toLowerCase().includes(term)),
    );
  }, [materials, query, category]);

  return (
    <div className="space-y-6">
      <SearchBar placeholder="Search materials..." value={query} onChange={setQuery} className="max-w-md" />
      <CategoryFilter options={[ALL, ...categoryNames]} selected={category} onSelect={setCategory} />
      {visible.length > 0 ? (
        <MaterialGrid materials={visible} />
      ) : (
        <EmptyState icon={SearchX} title="No materials found" description="Try a different keyword or choose another category." />
      )}
    </div>
  );
}
