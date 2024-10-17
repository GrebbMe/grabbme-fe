import * as S from './ChatRoomList.style.ts';
import { ChatPreview } from '@/features/chat';
import { useChatNavigationStore } from '@/shared/stores/chatNavigationStore';
import { sortChatRooms } from '@/widgets/chat/lib/sortChatRooms';

export interface ChatRoom {
  nickname: string;
  title: string;
  lastMessage: string;
  time: string;
  profileImageUrl?: string;
  isRead: boolean;
}

interface ChatRoomListProps {
  rooms: ChatRoom[];
  newMessagesCount: number;
}

const ChatRoomList = ({ rooms, newMessagesCount }: ChatRoomListProps) => {
  const sortedRooms = sortChatRooms(rooms);

  const { openChatRoom } = useChatNavigationStore();

  const handleRoomClick = (roomId: string) => {
    openChatRoom(roomId);
  };

  return (
    <S.ChatRoomContainer>
      <S.ChatRoomWrapper>
        <S.TitleBox>
          <S.TitleLabel>채팅방</S.TitleLabel>
          <S.MessageLabel>{newMessagesCount}개의 새로운 메시지</S.MessageLabel>
        </S.TitleBox>
        <S.ChatList>
          {sortedRooms.map((room) => (
            <ChatPreview
              key={room.nickname}
              nickname={room.nickname}
              title={room.title}
              lastMessage={room.lastMessage}
              time={room.time}
              profileImageUrl={room.profileImageUrl}
              isRead={room.isRead}
              onClick={() => handleRoomClick(room.title)}
            />
          ))}
        </S.ChatList>
      </S.ChatRoomWrapper>
    </S.ChatRoomContainer>
  );
};

export default ChatRoomList;
