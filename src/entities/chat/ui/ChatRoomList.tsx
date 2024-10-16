import * as S from './ChatRoomList.style.ts';
import { sortChatRooms } from '@/entities/chat/lib/sortChatRooms.ts';
import { ChatPreview } from '@/features/chat';

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
            />
          ))}
        </S.ChatList>
      </S.ChatRoomWrapper>
    </S.ChatRoomContainer>
  );
};

export default ChatRoomList;
