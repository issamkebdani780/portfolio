import React, { useRef, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { dockApps } from "../constant";

const BASE_SIZE = 56;
const MAX_SIZE = 84;
const DISTANCE_RANGE = 150;

const Dock = ({ activeApp, setActiveApp, openApps = [] }) => {
  const dockRef = useRef(null);
  const iconRefs = useRef([]);
  const bouncingRefs = useRef(new Set());

  // Entrance Animation — dock slides up from below with a spring
  useGSAP(() => {
    if (!dockRef.current) return;

    gsap.fromTo(
      dockRef.current,
      { y: 100, opacity: 0, scale: 0.92 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        delay: 0.6,
        ease: "back.out(1.4)",
      }
    );
  }, []);

  // macOS-style magnification: cosine curve interpolation
  const handleMouseMove = useCallback((e) => {
    if (!dockRef.current) return;

    iconRefs.current.forEach((iconEl) => {
      if (!iconEl) return;
      const rect = iconEl.getBoundingClientRect();
      const iconCenterX = rect.left + rect.width / 2;
      const distance = Math.abs(e.clientX - iconCenterX);

      let targetSize = BASE_SIZE;
      if (distance < DISTANCE_RANGE) {
        const scale = Math.cos((distance / DISTANCE_RANGE) * (Math.PI / 2));
        targetSize = BASE_SIZE + (MAX_SIZE - BASE_SIZE) * scale;
      }

      gsap.to(iconEl, {
        width: targetSize,
        height: targetSize,
        duration: 0.2,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
  }, []);

  // Reset all icons to base size
  const handleMouseLeave = useCallback(() => {
    iconRefs.current.forEach((iconEl) => {
      if (!iconEl) return;
      gsap.to(iconEl, {
        width: BASE_SIZE,
        height: BASE_SIZE,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
  }, []);

  // Click handler with macOS dock bounce animation
  const handleAppClick = useCallback(
    (app, index) => {
      const iconEl = iconRefs.current[index];

      // Bounce animation (macOS-style repeated bounce for opening)
      if (iconEl && !bouncingRefs.current.has(app.id)) {
        bouncingRefs.current.add(app.id);

        const isAlreadyOpen =
          openApps.includes(app.id) || activeApp === app.id;

        if (isAlreadyOpen) {
          // Single quick bounce for already-open apps
          gsap
            .timeline({
              onComplete: () => bouncingRefs.current.delete(app.id),
            })
            .to(iconEl, { y: -20, duration: 0.15, ease: "power2.out" })
            .to(iconEl, { y: 0, duration: 0.3, ease: "bounce.out" });
        } else {
          // Double bounce for opening a new app — classic macOS behavior
          gsap
            .timeline({
              onComplete: () => bouncingRefs.current.delete(app.id),
            })
            .to(iconEl, { y: -28, duration: 0.18, ease: "power2.out" })
            .to(iconEl, { y: 0, duration: 0.2, ease: "power2.in" })
            .to(iconEl, { y: -16, duration: 0.14, ease: "power2.out" })
            .to(iconEl, { y: 0, duration: 0.25, ease: "bounce.out" });
        }
      }

      if (app.canOpen && setActiveApp) {
        setActiveApp(app.id === activeApp ? null : app.id);
      }
    },
    [activeApp, openApps, setActiveApp]
  );

  // Find the separator index (before Trash / last non-openable app)
  const separatorIndex = dockApps.findIndex((app) => !app.canOpen);

  return (
    <>
      <section id="dock">
        <div
          ref={dockRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="dock-container"
          style={{ opacity: 0 }}
        >
          {dockApps.map((app, index) => {
            const isOpen = openApps.includes(app.id) || activeApp === app.id;

            return (
              <React.Fragment key={app.id}>
                {/* Separator line before Trash section */}
                {index === separatorIndex && separatorIndex > 0 && (
                  <div className="w-px h-10 bg-white/30 dark:bg-white/20 mx-0.5 self-center rounded-full flex-shrink-0" />
                )}

                <div className="relative flex flex-col items-center">
                  {/* Dock Icon */}
                  <button
                    ref={(el) => (iconRefs.current[index] = el)}
                    onClick={() => handleAppClick(app, index)}
                    data-tooltip-id="dock-tooltip"
                    data-tooltip-content={app.name}
                    className="dock-icon"
                    style={{
                      width: `${BASE_SIZE}px`,
                      height: `${BASE_SIZE}px`,
                    }}
                  >
                    <img
                      src={`/images/${app.icon}`}
                      alt={app.name}
                      draggable={false}
                    />
                  </button>

                  {/* Active Indicator Dot */}
                  <span
                    className={`w-1 h-1 rounded-full mt-0.5 transition-all duration-300 ${
                      isOpen
                        ? "bg-white/90 shadow-[0_0_6px_rgba(255,255,255,0.7)] scale-100 opacity-100"
                        : "opacity-0 scale-0"
                    }`}
                  />
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </section>

      {/* Shared tooltip instance — macOS style */}
      <Tooltip
        id="dock-tooltip"
        className="tooltip"
        place="top"
        offset={12}
        delayShow={150}
        delayHide={0}
        float={false}
        noArrow={false}
      />
    </>
  );
};

export default Dock;
