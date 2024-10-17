import { Meta, StoryObj } from '@storybook/react';
import StatusCard from './StatusCard';
import { StoryContainer, SectionContainer, RowContainer } from '@/shared/ui/storybook/story.style';

const meta: Meta<typeof StatusCard> = {
  title: 'components/features/StatusCard',
  component: StatusCard,
  args: {
    title: '프로젝트 제목을 15자 이내 작성',
    content:
      '프로젝트 소개글을 작성하세요. 프로젝트 소개글을 작성하여 프로젝트의 세부 내용을 설명합니다.',
    status: 'pending',
  },
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['rejected', 'accepted', 'pending', undefined],
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
    status: 'pending',
  },
};

export const All: Story = {
  render: () => (
    <StoryContainer>
      <SectionContainer>
        <h3>상태별 테스트</h3>
        <RowContainer>
          <StatusCard
            title="프로젝트 제목을 15자 이내 작성"
            content="프로젝트 소개글을 작성하세요. 프로젝트 소개글을 작성하여 프로젝트의 세부 내용을 설명합니다."
            status="pending"
          />
          <StatusCard
            title="프로젝트 제목을 15자 이내 작성"
            content="프로젝트 소개글을 작성하세요. 프로젝트 소개글을 작성하여 프로젝트의 세부 내용을 설명합니다."
            status="accepted"
          />
          <StatusCard
            title="프로젝트 제목을 15자 이내 작성"
            content="프로젝트 소개글을 작성하세요. 프로젝트 소개글을 작성하여 프로젝트의 세부 내용을 설명합니다."
            status="rejected"
          />
          <StatusCard
            title="프로젝트 제목을 15자 이내 작성"
            content="프로젝트 소개글을 작성하세요. 프로젝트 소개글을 작성하여 프로젝트의 세부 내용을 설명합니다."
          />
        </RowContainer>
      </SectionContainer>
    </StoryContainer>
  ),
};
