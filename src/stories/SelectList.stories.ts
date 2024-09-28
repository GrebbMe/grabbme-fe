import type { Meta, StoryObj } from '@storybook/react';
import { SelectList } from '@/shared/ui';

const meta: Meta<typeof SelectList> = {
  title: 'component/shared/select',
  component: SelectList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of items to display in the dropdown',
    },
    width: {
      control: 'select',
      options: ['short', 'medium', 'long'],
      description: 'Width of the dropdown',
    },
  },
} satisfies Meta<typeof SelectList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShortWidth: Story = {
  args: {
    items: ['0년차', '1-3년차', '4-7년차', '7년차 이상'],
    width: 'short',
  },
};

export const MediumWidth: Story = {
  args: {
    items: ['0년차', '1-3년차', '4-7년차', '7년차 이상'],
    width: 'medium',
  },
};

export const LongWidth: Story = {
  args: {
    items: ['0년차', '1-3년차', '4-7년차', '7년차 이상'],
    width: 'long',
  },
};
