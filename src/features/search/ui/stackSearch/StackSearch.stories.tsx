import { Meta, StoryObj } from '@storybook/react';
import StackList from '@/features/search/ui/stackSearch/StackSearch';

const meta: Meta<typeof StackList> = {
  title: 'components/features/StackList',
  component: StackList,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
