import { FileText } from "lucide-react";
import type { FileType } from "@/types";

export function FileTypeBadge({ fileType }: { fileType: FileType }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
      <FileText className="h-3.5 w-3.5" aria-hidden />
      {fileType}
    </span>
  );
}
