import * as S from './ChatMessage.style';
import { IcDefaultProfile } from '@/shared/assets';

interface ChatMessageProps {
  message: string;
  time: string;
  type: 'received' | 'sent';
  profileImageUrl?: string;
}

const ChatMessage = ({ message, time, type, profileImageUrl }: ChatMessageProps) => {
  return (
    <S.MessageContainer type={type}>
      {type === 'received' && (
        <>
          <S.ProfileWrapper>
            {profileImageUrl ? (
              <S.ProfileImage src={profileImageUrl} alt="profile" />
            ) : (
              <S.DefaultProfileIcon>
                <IcDefaultProfile />
              </S.DefaultProfileIcon>
            )}
            <S.ChatBubble type={type}>
              <S.TextLabel>{message}</S.TextLabel>
            </S.ChatBubble>
          </S.ProfileWrapper>
          <S.TimeLabel>{time}</S.TimeLabel>
        </>
      )}
      {type === 'sent' && (
        <>
          <S.TimeLabel>{time}</S.TimeLabel>
          <S.ChatBubble type={type}>
            <S.TextLabel>{message}</S.TextLabel>
          </S.ChatBubble>
        </>
      )}
    </S.MessageContainer>
  );
};

export default ChatMessage;
