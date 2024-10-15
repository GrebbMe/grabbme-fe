import { StoryObj, Meta } from '@storybook/react';
import Tag from './Tag';
import { RowContainer, StoryContainer } from '@/shared/ui/storybook/story.style';

export default {
  title: 'Components/shared/Tag',
  component: Tag,
  argTypes: {
    children: { control: 'text' },
  },
} as Meta<typeof Tag>;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: 'Default Tag',
  },
};

export const All: Story = {
  render: () => (
    <StoryContainer>
      <RowContainer>
        <Tag>React</Tag>
        <Tag>typescript</Tag>
        <Tag>category</Tag>
        <Tag>PostgreSQL</Tag>
      </RowContainer>
    </StoryContainer>
  ),
};
