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
    isOpen: {
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
    },
  },
} satisfies Meta<typeof ChatButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FloatingButton: Story = {
  args: {
    isOpen: false,
  },
};
