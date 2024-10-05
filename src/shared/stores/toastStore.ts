import { create } from 'zustand';

export type ToastSize = 'sm' | 'lg';
export interface ToastMessage {
  content: string;
  size: ToastSize;
}

export interface ToastState {
  toast: ToastMessage | null;
  setToast: (toast: ToastMessage) => void;
  clearToast: () => void;
}

export const useToastStore: () => ToastState = create<ToastState>()((set) => ({
  toast: null,
  setToast: (toast: ToastMessage) => set({ toast }),
  clearToast: () => set({ toast: null }),
}));
