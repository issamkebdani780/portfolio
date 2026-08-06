import React, { useState } from "react";
import NavBar from "./componenets/NavBar";
import Welcome from "./componenets/Welcome";

const App = () => {
  const [activeApp, setActiveApp] = useState(null);
  const [theme, setTheme] = useState("dark");

  return (
    <main className={`w-screen h-screen overflow-hidden relative select-none font-georama ${theme === "dark" ? "dark" : ""}`}>
      {/* macOS Top Navigation Bar */}
      <NavBar
        activeApp={activeApp}
        setActiveApp={setActiveApp}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Main Desktop Center Content */}
      <Welcome />
    </main>
  );
};

export default App;
