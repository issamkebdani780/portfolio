import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import {
  locations,
  techStack,
  workExperience,
  socials,
} from "../constant";
import {
  ArrowLeft,
  Search,
  Mic,
  Download,
  X,
  Flag,
} from "lucide-react";

export const MobileOS = ({ theme = "light", setTheme }) => {
  const [currentScreen, setCurrentScreen] = useState("home"); // "home" | "work" | "about" | "techstack" | "contact" | "experience" | "licenses" | "resume"
  const [activeFolder, setActiveFolder] = useState(null); // when inside a work project
  const [selectedTxt, setSelectedTxt] = useState(null); // for viewing a txt file modal
  const [previewImage, setPreviewImage] = useState(null); // for viewing full license image
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTime, setCurrentTime] = useState(dayjs().format("h:mm"));
  const [activeExpTab, setActiveExpTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs().format("h:mm"));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const projects = locations.work?.children || [];
  const aboutMeFile = locations.about?.children?.[0];

  const filteredProjects = projects.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const licenses = [
    { id: 1, name: "Participate at tailwind/next js workshop", src: "/license/clubesi.jpg" },
    { id: 2, name: "confirmateur license kayzo", src: "/license/kayzo.jpg" },
    { id: 3, name: "closer at MMG", src: "/license/mmg.jpg" },
    { id: 4, name: "Prompt Engineering", src: "/license/promptengeneering.png" },
    { id: 5, name: "Participate at Techinovator", src: "/license/techinovator.jpg" },
  ];

  const contactActions = [
    {
      id: 1,
      label: "Call me",
      bg: "#f4656b",
      href: "tel:+213781243966",
      subtitle: "+213 781 24 39 66",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      id: 2,
      label: "Email me",
      bg: "#4bcb63",
      href: "https://mail.google.com/mail/?view=cm&to=kebdaniissam780@gmail.com&su=Hello%20Issam",
      subtitle: "kebdaniissam780@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
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
      subtitle: "issam-kebdani",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      id: 4,
      label: "GitHub",
      bg: "#333333",
      href: "https://github.com/issamkebdani780",
      subtitle: "issamkebdani780",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
  ];

  // Helper to open a screen
  const navigateTo = (screen, folder = null) => {
    setActiveFolder(folder);
    setCurrentScreen(screen);
    setSearchQuery("");
  };

  const goBack = () => {
    if (activeFolder) {
      setActiveFolder(null);
    } else {
      setCurrentScreen("home");
    }
  };

  return (
    <div className="w-full h-full min-h-screen bg-black text-slate-900 dark:text-white flex justify-center items-center overflow-hidden font-sans select-none">
      {/* Mobile Screen Container */}
      <div className="relative w-full h-full max-w-[430px] max-h-[932px] sm:rounded-[50px] sm:border-[8px] sm:border-[#2d2d30] shadow-[0_25px_70px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col bg-[#f2f2f7] dark:bg-[#000000]">
        
        {/* ── iOS Status Bar ────────────────────────────────────────────── */}
        <div className="w-full pt-3 px-7 pb-1.5 flex items-center justify-between text-xs font-semibold z-50 shrink-0 select-none text-black dark:text-white">
          {/* Time */}
          <span className="tracking-tight text-[15px] font-bold pl-1 font-mono">
            {currentTime}
          </span>

          {/* Dynamic Island Pill */}
          <div className="w-28 h-7 bg-black rounded-full flex items-center justify-between px-2.5 shadow-md border border-zinc-800/80">
            <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0a] ring-1 ring-zinc-800 flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-blue-900/60" />
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#121214] ring-1 ring-zinc-800" />
          </div>

          {/* Status Icons: Cellular, Wifi, Battery */}
          <div className="flex items-center gap-1.5 pr-1">
            {/* Cellular */}
            <svg className="w-4 h-3.5 fill-current" viewBox="0 0 17 12">
              <rect x="0" y="8" width="2.5" height="4" rx="0.6" />
              <rect x="4" y="6" width="2.5" height="6" rx="0.6" />
              <rect x="8" y="3" width="2.5" height="9" rx="0.6" />
              <rect x="12" y="0" width="2.5" height="12" rx="0.6" />
            </svg>
            {/* Wifi */}
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 18c-.8 0-1.5.7-1.5 1.5S11.2 21 12 21s1.5-.7 1.5-1.5S12.8 18 12 18zm-4.9-3.2c1.3-1.1 3-1.8 4.9-1.8s3.6.7 4.9 1.8l1.4-1.4C16.6 12 14.4 11 12 11s-4.6 1-6.3 2.4l1.4 1.4zm-3.6-3.6C5.8 9.4 8.7 8 12 8s6.2 1.4 8.5 3.2l1.4-1.4C19.2 7.7 15.8 6 12 6s-7.2 1.7-9.9 3.8l1.4 1.4z" />
            </svg>
            {/* Battery */}
            <div className="w-5 h-2.5 rounded-[4px] border border-current p-[1px] flex items-center relative">
              <div className="h-full w-3.5 bg-current rounded-[2px]" />
              <div className="w-0.5 h-1 bg-current absolute -right-[3px] rounded-r-sm" />
            </div>
          </div>
        </div>

        {/* ── Main Screen Router ────────────────────────────────────── */}
        <div className="flex-1 flex flex-col overflow-hidden relative">

          {/* 1. HOME SCREEN */}
          {currentScreen === "home" && (
            <div
              className="flex-1 flex flex-col justify-between px-6 pt-6 pb-4 bg-cover bg-center relative"
              style={{
                backgroundImage: "url('/images/ios_wallpaper.jpg'), url('/images/wallpaper.png')",
              }}
            >
              {/* Wallpaper Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/40 pointer-events-none" />

              {/* Grid of Apps using Desktop Icons */}
              <div className="relative z-10 grid grid-cols-4 gap-y-7 gap-x-4 pt-4">
                {/* 1. Portfolio (Finder) */}
                <button
                  onClick={() => navigateTo("work")}
                  className="flex flex-col items-center gap-1.5 group focus:outline-none"
                >
                  <div className="w-14 h-14 flex items-center justify-center transition-transform active:scale-90">
                    <img
                      src="/images/finder.png"
                      alt="Portfolio"
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </div>
                  <span className="text-[12px] font-medium text-white drop-shadow-md tracking-tight">
                    Portfolio
                  </span>
                </button>

                {/* 2. Experience (Safari) */}
                <button
                  onClick={() => navigateTo("experience")}
                  className="flex flex-col items-center gap-1.5 group focus:outline-none"
                >
                  <div className="w-14 h-14 flex items-center justify-center transition-transform active:scale-90">
                    <img
                      src="/images/safari.png"
                      alt="Experience"
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </div>
                  <span className="text-[12px] font-medium text-white drop-shadow-md tracking-tight">
                    Experience
                  </span>
                </button>

                {/* 3. Licenses (Photos) */}
                <button
                  onClick={() => navigateTo("licenses")}
                  className="flex flex-col items-center gap-1.5 group focus:outline-none"
                >
                  <div className="w-14 h-14 flex items-center justify-center transition-transform active:scale-90">
                    <img
                      src="/images/photos.png"
                      alt="Licenses"
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </div>
                  <span className="text-[12px] font-medium text-white drop-shadow-md tracking-tight">
                    Licenses
                  </span>
                </button>

                {/* 4. Contact (Contact) */}
                <button
                  onClick={() => navigateTo("contact")}
                  className="flex flex-col items-center gap-1.5 group focus:outline-none"
                >
                  <div className="w-14 h-14 flex items-center justify-center transition-transform active:scale-90">
                    <img
                      src="/images/contact.png"
                      alt="Contact"
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </div>
                  <span className="text-[12px] font-medium text-white drop-shadow-md tracking-tight">
                    Contact
                  </span>
                </button>

                {/* 5. Skills (Terminal) */}
                <button
                  onClick={() => navigateTo("techstack")}
                  className="flex flex-col items-center gap-1.5 group focus:outline-none"
                >
                  <div className="w-14 h-14 flex items-center justify-center transition-transform active:scale-90">
                    <img
                      src="/images/terminal.png"
                      alt="Skills"
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </div>
                  <span className="text-[12px] font-medium text-white drop-shadow-md tracking-tight">
                    Skills
                  </span>
                </button>

                {/* 6. Resume (PDF) */}
                <button
                  onClick={() => navigateTo("resume")}
                  className="flex flex-col items-center gap-1.5 group focus:outline-none"
                >
                  <div className="w-14 h-14 flex items-center justify-center transition-transform active:scale-90">
                    <img
                      src="/images/pdf.png"
                      alt="Resume"
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </div>
                  <span className="text-[12px] font-medium text-white drop-shadow-md tracking-tight">
                    Resume
                  </span>
                </button>

                {/* 7. About Me (Photo) */}
                <button
                  onClick={() => navigateTo("about")}
                  className="flex flex-col items-center gap-1.5 group focus:outline-none"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-lg overflow-hidden flex items-center justify-center transition-transform active:scale-90 border-2 border-white/40">
                    <img src="/me.jpg" alt="About Me" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[12px] font-medium text-white drop-shadow-md tracking-tight">
                    About Me
                  </span>
                </button>

                {/* 8. GitHub */}
                <a
                  href="https://github.com/issamkebdani780"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-1.5 group focus:outline-none"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#333333] shadow-md flex items-center justify-center transition-transform active:scale-90 border border-white/20">
                    <img src="/icons/github.svg" alt="GitHub" className="w-8 h-8 invert" />
                  </div>
                  <span className="text-[12px] font-medium text-white drop-shadow-md tracking-tight">
                    GitHub
                  </span>
                </a>
              </div>

              {/* Bottom Area: Search Pill + Dock */}
              <div className="relative z-10 flex flex-col items-center gap-3 pb-2">
                {/* Search Pill */}
                <button
                  onClick={() => navigateTo("work")}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/35 backdrop-blur-xl border border-white/15 text-white/90 text-[13px] font-medium shadow-md transition-all active:scale-95"
                >
                  <Search className="w-3.5 h-3.5 text-white/70" />
                  <span>Search</span>
                </button>

                {/* iOS Dock Bar with Desktop Icons */}
                <div className="w-full bg-white/25 dark:bg-white/15 backdrop-blur-2xl border border-white/25 rounded-[28px] px-3 py-2.5 flex items-center justify-around shadow-2xl">
                  {/* Dock 1: Finder / Portfolio */}
                  <button
                    onClick={() => navigateTo("work")}
                    className="w-14 h-14 flex items-center justify-center active:scale-90 transition-transform"
                    title="Portfolio"
                  >
                    <img
                      src="/images/finder.png"
                      alt="Portfolio"
                      className="w-12 h-12 object-contain drop-shadow"
                    />
                  </button>

                  {/* Dock 2: Safari / Experience */}
                  <button
                    onClick={() => navigateTo("experience")}
                    className="w-14 h-14 flex items-center justify-center active:scale-90 transition-transform"
                    title="Experience"
                  >
                    <img
                      src="/images/safari.png"
                      alt="Experience"
                      className="w-12 h-12 object-contain drop-shadow"
                    />
                  </button>

                  {/* Dock 3: Photos / Licenses */}
                  <button
                    onClick={() => navigateTo("licenses")}
                    className="w-14 h-14 flex items-center justify-center active:scale-90 transition-transform"
                    title="Licenses"
                  >
                    <img
                      src="/images/photos.png"
                      alt="Licenses"
                      className="w-12 h-12 object-contain drop-shadow"
                    />
                  </button>

                  {/* Dock 4: Contacts */}
                  <button
                    onClick={() => navigateTo("contact")}
                    className="w-14 h-14 flex items-center justify-center active:scale-90 transition-transform"
                    title="Contact"
                  >
                    <img
                      src="/images/contact.png"
                      alt="Contact"
                      className="w-12 h-12 object-contain drop-shadow"
                    />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 2. WORK SCREEN (Files App Style) */}
          {currentScreen === "work" && (
            <div className="flex-1 flex flex-col bg-white dark:bg-[#121214] text-slate-900 dark:text-white">
              {/* Header Navigation */}
              <div className="px-4 py-3 flex items-center justify-between border-b border-gray-200/40 dark:border-zinc-800/40 bg-white/60 dark:bg-[#121214]/60 backdrop-blur-xl">
                <button
                  onClick={goBack}
                  className="flex items-center gap-1 text-[#007aff] text-[15px] font-medium active:opacity-60"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{activeFolder ? "Work" : "Go back"}</span>
                </button>
                <h1 className="text-[16px] font-bold text-gray-900 dark:text-white truncate max-w-[180px]">
                  {activeFolder ? activeFolder.name.split("-")[0].trim() : "Work"}
                </h1>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-[#007aff] text-[15px] font-medium active:opacity-60"
                >
                  Cancel
                </button>
              </div>

              {/* Search Bar */}
              <div className="px-4 pt-3 pb-2">
                <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-zinc-800/80 rounded-xl text-gray-500 dark:text-gray-400">
                  <Search className="w-4 h-4" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search"
                    className="flex-1 bg-transparent text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none"
                  />
                  <Mic className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Grid Content */}
              <div className="flex-1 overflow-y-auto px-4 py-3">
                {!activeFolder ? (
                  /* Root Work Grid with Desktop Folder Icons */
                  <div className="grid grid-cols-3 gap-y-6 gap-x-3 text-center">
                    {filteredProjects.map((project, idx) => (
                      <button
                        key={project.id}
                        onClick={() => setActiveFolder(project)}
                        className="flex flex-col items-center gap-1.5 group focus:outline-none"
                      >
                        <div className="w-16 h-16 flex items-center justify-center transition-transform active:scale-95">
                          <img
                            src="/images/folder.png"
                            alt={project.name}
                            className="w-full h-full object-contain drop-shadow"
                          />
                        </div>
                        <span className="text-[12px] font-medium text-gray-800 dark:text-gray-200 line-clamp-2 leading-tight">
                          Project {idx + 1}
                          <br />
                          <span className="text-[11px] text-gray-500 dark:text-gray-400 font-normal">
                            ({project.name.split("-")[0].trim()})
                          </span>
                        </span>
                      </button>
                    ))}

                    {/* Resume.pdf inside Work */}
                    <button
                      onClick={() => navigateTo("resume")}
                      className="flex flex-col items-center gap-1.5 group focus:outline-none"
                    >
                      <div className="w-16 h-16 flex items-center justify-center transition-transform active:scale-95">
                        <img
                          src="/images/pdf.png"
                          alt="Resume"
                          className="w-13 h-13 object-contain drop-shadow"
                        />
                      </div>
                      <span className="text-[12px] font-medium text-gray-800 dark:text-gray-200">
                        Resume.pdf
                      </span>
                    </button>
                  </div>
                ) : (
                  /* Inside Project Folder */
                  <div className="space-y-4">
                    <div className="p-3 bg-blue-50 dark:bg-zinc-800/50 rounded-xl border border-blue-100 dark:border-zinc-700/60">
                      <h2 className="text-sm font-bold text-gray-900 dark:text-white">
                        {activeFolder.name}
                      </h2>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                        {activeFolder.children?.length || 0} items in this project
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-y-6 gap-x-3 text-center">
                      {activeFolder.children?.map((item) => {
                        const isUrl = item.fileType === "url";
                        const isTxt = item.fileType === "txt";

                        return (
                          <div
                            key={item.id}
                            onClick={() => {
                              if (isUrl) {
                                window.open(item.href, "_blank");
                              } else if (isTxt) {
                                setSelectedTxt(item);
                              }
                            }}
                            className="flex flex-col items-center gap-1.5 cursor-pointer group active:scale-95 transition-transform"
                          >
                            <div className="w-16 h-16 flex items-center justify-center">
                              {isUrl ? (
                                <img
                                  src="/images/safari.png"
                                  alt="Link"
                                  className="w-13 h-13 object-contain drop-shadow"
                                />
                              ) : (
                                <img
                                  src="/images/txt.png"
                                  alt="Document"
                                  className="w-13 h-13 object-contain drop-shadow"
                                />
                              )}
                            </div>
                            <span className="text-[11.5px] font-medium text-gray-800 dark:text-gray-200 line-clamp-2 leading-tight">
                              {item.name}
                            </span>
                            {isUrl && (
                              <span className="text-[9.5px] text-[#007aff] flex items-center gap-0.5">
                                Visit ↗
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 3. ABOUT ME SCREEN (Only existing data from locations.about) */}
          {currentScreen === "about" && (
            <div className="flex-1 flex flex-col bg-white dark:bg-[#121214] text-slate-900 dark:text-white">
              {/* Header Navigation */}
              <div className="px-4 py-3 flex items-center justify-between border-b border-gray-200/40 dark:border-zinc-800/40 bg-white/60 dark:bg-[#121214]/60 backdrop-blur-xl">
                <button
                  onClick={() => navigateTo("home")}
                  className="flex items-center gap-1 text-[#007aff] text-[15px] font-medium active:opacity-60"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Go back</span>
                </button>
                <h1 className="text-[16px] font-bold text-gray-900 dark:text-white">
                  About Me
                </h1>
                <div className="w-12" />
              </div>

              {/* Existing About Me content from locations.about */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
                {/* Profile Photo */}
                <div className="flex items-center gap-4 pb-2 border-b border-gray-100 dark:border-zinc-800">
                  <img
                    src="/me.jpg"
                    alt="Issam Kebdani"
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 dark:border-zinc-700 shadow-md"
                  />
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                      Issam Kebdani
                    </h2>
                    <p className="text-xs font-semibold text-[#007aff] mt-0.5">
                      {aboutMeFile?.subtitle || "Full-Stack Web Developer"}
                    </p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">
                      Algeria • Remote Available
                    </p>
                  </div>
                </div>

                {/* Paragraphs from about-me.txt */}
                <div className="space-y-3 text-[13.5px] text-gray-700 dark:text-gray-300 leading-relaxed">
                  {aboutMeFile?.description?.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 4. TECH STACK SCREEN (Only existing data from techStack) */}
          {currentScreen === "techstack" && (
            <div className="flex-1 flex flex-col bg-white dark:bg-[#121214] text-slate-900 dark:text-white">
              {/* Header Navigation */}
              <div className="px-4 py-3 flex items-center justify-between border-b border-gray-200/40 dark:border-zinc-800/40 bg-white/60 dark:bg-[#121214]/60 backdrop-blur-xl">
                <button
                  onClick={() => navigateTo("home")}
                  className="flex items-center gap-1 text-[#007aff] text-[15px] font-medium active:opacity-60"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Go back</span>
                </button>
                <h1 className="text-[16px] font-bold text-gray-900 dark:text-white">
                  Skills
                </h1>
                <div className="w-12" />
              </div>

              {/* Monospace Techstack Table */}
              <div className="flex-1 overflow-y-auto px-6 py-6 font-mono text-[13px]">
                {/* Desktop Terminal Prompt */}
                <div className="flex items-center gap-2 mb-4 text-xs font-mono">
                  <span className="font-bold text-gray-900 dark:text-white">@issam %</span>
                  <span className="text-gray-600 dark:text-gray-400">show techstack</span>
                </div>

                <h2 className="text-base font-bold text-gray-800 dark:text-gray-200 mb-4 tracking-tight">
                  Techstack
                </h2>

                {/* Table Header */}
                <div className="flex items-center justify-between pb-2 border-b border-dashed border-gray-300 dark:border-zinc-700 text-xs font-semibold text-gray-400">
                  <span className="w-28 pl-5">Category</span>
                  <span className="flex-1">Technologies</span>
                </div>

                {/* Rows with Green Checkmarks */}
                <div className="divide-y divide-gray-100 dark:divide-zinc-800/40 py-2 space-y-2.5">
                  {techStack.map((stack, idx) => (
                    <div key={idx} className="flex items-start pt-2 leading-relaxed">
                      <div className="flex items-center gap-1.5 w-28 shrink-0">
                        <span className="text-[#00A154] font-bold">✓</span>
                        <span className="text-[#00A154] font-semibold">
                          {stack.category}
                        </span>
                      </div>
                      <span className="flex-1 text-gray-700 dark:text-gray-300">
                        {stack.items.join(", ")}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Separator */}
                <div className="my-5 border-t border-dashed border-gray-300 dark:border-zinc-700" />

                {/* Footnote Status */}
                <div className="space-y-1.5 text-[#00A154] text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">✓</span>
                    <span>5 of 5 stacks loaded successfully (100%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flag className="w-3.5 h-3.5 fill-current" />
                    <span>Render time: 6ms</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 5. CONTACT ME SCREEN (Only existing actions from Conatct.jsx) */}
          {currentScreen === "contact" && (
            <div className="flex-1 flex flex-col bg-white dark:bg-[#121214] text-slate-900 dark:text-white">
              {/* Header Navigation */}
              <div className="px-4 py-3 flex items-center justify-between border-b border-gray-200/40 dark:border-zinc-800/40 bg-white/60 dark:bg-[#121214]/60 backdrop-blur-xl">
                <button
                  onClick={() => navigateTo("home")}
                  className="flex items-center gap-1 text-[#007aff] text-[15px] font-medium active:opacity-60"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Go back</span>
                </button>
                <h1 className="text-[16px] font-bold text-gray-900 dark:text-white">
                  Contact Me
                </h1>
                <div className="w-12" />
              </div>

              {/* Profile Card & Action Buttons */}
              <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col items-center text-center">
                {/* Developer Avatar */}
                <div className="relative mb-4">
                  <img
                    src="/me.jpg"
                    alt="Issam Kebdani"
                    className="w-20 h-20 rounded-full object-cover shadow-lg border-2 border-gray-200 dark:border-zinc-700"
                  />
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1.5">
                  Let's Connect
                </h2>

                {/* Subtitle from Conatct.jsx */}
                <p className="text-[13px] text-gray-500 dark:text-gray-400 mb-7 max-w-xs leading-relaxed">
                  Based in Algeria • +213 781 24 39 66 <br />
                  Got an idea or a project in mind? Let's connect and talk tech!
                </p>

                {/* 4 Colored Action Cards strictly from Conatct.jsx */}
                <div className="w-full space-y-3">
                  {contactActions.map((action) => (
                    <a
                      key={action.id}
                      href={action.href}
                      target={action.href.startsWith("http") ? "_blank" : undefined}
                      rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                      className="w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl text-white shadow-sm active:scale-95 transition-all text-left"
                      style={{ backgroundColor: action.bg }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                        {action.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[15px] font-bold">{action.label}</div>
                        <div className="text-[11px] text-white/80 truncate">{action.subtitle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 6. EXPERIENCE SCREEN (Only existing data from workExperience) */}
          {currentScreen === "experience" && (
            <div className="flex-1 flex flex-col bg-white dark:bg-[#121214] text-slate-900 dark:text-white">
              {/* Header Navigation */}
              <div className="px-4 py-3 flex items-center justify-between border-b border-gray-200/40 dark:border-zinc-800/40 bg-white/60 dark:bg-[#121214]/60 backdrop-blur-xl">
                <button
                  onClick={() => navigateTo("home")}
                  className="flex items-center gap-1 text-[#007aff] text-[15px] font-medium active:opacity-60"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Go back</span>
                </button>
                <h1 className="text-[16px] font-bold text-gray-900 dark:text-white">
                  Experience
                </h1>
                <div className="w-12" />
              </div>

              {/* Segmented Control Tabs */}
              <div className="p-3 bg-gray-100 dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800">
                <div className="flex p-0.5 bg-gray-200 dark:bg-zinc-800 rounded-xl">
                  {workExperience.map((job, idx) => (
                    <button
                      key={job.id}
                      onClick={() => setActiveExpTab(idx)}
                      className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all truncate px-1 ${
                        activeExpTab === idx
                          ? "bg-white dark:bg-zinc-700 text-gray-900 dark:text-white shadow-sm"
                          : "text-gray-500 hover:text-gray-800 dark:text-gray-400"
                      }`}
                    >
                      {job.company.split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {workExperience[activeExpTab] && (
                  <>
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                          {workExperience[activeExpTab].company}
                        </h2>
                        <p className="text-sm font-semibold text-[#007aff] mt-0.5">
                          {workExperience[activeExpTab].role}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                          {workExperience[activeExpTab].period}
                        </p>
                      </div>
                      <span
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-full text-white"
                        style={{ backgroundColor: workExperience[activeExpTab].color }}
                      >
                        {workExperience[activeExpTab].type}
                      </span>
                    </div>

                    <div
                      className="h-1 w-14 rounded-full"
                      style={{ backgroundColor: workExperience[activeExpTab].color }}
                    />

                    <ul className="space-y-2.5 pt-2">
                      {workExperience[activeExpTab].bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300 leading-relaxed"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                            style={{ backgroundColor: workExperience[activeExpTab].color }}
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          )}

          {/* 7. LICENSES & CERTIFICATES SCREEN (Only existing data) */}
          {currentScreen === "licenses" && (
            <div className="flex-1 flex flex-col bg-white dark:bg-[#121214] text-slate-900 dark:text-white">
              {/* Header Navigation */}
              <div className="px-4 py-3 flex items-center justify-between border-b border-gray-200/40 dark:border-zinc-800/40 bg-white/60 dark:bg-[#121214]/60 backdrop-blur-xl">
                <button
                  onClick={() => navigateTo("home")}
                  className="flex items-center gap-1 text-[#007aff] text-[15px] font-medium active:opacity-60"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Go back</span>
                </button>
                <h1 className="text-[16px] font-bold text-gray-900 dark:text-white">
                  Licenses
                </h1>
                <div className="w-12" />
              </div>

              {/* Grid of Certifications */}
              <div className="flex-1 overflow-y-auto p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                  Certifications & Licenses ({licenses.length})
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {licenses.map((lic) => (
                    <button
                      key={lic.id}
                      onClick={() => setPreviewImage(lic)}
                      className="flex flex-col rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-800/60 shadow-sm text-left active:scale-95 transition-all"
                    >
                      <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-zinc-800">
                        <img
                          src={lic.src}
                          alt={lic.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2">
                        <p className="text-[11px] font-semibold text-gray-800 dark:text-gray-200 truncate">
                          {lic.name}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 8. RESUME SCREEN (Full Complete Resume with Smooth Scrolling) */}
          {currentScreen === "resume" && (
            <div className="flex-1 flex flex-col bg-white dark:bg-[#121214] text-slate-900 dark:text-white min-h-0 h-full">
              {/* Header Navigation */}
              <div className="px-4 py-3 flex items-center justify-between border-b border-gray-200/40 dark:border-zinc-800/40 shrink-0 bg-white/60 dark:bg-[#121214]/60 backdrop-blur-xl z-10">
                <button
                  onClick={() => navigateTo("home")}
                  className="flex items-center gap-1 text-[#007aff] text-[15px] font-medium active:opacity-60"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Go back</span>
                </button>
                <h1 className="text-[16px] font-bold text-gray-900 dark:text-white">
                  Resume.pdf
                </h1>
                <a
                  href="/Issam_Kebdani_Resume.pdf"
                  download="Issam_Kebdani_Resume.pdf"
                  className="flex items-center gap-1 text-[#007aff] text-xs font-semibold px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-lg active:scale-95"
                  title="Download PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>PDF</span>
                </a>
              </div>

              {/* Scrollable Complete Resume Document */}
              <div className="flex-1 overflow-y-auto min-h-0 p-4 pb-16 space-y-5 text-xs leading-relaxed select-text overscroll-contain">
                {/* Header Profile Section */}
                <div className="flex items-center gap-3.5 pb-4 border-b border-gray-200 dark:border-zinc-800">
                  <img
                    src="/me.jpg"
                    alt="Issam Kebdani"
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/30 shadow-md shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wide truncate">
                      Issam Kebdani
                    </h2>
                    <p className="text-[#007aff] font-semibold text-[12px]">
                      Full-Stack Web Developer
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-[10.5px] mt-0.5">
                      Algeria • +213 781 24 39 66
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-[10.5px] truncate">
                      kebdaniissam780@gmail.com
                    </p>
                    <div className="flex items-center gap-2 mt-1 text-[10.5px] text-[#007aff]">
                      <a href="https://linkedin.com/in/issam-kebdani-8b6154334" target="_blank" rel="noreferrer" className="hover:underline">
                        LinkedIn ↗
                      </a>
                      <span>•</span>
                      <a href="https://github.com/issamkebdani780" target="_blank" rel="noreferrer" className="hover:underline">
                        GitHub ↗
                      </a>
                    </div>
                  </div>
                </div>

                {/* Professional Summary */}
                <div>
                  <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase mb-1.5 border-b-2 border-gray-800 dark:border-gray-400 pb-1">
                    Professional Summary
                  </h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300 text-[11.5px] leading-relaxed">
                    <p>
                      Full-Stack Web Developer with professional experience developing responsive web applications within a development team and hands-on experience building full-stack applications from frontend to backend and database. Strong foundation in React.js, JavaScript, HTML, CSS, Tailwind CSS, Express.js, REST APIs, and MySQL.
                    </p>
                    <p>
                      Built and deployed business websites, e-commerce platforms, booking systems, and management applications, including a healthcare appointment management platform. Previous experience in e-commerce sales and client communication developed strong skills in understanding customer needs and business-oriented communication.
                    </p>
                  </div>
                </div>

                {/* Technical Skills */}
                <div>
                  <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase mb-1.5 border-b-2 border-gray-800 dark:border-gray-400 pb-1">
                    Technical Skills
                  </h3>
                  <ul className="text-gray-700 dark:text-gray-300 text-[11px] space-y-1">
                    <li><strong className="text-gray-900 dark:text-white">Frontend:</strong> HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Responsive Web Design</li>
                    <li><strong className="text-gray-900 dark:text-white">Backend:</strong> Node.js, Express.js, REST APIs, JWT</li>
                    <li><strong className="text-gray-900 dark:text-white">Database:</strong> MySQL, Relational Database Design, SQL</li>
                    <li><strong className="text-gray-900 dark:text-white">Tools & Workflow:</strong> Git, GitHub, API Integration, Responsive Development</li>
                    <li><strong className="text-gray-900 dark:text-white">Other:</strong> E-commerce, Shopify, Business Websites, Client Communication, Meta ads</li>
                  </ul>
                </div>

                {/* Professional Experience */}
                <div>
                  <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase mb-2 border-b-2 border-gray-800 dark:border-gray-400 pb-1">
                    Professional Experience
                  </h3>

                  <div className="space-y-4">
                    {/* Job 1 */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-baseline">
                        <span className="font-bold text-gray-900 dark:text-white text-[12px]">CREAPLUS DIGITAL</span>
                        <span className="text-[10px] text-gray-500 dark:text-gray-400">Apr – Aug 2026</span>
                      </div>
                      <div className="text-[#007aff] font-medium text-[11px]">Frontend Developer (Remote)</div>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 text-[11px]">
                        <li>Develop responsive web applications using React.js, JavaScript, HTML, CSS, and Tailwind CSS.</li>
                        <li>Build reusable frontend components and integrate REST APIs.</li>
                        <li>Translate business requirements and interface requirements into functional, responsive web experiences.</li>
                        <li>Contribute to the development of business platforms, management systems, and brand websites.</li>
                      </ul>
                    </div>

                    {/* Job 2 */}
                    <div className="space-y-1 pt-1 border-t border-gray-100 dark:border-zinc-800">
                      <div className="flex justify-between items-baseline">
                        <span className="font-bold text-gray-900 dark:text-white text-[12px]">MMG</span>
                        <span className="text-[10px] text-gray-500 dark:text-gray-400">Jan – Oct 2025</span>
                      </div>
                      <div className="text-[#007aff] font-medium text-[11px]">Closer & VIP Closer (Sales)</div>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 text-[11px]">
                        <li>Managed sales conversations for an e-commerce training program, guiding prospects through the buying process.</li>
                        <li>Used CRM tools to manage prospects, follow up with leads, and maintain organized customer communication.</li>
                        <li>Handled customer objections and adapted communication to different customer needs.</li>
                      </ul>
                    </div>

                    {/* Job 3 */}
                    <div className="space-y-1 pt-1 border-t border-gray-100 dark:border-zinc-800">
                      <div className="flex justify-between items-baseline">
                        <span className="font-bold text-gray-900 dark:text-white text-[12px]">MEDIAZ</span>
                        <span className="text-[10px] text-gray-500 dark:text-gray-400">Dec 2025 – Feb 2026</span>
                      </div>
                      <div className="text-[#007aff] font-medium text-[11px]">Closer (Sales)</div>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 text-[11px]">
                        <li>Managed customer conversations and sales processes for a management program.</li>
                        <li>Identified customer needs, handled objections, and guided prospects toward purchasing decisions.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Selected Projects */}
                <div>
                  <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase mb-2 border-b-2 border-gray-800 dark:border-gray-400 pb-1">
                    Selected Projects
                  </h3>

                  <div className="space-y-3.5">
                    {/* Project 1 */}
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">Healthora — Healthcare Appointment & Management Platform</div>
                      <div className="flex flex-col gap-0.5 my-1 text-[11px]">
                        <a href="https://healthoraweb.netlify.app/" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                          🔗 healthoraweb.netlify.app
                        </a>
                        <a href="https://healthora-portal-client.vercel.app/" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                          🔗 healthora-portal-client.vercel.app
                        </a>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 italic text-[10.5px]">
                        (React.js, Tailwind CSS, Express.js, MySQL)
                      </span>
                      <ul className="list-disc list-inside space-y-0.5 mt-1 text-gray-600 dark:text-gray-300 text-[11px]">
                        <li>Built a full-stack healthcare management platform for doctor-patient appointments.</li>
                        <li>Developed both frontend and backend, including API integration and database functionality.</li>
                      </ul>
                    </div>

                    {/* Project 2 */}
                    <div className="pt-2 border-t border-gray-100 dark:border-zinc-800">
                      <div className="font-bold text-gray-900 dark:text-white">RiseManager — COD Order Management Platform</div>
                      <a href="https://risemanager.vercel.app/" target="_blank" rel="noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline text-[11px] my-1">
                        🔗 risemanager.vercel.app
                      </a>
                      <span className="text-gray-500 dark:text-gray-400 italic text-[10.5px]">
                        (React.js, Tailwind CSS)
                      </span>
                      <ul className="list-disc list-inside space-y-0.5 mt-1 text-gray-600 dark:text-gray-300 text-[11px]">
                        <li>Developed a landing page designed to manage, confirm, and deliver Cash on Delivery (COD) orders.</li>
                      </ul>
                    </div>

                    {/* Project 3 */}
                    <div className="pt-2 border-t border-gray-100 dark:border-zinc-800">
                      <div className="font-bold text-gray-900 dark:text-white">Unik — Cosmetics Brand Website</div>
                      <a href="https://unik-eosin.vercel.app/" target="_blank" rel="noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline text-[11px] my-1">
                        🔗 unik-eosin.vercel.app
                      </a>
                      <span className="text-gray-500 dark:text-gray-400 italic text-[10.5px]">
                        (React.js, Tailwind CSS, JavaScript)
                      </span>
                      <ul className="list-disc list-inside space-y-0.5 mt-1 text-gray-600 dark:text-gray-300 text-[11px]">
                        <li>Developed a modern responsive website for a cosmetics brand with reusable frontend components.</li>
                      </ul>
                    </div>

                    {/* Project 4 */}
                    <div className="pt-2 border-t border-gray-100 dark:border-zinc-800">
                      <div className="font-bold text-gray-900 dark:text-white">Baytee — Hotel Booking Platform</div>
                      <a href="https://baytee.vercel.app/" target="_blank" rel="noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline text-[11px] my-1">
                        🔗 baytee.vercel.app
                      </a>
                      <span className="text-gray-500 dark:text-gray-400 italic text-[10.5px]">
                        (React.js, Tailwind CSS, JavaScript)
                      </span>
                      <ul className="list-disc list-inside space-y-0.5 mt-1 text-gray-600 dark:text-gray-300 text-[11px]">
                        <li>Developed a responsive hotel booking platform focused on presenting accommodation information.</li>
                      </ul>
                    </div>

                    {/* Project 5 */}
                    <div className="pt-2 border-t border-gray-100 dark:border-zinc-800">
                      <div className="font-bold text-gray-900 dark:text-white">Carvo — Automotive Web Project</div>
                      <a href="http://carvo-mocha.vercel.app/" target="_blank" rel="noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline text-[11px] my-1">
                        🔗 carvo-mocha.vercel.app
                      </a>
                      <span className="text-gray-500 dark:text-gray-400 italic text-[10.5px]">
                        (React.js, Tailwind CSS, JavaScript)
                      </span>
                      <ul className="list-disc list-inside space-y-0.5 mt-1 text-gray-600 dark:text-gray-300 text-[11px]">
                        <li>Developed a responsive automotive-focused web interface using React.js and Tailwind CSS.</li>
                      </ul>
                    </div>

                    {/* Project 6 */}
                    <div className="pt-2 border-t border-gray-100 dark:border-zinc-800">
                      <div className="font-bold text-gray-900 dark:text-white">Artigiano DZ — E-commerce Project</div>
                      <a href="https://www.instagram.com/artigianodz/" target="_blank" rel="noreferrer" className="block text-blue-600 dark:text-blue-400 hover:underline text-[11px] my-1">
                        🔗 instagram.com/artigianodz
                      </a>
                      <span className="text-gray-500 dark:text-gray-400 italic text-[10.5px]">
                        (E-commerce, Web Development, Meta Ads)
                      </span>
                      <ul className="list-disc list-inside space-y-0.5 mt-1 text-gray-600 dark:text-gray-300 text-[11px]">
                        <li>Built and developed an online presence for a footwear e-commerce business.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Education & Languages */}
                <div className="pt-2 border-t border-gray-200 dark:border-zinc-800 space-y-3">
                  <div>
                    <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase mb-1 border-b-2 border-gray-800 dark:border-gray-400 pb-1">
                      Education
                    </h3>
                    <div className="font-bold text-gray-900 dark:text-white text-[11.5px]">Université Abou Bekr Belkaid — Tlemcen</div>
                    <div className="italic text-gray-600 dark:text-gray-400 text-[11px]">Licence in Computer Science</div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase mb-1 border-b-2 border-gray-800 dark:border-gray-400 pb-1">
                      Languages
                    </h3>
                    <ul className="space-y-0.5 text-[11px] text-gray-700 dark:text-gray-300">
                      <li><strong className="text-gray-900 dark:text-white">Arabic:</strong> Native</li>
                      <li><strong className="text-gray-900 dark:text-white">English:</strong> Basic to Intermediate (A2–B1)</li>
                    </ul>
                  </div>
                </div>

                {/* Download PDF Button */}
                <div className="pt-4 pb-2 text-center">
                  <a
                    href="/Issam_Kebdani_Resume.pdf"
                    download="Issam_Kebdani_Resume.pdf"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#007aff] hover:bg-blue-600 active:scale-95 text-white font-semibold rounded-2xl text-xs shadow-md transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Full Resume PDF</span>
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* ── Document Modal Sheet (For Reading Project .txt details) ─ */}
        {selectedTxt && (
          <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex flex-col justify-end animate-fadeIn">
            <div className="w-full max-h-[80%] min-h-0 bg-white dark:bg-[#1c1c1e] rounded-t-3xl flex flex-col shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-zinc-800 shrink-0">
                <div className="flex items-center gap-2">
                  <img src="/images/txt.png" alt="" className="w-5 h-5 object-contain" />
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    {selectedTxt.name}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedTxt(null)}
                  className="p-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400 active:scale-90"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable content */}
              <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-5 py-4 space-y-3 text-[12.5px] text-gray-700 dark:text-gray-300 leading-relaxed font-mono">
                {Array.isArray(selectedTxt.description) ? (
                  selectedTxt.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))
                ) : (
                  <p>{selectedTxt.description}</p>
                )}
              </div>

              {/* Bottom safe area */}
              <div className="shrink-0 h-4 bg-white dark:bg-[#1c1c1e]" />
            </div>
          </div>
        )}

        {/* ── Fullscreen License Image Preview Modal ──────────────── */}
        {previewImage && (
          <div className="absolute inset-0 z-50 bg-black/90 flex flex-col justify-between p-4 animate-fadeIn">
            <div className="flex items-center justify-between pt-4">
              <span className="text-white text-xs font-semibold truncate max-w-[280px]">
                {previewImage.name}
              </span>
              <button
                onClick={() => setPreviewImage(null)}
                className="w-8 h-8 rounded-full bg-zinc-800 text-white flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center p-2">
              <img
                src={previewImage.src}
                alt={previewImage.name}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
              />
            </div>

            <div className="text-center pb-2">
              <span className="text-zinc-400 text-[11px]">Tap ✕ to close</span>
            </div>
          </div>
        )}

        {/* ── iOS Home Indicator Bar ───────────────────────────────── */}
        <div className="w-full pt-1.5 pb-2 flex items-center justify-center shrink-0 z-50 bg-transparent">
          <button
            onClick={() => setCurrentScreen("home")}
            className="w-36 h-1 bg-black/50 dark:bg-white/50 rounded-full hover:bg-black/80 dark:hover:bg-white/80 transition-colors"
            title="Go to Home"
          />
        </div>

      </div>
    </div>
  );
};

export default MobileOS;
