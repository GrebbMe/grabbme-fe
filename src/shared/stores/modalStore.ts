import React from 'react';
import { create } from 'zustand';

export type ModalType = 'confirm' | 'alert' | '';

interface ModalState {
  isOpen: boolean;
  content: React.ReactNode;
  type: ModalType;
  onConfirm?: () => void;
  openModal: (content: React.ReactNode, type: ModalType, onConfirm?: () => void) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  content: '',
  type: '',
  onConfirm: () => {},
  openModal: (content, type, onConfirm) => set({ isOpen: true, content, type, onConfirm }),
  closeModal: () => set({ isOpen: false, content: '', type: '', onConfirm: () => {} }),
}));
