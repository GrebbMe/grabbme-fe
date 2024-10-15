import { Meta, StoryObj } from '@storybook/react';
import StackList from '@/shared/ui/stackList/StackList';

const meta: Meta<typeof StackList> = {
  title: 'components/shared/StackList',
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
