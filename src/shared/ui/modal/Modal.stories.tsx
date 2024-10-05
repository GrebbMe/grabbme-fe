import { Meta, StoryFn } from '@storybook/react';
import { useModal } from '@/shared/hooks/useModal';
import { Modal } from '@/shared/ui/modal/Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    content: { control: 'text' },
    type: { control: 'select', options: ['confirm', 'alert'] },
  },
} as Meta;

const Template: StoryFn<{ content: string; type: 'alert' | 'confirm' }> = (args) => {
  const { showModal } = useModal();

  const handleShowModal = () => {
    showModal({ content: args.content, type: args.type, onConfirm: () => alert('confirm') });
  };

  return (
    <div>
      <button onClick={handleShowModal}>Show Modal</button>
      <Modal />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  content: '이것은 기본 모달입니다.',
  type: 'alert',
};

export const All = () => {
  const { showModal } = useModal();

  const handleShowAlertModal = (content: string, type: 'confirm' | 'alert') => {
    showModal({ content, type });
  };

  const handleShowConfirmModal = (content: string, type: 'confirm' | 'alert') => {
    showModal({ content, type });
  };

  return (
    <div>
      <button
        onClick={() =>
          handleShowAlertModal('선택하지 않은 내용이 있어요. 모든 내용을 선택해주세요', 'alert')
        }
      >
        짧은 토스트 알림
      </button>
      <button
        onClick={() =>
          handleShowConfirmModal('회원가입을 그만 하시겠어요? 내용은 저장되지 않아요.', 'confirm')
        }
      >
        긴 토스트 알림
      </button>
    </div>
  );
};
