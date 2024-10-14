import { useEffect, useState } from 'react';
import * as S from '@/app/layout/Header.style';
import { SocialLogin } from '@/features/auth';
import { ProfileIcon } from '@/shared/assets';
import logo from '@/shared/assets/image/logo.png';

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileImage, setProfileImage] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    //! 쿠키의 accessToken이 유효한지 확인 후, 로그인 상태 설정
  }, []);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  return (
    <S.HeaderContainer>
      <S.GridWrapper>
        <S.Logo to="#">
          <img src={logo} alt="Logo" />
        </S.Logo>
        <S.ProjectNavigator to="#">프로젝트</S.ProjectNavigator>
        <S.GrabbZoneNavigator to="#">그랩존</S.GrabbZoneNavigator>
        {isLoggedIn ? (
          <S.ProfileBox>
            {profileImage ? <img src={profileImage} /> : <ProfileIcon />}
            <span>{userName} 님</span>
          </S.ProfileBox>
        ) : (
          <S.LoginBox>
            <SocialLogin />
          </S.LoginBox>
        )}
      </S.GridWrapper>
    </S.HeaderContainer>
  );
};
