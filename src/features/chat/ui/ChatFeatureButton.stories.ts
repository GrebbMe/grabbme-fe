import type { Meta, StoryObj } from '@storybook/react';
import { ChatFeatureButton } from '@/features/chat';

const meta: Meta<typeof ChatFeatureButton> = {
  title: 'component/chat/button',
  component: ChatFeatureButton,

  argTypes: {
    icon: {
      control: 'text',
    },
  },
} satisfies Meta<typeof ChatFeatureButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GithubChatButton: Story = {
  args: {
    icon: 'github',
  },
};

export const ImageChatButton: Story = {
  args: {
    icon: 'image',
  },
};

export const SendChatButton: Story = {
  args: {
    icon: 'send',
  },
};
