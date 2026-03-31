import { create } from 'zustand';

type MacBookState = {
  color: string;
  setColor: (color: string) => void;
  scale: number;
  setScale: (scale: number) => void;
  texture: string;
  setTexture: (texture: string) => void;
  reset: () => void;
};

const useMacBookStore = create<MacBookState>((set) => ({
  color: '#adb5bd',
  setColor: (color: string) => set({ color }),

  scale: 0.06,
  setScale: (scale: number) => set({ scale }),

  texture: '/videos/feature-1.mp4',
  setTexture: (texture: string) => set({ texture }),

  reset: () => set({ color: '#adb5bd', scale: 0.06, texture: '/videos/feature-1.mp4' }),
}));

export default useMacBookStore;
