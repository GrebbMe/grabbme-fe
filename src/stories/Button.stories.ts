import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '@/shared/ui';

const meta: Meta<typeof Button> = {
  title: 'component/shared/button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'recruitcompleted', 'aplycompleted'],
    },
    onClick: {
      action: 'clicked',
    },
    width: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    type: 'default',
    width: '10.8rem',
    children: '신청하기',
  },
};

export const RecruitCompletedButton: Story = {
  args: {
    type: 'recruitcompleted',
    width: '10.8rem',
    children: '모집 완료',
  },
};

export const AplyCompletedButton: Story = {
  args: {
    type: 'aplycompleted',
    width: '10.8rem',
    children: '신청 완료',
  },
};
