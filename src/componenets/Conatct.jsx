import React from "react";
import { windowWrapper } from "../hoc/WindowWrapper";
import WindowControle from "./WindowControle";

const contactActions = [
  {
    id: 1,
    label: "Schedule a call",
    bg: "#f4656b",
    href: "https://cal.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
        <path strokeLinecap="round" d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
  },
  {
    id: 2,
    label: "Email me",
    bg: "#4bcb63",
    href: "mailto:contact@jsmastery.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </svg>
    ),
  },
  {
    id: 3,
    label: "Twitter/X",
    bg: "#ff866b",
    href: "https://x.com/jsmasterypro",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: 4,
    label: "LinkedIn",
    bg: "#05b6f6",
    href: "https://www.linkedin.com/company/javascriptmastery/posts/?feedView=all",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const Contact = ({ windowKey }) => {
  return (
    <div
      className="flex flex-col bg-white rounded-xl overflow-hidden shadow-2xl"
      style={{ width: 540 }}
    >
      {/* ── macOS Title Bar ───────────────────────────────────── */}
      <div
        className={`drag-handle-${windowKey} flex items-center justify-between px-4 py-3 bg-[#ececec] border-b border-gray-200 select-none cursor-move`}
      >
        <WindowControle appId={windowKey} />
        <span className="absolute left-1/2 -translate-x-1/2 text-[13px] font-semibold text-gray-600 pointer-events-none">
          Contact Me
        </span>
        <div className="w-14" />
      </div>

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="flex flex-col items-start text-left px-8 pt-7 pb-8 bg-white">
        {/* Avatar */}
        <div className="mb-5 self-start">
          <img
            src="/images/contact.png"
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 shadow-sm"
          />
        </div>

        {/* Heading */}
        <h2 className="text-[20px] font-bold text-gray-900 mb-2 text-left self-start">
          Let's Connect
        </h2>

        {/* Subtitle */}
        <p className="text-[14px] text-gray-600 mb-7 leading-relaxed text-left self-start">
          Got an idea? A bug to squash? Or just wanna talk tech? I'm in.
        </p>

        {/* Action Buttons */}
        <div className="flex items-stretch gap-3 w-full">
          {contactActions.map((action) => (
            <a
              key={action.id}
              href={action.href}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex flex-col items-start justify-between gap-2 rounded-xl px-3 py-3 h-[92px] text-white font-semibold text-[12px] leading-tight transition-all duration-200 hover:brightness-105 hover:-translate-y-0.5 active:scale-95 shadow-sm"
              style={{ backgroundColor: action.bg }}
            >
              {action.icon}
              <span>{action.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default windowWrapper(Contact);