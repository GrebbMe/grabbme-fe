import React from 'react';
import * as S from './ChatRoom.style';
import ChatInput from '@/features/chat/ui/ChatInput';
import { IcBack } from '@/shared/assets';

const ChatRoom = () => {
  return (
    <S.ChatRoomContainer>
      <S.TitleWrapper>
        <S.TitleBox>
          <S.IconBack>
            <IcBack />
          </S.IconBack>
          <S.LabelBox>
            <S.NameLabel>닉네임 10자 이내</S.NameLabel>
            <S.Dot>•</S.Dot>
            <S.TitleLabel>사용자가 작성한 글 제목 10자만</S.TitleLabel>
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
