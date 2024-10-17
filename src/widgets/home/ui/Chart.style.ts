import styled from 'styled-components';

export const WrapperContainer = styled.div`
  width: 100vw;
  height: 44.4rem;
  background-color: ${({ theme }) => theme.color.BLUE_30};
  padding-top: 4rem;
  display: flex;
  justify-content: center;
`;

export const ChartContainer = styled.div`
  width: 122.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typo.SUBTITLE_20};
  color: ${({ theme }) => theme.color.BLACK_100};
`;

export const MainGraphContainer = styled.div`
  display: flex;
  gap: 2.3rem;
`;
