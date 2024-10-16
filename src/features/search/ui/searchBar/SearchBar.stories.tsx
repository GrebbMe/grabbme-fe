import { Meta, StoryObj } from '@storybook/react';
import SearchBar from '@/features/search/ui/searchBar/SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'components/features/SearchBar',
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
