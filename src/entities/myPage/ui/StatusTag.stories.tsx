import { Meta, StoryObj } from '@storybook/react';
import StatusTag from './StatusTag';
import { StoryContainer, SectionContainer, RowContainer } from '@/shared/ui/storybook/story.style';

const meta: Meta<typeof StatusTag> = {
  title: 'components/entities/StatusTag',
  component: StatusTag,
  argTypes: {
    status: {
      options: ['rejected', 'accepted', 'pending'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: 'accepted',
  },
};

export const All: Story = {
  render: () => (
    <StoryContainer>
      <SectionContainer>
        <h3>상태 태그 전체</h3>
        <RowContainer>
          <StatusTag status="rejected" />
          <StatusTag status="accepted" />
          <StatusTag status="pending" />
        </RowContainer>
      </SectionContainer>
    </StoryContainer>
  ),
};
