import { Meta, StoryObj } from '@storybook/react';
import ChatPreview from './ChatPreview';
import { StoryContainer, SectionContainer, RowContainer } from '@/shared/ui/storybook/story.style';

const meta: Meta<typeof ChatPreview> = {
  title: 'components/features/ChatPreview',
  component: ChatPreview,
  argTypes: {
    nickname: { control: 'text' },
    title: { control: 'text' },
    lastMessage: { control: 'text' },
    time: { control: 'text' },
    profileImageUrl: { control: 'text' },
    isRead: { control: 'boolean' },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    nickname: '닉네임 10자 이내',
    title: '사용자가 작성한 글 제목 10자만',
    lastMessage: '아직 안 읽은 최근에 보낸 채팅 10자만',
    time: '오전 11:30',
    isRead: false,
  },
};

export const All: Story = {
  render: () => (
    <StoryContainer>
      <SectionContainer>
        <h3>채팅 (안읽음/ 읽음)</h3>
        <RowContainer>
          <ChatPreview
            nickname="닉네임 10자 이내"
            title="사용자가 작성한 글 제목 10자만"
            lastMessage="아직 안 읽은 최근에 보낸 채팅 10자만"
            time="오전 11:30"
            isRead={false}
          />
          <ChatPreview
            nickname="닉네임 10자 이내"
            title="사용자가 작성한 글 제목 10자만"
            lastMessage="읽은 최근에 보낸 채팅 10자만"
            time="7일 전"
            isRead={true}
          />
        </RowContainer>
      </SectionContainer>
    </StoryContainer>
  ),
};
