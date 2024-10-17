import { Meta, StoryObj } from '@storybook/react';
import ChatInput from './ChatInput';
import { StoryContainer, SectionContainer, RowContainer } from '@/shared/ui/storybook/story.style';

const meta: Meta<typeof ChatInput> = {
  title: 'components/features/ChatInput',
  component: ChatInput,
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    onChange: { action: 'changed' },
    onPhotoClick: { action: 'photo clicked' },
    onGithubClick: { action: 'github clicked' },
    onSend: { action: 'send clicked' },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ChatInput>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: '메시지를 입력하세요...',
  },
};

export const All: Story = {
  render: (args) => (
    <StoryContainer>
      <SectionContainer>
        <h3>Value가 없는 경우</h3>
        <RowContainer>
          <ChatInput {...args} value="" placeholder="메시지를 입력하세요..." />
        </RowContainer>
        <h3>Value가 있는 경우</h3>
        <RowContainer>
          <ChatInput {...args} value="작성중입니다." />
        </RowContainer>
      </SectionContainer>
    </StoryContainer>
  ),
};
