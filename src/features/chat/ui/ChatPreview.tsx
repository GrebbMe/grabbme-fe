import * as S from './ChatPreview.style';
import { IcDefaultProfile } from '@/shared/assets';
import { truncateText } from '@/shared/lib/truncateText';

interface ChatPreviewProps {
  nickname: string;
  title: string;
  lastMessage: string;
  time: string;
  profileImageUrl?: string;
  isRead: boolean;
}

const ChatPreview = ({
  nickname,
  title,
  lastMessage,
  time,
  profileImageUrl,
  isRead,
}: ChatPreviewProps) => {
  return (
    <S.ChatPreviewContainer isRead={isRead}>
      <S.ChatPreivewWrapepr>
        {profileImageUrl ? (
          <S.ProfileImage src={profileImageUrl} alt="profile" />
        ) : (
          <S.DefaultProfileIcon>
            <IcDefaultProfile />
          </S.DefaultProfileIcon>
        )}
        <S.ContentWrapper>
          <S.InfoBox>
            <S.NameLabel>{truncateText(nickname, 10)}</S.NameLabel>
            <S.Dot>•</S.Dot>
            <S.TitleLabel>{truncateText(title, 10)}</S.TitleLabel>
          </S.InfoBox>
          <S.MessageBox>
            <S.MessageLabel>{truncateText(lastMessage, 10)}</S.MessageLabel>
            <S.Dot>•</S.Dot>
            <S.TimeLabel>{time}</S.TimeLabel>
          </S.MessageBox>
        </S.ContentWrapper>
      </S.ChatPreivewWrapepr>
    </S.ChatPreviewContainer>
  );
};

export default ChatPreview;
