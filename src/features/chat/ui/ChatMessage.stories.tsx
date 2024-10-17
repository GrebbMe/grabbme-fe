import { Meta, StoryObj } from '@storybook/react';
import ChatMessage from './ChatMessage';
import { StoryContainer, SectionContainer, RowContainer } from '@/shared/ui/storybook/story.style';

const meta: Meta<typeof ChatMessage> = {
  title: 'components/features/ChatMessage',
  component: ChatMessage,
  argTypes: {
    type: {
      control: 'radio',
      options: ['received', 'sent'],
    },
    profileImageUrl: {
      control: 'text',
    },
    message: {
      control: 'text',
    },
    time: {
      control: 'text',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'received',
    profileImageUrl: '/default-profile.png',
    message: '안녕하세요, 반갑습니다.',
    time: '오전 8:40',
  },
};

export const All: Story = {
  render: () => (
    <StoryContainer>
      <SectionContainer>
        <h3>채팅 주고 받는거</h3>
        <RowContainer>
          <ChatMessage
            type="received"
            message="안녕하세요, 반갑습니다."
            time="오전 8:40"
            profileImageUrl={undefined}
          />
          <ChatMessage type="sent" message="네, 안녕하세요. 만나서 반갑습니다." time="오전 8:48" />
        </RowContainer>
      </SectionContainer>
    </StoryContainer>
  ),
};
