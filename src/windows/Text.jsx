import React from "react";
import { windowWrapper } from "../hoc/WindowWrapper";
import WindowControle from "../componenets/WindowControle";

const TxtFileWindow = ({ windowKey, data }) => {
  if (!data) return null;

  return (
    <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-2xl drop-shadow-2xl" style={{ width: 448 }}>
      {/* ── macOS Title Bar ───────────────────────────────────── */}
      <div
        className={`drag-handle-${windowKey} flex items-center justify-between px-4 py-3 bg-[#ececec] border-b border-gray-300 select-none cursor-move`}
      >
        <WindowControle appId={windowKey} />
        <h2 className="absolute left-1/2 -translate-x-1/2 text-[13px] font-semibold text-gray-600 pointer-events-none">
          {data.name}
        </h2>
        <div className="w-14" /> {/* Spacer */}
      </div>

      {/* ── Text Content ──────────────────────────────────────── */}
      <div className="p-7 text-zinc-800 font-sans overflow-auto" style={{ maxHeight: "calc(100vh - 150px)" }}>
        <div className="space-y-4">
          {data.subtitle && (
            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-100 pb-2">
              {data.subtitle}
            </p>
          )}
          <div className="space-y-4 leading-relaxed text-[14px] text-zinc-700 whitespace-pre-wrap">
            {Array.isArray(data.description)
              ? data.description.map((para, i) => <p key={i}>{para}</p>)
              : <p>{data.description}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default windowWrapper(TxtFileWindow);
