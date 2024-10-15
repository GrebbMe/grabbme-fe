import { Meta, StoryFn } from '@storybook/react';
import { useToast } from '@/shared/hooks/useToast';
import { ToastMessage, ToastSize } from '@/shared/stores/toastStore';
import { Toast } from '@/shared/ui/toast/Toast';
export default {
  title: 'components/shared/Toast',
  component: Toast,
  argTypes: {
    content: { control: 'text' },
    size: { control: 'select', options: ['sm', 'lg'] },
  },
} as Meta;

const Template: StoryFn<ToastMessage> = (args: { content: string; size: ToastSize }) => {
  const { showToast } = useToast();

  const handleShowToast = () => {
    showToast(args);
  };

  return (
    <div>
      <button onClick={handleShowToast}>토스트 버튼</button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  content: '토스트 메시지 예시입니당. 예를 들면 저장 되었습니다.',
  size: 'sm',
};

export const All = () => {
  const { showToast } = useToast();

  const handleShowToast = (content: string, size: 'sm' | 'lg') => {
    showToast({ content, size });
  };

  return (
    <div>
      <button onClick={() => handleShowToast('짧은 토스트', 'sm')}>짧은 토스트 알림</button>
      <button onClick={() => handleShowToast('긴 토스트 알림', 'lg')}>긴 토스트 알림</button>
    </div>
  );
};
