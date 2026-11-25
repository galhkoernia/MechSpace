import Link from "next/link";
import type { Category } from "@/types";

export function CategoryCard({ category }: { category: Category }) {
  const Icon = category.icon;
  return (
    <Link
      href={`/materials?category=${category.slug}`}
      className="card flex flex-col items-center gap-3 p-5 text-center transition-transform hover:-translate-y-0.5"
    >
      <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${category.tint}`}>
        <Icon className="h-6 w-6" aria-hidden />
      </span>
      <span className="text-sm font-semibold">{category.name}</span>
    </Link>
  );
}
