import { Meta, StoryFn } from '@storybook/react';
import { useModal } from '@/shared/hooks/useModal';
import { Modal } from '@/shared/ui/modal/Modal';

export default {
  title: 'components/shared/Modal',
  component: Modal,
  argTypes: {
    content: { control: 'text' },
    type: { control: 'select', options: ['confirm', 'alert'] },
  },
} as Meta;

const DefaultTemplate: StoryFn<{ content: React.ReactNode; type: 'alert' | 'confirm' }> = (
  args,
) => {
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

export const Default = DefaultTemplate.bind({});
Default.args = {
  content: (
    <>
      <span>모달 정보를 </span>
      <br />
      <span>입력하세요.</span>
    </>
  ),
  type: 'alert',
};

export const All = () => {
  const { showModal } = useModal();

  const handleShowAlertModal = (content: React.ReactNode, type: 'confirm' | 'alert') => {
    showModal({ content, type });
  };

  const handleShowConfirmModal = (
    content: React.ReactNode,
    type: 'confirm' | 'alert',
    onConfirm: () => void,
  ) => {
    showModal({ content, type, onConfirm });
  };

  return (
    <div>
      <button
        onClick={() =>
          handleShowAlertModal('선택하지 않은 내용이 있어요. 모든 내용을 선택해주세요', 'alert')
        }
      >
        alert
      </button>
      <button
        onClick={() =>
          handleShowConfirmModal(
            <>
              <span>선택 모달에 들어갈 내용을</span>
              <br />
              <span>2줄 정도로 작성해주세요</span>
            </>,
            'confirm',
            () => alert('confirmed'),
          )
        }
      >
        confirm
      </button>
      <button
        onClick={() =>
          handleShowConfirmModal(
            '회원가입을 그만 하시겠어요? 내용은 저장되지 않아요.',
            'confirm',
            () => alert('confirmed'),
          )
        }
      >
        confirm
      </button>
      <button
        onClick={() =>
          handleShowConfirmModal(
            '정보 수정을 그만 하시겠어요? 내용은 저장되지 않아요.',
            'confirm',
            () => alert('confirmed'),
          )
        }
      >
        confirm
      </button>
    </div>
  );
};
