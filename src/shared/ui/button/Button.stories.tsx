import type { Meta, StoryObj } from '@storybook/react';
import List from '@/shared/assets/list-color.svg?react';
import { ButtonProps } from '@/shared/types/ButtonProps';
import { Button } from '@/shared/ui';

const meta: Meta<typeof Button> = {
  title: 'component/shared/button',
  component: Button,
  argTypes: {
    state: {
      control: {
        state: 'select',
        options: ['default', 'clicked'],
      },
    },
    size: {
      control: 'text',
    },
    content: {
      control: 'text',
    },
    icon: {
      control: 'object',
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const ClickedButton: Story = {
  args: {
    state: 'clicked',
    size: '7.6rem',
    content: '버튼',
  },
};

export const DefaultButton: Story = {
  args: {
    state: 'default',
    size: '7.6rem',
    content: '버튼',
  },
};

export const ButtonWithIcon: Story = {
  args: {
    state: 'default',
    size: '12.6rem',
    content: '목록으로',
    icon: <List />,
  },
};

