import { create } from "zustand";

export const useMindmapStore = create((set) => ({
  selectedNode: null,
  setSelectedNode: (node) => set({ selectedNode: node }),
}));
