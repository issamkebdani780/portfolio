import React from "react";
import { useWindowsStore } from "../store/window";

const WindowControle = ({ appId }) => {
  const closeWindow = useWindowsStore((state) => state.closeWindow);
  const minimizeWindow = useWindowsStore((state) => state.minimizeWindow);
  const toggleMaximize = useWindowsStore((state) => state.toggleMaximize);

  return (
    <div id="window-controls" className="flex gap-1.5 group/controls">
      {/* Close button (Red) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          closeWindow(appId);
        }}
        className="close flex items-center justify-center relative w-3.5 h-3.5 rounded-full bg-[#ff6157] border border-[#e0443e] cursor-pointer focus:outline-none"
        title="Close"
      >
        <span className="opacity-0 group-hover/controls:opacity-100 text-[8px] text-[#4c0002] font-bold select-none absolute">
          ✕
        </span>
      </button>

      {/* Minimize button (Yellow) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          minimizeWindow(appId);
        }}
        className="minimize flex items-center justify-center relative w-3.5 h-3.5 rounded-full bg-[#ffc030] border border-[#de9e14] cursor-pointer focus:outline-none"
        title="Minimize"
      >
        <span className="opacity-0 group-hover/controls:opacity-100 text-[10px] text-[#5c3e00] font-bold select-none absolute -top-[3px]">
          —
        </span>
      </button>

      {/* Maximize/Zoom button (Green) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleMaximize(appId);
        }}
        className="maximize flex items-center justify-center relative w-3.5 h-3.5 rounded-full bg-[#2acb42] border border-[#1aab2f] cursor-pointer focus:outline-none"
        title="Zoom"
      >
        <span className="opacity-0 group-hover/controls:opacity-100 text-[8px] text-[#014c00] font-extrabold select-none absolute">
          ＋
        </span>
      </button>
    </div>
  );
};

export default WindowControle;
