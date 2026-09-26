import React, { useState, useEffect } from "react";
import NavBar from "./componenets/NavBar";
import Welcome from "./componenets/Welcome";
import Dock from "./componenets/Dock";
import Home from "./componenets/Home";
import { windowWrapper } from "./hoc/WindowWrapper";
import { useWindowsStore } from "./store/window";
import {
  FinderWindow,
  TerminalWindow,
  PhotosWindow,
  TxtFileWindow,
  ImgFileWindow,
} from "./componenets/Windows";
import Safari from "./componenets/Safari";
import Resume from "./componenets/Resume";
import Contact from "./componenets/Conatct";

import MobileOS from "./componenets/MobileOS";

// Wrap window content components with HOC
const FinderWithWrapper = windowWrapper(FinderWindow);
const PhotosWithWrapper = windowWrapper(PhotosWindow);
const TerminalWithWrapper = windowWrapper(TerminalWindow);
const TxtFileWithWrapper = windowWrapper(TxtFileWindow);
const ImgFileWithWrapper = windowWrapper(ImgFileWindow);

const App = () => {
  const windows = useWindowsStore((state) => state.windows);
  const [theme, setTheme] = useState("light");
  const [isMobileScreen, setIsMobileScreen] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });
  const [forceView, setForceView] = useState(null); // null | "mobile" | "desktop"

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showMobile = forceView !== null ? forceView === "mobile" : isMobileScreen;

  if (showMobile) {
    return (
      <main className="w-screen h-screen overflow-hidden relative select-none font-georama bg-black">
        <MobileOS
          theme={theme}
          setTheme={setTheme}
          onSwitchToDesktop={() => setForceView("desktop")}
        />
      </main>
    );
  }

  return (
    <main className="w-screen h-screen overflow-hidden relative select-none font-georama">
      {/* macOS Top Navigation Bar */}
      <NavBar
        theme={theme}
        setTheme={setTheme}
        onToggleMobile={() => setForceView("mobile")}
      />

      {/* Main Desktop Center Content */}
      <Welcome />

      {/* Desktop Files and Folders Icons */}
      <Home />

      {/* macOS Interactive Windows wrapped in HOC */}
      <FinderWithWrapper windowKey="finder" title="Portfolio" />
      <Safari windowKey="safari" title="Articles" customFrame={true} windowStyle={{ width: 520 }} />
      <PhotosWithWrapper
        windowKey="photos"
        title="Gallery"
        windowStyle={{ width: 620, height: 560, top: 120, left: 100 }}
      />
      <TerminalWithWrapper windowKey="terminal" title="Terminal" />
      <Contact windowKey="contact" title="Contact Me" customFrame={true} windowStyle={{ width: 540 }} />

      {/* Resume — self-contained customFrame with HTML layout */}
      <Resume windowKey="resume" title="Resume.pdf" customFrame={true} windowStyle={{ width: 700 }} />

      <TxtFileWithWrapper
        windowKey="txtfile"
        title={windows.txtfile?.data?.name || "Document"}
      />

      <ImgFileWithWrapper
        windowKey="imgfile"
        title={windows.imgfile?.data?.name || "Image Preview"}
      />

      {/* macOS Dock */}
      <Dock />
    </main>
  );
};

export default App;
