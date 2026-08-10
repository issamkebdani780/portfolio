import React, { useState } from "react";
import NavBar from "./componenets/NavBar";
import Welcome from "./componenets/Welcome";
import Dock from "./componenets/Dock";
import DesktopIcons from "./componenets/DesktopIcons";
import { windowWrapper } from "./hoc/WindowWrapper";
import { useWindowsStore } from "./store/window";
import {
  FinderWindow,
  TerminalWindow,
  ContactWindow,
  PhotosWindow,
  ResumeWindow,
  TxtFileWindow,
  ImgFileWindow,
} from "./componenets/Windows";
import Safari from "./componenets/Safari";

// Wrap window content components with HOC
const FinderWithWrapper = windowWrapper(FinderWindow);
const PhotosWithWrapper = windowWrapper(PhotosWindow);
const TerminalWithWrapper = windowWrapper(TerminalWindow);
const ContactWithWrapper = windowWrapper(ContactWindow);
const ResumeWithWrapper = windowWrapper(ResumeWindow);
const TxtFileWithWrapper = windowWrapper(TxtFileWindow);
const ImgFileWithWrapper = windowWrapper(ImgFileWindow);

const App = () => {
  const windows = useWindowsStore((state) => state.windows);
  const [theme, setTheme] = useState("dark");

  return (
    <main className={`w-screen h-screen overflow-hidden relative select-none font-georama ${theme === "dark" ? "dark" : ""}`}>
      {/* macOS Top Navigation Bar */}
      <NavBar theme={theme} setTheme={setTheme} />

      {/* Main Desktop Center Content */}
      <Welcome />

      {/* Desktop Files and Folders Icons */}
      <DesktopIcons />

      {/* macOS Interactive Windows wrapped in HOC */}
      <FinderWithWrapper windowKey="finder" title="Portfolio" />
      <Safari windowKey="safari" title="Articles" customFrame={true} windowStyle={{ width: 520 }} />
      <PhotosWithWrapper windowKey="photos" title="Gallery" />
      <TerminalWithWrapper windowKey="terminal" title="Terminal" />
      <ContactWithWrapper windowKey="contact" title="Contact" />
      <ResumeWithWrapper windowKey="resume" title="Resume" />

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
