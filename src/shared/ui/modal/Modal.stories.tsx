import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import Modal from './Modal';
import { ModalProps } from './Modal.types';

export default {
  title: 'component/shared/modal',
  component: Modal,
} as Meta;

const Template: StoryFn<ModalProps> = (args) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleConfirm = () => {
    alert('Confirmed');
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal
        {...args}
        isModalOpen={isModalOpen}
        handleModal={setIsModalOpen}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
export const Default = Template.bind({});
Default.args = {
  description: '정보 수정을 그만 하시겠어요? 내용은 저장되지 않아요',
  type: 'confirm',
};
export const All = () => {
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isModalConfirmOpen, setIsConfirmModalOpen] = useState(false);

  const handleConfirm = () => {
    alert('Confirmed');
  };
  return (
    <div>
      <button onClick={() => setIsAlertModalOpen(true)}>alert Modal</button>
      <Modal
        type="alert"
        isModalOpen={isAlertModalOpen}
        handleModal={setIsAlertModalOpen}
        description="정보 수정을 그만 하시겠어요? 내용은 저장되지 않아요"
      />
      <button onClick={() => setIsConfirmModalOpen(true)}>confrim Modal</button>
      <Modal
        type="confirm"
        isModalOpen={isModalConfirmOpen}
        handleModal={setIsConfirmModalOpen}
        onConfirm={handleConfirm}
        description="정보 수정을 그만 하시겠어요? 내용은 저장되지 않아요"
      />
    </div>
  );
};
