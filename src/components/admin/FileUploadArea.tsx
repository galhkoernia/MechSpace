import { UploadCloud } from "lucide-react";

export function FileUploadArea() {
  return (
    <label className="flex cursor-not-allowed flex-col items-center gap-2 rounded-2xl border-2 border-dashed border-line bg-canvas px-6 py-10 text-center">
      <UploadCloud className="h-8 w-8 text-brand-500" aria-hidden />
      <span className="text-sm font-semibold">Upload File</span>
      <span className="text-xs text-muted">File upload will be available in the next phase.</span>
      <input type="file" disabled className="sr-only" />
    </label>
  );
}
