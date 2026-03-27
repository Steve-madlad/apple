import { create } from 'zustand';

type MacBookState = {
  color: string;
  setColor: (color: string) => void;
  scale: number;
  setScale: (scale: number) => void;
  reset: () => void;
};

const useMacBookStore = create<MacBookState>((set) => ({
  color: '#adb5bd',
  setColor: (color: string) => set({ color }),

  scale: 0.06,
  setScale: (scale: number) => set({ scale }),

  reset: () => set({ color: '#adb5bd', scale: 0.06 }),
}));

export { useMacBookStore };
