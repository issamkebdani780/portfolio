import React, { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";
import { navLinks } from "../constant";

const NavBar = ({ activeApp, setActiveApp, theme = "dark", setTheme }) => {
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
    if (setActiveApp) {
      setActiveApp(type);
    }
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
          <span className="text-base leading-none"></span>
          <span className="font-bold text-sm tracking-tight">Issam's Portfolio</span>
        </div>

        {/* Navigation Items */}
        <ul className="flex items-center gap-4 max-sm:hidden">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.type)}
                className={`text-xs font-medium cursor-pointer transition-colors duration-150 px-2 py-0.5 rounded ${
                  activeApp === link.type
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
        <button
          onClick={() => setIsModeOpen((prev) => !prev)}
          className={`p-1 rounded transition-colors ${
            isModeOpen ? "bg-white/30 dark:bg-white/20" : "hover:bg-white/20 dark:hover:bg-white/10"
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
          <div className="absolute top-8 right-0 w-44 bg-white/70 dark:bg-gray-900/80 backdrop-blur-2xl border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-2xl p-1.5 z-50 text-xs font-medium animate-fadeIn">
            <button
              onClick={() => handleThemeChange("light")}
              className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-left transition-colors ${
                theme === "light"
                  ? "bg-blue-500 text-white font-semibold"
                  : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/60"
              }`}
            >
              <span>Light Mode</span>
              {theme === "light" && <span>✓</span>}
            </button>
            <button
              onClick={() => handleThemeChange("dark")}
              className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-left transition-colors mt-0.5 ${
                theme === "dark"
                  ? "bg-blue-500 text-white font-semibold"
                  : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/60"
              }`}
            >
              <span>Dark Mode</span>
              {theme === "dark" && <span>✓</span>}
            </button>
          </div>
        )}

        {/* Live Date Time Display */}
        <time className="text-xs font-semibold text-gray-900 dark:text-white tracking-tight ml-1">
          {currentTime}
        </time>
      </div>
    </nav>
  );
};

export default NavBar;
