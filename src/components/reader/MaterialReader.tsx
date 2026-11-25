import type { FileType } from "@/types";

type ReaderProps = { fileType: FileType; fileUrl: string; title: string };

export function MaterialReader({ fileType, fileUrl, title }: ReaderProps) {
  return (
    <section id="reader" aria-label="Material reader" className="scroll-mt-20 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-bold">Read Material</h2>
        <a href={fileUrl} target="_blank" rel="noreferrer" className="btn-secondary">
          Open {fileType} in new tab
        </a>
      </div>
      <div className="overflow-hidden rounded-2xl border border-line bg-white">
        <iframe title={`PDF preview: ${title}`} src={fileUrl} className="h-[70vh] min-h-[480px] w-full" />
      </div>
    </section>
  );
}
