import type { Meta, StoryObj } from '@storybook/react';
import { CompletedButton } from '@/shared/ui/button/CompletedButton';

const meta: Meta<typeof CompletedButton> = {
  title: 'component/shared/button',
  component: CompletedButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['apply', 'recruit'],
      },
    },
  },
  args: {
    variant: 'apply',
  },
} satisfies Meta<typeof CompletedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ApplyButton: Story = {
  args: {
    variant: 'apply',
  },
};

export const RecruitButton: Story = {
  args: {
    variant: 'recruit',
  },
};
