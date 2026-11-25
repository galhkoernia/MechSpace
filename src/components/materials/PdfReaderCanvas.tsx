"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

type PdfReaderCanvasProps = {
  fileUrl: string;
  title: string;
};

export function PdfReaderCanvas({ fileUrl, title }: PdfReaderCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const measure = () => setContainerWidth(Math.floor(container.getBoundingClientRect().width));
    measure();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }

    const observer = new ResizeObserver(measure);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setPageNumber(1);
    setTotalPages(null);
    setStatus("loading");
  }, [fileUrl]);

  const handleLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    if (numPages < 1) {
      setStatus("error");
      return;
    }

    setTotalPages(numPages);
    setPageNumber((currentPage) => Math.min(currentPage, numPages));
    setStatus("ready");
  }, []);

  const retry = () => {
    setPageNumber(1);
    setTotalPages(null);
    setStatus("loading");
    setAttempt((currentAttempt) => currentAttempt + 1);
  };

  const pageWidth = Math.min(containerWidth, 960);

  return (
    <section aria-label={`PDF reader for ${title}`} className="min-w-0 space-y-5">
      {status === "loading" && (
        <p role="status" className="text-sm text-muted">Loading material...</p>
      )}
      <div className="min-w-0 overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-card sm:p-5">
        <div ref={containerRef} className="mx-auto w-full min-w-0">
          {status === "error" ? (
            <div role="alert" className="rounded-2xl px-3 py-8 text-center sm:px-5">
              <p className="font-semibold">Unable to load this material.</p>
              <p className="mt-1 text-sm text-muted">Please try again.</p>
              <button type="button" onClick={retry} className="btn-primary mt-5 min-h-11">
                Try Again
              </button>
            </div>
          ) : (
            <div role="group" aria-label={`PDF document: ${title}`} className="flex min-w-0 justify-center">
              <Document
                key={`${fileUrl}-${attempt}`}
                file={fileUrl}
                onLoadSuccess={handleLoadSuccess}
                onLoadError={() => setStatus("error")}
                onSourceError={() => setStatus("error")}
                loading={null}
                error={null}
                className="max-w-full"
                suspense={false}
              >
                {totalPages !== null && pageWidth > 0 && (
                  <Page
                    pageNumber={pageNumber}
                    width={pageWidth}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    onRenderError={() => setStatus("error")}
                    loading={null}
                    error={null}
                    suspense={false}
                    className="max-w-full overflow-hidden rounded-lg"
                  />
                )}
              </Document>
            </div>
          )}
        </div>
      </div>
      {status !== "error" && (
        <nav aria-label="PDF page navigation" className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              setPageNumber((currentPage) => Math.max(1, currentPage - 1));
            }}
            disabled={pageNumber <= 1 || totalPages === null}
            className="btn-secondary min-h-11 min-w-11"
            aria-label="Previous page"
          >
            Previous
          </button>
          <p aria-live="polite" className="min-w-28 text-center text-sm font-semibold">
            Page {pageNumber} of {totalPages ?? "—"}
          </p>
          <button
            type="button"
            onClick={() => {
              setPageNumber((currentPage) => Math.min(totalPages ?? currentPage, currentPage + 1));
            }}
            disabled={totalPages === null || pageNumber >= totalPages}
            className="btn-secondary min-h-11 min-w-11"
            aria-label="Next page"
          >
            Next
          </button>
        </nav>
      )}
    </section>
  );
}
