import { useState } from 'react';
import { GridContainer, HeaderContainer } from '@/app/layout';
import {
  GrabbZoneNavigator,
  LoginBox,
  Logo,
  ProfileBox,
  ProjectNavigator,
} from '@/app/layout/Header.style';
import GithubIcon from '@/shared/assets/github.svg?react';
import logo from '@/shared/assets/logo.png';
import ProfileIcon from '@/shared/assets/profile.svg?react';
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
    <HeaderContainer>
      <GridContainer>
        <Logo to="#">
          <img src={logo} alt="Logo" />
        </Logo>
        <ProjectNavigator to="#">프로젝트</ProjectNavigator>
        <GrabbZoneNavigator to="#">그랩존</GrabbZoneNavigator>

        {isLoggendIn ? (
          <ProfileBox>
            {<ProfileIcon /> || <img src={profileImage} alt="Profile" />}
            <div>{USER_NAME} 님</div>
          </ProfileBox>
        ) : (
          <LoginBox>
            <Button
              state="default"
              icon={<GithubIcon />}
              size="10.8rem"
              content="로그인"
              onClick={handleLoginClick}
            />
          </LoginBox>
        )}
      </GridContainer>
    </HeaderContainer>
  );
};
