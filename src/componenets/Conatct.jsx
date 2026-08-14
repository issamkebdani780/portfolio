import React from "react";
import { windowWrapper } from "../hoc/WindowWrapper";
import WindowControle from "./WindowControle";

const contactActions = [
  {
    id: 1,
    label: "Call me",
    bg: "#f4656b",
    href: "tel:+213781243966",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    id: 2,
    label: "Email me",
    bg: "#4bcb63",
    href: "https://mail.google.com/mail/?view=cm&to=kebdaniissam780@gmail.com&su=Hello%20Issam",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </svg>
    ),
  },
  {
    id: 3,
    label: "LinkedIn",
    bg: "#05b6f6",
    href: "https://linkedin.com/in/issam-kebdani-8b6154334",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: 4,
    label: "GitHub",
    bg: "#333333",
    href: "https://github.com/issamkebdani780",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

const Contact = ({ windowKey }) => {
  return (
    <div
      className="flex flex-col bg-white dark:bg-[#1c1c1e] rounded-xl overflow-hidden shadow-2xl"
      style={{ width: 540 }}
    >
      {/* ── macOS Title Bar ───────────────────────────────────── */}
      <div
        className={`drag-handle-${windowKey} flex items-center justify-between px-4 py-3 bg-[#ececec] dark:bg-[#2c2c2e] border-b border-gray-200 dark:border-gray-700 select-none cursor-move`}
      >
        <WindowControle appId={windowKey} />
        <span className="absolute left-1/2 -translate-x-1/2 text-[13px] font-semibold text-gray-600 dark:text-gray-300 pointer-events-none">
          Contact Me
        </span>
        <div className="w-14" />
      </div>

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="flex flex-col items-start text-left px-8 pt-7 pb-8 bg-white dark:bg-[#1c1c1e]">
        {/* Avatar */}
        <div className="mb-5 self-start">
          <img
            src="/me.jpg"
            alt="Issam Kebdani"
            className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700 shadow-sm"
          />
        </div>

        {/* Heading */}
        <h2 className="text-[20px] font-bold text-gray-900 dark:text-white mb-2 text-left self-start">
          Let's Connect
        </h2>

        {/* Subtitle */}
        <p className="text-[14px] text-gray-600 dark:text-gray-400 mb-7 leading-relaxed text-left self-start">
          Based in Algeria • +213 781 24 39 66 <br />
          Got an idea or a project in mind? Let's connect and talk tech!
        </p>

        {/* Action Buttons */}
        <div className="flex items-stretch gap-3 w-full">
          {contactActions.map((action) => (
            <a
              key={action.id}
              href={action.href}
              target={action.href.startsWith("http") ? "_blank" : undefined}
              rel={action.href.startsWith("http") ? "noreferrer" : undefined}
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