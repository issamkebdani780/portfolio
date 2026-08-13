import React, { useState } from "react";
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
} from "./componenets/Windows";
import Safari from "./componenets/Safari";
import Resume from "./componenets/Resume";
import TxtFileWindow from "./windows/text";
import ImgFileWindow from "./windows/Image";
import Contact from "./componenets/Conatct";

// Wrap window content components with HOC
const FinderWithWrapper = windowWrapper(FinderWindow);
const PhotosWithWrapper = windowWrapper(PhotosWindow);
const TerminalWithWrapper = windowWrapper(TerminalWindow);

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
      <Home />

      {/* macOS Interactive Windows wrapped in HOC */}
      <FinderWithWrapper windowKey="finder" title="Portfolio" />
      <Safari windowKey="safari" title="Articles" customFrame={true} windowStyle={{ width: 520 }} />
      <PhotosWithWrapper windowKey="photos" title="Gallery" />
      <TerminalWithWrapper windowKey="terminal" title="Terminal" />
      <Contact windowKey="contact" title="Contact Me" customFrame={true} windowStyle={{ width: 540 }} />

      {/* Resume — self-contained customFrame with HTML layout */}
      <Resume windowKey="resume" title="Resume.pdf" customFrame={true} windowStyle={{ width: 700 }} />

      <TxtFileWindow
        windowKey="txtfile"
        title={windows.txtfile?.data?.name || "Document"}
        customFrame={true}
      />

      <ImgFileWindow
        windowKey="imgfile"
        title={windows.imgfile?.data?.name || "Image Preview"}
        customFrame={true}
      />

      {/* macOS Dock */}
      <Dock />
    </main>
  );
};

export default App;
