import styled from 'styled-components';

export const StackItemContainer = styled.div`
  padding: 0.4rem 0.8rem;
  border-radius: 0.4rem;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.WHITE};
  color: ${({ theme }) => theme.color.BLACK_80};
  ${({ theme }) => theme.typo.CAPTION_12};
  gap: 0.8rem;
`;
