import { Pencil, Trash2 } from "lucide-react";
import { FileTypeBadge } from "@/components/ui/FileTypeBadge";
import type { Material } from "@/types";

type MaterialTableProps = { materials: Material[]; showActions?: boolean };

const iconButton = "rounded-lg p-2 text-muted hover:bg-brand-50 disabled:cursor-not-allowed disabled:opacity-50";

export function MaterialTable({ materials, showActions = false }: MaterialTableProps) {
  return (
    <div className="card overflow-x-auto">
      <table className="w-full min-w-[34rem] text-left text-sm">
        <caption className="sr-only">Material list</caption>
        <thead className="border-b border-line text-muted">
          <tr>
            <th scope="col" className="px-5 py-3 font-medium">Title</th>
            <th scope="col" className="px-5 py-3 font-medium">Category</th>
            <th scope="col" className="px-5 py-3 font-medium">Type</th>
            <th scope="col" className="px-5 py-3 font-medium">Updated</th>
            {showActions && <th scope="col" className="px-5 py-3 text-right font-medium">Actions</th>}
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {materials.map((material) => (
            <tr key={material.id}>
              <th scope="row" className="px-5 py-3.5 font-semibold">{material.title}</th>
              <td className="px-5 py-3.5 text-muted">{material.category}</td>
              <td className="px-5 py-3.5"><FileTypeBadge fileType={material.fileType} /></td>
              <td className="px-5 py-3.5 text-muted">{material.updatedAt}</td>
              {showActions && (
                <td className="px-5 py-3.5 text-right">
                  <button type="button" disabled aria-label={`Edit ${material.title}`} className={iconButton}><Pencil className="h-4 w-4" aria-hidden /></button>
                  <button type="button" disabled aria-label={`Delete ${material.title}`} className={iconButton}><Trash2 className="h-4 w-4" aria-hidden /></button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
