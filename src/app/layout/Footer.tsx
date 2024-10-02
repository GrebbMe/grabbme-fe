import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { GridContainer } from '@/app/layout';
import { FooterContainer } from '@/app/layout';
import github from '@/shared/assets/githublong.png';
import logo from '@/shared/assets/logo.png';
import programmers from '@/shared/assets/programmers.png';
const LogoBox = styled.div`
  grid-column: 1 / span 2;
  display: flex;
  align-items: center;
  margin-top: 4.1rem;
`;
const TextLinkWrapper = styled.div`
  grid-row: 2;
  grid-column: 1 / span 3;
  display: flex;
  align-items: center;
  column-gap: 3.2rem;
  margin-top: 3.2rem;
`;
const TextLink = styled(Link)`
  color: ${({ theme }) => theme.color.BLACK_80};
  ${({ theme }) => theme.typo.SUBTITLE_14};
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: underline;
    color: ${({ theme }) => theme.color.PRIMARY_BLUE};
  }
`;
const GithubLink = styled(Link)`
  margin-top: 3.2rem;
  grid-row: 2;
  grid-column: 12 / span 1;
  justify-self: end;
`;
const ProgrammersLink = styled(Link)`
  margin-top: 3.2rem;
  grid-row: 2;
  grid-column: 10 / span 2;
  justify-self: end;
`;
const StyledImage = styled.img`
  display: block;
`;
const CopyrightBox = styled.div`
  grid-row: 3;
  grid-column: 1 / 4;
  color: ${({ theme }) => theme.color.GRAY_50};
  margin-top: 2.4rem;
  ${({ theme }) => theme.typo.CAPTION_12};
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <GridContainer>
        <LogoBox>
          <img src={logo}></img>
        </LogoBox>
        <TextLinkWrapper>
          <TextLink to="#">개인정보처리방침</TextLink> <TextLink to="#">이용약관</TextLink>
          <TextLink to="#">FAQ</TextLink>
        </TextLinkWrapper>
        <GithubLink to="#">
          <StyledImage src={github} />
        </GithubLink>
        <ProgrammersLink to="#">
          <StyledImage src={programmers} />
        </ProgrammersLink>
        <CopyrightBox>ⓒ 2024. GrabbMe All rights reserved.</CopyrightBox>
      </GridContainer>
    </FooterContainer>
  );
};
