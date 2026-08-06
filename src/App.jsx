import React, { useState } from "react";
import NavBar from "./componenets/NavBar";
import Welcome from "./componenets/Welcome";
import Dock from "./componenets/Dock";

const App = () => {
  const [activeApp, setActiveApp] = useState(null);
  const [openApps, setOpenApps] = useState([]);
  const [theme, setTheme] = useState("dark");

  const handleSetActiveApp = (appId) => {
    setActiveApp(appId);
    if (appId && !openApps.includes(appId)) {
      setOpenApps((prev) => [...prev, appId]);
    }
  };

  return (
    <main className={`w-screen h-screen overflow-hidden relative select-none font-georama ${theme === "dark" ? "dark" : ""}`}>
      {/* macOS Top Navigation Bar */}
      <NavBar
        activeApp={activeApp}
        setActiveApp={handleSetActiveApp}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Main Desktop Center Content */}
      <Welcome />

      {/* macOS Dock */}
      <Dock
        activeApp={activeApp}
        setActiveApp={handleSetActiveApp}
        openApps={openApps}
      />
    </main>
  );
};

export default App;
