import React, { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";
import { navLinks } from "../constant";
import { useWindowsStore } from "../store/window";

const NavBar = ({ theme = "light", setTheme }) => {
  const activeWindow = useWindowsStore((state) => state.activeWindow);
  const openWindow = useWindowsStore((state) => state.openWindow);

  const [currentTime, setCurrentTime] = useState(dayjs().format("ddd MMM D h:mm A"));
  const [isModeOpen, setIsModeOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs().format("ddd MMM D h:mm A"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsModeOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (type) => {
    openWindow(type);
  };

  const handleThemeChange = (newTheme) => {
    if (setTheme) {
      setTheme(newTheme);
    }
    setIsModeOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-1.5 bg-white/40 dark:bg-black/40 backdrop-blur-xl border-b border-white/20 select-none text-sm text-gray-900 dark:text-white transition-colors duration-300">
      {/* Left Menu Section */}
      <div className="flex items-center gap-4">
        {/* Apple Logo / Portfolio Identifier */}
        <div className="flex items-center gap-2 cursor-pointer font-semibold hover:opacity-80 transition-opacity">
          <span className="text-base leading-none"></span>
          <span className="font-bold text-sm tracking-tight">Issam's Portfolio</span>
        </div>

        {/* Navigation Items */}
        <ul className="flex items-center gap-4 max-sm:hidden">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.type)}
                className={`text-xs font-medium cursor-pointer transition-colors duration-150 px-2 py-0.5 rounded ${activeWindow === link.type
                    ? "bg-white/30 dark:bg-white/20 font-semibold"
                    : "hover:bg-white/20 dark:hover:bg-white/10"
                  }`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Menu Section: Status Icons & Live Clock */}
      <div className="flex items-center gap-3.5 relative" ref={dropdownRef}>
        {/* Wifi Icon */}
        <img
          src="/icons/wifi.svg"
          alt="wifi"
          className="w-4 h-4 cursor-pointer hover:opacity-75 transition-opacity dark:invert"
        />

        {/* Search Icon */}
        <img
          src="/icons/search.svg"
          alt="search"
          className="w-3.5 h-3.5 cursor-pointer hover:opacity-75 transition-opacity dark:invert"
        />

        {/* User Icon */}
        <img
          src="/icons/user.svg"
          alt="user"
          className="w-3.5 h-3.5 cursor-pointer hover:opacity-75 transition-opacity dark:invert"
        />

        {/* Control Center / Theme Switcher Icon */}
        <div className="relative">
          <button
            onClick={() => setIsModeOpen((prev) => !prev)}
            className={`p-1 rounded transition-colors ${isModeOpen ? "bg-white/30 dark:bg-white/20" : "hover:bg-white/20 dark:hover:bg-white/10"
              }`}
            title="Control Center"
          >
            <img
              src="/icons/mode.svg"
              alt="mode"
              className="w-4 h-4 cursor-pointer dark:invert"
            />
          </button>

          {/* Theme Dropdown Menu */}
          {isModeOpen && (
            <div className="absolute top-9 left-1/2 -translate-x-1/2 w-[150px] flex flex-col items-center z-50 animate-fadeIn">
              {/* Arrow SVG */}
              <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative top-[1px] z-20">
                <path d="M9 0L18 9H0L9 0Z" className="fill-[#e4e5f1]/90 dark:fill-[#252525]/90" />
              </svg>
              
              <div className="w-full bg-[#e4e5f1]/90 dark:bg-[#252525]/90 backdrop-blur-3xl border border-white/60 dark:border-white/10 rounded-[10px] shadow-[0_10px_40px_rgba(0,0,0,0.2)] p-1.5 flex flex-col gap-0.5 relative z-10">
                <button
                  onClick={() => handleThemeChange("light")}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-[6px] text-left transition-colors ${theme === "light"
                      ? "bg-[#007aff] text-white"
                      : "text-gray-800 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/10"
                    }`}
                >
                  <span className="text-[12.5px] font-medium tracking-wide">Light Mode</span>
                  {theme === "light" && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>}
                </button>
                <button
                  onClick={() => handleThemeChange("dark")}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-[6px] text-left transition-colors ${theme === "dark"
                      ? "bg-[#007aff] text-white"
                      : "text-gray-800 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/10"
                    }`}
                >
                  <span className="text-[12.5px] font-medium tracking-wide">Dark Mode</span>
                  {theme === "dark" && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Live Date Time Display */}
        <time className="text-xs font-semibold text-gray-900 dark:text-white tracking-tight ml-1">
          {currentTime}
        </time>
      </div>
    </nav>
  );
};

export default NavBar;
