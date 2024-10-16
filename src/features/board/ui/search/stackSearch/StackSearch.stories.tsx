import { Meta, StoryFn } from '@storybook/react';
import StackSearch from '@/features/board/ui/search/stackSearch/StackSearch';

export default {
  title: 'components/features/StackSearch',
  component: StackSearch,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: StoryFn = (args) => {
  return <StackSearch {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
