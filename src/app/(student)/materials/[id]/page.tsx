import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen } from "lucide-react";
import { MaterialReader } from "@/components/reader/MaterialReader";
import { FileTypeBadge } from "@/components/ui/FileTypeBadge";
import { BookmarkButton } from "@/components/materials/BookmarkButton";
import { getMaterialById } from "@/data/mock/materials";

export default async function MaterialDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const material = getMaterialById(id);
  if (!material) notFound();

  return (
    <div className="space-y-8">
      <Link href="/materials" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:underline">
        <ArrowLeft className="h-4 w-4" aria-hidden /> Back to Materials
      </Link>
      <section className="card space-y-6 p-6 sm:p-8">
        <div>
          <p className="text-sm font-semibold text-brand-600">{material.category}</p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{material.title}</h1>
        </div>
        <dl className="grid gap-5 sm:grid-cols-2">
          <div><dt className="text-sm text-muted">File type</dt><dd className="mt-1"><FileTypeBadge fileType={material.fileType} /></dd></div>
          <div className="sm:col-span-2"><dt className="text-sm text-muted">Description</dt><dd className="mt-1 leading-relaxed">{material.description}</dd></div>
        </dl>
        <div className="flex flex-wrap gap-3">
          <Link href="#reader" className="btn-primary"><BookOpen className="h-4 w-4" aria-hidden /> Read Material</Link>
          <BookmarkButton materialId={material.id} />
        </div>
      </section>
      <MaterialReader fileType={material.fileType} fileUrl={material.fileUrl} title={material.title} />
    </div>
  );
}
