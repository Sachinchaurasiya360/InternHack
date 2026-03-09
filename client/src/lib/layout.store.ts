import { create } from "zustand";

interface LayoutStore {
  immersive: boolean;
  setImmersive: (immersive: boolean) => void;
}

export const useLayoutStore = create<LayoutStore>((set) => ({
  immersive: false,
  setImmersive: (immersive) => set({ immersive }),
}));
