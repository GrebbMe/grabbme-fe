import * as S from './ChatRoomList.style.ts';
import { ChatPreview } from '@/features/chat';
import { useChatNavigationStore } from '@/shared/stores/chatNavigationStore';
import { formatDate } from '@/shared/util/format.ts';

export interface Data {
  chatRoom: ChatRoom;
  me: Me;
  other: Others;
}

export interface ChatRoom {
  channel_id: number;
  users: number[];
  name: string;
  last_chat: string;
  updated_at: string;
  post_id: number;
  post_name: string;
  // profileImageUrl?: string;
  // isRead: boolean;
}

export interface Me {
  user_id: number;
  nickname: string;
}

export interface Others {
  user_id: number;
  nickname: string;
}

interface ChatRoomListProps {
  rooms: Data[];
  newMessagesCount: number;
}

const ChatRoomList = ({ rooms, newMessagesCount }: ChatRoomListProps) => {
  // const sortedRooms = sortChatRooms(rooms);

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
          {rooms.map((room) => (
            <ChatPreview
              key={room.chatRoom.channel_id}
              nickname={room.other.nickname}
              name={room.chatRoom.post_name}
              last_chat={room.chatRoom.last_chat}
              updated_at={formatDate(room.chatRoom.updated_at)}
              isRead={true}
              onClick={() => handleRoomClick(String(room.chatRoom.channel_id))}
            />
          ))}
        </S.ChatList>
      </S.ChatRoomWrapper>
    </S.ChatRoomContainer>
  );
};

export default ChatRoomList;
