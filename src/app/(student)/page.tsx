import Link from "next/link";
import { CategoryCard } from "@/components/dashboard/CategoryCard";
import { ContinueLearning } from "@/components/dashboard/ContinueLearning";
import { Header } from "@/components/layout/Header";
import { MaterialGrid } from "@/components/materials/MaterialGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/data/mock/categories";
import { materials } from "@/data/mock/materials";
import { currentLearning, studentName } from "@/data/mock/student";

const LATEST_COUNT = 2;

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <Header title={`Good Morning, ${studentName} 👋`} subtitle="Let's continue your learning today." />
      <ContinueLearning title={currentLearning.title} href={`/materials/${currentLearning.materialId}`} />
      <section aria-labelledby="categories-heading">
        <SectionHeading title="Categories" />
        <h2 id="categories-heading" className="sr-only">Categories</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => <CategoryCard key={category.slug} category={category} />)}
        </div>
      </section>
      <section>
        <SectionHeading title="Latest Materials" action={<Link href="/materials" className="text-sm font-semibold text-brand-600 hover:underline">View all</Link>} />
        <MaterialGrid materials={materials.slice(0, LATEST_COUNT)} />
      </section>
    </div>
  );
}
