import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useWindowsStore } from "../store/window";
import WindowControle from "../componenets/WindowControle";

gsap.registerPlugin(Draggable);

export const windowWrapper = (WrappedComponent) => {
    return function WindowComponent(props) {
        const { windowKey, title, customFrame = false, windowStyle = {}, ...rest } = props;
        const windowRef = useRef(null);
        const draggableRef = useRef(null);

        const windows = useWindowsStore((state) => state.windows);
        const activeWindow = useWindowsStore((state) => state.activeWindow);
        const focusWindow = useWindowsStore((state) => state.focusWindow);

        const windowData = windows[windowKey];

        const isOpen = windowData?.isOpen;
        const zIndex = windowData?.zIndex;
        const isMinimized = windowData?.isMinimized;
        const isMaximized = windowData?.isMaximized;

        // Handle focus on click
        const handleWindowClick = () => {
            focusWindow(windowKey);
        };

        // GSAP Draggable initialization and cleanup
        useEffect(() => {
            if (!isOpen || !windowRef.current) return;

            // customFrame components use .drag-handle-{key} on their own toolbar
            const triggerSelector = `.drag-handle-${windowKey}`;
            const dragInstance = Draggable.create(windowRef.current, {
                trigger: triggerSelector,
                type: "x,y",
                edgeResistance: 0.65,
                onPress: () => {
                    focusWindow(windowKey);
                },
            });

            draggableRef.current = dragInstance[0];

            return () => {
                if (draggableRef.current) {
                    draggableRef.current.kill();
                    draggableRef.current = null;
                }
            };
        }, [isOpen, windowKey, focusWindow]);

        // GSAP scale and entrance animations
        useEffect(() => {
            if (!isOpen || !windowRef.current) return;

            if (isMinimized) {
                gsap.to(windowRef.current, {
                    scale: 0.15,
                    opacity: 0,
                    y: window.innerHeight - 100,
                    duration: 0.45,
                    ease: "power2.inOut",
                    onComplete: () => {
                        gsap.set(windowRef.current, { visibility: "hidden" });
                    },
                });
            } else {
                gsap.set(windowRef.current, { visibility: "visible" });
                gsap.fromTo(
                    windowRef.current,
                    {
                        scale: 0.85,
                        opacity: 0,
                    },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.4,
                        ease: "back.out(1.1)",
                    }
                );
            }
        }, [isMinimized, isOpen]);

        // Ensure it renders only when isOpen is true
        if (!isOpen) return null;

        const isActive = activeWindow === windowKey;

        // Apply absolute positioning and dynamic styling
        const windowStyles = {
            position: "absolute",
            zIndex: zIndex,
            ...windowStyle,
            ...(isMaximized
                ? {
                    top: "32px",
                    left: 0,
                    width: "100vw",
                    height: "calc(100vh - 32px - 80px)",
                    transform: "none",
                }
                : {}),
        };

        return (
            <div
                ref={windowRef}
                id={windowKey}
                onClick={handleWindowClick}
                style={windowStyles}
                className={`fixed transition-shadow duration-300 ${isActive
                        ? "shadow-[0_25px_60px_-12px_rgba(0,0,0,0.45)]"
                        : "shadow-xl"
                    } rounded-xl overflow-hidden flex flex-col`}
            >
                {customFrame ? (
                    /* The wrapped component owns its entire frame including traffic lights */
                    <WrappedComponent
                        data={windowData?.data}
                        windowKey={windowKey}
                        {...rest}
                    />
                ) : (
                    <>
                        {/* Generic macOS header */}
                        <div
                            className={`drag-handle-${windowKey} cursor-move relative flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-[#2c2c2e] border-b border-gray-200 dark:border-gray-700 select-none text-sm text-gray-400`}
                        >
                            <WindowControle appId={windowKey} />
                            <h2 className="absolute left-1/2 -translate-x-1/2 text-[13px] font-semibold text-zinc-600 dark:text-zinc-300 pointer-events-none">
                                {title}
                            </h2>
                            <div className="w-14" />
                        </div>

                        {/* Window Content */}
                        <div className="flex-1 overflow-auto bg-white dark:bg-zinc-950">
                            <WrappedComponent data={windowData?.data} windowKey={windowKey} {...rest} />
                        </div>
                    </>
                )}
            </div>
        );
    };
};

export default windowWrapper;

