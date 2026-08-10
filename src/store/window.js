import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { WINDOW_CONFIG, INITIAL_Z_INDEX } from "../constant";

export const useWindowsStore = create()(
  immer((set) => ({
    windows: Object.keys(WINDOW_CONFIG).reduce((acc, id) => {
      acc[id] = {
        isOpen: WINDOW_CONFIG[id].isOpen,
        zIndex: WINDOW_CONFIG[id].zIndex,
        data: WINDOW_CONFIG[id].data,
        isMinimized: false,
        isMaximized: false,
      };
      return acc;
    }, {}),
    maxZIndex: INITIAL_Z_INDEX,
    activeWindow: null,

    openWindow: (id, data = null) =>
      set((state) => {
        if (!state.windows[id]) return;
        state.maxZIndex += 1;
        state.windows[id].isOpen = true;
        state.windows[id].isMinimized = false;
        state.windows[id].zIndex = state.maxZIndex;
        state.windows[id].data = data;
        state.activeWindow = id;
      }),

    closeWindow: (id) =>
      set((state) => {
        if (!state.windows[id]) return;
        state.windows[id].isOpen = false;
        state.windows[id].isMinimized = false;
        state.windows[id].isMaximized = false;
        state.windows[id].zIndex = INITIAL_Z_INDEX;
        state.windows[id].data = null;
        if (state.activeWindow === id) {
          state.activeWindow = null;
        }
      }),

    focusWindow: (id) =>
      set((state) => {
        if (!state.windows[id]) return;
        state.maxZIndex += 1;
        state.windows[id].isOpen = true;
        state.windows[id].isMinimized = false;
        state.windows[id].zIndex = state.maxZIndex;
        state.activeWindow = id;
      }),

    minimizeWindow: (id) =>
      set((state) => {
        if (!state.windows[id]) return;
        state.windows[id].isMinimized = true;
        if (state.activeWindow === id) {
          state.activeWindow = null;
        }
      }),

    toggleMaximize: (id) =>
      set((state) => {
        if (!state.windows[id]) return;
        state.windows[id].isMaximized = !state.windows[id].isMaximized;
      }),
  }))
);
