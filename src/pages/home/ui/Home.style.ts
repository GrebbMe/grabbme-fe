import styled from 'styled-components';

export const HomeContainer = styled.div`
  /* grid-column: 1 / -1; */
  display: flex;
  flex-direction: column;
`;

export const SearchContainer = styled.div`
  margin: 2.4rem 0 4rem 0;
  display: flex;
  justify-content: center;
`;

export const AllStackContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8rem;
`;
export const Title = styled.h1`
  margin-top: 8rem;
  ${({ theme }) => theme.typo.TITLE};
  color: ${({ theme }) => theme.color.BLACK_100};
`;
export const TitleContainer = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: center;
  margin-bottom: 0;
`;
