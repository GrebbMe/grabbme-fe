import { Meta, StoryObj } from '@storybook/react';
import SearchBar from '@/shared/ui/searchBar/SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'components/shared/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
