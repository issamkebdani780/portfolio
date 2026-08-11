import React from "react";
import { windowWrapper } from "../hoc/WindowWrapper";
import WindowControle from "../componenets/WindowControle";

const ImgFileWindow = ({ windowKey, data }) => {
  if (!data) return null;

  return (
    <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-2xl drop-shadow-2xl" style={{ width: 576 }}>
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

      {/* ── Image Content ─────────────────────────────────────── */}
      <div className="flex-1 bg-gray-100 flex items-center justify-center overflow-auto p-4" style={{ maxHeight: "calc(100vh - 150px)" }}>
        <img
          src={data.imageUrl}
          alt={data.name}
          className="max-w-full max-h-full object-contain rounded shadow-sm border border-gray-200"
        />
      </div>
    </div>
  );
};

export default windowWrapper(ImgFileWindow);
