import Link from "next/link";
import { FileTypeBadge } from "@/components/ui/FileTypeBadge";
import type { Material } from "@/types";

export function MaterialCard({ material }: { material: Material }) {
  return (
    <article className="card flex flex-col gap-3 p-5">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-medium text-muted">{material.category}</span>
        <FileTypeBadge fileType={material.fileType} />
      </div>
      <div className="flex-1">
        <h3 className="text-base font-bold">{material.title}</h3>
        <p className="mt-1 text-sm text-muted">{material.description}</p>
      </div>
      <Link href={`/materials/${material.id}`} className="btn-primary self-start">
        Read Material
        <span className="sr-only">: {material.title}</span>
      </Link>
    </article>
  );
}
