import { create } from 'zustand';

interface ModalState {
  isModalOpen: boolean;
  content: string;
  type: 'confirm' | 'alert';
  onConfirm?: () => void;
  handleModal: (
    isOpen: boolean,
    content?: string,
    type?: 'confirm' | 'alert',
    onConfirm?: () => void,
  ) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  content: '',
  type: 'alert',
  onConfirm: undefined,
  handleModal: (isOpen, content = '', type = 'alert', onConfirm) =>
    set({ isModalOpen: isOpen, content, type, onConfirm }),
}));
