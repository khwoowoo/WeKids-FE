import { create } from "zustand";

export const useMemoStore = create((set) => ({
  memo: "",
  setMemo: (newMemo) => set(() => ({ memo: newMemo })),
}));
