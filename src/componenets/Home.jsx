import React, { useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { locations } from "../constant";
import { useWindowsStore } from "../store/window";
import useLocationStore from "../store/location";

gsap.registerPlugin(Draggable);

const Home = () => {
  const openWindow = useWindowsStore((state) => state.openWindow);
  const setActiveLocation = useLocationStore((state) => state.setActiveLocation);

  // We get the project folders from the Work location
  const projects = locations.work?.children || [];

  // Make folders draggable
  useEffect(() => {
    const draggables = Draggable.create(".desktop-folder", {
      type: "x,y",
      bounds: document.body, // Prevent dragging completely off-screen
      edgeResistance: 0.65,
    });

    return () => {
      draggables.forEach((d) => d.kill());
    };
  }, []);

  const handleDoubleClick = (project) => {
    // Set the Finder's active location to this specific project folder
    setActiveLocation(project);
    // Open the Finder window
    openWindow("finder");
  };

  return (
    <section className="absolute inset-0 pointer-events-none z-0">
      <ul className="pointer-events-auto h-full w-full relative">
        {projects.map((project) => (
          <li
            key={project.id}
            onDoubleClick={() => handleDoubleClick(project)}
            className={`desktop-folder absolute ${project.windowPosition} group flex flex-col items-center gap-1.5 cursor-pointer text-center w-28`}
          >
            <img
              src={project.icon} // e.g. "/images/folder.png"
              alt={project.name}
              className="w-16 h-16 p-1 group-hover:bg-black/15 dark:group-hover:bg-white/10 rounded-lg transition-colors pointer-events-none drop-shadow"
            />
            <p className="text-[11px] text-white drop-shadow-md font-medium px-1.5 py-0.5 rounded group-hover:bg-blue-500 transition-colors select-none leading-tight line-clamp-2">
              {project.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
