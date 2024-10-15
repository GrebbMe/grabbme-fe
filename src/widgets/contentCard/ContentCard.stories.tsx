import { Meta, StoryObj } from '@storybook/react';
import ContentCard from './ContentCard';
import { StoryContainer, SectionContainer, RowContainer } from '@/shared/ui/storybook/story.style';

const meta: Meta<typeof ContentCard> = {
  title: 'components/widgets/ContentCard',
  component: ContentCard,
  args: {
    title: '프로젝트 제목을 15자 이내 작성',
    content:
      '프로젝트 소개글을 앞 약 50자 내외로 보여줍니다. 프로젝트 소개글을 앞 약 50자 내외로 보여줍니다. 프로젝트 소개글을 앞 약 50자 내외로 보여줍니다. 길어지면 이런',
    viewCount: 100,
    bookmarkCount: 54,
    commentCount: 13,
    type: 'B',
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['A', 'B', 'C'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '프로젝트 제목을 15자 이내 작성',
    content:
      '프로젝트 소개글을 앞 약 50자 내외로 보여줍니다. 프로젝트 소개글을 앞 약 50자 내외로 보여줍니다. 프로젝트 소개글을 앞 약 50자 내외로 보여줍니다. 길어지면 이런',
    type: 'B',
  },
};

export const All: Story = {
  render: () => (
    <StoryContainer>
      <SectionContainer>
        <h3>순서대로 타입 A B C</h3>
        <RowContainer>
          <ContentCard
            title="A타입 제목"
            content="인재 자기 소개글을 앞 약 30자 내외로 보여줍니다. 인재 자기 소개글을 앞 약 30자 내외로 보여줍니다. 인재 자기 길어지면"
            viewCount={100}
            bookmarkCount={54}
            commentCount={13}
            name="홍길동"
            role="프론트엔드 개발자"
            type="A"
          />
          <ContentCard
            title="B타입 제목"
            content="프로젝트 소개글을 앞 약 40자 내외로 보여줍니다. 프로젝트 소개글을 앞 약 40자 내 50자 내외로 보여줍니다. 길어지면 이런..."
            viewCount={100}
            bookmarkCount={54}
            commentCount={13}
            type="B"
          />
          <ContentCard
            title="C타입 제목"
            content="인재 자기 소개글을 앞 약 30자 내외로 보여줍니다. 인재 자기 소개글을 앞 약 30자 내외로 보여줍니다. 인재 자기 길어지면"
            viewCount={100}
            bookmarkCount={54}
            commentCount={13}
            type="C"
          />
        </RowContainer>
      </SectionContainer>
    </StoryContainer>
  ),
};
