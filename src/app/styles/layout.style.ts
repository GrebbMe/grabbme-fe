import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: ${({ theme }) => theme.color.primaryBlue};
  ${({ theme }) => theme.typo.subtitleMedium};
  color: ${({ theme }) => theme.color.white};
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: ${({ theme }) => theme.color.primaryBlue};
  ${({ theme }) => theme.typo.title};
  color: ${({ theme }) => theme.color.white};
`;
