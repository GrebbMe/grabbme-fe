import { Meta, StoryFn } from '@storybook/react';
import { useStackSearch } from '@/features/search/hooks/useStackSearch';
import StackSearch from '@/features/search/ui/stackSearch/StackSearch';

export default {
  title: 'components/features/StackSearch',
  component: StackSearch,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: StoryFn = (args) => {
  const { handleStackSearch } = useStackSearch();

  return <StackSearch onStackSearch={handleStackSearch} {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
