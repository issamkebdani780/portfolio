import React, { useState } from "react";
import { locations, blogPosts, techStack, socials, photosLinks, gallery } from "../constant";
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
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="flex h-full text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-950">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Photos</h2>
        <ul>
          {photosLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <li
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={isActive ? "active" : ""}
              >
                <img src={link.icon} alt={link.title} />
                <p>{link.title}</p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Gallery content */}
      <div className="gallery">
        <ul>
          {gallery.map((item) => (
            <li key={item.id}>
              <img
                src={item.img}
                alt="Gallery content"
              />
            </li>
          ))}
        </ul>
      </div>
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
          href="/resume.pdf"
          download
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
