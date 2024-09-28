import type { Meta, StoryObj } from '@storybook/react';
import { ChatButton } from '@/shared/ui';

const meta: Meta<typeof ChatButton> = {
  title: 'component/shared/button',
  component: ChatButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['message', 'image', 'github'],
    },
    onClick: {
      action: 'clicked',
    },
  },
} satisfies Meta<typeof ChatButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MessageButton: Story = {
  args: {
    type: 'message',
  },
};

export const ImageButton: Story = {
  args: {
    type: 'image',
  },
};

export const GithubButton: Story = {
  args: {
    type: 'github',
  },
};
