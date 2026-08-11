// import React from "react";
// import { useWindowsStore } from "../store/window";

// const DesktopIcons = () => {
//   const openWindow = useWindowsStore((state) => state.openWindow);

//   const desktopItems = [
//     { key: "work", label: "Work", icon: "/icons/work.svg", position: "top-10 right-10" },
//     { key: "about", label: "About me", icon: "/icons/info.svg", position: "top-32 right-10" },
//     { key: "resume", label: "Resume", icon: "/icons/file.svg", position: "top-54 right-10" },
//   ];

//   const handleDoubleClick = (key) => {
//     openWindow("finder");
//   };

//   return (
//     <section id="home" className="absolute inset-0 pointer-events-none z-0">
//       <ul className="pointer-events-auto">
//         {desktopItems.map((item) => (
//           <li
//             key={item.key}
//             onDoubleClick={() => handleDoubleClick(item.key)}
//             className={`absolute ${item.position} group flex flex-col items-center gap-1.5 cursor-pointer text-center w-20`}
//           >
//             <img
//               src={item.icon}
//               alt={item.label}
//               className="w-12 h-12 p-1 group-hover:bg-black/15 dark:group-hover:bg-white/10 rounded-lg transition-colors pointer-events-none drop-shadow"
//             />
//             <p className="text-xs text-white drop-shadow font-medium px-1 rounded group-hover:bg-blue-500 transition-colors select-none">
//               {item.label}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default DesktopIcons;
