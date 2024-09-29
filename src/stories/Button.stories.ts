import type { Meta, StoryObj } from '@storybook/react';
import IconImage from '@/shared/assets/ph--list-bold.svg';
import { Button } from '@/shared/ui/button/Button';

const meta: Meta<typeof Button> = {
  title: 'component/shared/button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['default', 'clicked'],
      },
    },
    width: {
      control: 'text',
    },
    label: {
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
    width: '7.6rem',
    label: '버튼',
    type: 'default',
  },
};
export const ClickedButton: Story = {
  args: {
    type: 'clicked',
    width: '7.6rem',
    label: '버튼',
  },
};

export const ButtonWithIcon: Story = {
  args: {
    type: 'default',
    width: '12.6rem',
    label: '목록으로',
    img: IconImage,
  },
};
