"use client";

import dynamic from "next/dynamic";

export type MaterialReaderProps = {
  fileUrl: string;
  title: string;
};

const PdfReaderCanvas = dynamic(
  () => import("./PdfReaderCanvas").then((module) => module.PdfReaderCanvas),
  {
    ssr: false,
    loading: () => (
      <p role="status" className="rounded-2xl border border-line bg-white p-5 text-sm text-muted">
        Loading material...
      </p>
    ),
  },
);

export function MaterialReader({ fileUrl, title }: MaterialReaderProps) {
  return <PdfReaderCanvas fileUrl={fileUrl} title={title} />;
}
