import React, { useState } from "react";
import { workExperience } from "../constant";
import { windowWrapper } from "../hoc/WindowWrapper";
import WindowControle from "./WindowControle";

const Experience = ({ windowKey }) => {
  const [activeTab, setActiveTab] = useState(0);
  const active = workExperience[activeTab];

  return (
    <div className="flex flex-col bg-white dark:bg-[#1c1c1e] w-full h-full">

      {/* ── macOS Title Bar ─────────────────────────────────────── */}
      <div
        className={`drag-handle-${windowKey} flex items-center justify-between px-4 py-2.5 bg-[#ececec] dark:bg-[#2c2c2e] border-b border-gray-200 dark:border-gray-700 select-none cursor-move`}
      >
        <WindowControle appId={windowKey} />
        <span className="absolute left-1/2 -translate-x-1/2 text-[13px] font-semibold text-gray-600 dark:text-gray-300 pointer-events-none">
          Work Experience
        </span>
        <div className="w-14" />
      </div>

      {/* ── Tabs Row ─────────────────────────────────────────────── */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 bg-[#f7f7f7] dark:bg-[#252525] overflow-x-auto">
        {workExperience.map((job, idx) => (
          <button
            key={job.id}
            onClick={() => setActiveTab(idx)}
            className={`flex-1 min-w-[100px] px-4 py-2.5 text-[12px] font-semibold whitespace-nowrap transition-all duration-200 border-b-2 focus:outline-none cursor-pointer ${
              activeTab === idx
                ? "border-b-2 bg-white dark:bg-[#1c1c1e] text-gray-900 dark:text-white"
                : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#333]"
            }`}
            style={activeTab === idx ? { borderColor: job.color } : {}}
          >
            {job.company}
          </button>
        ))}
      </div>

      {/* ── Tab Content ──────────────────────────────────────────── */}
      <div className="overflow-auto flex-1 px-6 py-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h2 className="text-[16px] font-bold text-gray-900 dark:text-white">
                {active.company}
              </h2>
              <span
                className="text-[11px] font-semibold px-2 py-0.5 rounded-full text-white"
                style={{ backgroundColor: active.color }}
              >
                {active.type}
              </span>
            </div>
            <p className="text-[13px] font-semibold text-gray-600 dark:text-gray-300">
              {active.role}
            </p>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">
              {active.period}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-0.5 rounded-full mb-4 w-12"
          style={{ backgroundColor: active.color }}
        />

        {/* Bullets */}
        <ul className="space-y-3">
          {active.bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              <span
                className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: active.color }}
              />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default windowWrapper(Experience);
