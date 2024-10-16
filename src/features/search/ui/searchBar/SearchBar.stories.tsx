import { Meta, StoryFn } from '@storybook/react';
import { useSearch } from '@/features/search/hooks/useSearch';
import SearchBar from '@/features/search/ui/searchBar/SearchBar';

export default {
  title: 'components/features/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: StoryFn = (args) => {
  const { query, handleQueryChange, handleSearch } = useSearch();

  return (
    <SearchBar query={query} onQueryChange={handleQueryChange} onSearch={handleSearch} {...args} />
  );
};

export const Default = Template.bind({});
Default.args = {};
