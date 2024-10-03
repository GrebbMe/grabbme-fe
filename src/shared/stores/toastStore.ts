import { create } from 'zustand';

export type ToastSize = 'sm' | 'md' | 'lg';

export interface ToastProps {
  id: number;
  content: string;
  size: ToastSize;
}

export interface ToastState {
  toast: ToastProps | null;
  setToast: (toast: ToastProps) => void;
  clearToast: () => void;
}

export const useToastStore: () => ToastState = create<ToastState>()((set) => ({
  toast: null,
  setToast: (toast: ToastProps) => set({ toast }),
  clearToast: () => set({ toast: null }),
}));
