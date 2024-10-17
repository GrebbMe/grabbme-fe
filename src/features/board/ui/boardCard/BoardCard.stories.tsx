import { Meta, StoryObj } from '@storybook/react';
import BoardCard, { BoardCard as BoardCardProps } from './BoardCard';
import { RowContainer, StoryContainer } from '@/shared/ui/storybook/story.style';

const meta: Meta<typeof BoardCard> = {
  title: 'components/features/BoardCard',
  component: BoardCard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: BoardCardProps = {
  id: 1,
  title: '테스트 프로젝트',
  content: '이것은 테스트 프로젝트의 내용입니다.',
  expiredAt: '2024. 12. 12 까지',
  career: '3년차 이상',
  stacks: ['React', 'TypeScript'],
  viewCount: 123,
  bookmarkCount: 45,
  chatCount: 67,
  isBookmarked: false,
};

const allArgs: BoardCardProps = {
  id: 1,
  title: '그랩존',
  content: '이것은 그랩존 내용입니다.',
  expiredAt: '2024. 12. 12 까지',
  career: '1 - 3년차',
  stacks: ['React', 'TypeScript'],
  viewCount: 123,
  bookmarkCount: 45,
  chatCount: 67,
  isBookmarked: false,
};

export const Default: Story = {
  args: defaultArgs,
};

export const All: Story = {
  render: () => (
    <>
      <StoryContainer>
        <BoardCard {...defaultArgs} />
        <BoardCard {...allArgs} />
      </StoryContainer>
    </>
  ),
};
