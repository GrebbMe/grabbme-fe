import * as S from './UserProfile.style';
import { IcDefaultProfile } from '@/shared/assets';
interface UserProfileProps {
  profileImgUrl?: string;
  nickname: string;
  email: string;
  onLogout: () => void;
}

const UserProfile = ({ profileImgUrl, nickname, email, onLogout }: UserProfileProps) => {
  return (
    <S.Container>
      {profileImgUrl ? (
        <S.ProfileImg src={profileImgUrl} alt="프로필 이미지" />
      ) : (
        <S.ProfileIcon>
          <IcDefaultProfile />
        </S.ProfileIcon>
      )}
      <S.InfoWrapper>
        <S.InfoBox>
          <S.NameLabel>{nickname}</S.NameLabel>
          <S.EmailLabel>{email}</S.EmailLabel>
        </S.InfoBox>
        <S.SignoutButton onClick={onLogout}>회원 탈퇴</S.SignoutButton>
      </S.InfoWrapper>
    </S.Container>
  );
};

export default UserProfile;
