import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const LogoBox = styled.div`
  grid-column: 1 / span 2;
  display: flex;
  align-items: center;
  margin-top: 4.1rem;
`;
export const TextLinkWrapper = styled.div`
  grid-row: 2;
  grid-column: 1 / span 3;
  display: flex;
  align-items: center;
  column-gap: 3.2rem;
  margin-top: 3.2rem;
`;
export const TextLink = styled(Link)`
  color: ${({ theme }) => theme.color.BLACK_80};
  ${({ theme }) => theme.typo.SUBTITLE_14};
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: underline;
    color: ${({ theme }) => theme.color.PRIMARY_BLUE};
  }
`;
export const GithubLink = styled(Link)`
  margin-top: 3.2rem;
  grid-row: 2;
  grid-column: 12 / span 1;
  justify-self: end;
  display: flex;
  align-items: center;
`;
export const ProgrammersLink = styled(Link)`
  margin-top: 3.2rem;
  grid-row: 2;
  display: flex;
  align-items: center;
  grid-column: 10 / span 2;
  justify-self: end;
`;

export const CopyrightBox = styled.div`
  grid-row: 3;
  grid-column: 1 / 4;
  color: ${({ theme }) => theme.color.GRAY_50};
  margin-top: 2.4rem;
  ${({ theme }) => theme.typo.CAPTION_12};
`;
