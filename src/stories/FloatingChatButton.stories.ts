import type { Meta, StoryObj } from '@storybook/react';
import { FloatingChatButton } from '@/shared/ui';

const meta: Meta<typeof FloatingChatButton> = {
  title: 'component/shared/button',
  component: FloatingChatButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
    },
  },
} satisfies Meta<typeof FloatingChatButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FloatingButton: Story = {
  args: {
    isOpen: false,
  },
};
