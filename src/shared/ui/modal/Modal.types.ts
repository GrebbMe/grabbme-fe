export type ModalType = 'confirm' | 'alert';

export interface ModalProps {
  isModalOpen: boolean;
  handleModal: (isOpen: boolean) => void;
  description: string;
  type: ModalType;
  onConfirm?: () => void;
}
