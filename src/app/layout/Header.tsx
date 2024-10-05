import { useState } from 'react';
import * as S from '@/app/layout/Header.style';
import { ProfileIcon } from '@/shared/assets';
import logo from '@/shared/assets/image/logo.png';
import { Button } from '@/shared/ui';

const USER_NAME = '그랩미';

export const Header = () => {
  const [isLoggendIn, setIsLoggedIn] = useState(false);
  const [profileImage, setProfileImage] = useState('');
  const [userName, setUserName] = useState('');

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  return (
    <S.HeaderContainer>
      <S.GridContainer>
        <S.Logo to="#">
          <img src={logo} alt="Logo" />
        </S.Logo>
        <S.ProjectNavigator to="#">프로젝트</S.ProjectNavigator>
        <S.GrabbZoneNavigator to="#">그랩존</S.GrabbZoneNavigator>

        {isLoggendIn ? (
          <S.ProfileBox>
            {profileImage ? <img src={profileImage} /> : <ProfileIcon />}
            <div>{USER_NAME} 님</div>
          </S.ProfileBox>
        ) : (
          <S.LoginBox>
            <Button onClick={handleLoginClick}>로그인</Button>
          </S.LoginBox>
        )}
      </S.GridContainer>
    </S.HeaderContainer>
  );
};
