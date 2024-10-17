import * as S from './ChatPreview.style';
import { IcDefaultProfile } from '@/shared/assets';
import { truncateText } from '@/shared/lib/truncateText';

interface ChatPreviewProps {
  nickname: string;
  name: string;
  last_chat: string;
  updated_at: string;
  isRead: boolean;
  onClick: () => void;
}

const ChatPreview = ({
  nickname,
  name,
  last_chat,
  updated_at,
  isRead,
  onClick,
}: ChatPreviewProps) => {
  return (
    <S.ChatPreviewContainer onClick={onClick} isRead={isRead}>
      <S.ChatPreivewWrapepr>
        {/* {profileImageUrl ? (
          <S.ProfileImage src={profileImageUrl} alt="profile" />
        ) : (
          <S.DefaultProfileIcon>
            <IcDefaultProfile />
          </S.DefaultProfileIcon>
        )} */}
        <S.DefaultProfileIcon>
          <IcDefaultProfile />
        </S.DefaultProfileIcon>
        <S.ContentWrapper>
          <S.InfoBox>
            <S.NameLabel>{truncateText(nickname, 10)}</S.NameLabel>
            <S.Dot>•</S.Dot>
            <S.TitleLabel>{truncateText(name, 10)}</S.TitleLabel>
          </S.InfoBox>
          <S.MessageBox>
            <S.MessageLabel>{truncateText(last_chat, 10)}</S.MessageLabel>
            <S.Dot>•</S.Dot>
            <S.TimeLabel>{updated_at}</S.TimeLabel>
          </S.MessageBox>
        </S.ContentWrapper>
      </S.ChatPreivewWrapepr>
    </S.ChatPreviewContainer>
  );
};

export default ChatPreview;
