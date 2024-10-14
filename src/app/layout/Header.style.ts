import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.color.WHITE};
  color: ${({ theme }) => theme.color.WHITE};
  ${({ theme }) => theme.typo.SUBTITLE_20};
  border-bottom: 1px solid ${({ theme }) => theme.color.GRAY_30};
  user-select: none;
  width: 100%;
  height: 7.2rem;
  padding: 1.7rem 0;
`;

export const Logo = styled(Link)`
  grid-column: 1 / span 2;
  display: flex;
  align-items: center;
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const ProjectNavigator = styled(Link)`
  grid-column: 3 / span 1;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.color.BLACK_100};
`;

export const GrabbZoneNavigator = styled(Link)`
  grid-column: 4 / span 1;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.color.BLACK_100};
`;
export const LoginBox = styled.div`
  grid-column: 11 / span 2;
  align-items: center;
  justify-self: end;
`;

export const ProfileBox = styled.div`
  grid-column: 11 / span 2;
  display: flex;
  align-items: center;
  justify-self: end;
  gap: 0.2rem;
  color: ${({ theme }) => theme.color.PRIMARY_BLUE};
`;

export const GridWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(12, 8rem);
  column-gap: 2.4rem;
  max-width: 122.4rem;

  ${({ theme }) => theme.device.TABLET} {
    grid-template-columns: repeat(6, 1fr);
    column-gap: 2.4rem;
    margin: 2.4rem;
  }

  ${({ theme }) => theme.device.MOBILE} {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.6rem;
    margin: 4.444%;
  }
`;
