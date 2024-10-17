import { Meta, StoryObj } from '@storybook/react';
import ChatRoom from './ChatRoom.tsx';
import { StoryContainer, SectionContainer } from '@/shared/ui/storybook/story.style.ts';

const meta: Meta<typeof ChatRoom> = {
  title: 'components/widgets/ChatRoom',
  component: ChatRoom,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ChatRoom>;

export const Default: Story = {
  render: () => (
    <StoryContainer>
      <SectionContainer>
        <ChatRoom />
      </SectionContainer>
    </StoryContainer>
  ),
};

export const All: Story = {
  render: () => (
    <StoryContainer>
      <SectionContainer>
        <h3>전체</h3>
        <ChatRoom />
      </SectionContainer>
    </StoryContainer>
  ),
};
