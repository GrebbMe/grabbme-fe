import { useModalStore } from '@/shared/stores/modalStore';

type ModalType = 'confirm' | 'alert';

interface ModalMessage {
  content: string;
  type: ModalType;
  onConfirm?: () => void;
}

export const useModal = () => {
  const { handleModal } = useModalStore();

  const showModal = ({ content, type, onConfirm }: ModalMessage) => {
    handleModal(true, content, type, onConfirm);
  };

  return {
    showModal,
  };
};
