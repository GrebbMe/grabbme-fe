import { Meta, StoryObj } from '@storybook/react';
import ProfileDetail from './ProfileDetail';
import { StoryContainer, SectionContainer } from '@/shared/ui/storybook/story.style';

const meta: Meta<typeof ProfileDetail> = {
  title: 'components/widgets/ProfileDetail',
  component: ProfileDetail,
  args: {
    job: 'UX/UI 디자이너',
    techStacks: [
      { id: '1', label: '기술 스택1' },
      { id: '2', label: '기술 스택2' },
      { id: '3', label: '기술 스택3' },
      { id: '4', label: '기술 스택4' },
      { id: '5', label: '기술 스택5' },
    ],
    categories: [
      { id: '1', label: '카테고리1' },
      { id: '2', label: '카테고리2' },
      { id: '3', label: '카테고리3' },
    ],
    experience: '1 - 3년차',
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    job: 'UX/UI 디자이너',
    techStacks: [
      { id: '1', label: '기술 스택1' },
      { id: '2', label: '기술 스택2' },
      { id: '3', label: '기술 스택3' },
    ],
    categories: [
      { id: '1', label: '카테고리1' },
      { id: '2', label: '카테고리2' },
    ],
    experience: '5 - 7년차',
  },
};

export const All: Story = {
  render: () => (
    <StoryContainer>
      <SectionContainer>
        <h3>Profile Detail 전체 구성</h3>
        <ProfileDetail
          job="프론트엔드 개발자"
          techStacks={[
            { id: '1', label: 'React' },
            { id: '2', label: 'JavaScript' },
            { id: '3', label: 'TypeScript' },
            { id: '4', label: 'Node.js' },
            { id: '5', label: 'GraphQL' },
          ]}
          categories={[
            { id: '1', label: '웹 개발' },
            { id: '2', label: '모바일 앱 개발' },
            { id: '3', label: '백엔드 개발' },
          ]}
          experience="7 - 9년차"
        />
      </SectionContainer>
    </StoryContainer>
  ),
};
