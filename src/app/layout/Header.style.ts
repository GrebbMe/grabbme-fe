import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

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
