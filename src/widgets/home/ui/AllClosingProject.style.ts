import styled from 'styled-components';

export const ClosingWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ClosingContainer = styled.div`
  width: 122.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 8rem;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typo.SUBTITLE_20};
  color: ${({ theme }) => theme.color.BLACK_100};
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 2.4rem;
`;
