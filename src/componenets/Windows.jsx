import React, { useState } from "react";
import { locations, workExperience, techStack, socials, photosLinks, gallery } from "../constant";
import { useWindowsStore } from "../store/window";
import useLocationStore from "../store/location";

export const FinderWindow = () => {
  const activeLocation = useLocationStore((state) => state.activeLocation);
  const setActiveLocation = useLocationStore((state) => state.setActiveLocation);
  const openWindow = useWindowsStore((state) => state.openWindow);

  const handleItemDoubleClick = (item) => {
    if (item.kind === "file") {
      if (item.fileType === "txt") {
        openWindow("txtfile", item);
      } else if (item.fileType === "img") {
        openWindow("imgfile", item);
      } else if (item.fileType === "pdf") {
        openWindow("resume", item);
      } else if (item.fileType === "url") {
        window.open(item.href, "_blank");
      }
    } else if (item.kind === "folder") {
      setActiveLocation(item);
    }
  };

  return (
    <div className="flex h-full text-zinc-800 dark:text-zinc-200">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Favorites</h3>
        <ul>
          {Object.keys(locations).map((key) => {
            const loc = locations[key];
            const isActive = activeLocation?.type === loc.type;
            return (
              <li
                key={key}
                onClick={() => setActiveLocation(loc)}
                className={isActive ? "active" : "not-active"}
              >
                <img src={loc.icon} alt={loc.name} className="dark:invert" />
                <p>{loc.name}</p>
              </li>
            );
          })}
        </ul>

        <h3 className="mt-6 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider px-3">Work</h3>
        <ul>
          {locations.work?.children?.map((project, index) => {
            const isActive = activeLocation?.id === project.id;
            return (
              <li
                key={project.id}
                onClick={() => setActiveLocation(project)}
                className={isActive ? "active" : "not-active"}
              >
                <img src="/icons/file.svg" alt="Project" className="dark:invert w-4 h-4 opacity-70" />
                <p>Project {index + 1}</p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Main Content Pane */}
      <ul className="content flex-1 relative min-h-[400px]">
        {activeLocation?.children?.map((item) => (
          <li
            key={item.id}
            onDoubleClick={() => handleItemDoubleClick(item)}
            className={`group absolute ${item.position}`}
          >
            <img
              src={item.icon}
              alt={item.name}
            />
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const SafariWindow = () => {
  return (
    <div className="w-full h-full bg-white dark:bg-zinc-950 overflow-auto">
      {/* Header Search Bar */}
      <div className="p-4 border-b border-gray-200 flex justify-center bg-gray-50 dark:bg-zinc-900/50">
        <div className="search">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search or enter website name"
            defaultValue="https://jsmastery.com/blog"
            disabled
          />
        </div>
      </div>

      {/* Blog Content */}
      <div className="blog">
        <h2>Latest Articles</h2>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-post">
              <img
                src={post.image}
                alt={post.title}
              />
              <div className="content">
                <p>{post.date}</p>
                <h3>{post.title}</h3>
                <a href={post.link} target="_blank" rel="noreferrer">
                  Read Article
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const TerminalWindow = () => {
  return (
    <div className="techstack">
      <div className="label">
        <span className="font-bold text-zinc-900 dark:text-white mr-2">@issam %</span>
        <span className="text-zinc-700 dark:text-zinc-300">show techstack</span>
      </div>

      <ul className="content">
        {techStack.map((stack, idx) => (
          <li key={idx} className="flex items-center">
            <span className="check">✓</span>
            <h3>{stack.category}</h3>
            <ul>
              {stack.items.map((item, i) => (
                <li key={i} className="text-zinc-800 dark:text-zinc-200">
                  {item}{i < stack.items.length - 1 ? "," : ""}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className="footnote">
        <p>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          5 of 5 stacks loaded successfully (100%)
        </p>
        <p>
          <svg viewBox="0 0 24 24" fill="currentColor" className="svg">
            <path d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.134.813l.947-.19a.75.75 0 01.9.725v8.25a.75.75 0 01-.6.735l-.947.19a9.75 9.75 0 01-6.725-.738l-.108-.054a8.25 8.25 0 00-5.134-.813l-1.838.46V21a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75z" />
          </svg>
          Render time: 6ms
        </p>
      </div>
    </div>
  );
};

export const ContactWindow = () => {
  return (
    <div className="p-8 flex flex-col items-center justify-center h-full bg-white dark:bg-zinc-950">
      <h3>Get in touch</h3>
      <ul>
        {socials.map((social) => (
          <li
            key={social.id}
            style={{ backgroundColor: social.bg }}
          >
            <a
              href={social.link}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={social.icon}
                alt={social.text}
                className="w-8 h-8 invert"
              />
              <p>{social.text}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const PhotosWindow = () => {
  const licenses = [
    { id: 1, name: "Participate at tailwind/next js workshop", src: "/license/clubesi.jpg" },
    { id: 2, name: "confirmateur license kayzo", src: "/license/kayzo.jpg" },
    { id: 3, name: "closer at MMG", src: "/license/mmg.jpg" },
    { id: 4, name: "Prompt Engineering", src: "/license/promptengeneering.png" },
    { id: 5, name: "Participate at Techinovator", src: "/license/techinovator.jpg" },
  ];

  const [tabs, setTabs] = useState([{ id: 1, selected: null }]);
  const [activeTabId, setActiveTabId] = useState(1);
  const [nextId, setNextId] = useState(2);

  const activeTab = tabs.find((t) => t.id === activeTabId) ?? tabs[0];

  const openLicenseInNewTab = (license) => {
    const existing = tabs.find((t) => t.selected?.id === license.id);
    if (existing) {
      setActiveTabId(existing.id);
      return;
    }
    const id = nextId;
    setNextId((n) => n + 1);
    setTabs((prev) => [...prev, { id, selected: license }]);
    setActiveTabId(id);
  };

  const addTab = () => {
    const id = nextId;
    setNextId((n) => n + 1);
    setTabs((prev) => [...prev, { id, selected: null }]);
    setActiveTabId(id);
  };

  const closeTab = (id, e) => {
    e.stopPropagation();
    setTabs((prev) => {
      const remaining = prev.filter((t) => t.id !== id);
      if (remaining.length === 0) {
        const freshId = nextId;
        setNextId((n) => n + 1);
        setActiveTabId(freshId);
        return [{ id: freshId, selected: null }];
      }
      if (id === activeTabId) {
        setActiveTabId(remaining[remaining.length - 1].id);
      }
      return remaining;
    });
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#1c1c1e] text-zinc-800 dark:text-zinc-200">
      {/* Tab bar */}
      <div className="flex items-end gap-[2px] px-1.5 sm:px-2 pt-1.5 sm:pt-2 bg-gray-100 dark:bg-[#2c2c2e] border-b border-gray-200 dark:border-gray-800 overflow-x-auto scrollbar-thin">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          const label = tab.selected ? tab.selected.name : "All Licenses";
          return (
            <div
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={`group relative flex items-center gap-1 sm:gap-1.5 min-w-[72px] sm:min-w-[100px] max-w-[110px] sm:max-w-[160px] shrink-0 px-2 sm:px-3 py-1 sm:py-1.5 rounded-t-lg cursor-pointer select-none transition-colors ${
                isActive
                  ? "bg-white dark:bg-[#1c1c1e] text-gray-800 dark:text-gray-100"
                  : "bg-gray-200/70 dark:bg-[#252527] text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-[#2a2a2c]"
              }`}
            >
              {tab.selected && (
                <img
                  src={tab.selected.src}
                  alt=""
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-sm object-cover shrink-0"
                />
              )}
              <span className="text-[10px] sm:text-[11.5px] font-medium truncate flex-1">
                {label}
              </span>
              {tabs.length > 1 && (
                <button
                  onClick={(e) => closeTab(tab.id, e)}
                  className="opacity-0 group-hover:opacity-100 sm:group-hover:opacity-100 flex items-center justify-center w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-opacity focus:outline-none shrink-0"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-2 h-2 sm:w-2.5 sm:h-2.5">
                    <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              )}
            </div>
          );
        })}

        <button
          onClick={addTab}
          className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-1.5 ml-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-200 dark:hover:bg-[#333] dark:hover:text-gray-200 transition-colors focus:outline-none shrink-0"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3 h-3 sm:w-3.5 sm:h-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>

      {/* Header */}
      {/* <div className="px-3 sm:px-5 pt-3 sm:pt-4 pb-2 border-b border-gray-100 dark:border-gray-800">
        <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
          Certifications &amp; Licenses — {licenses.length} items
        </p>
      </div> */}

      {/* Grid */}
      {!activeTab.selected ? (
        <div className="flex-1 overflow-auto p-3 sm:p-5">
          <div
            className="grid gap-3 sm:gap-4"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(140px, 170px))" }}
          >
            {licenses.map((item) => (
              <button
                key={item.id}
                onClick={() => openLicenseInNewTab(item)}
                className="group flex flex-col rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all duration-200 text-left bg-gray-50 dark:bg-[#252525] cursor-pointer focus:outline-none"
              >
                <div className="w-full aspect-video overflow-hidden bg-gray-100 dark:bg-[#333]">
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="px-2.5 py-1.5">
                  <p className="text-[11px] font-semibold text-gray-800 dark:text-gray-200 truncate">
                    {item.name}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Fullscreen preview */
        <div className="flex-1 flex flex-col overflow-hidden min-h-0">
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#252525]">
            <button
              onClick={() => closeTab(activeTab.id, { stopPropagation: () => {} })}
              className="flex items-center gap-1 text-[11px] sm:text-[12px] text-blue-500 hover:text-blue-600 transition-colors cursor-pointer focus:outline-none shrink-0"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3 h-3 sm:w-3.5 sm:h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              <span className="hidden xs:inline">All Licenses</span>
            </button>
            <span className="text-[11px] sm:text-[12px] text-gray-400 dark:text-gray-500 truncate">
              / {activeTab.selected.name}
            </span>
          </div>
          <div className="flex-1 overflow-auto flex items-center justify-center p-3 sm:p-6 bg-white dark:bg-[#1c1c1e] min-h-0">
            <img
              src={activeTab.selected.src}
              alt={activeTab.selected.name}
              className="max-w-full max-h-full object-contain rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
            />
          </div>
        </div>
      )}
    </div>
  );
};


export const ResumeWindow = () => {
  return (
    <div className="w-full h-full bg-zinc-100 dark:bg-zinc-900 flex flex-col items-center justify-center p-8 text-zinc-800 dark:text-zinc-200 min-h-[300px]">
      <div className="text-center space-y-4 max-w-sm">
        <div className="text-5xl">📄</div>
        <h3 className="text-lg font-bold">Resume.pdf</h3>
        <p className="text-sm text-zinc-500">
          Open or download the resume to learn more about my education and experience.
        </p>
        <a
          href="/Issam_Kebdani_Resume.pdf"
          download="Issam_Kebdani_Resume.pdf"
          className="inline-block px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
};

export const TxtFileWindow = ({ data }) => {
  if (!data) return null;

  return (
    <div className="w-full h-full bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 p-6 font-mono overflow-auto">
      <div className="space-y-4">
        {data.subtitle && (
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-100 dark:border-zinc-800 pb-2">
            {data.subtitle}
          </p>
        )}
        <div className="space-y-3 leading-relaxed text-sm text-zinc-750 dark:text-zinc-300 whitespace-pre-wrap">
          {Array.isArray(data.description)
            ? data.description.map((para, i) => <p key={i}>{para}</p>)
            : data.description}
        </div>
      </div>
    </div>
  );
};

export const ImgFileWindow = ({ data }) => {
  if (!data) return null;

  return (
    <div className="w-full h-full bg-zinc-100 dark:bg-zinc-900 flex flex-col">
      <div className="preview flex-1 flex items-center justify-center p-4">
        <img
          src={data.imageUrl}
          alt={data.name}
          className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-800"
        />
      </div>
    </div>
  );
};
