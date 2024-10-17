import styled from 'styled-components';

export const Container = styled.div`
  width: 84rem;
  height: 28rem;
  border: 0.1rem solid ${({ theme }) => theme.color.BLUE_50};
  background-color: ${({ theme }) => theme.color.WHITE};
  border-radius: 2rem;
  padding: 2.4rem 2.4rem 0 2.4rem;
  display: flex;
  flex-direction: column;
`;

export const ChartContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TopStackContainer = styled.div`
  margin: 1.6rem 2.4rem 2.2rem 0;
  padding-left: 4.8rem;
  border-left: 0.1rem solid ${({ theme }) => theme.color.BLUE_30};
`;
