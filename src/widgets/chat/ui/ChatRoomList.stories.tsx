import type { Meta, StoryObj } from '@storybook/react';
import ChatRoomList from './ChatRoomList.tsx';

const meta: Meta<typeof ChatRoomList> = {
  title: 'components/widgets/ChatRoomList',
  component: ChatRoomList,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    newMessagesCount: 3,
    rooms: [
      {
        nickname: '닉네임 10자 이내',
        title: '사용자가 작성한 글 제목 10자만',
        lastMessage: '아직 안 읽은 최근에 보낸 채팅 10자만',
        time: '오후 9:00',
        profileImageUrl: '/profile1.png',
        isRead: true,
      },
      {
        nickname: '닉네임 10자 이내',
        title: '사용자가 작성한 글 제목 10자만',
        lastMessage: '아직 안 읽은 최근에 보낸 채팅 10자만',
        time: '오전 11:30',
        profileImageUrl: '/profile2.png',
        isRead: false,
      },
      {
        nickname: '닉네임 10자 이내',
        title: '사용자가 작성한 글 제목 10자만',
        lastMessage: '아직 안 읽은 최근에 보낸 채팅 10자만',
        time: '7일 전',
        isRead: true,
      },
      {
        nickname: '닉네임 10자 이내',
        title: '사용자가 작성한 글 제목 10자만',
        lastMessage: '읽은 최근에 보낸 채팅 10자만',
        time: '2024년 9월 15일',
        isRead: true,
      },
      {
        nickname: '닉네임 10자 이내',
        title: '사용자가 작성한 글 제목 10자만',
        lastMessage: '읽은 최근에 보낸 채팅 10자만',
        time: '2023년 8월 15일',
        isRead: true,
      },
    ],
  },
};

export const All: Story = {
  args: {
    newMessagesCount: 10,
    rooms: Array(10)
      .fill(null)
      .map((_, index) => ({
        nickname: `사용자 ${index + 1}`,
        title: `제목 ${index + 1}`,
        lastMessage: `최근 채팅 내용 ${index + 1}`,
        time: `${index + 1}분 전`,
        isRead: index % 2 === 0,
      })),
  },
};
