import { ModalType, useModalStore } from '@/shared/stores/modalStore';

interface ModalMessage {
  content: React.ReactNode;
  type: ModalType;
  onConfirm?: () => void;
}

export const useModal = () => {
  const { openModal } = useModalStore();

  const showModal = ({ content, type, onConfirm }: ModalMessage) => {
    openModal(content, type, onConfirm);
  };

  return {
    showModal,
  };
};
