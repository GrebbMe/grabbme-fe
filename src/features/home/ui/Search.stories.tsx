import { Meta, StoryObj } from '@storybook/react';
import Search from './Search';

const meta: Meta<typeof Search> = {
  title: 'component/features/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: { type: 'string' },
    description: { type: 'string' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
