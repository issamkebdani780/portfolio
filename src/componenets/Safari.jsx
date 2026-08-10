import React from "react";
import { blogPosts } from "../constant";
import { windowWrapper } from "../hoc/WindowWrapper";
import WindowControle from "./WindowControle";

const Safari = ({ windowKey }) => {
  return (
    <div className="flex flex-col bg-white w-full">

      {/* ── macOS Safari Toolbar ─────────────────────────────── */}
      <div
        className={`drag-handle-${windowKey} flex items-center gap-2 px-3 py-2.5 bg-[#ececec] border-b border-gray-300 select-none cursor-move`}
      >
        {/* Traffic light controls */}
        <WindowControle appId={windowKey} />

        {/* Sidebar toggle */}
        <button
          className="p-1 rounded hover:bg-gray-300/60 transition-colors focus:outline-none text-gray-500 ml-1"
          title="Show/Hide Sidebar"
          onClick={(e) => e.stopPropagation()}
        >
          <svg viewBox="0 0 20 16" fill="currentColor" className="w-[18px] h-[15px]">
            <rect x="0" y="1" width="6" height="14" rx="1.5" className="opacity-30" />
            <rect x="8" y="0.5" width="12" height="3" rx="1" />
            <rect x="8" y="6" width="12" height="3" rx="1" />
            <rect x="8" y="11.5" width="12" height="3" rx="1" />
          </svg>
        </button>

        {/* Back */}
        <button
          className="p-0.5 rounded text-gray-400 opacity-50 cursor-default focus:outline-none"
          title="Back"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Forward */}
        <button
          className="p-0.5 rounded text-gray-400 opacity-50 cursor-default focus:outline-none"
          title="Forward"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* ── Centred address bar ── */}
        <div className="flex-1 flex items-center gap-1.5 bg-white border border-gray-300 rounded-lg px-3 py-[5px] shadow-sm">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-gray-400 flex-shrink-0">
            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
          </svg>
          <span className="text-[12px] text-gray-400 truncate">Search or enter website name</span>
        </div>

        {/* Share */}
        <button
          className="p-1 rounded hover:bg-gray-300/60 transition-colors focus:outline-none text-gray-500"
          title="Share"
          onClick={(e) => e.stopPropagation()}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
          </svg>
        </button>

        {/* New tab (+) */}
        <button
          className="p-1 rounded hover:bg-gray-300/60 transition-colors focus:outline-none text-gray-500"
          title="New Tab"
          onClick={(e) => e.stopPropagation()}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>

        {/* Tabs grid */}
        <button
          className="p-1 rounded hover:bg-gray-300/60 transition-colors focus:outline-none text-gray-500"
          title="Show Tabs"
          onClick={(e) => e.stopPropagation()}
        >
          <svg viewBox="0 0 18 18" fill="currentColor" className="w-4 h-4">
            <rect x="0.5" y="0.5" width="7" height="7" rx="1.5" />
            <rect x="10.5" y="0.5" width="7" height="7" rx="1.5" />
            <rect x="0.5" y="10.5" width="7" height="7" rx="1.5" />
            <rect x="10.5" y="10.5" width="7" height="7" rx="1.5" />
          </svg>
        </button>
      </div>

      {/* ── Blog Content ──────────────────────────────────────── */}
      <div className="overflow-auto bg-white px-8 pt-6 pb-8">
        <h2 className="text-[#e8264a] font-bold text-[17px] mb-7">My Developer Blog</h2>

        <ul className="space-y-5">
          {blogPosts.map((post) => (
            <li key={post.id} className="flex items-start gap-4">
              {/* Thumbnail */}
              <img
                src={post.image}
                alt={post.title}
                className="w-[54px] h-[54px] rounded-lg object-cover flex-shrink-0 border border-gray-100 shadow-sm"
              />

              {/* Text */}
              <div className="flex flex-col gap-0.5 pt-0.5 flex-1 min-w-0">
                <p className="text-[11px] text-gray-400 font-medium">{post.date}</p>
                <h3 className="text-[13.5px] font-semibold text-gray-800 leading-snug">{post.title}</h3>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[12px] text-blue-500 hover:underline flex items-center gap-0.5 mt-0.5"
                  onClick={(e) => e.stopPropagation()}
                >
                  Check out the full post
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 flex-shrink-0">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default windowWrapper(Safari);
