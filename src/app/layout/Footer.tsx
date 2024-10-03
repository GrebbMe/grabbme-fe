import { GridContainer, FooterContainer } from '@/app/layout';
import * as S from '@/app/layout/Footer.style';
import { LongGithubIcon, ProgrammersIcon } from '@/shared/assets';
import logo from '@/shared/assets/image/logo.png';

export const Footer = () => {
  return (
    <FooterContainer>
      <GridContainer>
        <S.LogoBox>
          <img src={logo}></img>
        </S.LogoBox>
        <S.TextLinkWrapper>
          <S.TextLink to="#">개인정보처리방침</S.TextLink> <S.TextLink to="#">이용약관</S.TextLink>
          <S.TextLink to="#">FAQ</S.TextLink>
        </S.TextLinkWrapper>
        <S.GithubLink to="#">
          <LongGithubIcon />
        </S.GithubLink>
        <S.ProgrammersLink to="#">
          <ProgrammersIcon />
        </S.ProgrammersLink>
        <S.CopyrightBox>ⓒ 2024. GrabbMe All rights reserved.</S.CopyrightBox>
      </GridContainer>
    </FooterContainer>
  );
};
