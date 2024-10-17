import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 28.8rem;
  height: 27.2rem;
  display: flex;
  grid-column: 1;
  margin-top: 6.4rem;
`;

export const MyPageContainer = styled.div`
  width: 80.8rem;
  display: flex;
  flex-direction: column;
  grid-column: 5;
  margin-top: 6.4rem;
  margin-bottom: 34.6rem;
`;

export const DivideLine = styled.div`
  width: 80.8rem;
  height: 0.1rem;
  background-color: ${({ theme }) => theme.color.GRAY_30};
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 80.8rem;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;
`;

export const TitleLabel = styled.span`
  ${({ theme }) => theme.typo.SUBTITLE_20};
  color: ${({ theme }) => theme.color.BLACK_100};
`;
