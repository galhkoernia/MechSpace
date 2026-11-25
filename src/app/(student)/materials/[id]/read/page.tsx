import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MaterialReader } from "@/components/materials/MaterialReader";
import { getMaterialById } from "@/data/mock/materials";
import { FileTypeBadge } from "@/components/ui/FileTypeBadge";

export default async function MaterialReadPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const material = getMaterialById(id);
  if (!material) notFound();

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <Link
        href={`/materials/${material.id}`}
        className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-600 hover:underline"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to Material
      </Link>
      <div>
        <h1 className="break-words text-2xl font-bold tracking-tight sm:text-3xl">{material.title}</h1>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <p className="text-sm font-semibold text-brand-600">{material.category}</p>
          <FileTypeBadge fileType={material.fileType} />
        </div>
      </div>
      <MaterialReader fileUrl={material.fileUrl} title={material.title} />
    </div>
  );
}
