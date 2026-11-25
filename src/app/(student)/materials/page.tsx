import { PageHeader } from "@/components/layout/PageHeader";
import { MaterialsBrowser } from "@/components/materials/MaterialsBrowser";
import { categories } from "@/data/mock/categories";
import { materials } from "@/data/mock/materials";

export default async function MaterialsPage({ searchParams }: { searchParams: Promise<{ category?: string; q?: string }> }) {
  const { category: slug, q } = await searchParams;
  const initialCategory = categories.find((category) => category.slug === slug)?.name;

  return (
    <div className="space-y-8">
      <PageHeader title="Materials" description="Explore learning materials for Mechanical Engineering." />
      <MaterialsBrowser
        key={initialCategory ?? "all"}
        materials={materials}
        categoryNames={categories.map((category) => category.name)}
        initialCategory={initialCategory}
        initialQuery={q}
      />
    </div>
  );
}
