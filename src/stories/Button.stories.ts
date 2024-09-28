import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '@/shared/ui';

const meta: Meta<typeof Button> = {
  title: 'components/shared/button',
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
    children: '신청 하기',
  },
};

export const RecruitCompletedButton: Story = {
  args: {
    type: 'recruitcompleted',
    children: '모집 완료',
  },
};

export const AplyCompletedButton: Story = {
  args: {
    type: 'aplycompleted',
    children: '지원 완료',
  },
};
