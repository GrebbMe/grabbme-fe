import { Meta, StoryObj } from '@storybook/react';
import ContentTag from './ContentTag';
import { StoryContainer } from '@/shared/ui/storybook/story.style';

const meta: Meta<typeof ContentTag> = {
  title: 'components/entities/ContentTag',
  component: ContentTag,
  args: {
    label: '기술 스택1',
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ContentTag>;

export const Default: Story = {
  args: {
    label: '기술 스택1',
  },
};

export const All: Story = {
  render: () => (
    <StoryContainer>
      <ContentTag label="기술 스택1" />
      <ContentTag label="기술 스택2" />
      <ContentTag label="기술 스택3" />
    </StoryContainer>
  ),
};
