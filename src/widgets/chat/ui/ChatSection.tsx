import ChatRoom from './ChatRoom';
import ChatRoomList from './ChatRoomList';
import * as S from './ChatSection.style';
import FloatingButton from '@/entities/chat/ui/FloatingButton';
import { useChatNavigationStore } from '@/shared/stores/chatNavigationStore';

const ChatSection = () => {
  const { isChatRoomOpen, isChatRoomListOpen } = useChatNavigationStore();

  return (
    <S.ChatSectionWrapper>
      {isChatRoomListOpen && (
        <S.ChatRoomListWrapper>
          <ChatRoomList rooms={[]} newMessagesCount={0} />
        </S.ChatRoomListWrapper>
      )}
      {isChatRoomOpen && (
        <S.ChatRoomWrapper>
          <ChatRoom />
        </S.ChatRoomWrapper>
      )}
      <FloatingButton />
    </S.ChatSectionWrapper>
  );
};

export default ChatSection;
