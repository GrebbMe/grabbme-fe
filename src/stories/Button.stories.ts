import type { Meta, StoryObj } from '@storybook/react';
import IconImage from '@/shared/assets/ph--list-bold.svg';
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
    img: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    size: '7.6rem',
    content: '버튼',
    state: 'default',
  },
};
export const ClickedButton: Story = {
  args: {
    state: 'clicked',
    size: '7.6rem',
    content: '버튼',
  },
};

export const ButtonWithIcon: Story = {
  args: {
    state: 'default',
    size: '12.6rem',
    content: '목록으로',
    img: IconImage,
  },
};
