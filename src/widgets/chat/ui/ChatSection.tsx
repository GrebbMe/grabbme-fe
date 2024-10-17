import { useEffect, useState } from 'react';
import ChatRoom from './ChatRoom';
import ChatRoomList from './ChatRoomList';
import * as S from './ChatSection.style';
import FloatingButton from '@/entities/chat/ui/FloatingButton';
import { getChatRoom, getChatRooms } from '@/shared/api/chatApi';
import { useChatNavigationStore } from '@/shared/stores/chatNavigationStore';

export interface ChatRoomT {
  channel_id: number;
  users: number[];
  name: string;
  last_chat: string;
  updated_at: string;
  // profileImageUrl?: string;
  // isRead: boolean;
}

const ChatSection = ({ userId }: { userId: number }): JSX.Element => {
  const { isChatRoomOpen, isChatRoomListOpen, currentChatRoomId } = useChatNavigationStore();
  const [chatRooms, setChatRooms] = useState<[]>([]);
  const [chatRoom, setChatRoom] = useState<ChatRoomT | null>(null);

  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        if (isChatRoomListOpen) {
          const rooms = await getChatRooms(userId);
          setChatRooms(rooms);
        }
      } catch (error) {
        console.error('Error fetching chat rooms:', error);
      }
    };

    const fetchChatRoom = async () => {
      try {
        if (isChatRoomOpen && currentChatRoomId !== null && typeof currentChatRoomId === 'string') {
          const room = await getChatRoom(Number(currentChatRoomId), userId);
          setChatRoom(room);
        }
      } catch (error) {
        console.error('Error fetching chat room:', error);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchChatRooms();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchChatRoom();
  }, [isChatRoomListOpen, userId, isChatRoomOpen, currentChatRoomId]);

  return (
    <S.ChatSectionWrapper>
      {isChatRoomListOpen && (
        <S.ChatRoomListWrapper>
          <ChatRoomList rooms={chatRooms} newMessagesCount={0} />
        </S.ChatRoomListWrapper>
      )}
      {isChatRoomOpen && chatRoom && (
        <S.ChatRoomWrapper>
          <ChatRoom chatRoom={chatRoom} />
        </S.ChatRoomWrapper>
      )}
      <FloatingButton />
    </S.ChatSectionWrapper>
  );
};

export default ChatSection;
