import { useState } from 'react';
import * as S from '@/app/layout/Header.style';
import { ProfileIcon } from '@/shared/assets';
import logo from '@/shared/assets/image/logo.png';
import { Button } from '@/shared/ui';

const USER_NAME = '그랩미'; // TODO: 로그인 시 사용자 이름으로 변경 , 임시 값
const PROJECT_NAVIGATOR_TEXT = '프로젝트';
const GRABB_ZONE_NAVIGATOR_TEXT = '그랩존';

export const Header = () => {
  const [isLoggendIn, setIsLoggedIn] = useState(false);
  const [profileImage, setProfileImage] = useState('');
  const [userName, setUserName] = useState('');

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  return (
    <S.HeaderContainer>
      <S.GridWrapper>
        <S.Logo to="#">
          <img src={logo} alt="Logo" />
        </S.Logo>
        <S.ProjectNavigator to="#">{PROJECT_NAVIGATOR_TEXT}</S.ProjectNavigator>
        <S.GrabbZoneNavigator to="#">{GRABB_ZONE_NAVIGATOR_TEXT}</S.GrabbZoneNavigator>
        {isLoggendIn ? (
          <S.ProfileBox>
            {profileImage ? <img src={profileImage} /> : <ProfileIcon />}
            <span>{USER_NAME} 님</span>
          </S.ProfileBox>
        ) : (
          <S.LoginBox></S.LoginBox>
        )}
      </S.GridWrapper>
    </S.HeaderContainer>
  );
};
