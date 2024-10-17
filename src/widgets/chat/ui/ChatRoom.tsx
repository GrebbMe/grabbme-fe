import React from 'react';
import * as S from './ChatRoom.style.ts';
import ChatInput from '@/features/chat/ui/ChatInput.tsx';
import { IcBack } from '@/shared/assets';
import { useChatNavigationStore } from '@/shared/stores/chatNavigationStore';

export interface ChatRoom {
  channel_id: number;
  users: number[];
  name: string;
  last_chat: string;
  updated_at: string;
  // profileImageUrl?: string;
  // isRead: boolean;
}

interface ChatRoomProps {
  chatRoom: ChatRoom;
}

const ChatRoom = ({ chatRoom }: ChatRoomProps) => {
  const { openChatRoomList } = useChatNavigationStore();

  const handleBackClick = () => {
    openChatRoomList();
  };

  return (
    <S.ChatRoomContainer>
      <S.TitleWrapper>
        <S.TitleBox>
          <S.IconBack onClick={handleBackClick}>
            <IcBack />
          </S.IconBack>
          <S.LabelBox>
            <S.NameLabel>{String(chatRoom.users[0])}</S.NameLabel>
            <S.Dot>•</S.Dot>
            <S.TitleLabel>{chatRoom.name}</S.TitleLabel>
          </S.LabelBox>
        </S.TitleBox>
      </S.TitleWrapper>

      <S.ChatContent>{/* 채팅창 화면 */}</S.ChatContent>
      <S.InputContainer>
        <ChatInput
          value=""
          placeholder="궁금한 점을 물어보세요."
          onChange={() => {}}
          onPhotoClick={() => {}}
          onGithubClick={() => {}}
          onSend={() => {}}
        />
      </S.InputContainer>
    </S.ChatRoomContainer>
  );
};

export default ChatRoom;
