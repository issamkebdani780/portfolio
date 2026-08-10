import React, { useState, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { windowWrapper } from "../hoc/WindowWrapper";
import WindowControle from "./WindowControle";

// Use the CDN worker to avoid bundling pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = ({ windowKey }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  }, []);

  return (
    <div className="flex flex-col bg-white rounded-xl overflow-hidden" style={{ width: 480 }}>

      {/* ── macOS Title Bar ───────────────────────────────────── */}
      <div
        className={`drag-handle-${windowKey} flex items-center justify-between px-4 py-2.5 bg-[#ececec] border-b border-gray-300 select-none cursor-move`}
      >
        {/* Traffic lights */}
        <WindowControle appId={windowKey} />

        {/* Centered title */}
        <span className="absolute left-1/2 -translate-x-1/2 text-[13px] font-semibold text-gray-600 pointer-events-none">
          Resume.pdf
        </span>

        {/* Download button */}
        <a
          href="/files/resume.pdf"
          download="Resume.pdf"
          className="p-1.5 rounded hover:bg-gray-300/70 transition-colors text-gray-500 hover:text-gray-700"
          title="Download PDF"
          onClick={(e) => e.stopPropagation()}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
        </a>
      </div>

      {/* ── PDF Viewer ────────────────────────────────────────── */}
      <div className="overflow-auto bg-gray-100 flex justify-center" style={{ maxHeight: "calc(100vh - 180px)" }}>
        <Document
          file="/files/resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center py-20 text-sm text-gray-400">
              Loading resume…
            </div>
          }
          error={
            <div className="flex flex-col items-center justify-center py-20 gap-3 text-sm text-gray-500">
              <span>Could not load PDF.</span>
              <a
                href="/files/resume.pdf"
                download
                className="px-4 py-2 bg-blue-500 text-white rounded-lg text-xs hover:bg-blue-600 transition-colors"
              >
                Download instead
              </a>
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            width={480}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>

      {/* ── Page Navigation (only shown if multi-page) ─────── */}
      {numPages && numPages > 1 && (
        <div className="flex items-center justify-center gap-4 py-2 bg-[#f5f5f5] border-t border-gray-200 select-none">
          <button
            onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
            disabled={pageNumber <= 1}
            className="px-3 py-1 text-xs rounded border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-40 transition-colors cursor-pointer focus:outline-none"
          >
            ←
          </button>
          <span className="text-xs text-gray-500 font-medium">
            {pageNumber} / {numPages}
          </span>
          <button
            onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
            disabled={pageNumber >= numPages}
            className="px-3 py-1 text-xs rounded border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-40 transition-colors cursor-pointer focus:outline-none"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
};

export default windowWrapper(Resume);
